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

    // Generate JWT token for Google API authentication
    const now = Math.floor(Date.now() / 1000)
    const payload = {
      iss: credentials.client_email,
      scope: 'https://www.googleapis.com/auth/webmasters',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600
    }

    // Create JWT header and payload
    const header = { alg: 'RS256', typ: 'JWT' }
    const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    
    // For demo purposes - in production you'd need proper JWT signing with the private key
    // This is a simplified version that shows the structure
    console.log('Would authenticate with Google API using service account:', credentials.client_email)
    
    const baseUrl = 'https://www.standardthought.com'
    const siteUrl = `sc-domain:standardthought.com` // Search Console property format
    
    const results = []
    
    for (const url of urls) {
      const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`
      
      if (action === 'inspect') {
        // URL inspection - check indexing status
        console.log(`Inspecting URL: ${fullUrl}`)
        
        // Mock response for demonstration
        results.push({
          url: fullUrl,
          inspectionResult: {
            indexStatusResult: {
              verdict: 'PASS', // This would come from actual API
              coverageState: 'Submitted and indexed'
            },
            indexabilityResult: {
              verdict: 'PASS'
            }
          }
        })
      } else if (action === 'submit') {
        // Submit URL for indexing
        console.log(`Submitting URL for indexing: ${fullUrl}`)
        
        // Mock response for demonstration
        results.push({
          url: fullUrl,
          submissionResult: {
            status: 'SUCCESS',
            message: 'URL submitted for indexing'
          }
        })
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        action,
        processed: urls.length,
        results,
        note: 'This is a demo implementation. Full Google Search Console API integration requires proper JWT signing with private key.'
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