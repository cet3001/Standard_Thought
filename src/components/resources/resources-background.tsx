
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const ResourcesBackground = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="fixed inset-0 -z-50" aria-hidden="true">
      {/* AI-Generated or Curated Urban Texture */}
      {textureImageUrl && (
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${textureImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
      )}
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
      
      {/* Content overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
    </div>
  );
};

export default ResourcesBackground;
