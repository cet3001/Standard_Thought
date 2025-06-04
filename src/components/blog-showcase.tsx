
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, Calendar, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string | null;
  category: string;
  featured: boolean;
  created_at: string;
}

const BlogShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

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
      featured: true
    },
    {
      id: "2",
      title: "No Blueprint? No Problem.",
      excerpt: "Turning chaos into strategy when you've got zero safety net. The scrappy way to level up and last.",
      image_url: "/placeholder.svg",
      created_at: "2024-01-12",
      category: "Gameplan",
      featured: true
    },
    {
      id: "3",
      title: "Plugged In: Building Connections When You Know No One",
      excerpt: "How first-gens, outsiders, and solo strivers build their own table—and never look back.",
      image_url: "/placeholder.svg",
      created_at: "2024-01-10",
      category: "Network",
      featured: true
    }
  ];

  const getReadTime = (excerpt: string) => {
    const wordsPerMinute = 200;
    const wordCount = excerpt.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const postsToShow = featuredPosts.length > 0 ? featuredPosts : fallbackPosts;

  return (
    <section className="py-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black dark:text-brand-cream">
            Real Stories. Real Struggle. <span className="text-accent">Real Wins.</span>
          </h2>
          <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 max-w-3xl mx-auto">
            No gurus. No gatekeepers. Just hustlers, dreamers, and builders who started with nothing but grit—and turned it into legacy. Your story's next.
          </p>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center">
            <div className="text-lg text-brand-black/70 dark:text-brand-cream/70">Loading featured stories...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {postsToShow.map((post, index) => (
              <Card 
                key={post.id}
                className={`card-hover bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-accent/20 rounded-3xl overflow-hidden group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={post.image_url || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-black px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors text-brand-black dark:text-brand-cream">
                    {post.title}
                  </h3>
                  <p className="text-brand-black/70 dark:text-brand-cream/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-brand-black/60 dark:text-brand-cream/60">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{getReadTime(post.excerpt)}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-accent group-hover:text-black transition-all rounded-2xl text-brand-black dark:text-brand-cream"
                  >
                    Read Story
                    <ArrowUp className="ml-2 h-4 w-4 rotate-45 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 rounded-3xl"
            onClick={() => window.location.href = '/blog'}
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
