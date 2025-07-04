import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import Analytics from "@/components/analytics";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const About = () => {
  useMobilePerformance();
  const [isVisible, setIsVisible] = useState(false);
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "About", url: "https://www.standardthought.com/about", position: 2 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background - Identical to homepage */}
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
        title="About Standardthought - Your Mindset Reset Station | Urban Wealth Building"
        description="Unlock your mindset arsenal with Standardthought. This ain't just about stacking bread—it's about flipping your story, breaking cycles, and building mental wealth from the ground up."
        keywords="mindset reset, urban wealth mindset, breaking cycles, mental wealth, standardthought about, urban entrepreneurship mindset"
        url="/about"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header - Static across all pages */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section: "Unlock Your Mindset Arsenal" */}
        <section className="pt-40 pb-24 relative overflow-hidden">
          {/* Enhanced Urban Background with Better Texture Visibility - Identical overlay pattern */}
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

          {/* Floating Elements - Same as homepage */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#247EFF]/20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Content */}
              <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  <span className="text-[#0A0A0A]">Unlock Your </span>
                  <span 
                    className="relative inline-block font-black"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    Mindset
                    {/* Graffiti-style underline */}
                    <svg 
                      className="absolute -bottom-2 left-0 w-full h-6" 
                      viewBox="0 0 200 20" 
                      style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))' }}
                    >
                      <path 
                        d="M5,15 Q50,8 100,12 Q150,16 195,9" 
                        stroke="#f4d03f"
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"
                        opacity="0.8"
                      />
                      <path 
                        d="M7,17 Q52,10 102,14 Q152,18 193,11" 
                        stroke="#ffd700"
                        strokeWidth="2" 
                        fill="none" 
                        strokeLinecap="round"
                        opacity="0.4"
                      />
                    </svg>
                  </span>
                  <span className="text-[#0A0A0A]"> Arsenal</span>
                </h1>

                {/* Subhead */}
                <div className="max-w-4xl mx-auto mb-12">
                  <p className="text-xl md:text-2xl lg:text-3xl text-[#0A0A0A] font-bold leading-relaxed">
                    This ain't just about stacking bread—it's about{" "}
                    <span 
                      className="font-black"
                      style={{ 
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'pearlescent 3s ease-in-out infinite'
                      }}
                    >
                      flipping your story
                    </span>
                    , breaking cycles, and building mental wealth from the ground up.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Pearlescent animation keyframes */}
          <style>{`
            @keyframes pearlescent {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
        </section>

        {/* The Real About Mindset Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Torn-paper/Grain overlay background */}
          <div className="absolute inset-0" aria-hidden="true">
            {/* Base texture layer */}
            {textureImageUrl && (
              <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${textureImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            )}
            
            {/* Torn paper effect overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `
                  radial-gradient(circle at 20% 30%, rgba(0,0,0,0.1) 1px, transparent 1px),
                  radial-gradient(circle at 70% 60%, rgba(0,0,0,0.08) 1px, transparent 1px),
                  radial-gradient(circle at 40% 80%, rgba(0,0,0,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '15px 15px, 25px 25px, 35px 35px'
              }}
            ></div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/95 via-brand-cream/98 to-brand-cream/95 dark:from-brand-black/95 dark:via-brand-black/98 dark:to-brand-black/95"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Section Header */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-[#0A0A0A] leading-tight">
                  The Real About{" "}
                  <span 
                    className="relative inline-block font-black"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    Mindset
                  </span>
                </h2>
              </div>

              {/* Main Content */}
              <div className="mb-16">
                <p className="text-lg md:text-xl lg:text-2xl text-[#0A0A0A] font-semibold leading-relaxed max-w-3xl mx-auto">
                  We know what it's like to go from{" "}
                  <span className="font-black text-[#247EFF]">'I can't afford it'</span>{" "}
                  to{" "}
                  <span className="font-black text-[#247EFF]">'How can I afford it?'</span>{" "}
                  Mindset ain't hype—it's the foundation every real move is built on. 
                  If you ever had to build your own blueprint, you're in the right spot.
                </p>
              </div>

              {/* Pull Quote */}
              <div className="relative">
                <div 
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] transform -rotate-1 relative z-10"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '3px 3px 0px rgba(255,215,0,0.3), 2px 2px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '2px'
                  }}
                >
                  "Flip your mindset,{" "}
                  <span 
                    className="relative inline-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    flip your money
                  </span>."
                </div>
                
                {/* Handwritten underline effect */}
                <svg 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-8" 
                  viewBox="0 0 400 30" 
                  style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.1))' }}
                >
                  <path 
                    d="M10,20 Q100,8 200,15 Q300,22 390,12" 
                    stroke="#f4d03f"
                    strokeWidth="4" 
                    fill="none" 
                    strokeLinecap="round"
                    opacity="0.7"
                    style={{ 
                      filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))'
                    }}
                  />
                  <path 
                    d="M15,22 Q105,10 205,17 Q305,24 385,14" 
                    stroke="#ffd700"
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer - Static across all pages */}
      <Footer />
    </div>
  );
};

export default About;