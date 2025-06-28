
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { trackButtonClick } from "@/lib/analytics-utils";

interface HeroContentProps {
  isVisible: boolean;
  scrollToNewsletter: () => void;
}

const HeroContent = ({ isVisible, scrollToNewsletter }: HeroContentProps) => {
  const handleGetBlueprint = () => {
    trackButtonClick('Get the Blueprint', 'hero_section', 'scroll_to_newsletter');
    scrollToNewsletter();
  };

  return (
    <div className="text-center mb-16">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-brand-black dark:text-brand-cream">
          Build <span className="text-[#FFD700]">Legacy</span><br />
          From <span className="text-[#FFD700]">Nothing</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-brand-black dark:text-brand-cream leading-relaxed px-4">
          Street-smart strategies for building wealth, flipping AI hustles, and breaking money trauma.
        </p>

        {/* Single Primary CTA */}
        <div className="flex justify-center mb-12 px-4">
          <Button 
            size="lg"
            onClick={handleGetBlueprint}
            className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700] after:absolute after:inset-0 after:bg-gradient-to-45 after:from-transparent after:via-white/20 after:to-transparent after:animate-[shimmer_3s_ease-in-out_infinite]"
            aria-label="Get the wealth building blueprint - scroll to newsletter signup"
          >
            <Zap className="mr-3 h-5 w-5 sm:h-6 sm:w-6" aria-label="Lightning bolt icon representing fast action" />
            Get the Blueprint
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
