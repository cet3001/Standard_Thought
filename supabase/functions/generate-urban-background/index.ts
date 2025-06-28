
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { prompt } = await req.json()
    
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured')
    }

    console.log('Generating urban background with prompt:', prompt)

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-image-1',
        prompt: `${prompt}, high quality, cinematic, urban photography style, street photography aesthetic, raw and authentic city vibes`,
        n: 1,
        size: '1024x1024',
        quality: 'high',
        style: 'natural',
        output_format: 'webp'
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.data && data.data[0]) {
      // OpenAI returns base64 data for gpt-image-1
      const imageData = data.data[0].b64_json || data.data[0].url
      const imageUrl = imageData.startsWith('data:') ? imageData : `data:image/webp;base64,${imageData}`
      
      console.log('Successfully generated urban background image')
      
      return new Response(
        JSON.stringify({ imageUrl }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } else {
      throw new Error('No image data received from OpenAI')
    }
    
  } catch (error) {
    console.error('Error generating urban background:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate urban background', 
        details: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 500 
      }
    )
  }
})
