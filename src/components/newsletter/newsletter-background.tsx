
import { useUrbanTexture } from "@/hooks/use-urban-texture";

export const NewsletterBackground = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* AI-Generated or Curated Urban Texture */}
      {textureImageUrl && (
        <div 
          className="absolute inset-0 opacity-20 bg-repeat bg-center"
          style={{
            backgroundImage: `url(${textureImageUrl})`,
            backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
            filter: 'contrast(1.3) brightness(0.7)'
          }}
        />
      )}
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-50"></div>
      
      {/* Content overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/95 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/95"></div>
    </div>
  );
};
