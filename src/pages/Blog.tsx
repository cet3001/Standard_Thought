import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { SectionOverlayBox } from "@/components/layout";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useBuilderStories } from "@/hooks/use-builder-stories";
import { useAuth } from "@/contexts/AuthContext";
import { getBlogPosts, BlogPost, deleteBlogPost } from "@/lib/api";
import { ExternalLink, Clock, Tag, Quote, HelpCircle, TrendingUp, Heart, DollarSign, ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { toast } from "sonner";
import { BlogFilters, BlogCategory, BlogTag, SortOption } from "@/components/blog/BlogFilters";

const Blog = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const { stories, loading } = useBuilderStories(5);
  const { stories: testimonials } = useBuilderStories(15);
  const { isAdmin } = useAuth();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All Categories");
  const [selectedTags, setSelectedTags] = useState<BlogTag[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const navigate = useNavigate();

  // Filter and sort posts
  const getFilteredPosts = () => {
    let filtered = blogPosts;
    
    // Filter by category
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.some(tag => post.tags?.includes(tag))
      );
    }
    
    // Sort posts
    switch (sortBy) {
      case "oldest":
        return filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      case "title-asc":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return filtered.sort((a, b) => b.title.localeCompare(a.title));
      case "newest":
      default:
        return filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }
  };

  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategory(category);
  };

  const handleTagToggle = (tag: BlogTag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
  };

  const handleClearFilters = () => {
    setSelectedCategory("All Categories");
    setSelectedTags([]);
    setSortBy("newest");
  };

  const handleDeletePost = async (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      try {
        await deleteBlogPost(postId);
        setBlogPosts(prev => prev.filter(post => post.id !== postId));
        toast.success("Post deleted successfully");
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error("Failed to delete post");
      }
    }
  };

  const handleEditPost = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/create-post`, { state: { editPost: post } });
  };

  useEffect(() => {
    setIsVisible(true);
    
    const fetchBlogPosts = async () => {
      try {
        setBlogLoading(true);
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setBlogLoading(false);
      }
    };
    
    fetchBlogPosts();
    
    const timeout = setTimeout(() => {
      if (blogLoading) {
        setBlogLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  // Rotate testimonials every 4 seconds
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Blog", url: "https://www.standardthought.com/blog", position: 2 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
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
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO
        title="First-Gen Success Stories & Wealth Tips | StandardThought"
        description="Real stories from hustlers who built wealth from zero. No trust funds, just proven strategies for credit, investing, and AI income."
        keywords="first-gen entrepreneur stories, urban wealth building success stories, hood to wealth stories, self-made entrepreneur stories, building from nothing success stories"
        url="/blog"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Hero Section */}
          <div className={`mb-24 p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center relative z-10">
              <div className="relative inline-block mb-6">
                <h1 className="text-5xl md:text-7xl font-black text-brand-black dark:text-brand-cream mb-4 relative">
                  Out the{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-permanent-marker transform -rotate-1 inline-block" style={{
                      color: 'transparent',
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}>
                      Mud
                    </span>
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-brand-cream">
                  Real{" "}
                  <span className="relative inline-block">
                    <span className="font-permanent-marker transform rotate-1" style={{
                      color: 'transparent',
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}>
                      Builder Stories
                    </span>
                  </span>
                </h2>
              </div>

              <p className="text-xl md:text-2xl text-brand-black/80 dark:text-brand-cream/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                No trust funds. No shortcuts. Just real blueprints from folks who built it brick by brick.
              </p>

              <div className="relative rounded-xl p-6 border-l-4 max-w-3xl mx-auto" style={{
                background: 'linear-gradient(90deg, rgba(244, 208, 63, 0.1), rgba(255, 215, 0, 0.1))',
                borderLeftColor: '#ffd700'
              }}>
                <blockquote className="text-lg md:text-xl font-medium text-brand-black dark:text-brand-cream italic">
                  "If you had to figure it out with nothing but vision and grind, these stories are for you."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Main Blog Section */}
          <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono mb-6">
                FILTER &{" "}
                <span className="font-permanent-marker transform rotate-1" style={{
                  color: 'transparent',
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}>
                  EXPLORE
                </span>
              </h3>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                From setbacks to stacks—browse by category and get the real game from those who built it brick by brick.
              </p>
            </div>

            {/* Filter and Content Grid */}
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <BlogFilters
                  selectedCategory={selectedCategory}
                  selectedTags={selectedTags}
                  sortBy={sortBy}
                  onCategoryChange={handleCategoryChange}
                  onTagToggle={handleTagToggle}
                  onSortChange={handleSortChange}
                  onClearFilters={handleClearFilters}
                  articleCount={getFilteredPosts().length}
                />
              </div>

              {/* Blog Posts Grid */}
              <div className="lg:col-span-3">
                {blogLoading ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-white/20 dark:bg-gray-900/25 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/30 dark:border-gray-700/40">
                        <div className="h-48 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 animate-pulse"></div>
                        <div className="p-6 space-y-4">
                          <div className="w-16 h-6 bg-gradient-to-r from-yellow-300/30 to-yellow-400/30 rounded-full animate-pulse"></div>
                          <div className="space-y-2">
                            <div className="h-6 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : getFilteredPosts().length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {getFilteredPosts().map((post, index) => (
                      <div
                        key={post.id}
                        className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative h-full bg-white/20 dark:bg-gray-900/25 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/30 dark:border-gray-700/40 transform transition-all duration-500 group-hover:bg-white/30 dark:group-hover:bg-gray-900/35 group-hover:shadow-3xl group-hover:border-white/40 dark:group-hover:border-gray-600/50">
                          
                          {/* Image */}
                          {post.image_url && (
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={post.image_url}
                                alt={post.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                          )}
                          
                          {/* Content */}
                          <div className="p-6">
                            {/* Category Badge */}
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 text-xs font-medium rounded-full" style={{
                                background: 'linear-gradient(45deg, rgba(244, 208, 63, 0.2), rgba(255, 215, 0, 0.2))',
                                color: '#b45309'
                              }}>
                                {post.category}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <h4 className="text-lg font-bold text-brand-black dark:text-brand-cream mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                            
                            {/* Excerpt */}
                            <p className="text-sm text-brand-black/70 dark:text-brand-cream/70 mb-4 line-clamp-3 leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-4">
                                {post.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded"
                                  >
                                    {tag.replace(/-/g, ' ')}
                                  </span>
                                ))}
                                {post.tags.length > 3 && (
                                  <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded">
                                    +{post.tags.length - 3} more
                                  </span>
                                )}
                              </div>
                            )}
                            
                            {/* Footer */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs text-brand-black/60 dark:text-brand-cream/60">
                                <Clock className="w-3 h-3" />
                                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                              </div>
                              
                              {/* Admin Actions */}
                              {isAdmin && (
                                <div className="flex gap-2">
                                  <button
                                    onClick={(e) => handleEditPost(post, e)}
                                    className="p-2 rounded-lg bg-blue-500/20 text-blue-600 hover:bg-blue-500/30 transition-colors"
                                    title="Edit Post"
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={(e) => handleDeletePost(post.id, e)}
                                    className="p-2 rounded-lg bg-red-500/20 text-red-600 hover:bg-red-500/30 transition-colors"
                                    title="Delete Post"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="rounded-lg p-8 border transform rotate-1" style={{
                      background: 'linear-gradient(45deg, rgba(244, 208, 63, 0.1), rgba(255, 215, 0, 0.1))',
                      borderColor: 'rgba(255, 215, 0, 0.3)'
                    }}>
                      <p className="text-brand-black dark:text-brand-cream font-bold text-lg mb-2 font-permanent-marker">
                        No Stories Found
                      </p>
                      <p className="text-brand-black/70 dark:text-brand-cream/70 font-kalam">
                        Try adjusting your filters or check back soon for fresh content.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SectionOverlayBox>

          {/* Testimonials Section */}
          {!loading && testimonials.length > 0 && (
            <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono mb-6">
                  REAL{" "}
                  <span className="font-permanent-marker transform rotate-1" style={{
                    color: 'transparent',
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}>
                    BUILDERS
                  </span>
                </h3>
              </div>
              
              <div className="relative h-48 flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentTestimonial 
                        ? 'opacity-100 translate-x-0' 
                        : index < currentTestimonial 
                          ? 'opacity-0 -translate-x-full' 
                          : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className="text-center p-8">
                      <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-60" />
                      <blockquote className="text-xl md:text-2xl font-medium text-brand-black dark:text-brand-cream mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center gap-4">
                        {testimonial.avatar_url && (
                          <img
                            src={testimonial.avatar_url}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2"
                            style={{ borderColor: '#ffd700' }}
                          />
                        )}
                        <div className="text-left">
                          <p className="font-bold text-brand-black dark:text-brand-cream">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-brand-black/70 dark:text-brand-cream/70">
                            {testimonial.city_area}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionOverlayBox>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;