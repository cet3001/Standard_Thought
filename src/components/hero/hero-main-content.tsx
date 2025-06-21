
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import ContextualLinks from "../contextual-links";

interface HeroMainContentProps {
  scrollToNewsletter: () => void;
}

const HeroMainContent = ({ scrollToNewsletter }: HeroMainContentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#0A0A0A] dark:text-brand-cream leading-tight">
        From Nothing to <span className="text-[#247EFF]">Generational Wealth</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed mb-8 max-w-4xl mx-auto">
        The system wasn't built for us, but that doesn't mean we can't change the game. Over <strong>1,000 first gen hustlers</strong> have already started building wealth from the ground up using our step by step frameworks—{" "}
        <ContextualLinks context="hero" className="inline" />. Learn how to <strong>stack real assets</strong>, build your legacy, and turn struggle into strategy, even if money talk feels new.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
        <Button 
          size="lg"
          onClick={scrollToNewsletter}
          className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105"
          aria-label="Start building wealth - Scroll to newsletter signup"
        >
          Begin Your Wealth Journey
          <ArrowUp className="ml-2 h-5 w-5 rotate-45" aria-label="Arrow pointing up and right indicating forward progress" />
        </Button>
      </div>
    </div>
  );
};

export default HeroMainContent;
