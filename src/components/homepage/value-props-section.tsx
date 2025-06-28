
import { Link } from "react-router-dom";
import { TrendingUp, CreditCard } from "lucide-react";
import { trackResourceClick } from "@/lib/analytics-utils";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";

interface ValuePropsSectionProps {
  isVisible: boolean;
}

const ValuePropsSection = ({ isVisible }: ValuePropsSectionProps) => {
  const handleLinkClick = (title: string, link: string) => {
    trackResourceClick(title, 'hero_value_prop');
  };

  const valueProps = [
    {
      icon: <TrendingUp className="h-12 w-12 text-[#247EFF]" aria-label="Financial growth and investment icon" />,
      title: "Start Small, Stack Fast",
      description: "Turn $1 into $100, then $1000. Master micro-investing and AI side hustles that actually pay.",
      link: "/start-investing-guide"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-[#247EFF]" aria-label="Credit building and financial power icon" />,
      title: "Build Credit, Build Power",
      description: "Fix your credit score, stack business credit, and unlock funding for your next move.",
      link: "/financial-education-guide"
    }
  ];

  return (
    <div className="mb-12 sm:mb-16 relative">
      <HeaderHierarchy 
        level={2} 
        className={`text-center mb-8 sm:mb-12 text-brand-black dark:text-brand-cream transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        Ready to Build Wealth? Start Here
      </HeaderHierarchy>
      
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {valueProps.map((prop, index) => (
          <Link
            key={index}
            to={prop.link}
            onClick={() => handleLinkClick(prop.title, prop.link)}
            className={`block p-6 sm:p-8 bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm rounded-3xl border-2 border-[#247EFF]/20 hover:border-[#247EFF]/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#247EFF]/20 group cursor-pointer relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${700 + index * 100}ms` }}
            aria-label={`Navigate to ${prop.title} - ${prop.description}`}
          >
            {/* Urban gritty texture background */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
            
            {/* Street-style corner tear effect */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#FFD700]/20 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-[#FFD700]/40 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <div className="group-hover:scale-110 transition-transform duration-300 p-4 bg-[#247EFF]/10 rounded-2xl group-hover:bg-[#247EFF]/20">
                  {prop.icon}
                </div>
              </div>
              
              <h3 
                className="text-xl sm:text-2xl font-black mb-4 text-brand-black dark:text-brand-cream group-hover:text-[#247EFF] transition-colors text-center transform -rotate-1"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
                  textShadow: '1px 1px 0px rgba(0,0,0,0.1)' 
                }}
              >
                {prop.title}
              </h3>
              
              <p className="text-base sm:text-lg text-brand-black/80 dark:text-brand-cream/80 leading-relaxed text-center">
                {prop.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Handwritten arrow pointing to blueprint CTA */}
      <div className="mt-12 flex justify-center relative">
        <div 
          className="transform rotate-12 text-[#247EFF] relative"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive"
          }}
        >
          {/* Hand-drawn arrow SVG */}
          <svg 
            width="120" 
            height="80" 
            viewBox="0 0 120 80" 
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.1))' }}
          >
            <path 
              d="M20,60 Q40,20 60,40 Q80,60 100,30 L95,35 M100,30 L95,25" 
              stroke="#247EFF" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
          </svg>
          
          <div className="text-lg font-bold text-[#247EFF] mt-4 transform -rotate-6">
            Get the Blueprint ↓
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropsSection;
