import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { textureImageUrl } = useUrbanTexture();

  const fetchFeaturedPosts = useCallback(async () => {
    try {
      console.log('Fetching blog posts for showcase...');
      
      // First try to get featured posts
      const { data: featured, error: featuredError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (featuredError) {
        console.error('Error fetching featured posts:', featuredError);
      }

      // If we have featured posts, use them
      if (featured && featured.length > 0) {
        console.log('Found featured posts:', featured.length);
        setFeaturedPosts(featured);
        setLoading(false);
        return;
      }

      // Otherwise, get any published posts
      const { data: allPosts, error: allError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (allError) {
        console.error('Error fetching all posts:', allError);
        setFeaturedPosts([]);
      } else {
        console.log('Found published posts:', allPosts?.length || 0);
        setFeaturedPosts(allPosts || []);
      }
    } catch (error: unknown) {
      console.error('Fetch error:', error);
      setFeaturedPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
    fetchFeaturedPosts();
  }, [fetchFeaturedPosts]);

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
        <BlogShowcaseGrid posts={featuredPosts} loading={loading} isVisible={isVisible} />
        
        {/* Show message if no posts found */}
        {!loading && featuredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-brand-black/70 dark:text-brand-cream/70">
              New stories coming soon. Check back for fresh content from the community.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogShowcase;
