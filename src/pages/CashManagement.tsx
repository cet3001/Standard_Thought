import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { CashManagementHero, WhyCashManagementMatters, CashMythsRealities, CashManagementBlueprint, CashManagementActionPlan, RealBuilderWins, CashManagementFAQ, CashManagementCTA } from "@/components/cash-management";
import { generateFAQSchema } from "@/components/seo/schemas";
import OptimizedHeroImage from "@/components/optimized-hero-image";
import heroCashManagement from "@/assets/hero-cash-management.jpg";
import InternalLinkingHub from "@/components/seo/internal-linking-hub";
import AnswerEngineOptimizer from "@/components/seo/answer-engine-optimizer";

const CashManagement = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();

  const breadcrumbs = [{
    name: "Home",
    url: "https://www.standardthought.com",
    position: 1
  }, {
    name: "Cash Management",
    url: "https://www.standardthought.com/cash-management",
    position: 2
  }];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "What if my income changes every week?",
      answer: "We show you how to build a flexible system that works with hustle money, gig work, and side jobs. Instead of traditional budgeting, you'll learn the 'percentage method'—allocating portions of whatever you make that week, whether it's $50 or $500. Plus we'll teach you how to smooth out those income peaks and valleys."
    },
    {
      question: "Can I save if I'm already behind on bills?",
      answer: "Yes—start small, even $1 at a time. The key is building the habit, not the amount. We'll show you the 'bills first, then save' method that ensures you don't fall further behind while still building your financial future. Every dollar you save is a dollar working for you, not against you."
    },
    {
      question: "How do I stop overdrafting?",
      answer: "We break down how to set up alerts, use cash envelopes, and avoid the traps banks set for us. You'll learn the 'buffer system' to keep a small cushion in your account, plus how to time your bill payments so you're never caught off guard. No more $35 fees eating up your money."
    }
  ];

  const faqSchema = generateFAQSchema({ faqs: faqData });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && <div className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed" style={{
        backgroundImage: `url(${textureImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }} />}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO 
        title="Master Your Cash Flow - Cash Management | Real Money Strategies | Standardthought" 
        description="Learn to stack, save, and move smart with proven cash management strategies. Break the paycheck-to-paycheck cycle and build systems that work even when starting with nothing." 
        keywords="cash management, cash flow control, paycheck to paycheck, money management, budgeting, financial systems, cash flow strategies" 
        url="/cash-management" 
        type="article" 
        breadcrumbs={breadcrumbs} 
      />

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 mt-20">
        <CashManagementHero />
        <WhyCashManagementMatters />
        <CashMythsRealities />
        <CashManagementBlueprint />
        <CashManagementActionPlan />
        <RealBuilderWins />
        <CashManagementFAQ />
        <CashManagementCTA />
        
        {/* Answer Engine Optimization */}
        <AnswerEngineOptimizer 
          primaryTopic="cash-management"
          targetQuestions={[
            "How to manage money with irregular income?",
            "What is the best budgeting method for beginners?",
            "How to stop living paycheck to paycheck?",
            "How to save money when you are broke?"
          ]}
        />
        
        {/* Internal Linking for SEO */}
        <InternalLinkingHub currentPage="/cash-management" showPillarsOnly={true} limit={3} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CashManagement;