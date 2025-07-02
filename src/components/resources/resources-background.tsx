
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const ResourcesBackground = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* AI-Generated or Curated Urban Texture */}
      {textureImageUrl && (
        <div 
          className="absolute inset-0 opacity-50 bg-center"
          style={{
            backgroundImage: `url(${textureImageUrl})`,
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat'
          }}
        />
      )}
      
      {/* Urban gradient overlay - lighter for better texture visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-700/50 to-slate-900/40"></div>
      
      {/* Content overlay for text readability - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/70 via-brand-cream/75 to-brand-cream/80 dark:from-brand-black/70 dark:via-brand-black/75 dark:to-brand-black/80"></div>
      
      {/* Floating pearlescent accent elements */}
      <div 
        className="absolute top-20 right-16 w-24 h-24 rounded-full opacity-15 animate-float"
        style={{
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          animation: 'pearlescent 5s ease-in-out infinite, float 8s ease-in-out infinite',
          filter: 'blur(1px)'
        }}
      ></div>
      <div 
        className="absolute bottom-32 left-12 w-16 h-16 rounded-2xl opacity-20 animate-float"
        style={{ 
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          animation: 'pearlescent 4s ease-in-out infinite, float 7s ease-in-out infinite',
          animationDelay: '3s',
          filter: 'blur(0.5px)'
        }}
      ></div>
      <div 
        className="absolute top-40 left-1/3 w-12 h-12 rounded-full opacity-15 animate-float"
        style={{ 
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          animation: 'pearlescent 5s ease-in-out infinite, float 8s ease-in-out infinite',
          animationDelay: '4s',
          filter: 'blur(1px)'
        }}
      ></div>
    </div>
  );
};

export default ResourcesBackground;
