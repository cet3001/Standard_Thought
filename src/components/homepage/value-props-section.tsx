
import { Link } from "react-router-dom";
import { TrendingUp, Users, Brain, Rocket } from "lucide-react";
import { trackResourceClick } from "@/components/analytics";

interface ValuePropsSectionProps {
  isVisible: boolean;
}

const ValuePropsSection = ({ isVisible }: ValuePropsSectionProps) => {
  const handleLinkClick = (title: string, link: string) => {
    trackResourceClick(title, 'hero_value_prop');
  };

  const valueProps = [
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Financial growth and investment icon" />,
      title: "Street-Smart Investing",
      description: "Master urban investing strategies and build wealth starting with just $1",
      link: "/blog/free-investing-guide",
      linkText: "Start investing today"
    },
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="AI technology and automation icon" />,
      title: "AI Side Hustles",
      description: "Generate $500-5000+ monthly with proven artificial intelligence income streams",
      link: "/blog/ai-side-hustles-guide",
      linkText: "Launch AI business"
    },
    {
      icon: <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Financial education and learning icon" />,
      title: "Hood Financial Literacy",
      description: "Real financial education in language that makes sense, no corporate BS",
      link: "/financial-education-guide",
      linkText: "Master money basics"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Community and support network icon" />,
      title: "Builder Community",
      description: "Connect with first-gen entrepreneurs creating generational wealth",
      link: "/blog",
      linkText: "Read success stories"
    }
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {valueProps.map((prop, index) => (
        <div 
          key={index}
          className={`text-center p-4 sm:p-6 bg-white/70 dark:bg-brand-black/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: `${700 + index * 100}ms` }}
        >
          <div className="mb-3 sm:mb-4 flex justify-center">
            {prop.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-brand-black dark:text-brand-cream group-hover:text-accent transition-colors">
            {prop.title}
          </h3>
          <p className="text-sm sm:text-base text-brand-black/70 dark:text-brand-cream/70 mb-3 sm:mb-4 leading-relaxed">
            {prop.description}
          </p>
          <Link 
            to={prop.link}
            onClick={() => handleLinkClick(prop.title, prop.link)}
            className="inline-block bg-gradient-to-r from-accent to-[#FFD700] text-black hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-3 py-2 rounded-lg font-semibold text-xs sm:text-sm"
          >
            {prop.linkText} →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ValuePropsSection;
