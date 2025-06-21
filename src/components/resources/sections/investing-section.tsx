
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import ComprehensiveGuideSection from "@/components/content-structure/comprehensive-guide-section";
import { investingGuide } from "@/components/resources/comprehensive-guides-data";
import ResourceCategory from "@/components/resources/resource-category";
import QuickStartChecklist from "@/components/resources/quick-start-checklist";
import { TrendingUp } from "lucide-react";

interface InvestingSectionProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const InvestingSection = ({ selectedTag, onTagClick }: InvestingSectionProps) => {
  const investingResources = [
    {
      icon: TrendingUp,
      title: "Micro-Investing Mastery",
      description: "Street-smart wealth building using $1-5 investments and fractional shares. No trust fund needed—just consistency and the right moves",
      whoThisIsFor: "Perfect for beginners who think you need thousands to start investing or anyone living check to check",
      topics: [
        "Micro-Investing Apps That Actually Hit Different",
        "Fractional Share Strategy for Expensive Stocks",
        "Round-Up Investing (Turn Spare Change Into Wealth)", 
        "Portfolio Game for Young Money",
        "Compound Interest Moves That Accelerate Everything"
      ],
      ctaText: "Start Investing Today",
      ctaLink: "/free-investing-guide",
      tags: ["Investing", "Beginner", "$1 Start", "Automation", "Wealth Building", "Micro-Investing"],
      featured: "editors-pick" as const,
      internalLinks: [
        { text: "Complete Free Investing Guide", link: "/free-investing-guide" },
        { text: "Read Builder Stories: First $1000 Invested", link: "/blog" },
        { text: "Master the Wealth Building Mindset", link: "/about" }
      ]
    }
  ];

  const investingChecklist = [
    { id: "micro-app", text: "Download Acorns or Stash app and set up account today" },
    { id: "link-account", text: "Link bank account and enable round-up investing" },
    { id: "auto-invest", text: "Set up $10 weekly automatic investment" },
    { id: "portfolio-choice", text: "Choose aggressive growth portfolio (80% stocks, 20% bonds)" },
    { id: "dividend-reinvest", text: "Enable dividend reinvestment for compound growth" },
    { id: "monthly-increase", text: "Schedule monthly check-ins to increase contributions" },
    { id: "emergency-fund", text: "Build $500 emergency fund before increasing investments" },
    { id: "long-term-mindset", text: "Commit to not checking account daily - focus on 5+ year growth" }
  ];

  return (
    <section className="mb-20" aria-labelledby="investing-section">
      <HeaderHierarchy level={2} className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-black" id="investing-section">
        Start Investing with <span className="text-[#247EFF]">Zero Dollars</span>
      </HeaderHierarchy>
      
      <ComprehensiveGuideSection {...investingGuide} className="mb-12" />
      
      <QuickStartChecklist
        title="Micro-Investing Launch List"
        description="Your step-by-step plan to start building wealth with $1. Print this list and check off each milestone as you hit it."
        items={investingChecklist}
        downloadTitle="micro-investing-launch-list"
        bgColor="bg-blue-50/50 dark:bg-blue-900/20"
        accentColor="border-blue-500"
      />
      
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
              tags={resource.tags}
              featured={resource.featured}
              onTagClick={onTagClick}
            />
            
            {/* Who This Is For */}
            <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm font-semibold text-[#247EFF] mb-2">Who This Hits Different For:</p>
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
  );
};

export default InvestingSection;
