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
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Index = () => {
  useMobilePerformance();
  const { isAdmin } = useAuth();
  const { textureImageUrl } = useUrbanTexture();

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

        {/* FAQ Section with Urban Background */}
        <section className="py-16 relative overflow-hidden">
          {/* Urban Background - Matches other sections */}
          <div className="absolute inset-0" aria-hidden="true">
            {/* AI-Generated or Curated Urban Texture */}
            {textureImageUrl && (
              <div 
                className="absolute inset-0 opacity-30 bg-repeat bg-center"
                style={{
                  backgroundImage: `url(${textureImageUrl})`,
                  backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
                  filter: 'contrast(1.3) brightness(0.7) sepia(0.05)'
                }}
              />
            )}
            
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-30"></div>
            
            {/* Content overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-brand-cream/85 to-brand-cream/90 dark:from-brand-black/80 dark:via-brand-black/85 dark:to-brand-black/90"></div>
          </div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <FAQSection
              title="No Dumb Questions—Just Real Answers"
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
