
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import ComprehensiveGuideSection from "@/components/content-structure/comprehensive-guide-section";
import { investingGuide } from "@/components/resources/comprehensive-guides-data";
import ResourceCategory from "@/components/resources/resource-category";
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
      ctaLink: "/blog",
      tags: ["Investing", "Beginner", "$1 Start", "Automation", "Wealth Building", "Micro-Investing"],
      featured: "editors-pick" as const,
      internalLinks: [
        { text: "Read Builder Stories: First $1000 Invested", link: "/blog" },
        { text: "Master the Wealth Building Mindset", link: "/about" }
      ]
    }
  ];

  return (
    <section className="mb-20" aria-labelledby="investing-section">
      <HeaderHierarchy level={2} className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-black" id="investing-section">
        Start Investing with <span className="text-[#247EFF]">Zero Dollars</span>
      </HeaderHierarchy>
      
      <ComprehensiveGuideSection {...investingGuide} className="mb-12" />
      
      {/* Quick Start Checklist */}
      <div className="bg-green-50/50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6 mb-12" role="complementary" aria-labelledby="investing-checklist-heading">
        <HeaderHierarchy level={3} className="mb-4 text-green-700 dark:text-green-400" id="investing-checklist-heading">
          Your First Investment Moves This Week
        </HeaderHierarchy>
        <ul className="space-y-2" role="list">
          {investingGuide.quickStartChecklist.map((item, index) => (
            <li key={index} className="flex items-center gap-3" role="listitem">
              <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
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
