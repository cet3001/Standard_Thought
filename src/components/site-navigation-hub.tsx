
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, TrendingUp, Users } from "lucide-react";

interface NavigationSection {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  keywords: string[];
  clickDepth: number;
}

const navigationSections: NavigationSection[] = [
  {
    title: "Builder Stories",
    description: "Real success stories from entrepreneurs who built generational wealth from nothing",
    href: "/blog",
    icon: BookOpen,
    keywords: ["success stories", "entrepreneurial journeys", "wealth building examples", "business case studies"],
    clickDepth: 1
  },
  {
    title: "Mindset Foundation", 
    description: "Psychological frameworks and mental models for sustainable business success",
    href: "/about",
    icon: Brain,
    keywords: ["growth mindset", "success psychology", "mental resilience", "entrepreneurial mindset"],
    clickDepth: 1
  },
  {
    title: "Success Strategies",
    description: "Proven business methodologies and revenue optimization techniques",
    href: "/sales", 
    icon: TrendingUp,
    keywords: ["business strategies", "revenue optimization", "scaling methods", "growth tactics"],
    clickDepth: 1
  },
  {
    title: "Community Access",
    description: "Join our network of ambitious entrepreneurs building their legacy",
    href: "/auth",
    icon: Users,
    keywords: ["entrepreneur community", "business network", "peer support", "mentorship"],
    clickDepth: 2
  }
];

interface SiteNavigationHubProps {
  showInFooter?: boolean;
  className?: string;
}

const SiteNavigationHub = ({ showInFooter = false, className = "" }: SiteNavigationHubProps) => {
  const sectionsToShow = showInFooter ? navigationSections : navigationSections.slice(0, 3);

  return (
    <div className={`site-navigation-hub ${className}`}>
      {showInFooter ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectionsToShow.map((section) => (
            <div key={section.href} className="space-y-3">
              <Link 
                to={section.href}
                className="flex items-center space-x-2 text-[#247EFF] hover:text-[#0057FF] transition-colors group"
                title={`Explore ${section.keywords.join(", ")}`}
              >
                <section.icon className="h-5 w-5" />
                <span className="font-semibold">{section.title}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
                {section.description}
              </p>
              <div className="text-xs text-[#0A0A0A]/50 dark:text-brand-cream/50">
                Click depth: {section.clickDepth} from homepage
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {sectionsToShow.map((section) => (
            <Link
              key={section.href}
              to={section.href}
              className="flex items-center space-x-3 bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-2xl px-6 py-4 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 transition-all duration-300 group"
              title={`Navigate to ${section.keywords.join(", ")}`}
            >
              <section.icon className="h-6 w-6 text-[#247EFF]" />
              <span className="font-semibold text-[#0A0A0A] dark:text-brand-cream group-hover:text-[#247EFF] transition-colors">
                {section.title}
              </span>
              <ArrowRight className="h-4 w-4 text-[#247EFF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SiteNavigationHub;
