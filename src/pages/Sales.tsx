import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { trackButtonClick } from "@/lib/analytics-utils";

const Sales = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    trackButtonClick('Get Started', 'sales_hero', 'scroll_to_products');
    // TODO: Add scroll to products section when created
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO
        title="Unlock Your Urban Wealth Blueprint | Standardthought Sales"
        description="The official spot for free and premium guides, playbooks, and tools to help you stack bread, fix your credit, and build generational wealth—no trust fund needed."
        keywords="urban wealth blueprint, premium guides, financial playbooks, credit repair tools, generational wealth building"
        url="/sales"
      />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-24 relative overflow-hidden">
          {/* Enhanced Urban Background with Better Texture Visibility */}
          <div className="absolute inset-0" aria-hidden="true">
            {/* AI-Generated or Curated Urban Texture */}
            {textureImageUrl && (
              <div 
                className="absolute inset-0 opacity-50 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${textureImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            )}
            
            {/* Background gradient overlay - lighter for better texture visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-700/50 to-slate-900/40"></div>
            
            {/* Content overlay for text readability - reduced opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/70 via-brand-cream/75 to-brand-cream/80 dark:from-brand-black/70 dark:via-brand-black/75 dark:to-brand-black/80"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#247EFF]/20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Content */}
              <div className="text-center mb-16 relative">
                {/* Urban grain texture overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden="true">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.8)_1px,_transparent_0)] bg-[length:8px_8px]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_46%,_rgba(0,0,0,0.2)_47%,_rgba(0,0,0,0.2)_53%,_transparent_54%)] bg-[length:4px_4px] opacity-60"></div>
                </div>

                {/* Subtle graffiti tags background */}
                <div className="absolute top-10 right-10 transform rotate-12 opacity-[0.08] pointer-events-none" aria-hidden="true">
                  <div 
                    className="text-[#247EFF] text-6xl font-black"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', cursive",
                      textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                      filter: 'blur(0.5px)'
                    }}
                  >
                    BLUEPRINT
                  </div>
                  {/* Drip effect */}
                  <div className="absolute bottom-0 left-8 w-2 h-8 bg-[#247EFF] opacity-40 transform rotate-12 blur-sm"></div>
                </div>

                <div className="absolute bottom-20 left-10 transform -rotate-6 opacity-[0.06] pointer-events-none" aria-hidden="true">
                  <div 
                    className="text-[#FFD700] text-4xl font-black"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', cursive",
                      textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
                      filter: 'blur(0.3px)'
                    }}
                  >
                    WEALTH
                  </div>
                </div>

                <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-brand-black dark:text-brand-cream relative">
                    {/* Additional texture behind main heading */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[conic-gradient(from_0deg,_transparent_70%,_rgba(0,0,0,0.3)_90%,_transparent_100%)] bg-[length:15px_15px]"></div>
                    
                    Unlock Your <span 
                      className="text-[#FFD700] relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'shimmer 3s ease-in-out infinite'
                      }}
                    >
                      Urban
                      {/* Pearlescent overlay */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
                        style={{
                          background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                          backgroundSize: '200% 100%',
                          mixBlendMode: 'overlay'
                        }}
                      />
                    </span><br />
                    <span 
                      className="text-[#FFD700] relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'shimmer 3s ease-in-out infinite'
                      }}
                    >
                      Wealth Blueprint
                      {/* Pearlescent overlay */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
                        style={{
                          background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                          backgroundSize: '200% 100%',
                          mixBlendMode: 'overlay',
                          animationDelay: '1s'
                        }}
                      />
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-brand-black dark:text-brand-cream leading-relaxed px-4">
                    The official spot for free and premium guides, playbooks, and tools to help you stack bread, fix your credit, and build generational wealth—no trust fund needed.
                  </p>

                  {/* Primary CTA */}
                  <div className="flex justify-center mb-12 px-4">
                    <Button 
                      size="lg"
                      onClick={handleGetStarted}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700] after:absolute after:inset-0 after:bg-gradient-to-45 after:from-transparent after:via-white/20 after:to-transparent after:animate-[shimmer_3s_ease-in-out_infinite]"
                      aria-label="Get started with wealth building tools"
                    >
                      <Zap className="mr-3 h-5 w-5 sm:h-6 sm:w-6" aria-label="Lightning bolt icon representing fast action" />
                      <span 
                        style={{ 
                          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                          textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                          transform: 'rotate(-1deg)',
                          display: 'inline-block'
                        }}
                      >
                        Get Started
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sales;