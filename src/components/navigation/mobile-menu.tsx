
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthSection from "./auth-section";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const navItems = [
    { href: "/", label: "Start Here" },
    { href: "/about", label: "Mindset Tools" },
    { href: "/blog", label: "Builder Stories" },
    { href: "/resources", label: "Success Strategies" },
    { href: "/faq", label: "Wealth Wisdom" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          className="hover:bg-[#247EFF]/10"
        >
          <Menu className="h-6 w-6 text-[#0A0A0A]" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] bg-white border-r border-[#247EFF]/20 z-[100] shadow-2xl"
        aria-label="Navigation menu"
        id="navigation-menu"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to different sections of the site
        </SheetDescription>

        <nav className="flex flex-col space-y-6 mt-8" role="navigation" aria-label="Main navigation">
          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className="group relative text-xl font-bold text-[#0A0A0A] hover:text-[#247EFF] transition-all duration-300 border-b border-[#247EFF]/20 pb-3 pl-4"
              aria-label={`Navigate to ${item.label} page`}
              onClick={handleClose}
              style={{ 
                animationDelay: `${index * 50}ms`,
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                fontFamily: "'Inter', system-ui, sans-serif"
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#247EFF] to-[#FFD700] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}

          {/* Auth Section */}
          <div className="pt-6 border-t border-[#247EFF]/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6E3]/20 to-transparent rounded-lg -mx-4 -my-2"></div>
            <div className="relative z-10">
              <AuthSection onAction={handleClose} />
            </div>
          </div>

          {/* CTA Button - Only the golden one remains */}
          <div className="pt-4 space-y-3">
            <button
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-6 py-4 border-0 text-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
              style={{
                fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
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
