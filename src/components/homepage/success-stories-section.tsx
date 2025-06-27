
import { TrendingUp, UserCheck, Brain, Star } from "lucide-react";

interface SuccessStoriesSectionProps {
  isVisible: boolean;
}

const SuccessStoriesSection = ({ isVisible }: SuccessStoriesSectionProps) => {
  return (
    <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black dark:text-brand-cream">
          Real People. Real Progress.
        </h2>
        <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Our community is flipping the script—one win at a time. Here's how folks just like you are turning hustle into legacy with Standard Thought.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16" role="group" aria-label="Community success stories">
        <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-6 hover:shadow-lg hover:shadow-[#247EFF]/10 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
              ))}
            </div>
          </div>
          <blockquote className="text-brand-black/80 dark:text-brand-cream/80 mb-4 italic">
            "I started with $0 and a vision. Now I've got a side hustle bringing in $1,200/month. The blueprint made it simple."
          </blockquote>
          <cite className="text-sm text-brand-black/60 dark:text-brand-cream/60 font-medium">
            — Tasha, Detroit
          </cite>
        </div>

        <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-green-500/20 rounded-3xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#247EFF]/10 rounded-full flex items-center justify-center mr-4">
              <UserCheck className="h-6 w-6 text-[#247EFF]" aria-hidden="true" />
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
              ))}
            </div>
          </div>
          <blockquote className="text-brand-black/80 dark:text-brand-cream/80 mb-4 italic">
            "Standard Thought helped me fix my credit and stack my first $10K. I never thought I'd get here."
          </blockquote>
          <cite className="text-sm text-brand-black/60 dark:text-brand-cream/60 font-medium">
            — Malik, Houston
          </cite>
        </div>

        <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
              <Brain className="h-6 w-6 text-purple-600" aria-hidden="true" />
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
              ))}
            </div>
          </div>
          <blockquote className="text-brand-black/80 dark:text-brand-cream/80 mb-4 italic">
            "I finally understand how to make my money work for me, not just work for money."
          </blockquote>
          <cite className="text-sm text-brand-black/60 dark:text-brand-cream/60 font-medium">
            — J. Rivera, Bronx
          </cite>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-12 sm:px-16 py-6 sm:py-7 rounded-3xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl text-xl sm:text-2xl border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700] after:absolute after:inset-0 after:bg-gradient-to-45 after:from-transparent after:via-white/20 after:to-transparent after:animate-[shimmer_3s_ease-in-out_infinite] min-h-[60px] sm:min-h-[70px]">
          Get the Blueprint
        </button>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
