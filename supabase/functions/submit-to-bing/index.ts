import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BingSubmissionRequest {
  urls: string[]
}

interface BingApiRequest {
  siteUrl: string
  urlList: string[]
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const BING_API_KEY = Deno.env.get('BING_API_KEY')
    
    if (!BING_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Bing API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { urls }: BingSubmissionRequest = await req.json()
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(
        JSON.stringify({ error: 'URLs array is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const baseUrl = 'https://www.standardthought.com'
    
    // Prepare the request for Bing API
    const bingRequest: BingApiRequest = {
      siteUrl: baseUrl,
      urlList: urls.map(url => url.startsWith('http') ? url : `${baseUrl}${url}`)
    }

    console.log('Submitting URLs to Bing:', bingRequest)

    // Submit to Bing IndexNow API
    const bingResponse = await fetch(
      `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(bingRequest)
      }
    )

    const responseText = await bingResponse.text()
    console.log('Bing API response:', responseText)

    if (!bingResponse.ok) {
      console.error('Bing API error:', bingResponse.status, responseText)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to submit URLs to Bing',
          status: bingResponse.status,
          details: responseText
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    let bingResult
    try {
      bingResult = JSON.parse(responseText)
    } catch {
      bingResult = { raw: responseText }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        submitted: urls.length,
        bingResponse: bingResult
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in submit-to-bing function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})