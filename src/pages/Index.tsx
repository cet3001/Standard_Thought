
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BlogShowcase from "@/components/blog-showcase";
import { NewsletterSection } from "@/components/newsletter-section";
import ManifestoSection from "@/components/manifesto-section";
import TrustBadgeSection from "@/components/trust-badge-section";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import SitemapGenerator from "@/components/sitemap-generator";
import LeadMagnetPopup from "@/components/lead-magnet-popup";
import { usePerformance } from "@/hooks/use-performance";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import FAQSchema from "@/components/seo/faq-schema";

const Index = () => {
  usePerformance();

  const homepageFAQs = [
    {
      question: "How can I start building wealth with no money?",
      answer: "Start with free AI side hustles, credit hacks, and digital income streams. StandardThought breaks it down step-by-step for the culture."
    },
    {
      question: "What are the best AI side hustles in 2025?",
      answer: "Content creation, print-on-demand, and automated digital services—check our free guides to get started with zero up-front bread."
    },
    {
      question: "How do I fix my credit from scratch?",
      answer: "We teach you how to build credit with no cosigner, no family help, and no cap—real talk, real results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Build Legacy From Nothing | Standardthought"
        description="Join 1000+ urban entrepreneurs building generational wealth from scratch. Get proven frameworks, actionable strategies, and community support. No safety net required."
        keywords="urban entrepreneurship, build from nothing, legacy building, startup frameworks, hustle mentality, first generation wealth, entrepreneur community, business growth strategies, mindset shift, self-made success, urban personal development, generational wealth building, business development, wealth creation strategies, entrepreneurial mentorship, success psychology, revenue optimization"
        url="https://www.standardthought.com"
        type="website"
        noIndex={false}
      />
      
      {/* FAQ Schema for homepage */}
      <FAQSchema faqs={homepageFAQs} />
      
      {/* Breadcrumb Schema for homepage navigation */}
      <BreadcrumbSchema />
      
      <SitemapGenerator />
      <Navigation />
      <main role="main" className="pt-24 lg:pt-20">
        <HeroSection />
        <BlogShowcase />
        <ManifestoSection />
        <section data-section="newsletter">
          <NewsletterSection />
        </section>
      </main>
      <TrustBadgeSection />
      <Footer />
      <LeadMagnetPopup />
    </div>
  );
};

export default Index;
