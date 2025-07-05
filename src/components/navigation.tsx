
import Logo from "./navigation/logo";
import NavItems from "./navigation/nav-items";
import MobileMenu from "./navigation/mobile-menu";
import DynamicTicker from "./navigation/dynamic-ticker";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const { textureImageUrl } = useUrbanTexture();
  const { isAdmin } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Dynamic Community Trust Banner */}
      <DynamicTicker />
      
      {/* Main Navigation with Enhanced Urban Texture Background */}
      <nav className="relative backdrop-blur-md border-b border-[#247EFF]/20 shadow-sm overflow-hidden">
        {/* Urban Background Texture - Enhanced Visibility */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* AI-Generated or Curated Urban Texture */}
          {textureImageUrl && (
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{
                backgroundImage: `url(${textureImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          )}
          
          {/* Background gradient overlay - lighter for better texture visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/70 to-slate-900/60"></div>
          
          {/* Content overlay for text readability - reduced opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/70 via-brand-cream/75 to-brand-cream/80 dark:from-brand-black/70 dark:via-brand-black/75 dark:to-brand-black/80"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu - Mobile Only */}
            <div className="flex items-center flex-shrink-0 lg:hidden">
              <MobileMenu />
            </div>

            {/* Left side for desktop - Logo */}
            <div className="flex items-center flex-shrink-0">
              <Logo />
            </div>

            {/* Center - Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavItems className="flex items-center space-x-6 xl:space-x-8" />
            </div>

            {/* Right side - Create Story button for admins */}
            <div className="flex items-center flex-shrink-0">
              {isAdmin && (
                <Link to="/create-post">
                  <Button
                    className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-4 py-2 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 font-ibm-plex-mono"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    <span 
                      style={{ 
                        fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                        textShadow: '1px 1px 0px rgba(0,0,0,0.3)',
                        transform: 'rotate(-1deg)',
                        display: 'inline-block',
                        fontSize: '14px'
                      }}
                    >
                      Create Story
                    </span>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
