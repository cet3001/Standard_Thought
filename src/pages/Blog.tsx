
import BlogPage from "@/components/blog/blog-page";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Blog = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Urban Background with Texture - Consistent with Home/About */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-60 bg-cover bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
        
        {/* Urban gradient overlay - darker for street vibe */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/50 to-slate-900/60"></div>
        
        {/* Minimal content overlay for text readability - much darker */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 dark:from-black/40 dark:via-black/50 dark:to-black/60"></div>
        
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
