
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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-brand-cream/90 dark:bg-brand-black/90 border-b border-[#247EFF]/20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden">
          {/* Top row - Logo and controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
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
          </div>
          
          {/* Bottom row - Navigation items */}
          <div className="flex items-center justify-center">
            <NavItems className="flex items-center space-x-6 text-sm" />
          </div>
        </div>

        {/* Desktop Layout - Single row */}
        <div className="hidden lg:flex items-center justify-between min-w-0">
          <div className="flex-shrink-0 mr-4 lg:mr-8 min-w-0">
            <Logo />
          </div>

          <div className="flex items-center space-x-12">
            <NavItems className="flex items-center space-x-10" />
            <div className="flex items-center space-x-6 ml-8">
              <ThemeToggle />
              <AuthSection />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
