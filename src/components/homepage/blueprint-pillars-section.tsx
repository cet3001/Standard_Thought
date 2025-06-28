
import { Link } from "react-router-dom";
import { Brain, Rocket, Shield } from "lucide-react";

interface BlueprintPillarsSectionProps {
  isVisible: boolean;
}

const BlueprintPillarsSection = ({ isVisible }: BlueprintPillarsSectionProps) => {
  const pillars = [
    {
      icon: <Brain className="h-10 w-10 text-purple-600" aria-hidden="true" />,
      title: "Mindset Flips",
      description: "Flip your mindset from survival to stacking—heal money trauma and unlock your power to build.",
      link: "/about",
      bgColor: "bg-purple-500/10",
      hoverBgColor: "group-hover:bg-purple-500/20"
    },
    {
      icon: <Rocket className="h-10 w-10 text-[#247EFF]" aria-hidden="true" />,
      title: "Hustle Systems",
      description: "Systemize your side hustles—turn random moves into consistent money with AI and automation.",
      link: "/blog/ai-side-hustles-guide",
      bgColor: "bg-[#247EFF]/10",
      hoverBgColor: "group-hover:bg-[#247EFF]/20"
    },
    {
      icon: <Shield className="h-10 w-10 text-amber-600" aria-hidden="true" />,
      title: "Legacy Moves",
      description: "Turn today's grind into tomorrow's legacy—stack assets, break cycles, build generational wealth.",
      link: "/start-investing-guide",
      bgColor: "bg-amber-500/10",
      hoverBgColor: "group-hover:bg-amber-500/20"
    }
  ];

  return (
    <div className={`mb-16 relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Faded City Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg 
          viewBox="0 0 800 400" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* City grid pattern */}
          <defs>
            <pattern id="cityGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          
          {/* Street grid */}
          <rect width="800" height="400" fill="url(#cityGrid)" className="text-[#247EFF]"/>
          
          {/* Major streets/blocks */}
          <g className="text-[#247EFF]" opacity="0.4">
            <rect x="100" y="50" width="80" height="120" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="220" y="80" width="60" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="320" y="60" width="100" height="140" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="460" y="40" width="70" height="160" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="570" y="70" width="90" height="110" fill="none" stroke="currentColor" strokeWidth="2"/>
            
            {/* Lower section */}
            <rect x="80" y="220" width="110" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="230" y="240" width="80" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="350" y="210" width="120" height="130" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="510" y="230" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="2"/>
            
            {/* Major arteries */}
            <line x1="0" y1="200" x2="800" y2="200" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
            <line x1="400" y1="0" x2="400" y2="400" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
          </g>
        </svg>
      </div>

      {/* Urban texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:30px_30px]" aria-hidden="true"></div>

      <div className="text-center mb-12 relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-black mb-4 text-brand-black dark:text-brand-cream transform -rotate-1"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
            textShadow: '2px 2px 0px rgba(0,0,0,0.1)' 
          }}
        >
          The Standard Thought Blueprint
        </h2>
        <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Street-smart methodology for turning struggle into strategy—proven by the culture, built for progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10" role="group" aria-label="Standard Thought methodology pillars">
        {pillars.map((pillar, index) => (
          <Link
            key={index}
            to={pillar.link}
            className="block group"
          >
            <div className="bg-white/70 dark:bg-brand-black/70 backdrop-blur-sm border-2 border-[#247EFF]/20 hover:border-[#247EFF]/50 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-xl hover:shadow-[#247EFF]/20 transition-all duration-300 cursor-pointer relative overflow-hidden">
              
              {/* Graffiti-style corner tag */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-[#FFD700]/30 transform rotate-45 group-hover:bg-[#FFD700]/50 transition-colors"></div>
              
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${pillar.bgColor} ${pillar.hoverBgColor} rounded-full flex items-center justify-center transition-colors transform group-hover:rotate-12 group-hover:scale-110 duration-300`}>
                  {pillar.icon}
                </div>
              </div>
              
              <h3 
                className="text-xl font-black text-brand-black dark:text-brand-cream mb-4 group-hover:text-[#247EFF] transition-colors transform -rotate-1"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
                  textShadow: '1px 1px 0px rgba(0,0,0,0.1)' 
                }}
              >
                {pillar.title}
              </h3>
              
              <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed group-hover:text-brand-black/90 dark:group-hover:text-brand-cream/90 transition-colors">
                {pillar.description}
              </p>
              
              {/* Street-style underline */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#247EFF]/20 group-hover:bg-[#247EFF]/60 transition-colors rounded-full"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlueprintPillarsSection;
