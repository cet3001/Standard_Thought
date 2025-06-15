
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Book, Users, Gift, TrendingUp } from "lucide-react";

interface NavItemsProps {
  className?: string;
  showButton?: boolean;
  onItemClick?: () => void;
}

const NavItems = ({ className, showButton = false, onItemClick }: NavItemsProps) => {
  const location = useLocation();
  
  const navItems = [
    { 
      name: "Stories", 
      path: "/blog", 
      icon: Book,
      description: "Real builder journeys"
    },
    { 
      name: "Resources", 
      path: "/resources", 
      icon: Gift,
      description: "Free tools & guides"
    },
    { 
      name: "About", 
      path: "/about", 
      icon: Users,
      description: "Our mission"
    },
  ];

  return (
    <div className={cn("flex items-center", className)}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.name}
            to={item.path}
            onClick={onItemClick}
            className={cn(
              "group relative flex items-center space-x-2 px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105",
              isActive 
                ? "bg-[#247EFF] text-white shadow-lg shadow-[#247EFF]/25" 
                : "text-typography-primary hover:text-[#247EFF] hover:bg-[#247EFF]/10"
            )}
          >
            <Icon className={cn(
              "w-6 h-6 transition-all duration-300",
              isActive ? "animate-bounce" : "group-hover:scale-110 group-hover:rotate-12"
            )} />
            <span className="font-semibold text-lg">{item.name}</span>
            
            {/* Hover tooltip */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
              {item.description}
            </div>
          </Link>
        );
      })}
      
      {showButton && (
        <Link to="/sales">
          <Button 
            className="ml-6 bg-gradient-to-r from-[#247EFF] to-[#007cba] hover:from-[#007cba] hover:to-[#247EFF] text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <TrendingUp className="w-5 h-5 mr-2 animate-pulse" />
            Level Up
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavItems;
