
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import ComprehensiveGuideSection from "@/components/content-structure/comprehensive-guide-section";
import { creditBuildingGuide } from "@/components/resources/comprehensive-guides-data";
import ResourceCategory from "@/components/resources/resource-category";
import QuickStartChecklist from "@/components/resources/quick-start-checklist";
import { CreditCard } from "lucide-react";

interface CreditBuildingSectionProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const CreditBuildingSection = ({ selectedTag, onTagClick }: CreditBuildingSectionProps) => {
  const creditResources = [
    {
      icon: CreditCard,
      iconAlt: "Credit card icon representing credit building tools and strategies",
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
      ctaText: "Start Building Credit",
      ctaLink: "/blog",
      tags: ["Credit", "Beginner", "$200 Start", "Fast Track", "Zero History", "No Cosigner"],
      featured: "popular" as const,
      internalLinks: [
        { text: "See Builder Stories: Credit Recovery Wins", link: "/blog" },
        { text: "Build the Credit Mindset", link: "/about" }
      ]
    }
  ];

  const creditBuildingChecklist = [
    { id: "secured-card", text: "Open a secured credit card account this week with $200-500 deposit" },
    { id: "recurring-purchase", text: "Set up one small recurring purchase (Netflix, Spotify, etc.) on the card" },
    { id: "auto-payment", text: "Schedule automatic full payment from your checking account" },
    { id: "experian-boost", text: "Sign up for Experian Boost to report rent/utility payments" },
    { id: "credit-monitoring", text: "Check your credit score in 3 months and track progress monthly" },
    { id: "authorized-user", text: "Ask family member with good credit to add you as authorized user" },
    { id: "credit-report", text: "Get free annual credit report and dispute any errors" },
    { id: "credit-utilization", text: "Keep credit card balance under 10% of credit limit" }
  ];

  return (
    <section className="mb-20" aria-labelledby="credit-building-section">
      <HeaderHierarchy level={2} className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-black" id="credit-building-section">
        Build Credit from <span className="text-[#247EFF]">Nothing</span>
      </HeaderHierarchy>
      
      <ComprehensiveGuideSection {...creditBuildingGuide} className="mb-12" />
      
      <QuickStartChecklist
        title="Credit Building Action Plan"
        description="Your complete roadmap to building credit from zero. Download this checklist and check off each step as you complete it."
        items={creditBuildingChecklist}
        downloadTitle="credit-building-action-plan"
        bgColor="bg-green-50/50 dark:bg-green-900/20"
        accentColor="border-green-500"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
        {creditResources.map((resource, index) => (
          <div key={index}>
            <ResourceCategory
              icon={<resource.icon className="h-8 w-8 text-[#247EFF]" aria-label={resource.iconAlt} />}
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
                  className="text-sm text-[#247EFF] hover:underline flex items-center gap-1 min-h-[32px] px-2 py-1 rounded transition-colors hover:bg-[#247EFF]/10"
                  aria-label={`Navigate to ${link.text}`}
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
