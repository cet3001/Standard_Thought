
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calendar } from "lucide-react";
import OptimizedImage from "./optimized-image";

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
  priority?: boolean;
}

const BlogCardOptimized = ({ post, index, isVisible, priority = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <article
      className={`group bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-accent/20 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${200 + index * 100}ms`,
        minHeight: '400px'
      }}
    >
      <div className="aspect-video overflow-hidden">
        <OptimizedImage
          src={post.image_url || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full group-hover:scale-110 transition-transform duration-700"
          width={400}
          height={225}
          priority={priority || index < 2}
          placeholder="/placeholder.svg"
        />
      </div>
      
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-3 text-brand-black dark:text-brand-cream group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-brand-black/70 dark:text-brand-cream/70 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-4 pt-2 border-t border-accent/10">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-sm text-brand-black/60 dark:text-brand-cream/60">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(post.created_at)}
          </div>
        </div>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="block"
          aria-label={`Read more about ${post.title}`}
        >
          <Button 
            className="w-full bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black font-semibold py-3 rounded-2xl transition-all duration-300 group-hover:scale-105"
          >
            Read Story
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default BlogCardOptimized;
