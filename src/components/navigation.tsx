
import { useState } from "react";
import Logo from "./navigation/logo";
import MobileMenu from "./navigation/mobile-menu";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Navigation = () => {
  const { textureImageUrl, imageGenerationStatus } = useUrbanTexture();

  console.log('Navigation render - textureImageUrl:', textureImageUrl);
  console.log('Navigation render - imageGenerationStatus:', imageGenerationStatus);

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
      
      {/* Main Navigation with AI-Generated Urban Texture */}
      <nav className="bg-brand-cream/95 backdrop-blur-md border-b border-[#247EFF]/20 shadow-sm relative">
        {/* AI-Generated Urban Texture Background */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-[0.12] bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: '200px 200px',
              filter: 'contrast(1.1) brightness(0.9)'
            }}
          />
        )}
        
        {/* Lighter fallback while image loads */}
        {!textureImageUrl && (
          <>
            <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,_rgba(36,126,255,0.3)_1px,_transparent_0)] bg-[length:12px_12px]"></div>
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(45deg,_transparent_46%,_rgba(36,126,255,0.2)_47%,_rgba(36,126,255,0.2)_53%,_transparent_54%)] bg-[length:6px_6px]"></div>
            <div className="absolute inset-0 opacity-[0.04] bg-[conic-gradient(from_0deg,_transparent_60%,_rgba(36,126,255,0.1)_80%,_transparent_100%)] bg-[length:10px_10px]"></div>
          </>
        )}
        
        {/* Lighter content overlay to prevent interference with mobile menu */}
        <div className="absolute inset-0 bg-brand-cream/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-4 relative z-10">
          {/* Single layout for all screen sizes */}
          <div className="flex items-center justify-between">
            {/* Hamburger Menu - now self-contained */}
            <div className="flex items-center flex-shrink-0">
              <MobileMenu />
            </div>

            {/* Centered Logo - bigger and more prominent */}
            <div className="flex-1 flex justify-center min-w-0">
              <Logo />
            </div>

            {/* Right side with Primary CTA */}
            <div className="flex items-center flex-shrink-0">
              {/* Primary CTA Button - Get the Blueprint */}
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
