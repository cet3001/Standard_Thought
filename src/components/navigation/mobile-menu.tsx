
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthSection from "./auth-section";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAdmin } = useAuth();

  const navItems = [
    { href: "/", label: "The Root", tagline: "The Movement Begins Here" },
    { href: "/about", label: "The Shift", tagline: "Our Story & Your Growth Tools" },
    { href: "/blog", label: "The Code They Never Gave Us", tagline: "Real People. Real Struggles. Real Progress." },
    { href: "/sales", label: "Run the Play", tagline: "Game Plans, Guides & Opportunities" },
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
          className="hover:bg-[#FFD700]/10 p-2"
        >
          <Menu 
            className="h-7 w-7" 
            aria-hidden="true"
            style={{
              color: '#FFD700',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] bg-gray-900/20 backdrop-blur-md border-r border-[#247EFF]/30 z-[100] shadow-2xl"
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
            <div key={item.href} className="group">
              <Link
                to={item.href}
                className="relative text-lg font-bold transition-all duration-300 border-b border-[#FFD700]/30 pb-3 pl-4 block"
                aria-label={`Navigate to ${item.label} page`}
                onClick={handleClose}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive"
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"
                  style={{
                    background: 'linear-gradient(180deg, #FFD700, #F4D03F, #FFEB3B, #D4AF37)',
                    backgroundSize: '100% 200%',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}
                ></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255,215,0,0.1), transparent)',
                  }}
                ></div>
                <div className="relative z-10">
                  <span 
                    className="transform -rotate-1 inline-block"
                    style={{
                      background: 'linear-gradient(45deg, #FFD700, #F4D03F, #FFEB3B, #D4AF37)',
                      backgroundSize: '200% 200%',
                      animation: 'pearlescent 3s ease-in-out infinite',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {item.label}
                  </span>
                  <div 
                    className="text-xs text-brand-cream/90 mt-1 italic font-normal"
                    style={{
                      fontFamily: "'Kalam', 'Comic Neue', cursive",
                      transform: 'rotate(0.5deg)',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(255,215,0,0.3)',
                      color: '#FFF8DC'
                    }}
                  >
                    {item.tagline}
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Admin Dashboard Link - Only visible to admins */}
          {isAdmin && (
            <>
              <Link
                to="/admin/email"
                className="group relative text-xl font-bold transition-all duration-300 border-b border-[#FF6B6B]/30 pb-3 pl-4"
                aria-label="Navigate to Email Campaign Manager"
                onClick={handleClose}
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive"
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B6B] to-[#FF3333] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
                <span 
                  className="relative z-10 transform rotate-1 inline-block"
                  style={{
                    color: '#FF6B6B',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)'
                  }}
                >
                  Email Campaign
                </span>
              </Link>
              <Link
                to="/admin/guides"
                className="group relative text-xl font-bold transition-all duration-300 border-b border-[#FF6B6B]/30 pb-3 pl-4"
                aria-label="Navigate to Guide Management"
                onClick={handleClose}
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive"
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B6B] to-[#FF3333] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
                <span 
                  className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300 block"
                  style={{
                    color: '#FF6B6B',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)'
                  }}
                >
                  Guide Manager
                </span>
              </Link>
              <Link
                to="/admin/seo"
                className="group relative text-xl font-bold transition-all duration-300 border-b border-[#FF6B6B]/30 pb-3 pl-4"
                aria-label="Navigate to SEO Management"
                onClick={handleClose}
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive"
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B6B] to-[#FF3333] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
                <span 
                  className="relative z-10 transform -rotate-1 inline-block"
                  style={{
                    color: '#FF6B6B',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)'
                  }}
                >
                  SEO Manager
                </span>
              </Link>
              <Link
                to="/admin-dashboard"
                className="group relative text-xl font-bold transition-all duration-300 border-b border-[#FF6B6B]/30 pb-3 pl-4"
                aria-label="Navigate to Admin Dashboard"
                onClick={handleClose}
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive"
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B6B] to-[#FF3333] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
                <span 
                  className="relative z-10 transform -rotate-1 inline-block"
                  style={{
                    color: '#FF6B6B',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)'
                  }}
                >
                  Admin Dashboard
                </span>
              </Link>
            </>
          )}

          {/* Auth Section */}
          <div className="pt-6 border-t border-[#FFD700]/30 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-lg -mx-4 -my-2"></div>
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
              <span 
                className="relative z-10"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                  transform: 'rotate(-1deg)',
                  display: 'inline-block'
                }}
              >
                Get the Blueprint
              </span>
            </button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
