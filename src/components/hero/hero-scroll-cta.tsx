
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroScrollCTAProps {
  scrollToNewsletter: () => void;
}

const HeroScrollCTA = ({ scrollToNewsletter }: HeroScrollCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Button 
        size="lg"
        variant="outline"
        onClick={scrollToNewsletter}
        className="bg-gradient-to-r from-[#247EFF]/10 to-[#247EFF]/20 border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105"
        aria-label="Ready to start your own story - Scroll to newsletter signup"
      >
        <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
        Ready to start your own story? Get the Blueprint
      </Button>
    </div>
  );
};

export default HeroScrollCTA;
