import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { CashManagementHero, WhyCashManagementMatters, CashMythsRealities, CashManagementBlueprint, CashManagementActionPlan, RealBuilderWins, CashManagementFAQ, CashManagementCTA } from "@/components/cash-management";

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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CashManagement;