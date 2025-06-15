
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import LSIContent from "@/components/lsi-content";
import ResourcesHero from "@/components/resources/resources-hero";
import ResourceCategory from "@/components/resources/resource-category";
import FeaturedGuides from "@/components/resources/featured-guides";
import ResourcesCTA from "@/components/resources/resources-cta";
import { TrendingUp, CreditCard, Bot, Building, BookOpen } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#247EFF]" />,
      title: "Urban Investing Strategies",
      description: "Master hood financial literacy and street smart money moves for building generational wealth",
      topics: [
        "Index Fund Investing for Beginners",
        "Real Estate Investment Trusts (REITs)",
        "Micro-Investing Strategies",
        "Portfolio Diversification Techniques",
        "Risk Management for New Investors"
      ],
      ctaText: "Start Investing Today",
      ctaLink: "/blog"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#247EFF]" />,
      title: "Credit Building Mastery",
      description: "Comprehensive guide to building and repairing credit from scratch",
      topics: [
        "Credit Building from Zero",
        "Secured Credit Card Strategies",
        "Credit Utilization Optimization",
        "Credit Report Dispute Process",
        "Credit Monitoring Best Practices"
      ],
      ctaText: "Fix Your Credit",
      ctaLink: "/blog"
    },
    {
      icon: <Bot className="h-8 w-8 text-[#247EFF]" />,
      title: "AI Side Hustles",
      description: "Profitable artificial intelligence income streams and automation opportunities",
      topics: [
        "AI Content Creation Services",
        "Chatbot Development for SMBs",
        "AI-Powered Social Media Management",
        "Automated Marketing Workflows",
        "AI Image Generation Business"
      ],
      ctaText: "Launch AI Business",
      ctaLink: "/blog"
    },
    {
      icon: <Building className="h-8 w-8 text-[#247EFF]" />,
      title: "Urban Entrepreneurship",
      description: "Street smart business building and startup methodologies for urban markets",
      topics: [
        "Low-Capital Business Ideas",
        "Community-Based Marketing",
        "Urban Market Analysis",
        "Funding Sources for Minority Businesses",
        "Scaling Urban Enterprises"
      ],
      ctaText: "Build Your Business",
      ctaLink: "/blog"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#247EFF]" />,
      title: "Financial Literacy Foundation",
      description: "Essential money management skills and wealth mindset development",
      topics: [
        "Budgeting and Cash Flow Management",
        "Emergency Fund Building",
        "Debt Elimination Strategies",
        "Tax Optimization for Entrepreneurs",
        "Retirement Planning for Self-Employed"
      ],
      ctaText: "Master Money Basics",
      ctaLink: "/blog"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Hood Financial Literacy: Wealth Building Resources"
        description="Master urban investing, AI side hustles, and credit building. Complete guide to generational wealth building for beginners with street-smart money strategies."
        keywords="hood financial literacy, urban investing strategies, street smart money moves, generational wealth building for beginners, AI side hustles, urban entrepreneurship, credit building strategies, wealth creation resources, financial education, business development tools"
        url="/resources"
        type="website"
      />
      
      <LSIContent primaryKeyword="comprehensive business resources" context="business-strategy" />
      <FeaturedSnippets topic="wealth-building" />
      
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <ResourcesHero />

          {/* Resource Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {resourceCategories.map((category, index) => (
              <ResourceCategory
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                topics={category.topics}
                ctaText={category.ctaText}
                ctaLink={category.ctaLink}
              />
            ))}
          </div>

          <FeaturedGuides />
          <ResourcesCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
