import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { generateFAQSchema } from "@/components/seo/schemas";
import OptimizedHeroImage from "@/components/optimized-hero-image";
import heroCreditBuilding from "@/assets/hero-credit-building.jpg";
import InternalLinkingHub from "@/components/seo/internal-linking-hub";
import {
  CreditHero,
  WhyCreditMatters,
  CreditMythsRealities,
  CreditBlueprint,
  CreditActionPlan,
  CreditTestimonials,
  CreditFAQ,
  CreditCTA
} from "@/components/credit";

const Credit = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();

  const breadcrumbs = [{
    name: "Home",
    url: "https://www.standardthought.com",
    position: 1
  }, {
    name: "Credit",
    url: "https://www.standardthought.com/credit",
    position: 2
  }];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "What if I got denied before?",
      answer: "You can always bounce back. We show you how to rebuild, even after setbacks. Every denial is just feedback—use it to come back stronger with the right strategy."
    },
    {
      question: "Can I build credit with no job?",
      answer: "Yes—secured cards and builder loans don't require a big income, just consistency. Even with irregular income, you can start building as long as you can make small, regular payments."
    },
    {
      question: "How long before I see results?",
      answer: "Most see a score jump in 3–6 months if they follow the blueprint. The key is consistent payments and keeping utilization low—patience pays off big time."
    },
    {
      question: "Will checking my credit hurt my score?",
      answer: "Nah, checking your own credit is a 'soft pull' and won't hurt your score at all. You should actually check it regularly to track your progress and catch any errors early."
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
        title="Build Credit from Zero: Complete Guide | StandardThought" 
        description="Build credit without family help or cosigners. Real strategies for fixing your score and unlocking better rates fast." 
        keywords="build credit from nothing, credit building without cosigner, fix credit score, credit for first generation, urban credit building, credit repair strategies, improve credit rating" 
        url="/credit" 
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
        <CreditHero />
        <WhyCreditMatters />
        <CreditMythsRealities />
        <CreditBlueprint />
        <CreditActionPlan />
        <CreditTestimonials />
        <CreditFAQ />
        <CreditCTA />

        {/* Internal Linking for SEO */}
        <InternalLinkingHub currentPage="/credit" showPillarsOnly={true} limit={3} />

        {/* Coming Soon Placeholder */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-300/10 dark:border-gray-700/10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-brand-cream">
                Credit Building Content Coming Soon
              </h2>
              <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed">
                We're putting together the most comprehensive credit building guide for first-gen entrepreneurs. 
                Sign up below to get notified when it drops.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Credit;