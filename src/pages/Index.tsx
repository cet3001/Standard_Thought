
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BlogShowcase from "@/components/blog-showcase";
import { NewsletterSection } from "@/components/newsletter-section";
import ManifestoSection from "@/components/manifesto-section";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import SitemapGenerator from "@/components/sitemap-generator";
import LeadMagnetPopup from "@/components/lead-magnet-popup";
import { usePerformance } from "@/hooks/use-performance";

const Index = () => {
  usePerformance();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Standardthought - Build Your Legacy From Nothing"
        description="Join 1000+ urban entrepreneurs building generational wealth from scratch. Get proven frameworks, actionable strategies, and community support to turn your hustle into a legacy business. No safety net required."
        keywords="urban entrepreneurship, build from nothing, legacy building, startup frameworks, hustle mentality, first generation wealth, entrepreneur community, business growth strategies, mindset shift, self-made success, urban personal development, generational wealth building, business development, wealth creation strategies, entrepreneurial mentorship, success psychology, revenue optimization"
        url="https://www.standardthought.com"
        noIndex={false}
      />
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
      <Footer />
      <LeadMagnetPopup />
    </div>
  );
};

export default Index;
