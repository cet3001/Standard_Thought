
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
      <SheetTrigger asChild className="lg:hidden">
        <Button 
          variant="ghost" 
          size="icon"
          className="text-[#0A0A0A] dark:text-brand-cream hover:text-[#247EFF] dark:hover:text-[#247EFF]"
          aria-label="Open mobile navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[300px] sm:w-[400px] bg-brand-cream dark:bg-brand-black border-[#247EFF]/20"
        aria-label="Mobile navigation menu"
        id="mobile-navigation-menu"
      >
        <nav className="flex flex-col space-y-4 mt-8" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-lg font-medium text-[#0A0A0A] dark:text-brand-cream hover:text-[#247EFF] dark:hover:text-[#247EFF] transition-colors py-2"
              aria-label={`Navigate to ${item.label} page`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Join Movement Button - only show if not logged in */}
          {!user && (
            <div className="pt-4 border-t border-[#247EFF]/20">
              <Link
                to="/auth"
                onClick={handleJoinMovement}
                className="block w-full"
              >
                <Button 
                  className="w-full bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-6 py-3 border-0"
                  aria-label="Join the wealth building movement - Sign up or login"
                >
                  Join Movement
                </Button>
              </Link>
            </div>
          )}
          
          {/* Auth Section for logged in users */}
          {user && (
            <div className="pt-4 border-t border-[#247EFF]/20">
              <AuthSection onAction={onClose} />
            </div>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
