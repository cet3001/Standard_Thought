
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const ManifestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-section="manifesto"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      data-section="manifesto"
      className="py-24 relative overflow-hidden"
    >
      {/* Site-wide Urban Background - Same as other sections */}
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

      {/* Enhanced graffiti "Real Talk" overlay */}
      <div className="absolute top-8 right-8 transform rotate-12 pointer-events-none" aria-hidden="true">
        <div 
          className="text-4xl md:text-6xl font-black opacity-[0.15] relative"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}
        >
          Real Talk
          {/* Spray paint texture */}
          <div className="absolute inset-0 opacity-60 blur-sm" style={{
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Enhanced drip effects with yellow pearlescent */}
        <div className="absolute -bottom-3 left-8 w-2 h-8 opacity-30 transform rotate-12 blur-sm" style={{
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}></div>
        <div className="absolute -bottom-2 left-12 w-1 h-6 opacity-20 transform rotate-15 blur-sm" style={{
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}></div>
        <div className="absolute -bottom-4 right-4 w-1 h-5 opacity-25 transform rotate-8 blur-sm" style={{
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}></div>
      </div>

      {/* Additional street tags with yellow pearlescent */}
      <div className="absolute bottom-32 left-12 transform -rotate-3 pointer-events-none opacity-[0.08]" aria-hidden="true">
        <div 
          className="text-2xl font-black"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            filter: 'blur(0.3px)',
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}
        >
          HUSTLE
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Subtle background container for text content */}
          <div className="bg-gray-200/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-300/10 dark:border-gray-600/10">
            <div className="text-center mb-12 relative">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-brand-black dark:text-brand-cream relative z-10">
                <span className="relative" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}>
                  Stack Without Selling Your Soul
                  
                  {/* Enhanced handwritten underline effect with yellow pearlescent */}
                  <div 
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-72 h-4 opacity-70"
                    style={{
                      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 25'%3E%3Cpath d='M8 18 Q80 8 170 15 Q260 22 342 12' stroke='%23FFD700' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3Cpath d='M12 20 Q85 10 175 17 Q265 24 340 14' stroke='%23FFD700' stroke-width='2' fill='none' stroke-linecap='round' opacity='0.6'/%3E%3C/svg%3E")`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </span>
                
                {/* Street-style corner tear effect with yellow pearlescent */}
                <div className="absolute top-2 right-2 w-6 h-6 transform rotate-45 translate-x-3 -translate-y-3" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  animation: 'pearlescent 3s ease-in-out infinite',
                  opacity: 0.2
                }}></div>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Image on the left */}
              <div className="lg:w-1/3 flex-shrink-0">
                <img 
                  src="/lovable-uploads/2d836535-0024-4e8b-9a39-ffdb0017c30d.png"
                  alt="Person reflecting on their journey to building wealth"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover max-w-sm mx-auto lg:mx-0"
                />
              </div>

              {/* Main text content on the right */}
              <div className="lg:w-2/3 space-y-6 text-lg leading-relaxed text-brand-black dark:text-brand-cream relative">
                <p className="text-xl font-semibold relative z-10 mb-6">
                  Most wealth advice ain't built for us. We're done pretending. This is about breaking cycles, not breaking ourselves.
                </p>
                
                <p className="relative z-10 mb-6">
                  Forget the influencer flexes. We're talking AI plays, money trauma rewiring, and side hustles that actually scale.
                  This ain't about getting rich quick—it's about building slow, smart, and sovereign.
                </p>

                <div className="bg-gray-800/20 dark:bg-gray-200/20 p-6 rounded-xl border-l-4 border-[#FFD700] mb-6">
                  <p className="text-xl font-bold italic text-center" style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}>
                    "Stacking bread with no clarity is just another trap."
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl font-bold text-center mt-8 relative z-10" style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                <span className="relative">
                  Real builders. Real strategies. Real results.
                  {/* Enhanced handwritten underline with multiple layers */}
                  <div 
                    className="absolute -bottom-3 left-0 w-full h-3 opacity-70"
                    style={{
                      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 20'%3E%3Cpath d='M15 12 Q120 4 230 11 Q340 18 435 8' stroke='%23FFD700' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3Cpath d='M18 14 Q125 6 235 13 Q345 20 440 10' stroke='%23FFD700' stroke-width='2' fill='none' stroke-linecap='round' opacity='0.7'/%3E%3C/svg%3E")`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>
                </span>
              </p>

            <div className="text-center mt-8 relative z-10">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link to="/stack">
                  <Button 
                    size="lg"
                    className="font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 text-black border-0"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    <span className="relative z-10">
                      See What Stack Looks Like
                      <ArrowRight className="ml-2 h-5 w-5 inline" aria-label="Arrow pointing to stack content" />
                    </span>
                  </Button>
                </Link>
                
                <Link to="/blog?category=stack">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-transparent"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '1px 1px 0px rgba(0,0,0,0.2)'
                    }}
                  >
                    <span className="relative z-10" style={{ transform: 'rotate(1deg)', display: 'inline-block' }}>
                      See All Stack Posts
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  );
};

export default ManifestoSection;
