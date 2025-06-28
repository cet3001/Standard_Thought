
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
      {/* Subtle brick wall background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 8px,
                rgba(10, 10, 10, 0.1) 8px,
                rgba(10, 10, 10, 0.1) 16px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 24px,
                rgba(10, 10, 10, 0.15) 24px,
                rgba(10, 10, 10, 0.15) 48px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%',
            backgroundPosition: '0 0, 0 0'
          }}
        />
      </div>

      {/* Graffiti "Real Talk" overlay */}
      <div className="absolute top-8 right-8 transform rotate-12 pointer-events-none" aria-hidden="true">
        <div 
          className="text-[#247EFF] text-4xl md:text-6xl font-black opacity-40"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))'
          }}
        >
          Real Talk
        </div>
        {/* Subtle drip effect */}
        <div 
          className="absolute -bottom-2 left-8 w-1 h-6 bg-[#247EFF] opacity-20 transform rotate-12"
          style={{ 
            background: 'linear-gradient(to bottom, #247EFF, transparent)',
            filter: 'blur(0.5px)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-brand-black dark:text-brand-cream relative">
              The Real About <span className="text-[#247EFF]">Building Wealth</span>
              
              {/* Handwritten underline effect under "Building Wealth" */}
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-3 opacity-60"
                style={{
                  background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 20'%3E%3Cpath d='M5 15 Q75 5 145 12 Q215 18 295 8' stroke='%23247EFF' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              ></div>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-brand-black dark:text-brand-cream">
            <p className="text-xl font-semibold">
              <span className="relative">
                Let's keep it 100:
                {/* Subtle underline */}
                <div 
                  className="absolute -bottom-1 left-0 w-full h-2 bg-[#247EFF] opacity-20 transform -rotate-1"
                  style={{ filter: 'blur(0.5px)' }}
                ></div>
              </span> Most wealth advice wasn't built for us. We're breaking cycles, flipping money trauma, and building legacy from the ground up.
            </p>
            
            <p>
              This ain't about overnight success—it's about <span className="relative text-[#247EFF] font-semibold">
                street-smart moves
                {/* Handwritten circle effect */}
                <div 
                  className="absolute -inset-1 border-2 border-[#247EFF] rounded-full opacity-40 transform rotate-2"
                  style={{ borderStyle: 'dashed' }}
                ></div>
              </span>, real setbacks, and stacking paper for the long haul.
            </p>

            <p>
              If you're tired of fake gurus and ready for <span className="relative text-[#247EFF] font-semibold">
                blueprints that work in the real world
                {/* Subtle highlight */}
                <div 
                  className="absolute -inset-1 bg-[#247EFF] opacity-10 transform -rotate-1 -z-10"
                  style={{ filter: 'blur(1px)' }}
                ></div>
              </span>, you're in the right spot.
            </p>

            <p className="text-xl font-bold text-[#247EFF] text-center mt-8">
              <span className="relative">
                Real builders. Real strategies. Real results.
                {/* Handwritten underline */}
                <div 
                  className="absolute -bottom-2 left-0 w-full h-2 opacity-60"
                  style={{
                    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 15'%3E%3Cpath d='M10 8 Q100 2 200 9 Q300 15 390 6' stroke='%23247EFF' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
              </span>
            </p>
          </div>

          <div className="text-center mt-12">
            <Link to="/resources">
              <Button 
                size="lg"
                className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                style={{ 
                  fontFamily: "'IBM Plex Sans', 'Courier New', monospace"
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
    </section>
  );
};

export default ManifestoSection;
