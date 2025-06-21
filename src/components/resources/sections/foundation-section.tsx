
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import ResourceCategory from "@/components/resources/resource-category";
import { DollarSign } from "lucide-react";

interface FoundationSectionProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const FoundationSection = ({ selectedTag, onTagClick }: FoundationSectionProps) => {
  const foundationResources = [
    {
      icon: DollarSign,
      title: "Side Hustle Cash Flow System",
      description: "Practical cash management for irregular income streams—track every dollar, automate savings, and never miss a payment again",
      whoThisIsFor: "Perfect for freelancers, gig workers, and side hustlers who struggle with unpredictable income timing",
      topics: [
        "Weekly Cash Flow Tracking (Know Your Numbers)",
        "Automatic Bill Pay Setup for Irregular Income",
        "Emergency Fund Building on $50-100/Month", 
        "Side Hustle Tax Moves That Save You Money",
        "Separate Business & Personal Money (Stop Mixing)"
      ],
      ctaText: "Get Cash Flow Control",
      ctaLink: "/blog",
      tags: ["Cash Flow", "Side Hustle", "Beginner", "Automation", "Irregular Income", "Tax Strategy"],
      internalLinks: [
        { text: "See Builder Stories: Side Hustle Success", link: "/blog" },
        { text: "Master the Hustle Mindset", link: "/about" }
      ]
    }
  ];

  return (
    <section className="mb-20" aria-labelledby="foundation-section">
      <HeaderHierarchy level={2} className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-black" id="foundation-section">
        Side Hustle <span className="text-[#247EFF]">Cash Management</span>
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

export default FoundationSection;
