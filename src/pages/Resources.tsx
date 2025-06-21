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
      description: "Complete blueprint for building credit from zero using secured cards, authorized user strategies, and alternative credit reporting",
      whoThisIsFor: "Perfect for first-time builders with no credit history or anyone recovering from financial setbacks",
      topics: [
        "Secured Credit Card Strategy (with $200-500)",
        "Authorized User Tactics That Actually Work", 
        "Alternative Credit Reporting (Rent/Utilities)",
        "Credit Dispute Process for Beginners",
        "Timeline: 0 to 700+ Credit Score"
      ],
      ctaText: "Build Credit Now",
      ctaLink: "/blog",
      internalLinks: [
        { text: "See Builder Stories: Credit Recovery", link: "/blog" },
        { text: "Learn the Mindset Behind Credit Building", link: "/about" }
      ]
    }
  ];

  // Investing Resources
  const investingResources = [
    {
      icon: TrendingUp,
      title: "Micro-Investing Mastery",
      description: "Street-smart wealth building strategies using $1-5 investments, fractional shares, and automated portfolio growth",
      whoThisIsFor: "Best for beginners who think they need thousands to start investing or anyone living paycheck to paycheck",
      topics: [
        "Micro-Investing Apps That Actually Work",
        "Fractional Share Strategies for Expensive Stocks",
        "Round-Up Investing for Spare Change", 
        "Portfolio Allocation for Young Investors",
        "Compound Interest Acceleration Tactics"
      ],
      ctaText: "Start Investing Today",
      ctaLink: "/blog",
      internalLinks: [
        { text: "Read Builder Stories: First $1000 Invested", link: "/blog" },
        { text: "Master the Wealth Building Mindset", link: "/about" }
      ]
    }
  ];

  // AI & Digital Income Resources
  const aiResources = [
    {
      icon: Bot,
      title: "AI Side Hustles Blueprint",
      description: "Profitable AI income streams using ChatGPT, Midjourney, and automation tools—no coding required",
      whoThisIsFor: "Perfect for hustlers who want to leverage AI tools to create new income streams without technical skills",
      topics: [
        "ChatGPT Content Creation Services ($25-100/article)",
        "Midjourney Design Business Setup", 
        "Social Media Management with AI Tools",
        "Business Automation Services ($1000-5000/project)",
        "Client Acquisition and Pricing Strategies"
      ],
      ctaText: "Launch AI Business",
      ctaLink: "/blog",
      internalLinks: [
        { text: "See Builder Stories: AI Side Hustle Success", link: "/blog" },
        { text: "Learn the Digital Entrepreneur Mindset", link: "/about" }
      ]
    },
    {
      icon: Building,
      title: "Urban Entrepreneurship Toolkit", 
      description: "Community-based business strategies and funding sources specifically designed for urban markets and minority entrepreneurs",
      whoThisIsFor: "Best for aspiring entrepreneurs in urban communities who need culturally relevant business strategies",
      topics: [
        "Low-Capital Business Ideas for Urban Markets",
        "Community-Based Marketing Strategies",
        "Funding Sources for Minority-Owned Businesses",
        "Urban Market Analysis and Opportunity Identification",
        "Scaling Strategies for Local Enterprises"
      ],
      ctaText: "Build Your Business",
      ctaLink: "/blog",
      internalLinks: [
        { text: "Read Builder Stories: Local Business Success", link: "/blog" },
        { text: "Develop the Entrepreneur Mindset", link: "/about" }
      ]
    }
  ];

  // Financial Literacy Resources
  const foundationResources = [
    {
      icon: BookOpen,
      title: "Money Management Foundation",
      description: "Essential cash flow management and wealth mindset development for entrepreneurs and side hustlers",
      whoThisIsFor: "Perfect for anyone who needs to master basic money management before building wealth",
      topics: [
        "Cash Flow Management for Irregular Income",
        "Emergency Fund Building on a Tight Budget",
        "Debt Elimination Without Sacrificing Growth",
        "Tax Strategies for Side Hustlers", 
        "Retirement Planning for the Self-Employed"
      ],
      ctaText: "Master Money Basics",
      ctaLink: "/blog",
      internalLinks: [
        { text: "See Builder Stories: Financial Turnaround", link: "/blog" },
        { text: "Build Your Money Mindset", link: "/about" }
      ]
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
            
            {/* Quick Start Checklist */}
            <div className="bg-green-50/50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6 mb-12">
              <HeaderHierarchy level={3} className="mb-4 text-green-700 dark:text-green-400">
                Quick Start Checklist: Build Credit This Week
              </HeaderHierarchy>
              <ul className="space-y-2">
                {creditBuildingGuide.quickStartChecklist.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[#0A0A0A] dark:text-brand-cream">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
              {creditResources.map((resource, index) => (
                <div key={index}>
                  <ResourceCategory
                    icon={<resource.icon className="h-8 w-8 text-[#247EFF]" />}
                    title={resource.title}
                    description={resource.description}
                    topics={resource.topics}
                    ctaText={resource.ctaText}
                    ctaLink={resource.ctaLink}
                  />
                  
                  {/* Who This Is For */}
                  <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm font-semibold text-[#247EFF] mb-2">Who This Is For:</p>
                    <p className="text-[#0A0A0A] dark:text-brand-cream">{resource.whoThisIsFor}</p>
                  </div>
                  
                  {/* Internal Links */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {resource.internalLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.link}
                        className="text-sm text-[#247EFF] hover:underline flex items-center gap-1"
                      >
                        {link.text} →
                      </a>
                    ))}
                  </div>
                </div>
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
            
            {/* Quick Start Checklist */}
            <div className="bg-green-50/50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6 mb-12">
              <HeaderHierarchy level={3} className="mb-4 text-green-700 dark:text-green-400">
                Quick Start Checklist: Start Investing Today
              </HeaderHierarchy>
              <ul className="space-y-2">
                {investingGuide.quickStartChecklist.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[#0A0A0A] dark:text-brand-cream">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
              {investingResources.map((resource, index) => (
                <div key={index}>
                  <ResourceCategory
                    icon={<resource.icon className="h-8 w-8 text-[#247EFF]" />}
                    title={resource.title}
                    description={resource.description}
                    topics={resource.topics}
                    ctaText={resource.ctaText}
                    ctaLink={resource.ctaLink}
                  />
                  
                  {/* Who This Is For */}
                  <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm font-semibold text-[#247EFF] mb-2">Who This Is For:</p>
                    <p className="text-[#0A0A0A] dark:text-brand-cream">{resource.whoThisIsFor}</p>
                  </div>
                  
                  {/* Internal Links */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {resource.internalLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.link}
                        className="text-sm text-[#247EFF] hover:underline flex items-center gap-1"
                      >
                        {link.text} →
                      </a>
                    ))}
                  </div>
                </div>
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

            {/* Quick Start Checklist for AI Side Hustles */}
            <div className="bg-green-50/50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6 mb-12">
              <HeaderHierarchy level={3} className="mb-4 text-green-700 dark:text-green-400">
                Quick Start Checklist: Launch Your AI Side Hustle
              </HeaderHierarchy>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[#0A0A0A] dark:text-brand-cream">Sign up for ChatGPT Plus or try Midjourney free trial this week</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[#0A0A0A] dark:text-brand-cream">Create 3 sample projects for your portfolio</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[#0A0A0A] dark:text-brand-cream">Set up profiles on Upwork and Fiverr with your samples</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[#0A0A0A] dark:text-brand-cream">Apply to 5 gigs daily for your first 2 weeks</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[#0A0A0A] dark:text-brand-cream">Deliver first project and ask for testimonial</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {aiResources.map((resource, index) => (
                <div key={index}>
                  <ResourceCategory
                    icon={<resource.icon className="h-8 w-8 text-[#247EFF]" />}
                    title={resource.title}
                    description={resource.description}
                    topics={resource.topics}
                    ctaText={resource.ctaText}
                    ctaLink={resource.ctaLink}
                  />
                  
                  {/* Who This Is For */}
                  <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm font-semibold text-[#247EFF] mb-2">Who This Is For:</p>
                    <p className="text-[#0A0A0A] dark:text-brand-cream">{resource.whoThisIsFor}</p>
                  </div>
                  
                  {/* Internal Links */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {resource.internalLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.link}
                        className="text-sm text-[#247EFF] hover:underline flex items-center gap-1"
                      >
                        {link.text} →
                      </a>
                    ))}
                  </div>
                </div>
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
                <div key={index}>
                  <ResourceCategory
                    icon={<resource.icon className="h-8 w-8 text-[#247EFF]" />}
                    title={resource.title}
                    description={resource.description}
                    topics={resource.topics}
                    ctaText={resource.ctaText}
                    ctaLink={resource.ctaLink}
                  />
                  
                  {/* Who This Is For */}
                  <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm font-semibold text-[#247EFF] mb-2">Who This Is For:</p>
                    <p className="text-[#0A0A0A] dark:text-brand-cream">{resource.whoThisIsFor}</p>
                  </div>
                  
                  {/* Internal Links */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {resource.internalLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.link}
                        className="text-sm text-[#247EFF] hover:underline flex items-center gap-1"
                      >
                        {link.text} →
                      </a>
                    ))}
                  </div>
                </div>
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
