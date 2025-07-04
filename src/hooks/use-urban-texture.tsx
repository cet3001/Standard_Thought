
// Urban Texture Hook
// Purpose: Rotate background textures using only the 10 specified curated images.
// Why: Keeps pages fresh and on-brand with approved urban imagery.
import { useState, useEffect } from 'react';

// Custom urban street imagery - Only these 10 curated images
const URBAN_IMAGES = [
  "/lovable-uploads/92539a2f-74f6-4c0d-bb3b-3e81570e1e0d.png", // City rooftop with TV antenna at sunset/dusk
  "/lovable-uploads/d841a3a4-961c-4358-a80c-a17e3c950d10.png", // Graffiti wall with golden letters
  "/lovable-uploads/1a85ba7c-3952-4f1b-9eb3-9c9a5a7ad16f.png", // Rainy street scene with people and umbrellas
  "/lovable-uploads/cf72e211-f385-4f82-8ccf-ca0ce802b88a.png", // Train car with graffiti art
  "/lovable-uploads/bb9edac1-de9e-4713-a254-71606a47f972.png", // Hooded figure under bridge with yellow taxi
  "/lovable-uploads/b7e982f0-250f-45e7-9e4c-8fc2f3ae7524.png", // Night street scene with hooded figure
  "/lovable-uploads/bb8276a1-ea4b-4d2b-af6e-87e35bed6c54.png", // Street chalk art with inspirational messages
  "/lovable-uploads/915af3b3-938e-4ca6-9bfe-9b737c2984de.png", // Chain link fence with city lights bokeh
  "/lovable-uploads/01b7d010-b1f4-403b-9c1e-8bf0f63850a2.png", // Wet blueprint on street
  "/lovable-uploads/c237d173-88db-48f5-9718-09a1deb6ff96.png"  // City skyline at night from rooftop/balcony
];


let globalTextureUrl: string = "";

export const useUrbanTexture = () => {
  const [textureImageUrl, setTextureImageUrl] = useState<string>(globalTextureUrl);
  const [imageGenerationStatus, setImageGenerationStatus] = useState<string>("idle");

  // Auto-generate new image on mount or when specifically requested
  useEffect(() => {
    if (!globalTextureUrl) {
      generateNewUrbanTexture();
    } else {
      setTextureImageUrl(globalTextureUrl);
      setImageGenerationStatus("success");
    }
  }, []);

  const generateNewUrbanTexture = () => {
    setImageGenerationStatus("generating");
    if (process.env.NODE_ENV !== 'production') {
      console.log("Selecting new urban texture from curated images...");
    }
    
    // Only use curated images
    selectCuratedUrbanTexture();
  };

  const selectCuratedUrbanTexture = () => {
    // Get previously used images to avoid immediate repeats
    const usedImages = JSON.parse(localStorage.getItem('used-urban-textures') || '[]');
    let availableImages = URBAN_IMAGES.filter(img => !usedImages.includes(img));
    
    // If all images have been used, reset the cycle
    if (availableImages.length === 0) {
      availableImages = URBAN_IMAGES;
      localStorage.setItem('used-urban-textures', '[]');
      if (process.env.NODE_ENV !== 'production') {
        console.log("Reset curated urban texture cycle");
      }
    }
    
    // Select a random image from available ones
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const selectedImage = availableImages[randomIndex];
    
    if (process.env.NODE_ENV !== 'production') {
      console.log("Selected curated urban texture:", selectedImage);
    }
    
    // Update used images list
    const newUsedImages = [...usedImages, selectedImage].slice(-Math.floor(URBAN_IMAGES.length * 0.7));
    localStorage.setItem('used-urban-textures', JSON.stringify(newUsedImages));
    
    globalTextureUrl = selectedImage;
    setTextureImageUrl(selectedImage);
    setImageGenerationStatus("success");
  };

  return {
    textureImageUrl,
    imageGenerationStatus,
    regenerateTexture: () => {
      globalTextureUrl = ""; // Clear global cache
      generateNewUrbanTexture();
    }
  };
};
