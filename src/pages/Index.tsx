import Analytics from "@/components/analytics";
import HomepageHero from "@/components/homepage-hero";
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
import BlogShowcase from "@/components/blog-showcase";
import LSIContent from "@/components/lsi-content";
import SiteNavigationHub from "@/components/site-navigation-hub";
import SemanticContentEnhancer from "@/components/seo/semantic-content-enhancer";
import AddSamplePosts from "@/components/admin/add-sample-posts";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  useMobilePerformance();
  const { isAdmin } = useAuth();

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
      <LSIContent primaryKeyword="entrepreneurship" context="entrepreneurship" />
      <SemanticContentEnhancer
        primaryKeyword="urban entrepreneurship and generational wealth building for beginners"
        context="entrepreneurship"
        voiceSearchTopic="wealth-building"
      />
      <KeywordOptimization primaryKeyword="urban wealth building" context="entrepreneurship" />
      <VoiceSearchOptimization topic="wealth-building" />
      <FeaturedSnippets topic="wealth-building" />

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header */}
      <Navigation />

      {/* Admin Controls */}
      {isAdmin && (
        <div className="fixed top-20 right-4 z-50 bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm p-4 rounded-xl border border-[#247EFF]/20 shadow-lg">
          <AddSamplePosts />
        </div>
      )}

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HomepageHero scrollToNewsletter={scrollToNewsletter} />

        {/* Newsletter */}
        <section className="bg-gradient-to-b from-white to-brand-cream/80 dark:from-brand-black/90 dark:to-brand-black py-16">
          <NewsletterSection />
        </section>

        {/* Featured Blog Stories Section */}
        <section className="bg-brand-cream/50 dark:bg-brand-black/50 py-16">
          <BlogShowcase />
        </section>

        {/* Manifesto */}
        <section className="bg-gradient-to-b from-brand-cream/80 to-white dark:from-brand-black/50 dark:to-brand-black/90 py-16">
          <ManifestoSection />
        </section>

        {/* FAQ Section with Schema */}
        <section className="py-16 bg-white/80 dark:bg-brand-black/80">
          <div className="container mx-auto px-6 max-w-4xl">
            <FAQSection
              title="Frequently Asked Questions About Urban Wealth Building"
              faqs={homepageFAQs}
              className="mb-8"
            />
          </div>
        </section>

        {/* Navigation Hub - moved below FAQ */}
        <section className="bg-brand-cream dark:bg-brand-black">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <SiteNavigationHub />
            </div>
          </div>
        </section>

        {/* Trust Badge */}
        <section className="bg-gradient-to-b from-white to-brand-cream dark:from-brand-black/90 dark:to-brand-black py-16">
          <TrustBadgeSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Magnet Popup */}
      <LeadMagnetPopup />
    </div>
  );
};

export default Index;
