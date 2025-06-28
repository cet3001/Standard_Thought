

import { useState, useEffect } from 'react';

// AUTHENTIC urban street imagery - alleys, rooftops, street scenes, city vibes ONLY
const URBAN_IMAGES = [
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1024&h=1024&fit=crop&crop=center", // city alley with graffiti - STREET ✓
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1024&h=1024&fit=crop&crop=center", // narrow city alley - URBAN ✓  
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1024&h=1024&fit=crop&crop=center", // urban rooftop view - CITY ✓
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=1024&h=1024&fit=crop&crop=center", // city street with buildings - URBAN ✓
  "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1024&h=1024&fit=crop&crop=center", // urban alleyway - STREET ✓
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1024&h=1024&fit=crop&crop=center", // city skyline buildings - URBAN ✓
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&h=1024&fit=crop&crop=center", // urban architecture concrete - CITY ✓
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1024&h=1024&fit=crop&crop=center", // city street scene - URBAN ✓
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1024&h=1024&fit=crop&crop=center", // urban bridge/underpass - STREET ✓
  "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1024&h=1024&fit=crop&crop=center", // building from street level - URBAN ✓
];

export const useUrbanTexture = () => {
  const [textureImageUrl, setTextureImageUrl] = useState<string>("");
  const [imageGenerationStatus, setImageGenerationStatus] = useState<string>("idle");

  // Force clear any old cache and select new image on mount
  useEffect(() => {
    // Clear any existing cache first
    localStorage.removeItem('urban-texture-cache');
    localStorage.removeItem('urban-texture-timestamp');
    localStorage.removeItem('used-urban-textures');
    
    // Force a new selection
    selectUrbanTexture();
  }, []);

  const selectUrbanTexture = () => {
    try {
      setImageGenerationStatus("selecting");
      console.log("Selecting new urban texture...");
      
      // Get previously used images to avoid immediate repeats
      const usedImages = JSON.parse(localStorage.getItem('used-urban-textures') || '[]');
      let availableImages = URBAN_IMAGES.filter(img => !usedImages.includes(img));
      
      // If all images have been used, reset the cycle
      if (availableImages.length === 0) {
        availableImages = URBAN_IMAGES;
        localStorage.setItem('used-urban-textures', '[]');
        console.log("Reset urban texture cycle");
      }
      
      // Select a random image from available ones
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const selectedImage = availableImages[randomIndex];
      
      console.log("Selected urban texture:", selectedImage);
      
      // Update used images list
      const newUsedImages = [...usedImages, selectedImage].slice(-Math.floor(URBAN_IMAGES.length * 0.7)); // Keep track of last 70%
      localStorage.setItem('used-urban-textures', JSON.stringify(newUsedImages));
      
      // Cache the selected image with shorter duration for more variety
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
    regenerateTexture: () => {
      // Clear cache and force new selection
      localStorage.removeItem('urban-texture-cache');
      localStorage.removeItem('urban-texture-timestamp');
      selectUrbanTexture();
    }
  };
};

