import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BlogBreadcrumbsProps {
  category: string;
  title: string;
}

const BlogBreadcrumbs = ({ category, title }: BlogBreadcrumbsProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-brand-black/60 dark:text-brand-cream/60 mb-6" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-brand-black dark:hover:text-brand-cream transition-colors duration-200"
      >
        <Home size={14} />
        <span>The Root</span>
      </Link>
      
      <ChevronRight size={14} className="text-brand-black/40 dark:text-brand-cream/40" />
      
      <Link 
        to="/blog" 
        className="hover:text-brand-black dark:hover:text-brand-cream transition-colors duration-200"
      >
        Receipts & Real Talk
      </Link>
      
      <ChevronRight size={14} className="text-brand-black/40 dark:text-brand-cream/40" />
      
      <span className="text-brand-black/90 dark:text-brand-cream/90 font-medium">
        {category}
      </span>
      
      <ChevronRight size={14} className="text-brand-black/40 dark:text-brand-cream/40" />
      
      <span className="text-brand-black dark:text-brand-cream font-medium truncate max-w-[200px]">
        {title}
      </span>
    </nav>
  );
};

export default BlogBreadcrumbs;