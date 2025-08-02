import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getBlogPosts, BlogPost, deleteBlogPost } from "@/lib/api";
import { Clock, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { BlogFilters, BlogCategory, BlogTag, SortOption, FILTER_CATEGORIES } from "@/components/blog/BlogFilters";
import { SectionOverlayBox } from "@/components/layout";

interface BlogGridProps {
  isVisible: boolean;
}

const BlogGrid = ({ isVisible }: BlogGridProps) => {
  const { isAdmin } = useAuth();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All Categories");
  const [selectedTags, setSelectedTags] = useState<BlogTag[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const navigate = useNavigate();

  // Sample micro-testimonials for hover states
  const testimonials = [
    "This finally helped me drop survival mode. – Tyrese",
    "Real talk, this changed my whole perspective. – Maya", 
    "Wish I had this 5 years ago. – DeShawn",
    "Finally someone said what I was thinking. – Jasmine",
    "This is the blueprint I needed. – Marcus",
    "Broke it down perfectly for me. – Keisha",
    "No cap, this is pure game. – Jordan",
    "This hit different for real. – Aaliyah"
  ];

  // Get category ribbon styling for a tag
  const getCategoryRibbon = (tags: string[]) => {
    if (!tags || tags.length === 0) return { label: "GENERAL", color: "#6B7280", textColor: "#F9FAFB" };
    
    for (const tag of tags) {
      for (const [categoryName, categoryData] of Object.entries(FILTER_CATEGORIES)) {
        if ((categoryData.tags as readonly string[]).includes(tag)) {
          const ribbonStyles = {
            "Mind Games": { label: "MIND GAMES", color: "#D9442C", textColor: "#FFF8E7" },
            "First In The Family": { label: "FIRST IN THE FAMILY", color: "#4F5D75", textColor: "#F2F2F2" },
            "Culture & Cash": { label: "CULTURE & CASH", color: "#D4AF37", textColor: "#0A0A0A" },
            "Side Streams": { label: "SIDE STREAMS", color: "#4BAF73", textColor: "#F9F9F9" },
            "Receipts & Moves": { label: "RECEIPTS & MOVES", color: "#2D2D2D", textColor: "#FFEF7C" },
            "Spirit & Rewired": { label: "SPIRIT & REWIRED", color: "#776C9E", textColor: "#FEFEF7" }
          };
          return ribbonStyles[categoryName] || { label: categoryName.toUpperCase(), color: "#6B7280", textColor: "#F9FAFB" };
        }
      }
    }
    return { label: "GENERAL", color: "#6B7280", textColor: "#F9FAFB" };
  };

  // Get random testimonial for post
  const getTestimonial = (postId: string) => {
    const index = parseInt(postId.slice(-1), 16) % testimonials.length;
    return testimonials[index];
  };

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
    // Pass the slug in the URL so refreshing still loads the post
    navigate(`/create-post?slug=${post.slug}`, { state: { editPost: post } });
  };

  useEffect(() => {
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

  return (
    <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono mb-6">
          Choose Your{" "}
          <span className="font-permanent-marker transform rotate-1" style={{
            color: 'transparent',
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'pearlescent 3s ease-in-out infinite',
            textShadow: '2px 2px 4px rgba(0,0,0,0.4), -1px -1px 2px rgba(255,255,255,0.1)',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            Struggle
          </span>
          —We Wrote About It
        </h3>
        <p className="text-lg text-white/80 dark:text-brand-cream/80 max-w-2xl mx-auto font-kalam">
          Start here if you never got the memo. Filter the stories by what's holding you back—or what you're building up next.
        </p>
      </div>

      {/* Two-column layout: 25% filters, 75% blog grid */}
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
                     
                     {/* Hover Testimonial Overlay */}
                     <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
                       <div className="text-center">
                         <p className="text-white font-kalam text-sm italic leading-relaxed">
                           "{getTestimonial(post.id)}"
                         </p>
                       </div>
                     </div>

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
                     
                     {/* Category Ribbon - Top Right Corner */}
                     {(() => {
                       const ribbon = getCategoryRibbon(post.tags || []);
                       return (
                         <div 
                           className="absolute top-4 right-4 z-10 px-3 py-1.5 text-xs font-semibold tracking-wide transform rotate-12 shadow-lg"
                           style={{
                             backgroundColor: ribbon.color,
                             color: ribbon.textColor,
                             fontFamily: 'Inter, sans-serif',
                             fontWeight: '600',
                             clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
                           }}
                         >
                           {ribbon.label}
                         </div>
                       );
                     })()}

                     {/* Content */}
                     <div className="p-6 pt-8">
                      
                      {/* Title */}
                      <h4 className="text-lg font-bold mb-3 line-clamp-2 font-ibm-plex-mono leading-tight transition-colors duration-300 drop-shadow-sm" style={{
                        color: 'transparent',
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'pearlescent 3s ease-in-out infinite'
                      }}>
                        {post.title}
                      </h4>
                      
                      {/* Excerpt */}
                      <p className="text-sm text-white/80 dark:text-brand-cream/80 mb-4 line-clamp-3 leading-relaxed">
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
                        <div className="flex items-center gap-2 text-xs" style={{
                          color: 'transparent',
                          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                          backgroundSize: '400% 400%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          animation: 'pearlescent 3s ease-in-out infinite',
                          opacity: 0.8
                        }}>
                          <Clock className="w-3 h-3" style={{
                            color: 'transparent',
                            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                            backgroundSize: '400% 400%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'pearlescent 3s ease-in-out infinite'
                          }} />
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
                 <p className="font-bold text-lg mb-2 font-permanent-marker" style={{
                   color: 'transparent',
                   background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                   backgroundSize: '400% 400%',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundClip: 'text',
                   animation: 'pearlescent 3s ease-in-out infinite'
                 }}>
                   Hold up—our real ones are working on this.
                 </p>
                 <p className="text-white/80 dark:text-brand-cream/80 font-kalam">
                   Hit us back soon.
                 </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionOverlayBox>
  );
};

export default BlogGrid;