
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star } from "lucide-react";
import { trackBlogRead } from "@/lib/analytics-utils";
import BlogPostActions from "@/components/blog-post-actions";
import ThemeTag from "@/components/ui/theme-tag";
import StoryBadge from "@/components/ui/story-badge";
import { useAuth } from "@/contexts/AuthContext";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  tags: string[];
  theme_tags?: string[];
  featured: boolean;
  published: boolean;
  created_at: string;
  slug: string;
  is_editors_pick?: boolean;
  is_popular?: boolean;
  view_count?: number;
}

interface BlogGridProps {
  posts: BlogPost[];
  onPostDeleted: () => void;
  onThemeTagClick?: (tag: string) => void;
}

const BlogGrid = ({ posts, onPostDeleted, onThemeTagClick }: BlogGridProps) => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const handleCardClick = (post: BlogPost) => {
    trackBlogRead(post.title, post.slug);
    navigate(`/blog/${post.slug}`);
  };

  const handleThemeTagClick = (tag: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onThemeTagClick) {
      onThemeTagClick(tag);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-none">
        {posts.map((post, index) => (
          <Card 
            key={post.id} 
            onClick={() => handleCardClick(post)}
            className={`cursor-pointer bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-none rounded-none overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-lg relative
              /* Torn paper effect */
              before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:bg-white/90 dark:before:bg-brand-black/80
              before:shadow-[0_3px_0_0_rgba(0,0,0,0.1)] before:z-10
              after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-2
              after:bg-gradient-to-r after:from-transparent after:via-[#247EFF]/20 after:to-transparent
              /* Notebook margin line */
              shadow-lg hover:shadow-xl transform-gpu
            `}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              // Add subtle paper texture with margin line
              backgroundImage: `
                linear-gradient(90deg, rgba(255,107,107,0.3) 1px, transparent 1px),
                linear-gradient(180deg, transparent 32px, rgba(229,231,235,0.4) 32px, rgba(229,231,235,0.4) 33px, transparent 33px)
              `,
              backgroundSize: '24px 100%, 100% 33px',
              backgroundPosition: '24px 0, 0 0'
            }}
          >
            {/* RAW PICK Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4 z-20">
                <div 
                  className="bg-[#FF6B6B] text-white px-3 py-1 text-xs font-bold transform rotate-12 shadow-md"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', cursive",
                    textShadow: '1px 1px 0px rgba(0,0,0,0.5)',
                    clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)'
                  }}
                >
                  <Star className="w-3 h-3 inline mr-1 fill-current" />
                  RAW PICK
                </div>
              </div>
            )}

            <CardHeader className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={post.image_url || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
                  <Badge className="bg-[#247EFF] text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-[#247EFF]">
                    {post.category}
                  </Badge>
                </div>
                
                {/* Special story badges in top-left corner (below category) */}
                <div className="absolute top-14 left-4 flex flex-col gap-2 z-10">
                  {post.is_popular && <StoryBadge type="popular" />}
                  {post.is_editors_pick && <StoryBadge type="editors-pick" />}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6 relative z-10">
              {/* Theme Tags */}
              {post.theme_tags && post.theme_tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.theme_tags.map((tag, tagIndex) => (
                    <ThemeTag
                      key={tagIndex}
                      tag={tag}
                      onClick={(e) => handleThemeTagClick(tag, e)}
                    />
                  ))}
                </div>
              )}
              
              {/* Typewriter-style title */}
              <h3 
                className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#247EFF] transition-colors text-[#0A0A0A] dark:text-brand-cream"
                style={{ 
                  fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
                  letterSpacing: '0.5px',
                  lineHeight: '1.3'
                }}
              >
                {post.title}
              </h3>
              
              <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-4 line-clamp-3 font-medium">
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

              {/* Admin actions - prevent card click propagation */}
              {isAdmin && (
                <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                  <BlogPostActions
                    postId={post.id}
                    postTitle={post.title}
                    postSlug={post.slug}
                    onDelete={onPostDeleted}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
