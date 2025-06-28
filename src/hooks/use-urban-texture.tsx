
import { useState, useEffect } from 'react';

// Curated urban-style images from Unsplash
const URBAN_IMAGES = [
  "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1024&h=1024&fit=crop&crop=center", // grayscale building low angle
  "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1024&h=1024&fit=crop&crop=center", // gray building daytime
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1024&h=1024&fit=crop&crop=center", // white concrete building
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1024&h=1024&fit=crop&crop=center", // concrete building daytime
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1024&h=1024&fit=crop&crop=center", // glass building bottom view
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1024&h=1024&fit=crop&crop=center", // worms eye view buildings
  "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1024&h=1024&fit=crop&crop=center", // low angle building
  "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=1024&h=1024&fit=crop&crop=center", // white concrete building
  "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1024&h=1024&fit=crop&crop=center", // low angle building photography
];

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
        console.log("⏰ Cache expired, selecting new urban texture...");
        localStorage.removeItem('urban-texture-cache');
        localStorage.removeItem('urban-texture-timestamp');
      }
    }

    selectUrbanTexture();
  }, []);

  const selectUrbanTexture = () => {
    try {
      console.log("🏙️ Selecting urban texture from Unsplash collection...");
      setImageGenerationStatus("selecting");
      
      // Select a random urban image from our curated collection
      const randomIndex = Math.floor(Math.random() * URBAN_IMAGES.length);
      const selectedImage = URBAN_IMAGES[randomIndex];
      
      // Cache the selected image
      localStorage.setItem('urban-texture-cache', selectedImage);
      localStorage.setItem('urban-texture-timestamp', Date.now().toString());
      
      setTextureImageUrl(selectedImage);
      setImageGenerationStatus("success");
      console.log("✅ Urban texture selected from Unsplash:", selectedImage);
      
    } catch (error) {
      console.error("❌ Failed to select urban texture:", error);
      
      // Use first image as fallback
      const fallbackImage = URBAN_IMAGES[0];
      console.log("🏗️ Using fallback urban texture:", fallbackImage);
      setTextureImageUrl(fallbackImage);
      setImageGenerationStatus("fallback");
    }
  };

  return {
    textureImageUrl,
    imageGenerationStatus,
    regenerateTexture: () => selectUrbanTexture()
  };
};
