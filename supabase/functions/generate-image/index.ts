

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

    // Try gpt-image-1 first (newest model)
    console.log("🎨 Trying gpt-image-1 first...");
    const gptImageResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-image-1',
        prompt: prompt,
        size: size,
        quality: quality === 'hd' ? 'high' : 'auto',
        output_format: 'png',
      }),
    });

    console.log("📊 gpt-image-1 Response Status:", gptImageResponse.status);
    const gptImageData = await gptImageResponse.json();
    console.log("📊 gpt-image-1 Response Data:", JSON.stringify(gptImageData, null, 2));

    // If gpt-image-1 works, return the result
    if (gptImageResponse.ok && gptImageData.data && gptImageData.data[0]) {
      const imageData = gptImageData.data[0];
      console.log("✅ gpt-image-1 image generated successfully");
      
      // gpt-image-1 returns base64, convert to data URL
      const imageUrl = imageData.b64_json ? `data:image/png;base64,${imageData.b64_json}` : imageData.url;
      
      return new Response(JSON.stringify({ 
        imageUrl: imageUrl,
        revisedPrompt: imageData.revised_prompt || prompt,
        model: 'gpt-image-1'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // First try DALL-E 3
    console.log("🎨 Trying DALL-E 3 fallback...");
    const dalle3Response = await fetch('https://api.openai.com/v1/images/generations', {
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

    console.log("📊 DALL-E 3 Response Status:", dalle3Response.status);
    const dalle3Data = await dalle3Response.json();
    console.log("📊 DALL-E 3 Response Data:", JSON.stringify(dalle3Data, null, 2));

    // If DALL-E 3 works, return the result
    if (dalle3Response.ok && dalle3Data.data && dalle3Data.data[0] && dalle3Data.data[0].url) {
      console.log("✅ DALL-E 3 image generated successfully:", dalle3Data.data[0].url);
      return new Response(JSON.stringify({ 
        imageUrl: dalle3Data.data[0].url,
        revisedPrompt: dalle3Data.data[0].revised_prompt,
        model: 'dall-e-3'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // If DALL-E 3 fails with user error, try DALL-E 2
    if (dalle3Data.error?.type === 'image_generation_user_error') {
      console.log("⚠️ DALL-E 3 not available, trying DALL-E 2 fallback...");
      
      const dalle2Response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'dall-e-2',
          prompt: prompt,
          n: 1,
          size: size === "1024x1024" ? "1024x1024" : "512x512", // DALL-E 2 has limited sizes
        }),
      });

      console.log("📊 DALL-E 2 Response Status:", dalle2Response.status);
      const dalle2Data = await dalle2Response.json();
      console.log("📊 DALL-E 2 Response Data:", JSON.stringify(dalle2Data, null, 2));

      if (dalle2Response.ok && dalle2Data.data && dalle2Data.data[0] && dalle2Data.data[0].url) {
        console.log("✅ DALL-E 2 image generated successfully:", dalle2Data.data[0].url);
        return new Response(JSON.stringify({ 
          imageUrl: dalle2Data.data[0].url,
          revisedPrompt: dalle2Data.data[0].revised_prompt || prompt,
          model: 'dall-e-2'
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // If DALL-E 2 also fails, return comprehensive error
      console.error("❌ All models failed:", { gptImageData, dalle3Data, dalle2Data });
      return new Response(JSON.stringify({ 
        error: 'All image generation models failed',
        details: {
          gpt_image_error: gptImageData,
          dalle3_error: dalle3Data,
          dalle2_error: dalle2Data,
          message: 'Your OpenAI account may not have image generation access enabled, or there may be a temporary issue with OpenAI\'s image generation service. Please check your OpenAI account settings and try again.'
        }
      }), {
        status: 402,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Handle other DALL-E 3 errors
    console.error("❌ DALL-E 3 Error:", dalle3Data);
    const errorMessage = dalle3Data.error?.message || `OpenAI API returned status ${dalle3Response.status}`;
    const errorType = dalle3Data.error?.type || 'unknown';
    const errorCode = dalle3Data.error?.code || 'unknown';
    
    return new Response(JSON.stringify({ 
      error: `OpenAI API Error: ${errorMessage}`,
      details: {
        status: dalle3Response.status,
        type: errorType,
        code: errorCode,
        raw_error: dalle3Data
      }
    }), {
      status: dalle3Response.status,
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

