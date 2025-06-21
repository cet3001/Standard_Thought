
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import ResourceCategory from "@/components/resources/resource-category";
import { BookOpen } from "lucide-react";

interface FoundationSectionProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const FoundationSection = ({ selectedTag, onTagClick }: FoundationSectionProps) => {
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
      tags: ["Mindset", "Foundation", "Cash Flow", "Beginner"],
      internalLinks: [
        { text: "See Builder Stories: Financial Turnaround", link: "/blog" },
        { text: "Build Your Money Mindset", link: "/about" }
      ]
    }
  ];

  return (
    <section className="mb-20" aria-labelledby="foundation-section">
      <HeaderHierarchy level={2} className="text-center mb-12" id="foundation-section">
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
              tags={resource.tags}
              onTagClick={onTagClick}
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
  );
};

export default FoundationSection;
