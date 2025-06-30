
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import ResourceCategory from "@/components/resources/resource-category";
import QuickStartChecklist from "@/components/resources/quick-start-checklist";
import { DollarSign } from "lucide-react";

interface FoundationSectionProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const FoundationSection = ({ selectedTag, onTagClick }: FoundationSectionProps) => {
  const foundationResources = [
    {
      icon: DollarSign,
      iconAlt: "Dollar sign icon representing cash flow management and financial foundations",
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
      ctaText: "Master Cash Flow",
      ctaLink: "#",
      tags: ["Cash Flow", "Side Hustle", "Beginner", "Automation", "Irregular Income", "Tax Strategy"]
    }
  ];

  const cashFlowChecklist = [
    { id: "income-tracking", text: "Track all income sources for 2 weeks (write everything down)" },
    { id: "bill-calendar", text: "Create a monthly bill calendar with due dates" },
    { id: "separate-accounts", text: "Open separate business checking account if side hustling" },
    { id: "emergency-fund", text: "Start $25/week emergency fund (aim for $500 first)" },
    { id: "auto-bills", text: "Set up automatic payments for fixed bills" },
    { id: "weekly-check-in", text: "Schedule weekly 15-minute money check-ins" },
    { id: "tax-prep", text: "Set aside 25% of side hustle income for taxes" },
    { id: "cash-flow-app", text: "Download budgeting app or use simple spreadsheet" }
  ];

  return (
    <section className="mb-20" aria-labelledby="foundation-section">
      <HeaderHierarchy level={2} className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-black" id="foundation-section">
        Side Hustle <span style={{
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}>Cash Management</span>
      </HeaderHierarchy>
      
      <QuickStartChecklist
        title="Cash Flow Control Checklist"
        description="Master your irregular income with this proven system. Download and check off each step to get your money right."
        items={cashFlowChecklist}
        downloadTitle="cash-flow-control-checklist"
        bgColor="bg-yellow-50/50 dark:bg-yellow-900/20"
        accentColor="border-yellow-500"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
        {foundationResources.map((resource, index) => (
          <div key={index}>
            <ResourceCategory
              icon={<resource.icon className="h-8 w-8" aria-label={resource.iconAlt} />}
              title={resource.title}
              description={resource.description}
              topics={resource.topics}
              ctaText={resource.ctaText}
              ctaLink={resource.ctaLink}
              tags={resource.tags}
              onTagClick={onTagClick}
            />
            
            {/* Who This Is For */}
            <div className="mt-4 p-4 bg-yellow-50/50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm font-semibold mb-2" style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>Who This Hits Different For:</p>
              <p className="text-[#0A0A0A] dark:text-brand-cream">{resource.whoThisIsFor}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationSection;
