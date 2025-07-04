import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useImageUpload = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null;

    try {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error } = await supabase.storage
        .from('blog-images')
        .upload(filePath, imageFile);

      if (error) {
        console.error('Error uploading image:', error);
        return null;
      }

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Image upload error:', error);
      return null;
    }
  };

  return {
    imageFile,
    setImageFile,
    imagePreview,
    setImagePreview,
    uploadImage
  };
};