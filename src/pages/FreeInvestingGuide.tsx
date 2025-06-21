
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import FreeInvestingPillar from "@/components/blog/pillar-pages/free-investing-pillar";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";

const FreeInvestingGuide = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Free Investing Guide", url: "https://www.standardthought.com/blog/free-investing-guide", position: 2 }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Free Ways to Start Investing: Complete Urban Investing Guide for First-Gen Wealth Builders | Standardthought"
        description="Start building generational wealth with $1. Complete guide to micro-investing apps, free investment strategies, and urban investing approaches for first-gen entrepreneurs with limited capital."
        keywords="free ways to start investing, micro investing apps for beginners, how to start investing with no money, urban investing strategies, beginner investing guide, acorns stash robinhood, investment apps for first-gen entrepreneurs"
        url="/blog/free-investing-guide"
        type="article"
        breadcrumbs={breadcrumbs}
      />
      
      <Navigation />
      
      <div className="pt-24">
        <BreadcrumbNavigation />
      </div>
      
      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <FreeInvestingPillar />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FreeInvestingGuide;
