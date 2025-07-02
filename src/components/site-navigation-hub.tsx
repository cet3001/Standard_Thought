
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Map } from "lucide-react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const SiteNavigationHub = () => {
  const { textureImageUrl } = useUrbanTexture();

  const handleNavigationClick = () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Navigating to Explore More: /blog`);
    }
  };

  return (
    <div className="py-16 relative overflow-hidden">
      {/* Urban Background - Matches other sections */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-30 bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
              filter: 'contrast(1.3) brightness(0.7) sepia(0.05)'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Subtle light grey background block */}
          <div className="bg-gray-100/20 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <Link
              to="/blog"
              onClick={handleNavigationClick}
              className="block group text-center"
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-all transform group-hover:rotate-12 group-hover:scale-110 duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #FFD700, #F4D03F, #FFEB3B, #D4AF37)',
                    backgroundSize: '200% 200%',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}
                >
                  <Map 
                    className="h-8 w-8" 
                    style={{
                      color: '#8B4513',
                      filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
                    }} 
                  />
                </div>
              </div>
              
              <h2 
                className="text-2xl md:text-3xl font-black mb-4 transition-colors transform -rotate-1"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #FFD700, #F4D03F, #FFEB3B, #D4AF37)',
                  backgroundSize: '200% 200%',
                  animation: 'pearlescent 3s ease-in-out infinite',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Explore More
              </h2>
              
              <p className="text-lg text-brand-black dark:text-brand-cream leading-relaxed mb-6 max-w-lg mx-auto">
                Real stories, street-smart strategies, and step-by-step guides from people building wealth from nothing.
              </p>
              
              <div 
                className="flex items-center justify-center font-bold transition-all group-hover:scale-105 duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FFD700, #F4D03F, #FFEB3B, #D4AF37)',
                  backgroundSize: '200% 200%',
                  animation: 'pearlescent 3s ease-in-out infinite',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                <span className="mr-2">Dive In</span>
                <ArrowRight 
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  style={{
                    color: '#FFD700',
                    filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
                  }}
                />
              </div>
              
              {/* Street-style underline with pearlescent effect */}
              <div 
                className="mx-auto mt-4 w-20 h-1 rounded-full transition-all group-hover:w-32"
                style={{
                  background: 'linear-gradient(90deg, #FFD700, #F4D03F, #FFEB3B, #D4AF37)',
                  backgroundSize: '200% 200%',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}
              ></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteNavigationHub;
