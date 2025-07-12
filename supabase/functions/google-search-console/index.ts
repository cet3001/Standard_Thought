import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface GoogleSearchConsoleRequest {
  urls: string[]
  action: 'inspect' | 'submit' // inspect URL status or submit for indexing
}

interface GoogleApiCredentials {
  client_email: string
  private_key: string
  project_id: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const GOOGLE_SERVICE_ACCOUNT = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_JSON')
    
    if (!GOOGLE_SERVICE_ACCOUNT) {
      return new Response(
        JSON.stringify({ error: 'Google Service Account credentials not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { urls, action = 'inspect' }: GoogleSearchConsoleRequest = await req.json()
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(
        JSON.stringify({ error: 'URLs array is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    let credentials: GoogleApiCredentials
    try {
      credentials = JSON.parse(GOOGLE_SERVICE_ACCOUNT)
    } catch (error) {
      console.error('Failed to parse Google Service Account JSON:', error)
      return new Response(
        JSON.stringify({ error: 'Invalid Google Service Account JSON format' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get access token using service account
    const accessToken = await getAccessToken(credentials)
    
    const baseUrl = 'https://www.standardthought.com'
    const siteUrl = `sc-domain:standardthought.com` // Search Console property format
    
    const results = []
    
    for (const url of urls) {
      const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`
      
      if (action === 'inspect') {
        // URL inspection - check indexing status
        console.log(`Inspecting URL: ${fullUrl}`)
        
        try {
          const inspectionResponse = await fetch(
            `https://searchconsole.googleapis.com/v1/urlInspection/index:inspect`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                inspectionUrl: fullUrl,
                siteUrl: siteUrl
              })
            }
          )
          
          const inspectionData = await inspectionResponse.json()
          
          if (inspectionResponse.ok) {
            results.push({
              url: fullUrl,
              inspectionResult: inspectionData.inspectionResult
            })
          } else {
            results.push({
              url: fullUrl,
              error: inspectionData.error || 'Failed to inspect URL'
            })
          }
        } catch (error) {
          console.error(`Error inspecting ${fullUrl}:`, error)
          results.push({
            url: fullUrl,
            error: 'Failed to inspect URL'
          })
        }
      } else if (action === 'submit') {
        // Submit URL for indexing
        console.log(`Submitting URL for indexing: ${fullUrl}`)
        
        try {
          const submissionResponse = await fetch(
            `https://indexing.googleapis.com/v3/urlNotifications:publish`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                url: fullUrl,
                type: 'URL_UPDATED'
              })
            }
          )
          
          const submissionData = await submissionResponse.json()
          
          if (submissionResponse.ok) {
            results.push({
              url: fullUrl,
              submissionResult: {
                status: 'SUCCESS',
                notifyTime: submissionData.notifyTime
              }
            })
          } else {
            results.push({
              url: fullUrl,
              error: submissionData.error || 'Failed to submit URL'
            })
          }
        } catch (error) {
          console.error(`Error submitting ${fullUrl}:`, error)
          results.push({
            url: fullUrl,
            error: 'Failed to submit URL'
          })
        }
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        action,
        processed: urls.length,
        results
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in google-search-console function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

// Helper function to get Google API access token
async function getAccessToken(credentials: GoogleApiCredentials): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  
  // Create JWT payload
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  }
  
  // Create JWT header
  const header = { alg: 'RS256', typ: 'JWT' }
  
  // Encode header and payload
  const encodedHeader = btoa(JSON.stringify(header))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  const encodedPayload = btoa(JSON.stringify(payload))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  
  // Import private key
  const privateKeyPem = credentials.private_key
  const privateKey = await crypto.subtle.importKey(
    'pkcs8',
    str2ab(privateKeyPem.replace(/-----BEGIN PRIVATE KEY-----|\n|-----END PRIVATE KEY-----/g, '')),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  )
  
  // Sign the JWT
  const signatureInput = `${encodedHeader}.${encodedPayload}`
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    new TextEncoder().encode(signatureInput)
  )
  
  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  
  const jwt = `${encodedHeader}.${encodedPayload}.${encodedSignature}`
  
  // Exchange JWT for access token
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  })
  
  const tokenData = await tokenResponse.json()
  
  if (!tokenResponse.ok) {
    throw new Error(`Failed to get access token: ${tokenData.error}`)
  }
  
  return tokenData.access_token
}

// Helper function to convert base64 string to ArrayBuffer
function str2ab(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length)
  const bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}