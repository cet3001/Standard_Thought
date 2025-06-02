
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Sales", path: "/sales" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-brand-cream/90 dark:bg-brand-black/90 border-b border-[#247EFF]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Glow Effect */}
          <Link 
            to="/" 
            className="text-2xl font-bold font-satoshi hover:text-[#247EFF] transition-all duration-300 group"
          >
            <span className="text-[#0A0A0A] dark:text-brand-cream group-hover:text-[#247EFF]">Standard</span>
            <span className="text-[#247EFF]">thought</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-[#247EFF] relative group",
                  location.pathname === item.path
                    ? "text-[#247EFF]"
                    : "text-[#0A0A0A] dark:text-brand-cream"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#247EFF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Enhanced Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-[#247EFF]/10 text-[#247EFF] transition-all duration-300 hover:scale-110"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Enhanced CTA Button */}
            <Button 
              className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#D4AF37]/30 text-white font-medium rounded-3xl px-6 py-2 transition-all duration-300 hover:scale-105"
            >
              Join Movement
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-[#247EFF]/10 text-[#247EFF] transition-all duration-300"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-[#247EFF]/10 text-[#0A0A0A] dark:text-brand-cream transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#247EFF]/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#247EFF]",
                    location.pathname === item.path
                      ? "text-[#247EFF]"
                      : "text-[#0A0A0A] dark:text-brand-cream"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-3xl self-start transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Movement
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
