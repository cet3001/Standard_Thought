
import { useUrbanTexture } from "@/hooks/use-urban-texture";

export const NewsletterBackground = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="absolute inset-0" aria-hidden="true">
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
      
      {/* Subtle transparent grey overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-gray-500/8 to-gray-600/12"></div>
    </div>
  );
};
