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
      {/* More transparent background */}
      <div className="relative bg-gray-200/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/5 dark:border-gray-700/5">
        {/* Enhanced faded city map background with more detail */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden="true">
          <svg 
            viewBox="0 0 800 400" 
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Complex city grid pattern with depth */}
            <defs>
              <pattern id="cityGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                <rect x="10" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.6"/>
              </pattern>
              <pattern id="smallGrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="8" height="8" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.3"/>
              </pattern>
            </defs>
            
            {/* Layered street grids */}
            <rect width="800" height="400" fill="url(#cityGrid)" className="text-[#247EFF]"/>
            <rect width="800" height="400" fill="url(#smallGrid)" className="text-[#247EFF]" opacity="0.6"/>
            
            {/* Enhanced building blocks with more detail */}
            <g className="text-[#247EFF]" opacity="0.5">
              {/* Main downtown area */}
              <rect x="100" y="50" width="80" height="120" fill="none" stroke="currentColor" strokeWidth="3"/>
              <rect x="105" y="55" width="70" height="110" fill="currentColor" opacity="0.1"/>
              <rect x="220" y="80" width="60" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="225" y="85" width="50" height="90" fill="currentColor" opacity="0.08"/>
              <rect x="320" y="60" width="100" height="140" fill="none" stroke="currentColor" strokeWidth="3"/>
              <rect x="325" y="65" width="90" height="130" fill="currentColor" opacity="0.12"/>
              <rect x="460" y="40" width="70" height="160" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="465" y="45" width="60" height="150" fill="currentColor" opacity="0.1"/>
              <rect x="570" y="70" width="90" height="110" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="575" y="75" width="80" height="100" fill="currentColor" opacity="0.09"/>
              
              {/* Lower section neighborhoods */}
              <rect x="80" y="220" width="110" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="85" y="225" width="100" height="70" fill="currentColor" opacity="0.07"/>
              <rect x="230" y="240" width="80" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="235" y="245" width="70" height="90" fill="currentColor" opacity="0.08"/>
              <rect x="350" y="210" width="120" height="130" fill="none" stroke="currentColor" strokeWidth="3"/>
              <rect x="355" y="215" width="110" height="120" fill="currentColor" opacity="0.11"/>
              <rect x="510" y="230" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="515" y="235" width="80" height="80" fill="currentColor" opacity="0.09"/>
              
              {/* Major arteries with traffic patterns */}
              <line x1="0" y1="200" x2="800" y2="200" stroke="currentColor" strokeWidth="4" opacity="0.7"/>
              <line x1="0" y1="202" x2="800" y2="202" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
              <line x1="400" y1="0" x2="400" y2="400" stroke="currentColor" strokeWidth="4" opacity="0.7"/>
              <line x1="402" y1="0" x2="402" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
              
              {/* Secondary streets */}
              <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <line x1="600" y1="0" x2="600" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <line x1="0" y1="100" x2="800" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <line x1="0" y1="300" x2="800" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            </g>
          </svg>
        </div>

        {/* Enhanced urban texture overlay with grit */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_3px_3px,_rgba(0,0,0,1)_2px,_transparent_0)] bg-[length:35px_35px]" aria-hidden="true"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,_transparent_47%,_rgba(0,0,0,0.8)_48%,_rgba(0,0,0,0.8)_52%,_transparent_53%)] bg-[length:15px_15px]" aria-hidden="true"></div>

        {/* Subtle graffiti tags */}
        <div className="absolute top-8 left-12 transform -rotate-12 pointer-events-none opacity-[0.08]" aria-hidden="true">
          <div 
            className="text-[#FFD700] text-2xl font-black"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', cursive",
              textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
              filter: 'blur(0.4px)'
            }}
          >
            BLUEPRINT
          </div>
        </div>

        <div className="text-center mb-12 relative z-10">
          <h2 
            className="text-3xl md:text-4xl font-black mb-4 text-black dark:text-brand-cream transform -rotate-1 relative"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
              textShadow: '3px 3px 0px rgba(0,0,0,0.15)' 
            }}
          >
            The Standard Thought Blueprint
            {/* Enhanced texture behind title */}
            <div className="absolute inset-0 opacity-[0.08] bg-[conic-gradient(from_30deg,_transparent_65%,_rgba(0,0,0,0.5)_85%,_transparent_100%)] bg-[length:25px_25px] -z-10"></div>
          </h2>
          <p className="text-lg text-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto relative">
            Street-smart methodology for turning struggle into strategy—proven by the culture, built for progress.
            {/* Subtle grain behind description */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.6)_1px,_transparent_0)] bg-[length:12px_12px] -z-10"></div>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10" role="group" aria-label="Standard Thought methodology pillars">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              to={pillar.link}
              className="block group"
            >
              <div className="p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden">
                
                {/* Enhanced texture backgrounds */}
                <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:18px_18px]"></div>
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(135deg,_transparent_46%,_rgba(0,0,0,0.6)_47%,_rgba(0,0,0,0.6)_53%,_transparent_54%)] bg-[length:8px_8px]"></div>
                
                {/* Enhanced graffiti-style corner tag with yellow */}
                <div className="absolute top-2 right-2 w-8 h-8 transform rotate-45 transition-colors" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
                  opacity: 0.4
                }}></div>
                <div className="absolute top-3 right-3 w-4 h-4 transform rotate-45" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
                  opacity: 0.2
                }}></div>
                
                <div className="flex justify-center mb-6 relative z-10">
                  <div className={`w-20 h-20 ${pillar.bgColor} ${pillar.hoverBgColor} rounded-full flex items-center justify-center transition-colors transform group-hover:rotate-12 group-hover:scale-110 duration-300 relative overflow-hidden`}>
                    {/* Subtle texture in icon container */}
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.3)_1px,_transparent_0)] bg-[length:5px_5px]"></div>
                    <div className="relative z-10">
                      {pillar.icon}
                    </div>
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-black text-black dark:text-brand-cream mb-4 transition-colors transform -rotate-1 relative"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
                    textShadow: '2px 2px 0px rgba(0,0,0,0.1)' 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'transparent';
                    e.currentTarget.style.background = 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)';
                    e.currentTarget.style.backgroundSize = '400% 400%';
                    e.currentTarget.style.webkitBackgroundClip = 'text';
                    e.currentTarget.style.webkitTextFillColor = 'transparent';
                    e.currentTarget.style.backgroundClip = 'text';
                    e.currentTarget.style.animation = 'pearlescent 3s ease-in-out infinite';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.webkitBackgroundClip = '';
                    e.currentTarget.style.webkitTextFillColor = '';
                    e.currentTarget.style.backgroundClip = '';
                    e.currentTarget.style.animation = '';
                  }}
                >
                  {pillar.title}
                  {/* Spray paint effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f4d03f]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10"></div>
                </h3>
                
                <p className="text-black/80 dark:text-brand-cream/80 leading-relaxed group-hover:text-black/90 dark:group-hover:text-brand-cream/90 transition-colors relative z-10">
                  {pillar.description}
                </p>
                
                {/* Enhanced street-style underline with yellow */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-2 transition-colors rounded-full" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
                  opacity: 0.3
                }}></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 transition-colors rounded-full" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
                  opacity: 0.2
                }}></div>
              </div>
            </Link>
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
      </div>
    </div>
  );
};

export default BlueprintPillarsSection;
