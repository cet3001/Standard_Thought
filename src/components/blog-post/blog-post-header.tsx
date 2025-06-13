
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface BlogPostHeaderProps {
  category: string;
  featured: boolean;
  title: string;
  excerpt: string;
  createdAt: string;
  readTime: string;
}

const BlogPostHeader = ({ 
  category, 
  featured, 
  title, 
  excerpt, 
  createdAt, 
  readTime 
}: BlogPostHeaderProps) => {
  return (
    <header className="mb-12">
      <div className="flex flex-wrap gap-3 mb-6">
        <Badge className="bg-[#247EFF] text-white px-4 py-2 text-sm font-medium hover:bg-[#247EFF]">
          {category}
        </Badge>
        {featured && (
          <Badge className="bg-brand-cream text-[#0A0A0A] px-4 py-2 text-sm font-medium hover:bg-brand-cream dark:bg-brand-black dark:text-brand-cream">
            Featured
          </Badge>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-6 leading-tight">
        {title}
      </h1>

      <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-8 leading-relaxed">
        {excerpt}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-[#247EFF]/20">
        <div className="flex items-center gap-6 text-[#0A0A0A]/70 dark:text-brand-cream/70">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogPostHeader;
