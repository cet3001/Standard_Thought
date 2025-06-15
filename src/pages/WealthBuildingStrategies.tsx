
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";
import WealthBuildingPillar from "@/components/blog/pillar-pages/wealth-building-pillar";

const WealthBuildingStrategies = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="From Survival Mode to Wealth Mode: Complete Guide to Building Assets"
        description="Break free from living paycheck to paycheck. Learn proven wealth-building strategies, asset creation, and financial systems that work for you—not against you."
        keywords="wealth building strategies, survival mode to wealth mode, build assets from nothing, paycheck to paycheck solutions, financial freedom guide, wealth creation mindset"
        url="/wealth-building-strategies"
        type="article"
      />
      
      <Navigation />
      
      <div className="pt-24">
        <BreadcrumbNavigation />
      </div>
      
      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <WealthBuildingPillar />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WealthBuildingStrategies;
