
import { useState, useEffect } from "react";
import Analytics from "@/components/analytics";
import HomepageHero from "@/components/homepage-hero";
import { supabase } from "@/integrations/supabase/client";

import ManifestoSection from "@/components/manifesto-section";
import { NewsletterSection } from "@/components/newsletter-section";
import FeaturedBlogSection from "@/components/home/FeatureStories";

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
  
  const [heroData, setHeroData] = useState({
    headline: "Break Cycles. Build Legacy. Define Your Truth.",
    subheadline: "You weren't handed blueprints. You inherited burdens. Now it's time to flip the script—rebuild identity, stack wealth, and transcend survival thinking."
  });
  
  const [featuresData, setFeaturesData] = useState([]);
  
  useEffect(() => {
    // Since landing_page_content table doesn't exist yet, we'll use default data
    // This structure is ready for when the table is created
    console.log('Using default landing page content');
  }, []);
  
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
        question: "What if I've never seen anyone in my family with money—where do I even start?",
        answer: "Real talk—being the first in your family to build wealth is heavy, but that's exactly why you're here. You start by understanding that wealth isn't just about money, it's about changing the whole trajectory of your bloodline.\n\nBegin with financial literacy that actually makes sense for your situation. Learn how compound interest works, understand credit, and start small—even $10 a week can turn into serious money over time. Find mentors who came from where you're from, not just people who inherited their knowledge.\n\nThe hardest part is breaking the mental barriers. Your family might not understand what you're doing, but that doesn't mean you're doing it wrong. You're building the foundation for everyone who comes after you."
      },
      {
        question: "Is AI legit or just another scam for broke folks?",
        answer: "Look, there's a lot of AI hype out there, but the real ones are already making money. The difference is knowing which opportunities are solid and which ones are just selling dreams.\n\nLegit AI money is in: content creation (blogs, social media, emails), graphic design, social media management, copywriting, and image generation. People are pulling $500-2000 monthly within 3-6 months just using tools like ChatGPT and Midjourney.\n\nThe scams usually promise 'get rich quick' or require you to pay upfront for 'secrets.' Real AI opportunities let you start for free or cheap, learn the tool, then charge clients for your skills. If someone's asking for money before showing you how to make money, walk away."
      },
      {
        question: "I don't trust banks or credit—can I still build wealth?",
        answer: "I get it—banks haven't exactly been our friends historically. But here's the real: you can't build generational wealth stuffing cash under mattresses or staying completely outside the system.\n\nStart small and strategic. Use credit unions instead of big banks—they're community-owned and usually more fair. Build credit slowly with secured cards or becoming an authorized user. You need good credit for business loans, mortgages, and better interest rates.\n\nFor wealth building beyond banks: invest in index funds, start a business, buy real estate, or invest in yourself through education and skills. The key is diversifying so you're not dependent on any one system. But completely avoiding financial institutions will limit your growth in the long run."
      },
      {
        question: "Why does grind culture feel like another form of slavery?",
        answer: "Because most grind culture IS just modern slavery with better marketing. Working 80 hours a week to make someone else rich while burning yourself out isn't wealth building—it's exploitation.\n\nReal wealth building is about working smarter, not harder. It's about building systems that make money while you sleep, creating value that scales, and investing in assets that appreciate over time. The goal is to own your time, not sell every hour of it.\n\nThe 'hustle harder' mentality keeps you trapped in the same cycle that's kept our communities broke for generations. Instead, focus on strategic moves: building skills that command higher pay, creating passive income streams, and investing in assets. Work with purpose, not just for the sake of staying busy."
      },
      {
        question: "How do I stop passing survival mindsets to my kids?",
        answer: "First, recognize that survival mindsets served a purpose—they kept your family alive during hard times. But now you're building different times for your kids, so they need different tools.\n\nStart by changing how you talk about money around them. Instead of 'we can't afford it,' try 'that's not in our budget right now' or 'we're choosing to spend our money differently.' Teach them that money is a tool, not something to fear or worship.\n\nShow them abundance thinking in action: save for goals, invest small amounts, celebrate financial wins. Let them see you learning about money, reading financial books, making strategic decisions. Kids absorb everything—make sure they're absorbing wealth-building energy, not scarcity energy.\n\nMost importantly, heal your own money trauma. If you're still operating from fear and lack, they'll pick that up no matter what you say. Your healing becomes their foundation."
      },
      {
        question: "Is healing a strategy too—or just self-care talk?",
        answer: "Healing IS strategy. The deepest wealth blocks aren't about not knowing what to do—they're about the trauma that keeps you from doing what you know.\n\nMoney trauma shows up as self-sabotage: making good money then blowing it, getting close to success then backing away, feeling guilty about having more than your family. You can have all the financial knowledge in the world, but if your nervous system is still programmed for survival, you'll stay broke.\n\nReal healing for wealth builders looks like: therapy or coaching specifically around money trauma, shadow work on your relationship with success, healing your relationship with your ancestors' financial struggles, and learning to hold abundance without guilt.\n\nThis isn't just feel-good stuff—unhealed money trauma is why lottery winners go broke and why some people can't seem to break certain income levels no matter what they try. Heal the root, change the fruit."
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
          
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
          
          {/* Content overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
        </div>

        {/* Enhanced Dynamic SEO */}
        <SEO
          pageType="homepage"
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
          <HomepageHero 
            scrollToNewsletter={scrollToNewsletter} 
            heroContent={heroData}
          />

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
