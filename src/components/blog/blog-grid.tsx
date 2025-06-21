import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowUp } from "lucide-react";
import { trackBlogRead } from "@/components/analytics";
import BlogPostActions from "@/components/blog-post-actions";
import ThemeTag from "@/components/ui/theme-tag";
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

  const handleReadStory = (post: BlogPost) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
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
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
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
          
          
          <CardFooter className="p-6 pt-0 space-y-3">
            <Button 
              onClick={() => handleReadStory(post)}
              className="w-full bg-[#247EFF] hover:bg-[#0057FF] text-white transition-all rounded-2xl font-medium"
            >
              Read Story
              <ArrowUp className="ml-2 h-4 w-4 rotate-45 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {isAdmin && (
              <BlogPostActions
                postId={post.id}
                postTitle={post.title}
                postSlug={post.slug}
                onDelete={onPostDeleted}
              />
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogGrid;
