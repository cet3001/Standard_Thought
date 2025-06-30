
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  const [imageError, setImageError] = useState(false);

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

  const handleImageError = () => {
    setImageError(true);
  };

  const imageAlt = post.image_url 
    ? `${post.title} - ${post.category} story on Standardthought`
    : `Standardthought ${post.category} article`;

  return (
    <Card 
      onClick={handleCardClick}
      className={`cursor-pointer bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-white/20 dark:border-brand-cream/20 rounded-lg overflow-hidden group transition-all duration-1000 shadow-lg hover:shadow-xl hover:scale-105 transform-gpu relative
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ 
        animationDelay: `${0.2 + index * 0.1}s`
      }}
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 right-4 z-20">
          <div 
            className="bg-[#FFD700] text-black px-3 py-1 text-xs font-bold transform rotate-12 shadow-md rounded"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', cursive",
              textShadow: '1px 1px 0px rgba(0,0,0,0.2)'
            }}
          >
            <Star className="w-3 h-3 inline mr-1 fill-current" />
            FEATURED
          </div>
        </div>
      )}

      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16/9} className="bg-gray-50 dark:bg-gray-900">
            <img
              src={imageError || !post.image_url ? "/placeholder.svg" : post.image_url}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={handleImageError}
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
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#247EFF] transition-colors text-brand-black dark:text-brand-cream">
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
