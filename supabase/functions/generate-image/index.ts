
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("🔑 Checking API key availability...");
    if (!openAIApiKey) {
      console.error("❌ OPENAI_API_KEY environment variable is not set");
      return new Response(JSON.stringify({ error: 'OpenAI API key not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    console.log("✅ API key is available (length:", openAIApiKey.length, ")");

    const { prompt, size = "1024x1024", quality = "standard", style = "vivid" } = await req.json();
    console.log("📝 Request details:", { prompt, size, quality, style });

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log("🎨 Making request to OpenAI DALL-E API...");
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: size,
        quality: quality,
        style: style,
      }),
    });

    console.log("📊 OpenAI Response Status:", response.status);
    console.log("📊 OpenAI Response Headers:", Object.fromEntries(response.headers.entries()));

    const data = await response.json();
    console.log("📊 OpenAI Response Data:", JSON.stringify(data, null, 2));
    
    if (!response.ok) {
      console.error("❌ OpenAI API Error:", data);
      
      // Return detailed error information
      const errorMessage = data.error?.message || `OpenAI API returned status ${response.status}`;
      const errorType = data.error?.type || 'unknown';
      const errorCode = data.error?.code || 'unknown';
      
      return new Response(JSON.stringify({ 
        error: `OpenAI API Error: ${errorMessage}`,
        details: {
          status: response.status,
          type: errorType,
          code: errorCode,
          raw_error: data
        }
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!data.data || !data.data[0] || !data.data[0].url) {
      console.error("❌ Unexpected response format:", data);
      return new Response(JSON.stringify({ 
        error: 'Unexpected response format from OpenAI',
        details: data
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log("✅ Image generated successfully:", data.data[0].url);

    return new Response(JSON.stringify({ 
      imageUrl: data.data[0].url,
      revisedPrompt: data.data[0].revised_prompt 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Unexpected error in generate-image function:', error);
    return new Response(JSON.stringify({ 
      error: 'Unexpected server error',
      details: error.message,
      stack: error.stack
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
