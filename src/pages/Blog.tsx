
import BlogPage from "@/components/blog/blog-page";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Blog = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Urban Background with Pearlescent Effect - Consistent with Home/About */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-25 bg-cover bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
        
        {/* Primary pearlescent background overlay - Enhanced consistency */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 4s ease-in-out infinite',
            opacity: 0.12
          }}
        ></div>
        
        {/* Secondary pearlescent layer for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 70%, rgba(244, 208, 63, 0.15), rgba(247, 220, 111, 0.1), rgba(253, 234, 167, 0.08), transparent 70%)',
            animation: 'pearlescent 6s ease-in-out infinite reverse'
          }}
        ></div>
        
        {/* Urban texture overlay with enhanced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/12 via-slate-700/18 to-slate-900/12"></div>
        
        {/* Content overlay for text readability - Consistent with other pages */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/88 via-brand-cream/92 to-brand-cream/95 dark:from-brand-black/88 dark:via-brand-black/92 dark:to-brand-black/95"></div>
        
        {/* Floating pearlescent accent elements - Consistent styling */}
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
      </div>

      <div className="relative z-10">
        <BlogPage />
      </div>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
