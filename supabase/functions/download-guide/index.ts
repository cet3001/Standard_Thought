
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { guide_name, user_email } = await req.json()

    if (!guide_name || !user_email) {
      throw new Error('Guide name and user email are required')
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get the file from storage
    const { data: fileData, error: downloadError } = await supabase.storage
      .from('guides')
      .download(guide_name)

    if (downloadError) {
      console.error('Error downloading guide:', downloadError)
      throw new Error('Guide not found')
    }

    // Track the download
    const { error: trackingError } = await supabase
      .from('guide_downloads')
      .insert({
        user_email,
        guide_name,
        file_path: guide_name,
        user_agent: req.headers.get('user-agent'),
        ip_address: req.headers.get('x-forwarded-for') || 'unknown'
      })

    if (trackingError) {
      console.error('Error tracking download:', trackingError)
      // Don't fail the download if tracking fails
    }

    // Return the file
    const arrayBuffer = await fileData.arrayBuffer()
    
    return new Response(arrayBuffer, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${guide_name}"`,
      },
    })

  } catch (error) {
    console.error('Download guide error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
