
import { useState, useEffect } from 'react';

// CUSTOM URBAN STREET IMAGERY - Real city vibes, street culture, urban life
const URBAN_IMAGES = [
  // Your new custom uploaded images - street scenes, urban atmosphere
  "/lovable-uploads/4696326a-6203-4b1e-b0bc-e1ccc29263be.png", // Hooded figure under bridge with yellow taxi - STREET ✓
  "/lovable-uploads/319b9311-4018-46d0-9292-5c7220a671c7.png", // Night street scene with figure - URBAN ✓
  "/lovable-uploads/44b44c48-a7dc-4d1e-8480-8e3d666ede2e.png", // Street chalk art inspirational message - STREET ART ✓
  "/lovable-uploads/5a73c6c8-6cb4-4b24-bc21-793d647712be.png", // Chain link fence with city lights bokeh - URBAN ✓
  "/lovable-uploads/b293ef64-21e7-478b-aad6-46b9df35a06d.png", // Wet blueprint on street - STREET ✓
  "/lovable-uploads/1928b2bf-f534-4c1f-982f-bf3cf95d5005.png", // City skyline at night from rooftop - URBAN ✓
  "/lovable-uploads/4d0b232a-9f5f-4c60-9a61-04047f4a0a45.png", // Rooftop view at sunset with antenna - CITY ✓
  "/lovable-uploads/1336e121-a69f-44f5-887c-ae15280ab9b0.png", // Graffiti wall with golden letters - STREET ART ✓
  "/lovable-uploads/c32d557b-f984-4e31-8e74-82fb6c5fd20c.png", // Rainy street scene with umbrellas - URBAN ✓
  "/lovable-uploads/4fd61de9-3d13-4e62-8cd6-4c10748ee279.png", // Train car with graffiti - STREET ART ✓
  
  // Previously uploaded project images (if any exist)
  "/lovable-uploads/120d4385-153e-4704-ad3a-0f64d8a24a04.png",
  "/lovable-uploads/21728a70-c6c7-4f2f-8689-d74741cb605b.png",
  "/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png",
  "/lovable-uploads/94cc6adb-cf25-4c3e-b059-ee67f8401562.png",
  "/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png"
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
    
    // Force a new selection with custom images
    selectUrbanTexture();
  }, []);

  const selectUrbanTexture = () => {
    try {
      setImageGenerationStatus("selecting");
      console.log("Selecting new custom urban texture...");
      
      // Get previously used images to avoid immediate repeats
      const usedImages = JSON.parse(localStorage.getItem('used-urban-textures') || '[]');
      let availableImages = URBAN_IMAGES.filter(img => !usedImages.includes(img));
      
      // If all images have been used, reset the cycle
      if (availableImages.length === 0) {
        availableImages = URBAN_IMAGES;
        localStorage.setItem('used-urban-textures', '[]');
        console.log("Reset custom urban texture cycle");
      }
      
      // Select a random image from available ones
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const selectedImage = availableImages[randomIndex];
      
      console.log("Selected custom urban texture:", selectedImage);
      
      // Update used images list
      const newUsedImages = [...usedImages, selectedImage].slice(-Math.floor(URBAN_IMAGES.length * 0.7)); // Keep track of last 70%
      localStorage.setItem('used-urban-textures', JSON.stringify(newUsedImages));
      
      // Cache the selected image with shorter duration for more variety
      localStorage.setItem('urban-texture-cache', selectedImage);
      localStorage.setItem('urban-texture-timestamp', Date.now().toString());
      
      setTextureImageUrl(selectedImage);
      setImageGenerationStatus("success");
      
    } catch (error) {
      console.error("Failed to select custom urban texture:", error);
      
      // Use first custom image as fallback
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
