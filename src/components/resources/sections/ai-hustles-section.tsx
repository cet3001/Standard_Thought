import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";
import ResourceCategory from "@/components/resources/resource-category";
import QuickStartChecklist from "@/components/resources/quick-start-checklist";
import { Bot, Building } from "lucide-react";

interface AIHustlesSectionProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const AIHustlesSection = ({ selectedTag, onTagClick }: AIHustlesSectionProps) => {
  const aiResources = [
    {
      icon: Bot,
      title: "AI Side Hustles Blueprint",
      description: "Profitable AI income streams using ChatGPT, Midjourney, and automation tools—zero coding required, maximum bag secured",
      whoThisIsFor: "Built for hustlers ready to leverage AI tools for new income streams without needing tech skills",
      topics: [
        "ChatGPT Content Services That Pay ($25-100/article)",
        "Midjourney Design Business Setup & Client Flow", 
        "Social Media Management Using AI (Scale Fast)",
        "Business Automation Services ($1000-5000/project)",
        "Client Getting & Pricing Game That Actually Works"
      ],
      ctaText: "Launch AI Business",
      ctaLink: "/blog",
      tags: ["AI", "Side Hustle", "No Code", "High Income", "$25-100/hr", "Remote Work"],
      internalLinks: [
        { text: "See Builder Stories: AI Side Hustle Wins", link: "/blog" },
        { text: "Build the Digital Entrepreneur Mindset", link: "/about" }
      ]
    },
    {
      icon: Building,
      title: "Urban Entrepreneurship Toolkit", 
      description: "Community-based business strategies and funding sources built specifically for urban markets and minority entrepreneurs who know the culture",
      whoThisIsFor: "Perfect for aspiring entrepreneurs in urban communities who need culturally relevant business strategies that actually work",
      topics: [
        "Low-Capital Business Ideas That Work in Urban Markets",
        "Community-Based Marketing (Leverage Your Network)",
        "Funding Sources Built for Minority-Owned Businesses",
        "Urban Market Analysis & Opportunity Recognition",
        "Scaling Strategies That Don't Lose Your Community"
      ],
      ctaText: "Build Your Business",
      ctaLink: "/blog",
      tags: ["Business", "Urban", "Community", "Low Capital", "Minority-Owned", "Local Market"],
      internalLinks: [
        { text: "Read Builder Stories: Local Business Success", link: "/blog" },
        { text: "Develop the Entrepreneur Mindset", link: "/about" }
      ]
    }
  ];

  const aiHustleChecklist = [
    { id: "ai-tool-signup", text: "Sign up for ChatGPT Plus or try Midjourney free trial this week" },
    { id: "portfolio-samples", text: "Create 3 sample projects for your portfolio" },
    { id: "freelance-profiles", text: "Set up profiles on Upwork and Fiverr with your samples" },
    { id: "daily-applications", text: "Apply to 5 gigs daily for your first 2 weeks" },
    { id: "first-testimonial", text: "Deliver first project and ask for testimonial" },
    { id: "price-strategy", text: "Start 20-30% below competitors, increase after 5 reviews" },
    { id: "package-deals", text: "Create package deals for repeat clients" },
    { id: "reinvest-profits", text: "Reinvest first $500 into better tools and training" }
  ];

  return (
    <section className="mb-20" aria-labelledby="ai-hustles-section">
      <HeaderHierarchy level={2} className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-black" id="ai-hustles-section">
        AI Side Hustles & <span className="text-[#247EFF]">Securing the Bag</span>
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

      <QuickStartChecklist
        title="AI Side Hustle Launch Plan"
        description="Your complete blueprint to launch a profitable AI side hustle. Save this checklist and track your progress week by week."
        items={aiHustleChecklist}
        downloadTitle="ai-side-hustle-launch-plan"
        bgColor="bg-purple-50/50 dark:bg-purple-900/20"
        accentColor="border-purple-500"
      />
      
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

export default AIHustlesSection;
