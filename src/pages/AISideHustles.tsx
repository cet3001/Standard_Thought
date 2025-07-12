import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import {
  AISideHustlesHero,
  WhyAISideHustlesMatter,
  AISideHustleMyths,
  AISideHustleBlueprint,
  AISideHustleFAQ,
  BuilderWins,
  JoinMovementCTA,
  ActionPlanCTA,
  ComingSoonPlaceholder
} from "@/components/ai-side-hustles";

const AISideHustles = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();

  const breadcrumbs = [{
    name: "Home",
    url: "https://www.standardthought.com",
    position: 1
  }, {
    name: "AI Side Hustles",
    url: "https://www.standardthought.com/ai-side-hustles",
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
        
        {/* REMOVED DUPLICATE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 via-slate-700/15 to-slate-900/10"></div>
        
        {/* Content overlay for text readability - CONSISTENT LIGHT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-brand-cream/85 to-brand-cream/90 dark:from-brand-black/80 dark:via-brand-black/85 dark:to-brand-black/90"></div>
      </div>

      {/* SEO */}
      <SEO 
        title="AI Side Hustles: Make Money with AI Tools | StandardThought" 
        description="Turn AI into income streams. Learn to use ChatGPT, automation tools, and AI apps to build profitable side hustles from your phone." 
        keywords="AI side hustles, make money with AI, AI tools income, automated income, AI business ideas, artificial intelligence money making" 
        url="/ai-side-hustles" 
        type="article" 
        breadcrumbs={breadcrumbs} 
      />

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <AISideHustlesHero />
        <WhyAISideHustlesMatter />
        <AISideHustleMyths />
        <AISideHustleBlueprint />
        <AISideHustleFAQ />
        <BuilderWins />
        <JoinMovementCTA />
        <ActionPlanCTA />
        <ComingSoonPlaceholder />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AISideHustles;