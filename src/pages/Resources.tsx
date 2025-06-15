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
import ResourcesQASection from "@/components/resources/resources-qa-section";
import UrbanFinanceFAQs from "@/components/faq/urban-finance-faqs";
import ComprehensiveGuideSection from "@/components/content-structure/comprehensive-guide-section";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";
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

  // Snippet-optimized content sections
  const creditBuildingGuide = {
    title: "How to Build Credit from Scratch with No Money",
    summary: "Building credit from zero is possible even without money by using secured credit cards, becoming an authorized user, and reporting alternative payments. This complete guide shows you exactly how to establish and improve your credit score within 6-12 months using proven strategies that require minimal upfront investment.",
    sections: [
      {
        title: "What is Credit Building?",
        definition: "Credit building is the process of establishing a positive credit history to improve your credit score, which determines your ability to qualify for loans, credit cards, and better interest rates.",
        bulletPoints: [
          "Credit scores range from 300-850, with 670+ considered good credit",
          "Payment history accounts for 35% of your credit score",
          "Credit utilization (how much credit you use) makes up 30% of your score",
          "Length of credit history contributes 15% to your overall score",
          "New credit inquiries and credit mix each account for 10% of your score"
        ]
      },
      {
        title: "Step-by-Step Credit Building Process",
        steps: [
          "Apply for a secured credit card with a $200-500 deposit from your bank",
          "Use the card for small purchases like gas or groceries (under 10% of limit)",
          "Pay the full balance before the due date every single month",
          "Keep the account open and active for at least 6-12 months",
          "Consider becoming an authorized user on a family member's established account",
          "Report rent and utility payments through services like Experian Boost or RentTrack",
          "Monitor your credit score monthly using free services like Credit Karma",
          "Apply for an unsecured credit card after 6-12 months of good payment history"
        ]
      }
    ]
  };

  const investingGuide = {
    title: "How to Start Investing with No Money",
    summary: "You can start investing with as little as $1 using micro-investing apps and fractional shares. This guide shows urban entrepreneurs how to begin building wealth through index funds, ETFs, and automated investing strategies that work with any income level.",
    sections: [
      {
        title: "What is Micro-Investing?",
        definition: "Micro-investing allows you to invest small amounts of money (as little as $1) into diversified portfolios using apps that round up your purchases or accept small recurring deposits.",
        bulletPoints: [
          "Start with apps like Acorns, Stash, or Cash App that have no minimum balance",
          "Use round-up features that invest spare change from purchases",
          "Focus on low-cost index funds that track the S&P 500",
          "Automate small weekly or monthly contributions ($5-25)",
          "Reinvest dividends to compound your returns over time"
        ]
      },
      {
        title: "Investment Strategy for Beginners",
        steps: [
          "Download a micro-investing app (Acorns, Stash, or Robinhood)",
          "Start with $5-10 weekly automatic investments",
          "Choose a diversified index fund portfolio (80% stocks, 20% bonds for young investors)",
          "Enable round-up investing to use spare change from purchases",
          "Increase contributions by $5-10 each month as income grows",
          "Don't check your account daily - focus on long-term growth",
          "Add windfalls like tax refunds or bonuses to your investment account",
          "Learn about different investment types as your portfolio grows"
        ]
      }
    ]
  };

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

          {/* Snippet-Optimized Comprehensive Guides */}
          <div className="mb-16">
            <ComprehensiveGuideSection {...creditBuildingGuide} className="mb-16" />
            <ComprehensiveGuideSection {...investingGuide} className="mb-16" />
          </div>

          {/* AI Side Hustles Snippet-Optimized Content */}
          <SnippetOptimizedContent
            title="Best AI Tools for Side Hustles in 2024"
            definition="AI side hustles are income-generating activities that leverage artificial intelligence tools to provide services like content creation, automation, and digital marketing without requiring advanced technical skills."
            summary="Most profitable AI side hustles can generate $500-5000+ monthly by offering content writing, social media management, and business automation services to small businesses and entrepreneurs."
            steps={[
              "Choose one AI tool to master completely (ChatGPT for writing, Midjourney for design)",
              "Create a portfolio with 3-5 sample projects using free trials",
              "Set up business profiles on Upwork, Fiverr, and LinkedIn",
              "Price services 20-30% below competitors initially to build reviews",
              "Deliver exceptional results and ask for testimonials",
              "Gradually increase prices as you gain experience and positive feedback",
              "Scale by offering package deals and retainer services",
              "Reinvest profits into better tools and training"
            ]}
            bulletPoints={[
              "Content writing with ChatGPT: $25-100 per article",
              "Social media management using AI tools: $500-2000 per client monthly",
              "AI-powered graphic design: $50-500 per design",
              "Business automation setup: $1000-5000 per project",
              "AI chatbot development: $2000-10000 per implementation"
            ]}
            className="mb-16"
          />

          {/* New Q&A Section */}
          <ResourcesQASection />

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
          
          {/* Comprehensive FAQ Section */}
          <UrbanFinanceFAQs />
          
          <ResourcesCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
