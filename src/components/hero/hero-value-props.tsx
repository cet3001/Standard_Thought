
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroValueProps = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="bg-gradient-to-br from-[#247EFF]/10 to-blue-100/20 dark:from-[#247EFF]/20 dark:to-blue-900/20 rounded-3xl p-8 border border-[#247EFF]/20">
        <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
          Shift from Survival to <span className="text-[#247EFF]">Wealth</span>
        </h3>
        <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed mb-6">
          You've always made a way with what you had. Now it's time to turn that grind into real progress. Standard Thought is for those who built from scratch—using vision and hustle as their foundation. We're here to help you <strong>break cycles, stack assets</strong>, and create a legacy that lasts.
        </p>
        <Link to="/wealth-building-strategies">
          <Button 
            variant="outline" 
            className="w-full border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
            aria-label="Learn more about wealth building strategies"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
      
      <div className="bg-gradient-to-br from-green-50/80 to-emerald-100/20 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-500/20">
        <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
          <span className="text-green-600 dark:text-green-400">Straightforward</span> Financial Education
        </h3>
        <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed mb-6">
          Accessible money education with no barriers, no jargon—just <strong>clear steps to build, protect, and grow your wealth</strong>. Real-world strategies for turning hustle into results and watching small wins stack up.
        </p>
        <Link to="/financial-education-guide">
          <Button 
            variant="outline" 
            className="w-full border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white"
            aria-label="Learn more about financial education guide"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroValueProps;
