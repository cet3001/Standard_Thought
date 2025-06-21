
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";
import FinancialEducationPillar from "@/components/blog/pillar-pages/financial-education-pillar";

const FinancialEducationGuide = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Financial Education", url: "https://www.standardthought.com/financial-education-guide", position: 2 }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Street-Smart Financial Education: Hood Financial Literacy That Actually Works | Standardthought"
        description="Learn financial literacy in real language that makes sense. No corporate jargon—just proven strategies for investing, budgeting, credit building, and wealth creation designed for first-gen entrepreneurs."
        keywords="hood financial literacy, street smart financial education, financial literacy for first-gen entrepreneurs, urban financial education guide, real talk financial advice, accessible money management, financial education for beginners"
        url="/financial-education-guide"
        type="article"
        breadcrumbs={breadcrumbs}
      />
      
      <Navigation />
      
      <div className="pt-24">
        <BreadcrumbNavigation />
      </div>
      
      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <FinancialEducationPillar />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FinancialEducationGuide;
