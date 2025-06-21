
import { Brain, Rocket, Shield } from "lucide-react";

interface BlueprintPillarsSectionProps {
  isVisible: boolean;
}

const BlueprintPillarsSection = ({ isVisible }: BlueprintPillarsSectionProps) => {
  return (
    <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black dark:text-brand-cream">
          The Standard Thought Blueprint
        </h2>
        <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Our unique approach combines mindset mastery, strategic hustle, and legacy building—designed for the culture, proven for progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="group" aria-label="Standard Thought methodology pillars">
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <Brain className="h-10 w-10 text-purple-600" aria-hidden="true" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
            Mindset Mastery
          </h3>
          <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
            Heal money trauma, build confidence, and unlock your full potential—rooted in our experience.
          </p>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#247EFF]/10 rounded-full flex items-center justify-center group-hover:bg-[#247EFF]/20 transition-colors">
              <Rocket className="h-10 w-10 text-[#247EFF]" aria-hidden="true" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
            Strategic Hustle
          </h3>
          <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
            Turn hustle into systems. Launch AI side hustles, stack income streams—no big startup needed.
          </p>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
              <Shield className="h-10 w-10 text-amber-600" aria-hidden="true" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
            Legacy Building
          </h3>
          <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
            Stack assets, break cycles, and build wealth that lasts—step-by-step, for your family's future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlueprintPillarsSection;
