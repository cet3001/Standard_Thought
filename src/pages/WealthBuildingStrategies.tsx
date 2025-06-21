
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";
import WealthBuildingPillar from "@/components/blog/pillar-pages/wealth-building-pillar";

const WealthBuildingStrategies = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Wealth Building", url: "https://www.standardthought.com/wealth-building-strategies", position: 2 }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Urban Wealth Building Strategies: From Survival Mode to Generational Wealth | Standardthought"
        description="Break free from paycheck-to-paycheck living with proven urban wealth building strategies. Learn asset creation, investment frameworks, and financial systems designed for first-gen entrepreneurs starting from nothing."
        keywords="urban wealth building strategies, survival mode to wealth mode, build assets from nothing, paycheck to paycheck solutions, financial freedom for first-gen entrepreneurs, generational wealth building guide, street smart investing, urban asset creation"
        url="/wealth-building-strategies"
        type="article"
        breadcrumbs={breadcrumbs}
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
