
import { useState, useEffect } from "react";
import HeroContent from "./homepage/hero-content";
import SocialProofSection from "./homepage/social-proof-section";
import ValuePropsSection from "./homepage/value-props-section";
import BlueprintPillarsSection from "./homepage/blueprint-pillars-section";
import SuccessStoriesSection from "./homepage/success-stories-section";
import FinalCTASection from "./homepage/final-cta-section";
import { supabase } from "@/integrations/supabase/client";

interface HomepageHeroProps {
  scrollToNewsletter: () => void;
}

const HomepageHero = ({ scrollToNewsletter }: HomepageHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [urbanBackgroundUrl, setUrbanBackgroundUrl] = useState<string>("");

  useEffect(() => {
    // Make component visible immediately
    setIsVisible(true);
    
    // Generate urban background image in the background (non-blocking)
    const generateUrbanBackground = async () => {
      try {
        console.log("🎨 Starting background urban image generation...");
        
        const { data, error } = await supabase.functions.invoke('generate-image', {
          body: {
            prompt: "Raw urban cityscape background, street photography style, graffiti walls, community gathering spaces, inner city neighborhood, gritty atmosphere with grain filter effect, high contrast shadows, authentic street culture, weathered buildings, urban decay aesthetic, natural lighting, photojournalistic style, documentary photography feel",
            size: "1792x1024",
            quality: "hd",
            style: "natural"
          }
        });

        if (error) {
          console.error("❌ Error generating urban background:", error);
          return;
        }

        if (data && data.imageUrl) {
          setUrbanBackgroundUrl(data.imageUrl);
          console.log("✅ Urban background generated and applied");
        }
      } catch (error) {
        console.error("❌ Failed to generate urban background:", error);
      }
    };

    // Start background generation without blocking the UI
    generateUrbanBackground();
  }, []);

  return (
    <section className="pt-40 pb-24 relative overflow-hidden">
      {/* Enhanced Urban Background with Immediate Fallbacks */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Immediate CSS fallback background - shows instantly */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-50"></div>
        
        {/* CSS urban texture patterns - show immediately */}
        <div className="absolute inset-0 opacity-30">
          {/* Brick pattern */}
          <div 
            className="absolute inset-0 bg-repeat opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(139,69,19,0.8) 1px, transparent 1px),
                linear-gradient(rgba(139,69,19,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(160,82,45,0.6) 2px, transparent 2px),
                linear-gradient(rgba(160,82,45,0.6) 2px, transparent 2px)
              `,
              backgroundSize: '40px 20px, 40px 20px, 80px 40px, 80px 40px'
            }}
          />
          {/* Grunge overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(0,0,0,0.3)_2px,_transparent_2px)] bg-[length:30px_30px] opacity-50"></div>
        </div>
        
        {/* AI-generated background - loads when ready with smooth transition */}
        {urbanBackgroundUrl && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 opacity-40"
            style={{
              backgroundImage: `url(${urbanBackgroundUrl})`,
              filter: 'grayscale(20%) contrast(1.1) brightness(0.7) sepia(10%)'
            }}
          />
        )}
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/95 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/95"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#247EFF]/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Hero Content */}
          <HeroContent isVisible={isVisible} scrollToNewsletter={scrollToNewsletter} />

          {/* Social Proof */}
          <SocialProofSection isVisible={isVisible} />

          {/* Value Props */}
          <ValuePropsSection isVisible={isVisible} />

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
