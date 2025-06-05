
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, LogOut, User } from "lucide-react";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const { user, signOut, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Stories", path: "/blog" },
    { label: "Builder Access", path: "/sales" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSignOut = async () => {
    if (isSigningOut) return;
    
    setIsSigningOut(true);
    console.log('Navigation: Starting sign out...');
    
    try {
      await signOut();
      console.log('Navigation: Sign out completed, navigating to home...');
      navigate("/");
    } catch (error) {
      console.error('Navigation: Sign out error:', error);
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-brand-cream/90 dark:bg-brand-black/90 border-b border-[#247EFF]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with ST Crown */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:text-[#247EFF] transition-all duration-300 group"
          >
            <div className="w-8 h-8 flex-shrink-0">
              <img 
                src="/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png" 
                alt="ST Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-2xl font-bold font-satoshi">
              <span className="text-[#0A0A0A] dark:text-brand-cream group-hover:text-[#247EFF]">Standard</span>
              <span className="text-[#247EFF]">thought</span>
            </div>
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

            {/* Authentication Section */}
            {user ? (
              <div className="flex items-center space-x-4">
                {isAdmin && (
                  <Button
                    onClick={() => navigate("/create-post")}
                    variant="outline"
                    size="sm"
                    className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white transition-all duration-300"
                  >
                    Create Story
                  </Button>
                )}
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-[#247EFF]" />
                  <span className="text-sm text-[#0A0A0A] dark:text-brand-cream">
                    {user.email?.split('@')[0]}
                  </span>
                </div>
                <Button
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                  variant="ghost"
                  size="sm"
                  className="hover:bg-red-100 text-red-600 hover:text-red-700 transition-all duration-300 disabled:opacity-50"
                >
                  <LogOut className="h-4 w-4" />
                  {isSigningOut && <span className="ml-1">...</span>}
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => navigate("/auth")}
                className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-medium rounded-3xl px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                Join Movement
              </Button>
            )}
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
              
              {user ? (
                <>
                  <div className="flex items-center space-x-2 text-sm text-[#0A0A0A] dark:text-brand-cream">
                    <User className="h-4 w-4 text-[#247EFF]" />
                    <span>{user.email?.split('@')[0]}</span>
                  </div>
                  {isAdmin && (
                    <Button
                      onClick={() => {
                        navigate("/create-post");
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      size="sm"
                      className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white self-start transition-all duration-300"
                    >
                      Create Story
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    disabled={isSigningOut}
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 self-start transition-all duration-300 disabled:opacity-50"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {isSigningOut ? 'Signing Out...' : 'Sign Out'}
                  </Button>
                </>
              ) : (
                <Button 
                  onClick={() => {
                    navigate("/auth");
                    setIsMenuOpen(false);
                  }}
                  className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-3xl self-start transition-all duration-300"
                >
                  Join Movement
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
