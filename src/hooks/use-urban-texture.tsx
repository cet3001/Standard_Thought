
import { useState, useEffect } from 'react';

// Curated urban/gritty images from Unsplash - more variety and grittier selection
const URBAN_IMAGES = [
  "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1024&h=1024&fit=crop&crop=center", // grayscale low angle building
  "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1024&h=1024&fit=crop&crop=center", // low angle gray building
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1024&h=1024&fit=crop&crop=center", // white concrete building
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1024&h=1024&fit=crop&crop=center", // concrete building daytime
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1024&h=1024&fit=crop&crop=center", // worms eye view buildings
  "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1024&h=1024&fit=crop&crop=center", // low angle building photography
  "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=1024&h=1024&fit=crop&crop=center", // white concrete building
  "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1024&h=1024&fit=crop&crop=center", // low angle building
  // Additional gritty urban textures
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&h=1024&fit=crop&crop=center", // urban architecture
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1024&h=1024&fit=crop&crop=center", // concrete structure
  "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1024&h=1024&fit=crop&crop=center", // brutalist architecture
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1024&h=1024&fit=crop&crop=center", // urban wall texture
];

export const useUrbanTexture = () => {
  const [textureImageUrl, setTextureImageUrl] = useState<string>("");
  const [imageGenerationStatus, setImageGenerationStatus] = useState<string>("idle");

  // Check localStorage cache first
  useEffect(() => {
    const cachedImageUrl = localStorage.getItem('urban-texture-cache');
    const cacheTimestamp = localStorage.getItem('urban-texture-timestamp');
    const CACHE_DURATION = 8 * 60 * 60 * 1000; // 8 hours (shorter for more variety)

    if (cachedImageUrl && cacheTimestamp) {
      const isExpired = Date.now() - parseInt(cacheTimestamp) > CACHE_DURATION;
      if (!isExpired) {
        setTextureImageUrl(cachedImageUrl);
        setImageGenerationStatus("cached");
        return;
      } else {
        localStorage.removeItem('urban-texture-cache');
        localStorage.removeItem('urban-texture-timestamp');
      }
    }

    selectUrbanTexture();
  }, []);

  const selectUrbanTexture = () => {
    try {
      setImageGenerationStatus("selecting");
      
      // Get previously used images to avoid immediate repeats
      const usedImages = JSON.parse(localStorage.getItem('used-urban-textures') || '[]');
      let availableImages = URBAN_IMAGES.filter(img => !usedImages.includes(img));
      
      // If all images have been used, reset the cycle
      if (availableImages.length === 0) {
        availableImages = URBAN_IMAGES;
        localStorage.setItem('used-urban-textures', '[]');
      }
      
      // Select a random image from available ones
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const selectedImage = availableImages[randomIndex];
      
      // Update used images list
      const newUsedImages = [...usedImages, selectedImage].slice(-Math.floor(URBAN_IMAGES.length * 0.7)); // Keep track of last 70%
      localStorage.setItem('used-urban-textures', JSON.stringify(newUsedImages));
      
      // Cache the selected image
      localStorage.setItem('urban-texture-cache', selectedImage);
      localStorage.setItem('urban-texture-timestamp', Date.now().toString());
      
      setTextureImageUrl(selectedImage);
      setImageGenerationStatus("success");
      
    } catch (error) {
      console.error("Failed to select urban texture:", error);
      
      // Use first image as fallback
      const fallbackImage = URBAN_IMAGES[0];
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
