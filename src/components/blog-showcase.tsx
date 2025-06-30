
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
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
        console.error('Error fetching featured posts:', error);
        // Fallback to any published posts if no featured posts exist
        const { data: allPosts, error: allError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(3);

        if (allError) {
          console.error('Error fetching all posts:', allError);
          setFeaturedPosts(fallbackPosts);
        } else {
          setFeaturedPosts(allPosts || fallbackPosts);
        }
      } else {
        setFeaturedPosts(data || fallbackPosts);
      }
    } catch (error: unknown) {
      console.error('Fetch error:', error);
      setFeaturedPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
    fetchFeaturedPosts();
  }, [fetchFeaturedPosts]);

  // Fallback posts for when no posts exist yet
  const fallbackPosts = [
    {
      id: "1",
      title: "From the Mud to Momentum",
      excerpt: "How one builder went from \"nobody\" to owning every room. The moves, the missteps, and what finally clicked.",
      image_url: "/placeholder.svg",
      created_at: "2024-01-15",
      category: "Hustle",
      featured: true,
      slug: "from-the-mud-to-momentum"
    },
    {
      id: "2",
      title: "No Blueprint? No Problem.",
      excerpt: "Turning chaos into strategy when you've got zero safety net. The scrappy way to level up and last.",
      image_url: "/placeholder.svg",
      created_at: "2024-01-12",
      category: "Gameplan",
      featured: true,
      slug: "no-blueprint-no-problem"
    },
    {
      id: "3",
      title: "Plugged In: Building Connections When You Know No One",
      excerpt: "How first-gens, outsiders, and solo strivers build their own table—and never look back.",
      image_url: "/placeholder.svg",
      created_at: "2024-01-10",
      category: "Network",
      featured: true,
      slug: "plugged-in-building-connections"
    }
  ];

  const postsToShow = featuredPosts.length > 0 ? featuredPosts : fallbackPosts;

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

        <BlogShowcaseGrid posts={postsToShow} loading={loading} isVisible={isVisible} />
      </div>
    </section>
  );
};

export default BlogShowcase;
