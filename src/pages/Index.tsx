import Analytics from "@/components/analytics";
import FloatingCTA from "@/components/floating-cta";
import MobileFloatingCTA from "@/components/mobile-floating-cta";
import HeroSection from "@/components/hero-section";
import LeadMagnetPopup from "@/components/lead-magnet-popup";
import ManifestoSection from "@/components/manifesto-section";
import { NewsletterSection } from "@/components/newsletter-section";
import TrustBadgeSection from "@/components/trust-badge-section";
import AIChat from "@/components/ai-chat";
import SEO from "@/components/seo";
import KeywordOptimization from "@/components/seo/keyword-optimization";
import VoiceSearchOptimization from "@/components/seo/voice-search-optimization";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  useMobilePerformance();

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      {/* Enhanced SEO */}
      <SEO
        title="Build Generational Wealth From Nothing | Standardthought - Urban Entrepreneurship Hub"
        description="Join 1000+ urban entrepreneurs building generational wealth from scratch. Get proven frameworks for hood financial literacy, AI side hustles, credit building, and street-smart investing strategies. No safety net required."
        keywords="build generational wealth from nothing, urban entrepreneurship, hood financial literacy, street smart money moves, AI side hustles, credit building strategies, urban investing strategies, first generation wealth builders, entrepreneur community, financial education for beginners"
        url="/"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* SEO Enhancement Components */}
      <KeywordOptimization primaryKeyword="build generational wealth from nothing" context="entrepreneurship" />
      <VoiceSearchOptimization topic="wealth-building" />
      <FeaturedSnippets topic="wealth-building" />

      {/* Analytics */}
      <Analytics />

      {/* Hero */}
      <main>
        <HeroSection />

        {/* AI Financial Advisor */}
        <section className="py-16 bg-white/50 dark:bg-brand-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-brand-cream mb-4">
                Get Real Financial Advice
              </h2>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Chat with our AI financial advisor trained on street-smart wealth building strategies. 
                Get personalized advice for your money moves.
              </p>
            </div>
            <AIChat />
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSection />

        {/* Manifesto */}
        <ManifestoSection />

        {/* Trust Badge */}
        <TrustBadgeSection />
      </main>

      {/* Conditional CTA based on device */}
      {isMobile ? <MobileFloatingCTA /> : <FloatingCTA />}

      {/* Lead Magnet Popup */}
      <LeadMagnetPopup />
    </div>
  );
};

export default Index;
