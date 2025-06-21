
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ThemeTagProps {
  tag: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  isSelected?: boolean;
}

const ThemeTag = ({ tag, onClick, className, isSelected = false }: ThemeTagProps) => {
  const getTagStyles = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    
    // Color-coded by category for better visual hierarchy
    if (lowerTag.includes('ai') || lowerTag.includes('automation')) {
      return 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800';
    }
    if (lowerTag.includes('credit')) {
      return 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
    }
    if (lowerTag.includes('mindset') || lowerTag.includes('beginner')) {
      return 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800';
    }
    if (lowerTag.includes('investing') || lowerTag.includes('wealth')) {
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800';
    }
    if (lowerTag.includes('side hustle') || lowerTag.includes('business')) {
      return 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800';
    }
    if (lowerTag.includes('$') || lowerTag.includes('fast') || lowerTag.includes('quick')) {
      return 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800';
    }
    
    return 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800';
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 min-h-[32px] touch-manipulation",
        "hover:shadow-md hover:scale-105 active:scale-95",
        isSelected && "ring-2 ring-[#247EFF] bg-[#247EFF]/10 text-[#247EFF]",
        getTagStyles(tag),
        onClick && "hover:shadow-sm",
        className
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as any);
        }
      }}
    >
      {tag}
    </Badge>
  );
};

export default ThemeTag;
