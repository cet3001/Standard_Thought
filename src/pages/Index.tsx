
import Analytics from "@/components/analytics";
import FloatingCTA from "@/components/floating-cta";
import HeroSection from "@/components/hero-section";
import LeadMagnetPopup from "@/components/lead-magnet-popup";
import ManifestoSection from "@/components/manifesto-section";
import { NewsletterSection } from "@/components/newsletter-section";
import TrustBadgeSection from "@/components/trust-badge-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
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
