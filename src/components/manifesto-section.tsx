
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ManifestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      className="py-24 relative overflow-hidden bg-brand-cream dark:bg-brand-black"
    >
      {/* Enhanced brick wall background texture */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden="true">
        {/* Brick pattern */}
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 8px,
                rgba(139, 69, 19, 0.4) 8px,
                rgba(139, 69, 19, 0.4) 16px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 24px,
                rgba(160, 82, 45, 0.3) 24px,
                rgba(160, 82, 45, 0.3) 48px
              ),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 32px,
                rgba(101, 67, 33, 0.2) 32px,
                rgba(101, 67, 33, 0.2) 64px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%, 200% 200%',
            backgroundPosition: '0 0, 0 0, 0 0'
          }}
        />
        
        {/* Mortar lines and weathering */}
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full bg-[radial-gradient(circle_at_3px_3px,_rgba(0,0,0,0.6)_1px,_transparent_0)] bg-[length:16px_16px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_48%,_rgba(0,0,0,0.3)_49%,_rgba(0,0,0,0.3)_51%,_transparent_52%)] bg-[length:12px_12px] opacity-40"></div>
        </div>
      </div>

      {/* Faded cityscape silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <svg 
          viewBox="0 0 1200 150" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* City skyline silhouette */}
          <path 
            d="M0,150 L0,120 L50,120 L50,80 L120,80 L120,40 L180,40 L180,90 L240,90 L240,60 L300,60 L300,100 L350,100 L350,30 L420,30 L420,110 L480,110 L480,70 L540,70 L540,120 L600,120 L600,50 L670,50 L670,90 L730,90 L730,20 L800,20 L800,100 L860,100 L860,80 L920,80 L920,130 L980,130 L980,60 L1040,60 L1040,110 L1100,110 L1100,40 L1200,40 L1200,150 Z" 
            fill="currentColor" 
            className="text-brand-black/80 dark:text-brand-cream/20"
          />
          
          {/* Building details and windows */}
          <g className="text-brand-black/40 dark:text-brand-cream/10" opacity="0.6">
            {/* Windows on buildings */}
            <rect x="60" y="90" width="3" height="4" fill="currentColor"/>
            <rect x="70" y="90" width="3" height="4" fill="currentColor"/>
            <rect x="80" y="90" width="3" height="4" fill="currentColor"/>
            <rect x="130" y="50" width="4" height="5" fill="currentColor"/>
            <rect x="140" y="50" width="4" height="5" fill="currentColor"/>
            <rect x="150" y="50" width="4" height="5" fill="currentColor"/>
            <rect x="250" y="70" width="3" height="4" fill="currentColor"/>
            <rect x="260" y="70" width="3" height="4" fill="currentColor"/>
            <rect x="270" y="70" width="3" height="4" fill="currentColor"/>
            <rect x="360" y="40" width="4" height="6" fill="currentColor"/>
            <rect x="375" y="40" width="4" height="6" fill="currentColor"/>
            <rect x="390" y="40" width="4" height="6" fill="currentColor"/>
          </g>
        </svg>
      </div>

      {/* Enhanced graffiti "Real Talk" overlay - changed to pearlescent yellow */}
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
            animation: 'pearlescent 3s ease-in-out infinite'
          }}
        >
          Real Talk
          {/* Spray paint texture - changed to pearlescent yellow */}
          <div 
            className="absolute inset-0 opacity-60 blur-sm"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(255, 215, 0, 0.2), transparent)'
            }}
          ></div>
        </div>
        
        {/* Enhanced drip effects - changed to pearlescent yellow */}
        <div 
          className="absolute -bottom-3 left-8 w-2 h-8 opacity-30 transform rotate-12 blur-sm"
          style={{ backgroundColor: '#FFD700' }}
        ></div>
        <div 
          className="absolute -bottom-2 left-12 w-1 h-6 opacity-20 transform rotate-15 blur-sm"
          style={{ backgroundColor: '#FFD700' }}
        ></div>
        <div 
          className="absolute -bottom-4 right-4 w-1 h-5 opacity-25 transform rotate-8 blur-sm"
          style={{ backgroundColor: '#FFD700' }}
        ></div>
      </div>

      {/* Additional street tags */}
      <div className="absolute bottom-32 left-12 transform -rotate-3 pointer-events-none opacity-[0.08]" aria-hidden="true">
        <div 
          className="text-2xl font-black"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            filter: 'blur(0.3px)',
            color: '#FFD700'
          }}
        >
          HUSTLE
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12 relative">
            {/* Subtle texture behind heading */}
            <div className="absolute inset-0 opacity-[0.06] bg-[conic-gradient(from_45deg,_transparent_60%,_rgba(0,0,0,0.4)_80%,_transparent_100%)] bg-[length:20px_20px]"></div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-brand-black dark:text-brand-cream relative z-10">
              The Real About{" "}
              <span 
                className="relative"
                style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}
              >
                Building Wealth
                
                {/* Enhanced handwritten underline effect - changed to pearlescent yellow */}
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
              
              {/* Street-style corner tear effect */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-[#FFD700]/20 transform rotate-45 translate-x-3 -translate-y-3"></div>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-brand-black dark:text-brand-cream relative">
            {/* Additional grain texture behind text */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
            
            <p className="text-xl font-semibold relative z-10">
              <span className="relative">
                Let's keep it 100:
                {/* Enhanced underline - changed to pearlescent yellow */}
                <div 
                  className="absolute -bottom-2 left-0 w-full h-3 opacity-25 transform -rotate-1 blur-sm"
                  style={{ backgroundColor: '#FFD700' }}
                ></div>
              </span> Most wealth advice wasn't built for us. We're breaking cycles, flipping money trauma, and building legacy from the ground up.
            </p>
            
            <p className="relative z-10">
              This ain't about overnight success—it's about{" "}
              <span 
                className="relative font-semibold"
                style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}
              >
                street-smart moves
                {/* Enhanced handwritten circle effect - changed to pearlescent yellow */}
                <div className="absolute -inset-2 border-3 border-[#FFD700] rounded-full opacity-50 transform rotate-2 border-dashed"></div>
                <div className="absolute -inset-1 border-2 border-[#FFD700] rounded-full opacity-30 transform -rotate-1 border-dotted"></div>
              </span>
              , real setbacks, and stacking paper for the long haul.
            </p>

            <p className="relative z-10">
              If you're tired of fake gurus and ready for{" "}
              <span 
                className="relative font-semibold"
                style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}
              >
                blueprints that work in the real world
                {/* Enhanced highlight with texture - changed to pearlescent yellow */}
                <div className="absolute -inset-2 bg-[#FFD700] opacity-15 transform -rotate-1 -z-10 blur-sm"></div>
                <div className="absolute -inset-1 bg-[#FFD700] opacity-10 transform rotate-1 -z-10"></div>
              </span>
              , you're in the right spot.
            </p>

            <p 
              className="text-xl font-bold text-center mt-8 relative z-10"
              style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}
            >
              <span className="relative">
                Real builders. Real strategies. Real results.
                {/* Enhanced handwritten underline with multiple layers - changed to pearlescent yellow */}
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
                className="font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden text-black border-0"
                style={{ 
                  fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
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
