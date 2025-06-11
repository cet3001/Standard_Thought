
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BlogShowcase from "@/components/blog-showcase";
import { NewsletterSection } from "@/components/newsletter-section";
import ManifestoSection from "@/components/manifesto-section";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import SEO from "@/components/seo";
import SitemapGenerator from "@/components/sitemap-generator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Standardthought - Build Your Legacy From Nothing"
        description="Join the movement of entrepreneurs building legacy from nothing. Get frameworks, strategies, and community support to turn your dreams into reality."
        keywords="entrepreneurship, business strategy, legacy building, startup advice, business growth, entrepreneur community, self-made success, business frameworks"
        url="https://standardthought.com"
      />
      <SitemapGenerator />
      <Navigation />
      <HeroSection />
      <BlogShowcase />
      <ManifestoSection />
      <div data-section="newsletter">
        <NewsletterSection />
      </div>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
