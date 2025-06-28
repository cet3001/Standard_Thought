
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, Clock, Star } from "lucide-react";
import { trackBlogRead } from "@/lib/analytics-utils";

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

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isVisible: boolean;
}

const BlogCard = ({ post, index, isVisible }: BlogCardProps) => {
  const navigate = useNavigate();

  const getReadTime = (excerpt: string) => {
    const wordsPerMinute = 200;
    const wordCount = excerpt.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const handleCardClick = () => {
    trackBlogRead(post.title, post.slug);
    navigate(`/blog/${post.slug}`);
  };

  // Generate SEO-rich ALT text
  const imageAlt = post.image_url 
    ? `${post.title} - ${post.category} story on Standardthought: Building legacy from nothing`
    : `Standardthought ${post.category} article placeholder`;

  // Check if this is a "RAW PICK" (featured story)
  const isRawPick = post.featured;

  return (
    <Card 
      onClick={handleCardClick}
      className={`cursor-pointer bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-none rounded-none overflow-hidden group transition-all duration-1000 relative
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        /* Torn paper effect */
        before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:bg-white/90 dark:before:bg-brand-black/80
        before:shadow-[0_3px_0_0_rgba(0,0,0,0.1)] before:z-10
        after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-2
        after:bg-gradient-to-r after:from-transparent after:via-[#247EFF]/20 after:to-transparent
        /* Notebook margin line */
        shadow-lg hover:shadow-xl hover:scale-105 transform-gpu
        bg-[linear-gradient(to_right,#ff6b6b_1px,transparent_1px)] bg-[size:24px_100%] bg-[position:24px_0]
        bg-[linear-gradient(to_bottom,transparent_32px,#e5e7eb_32px,#e5e7eb_33px,transparent_33px)] bg-[size:100%_33px]
      `}
      style={{ 
        animationDelay: `${0.2 + index * 0.1}s`,
        // Add subtle paper texture
        backgroundImage: `
          linear-gradient(90deg, rgba(255,107,107,0.3) 1px, transparent 1px),
          linear-gradient(180deg, transparent 32px, rgba(229,231,235,0.4) 32px, rgba(229,231,235,0.4) 33px, transparent 33px)
        `,
        backgroundSize: '24px 100%, 100% 33px',
        backgroundPosition: '24px 0, 0 0'
      }}
    >
      {/* RAW PICK Badge */}
      {isRawPick && (
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
          <AspectRatio ratio={16/9} className="bg-gray-50 dark:bg-gray-900">
            <img
              src={post.image_url || "/placeholder.svg"}
              alt={imageAlt}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </AspectRatio>
          <div className="absolute top-4 left-4">
            <span className="bg-[#247EFF] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
              {post.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 relative z-10">
        {/* Typewriter-style title */}
        <h3 
          className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#247EFF] transition-colors text-brand-black dark:text-brand-cream"
          style={{ 
            fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
            letterSpacing: '0.5px',
            lineHeight: '1.3'
          }}
        >
          {post.title}
        </h3>
        
        <p className="text-brand-black/70 dark:text-brand-cream/70 mb-4 line-clamp-3 font-medium">
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
    </Card>
  );
};

export default BlogCard;
