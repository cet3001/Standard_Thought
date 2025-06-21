
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, UserCheck, Brain, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
          Real People. Real Progress.
        </h2>
        <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Our community is flipping the script—one win at a time. Here's how folks just like you are turning hustle into legacy with Standard Thought.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" role="group" aria-label="Community success stories">
        {/* Story 1 */}
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
          <blockquote className="text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-4 italic">
            "I started with $0 and a vision. Now I've got a side hustle bringing in $1,200/month. The blueprint made it simple."
          </blockquote>
          <cite className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 font-medium">
            — Tasha, Detroit
          </cite>
        </div>

        {/* Story 2 */}
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
          <blockquote className="text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-4 italic">
            "Standard Thought helped me fix my credit and stack my first $10K. I never thought I'd get here."
          </blockquote>
          <cite className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 font-medium">
            — Malik, Houston
          </cite>
        </div>

        {/* Story 3 */}
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
          <blockquote className="text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-4 italic">
            "I finally understand how to make my money work for me, not just work for money."
          </blockquote>
          <cite className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 font-medium">
            — J. Rivera, Bronx
          </cite>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/blog">
          <Button 
            variant="outline" 
            className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
            aria-label="Read more success stories"
          >
            See More Stories
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
        <Link to="/submit-story">
          <Button 
            variant="outline" 
            className="border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white"
            aria-label="Share your success story"
          >
            Share Your Win
            <UserCheck className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSuccessStories;
