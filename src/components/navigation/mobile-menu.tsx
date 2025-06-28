
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
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
          className="hover:bg-[#247EFF]/10 relative overflow-hidden"
        >
          {/* Add subtle texture to hamburger button */}
          <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle_at_1px_1px,_rgba(36,126,255,0.3)_1px,_transparent_0)] bg-[length:8px_8px]"></div>
          <Menu className="h-6 w-6 relative z-10" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-[300px] sm:w-[400px] bg-white border-r border-[#247EFF]/20 relative overflow-hidden"
        aria-label="Navigation menu"
        id="navigation-menu"
      >
        {/* Add required accessibility components */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to different sections of the site
        </SheetDescription>

        {/* Multi-layered background with urban texture */}
        <div className="absolute inset-0 bg-white">
          {/* Primary texture layer - dot pattern */}
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,_rgba(36,126,255,0.4)_1px,_transparent_0)] bg-[length:16px_16px]"></div>
          
          {/* Secondary texture layer - diagonal lines */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(45deg,_transparent_45%,_rgba(36,126,255,0.3)_47%,_rgba(36,126,255,0.3)_53%,_transparent_55%)] bg-[length:12px_12px]"></div>
          
          {/* Accent gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#247EFF]/5 via-transparent via-50% to-[#FFD700]/5"></div>
          
          {/* Corner accent elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#247EFF]/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FFD700]/10 to-transparent rounded-tr-full"></div>
        </div>
        
        <nav className="flex flex-col space-y-6 mt-8 relative z-10" role="navigation" aria-label="Main navigation">
          {/* Navigation Links with enhanced styling */}
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className="group relative text-xl font-semibold text-gray-900 hover:text-[#247EFF] transition-all duration-300 border-b border-[#247EFF]/10 pb-3 pl-4"
              aria-label={`Navigate to ${item.label} page`}
              onClick={onClose}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Animated accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#247EFF] to-[#FFD700] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
              
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
              
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
          
          {/* Auth Section with enhanced container */}
          <div className="pt-6 border-t border-[#247EFF]/20 relative">
            {/* Subtle background accent for auth section */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/3 to-[#FFD700]/3 rounded-lg -mx-4 -my-2"></div>
            <div className="relative z-10">
              <AuthSection onAction={onClose} />
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="pt-4 space-y-3">
            {/* Join Movement Button */}
            <button 
              onClick={handleJoinMovement}
              className="w-full bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-6 py-3 text-base relative overflow-hidden border-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            >
              <span className="relative z-10">Join Movement</span>
            </button>
            
            {/* Get Blueprint Button - Primary CTA */}
            <button className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-6 py-4 border-0 text-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
              style={{ 
                fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                textShadow: '1px 1px 0px rgba(0,0,0,0.2)' 
              }}
            >
              <span className="relative z-10">Get the Blueprint</span>
            </button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
