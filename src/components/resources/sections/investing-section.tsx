
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
      iconAlt: "Trending up arrow icon representing investment growth and wealth building strategies",
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
        Start Investing with <span style={{
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}>Zero Dollars</span>
      </HeaderHierarchy>
      
      <ComprehensiveGuideSection {...investingGuide} className="mb-12" />
      
      <QuickStartChecklist
        title="Micro-Investing Launch List"
        description="Your step-by-step plan to start building wealth with $1. Print this list and check off each milestone as you hit it."
        items={investingChecklist}
        downloadTitle="micro-investing-launch-list"
        bgColor="bg-yellow-50/50 dark:bg-yellow-900/20"
        accentColor="border-yellow-500"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
        {investingResources.map((resource, index) => (
          <div key={index}>
            <ResourceCategory
              icon={<resource.icon className="h-8 w-8" aria-label={resource.iconAlt} />}
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
            
            {/* Internal Links */}
            <div className="mt-4 flex flex-wrap gap-3">
              {resource.internalLinks.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.link}
                  className="text-sm bg-gradient-to-r from-accent to-[#FFD700] text-black hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-3 py-2 rounded-lg font-semibold flex items-center gap-1 min-h-[32px] border-0"
                  aria-label={`Navigate to ${link.text}`}
                >
                  {link.text} →
                </a>
              ))}
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

export default InvestingSection;
