
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";
import ResourceCategory from "@/components/resources/resource-category";
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
      tags: ["AI", "Side Hustle", "No Code", "High Income"],
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
      tags: ["Business", "Urban", "Community", "Low Capital"],
      internalLinks: [
        { text: "Read Builder Stories: Local Business Success", link: "/blog" },
        { text: "Develop the Entrepreneur Mindset", link: "/about" }
      ]
    }
  ];

  return (
    <section className="mb-20" aria-labelledby="ai-hustles-section">
      <HeaderHierarchy level={2} className="text-center mb-12" id="ai-hustles-section">
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
      <div className="bg-green-50/50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6 mb-12" role="complementary" aria-labelledby="ai-checklist-heading">
        <HeaderHierarchy level={3} className="mb-4 text-green-700 dark:text-green-400" id="ai-checklist-heading">
          Quick Start Checklist: Launch Your AI Side Hustle
        </HeaderHierarchy>
        <ul className="space-y-2" role="list">
          <li className="flex items-center gap-3" role="listitem">
            <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
            <span className="text-[#0A0A0A] dark:text-brand-cream">Sign up for ChatGPT Plus or try Midjourney free trial this week</span>
          </li>
          <li className="flex items-center gap-3" role="listitem">
            <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
            <span className="text-[#0A0A0A] dark:text-brand-cream">Create 3 sample projects for your portfolio</span>
          </li>
          <li className="flex items-center gap-3" role="listitem">
            <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
            <span className="text-[#0A0A0A] dark:text-brand-cream">Set up profiles on Upwork and Fiverr with your samples</span>
          </li>
          <li className="flex items-center gap-3" role="listitem">
            <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
            <span className="text-[#0A0A0A] dark:text-brand-cream">Apply to 5 gigs daily for your first 2 weeks</span>
          </li>
          <li className="flex items-center gap-3" role="listitem">
            <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
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

export default AIHustlesSection;
