
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ThemeTagProps {
  tag: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
}

const ThemeTag = ({ tag, onClick, className }: ThemeTagProps) => {
  const getTagStyles = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'ai':
        return 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200';
      case 'credit':
        return 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200';
      case 'mindset':
        return 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200';
      case 'investing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200';
      case 'side hustle':
        return 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200';
      case 'business':
        return 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200';
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs font-medium px-2 py-1 rounded-full cursor-pointer transition-colors",
        getTagStyles(tag),
        onClick && "hover:shadow-sm",
        className
      )}
      onClick={handleClick}
    >
      {tag}
    </Badge>
  );
};

export default ThemeTag;
