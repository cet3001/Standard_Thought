
import Analytics from "@/components/analytics";
import HomepageHero from "@/components/homepage-hero";

import ManifestoSection from "@/components/manifesto-section";
import { NewsletterSection } from "@/components/newsletter-section";
import FeaturedBlogSection from "@/components/homepage/featured-blog-section";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import KeywordOptimization from "@/components/seo/keyword-optimization";
import VoiceSearchOptimization from "@/components/seo/voice-search-optimization";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import FAQSection from "@/components/faq/faq-section";

import LSIContent from "@/components/lsi-content";
import SiteNavigationHub from "@/components/site-navigation-hub";
import SemanticContentEnhancer from "@/components/seo/semantic-content-enhancer";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useAuth } from "@/contexts/AuthContext";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import PerformanceOptimizer from "@/components/performance/performance-optimizer";
import PerformanceTester from "@/components/performance/performance-tester";
import MobilePerformanceGuide from "@/components/performance/mobile-performance-guide";
import AltTextOptimizer from "@/components/seo/alt-text-optimizer";
import HeadingStructureValidator from "@/components/seo/heading-structure-validator";
import ComprehensiveSiteAuditor from "@/components/audit/comprehensive-site-auditor";
import CookieBanner from "@/components/legal/cookie-banner";
import PWAInstaller from "@/components/pwa/pwa-installer";
import FinalAuditChecklist from "@/components/audit/final-audit-checklist";

console.log('Index.tsx: Component loaded');

const Index = () => {
  console.log('Index.tsx: Index component rendering...');
  
  try {
    useMobilePerformance();
    const { isAdmin } = useAuth();
    const { textureImageUrl } = useUrbanTexture();

    console.log('Index.tsx: Hooks initialized successfully');

    const breadcrumbs = [
      { name: "Home", url: "https://www.standardthought.com", position: 1 }
    ];

    const homepageFAQs = [
      {
        question: "So what's this whole urban wealth building thing about?",
        answer: "Look, urban wealth building is about flipping the script on how we think about money. It's not about waiting for handouts or playing by rules that weren't made for us. We're talking about building real generational wealth using street-smart strategies that actually work.\n\nStart with getting your financial education right, then build multiple income streams through AI side hustles, and invest in stuff that grows over time—index funds, real estate, whatever appreciates. Our community breaks it all down step-by-step for first-gen entrepreneurs who are starting from scratch."
      },
      {
        question: "What AI side hustles are actually making people money right now?",
        answer: "Real talk—these AI tools are putting money in people's pockets if you know how to use them:\n\n• Content creation with ChatGPT (blog posts, social media, email campaigns)\n• Graphics and logos with Midjourney (businesses need this stuff constantly)\n• Social media management using automation tools\n• AI-powered copywriting services\n• Image generation for marketing\n\nBeginners are pulling in $500-2000 monthly within 3-6 months. The key is picking one tool, getting really good at it, then scaling up your services."
      },
      {
        question: "How do I build wealth when I'm starting with basically nothing?",
        answer: "Starting from zero? That's where most of us began. Here's the real blueprint:\n\nFirst, get your financial literacy up—understand how money actually works. Then start small: even $25 a week invested consistently builds serious wealth over time through compound interest. Focus on service-based businesses that don't need much startup capital.\n\nLeverage community resources, apply for grants, and reinvest your profits systematically. The secret sauce is turning your hustle into strategy with proven frameworks that actually work for people like us."
      },
      {
        question: "What financial education actually works for people from the hood?",
        answer: "Most financial education is written by people who've never had to choose between paying rent and buying groceries. We need real talk, not corporate jargon.\n\nFocus on practical stuff: budgeting with irregular income, building credit from scratch, micro-investing apps that don't require minimums, and entrepreneurship opportunities you can start today. \n\nAvoid anything that assumes you already have money to invest or family wealth to fall back on. We break it down in language that makes sense and connects to your immediate reality."
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

    console.log('Index.tsx: About to render JSX');

    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Site-wide Urban Background */}
        <div className="fixed inset-0 -z-50" aria-hidden="true">
          {/* AI-Generated or Curated Urban Texture */}
          {textureImageUrl && (
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${textureImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
              }}
            />
          )}
          
          {/* Background gradient overlay - REDUCED for lighter feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 via-slate-700/15 to-slate-900/10"></div>
          
          {/* Content overlay for text readability - CONSISTENT LIGHT GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-brand-cream/85 to-brand-cream/90 dark:from-brand-black/80 dark:via-brand-black/85 dark:to-brand-black/90"></div>
        </div>

        {/* Enhanced SEO with targeted keywords */}
        <SEO
          title="Build Urban Wealth From Nothing | StandardThought"
          description="Join 1000+ first-gen builders mastering AI side hustles, credit repair, and wealth strategies. Break cycles, build legacies."
          keywords="urban wealth building, AI side hustles, financial education for first-gen entrepreneurs, generational wealth building from nothing, street smart money moves, urban entrepreneurship hub, hood financial literacy, first generation wealth builders, AI business ideas for beginners, urban investing strategies"
          url="/"
          type="website"
          breadcrumbs={breadcrumbs}
        />

        {/* Performance Optimizer */}
        <PerformanceOptimizer />
        
        {/* Performance Tester (Dev Only) */}
        <PerformanceTester />
        
        {/* Mobile Performance Guide (Dev Only) */}
        <MobilePerformanceGuide />

        {/* Development Audit Tools */}
        <AltTextOptimizer />
        <HeadingStructureValidator />
        
        {/* Comprehensive Site Auditor */}
        <ComprehensiveSiteAuditor />
        
        {/* Cookie Banner */}
        <CookieBanner />
        
        {/* PWA Installer */}
        <PWAInstaller />
        
        {/* Final Audit Checklist (Dev Only) */}
        <FinalAuditChecklist />

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

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HomepageHero scrollToNewsletter={scrollToNewsletter} />

          {/* Newsletter */}
          <NewsletterSection />

          {/* Featured Blog Section */}
          <FeaturedBlogSection isVisible={true} />

          {/* Manifesto */}
          <section className="py-16">
            <ManifestoSection />
          </section>

          {/* FAQ Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
              <FAQSection
                title="No Dumb Questions—Just Real Answers"
                faqs={homepageFAQs}
                className="mb-8"
              />
            </div>
          </section>

          {/* Navigation Hub */}
          <SiteNavigationHub />

        </main>

        {/* Footer */}
        <Footer />

      </div>
    );
  } catch (error) {
    console.error('Index.tsx: Error in Index component:', error);
    return <div>Error loading homepage. Check console for details.</div>;
  }
};

export default Index;
