
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "@/lib/api";
import { supabase } from "@/integrations/supabase/client";
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
    dataUpdatedAt,
    errorUpdatedAt,
    failureCount,
    failureReason,
  } = useQuery({
    queryKey: ['showcase-posts'],
    queryFn: getBlogPosts,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  console.log('BlogShowcase: Detailed Query State:');
  console.log('- isLoading:', isLoading);
  console.log('- isSuccess:', isSuccess);
  console.log('- isError:', isError);
  console.log('- failureCount:', failureCount);
  console.log('- failureReason:', failureReason);
  console.log('- dataUpdatedAt:', new Date(dataUpdatedAt));
  console.log('- errorUpdatedAt:', errorUpdatedAt ? new Date(errorUpdatedAt) : 'Never');
  console.log('- Raw posts data:', posts);
  console.log('- Posts type:', typeof posts);
  console.log('- Posts is array:', Array.isArray(posts));
  console.log('- Posts length:', Array.isArray(posts) ? posts.length : 'Not an array');

  // Only process posts if we have successful data and it's an array
  const validPosts = isSuccess && Array.isArray(posts) ? posts : [];
  
  // Get featured posts first, then fall back to recent posts
  const featuredPosts = validPosts.filter(post => post.featured).slice(0, 3);
  const displayPosts = featuredPosts.length > 0 ? featuredPosts : validPosts.slice(0, 3);

  console.log('BlogShowcase: Processing Results:');
  console.log('- Valid posts count:', validPosts.length);
  console.log('- Featured posts count:', featuredPosts.length);
  console.log('- Display posts count:', displayPosts.length);
  console.log('- Featured posts:', featuredPosts.map(p => ({ id: p.id, title: p.title, featured: p.featured })));
  console.log('- Display posts:', displayPosts.map(p => ({ id: p.id, title: p.title, featured: p.featured })));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isError) {
      console.error('BlogShowcase: Query Error Details:');
      console.error('- Error object:', error);
      console.error('- Error message:', error?.message);
      console.error('- Error stack:', error?.stack);
    }
  }, [isError, error]);

  // Check for authentication issues
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('BlogShowcase: Checking authentication...');
        const { data: { session }, error: authError } = await supabase.auth.getSession();
        console.log('BlogShowcase: Auth check results:');
        console.log('- Session exists:', !!session);
        console.log('- Auth error:', authError);
        console.log('- User ID:', session?.user?.id || 'No user');
        console.log('- User email:', session?.user?.email || 'No email');
      } catch (err) {
        console.error('BlogShowcase: Auth check failed:', err);
      }
    };
    
    checkAuth();
  }, []);

  // Force re-render when query state changes
  useEffect(() => {
    console.log('BlogShowcase: Query state changed, forcing re-evaluation...');
  }, [isLoading, isSuccess, isError, posts]);

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
        
        {/* Show message if no posts found but query was successful */}
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
            {process.env.NODE_ENV === 'development' && (
              <div className="text-sm mt-4 text-red-500 text-left max-w-2xl mx-auto">
                <p><strong>Error Details:</strong></p>
                <p>Message: {error?.message || 'Unknown error'}</p>
                <p>Failure Count: {failureCount}</p>
                <p>Failure Reason: {failureReason?.message || 'None'}</p>
              </div>
            )}
          </div>
        )}

        {/* Enhanced Debug info (remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded text-sm">
            <p><strong>Debug Info:</strong></p>
            <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
            <p>Success: {isSuccess ? 'Yes' : 'No'}</p>
            <p>Error: {isError ? 'Yes' : 'No'}</p>
            <p>Failure Count: {failureCount}</p>
            <p>Raw Data Type: {typeof posts}</p>
            <p>Is Array: {Array.isArray(posts) ? 'Yes' : 'No'}</p>
            <p>Valid Posts: {validPosts.length}</p>
            <p>Featured Posts: {featuredPosts.length}</p>
            <p>Display Posts: {displayPosts.length}</p>
            <p>Data Updated: {new Date(dataUpdatedAt).toLocaleTimeString()}</p>
            {isError && <p>Error Message: {error?.message}</p>}
            {posts && <p>First Post ID: {Array.isArray(posts) && posts[0] ? posts[0].id : 'None'}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogShowcase;
