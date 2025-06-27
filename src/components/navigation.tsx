
import { useState } from "react";
import Logo from "./navigation/logo";
import NavItems from "./navigation/nav-items";
import ThemeToggle from "./navigation/theme-toggle";
import AuthSection from "./navigation/auth-section";
import MobileMenu from "./navigation/mobile-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log('Navigation render - isMenuOpen:', isMenuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Community Trust Banner */}
      <div className="hidden sm:block bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white text-center py-2 text-sm font-medium">
        🔥 Trusted by 1,000+ first-gen hustlers building generational wealth
      </div>
      
      {/* Main Navigation */}
      <nav className="backdrop-blur-sm bg-brand-cream/95 dark:bg-brand-black/95 border-b border-[#247EFF]/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          {/* Mobile/Tablet Layout - Simple single row */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-shrink-0">
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
              <div className="flex-1 flex justify-center min-w-0">
                <Logo />
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Desktop Layout - Improved alignment and spacing */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Center Navigation Items */}
            <div className="flex-1 flex justify-center">
              <NavItems className="flex items-center space-x-8" showButton={true} />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <ThemeToggle />
              <AuthSection />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
