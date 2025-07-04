
import Logo from "./navigation/logo";
import MobileMenu from "./navigation/mobile-menu";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { textureImageUrl } = useUrbanTexture();
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const scrollToNewsletter = () => {
    const newsletterSection = document.querySelector('[data-section="newsletter"]');
    if (newsletterSection) {
      const formElement = newsletterSection.querySelector('form');
      
      if (formElement) {
        const formRect = formElement.getBoundingClientRect();
        const targetPosition = window.pageYOffset + formRect.top;
        const offset = window.innerWidth < 768 ? window.innerHeight * 0.3 : 100;
        
        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth'
        });
      } else {
        const offsetTop = newsletterSection.getBoundingClientRect().top + window.pageYOffset;
        const offset = window.innerWidth < 768 ? 300 : 150;
        
        window.scrollTo({
          top: offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Community Trust Banner with improved styling */}
      <div className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 text-brand-cream text-center py-2 text-sm font-medium shadow-md">
        💡 Real strategies, real results—join builders creating wealth from scratch
      </div>
      
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
            {/* Hamburger Menu */}
            <div className="flex items-center flex-shrink-0">
              <MobileMenu />
            </div>

            {/* Centered Logo */}
            <div className="flex-1 flex justify-center min-w-0">
              <Logo />
            </div>

            {/* Right side - Admin Create Story Button */}
            <div className="flex items-center flex-shrink-0">
              {isAdmin && (
                <Button
                  onClick={() => navigate('/create-post')}
                  size="sm"
                  className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg text-sm border-0 relative overflow-hidden"
                >
                  <Plus size={16} className="mr-2" />
                  <span className="font-kalam font-bold">Create Story</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
