
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  const [error, setError] = useState<string | null>(null);
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
        setError(error.message || "Could not fetch featured posts. Please check Supabase configuration and permissions.");
        // Fallback to hardcoded posts if no featured posts exist
        setFeaturedPosts(fallbackPosts);
      } else {
        setFeaturedPosts(data || fallbackPosts);
        setError(null);
      }
    } catch (error: any) {
      console.error('Fetch error:', error);
      setError(error.message || "Could not fetch blog posts due to a network error.");
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
    <section className="py-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden" aria-labelledby="blog-showcase-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <BlogShowcaseHeader isVisible={isVisible} />

        {error && (
          <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-300 text-red-700 text-center">
            {error}
            <div className="text-xs mt-2 italic">Please check Supabase project, keys, permissions, and that the table <code>blog_posts</code> exists and is readable.</div>
          </div>
        )}

        <BlogShowcaseGrid posts={postsToShow} loading={loading} isVisible={isVisible} />
        
        {/* Enhanced Internal Linking and CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-6">
              Ready to dive deeper? Our <Link to="/blog" className="text-[#247EFF] hover:underline font-semibold">complete story collection</Link> has everything you need to turn your hustle into generational wealth. From <strong>mindset shifts</strong> to <strong>actionable frameworks</strong>, we've got the blueprint.
            </p>
          </div>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 rounded-3xl"
            onClick={() => navigate('/blog')}
            aria-label="Explore all success stories and business frameworks"
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
