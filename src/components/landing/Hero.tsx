import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface HeroProps {
  headline: string;
  subheadline: string;
}

const Hero = ({ headline, subheadline }: HeroProps) => {
  const { isVisible: imageVisible, elementRef: imageRef } = useScrollAnimation();
  
  return (
    <div className="mb-16 relative">
      {/* Hero Layout: Image Left, Content Right */}
      <div className={`transition-all duration-1000 relative z-10 opacity-100 translate-y-0`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Hero Image - Left Side */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-gray-900 w-full max-w-lg" style={{ borderRadius: '12px' }}>
              <OptimizedImage 
                src="/lovable-uploads/d8ba41eb-6e6c-44f0-8503-5dfdabe0ad13.png"
                alt="Three people standing on a rooftop at sunrise, representing vision, unity, and power"
                className="w-full h-auto object-cover"
                width={500}
                height={375}
                priority={true}
              />
              {/* Moody overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Hero Content - Right Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter leading-[1.1] text-brand-cream">
              <span style={{ color: 'var(--color-lovable-black)' }}>Break</span> <span className="pearlescent-text">Cycles</span>. <span style={{ color: 'var(--color-lovable-black)' }}>Build</span> <span className="pearlescent-text">Legacy</span>. <span style={{ color: 'var(--color-lovable-black)' }}>Define Your</span> <span className="pearlescent-text">Truth</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl font-inter font-semibold text-brand-cream leading-[1.4]">
              You weren't handed blueprints. You inherited burdens. Now it's time to flip the script—rebuild identity, stack wealth, and transcend survival thinking.
            </p>

            {/* CTA Button */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <a href="/download/legacy-starter-kit">
                <Button 
                  size="lg"
                  className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 px-10 py-5"
                  style={{ 
                    backgroundColor: 'var(--color-lovable-pearlescent-yellow)',
                    borderColor: 'var(--color-lovable-pearlescent-yellow)',
                    color: 'var(--color-lovable-black)'
                  }}
                  aria-label="Download the Legacy Starter Kit"
                >
                  <span 
                    className="flex items-center gap-3 font-bold text-lg transform -rotate-1"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                      letterSpacing: '1px'
                    }}
                  >
                    📥 Download the Legacy Starter Kit
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  
                  {/* Urban texture overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.8)_1px,_transparent_0)] bg-[length:8px_8px] pointer-events-none"></div>
                </Button>
              </a>
            </div>

            {/* Site Tagline */}
            <div className="pt-4">
              <p className="text-sm md:text-base text-brand-cream/80 font-inter">
                Standard Thought is a digital sanctuary for those reclaiming power and purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;