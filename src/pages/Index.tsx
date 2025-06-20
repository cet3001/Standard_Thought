
import Analytics from "@/components/analytics";
import FloatingCTA from "@/components/floating-cta";
import HeroSection from "@/components/hero-section";
import LeadMagnetPopup from "@/components/lead-magnet-popup";
import ManifestoSection from "@/components/manifesto-section";
import { NewsletterSection } from "@/components/newsletter-section";
import TrustBadgeSection from "@/components/trust-badge-section";
import SEO from "@/components/seo";
import KeywordOptimization from "@/components/seo/keyword-optimization";
import VoiceSearchOptimization from "@/components/seo/voice-search-optimization";
import FeaturedSnippets from "@/components/seo/featured-snippets";

const Index = () => {
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
      <HeroSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Manifesto */}
      <ManifestoSection />

      {/* Trust Badge */}
      <TrustBadgeSection />

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Lead Magnet Popup */}
      <LeadMagnetPopup />
    </div>
  );
};

export default Index;
