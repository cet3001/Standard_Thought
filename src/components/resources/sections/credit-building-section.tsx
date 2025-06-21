
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import ComprehensiveGuideSection from "@/components/content-structure/comprehensive-guide-section";
import { creditBuildingGuide } from "@/components/resources/comprehensive-guides-data";
import ResourceCategory from "@/components/resources/resource-category";
import { CreditCard } from "lucide-react";

interface CreditBuildingSectionProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const CreditBuildingSection = ({ selectedTag, onTagClick }: CreditBuildingSectionProps) => {
  const creditResources = [
    {
      icon: CreditCard,
      title: "Credit Building Mastery",
      description: "Real blueprint for building credit from zero—no cosigner needed. Secured cards, authorized user game, and rent reporting that actually moves the needle",
      whoThisIsFor: "Built for first-time credit builders with zero history or anyone bouncing back from financial setbacks",
      topics: [
        "Secured Credit Card Game (Start with $200-500)",
        "Authorized User Strategy That Actually Works", 
        "Get Credit for Rent & Utilities (Stop Throwing Money Away)",
        "Credit Dispute Process (Fix Your Report Yourself)",
        "Real Timeline: 0 to 700+ Credit Score Blueprint"
      ],
      ctaText: "Build Credit Now",
      ctaLink: "/blog",
      tags: ["Credit", "Beginner", "$200 Start", "Fast Track", "Zero History", "No Cosigner"],
      featured: "popular" as const,
      internalLinks: [
        { text: "See Builder Stories: Credit Recovery Wins", link: "/blog" },
        { text: "Build the Credit Mindset", link: "/about" }
      ]
    }
  ];

  return (
    <section className="mb-20" aria-labelledby="credit-building-section">
      <HeaderHierarchy level={2} className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-black" id="credit-building-section">
        Build Credit from <span className="text-[#247EFF]">Nothing</span>
      </HeaderHierarchy>
      
      <ComprehensiveGuideSection {...creditBuildingGuide} className="mb-12" />
      
      {/* Quick Start Checklist */}
      <div className="bg-green-50/50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6 mb-12" role="complementary" aria-labelledby="credit-checklist-heading">
        <HeaderHierarchy level={3} className="mb-4 text-green-700 dark:text-green-400" id="credit-checklist-heading">
          Your Week 1 Credit Building Moves
        </HeaderHierarchy>
        <ul className="space-y-2" role="list">
          {creditBuildingGuide.quickStartChecklist.map((item, index) => (
            <li key={index} className="flex items-center gap-3" role="listitem">
              <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
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

export default CreditBuildingSection;
