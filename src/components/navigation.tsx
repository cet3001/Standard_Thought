
import { useState } from "react";
import Logo from "./navigation/logo";
import ThemeToggle from "./navigation/theme-toggle";
import MobileMenu from "./navigation/mobile-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log('Navigation render - isMenuOpen:', isMenuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Community Trust Banner */}
      <div className="bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white text-center py-2 text-sm font-medium">
        🔥 Trusted by 1,000+ first-gen hustlers building generational wealth
      </div>
      
      {/* Main Navigation with Urban Texture */}
      <nav className="bg-brand-cream/95 dark:bg-brand-black/95 backdrop-blur-md border-b border-[#247EFF]/20 shadow-sm relative">
        {/* Urban grainy texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-4 relative z-10">
          {/* Single layout for all screen sizes */}
          <div className="flex items-center justify-between">
            {/* Hamburger Menu */}
            <div className="flex items-center flex-shrink-0">
              <MobileMenu 
                isOpen={isMenuOpen}
                onToggle={() => {
                  console.log('Toggle called, current state:', isMenuOpen);
                  setIsMenuOpen(!isMenuOpen);
                }}
                onClose={() => {
                  console.log('Close called');
                  setIsMenuOpen(false);
                }}
              />
            </div>

            {/* Centered Logo - bigger and more prominent */}
            <div className="flex-1 flex justify-center min-w-0">
              <Logo />
            </div>

            {/* Right side with Theme Toggle and Primary CTA */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <ThemeToggle />
              {/* Primary CTA Button - Get the Blueprint */}
              <button className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-4 lg:px-6 py-2 lg:py-3 border-0 text-xs lg:text-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]">
                Get Blueprint
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
