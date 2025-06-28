
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
      {/* Community Trust Banner with improved styling */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-brand-cream text-center py-2 text-sm font-medium shadow-md">
        📈 Join the movement—real strategies for building wealth from the ground up
      </div>
      
      {/* Main Navigation with Matching Urban Texture Background */}
      <nav className="relative backdrop-blur-md border-b border-[#247EFF]/20 shadow-sm overflow-hidden">
        {/* Urban Background Texture - Matches Homepage Hero */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* AI-Generated or Curated Urban Texture */}
          {textureImageUrl && (
            <div 
              className="absolute inset-0 opacity-20 bg-repeat bg-center"
              style={{
                backgroundImage: `url(${textureImageUrl})`,
                backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
                filter: 'contrast(1.3) brightness(0.7)'
              }}
            />
          )}
          
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-50"></div>
          
          {/* Content overlay for text readability */}
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

            {/* Right side - empty for now */}
            <div className="flex items-center flex-shrink-0">
              {/* Removed Get Blueprint button */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
