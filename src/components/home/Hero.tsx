
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface HeroContentProps {
  isVisible: boolean;
  scrollToNewsletter: () => void;
}

const HeroContent = ({ isVisible, scrollToNewsletter }: HeroContentProps) => {
  const { isVisible: imageVisible, elementRef: imageRef } = useScrollAnimation();
  return (
    <div className="mb-16 relative">
      {/* Hero Layout: Image Left, Content Right */}
      <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Hero Image - Left Side */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-gray-900 w-full max-w-lg" style={{ borderRadius: '12px' }}>
              <img 
                src="/lovable-uploads/d8ba41eb-6e6c-44f0-8503-5dfdabe0ad13.png"
                alt="Three people standing on a rooftop at sunrise, representing vision, unity, and power"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
                style={{ aspectRatio: '4/3', objectFit: 'cover' }}
              />
              {/* Moody overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Hero Content - Right Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter leading-[1.1] text-brand-cream">
              <span style={{ color: 'var(--color-lovable-black)' }}>Mindset Is</span> <span className="pearlescent-text">Survival</span>. <span className="pearlescent-text">Liberation</span>. <span className="pearlescent-text">Legacy</span>.
            </h1>

            {/* Subheadline */}
            <div className="space-y-4 transition-all duration-1000 delay-1000 opacity-0 translate-y-4 animate-[fade-in_1s_ease-out_1s_forwards]">
              <p className="text-lg md:text-xl lg:text-2xl font-inter font-semibold text-brand-cream leading-[1.4]">
                You weren't handed a blueprint. You had to build one while surviving.
              </p>
              <p className="text-base md:text-lg lg:text-xl font-inter text-brand-cream/90 leading-[1.5]">
                Standard Thought is a digital sanctuary for cycle-breakers, soul-builders, and blueprint writers. We show you how to unlearn the lies, rebuild with truth, stack what matters, and transcend survival for good. This isn't just about wealth. This is about wisdom. Power. And reclaiming your story.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary CTA */}
              <a href="/download/legacy-starter-kit">
                <Button 
                  size="lg"
                  className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:shadow-yellow-400/30 transform hover:scale-105 transition-all duration-300 border-2 px-10 py-5 animate-pulse hover:animate-none"
                  style={{ 
                    backgroundColor: 'var(--color-lovable-pearlescent-yellow)',
                    borderColor: 'var(--color-lovable-pearlescent-yellow)',
                    color: 'var(--color-lovable-black)'
                  }}
                  aria-label="Start your cycle-breaking journey"
                >
                  <span 
                    className="flex items-center gap-3 font-bold text-lg transform -rotate-1"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                      letterSpacing: '1px'
                    }}
                  >
                    🔥 Start Your Cycle-Breaking Journey
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  
                  {/* Urban texture overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.8)_1px,_transparent_0)] bg-[length:8px_8px] pointer-events-none"></div>
                </Button>
              </a>

              {/* Secondary CTA (Mobile Alternative) */}
              <div className="block sm:hidden">
                <a href="/download/legacy-starter-kit">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="group relative rounded-xl border-2 px-8 py-3 transition-all duration-300 hover:scale-105"
                    style={{ 
                      borderColor: 'var(--color-lovable-pearlescent-yellow)',
                      color: 'var(--color-lovable-pearlescent-yellow)',
                      backgroundColor: 'transparent'
                    }}
                    aria-label="Enter the sanctuary"
                  >
                    <span className="flex items-center gap-2 font-semibold text-base">
                      → Enter the Sanctuary
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
