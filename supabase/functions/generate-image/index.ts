
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { CORS_HEADERS, DEFAULT_CONFIG } from './constants.ts';
import { ImageGenerationRequest, ModelConfig } from './types.ts';
import { 
  generateWithGptImage1, 
  generateWithDalle3, 
  generateWithDalle2 
} from './image-generators.ts';
import { 
  createBillingLimitResponse,
  createAllModelsFailedResponse,
  createApiErrorResponse,
  createUnexpectedErrorResponse
} from './error-handlers.ts';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS_HEADERS });
  }

  try {
    console.log("🔑 Checking API key availability...");
    if (!openAIApiKey) {
      console.error("❌ OPENAI_API_KEY environment variable is not set");
      return new Response(JSON.stringify({ error: 'OpenAI API key not configured' }), {
        status: 500,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }
    console.log("✅ API key is available (length:", openAIApiKey.length, ")");

    const requestData: ImageGenerationRequest = await req.json();
    const { 
      prompt, 
      size = DEFAULT_CONFIG.size, 
      quality = DEFAULT_CONFIG.quality, 
      style = DEFAULT_CONFIG.style 
    } = requestData;

    console.log("📝 Request details:", { prompt, size, quality, style });

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt is required' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const config: ModelConfig = { model: '', prompt, size, quality, style };

    // Try gpt-image-1 first
    const gptResult = await generateWithGptImage1(openAIApiKey, config);
    if (gptResult.success && gptResult.data) {
      return new Response(JSON.stringify(gptResult.data), {
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    // Check for billing limit specifically
    if (gptResult.error?.error?.code === 'billing_hard_limit_reached') {
      return createBillingLimitResponse();
    }

    // Try DALL-E 3
    const dalle3Result = await generateWithDalle3(openAIApiKey, config);
    if (dalle3Result.success && dalle3Result.data) {
      return new Response(JSON.stringify(dalle3Result.data), {
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    // If DALL-E 3 fails with user error, try DALL-E 2
    if (dalle3Result.error?.error?.type === 'image_generation_user_error') {
      console.log("⚠️ DALL-E 3 not available, trying DALL-E 2 fallback...");
      
      const dalle2Result = await generateWithDalle2(openAIApiKey, config);
      if (dalle2Result.success && dalle2Result.data) {
        return new Response(JSON.stringify(dalle2Result.data), {
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        });
      }

      // All models failed
      return createAllModelsFailedResponse({
        gpt_image_error: gptResult.error,
        dalle3_error: dalle3Result.error,
        dalle2_error: dalle2Result.error
      });
    }

    // Handle other DALL-E 3 errors
    console.error("❌ DALL-E 3 Error:", dalle3Result.error);
    return createApiErrorResponse(dalle3Result.error, 500);

  } catch (error) {
    return createUnexpectedErrorResponse(error);
  }
});
