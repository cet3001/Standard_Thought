
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthSection from "./auth-section";

interface MobileMenuProps {
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
}

const MobileMenu = ({ isOpen, onToggle, onClose }: MobileMenuProps) => {
  const { user } = useAuth();
  
  const navItems = [
    { href: "/", label: "Start Here" },
    { href: "/about", label: "Mindset Tools" },
    { href: "/blog", label: "Builder Stories" },
    { href: "/resources", label: "Success Strategies" },
    { href: "/faq", label: "Wealth Wisdom" },
  ];

  const handleJoinMovement = () => {
    onClose?.();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          className="hover:bg-[#247EFF]/10"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-[300px] sm:w-[400px] bg-brand-cream/95 dark:bg-brand-black/95 backdrop-blur-md"
        aria-label="Navigation menu"
        id="navigation-menu"
      >
        {/* Urban texture background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        
        <nav className="flex flex-col space-y-6 mt-8 relative z-10" role="navigation" aria-label="Main navigation">
          {/* Navigation Links */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-xl font-semibold text-[#0A0A0A] dark:text-brand-cream hover:text-[#247EFF] dark:hover:text-[#247EFF] transition-colors border-b border-[#247EFF]/10 pb-3"
              aria-label={`Navigate to ${item.label} page`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Auth Section */}
          <div className="pt-6 border-t border-[#247EFF]/20">
            <AuthSection onAction={onClose} />
          </div>
          
          {/* Get Blueprint CTA - Prominent in menu */}
          <div className="pt-4">
            <button className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-6 py-4 border-0 text-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]">
              Get the Blueprint
            </button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
