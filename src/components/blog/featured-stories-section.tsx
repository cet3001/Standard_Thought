
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackBlogRead } from "@/components/analytics";
import StoryBadge from "@/components/ui/story-badge";
import ThemeTag from "@/components/ui/theme-tag";

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

interface FeaturedStoriesSectionProps {
  posts: BlogPost[];
}

const FeaturedStoriesSection = ({ posts }: FeaturedStoriesSectionProps) => {
  const navigate = useNavigate();
  
  // Get featured stories (editor's pick or popular)
  const featuredStories = posts.filter(post => post.is_editors_pick || post.is_popular).slice(0, 3);
  
  if (featuredStories.length === 0) return null;

  const handleReadStory = (post: BlogPost) => {
    trackBlogRead(post.title, post.slug);
    navigate(`/blog/${post.slug}`);
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-2">
          🔥 Featured Stories
        </h2>
        <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Our most impactful stories—real builders sharing real strategies that changed their financial game.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredStories.map((post, index) => (
          <Card 
            key={post.id}
            className="bg-gradient-to-br from-white/95 to-white/80 dark:from-brand-black/95 dark:to-brand-black/80 backdrop-blur-sm border-2 border-[#247EFF]/30 rounded-3xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#247EFF]/30 relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={post.image_url || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Special badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  {post.is_popular && <StoryBadge type="popular" />}
                  {post.is_editors_pick && <StoryBadge type="editors-pick" />}
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </CardHeader>
            
            <CardContent className="p-5">
              {/* Theme Tags */}
              {post.theme_tags && post.theme_tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.theme_tags.slice(0, 2).map((tag, tagIndex) => (
                    <ThemeTag key={tagIndex} tag={tag} className="text-xs" />
                  ))}
                </div>
              )}
              
              <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-[#247EFF] transition-colors text-[#0A0A0A] dark:text-brand-cream">
                {post.title}
              </h3>
              
              <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                </div>
                {post.view_count && (
                  <span>{post.view_count} views</span>
                )}
              </div>
              
              <Button 
                onClick={() => handleReadStory(post)}
                size="sm"
                className="w-full bg-[#247EFF] hover:bg-[#0057FF] text-white transition-all rounded-xl font-medium text-sm"
              >
                Read Featured Story
                <ArrowUp className="ml-1 h-3 w-3 rotate-45 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedStoriesSection;
