
import { Users, TrendingUp, CheckCircle } from "lucide-react";

interface SocialProofSectionProps {
  isVisible: boolean;
}

const SocialProofSection = ({ isVisible }: SocialProofSectionProps) => {
  return (
    <div className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="group" aria-label="Success metrics and social proof">
        
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#247EFF]/10 rounded-full flex items-center justify-center group-hover:bg-[#247EFF]/20 transition-colors">
              <Users className="h-8 w-8 text-[#247EFF]" aria-hidden="true" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#247EFF] mb-2" aria-label="Over 1000 community members">1,000+</div>
          <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80 font-medium mb-2">Active Community Members</div>
          <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">First gen hustlers building wealth from scratch</div>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <TrendingUp className="h-8 w-8 text-green-600" aria-hidden="true" />
            </div>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2" aria-label="Income growth from 500 to 50,000 dollars">$500→$50K+</div>
          <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80 font-medium mb-2">Average Income Growth</div>
          <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">From side hustles to legitimate businesses</div>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <CheckCircle className="h-8 w-8 text-orange-600" aria-hidden="true" />
            </div>
          </div>
          <div className="text-3xl font-bold text-orange-600 mb-2">83%</div>
          <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80 font-medium mb-2">Success Rate</div>
          <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">Members who increased their income within 6 months</div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-[#247EFF]/20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 italic mb-4">
            "I went from living check to check to having my first $10K saved in 8 months. The frameworks here are different—they actually work for people like us."
          </p>
          <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
            — Marcus T., Community Member since 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
