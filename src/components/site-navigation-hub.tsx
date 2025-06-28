
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Map } from "lucide-react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const SiteNavigationHub = () => {
  const { textureImageUrl } = useUrbanTexture();

  const handleNavigationClick = () => {
    console.log(`Navigating to Explore More: /blog`);
  };

  return (
    <div className="py-16 relative overflow-hidden">
      {/* Urban Background - Matches Hero Section */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-15 bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '400px 400px',
              filter: 'contrast(1.2) brightness(0.8)'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-40"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/90 via-brand-cream/95 to-brand-cream/90 dark:from-brand-black/90 dark:via-brand-black/95 dark:to-brand-black/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/blog"
            onClick={handleNavigationClick}
            className="block group"
          >
            <Card className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-all duration-300 group hover:shadow-xl cursor-pointer relative overflow-hidden bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm">
              {/* Street Sign Background Visual */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                <svg 
                  viewBox="0 0 400 200" 
                  className="w-full h-full object-cover"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Street sign post */}
                  <rect x="190" y="0" width="20" height="200" fill="currentColor" className="text-[#247EFF]" opacity="0.6"/>
                  
                  {/* Street signs */}
                  <g className="text-[#247EFF]" opacity="0.7">
                    {/* Main street sign */}
                    <rect x="80" y="60" width="240" height="40" rx="4" fill="currentColor"/>
                    <rect x="85" y="65" width="230" height="30" rx="2" fill="white"/>
                    
                    {/* Directional signs */}
                    <polygon points="60,90 80,80 80,100" fill="currentColor"/>
                    <polygon points="340,90 320,80 320,100" fill="currentColor"/>
                    
                    {/* Secondary street sign */}
                    <rect x="120" y="110" width="160" height="30" rx="3" fill="currentColor" opacity="0.8"/>
                    <rect x="125" y="115" width="150" height="20" rx="2" fill="white"/>
                  </g>
                  
                  {/* Street grid lines */}
                  <g className="text-[#247EFF]" opacity="0.3">
                    <line x1="0" y1="50" x2="400" y2="50" stroke="currentColor" strokeWidth="2"/>
                    <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="2"/>
                    <line x1="50" y1="0" x2="50" y2="200" stroke="currentColor" strokeWidth="1"/>
                    <line x1="350" y1="0" x2="350" y2="200" stroke="currentColor" strokeWidth="1"/>
                  </g>
                </svg>
              </div>

              {/* Graffiti-style corner tag */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#FFD700]/20 transform rotate-45 group-hover:bg-[#FFD700]/40 transition-colors"></div>

              <CardContent className="p-8 md:p-12 text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#247EFF]/10 group-hover:bg-[#247EFF]/20 rounded-full flex items-center justify-center transition-colors transform group-hover:rotate-12 group-hover:scale-110 duration-300">
                    <Map className="h-8 w-8 text-[#247EFF]" />
                  </div>
                </div>
                
                <h2 
                  className="text-2xl md:text-3xl font-black text-brand-black dark:text-brand-cream mb-4 group-hover:text-[#247EFF] transition-colors transform -rotate-1"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
                    textShadow: '1px 1px 0px rgba(0,0,0,0.1)' 
                  }}
                >
                  Explore More
                </h2>
                
                <p className="text-lg text-brand-black/80 dark:text-brand-cream/80 leading-relaxed mb-6 max-w-lg mx-auto">
                  Real stories, street-smart strategies, and step-by-step guides from people building wealth from nothing.
                </p>
                
                <div className="flex items-center justify-center text-[#247EFF] hover:text-[#0057FF] font-bold transition-colors group-hover:scale-105 duration-300">
                  <span className="mr-2">Dive In</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Street-style underline */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#247EFF]/20 group-hover:bg-[#247EFF]/60 transition-colors rounded-full"></div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteNavigationHub;
