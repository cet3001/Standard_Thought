
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
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-brand-black dark:text-brand-cream relative z-10">
              The Real About <span className="relative" style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                Building Wealth
                
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

          <div className="space-y-6 text-lg leading-relaxed text-brand-black dark:text-brand-cream relative">
            <p className="text-xl font-semibold relative z-10">
              <span className="relative">
                Let's keep it 100:
                {/* Enhanced underline with yellow pearlescent */}
                <div 
                  className="absolute -bottom-2 left-0 w-full h-3 transform -rotate-1 blur-sm opacity-25"
                  style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}
                ></div>
              </span> Most wealth advice wasn't built for us. We're breaking cycles, flipping money trauma, and building legacy from the ground up.
            </p>
            
            <p className="relative z-10">
              This ain't about overnight success—it's about <span className="relative font-semibold" style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                street-smart moves
                {/* Enhanced handwritten circle effect with yellow */}
                <div className="absolute -inset-2 border-3 opacity-50 transform rotate-2 border-dashed rounded-full" style={{
                  borderColor: '#FFD700'
                }}></div>
                <div className="absolute -inset-1 border-2 opacity-30 transform -rotate-1 border-dotted rounded-full" style={{
                  borderColor: '#FFD700'
                }}></div>
              </span>, real setbacks, and stacking paper for the long haul.
            </p>

            <p className="relative z-10">
              If you're tired of fake gurus and ready for <span className="relative font-semibold" style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                blueprints that work in the real world
                {/* Enhanced highlight with texture and yellow pearlescent */}
                <div className="absolute -inset-2 transform -rotate-1 -z-10 blur-sm opacity-15" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}></div>
                <div className="absolute -inset-1 transform rotate-1 -z-10 opacity-10" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}></div>
              </span>, you're in the right spot.
            </p>

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
          </div>

          <div className="text-center mt-12 relative z-10">
            <Link to="/resources">
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
                  Explore All Resources
                  <ArrowRight className="ml-2 h-5 w-5 inline" aria-label="Arrow pointing to resources" />
                </span>
              </Button>
            </Link>
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
