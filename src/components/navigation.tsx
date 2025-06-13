
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
      <div className="container mx-auto px-4 sm:px-6 py-3">
        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden">
          {/* Top row - Logo and controls */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex-shrink-0 min-w-0">
              <Logo />
            </div>
            <div className="flex items-center space-x-3 flex-shrink-0">
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
          
          {/* Second row - Navigation links only */}
          <div className="flex items-center justify-center mb-2">
            <NavItems 
              className="flex items-center space-x-4 text-sm" 
              showButton={false}
            />
          </div>

          {/* Third row - Playbook button */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                const newsletterSection = document.querySelector('[data-section="newsletter"]');
                if (newsletterSection) {
                  newsletterSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/30"
            >
              Get Free Playbook
            </button>
          </div>
        </div>

        {/* Desktop Layout - Single row */}
        <div className="hidden lg:flex items-center justify-between min-w-0">
          <div className="flex-shrink-0 mr-4 lg:mr-8 min-w-0">
            <Logo />
          </div>

          <div className="flex items-center space-x-12">
            <NavItems className="flex items-center space-x-10" showButton={true} />
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
