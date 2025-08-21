import { Button } from "@/components/ui/button";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

export const BackButton = ({ 
  className = "", 
  variant = "outline" 
}: BackButtonProps) => {
  return (
    <Button 
      asChild 
      variant={variant}
      className={`flex items-center gap-2 hover:bg-yellow-400/10 hover:text-yellow-400 hover:border-yellow-400/50 transition-colors ${className}`}
    >
      <Link to="/admin">
        <ArrowLeft className="h-4 w-4" />
        <LayoutDashboard className="h-4 w-4" />
        Back to Dashboard
      </Link>
    </Button>
  );
};