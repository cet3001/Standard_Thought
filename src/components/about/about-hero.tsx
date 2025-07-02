
import { useEffect, useState } from "react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-40 pb-16 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
            Unlock a New{' '}
            <span className="relative inline-block">
              <span 
                className="relative z-10 font-black"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFFF00 75%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  transform: 'rotate(-1deg)',
                  display: 'inline-block'
                }}
              >
                Mindset
              </span>
              {/* Graffiti-style underline */}
              <svg 
                className="absolute -bottom-2 left-0 w-full h-4 z-0" 
                viewBox="0 0 200 20" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M5,15 Q50,5 95,12 T185,8" 
                  stroke="url(#graffiti-gradient)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round"
                  style={{
                    filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
                  }}
                />
                <defs>
                  <linearGradient id="graffiti-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="25%" stopColor="#FFA500" />
                    <stop offset="50%" stopColor="#FFD700" />
                    <stop offset="75%" stopColor="#FFFF00" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed max-w-3xl mx-auto">
            This ain't just about stacking bread—it's about flipping your story and breaking cycles. 
            If you ever had to build your own blueprint, you're in the right spot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
