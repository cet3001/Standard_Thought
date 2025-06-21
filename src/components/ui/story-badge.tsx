
import { Badge } from "@/components/ui/badge";
import { Star, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryBadgeProps {
  type: "popular" | "editors-pick";
  className?: string;
}

const StoryBadge = ({ type, className }: StoryBadgeProps) => {
  if (type === "popular") {
    return (
      <Badge 
        className={cn(
          "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 font-semibold px-2 py-1 text-xs shadow-md",
          className
        )}
      >
        <Star className="w-3 h-3 mr-1 fill-current" />
        Most Popular
      </Badge>
    );
  }

  if (type === "editors-pick") {
    return (
      <Badge 
        className={cn(
          "bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0 font-semibold px-2 py-1 text-xs shadow-md",
          className
        )}
      >
        <Award className="w-3 h-3 mr-1 fill-current" />
        Editor's Pick
      </Badge>
    );
  }

  return null;
};

export default StoryBadge;
