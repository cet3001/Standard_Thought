
import { useUrbanTexture } from "@/hooks/use-urban-texture";

export const NewsletterBackground = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* AI-Generated or Curated Urban Texture - More Subtle */}
      {textureImageUrl && (
        <div 
          className="absolute inset-0 opacity-8 bg-repeat bg-center"
          style={{
            backgroundImage: `url(${textureImageUrl})`,
            backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
            filter: 'contrast(1.2) brightness(0.7)'
          }}
        />
      )}
      
      {/* Subtle additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600/15 via-gray-500/10 to-gray-700/20"></div>
    </div>
  );
};
