
import { useState, useEffect } from "react";
import { useHeaderHeight } from "@/hooks/use-header-height";
import HeroContent from "./home/Hero";
import BuiltForPeopleLikeUsSection from "./home/FlipTheScript";
import TruthBombCarousel from "./homepage/truth-bomb-carousel";
import ValuePropsSection from "./homepage/value-props-section";
import BlueprintPillarsSection from "./home/Blueprint";
import SuccessStoriesSection from "./home/Testimonials";
import FinalCTASection from "./homepage/final-cta-section";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

interface HomepageHeroProps {
  scrollToNewsletter: () => void;
  heroContent?: any;
  valuePropsContent?: any;
  socialProofContent?: any;
}

const HomepageHero = ({ scrollToNewsletter, heroContent, valuePropsContent, socialProofContent }: HomepageHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerHeight = useHeaderHeight();
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    // Delay visibility to prevent layout shift
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="pb-24 relative overflow-hidden min-h-screen"
      style={{ 
        marginTop: `${headerHeight || 80}px`, // Fallback to prevent 0px causing shift
        paddingTop: '3rem'
      }}
    >
      {/* NO LOCAL BACKGROUND - USES GLOBAL PAGE BACKGROUND */}

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#247EFF]/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Hero Content */}
          <HeroContent 
            isVisible={isVisible} 
            scrollToNewsletter={scrollToNewsletter}
            headline={heroContent?.headline}
            subheadline={heroContent?.subheadline}
            ctaText={heroContent?.ctaText}
            ctaUrl={heroContent?.ctaUrl}
          />

          {/* Built For People Like Us */}
          <BuiltForPeopleLikeUsSection isVisible={isVisible} />

          {/* Truth Bomb Carousel */}
          <TruthBombCarousel isVisible={isVisible} />

          {/* Value Props */}
          <ValuePropsSection 
            isVisible={isVisible}
            title={valuePropsContent?.title}
            subtitle={valuePropsContent?.subtitle}
            props={valuePropsContent?.props}
          />

          {/* Content Pillars */}
          <BlueprintPillarsSection isVisible={isVisible} />

          {/* Success Stories */}
          <SuccessStoriesSection isVisible={isVisible} />

          {/* Final CTA */}
          <FinalCTASection isVisible={isVisible} scrollToNewsletter={scrollToNewsletter} />
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
