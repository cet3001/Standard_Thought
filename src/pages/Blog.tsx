
import BlogPage from "@/components/blog/blog-page";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Blog = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Urban Background - Matches homepage styling */}
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
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/15 via-slate-700/25 to-slate-900/15"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/95 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/95"></div>
      </div>

      <div className="relative z-10">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blog;
