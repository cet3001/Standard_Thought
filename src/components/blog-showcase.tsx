
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import BlogShowcaseHeader from "./blog-showcase-header";
import BlogShowcaseGrid from "./blog-showcase-grid";

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

  useEffect(() => {
    setIsVisible(true);
    fetchFeaturedPosts();
  }, []);

  const fetchFeaturedPosts = async () => {
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
        // Fallback to hardcoded posts if no featured posts exist
        setFeaturedPosts(fallbackPosts);
      } else {
        setFeaturedPosts(data || fallbackPosts);
      }
    } catch (error) {
      console.error('Error:', error);
      setFeaturedPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  };

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
    <section className="py-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <BlogShowcaseHeader isVisible={isVisible} />
        <BlogShowcaseGrid posts={postsToShow} loading={loading} isVisible={isVisible} />
        
        {/* View All Button */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 rounded-3xl"
            onClick={() => navigate('/blog')}
          >
            Explore All Stories
            <ArrowUp className="ml-2 h-5 w-5 rotate-45" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
