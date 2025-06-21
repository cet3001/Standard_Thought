
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import LSIContent from "@/components/lsi-content";
import ResourcesHero from "@/components/resources/resources-hero";
import ResourcesCTA from "@/components/resources/resources-cta";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";
import ComprehensiveGuideSection from "@/components/content-structure/comprehensive-guide-section";
import { creditBuildingGuide, investingGuide } from "@/components/resources/comprehensive-guides-data";
import ResourceCategory from "@/components/resources/resource-category";
import { CreditCard, TrendingUp, Bot, BookOpen, Building } from "lucide-react";
import FAQSection from "@/components/faq/faq-section";

const Resources = () => {
  // Credit Building Resources
  const creditResources = [
    {
      icon: CreditCard,
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
    }
  ];

  // Investing Resources
  const investingResources = [
    {
      icon: TrendingUp,
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
    }
  ];

  // AI & Digital Income Resources
  const aiResources = [
    {
      icon: Bot,
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
      icon: Building,
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
    }
  ];

  // Financial Literacy Resources
  const foundationResources = [
    {
      icon: BookOpen,
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

  // FAQs organized by section
  const creditFAQs = [
    {
      question: "How do I build credit from absolutely nothing?",
      answer: "Building credit from scratch when the system feels rigged against you:\n\n• Get a secured credit card with a $200-500 deposit\n• Use it for small purchases you already make (gas, groceries)\n• Pay the full balance before the due date every single month\n• Keep your usage under 10% of your limit\n• Ask family if you can be an authorized user on their account\n• Report rent payments through services like RentTrack\n\nYou can see your credit score improve within 3-6 months with consistent payment behavior."
    },
    {
      question: "What's the fastest way to level up my credit score by 100 points?",
      answer: "To level up your credit score by 100 points, focus on these moves:\n\n• Pay down credit card balances to under 10% of your limits\n• Pay every bill on time for 6+ months straight\n• Dispute any errors on your credit report (check annualcreditreport.com)\n• Don't close old credit accounts (keep that credit history)\n• Consider a credit builder loan from a credit union\n• Ask for credit limit increases on cards you already have\n\nTypically takes 6-12 months for major improvements, but some people see 100+ point increases within this timeframe with aggressive debt paydown."
    }
  ];

  const investingFAQs = [
    {
      question: "How to start investing with no money?",
      answer: "You can start investing with as little as $1 using micro-investing apps and fractional shares. Here's your step-by-step approach:\n\n1. Download apps like Acorns, Stash, or Cash App\n2. Start with spare change round-ups from purchases\n3. Invest $5-25 weekly in low-cost index funds\n4. Focus on S&P 500 index funds for beginners\n5. Increase contributions as your income grows\n\nThe key is consistency - investing small amounts regularly beats waiting to invest larger sums later."
    },
    {
      question: "How much money do I really need to start building generational wealth?",
      answer: "You can start building generational wealth with as little as $25-50 per month. Here's the real breakdown:\n\n• Start with whatever amount you can consistently invest\n• Build an emergency fund first ($500-1000 to start)\n• Automate small investments ($25-100 monthly)\n• Increase contributions as your income grows\n• Focus on high-yield savings and index funds first\n\nWealth building is about consistency over time, not how much you start with. Someone investing $50 monthly for 30 years can build serious wealth through the power of compound interest."
    }
  ];

  const aiHustleFAQs = [
    {
      question: "What AI tools can help me start securing the bag in 2024?",
      answer: "Here are the AI tools that are actually making people money right now:\n\n• ChatGPT - Content writing, copywriting, social media management\n• Midjourney - Custom graphics, logos, marketing materials for businesses\n• Jasper - Marketing copy, email campaigns, blog content\n• Make.com - Workflow automation for small businesses\n• Claude - Business analysis, strategy development\n• Canva AI - Quick graphic design for social media\n\nFocus on tools that solve real problems for businesses. Content creation and automation services are where the money is."
    },
    {
      question: "How much can I realistically make with AI side hustles?",
      answer: "AI side hustle income depends on how much work you put in and how good you get:\n\n• Beginners: $500-2,000 monthly within 3-6 months of consistent work\n• Intermediate: $2,000-5,000 monthly with established clients\n• Advanced: $5,000-15,000+ monthly with scaled operations\n\nMost profitable AI services:\n• Content writing: $25-100 per article\n• Social media management: $500-2000 per client monthly\n• AI automation setup: $1000-5000 per project\n• Graphic design: $50-500 per design\n\nSuccess comes from finding your niche, building a solid portfolio, and consistently getting new clients."
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
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <ResourcesHero />

          {/* SECTION 1: BUILD CREDIT FROM SCRATCH */}
          <section className="mb-20">
            <HeaderHierarchy level={2} className="text-center mb-12">
              Build Credit from <span className="text-[#247EFF]">Scratch</span>
            </HeaderHierarchy>
            
            <ComprehensiveGuideSection {...creditBuildingGuide} className="mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
              {creditResources.map((resource, index) => (
                <ResourceCategory
                  key={index}
                  icon={<resource.icon className="h-8 w-8 text-[#247EFF]" />}
                  title={resource.title}
                  description={resource.description}
                  topics={resource.topics}
                  ctaText={resource.ctaText}
                  ctaLink={resource.ctaLink}
                />
              ))}
            </div>

            <FAQSection 
              title="Credit Building FAQs"
              faqs={creditFAQs}
              className="mb-8"
            />
          </section>

          {/* SECTION 2: INVESTING WITH NO MONEY */}
          <section className="mb-20">
            <HeaderHierarchy level={2} className="text-center mb-12">
              Investing with <span className="text-[#247EFF]">No Money</span>
            </HeaderHierarchy>
            
            <ComprehensiveGuideSection {...investingGuide} className="mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
              {investingResources.map((resource, index) => (
                <ResourceCategory
                  key={index}
                  icon={<resource.icon className="h-8 w-8 text-[#247EFF]" />}
                  title={resource.title}
                  description={resource.description}
                  topics={resource.topics}
                  ctaText={resource.ctaText}
                  ctaLink={resource.ctaLink}
                />
              ))}
            </div>

            <FAQSection 
              title="Investing & Wealth Building FAQs"
              faqs={investingFAQs}
              className="mb-8"
            />
          </section>

          {/* SECTION 3: AI SIDE HUSTLES & DIGITAL INCOME */}
          <section className="mb-20">
            <HeaderHierarchy level={2} className="text-center mb-12">
              AI Side Hustles & <span className="text-[#247EFF]">Digital Income</span>
            </HeaderHierarchy>

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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {aiResources.map((resource, index) => (
                <ResourceCategory
                  key={index}
                  icon={<resource.icon className="h-8 w-8 text-[#247EFF]" />}
                  title={resource.title}
                  description={resource.description}
                  topics={resource.topics}
                  ctaText={resource.ctaText}
                  ctaLink={resource.ctaLink}
                />
              ))}
            </div>

            <FAQSection 
              title="AI Side Hustles & Digital Income FAQs"
              faqs={aiHustleFAQs}
              className="mb-8"
            />
          </section>

          {/* SECTION 4: FINANCIAL LITERACY FOUNDATION */}
          <section className="mb-20">
            <HeaderHierarchy level={2} className="text-center mb-12">
              Financial Literacy <span className="text-[#247EFF]">Foundation</span>
            </HeaderHierarchy>
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
              {foundationResources.map((resource, index) => (
                <ResourceCategory
                  key={index}
                  icon={<resource.icon className="h-8 w-8 text-[#247EFF]" />}
                  title={resource.title}
                  description={resource.description}
                  topics={resource.topics}
                  ctaText={resource.ctaText}
                  ctaLink={resource.ctaLink}
                />
              ))}
            </div>
          </section>
          
          <ResourcesCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
