
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowRight, Users, TrendingUp, CheckCircle } from "lucide-react";
import ContextualLinks from "./contextual-links";
import LSIContent from "./lsi-content";
import SiteNavigationHub from "./site-navigation-hub";
import SemanticContentEnhancer from "./seo/semantic-content-enhancer";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNewsletter = () => {
    const newsletterSection = document.querySelector('[data-section="newsletter"]');
    if (newsletterSection) {
      const formElement = newsletterSection.querySelector('form');
      
      if (formElement) {
        const formRect = formElement.getBoundingClientRect();
        const targetPosition = window.pageYOffset + formRect.top;
        const offset = window.innerWidth < 768 ? window.innerHeight * 0.3 : 100;
        
        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth'
        });
      } else {
        const offsetTop = newsletterSection.getBoundingClientRect().top + window.pageYOffset;
        const offset = window.innerWidth < 768 ? 300 : 150;
        
        window.scrollTo({
          top: offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="pt-32 pb-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden">
      <LSIContent primaryKeyword="entrepreneurship" context="entrepreneurship" />
      
      {/* Enhanced SEO with targeted keywords */}
      <SemanticContentEnhancer
        primaryKeyword="urban entrepreneurship and generational wealth building for beginners"
        context="entrepreneurship"
        voiceSearchTopic="wealth-building"
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
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
                <ArrowUp className="ml-2 h-5 w-5 rotate-45" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Enhanced Social Proof with visual icons and specific metrics */}
          <div className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="group" aria-label="Success metrics and social proof">
              
              {/* Community Growth */}
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

              {/* Income Growth */}
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

              {/* Success Rate */}
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <CheckCircle className="h-8 w-8 text-accent" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-accent mb-2">83%</div>
                <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80 font-medium mb-2">Success Rate</div>
                <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">Members who increased their income within 6 months</div>
              </div>
            </div>

            {/* Testimonial Preview */}
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

          {/* Value Props addressing systemic barriers */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-[#247EFF]/10 to-blue-100/20 dark:from-[#247EFF]/20 dark:to-blue-900/20 rounded-3xl p-8 border border-[#247EFF]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
                From Survival Mode to <span className="text-[#247EFF]">Wealth Mode</span>
              </h3>
              <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed mb-6">
                We know what it's like when every dollar matters and money stress is real. Our approach helps you break free from living check to check and start <strong>securing the bag</strong> with assets that work for you—not against you.
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
                <span className="text-green-600 dark:text-green-400">Keep It 100</span> Financial Education
              </h3>
              <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed mb-6">
                Learn <strong>street smart money moves</strong> and investment strategies in language that makes sense. No corporate jargon, no code switching—just real talk about <strong>leveling up financially</strong>.
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

          {/* Navigation Hub */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SiteNavigationHub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
