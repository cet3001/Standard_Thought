import Analytics from "@/components/analytics";
import HeroSection from "@/components/hero-section";
import LeadMagnetPopup from "@/components/lead-magnet-popup";
import ManifestoSection from "@/components/manifesto-section";
import { NewsletterSection } from "@/components/newsletter-section";
import TrustBadgeSection from "@/components/trust-badge-section";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import KeywordOptimization from "@/components/seo/keyword-optimization";
import VoiceSearchOptimization from "@/components/seo/voice-search-optimization";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import FAQSection from "@/components/faq/faq-section";
import FeaturedContentSection from "@/components/featured-content-section";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const Index = () => {
  useMobilePerformance();

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 }
  ];

  const homepageFAQs = [
    {
      question: "What is urban wealth building and how do I start?",
      answer: "Urban wealth building focuses on creating generational wealth using street-smart strategies and accessible resources. Start with financial education, build multiple income streams through AI side hustles, and invest in appreciating assets like index funds and real estate. Our community provides step-by-step frameworks designed for first-gen entrepreneurs."
    },
    {
      question: "What are the best AI side hustles for beginners in 2024?",
      answer: "Top AI side hustles include content creation with ChatGPT, social media management using automation tools, AI-powered copywriting services, and image generation for marketing. Beginners can start earning $500-2000 monthly within 3-6 months by focusing on high-demand services like blog writing and social media content."
    },
    {
      question: "How can first-generation entrepreneurs build wealth without family money?",
      answer: "First-gen entrepreneurs can build wealth by focusing on education-first approaches: learn financial literacy, start service-based businesses with minimal capital, leverage community resources and grants, and reinvest profits systematically. The key is turning hustle into strategy through proven frameworks and consistent action."
    },
    {
      question: "What financial education resources work best for urban communities?",
      answer: "Effective financial education for urban communities uses accessible language, real-world examples, and actionable steps. Focus on budgeting basics, credit building strategies, micro-investing apps, and entrepreneurship opportunities. Avoid corporate jargon and connect learning to immediate, practical applications."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      {/* Enhanced SEO with targeted keywords */}
      <SEO
        title="Urban Wealth Building & AI Side Hustles | Standardthought - Financial Education for First-Gen Entrepreneurs"
        description="Master urban wealth building with proven AI side hustles and financial education designed for first-gen entrepreneurs. Join 1000+ builders creating generational wealth from nothing using street-smart strategies."
        keywords="urban wealth building, AI side hustles, financial education for first-gen entrepreneurs, generational wealth building from nothing, street smart money moves, urban entrepreneurship hub, hood financial literacy, first generation wealth builders, AI business ideas for beginners, urban investing strategies"
        url="/"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* SEO Enhancement Components */}
      <KeywordOptimization primaryKeyword="urban wealth building" context="entrepreneurship" />
      <VoiceSearchOptimization topic="wealth-building" />
      <FeaturedSnippets topic="wealth-building" />

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header */}
      <Navigation />

      {/* Hero */}
      <main>
        <HeroSection />

        {/* Newsletter */}
        <NewsletterSection />

        {/* Featured Content Section - NEW */}
        <FeaturedContentSection />

        {/* Manifesto */}
        <ManifestoSection />

        {/* FAQ Section with Schema */}
        <section className="py-16 bg-white/50 dark:bg-brand-black/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <FAQSection
              title="Frequently Asked Questions About Urban Wealth Building"
              faqs={homepageFAQs}
              className="mb-8"
            />
          </div>
        </section>

        {/* Trust Badge */}
        <TrustBadgeSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Magnet Popup */}
      <LeadMagnetPopup />
    </div>
  );
};

export default Index;
