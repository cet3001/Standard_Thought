
import Logo from "./navigation/logo";
import MobileMenu from "./navigation/mobile-menu";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Navigation = () => {
  const { textureImageUrl } = useUrbanTexture();

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
      {/* Community Trust Banner */}
      <div className="bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white text-center py-2 text-sm font-medium">
        🔥 Trusted by 1,000+ first-gen hustlers building generational wealth
      </div>
      
      {/* Main Navigation with Urban Texture Background */}
      <nav className="relative backdrop-blur-md border-b border-[#247EFF]/20 shadow-sm overflow-hidden">
        {/* Urban Background Texture - Same as Homepage Hero */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* AI-Generated Urban Texture */}
          {textureImageUrl && (
            <div 
              className="absolute inset-0 opacity-20 bg-repeat bg-center"
              style={{
                backgroundImage: `url(${textureImageUrl})`,
                backgroundSize: '300px 300px',
                filter: 'contrast(1.3) brightness(0.7)'
              }}
            />
          )}
          
          {/* CSS urban texture patterns - show as fallback */}
          {!textureImageUrl && (
            <div className="absolute inset-0 opacity-30">
              {/* Brick pattern */}
              <div 
                className="absolute inset-0 bg-repeat opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, rgba(139,69,19,0.8) 1px, transparent 1px),
                    linear-gradient(rgba(139,69,19,0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(160,82,45,0.6) 2px, transparent 2px),
                    linear-gradient(rgba(160,82,45,0.6) 2px, transparent 2px)
                  `,
                  backgroundSize: '40px 20px, 40px 20px, 80px 40px, 80px 40px'
                }}
              />
              {/* Grunge overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(0,0,0,0.3)_2px,_transparent_2px)] bg-[length:30px_30px] opacity-50"></div>
            </div>
          )}
          
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-50"></div>
          
          {/* Content overlay for text readability - same as hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/95 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/95"></div>
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

            {/* Right side with Primary CTA */}
            <div className="flex items-center flex-shrink-0">
              <button 
                onClick={scrollToNewsletter}
                className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-4 lg:px-6 py-2 lg:py-3 border-0 text-xs lg:text-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  textShadow: '1px 1px 0px rgba(0,0,0,0.2)' 
                }}
              >
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
