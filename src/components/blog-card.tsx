
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowUp, Calendar, Clock } from "lucide-react";
import { trackBlogRead } from "@/components/analytics";

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

  const handleReadStory = (post: BlogPost) => {
    trackBlogRead(post.title, post.slug);
    navigate(`/blog/${post.slug}`);
  };

  return (
    <Card 
      className={`card-hover bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-accent/20 rounded-3xl overflow-hidden group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-3xl">
          <AspectRatio ratio={16/9} className="bg-gray-50 dark:bg-gray-900">
            <img
              src={post.image_url || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </AspectRatio>
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
          onClick={() => handleReadStory(post)}
          variant="ghost" 
          className="w-full group-hover:bg-accent group-hover:text-black transition-all rounded-2xl text-brand-black dark:text-brand-cream"
        >
          Read Story
          <ArrowUp className="ml-2 h-4 w-4 rotate-45 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
