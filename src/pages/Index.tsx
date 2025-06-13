
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BlogShowcase from "@/components/blog-showcase";
import { NewsletterSection } from "@/components/newsletter-section";
import ManifestoSection from "@/components/manifesto-section";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import SEO from "@/components/seo";
import SitemapGenerator from "@/components/sitemap-generator";
import LeadMagnetPopup from "@/components/lead-magnet-popup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Standardthought - Build Your Legacy From Nothing"
        description="Urban personal development for builders who started with nothing. Get frameworks, strategies, and community support to turn your dreams into reality through grit and determination."
        keywords="urban personal development, entrepreneurship, build from nothing, legacy building, startup advice, mindset shift, business growth, entrepreneur community, self-made success, business frameworks, hustle mentality, builders community, from the mud"
        url="https://standardthought.com"
        noIndex={false}
      />
      <SitemapGenerator />
      <Navigation />
      <main role="main">
        <HeroSection />
        <BlogShowcase />
        <ManifestoSection />
        <section data-section="newsletter">
          <NewsletterSection />
        </section>
      </main>
      <Footer />
      <FloatingCTA />
      <LeadMagnetPopup />
    </div>
  );
};

export default Index;
