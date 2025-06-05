
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowUp, Plus, Edit } from "lucide-react";
import { Helmet } from "react-helmet";
import { BlogGridSkeleton } from "@/components/blog-skeleton";
import { trackBlogRead } from "@/components/analytics";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  created_at: string;
  slug: string;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAdmin, user, loading: authLoading, profile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      console.log('Fetching blog posts...');
      setError(null);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load stories. Please try again.');
      } else {
        console.log('Blog posts fetched:', data);
        setBlogPosts(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories from posts
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const handleReadStory = (post: BlogPost) => {
    trackBlogRead(post.title, post.slug);
    navigate(`/blog/${post.slug}`);
  };

  // Enhanced debugging for admin state
  console.log('Blog page auth state:', { 
    user: user?.email, 
    isAdmin, 
    authLoading, 
    profile: profile?.role,
    shouldShowButton: !authLoading && user && isAdmin
  });

  return (
    <>
      <Helmet>
        <title>Out the Mud: Builder Stories | Standardthought</title>
        <meta name="description" content="Raw game from people who actually built something. No theory, no fluff—just real blueprints from builders who started with nothing but grit and refused to stay there." />
        <meta name="keywords" content="builder stories, entrepreneurship, startup stories, business building, hustle, mindset, success stories" />
        <meta property="og:title" content="Out the Mud: Builder Stories | Standardthought" />
        <meta property="og:description" content="Raw game from people who actually built something. Real blueprints from builders who started with nothing but grit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Out the Mud: Builder Stories | Standardthought" />
        <meta name="twitter:description" content="Raw game from people who actually built something. Real blueprints from builders who started with nothing but grit." />
      </Helmet>

      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-brand-cream dark:bg-brand-black">
          <div className="container mx-auto px-6">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
                Out the <span className="text-[#247EFF]">Mud</span>: Builder Stories
              </h1>
              <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed mb-6">
                Raw game from people who actually built something. No theory, no fluff—just real blueprints 
                from builders who started with nothing but grit and refused to stay there.
              </p>
              <div className="bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-6 max-w-2xl mx-auto">
                <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80">
                  Every story here comes from someone who had to figure it out with their own two hands. 
                  These aren't case studies—they're battle-tested strategies from the trenches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 border-b border-[#247EFF]/20 bg-white/90 dark:bg-brand-black/80">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[#0A0A0A] dark:text-brand-cream">Find Your Game</h2>
                
                {/* Admin Create Button - Show when user is admin and not loading */}
                {!authLoading && user && isAdmin && (
                  <Button
                    onClick={() => navigate("/create-post")}
                    className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-2xl px-6 py-2 transition-all duration-300 flex items-center"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Create Story
                  </Button>
                )}
                
                {/* Sign In Button for non-authenticated users */}
                {!authLoading && !user && (
                  <Button
                    onClick={() => navigate("/auth")}
                    variant="outline"
                    className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white rounded-2xl px-6 py-2 transition-all duration-300"
                  >
                    Sign In to Create
                  </Button>
                )}
              </div>

              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-4 rounded-3xl border-[#247EFF]/20 focus:border-[#247EFF] text-lg bg-white/80 dark:bg-brand-black/80 text-[#0A0A0A] dark:text-brand-cream"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-2xl px-6 py-2 transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#247EFF] hover:bg-[#0057FF] text-white"
                        : "border-[#247EFF]/20 text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-brand-cream dark:bg-brand-black">
          <div className="container mx-auto px-6">
            {loading ? (
              <BlogGridSkeleton />
            ) : error ? (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">
                    Something Went Wrong
                  </h3>
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-6">
                    {error}
                  </p>
                  <Button
                    onClick={fetchBlogPosts}
                    className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-2xl px-8 py-3 transition-all duration-300"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">
                    No Stories Yet
                  </h3>
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-6">
                    Be the first to share your builder journey. Every legend starts with someone brave enough to go first.
                  </p>
                  {!authLoading && user && isAdmin ? (
                    <Button
                      onClick={() => navigate("/create-post")}
                      className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-2xl px-8 py-3 transition-all duration-300"
                    >
                      <Plus className="mr-2 h-5 w-5" />
                      Create First Story
                    </Button>
                  ) : (
                    <Button
                      onClick={() => navigate("/auth")}
                      className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-2xl px-8 py-3 transition-all duration-300"
                    >
                      Join Movement
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-[#247EFF]/20 rounded-3xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-3xl">
                        <img
                          src={post.image_url || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-[#247EFF] text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-[#247EFF]">
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge className="bg-brand-cream text-[#0A0A0A] px-3 py-1 rounded-full text-sm font-medium hover:bg-brand-cream">
                              Featured
                            </Badge>
                          )}
                        </div>
                        {isAdmin && (
                          <div className="absolute top-4 right-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="w-8 h-8 p-0 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm"
                            >
                              <Edit className="h-4 w-4 text-white" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-[#247EFF] transition-colors text-[#0A0A0A] dark:text-brand-cream">
                        {post.title}
                      </h3>
                      <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{new Date(post.created_at).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{getReadTime(post.content)}</span>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-6 pt-0">
                      <Button 
                        onClick={() => handleReadStory(post)}
                        className="w-full bg-[#247EFF] hover:bg-[#0057FF] text-white transition-all rounded-2xl font-medium"
                      >
                        Read Story
                        <ArrowUp className="ml-2 h-4 w-4 rotate-45 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {/* No Results */}
            {!loading && !error && blogPosts.length > 0 && filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-4">No stories found matching your search.</p>
                <Button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                  variant="outline"
                  className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white rounded-2xl"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
