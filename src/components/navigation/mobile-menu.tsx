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
  
  const navItems = [
    { href: "/", label: "Start Here" },
    { href: "/about", label: "Mindset Tools" },
    { href: "/blog", label: "Builder Stories" },
    { href: "/resources", label: "Success Strategies" },
    { href: "/faq", label: "Wealth Wisdom" },
  ];

  const handleClose = () => {
    console.log('MobileMenu - closing menu');
    setIsOpen(false);
  };

  const handleToggle = () => {
    console.log('MobileMenu - toggle called, current state:', isOpen);
    setIsOpen(!isOpen);
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
          onClick={handleToggle}
        >
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
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to different sections of the site
        </SheetDescription>

        {/* Debug indicator - remove after testing */}
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-50">
          Menu Open: {isOpen ? 'YES' : 'NO'}
        </div>

        {/* Simplified background - keep it urban but lighter */}
        <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_rgba(36,126,255,0.4)_1px,_transparent_0)] bg-[length:16px_16px]"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,_transparent_45%,_rgba(36,126,255,0.3)_47%,_rgba(36,126,255,0.3)_53%,_transparent_55%)] bg-[length:12px_12px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#247EFF]/3 via-transparent via-50% to-[#FFD700]/3"></div>
        </div>
        
        <nav className="flex flex-col space-y-6 mt-12 relative z-20" role="navigation" aria-label="Main navigation">
          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className="group relative text-xl font-semibold text-gray-900 hover:text-[#247EFF] transition-all duration-300 border-b border-[#247EFF]/10 pb-3 pl-4"
              aria-label={`Navigate to ${item.label} page`}
              onClick={handleClose}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#247EFF] to-[#FFD700] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
          
          {/* Auth Section */}
          <div className="pt-6 border-t border-[#247EFF]/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/3 to-[#FFD700]/3 rounded-lg -mx-4 -my-2"></div>
            <div className="relative z-10">
              <AuthSection onAction={handleClose} />
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="pt-4 space-y-3">
            <button 
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-6 py-3 text-base relative overflow-hidden border-0"
            >
              <span className="relative z-10">Join Movement</span>
            </button>
            
            <button 
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-6 py-4 border-0 text-lg relative overflow-hidden"
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
