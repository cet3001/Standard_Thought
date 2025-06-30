
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "@/lib/api";
import BlogShowcaseHeader from "./blog-showcase-header";
import BlogShowcaseGrid from "./blog-showcase-grid";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string | null;
  category: string;
  featured: boolean;
  created_at: string;
  slug: string;
}

const BlogShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { textureImageUrl } = useUrbanTexture();

  console.log('BlogShowcase: Component rendering...');

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ['showcase-posts'],
    queryFn: getBlogPosts,
    retry: 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  console.log('BlogShowcase: Query state - Loading:', isLoading, 'Success:', isSuccess, 'Error:', isError);
  console.log('BlogShowcase: Raw posts data:', posts);
  console.log('BlogShowcase: Posts array length:', Array.isArray(posts) ? posts.length : 'Not an array');

  // Only process posts if we have successful data
  const validPosts = isSuccess && Array.isArray(posts) ? posts : [];
  
  // Get featured posts first, then fall back to recent posts
  const featuredPosts = validPosts.filter(post => post.featured).slice(0, 3);
  const displayPosts = featuredPosts.length > 0 ? featuredPosts : validPosts.slice(0, 3);

  console.log('BlogShowcase: Valid posts count:', validPosts.length);
  console.log('BlogShowcase: Featured posts:', featuredPosts.map(p => ({ id: p.id, title: p.title, featured: p.featured })));
  console.log('BlogShowcase: Display posts:', displayPosts.map(p => ({ id: p.id, title: p.title, featured: p.featured })));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (isError) {
    console.error('BlogShowcase: Error fetching posts:', error);
  }

  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="blog-showcase-heading">
      {/* Urban Background */}
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

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <BlogShowcaseHeader isVisible={isVisible} />
        <BlogShowcaseGrid posts={displayPosts} loading={isLoading} isVisible={isVisible} />
        
        {/* Show message if no posts found */}
        {isSuccess && displayPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-brand-black/70 dark:text-brand-cream/70">
              New stories coming soon. Check back for fresh content from the community.
            </p>
          </div>
        )}

        {/* Show error message if there's an error */}
        {isError && (
          <div className="text-center py-12">
            <p className="text-xl text-red-600 dark:text-red-400">
              Unable to load stories right now. Please try again later.
            </p>
          </div>
        )}

        {/* Debug info (remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded text-sm">
            <p><strong>Debug Info:</strong></p>
            <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
            <p>Success: {isSuccess ? 'Yes' : 'No'}</p>
            <p>Error: {isError ? 'Yes' : 'No'}</p>
            <p>Raw Data Type: {typeof posts}</p>
            <p>Is Array: {Array.isArray(posts) ? 'Yes' : 'No'}</p>
            <p>Valid Posts: {validPosts.length}</p>
            <p>Featured Posts: {featuredPosts.length}</p>
            <p>Display Posts: {displayPosts.length}</p>
            {isError && <p>Error Message: {error?.message}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogShowcase;
