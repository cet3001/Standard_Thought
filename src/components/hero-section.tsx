
import { useState, useEffect } from "react";
import LSIContent from "./lsi-content";
import SiteNavigationHub from "./site-navigation-hub";
import SemanticContentEnhancer from "./seo/semantic-content-enhancer";
import HeroMainContent from "./hero/hero-main-content";
import HeroSocialProof from "./hero/hero-social-proof";
import HeroValueProps from "./hero/hero-value-props";
import HeroContentPillars from "./hero/hero-content-pillars";
import HeroSuccessStories from "./hero/hero-success-stories";
import HeroScrollCTA from "./hero/hero-scroll-cta";

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
          <HeroMainContent scrollToNewsletter={scrollToNewsletter} />

          {/* Enhanced Social Proof */}
          <HeroSocialProof />

          {/* Value Props */}
          <HeroValueProps />

          {/* Content Pillars Section */}
          <HeroContentPillars />

          {/* Success Stories Section */}
          <HeroSuccessStories />

          {/* Scroll to Newsletter CTA */}
          <HeroScrollCTA scrollToNewsletter={scrollToNewsletter} />

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
