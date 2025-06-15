
import { Sparkles, TrendingUp, Target } from "lucide-react";

interface BlogShowcaseHeaderProps {
  isVisible: boolean;
}

const BlogShowcaseHeader = ({ isVisible }: BlogShowcaseHeaderProps) => {
  return (
    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="flex items-center justify-center gap-4 mb-8">
        <Target className="w-12 h-12 text-[#247EFF] animate-bounce" />
        <h2 className="text-5xl md:text-6xl font-bold text-brand-black dark:text-brand-cream">
          Real Stories. Real Struggle.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#247EFF] to-[#007cba] animate-pulse">
            Real Wins.
          </span>
        </h2>
        <Sparkles className="w-12 h-12 text-[#247EFF] animate-pulse" />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl text-brand-black/70 dark:text-brand-cream/70 leading-relaxed mb-6">
          No gurus. No gatekeepers. Just hustlers, dreamers, and builders who started with nothing but grit—and turned it into legacy.{" "}
          <span className="text-[#247EFF] font-bold animate-pulse">Your story's next.</span>
        </p>
        
        <div className="flex items-center justify-center gap-3 text-lg text-brand-black/60 dark:text-brand-cream/60">
          <TrendingUp className="w-6 h-6 text-green-500 animate-bounce" />
          <span className="font-semibold">From mud to momentum</span>
          <span className="w-2 h-2 bg-[#247EFF] rounded-full animate-pulse"></span>
          <span className="font-semibold">Zero to generational wealth</span>
          <TrendingUp className="w-6 h-6 text-green-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  );
};

export default BlogShowcaseHeader;
