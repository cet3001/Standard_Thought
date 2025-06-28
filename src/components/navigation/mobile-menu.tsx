
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
  
  console.log('MobileMenu render - isOpen:', isOpen);
  console.log('MobileMenu debug - Sheet state when rendered:', isOpen ? 'OPEN' : 'CLOSED');
  
  const navItems = [
    { href: "/", label: "Start Here" },
    { href: "/about", label: "Mindset Tools" },
    { href: "/blog", label: "Builder Stories" },
    { href: "/resources", label: "Success Strategies" },
    { href: "/faq", label: "Wealth Wisdom" },
  ];

  const handleClose = () => {
    console.log('MobileMenu - closing menu from:', isOpen, 'to: false');
    setIsOpen(false);
  };

  const handleJoinMovement = () => {
    console.log('MobileMenu - Join Movement clicked, closing menu');
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
          className="hover:bg-[#247EFF]/10 relative overflow-hidden"
          onClick={() => {
            console.log('🔥 Hamburger clicked, toggling from:', isOpen, 'to:', !isOpen);
            setIsOpen(!isOpen);
          }}
        >
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.4)_1px,_transparent_0)] bg-[length:8px_8px]"></div>
          <Menu className="h-6 w-6 relative z-10" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-[300px] sm:w-[400px] bg-white border-r border-[#247EFF]/20 relative overflow-hidden z-[100] shadow-2xl"
        aria-label="Navigation menu"
        id="navigation-menu"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to different sections of the site
        </SheetDescription>

        {/* FULLY OPAQUE background - no bleed-through */}
        <div className="absolute inset-0 bg-white">
          {/* Contained, lighter urban textures - won't clash */}
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.4)_1px,_transparent_0)] bg-[length:16px_16px]"></div>
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,_transparent_45%,_rgba(36,126,255,0.15)_47%,_rgba(36,126,255,0.15)_53%,_transparent_55%)] bg-[length:12px_12px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#247EFF]/8 via-transparent via-50% to-[#FFD700]/8"></div>
          
          {/* Subtle corner accents - urban but not overwhelming */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#247EFF]/12 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#FFD700]/12 to-transparent rounded-tr-full"></div>
        </div>
        
        <nav className="flex flex-col space-y-6 mt-12 relative z-20" role="navigation" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className="group relative text-xl font-bold text-gray-900 hover:text-[#247EFF] transition-all duration-300 border-b border-[#247EFF]/15 pb-3 pl-4"
              aria-label={`Navigate to ${item.label} page`}
              onClick={handleClose}
              style={{ 
                animationDelay: `${index * 50}ms`,
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#247EFF] to-[#FFD700] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
              <span className="relative z-10 font-extrabold">{item.label}</span>
            </Link>
          ))}
          
          <div className="pt-6 border-t border-[#247EFF]/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/8 to-[#FFD700]/8 rounded-lg -mx-4 -my-2"></div>
            <div className="relative z-10">
              <AuthSection onAction={handleClose} />
            </div>
          </div>
          
          <div className="pt-4 space-y-3">
            <button 
              onClick={handleJoinMovement}
              className="w-full bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-6 py-3 text-base relative overflow-hidden border-0"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}
            >
              <span className="relative z-10">Join Movement</span>
            </button>
            
            <button 
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-6 py-4 border-0 text-lg relative overflow-hidden"
              style={{ 
                fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)' 
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
