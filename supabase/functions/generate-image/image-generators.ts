
import { CORS_HEADERS, FALLBACK_IMAGE_URL } from './constants.ts';
import { ModelConfig, ImageGenerationResponse, ErrorResponse } from './types.ts';

export async function generateWithGptImage1(
  apiKey: string, 
  config: ModelConfig
): Promise<{ success: boolean; data?: ImageGenerationResponse; error?: any }> {
  console.log("🎨 Trying gpt-image-1...");
  
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-image-1',
        prompt: config.prompt,
        size: config.size,
        quality: config.quality === 'hd' ? 'high' : 'auto',
        output_format: 'png',
      }),
    });

    console.log("📊 gpt-image-1 Response Status:", response.status);
    const data = await response.json();
    console.log("📊 gpt-image-1 Response Data:", JSON.stringify(data, null, 2));

    if (response.ok && data.data && data.data[0]) {
      const imageData = data.data[0];
      console.log("✅ gpt-image-1 image generated successfully");
      
      const imageUrl = imageData.b64_json ? `data:image/png;base64,${imageData.b64_json}` : imageData.url;
      
      return {
        success: true,
        data: {
          imageUrl: imageUrl,
          revisedPrompt: imageData.revised_prompt || config.prompt,
          model: 'gpt-image-1'
        }
      };
    }

    return { success: false, error: data };
  } catch (error) {
    console.error("❌ gpt-image-1 Error:", error);
    return { success: false, error };
  }
}

export async function generateWithDalle3(
  apiKey: string, 
  config: ModelConfig
): Promise<{ success: boolean; data?: ImageGenerationResponse; error?: any }> {
  console.log("🎨 Trying DALL-E 3...");
  
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: config.prompt,
        n: 1,
        size: config.size,
        quality: config.quality,
        style: config.style,
      }),
    });

    console.log("📊 DALL-E 3 Response Status:", response.status);
    const data = await response.json();
    console.log("📊 DALL-E 3 Response Data:", JSON.stringify(data, null, 2));

    if (response.ok && data.data && data.data[0] && data.data[0].url) {
      console.log("✅ DALL-E 3 image generated successfully:", data.data[0].url);
      return {
        success: true,
        data: {
          imageUrl: data.data[0].url,
          revisedPrompt: data.data[0].revised_prompt,
          model: 'dall-e-3'
        }
      };
    }

    return { success: false, error: data };
  } catch (error) {
    console.error("❌ DALL-E 3 Error:", error);
    return { success: false, error };
  }
}

export async function generateWithDalle2(
  apiKey: string, 
  config: ModelConfig
): Promise<{ success: boolean; data?: ImageGenerationResponse; error?: any }> {
  console.log("🎨 Trying DALL-E 2...");
  
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-2',
        prompt: config.prompt,
        n: 1,
        size: config.size === "1024x1024" ? "1024x1024" : "512x512",
      }),
    });

    console.log("📊 DALL-E 2 Response Status:", response.status);
    const data = await response.json();
    console.log("📊 DALL-E 2 Response Data:", JSON.stringify(data, null, 2));

    if (response.ok && data.data && data.data[0] && data.data[0].url) {
      console.log("✅ DALL-E 2 image generated successfully:", data.data[0].url);
      return {
        success: true,
        data: {
          imageUrl: data.data[0].url,
          revisedPrompt: data.data[0].revised_prompt || config.prompt,
          model: 'dall-e-2'
        }
      };
    }

    return { success: false, error: data };
  } catch (error) {
    console.error("❌ DALL-E 2 Error:", error);
    return { success: false, error };
  }
}
