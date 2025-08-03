import { Link } from "react-router-dom";

interface InternalLink {
  title: string;
  url: string;
  description: string;
  keywords: string[];
  pillar: boolean;
}

interface InternalLinkingHubProps {
  currentPage?: string;
  showPillarsOnly?: boolean;
  limit?: number;
}

const InternalLinkingHub = ({ 
  currentPage = '', 
  showPillarsOnly = false, 
  limit = 6 
}: InternalLinkingHubProps) => {
  
  const allLinks: InternalLink[] = [
    // Supporting Pages
    {
      title: "About Our Urban Wealth Building Mission",
      url: "/about",
      description: "Learn about Standard Thought's mission to flip financial narratives",
      keywords: ["about us", "mission", "urban entrepreneurship", "wealth mindset"],
      pillar: false
    },
    {
      title: "Real Money Education Blog",
      url: "/blog", 
      description: "Street-smart financial education and entrepreneurship insights",
      keywords: ["financial education", "blog", "money tips", "entrepreneurship"],
      pillar: false
    }
  ];

  // Filter out current page and apply filters
  const filteredLinks = allLinks
    .filter(link => link.url !== currentPage)
    .filter(link => showPillarsOnly ? link.pillar : true)
    .slice(0, limit);

  if (filteredLinks.length === 0) return null;

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-4 text-black dark:text-brand-cream">
            {showPillarsOnly ? "Core Financial Education" : "Keep Building Your Knowledge"}
          </h2>
          <p className="text-lg text-black dark:text-brand-cream/80 max-w-2xl mx-auto">
            {showPillarsOnly 
              ? "Master these pillars to build unshakeable financial foundations"
              : "Explore more resources to accelerate your wealth-building journey"
            }
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLinks.map((link, index) => (
            <Link
              key={link.url}
              to={link.url}
              className="group relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10 hover:border-[#FFD700]/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Pillar Badge */}
              {link.pillar && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-xs font-black px-3 py-1 rounded-full transform rotate-12">
                  PILLAR
                </div>
              )}
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-bold mb-3 text-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors duration-200">
                  {link.title}
                </h3>
                
                <p className="text-sm text-black/70 dark:text-brand-cream/70 mb-4 leading-relaxed">
                  {link.description}
                </p>
                
                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {link.keywords.slice(0, 3).map((keyword) => (
                    <span 
                      key={keyword}
                      className="text-xs bg-[#FFD700]/20 text-black dark:text-brand-cream px-2 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                {/* Arrow Indicator */}
                <div className="absolute bottom-2 right-2 text-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-sm text-black/60 dark:text-brand-cream/60">
            Building wealth is a journey—each step counts toward your financial freedom
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternalLinkingHub;