import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowRight, Users, TrendingUp, CheckCircle, Brain, Rocket, Shield, Star, UserCheck, ArrowDown } from "lucide-react";
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
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <CheckCircle className="h-8 w-8 text-orange-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">83%</div>
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

          {/* Updated Value Props with cleaner, more direct copy */}
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

          {/* New Content Pillars Section */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
                The Standard Thought Blueprint
              </h2>
              <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Our unique approach combines mindset mastery, strategic hustle, and legacy building—designed for the culture, proven for progress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="group" aria-label="Standard Thought methodology pillars">
              {/* Mindset Mastery */}
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Brain className="h-10 w-10 text-purple-600" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
                  Mindset Mastery
                </h3>
                <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed">
                  Heal money trauma, build confidence, and unlock your full potential—rooted in our experience.
                </p>
              </div>

              {/* Strategic Hustle */}
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#247EFF]/10 rounded-full flex items-center justify-center group-hover:bg-[#247EFF]/20 transition-colors">
                    <Rocket className="h-10 w-10 text-[#247EFF]" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
                  Strategic Hustle
                </h3>
                <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed">
                  Turn hustle into systems. Launch AI side hustles, stack income streams—no big startup needed.
                </p>
              </div>

              {/* Legacy Building */}
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Shield className="h-10 w-10 text-amber-600" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
                  Legacy Building
                </h3>
                <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed">
                  Stack assets, break cycles, and build wealth that lasts—step-by-step, for your family's future.
                </p>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
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

          {/* Scroll to Newsletter CTA */}
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

          {/* Navigation Hub */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SiteNavigationHub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
