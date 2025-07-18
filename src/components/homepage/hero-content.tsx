
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroContentProps {
  isVisible: boolean;
  scrollToNewsletter: () => void;
}

const HeroContent = ({ isVisible, scrollToNewsletter }: HeroContentProps) => {
  return (
    <div className="mb-16 relative">
      {/* Hero Layout: Image Left, Content Right */}
      <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Hero Image - Left Side */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-gray-900 w-full max-w-lg">
              <img 
                src="/lovable-uploads/152ff0a5-5f07-49b5-a839-2ae048e30898.png"
                alt="Group of urban entrepreneurs building legacy together at sunset"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Moody overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Hero Content - Right Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter leading-[1.1] text-brand-cream">
              Build <span className="pearlescent-text">Legacy</span> From Nothing
            </h1>

            {/* Subheadline */}
            <h2 className="text-lg md:text-xl lg:text-2xl font-inter font-semibold text-brand-cream leading-[1.4]">
              You Inherited Cycles—Now Flip 'Em: Street-Smart Plays Blending{' '}
              <span className="text-brand-cream font-bold">Urban Sociology</span> (Breaking Hood Trauma) +{' '}
              <span className="text-brand-cream font-bold">Behavioral Psych</span> (Instinct to Wealth)
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-base md:text-lg lg:text-xl text-brand-cream leading-[1.6] font-inter">
              <p>
                In Black communities, <span className="font-bold text-white">90% of wealth evaporates in one generation</span>—why we still grinding without blueprints?
              </p>
              <p>
                <span className="pearlescent-text font-bold">Standard Thought Law #1: The Trauma Flip</span>—Turn Money Scars into Legacy Assets.
              </p>
              <p>
                No shortcuts, no bs: Strategies for stacking wealth, flipping AI hustles, and shattering generational trauma with <span className="font-semibold text-white">real, layered insight</span>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <Link to="/sales">
                <Button 
                  size="lg"
                  className="group bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-400 text-black font-bold text-lg px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-600 hover:border-yellow-500"
                  aria-label="Get the wealth building blueprint"
                >
                  <span className="flex items-center gap-3 font-inter font-bold">
                    ⚡ Get The Blueprint
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust Signal */}
            <div className="pt-4">
              <p className="text-sm md:text-base text-brand-cream font-inter italic">
                "The blueprint they don't want us to have—now codified for the culture."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
