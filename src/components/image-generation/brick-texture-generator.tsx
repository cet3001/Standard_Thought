
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { generateImage } from "@/lib/api";
import { toast } from "sonner";

interface BrickTextureGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
}

const BrickTextureGenerator = ({ onImageGenerated }: BrickTextureGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateBrickTexture = async () => {
    setIsGenerating(true);
    try {
      const prompt = "Urban brick wall texture, weathered red and brown bricks with white mortar lines, close-up pattern, realistic texture, high contrast, street photography style, gritty urban aesthetic";
      
      const imageUrl = await generateImage(prompt);
      onImageGenerated(imageUrl);
      toast.success("Brick texture generated!");
    } catch (error) {
      console.error("Error generating brick texture:", error);
      toast.error("Failed to generate brick texture");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={generateBrickTexture} 
      disabled={isGenerating}
      className="mb-4"
    >
      {isGenerating ? "Generating Brick Texture..." : "Generate Urban Brick Texture"}
    </Button>
  );
};

export default BrickTextureGenerator;
