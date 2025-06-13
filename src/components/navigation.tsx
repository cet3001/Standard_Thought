
import { useState } from "react";
import Logo from "./navigation/logo";
import NavItems from "./navigation/nav-items";
import ThemeToggle from "./navigation/theme-toggle";
import AuthSection from "./navigation/auth-section";
import MobileMenu from "./navigation/mobile-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-brand-cream/90 dark:bg-brand-black/90 border-b border-[#247EFF]/20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 mr-8">
            <Logo />
          </div>

          {/* Desktop Navigation - Only show on large screens */}
          <div className="hidden lg:flex items-center space-x-12">
            <NavItems className="flex items-center space-x-10" />
            <div className="flex items-center space-x-6 ml-8">
              <ThemeToggle />
              <AuthSection />
            </div>
          </div>

          {/* Mobile Menu - Show on tablet and phone */}
          <MobileMenu 
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
