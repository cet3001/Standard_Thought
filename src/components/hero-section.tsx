
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import ContextualLinks from "./contextual-links";
import LSIContent from "./lsi-content";
import SiteNavigationHub from "./site-navigation-hub";
import SemanticContentEnhancer from "./seo/semantic-content-enhancer";

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
    <section className="py-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden">
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
              Build Your <span className="text-[#247EFF]">Legacy</span> From Nothing
            </h1>
            
            <p className="text-xl md:text-2xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed mb-8 max-w-4xl mx-auto">
              Join 1000+ urban entrepreneurs mastering <strong>hood financial literacy</strong> and <strong>street smart money moves</strong>. Get access to{" "}
              <ContextualLinks context="hero" className="inline" />, build your network with proven <strong>urban investing strategies</strong>, and create lasting impact through <strong>generational wealth building for beginners</strong>—no safety net required.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg"
                onClick={scrollToNewsletter}
                className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105"
              >
                Get Your Free Playbook
                <ArrowUp className="ml-2 h-5 w-5 rotate-45" />
              </Button>
            </div>
          </div>

          {/* Social Proof with enhanced keywords */}
          <div className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#247EFF] mb-2">1000+</div>
                <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80">Builders mastering <strong>urban investing strategies</strong> and wealth creation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#247EFF] mb-2">$10M+</div>
                <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80">Generated through <strong>street smart money moves</strong> and business development</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#247EFF] mb-2">95%</div>
                <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80">Success rate with our <strong>hood financial literacy</strong> programs</div>
              </div>
            </div>
          </div>

          {/* Navigation Hub */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SiteNavigationHub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
