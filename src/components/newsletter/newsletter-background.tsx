
import { useUrbanTexture } from "@/hooks/use-urban-texture";

export const NewsletterBackground = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* AI-Generated or Curated Urban Texture - More Subtle */}
      {textureImageUrl && (
        <div 
          className="absolute inset-0 opacity-5 bg-repeat bg-center"
          style={{
            backgroundImage: `url(${textureImageUrl})`,
            backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
            filter: 'contrast(1.1) brightness(0.8)'
          }}
        />
      )}
      
      {/* Enhanced gradient overlay to complement the new grey tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-gray-500/16 to-gray-600/24"></div>
    </div>
  );
};
