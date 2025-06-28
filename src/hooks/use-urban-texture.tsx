
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

export const useUrbanTexture = () => {
  const [textureImageUrl, setTextureImageUrl] = useState<string>("");
  const [imageGenerationStatus, setImageGenerationStatus] = useState<string>("idle");

  console.log('useUrbanTexture - textureImageUrl:', textureImageUrl);
  console.log('useUrbanTexture - imageGenerationStatus:', imageGenerationStatus);

  // Check localStorage cache first
  useEffect(() => {
    const cachedImageUrl = localStorage.getItem('urban-texture-cache');
    const cacheTimestamp = localStorage.getItem('urban-texture-timestamp');
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

    if (cachedImageUrl && cacheTimestamp) {
      const isExpired = Date.now() - parseInt(cacheTimestamp) > CACHE_DURATION;
      if (!isExpired) {
        console.log("🔥 Using cached urban texture:", cachedImageUrl);
        setTextureImageUrl(cachedImageUrl);
        setImageGenerationStatus("cached");
        return;
      } else {
        console.log("⏰ Cache expired, generating new texture...");
        localStorage.removeItem('urban-texture-cache');
        localStorage.removeItem('urban-texture-timestamp');
      }
    }

    generateUrbanTexture();
  }, []);

  const generateUrbanTexture = async (retryCount = 0) => {
    const MAX_RETRIES = 2;
    
    try {
      console.log(`🎨 Starting urban texture generation (attempt ${retryCount + 1})...`);
      setImageGenerationStatus("generating");
      
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: {
          prompt: "Ultra-realistic weathered urban brick wall texture, dark burgundy and brown aged bricks with deep mortar lines, street graffiti stains, rust streaks, concrete dust patches, peeling paint, urban decay, gritty inner city aesthetic, high contrast shadows, worn industrial texture, close-up detailed pattern, street photography style, natural lighting, seamless tileable pattern",
          size: "1024x1024",
          quality: "hd",
          style: "natural"
        }
      });

      console.log("📊 Supabase function response:", { data, error });

      if (error) {
        console.error("❌ Supabase function error:", error);
        
        if (retryCount < MAX_RETRIES) {
          console.log(`🔄 Retrying in 2 seconds... (${retryCount + 1}/${MAX_RETRIES})`);
          setTimeout(() => generateUrbanTexture(retryCount + 1), 2000);
          return;
        }
        
        console.log("💀 All retries failed, using fallback texture");
        await useFallbackTexture();
        return;
      }

      if (data && data.imageUrl) {
        localStorage.setItem('urban-texture-cache', data.imageUrl);
        localStorage.setItem('urban-texture-timestamp', Date.now().toString());
        
        setTextureImageUrl(data.imageUrl);
        setImageGenerationStatus("success");
        console.log("✅ Urban texture generated and cached:", data.imageUrl);
      } else {
        console.log("⚠️ No image URL returned from function");
        
        if (retryCount < MAX_RETRIES) {
          setTimeout(() => generateUrbanTexture(retryCount + 1), 2000);
        } else {
          await useFallbackTexture();
        }
      }
    } catch (error) {
      console.error("❌ Failed to generate urban texture:", error);
      
      if (retryCount < MAX_RETRIES) {
        setTimeout(() => generateUrbanTexture(retryCount + 1), 2000);
      } else {
        await useFallbackTexture();
      }
    }
  };

  const useFallbackTexture = async () => {
    console.log("🔧 Attempting fallback texture strategies...");
    setImageGenerationStatus("fallback");
    
    try {
      const { data: storageList } = await supabase.storage
        .from('public')
        .list('textures');
      
      if (storageList && storageList.length > 0) {
        const { data: publicUrl } = supabase.storage
          .from('public')
          .getPublicUrl(`textures/${storageList[0].name}`);
        
        if (publicUrl.publicUrl) {
          console.log("🏗️ Using pre-uploaded fallback texture:", publicUrl.publicUrl);
          setTextureImageUrl(publicUrl.publicUrl);
          setImageGenerationStatus("storage-fallback");
          return;
        }
      }
    } catch (storageError) {
      console.log("⚠️ Storage fallback failed:", storageError);
    }
    
    const unsplashFallback = "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1024&h=1024&fit=crop&crop=center";
    console.log("🌆 Using Unsplash urban texture fallback");
    setTextureImageUrl(unsplashFallback);
    setImageGenerationStatus("unsplash-fallback");
  };

  return {
    textureImageUrl,
    imageGenerationStatus,
    regenerateTexture: () => generateUrbanTexture(0)
  };
};
