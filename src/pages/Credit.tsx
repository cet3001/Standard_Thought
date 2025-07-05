import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
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
        title="Build Credit From Nothing | Credit Building for First-Gen Entrepreneurs | Standardthought" 
        description="Learn how to build credit from zero without a cosigner. Real strategies for fixing your credit score, unlocking better rates, and making generational progress with street-smart credit building." 
        keywords="build credit from nothing, credit building without cosigner, fix credit score, credit for first generation, urban credit building, credit repair strategies, improve credit rating" 
        url="/credit" 
        type="article" 
        breadcrumbs={breadcrumbs} 
      />

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