
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
      icon: <TrendingUp className="h-12 w-12" style={{
        color: 'transparent',
        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
        backgroundSize: '400% 400%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'pearlescent 3s ease-in-out infinite'
      }} aria-label="Financial growth and investment icon" />,
      title: "Start Small, Stack Fast",
      description: "Turn $1 into $100, then $1000. Master micro-investing and AI side hustles that actually pay.",
      link: "/start-investing-guide"
    },
    {
      icon: <CreditCard className="h-12 w-12" style={{
        color: 'transparent',
        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
        backgroundSize: '400% 400%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'pearlescent 3s ease-in-out infinite'
      }} aria-label="Credit building and financial power icon" />,
      title: "Build Credit, Build Power",
      description: "Fix your credit score, stack business credit, and unlock funding for your next move.",
      link: "/financial-education-guide"
    }
  ];

  return (
    <div className="mb-12 sm:mb-16 relative">
      {/* Enhanced brick texture background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
        {/* Complex brick pattern with weathering */}
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(139, 69, 19, 0.3),
                rgba(139, 69, 19, 0.3) 2px,
                transparent 2px,
                transparent 16px,
                rgba(101, 67, 33, 0.4) 16px,
                rgba(101, 67, 33, 0.4) 18px,
                transparent 18px,
                transparent 32px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(160, 82, 45, 0.2),
                rgba(160, 82, 45, 0.2) 1px,
                transparent 1px,
                transparent 48px,
                rgba(139, 69, 19, 0.3) 48px,
                rgba(139, 69, 19, 0.3) 50px,
                transparent 50px,
                transparent 96px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%'
          }}
        />
        
        {/* Grunge and wear patterns */}
        <div className="absolute inset-0 opacity-70">
          <div className="w-full h-full bg-[radial-gradient(circle_at_4px_4px,_rgba(0,0,0,0.5)_2px,_transparent_0)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(25deg,_transparent_47%,_rgba(0,0,0,0.2)_48%,_rgba(0,0,0,0.2)_52%,_transparent_53%)] bg-[length:8px_8px] opacity-50"></div>
        </div>
      </div>

      {/* Subtle graffiti elements */}
      <div className="absolute top-4 right-8 transform rotate-6 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <div 
          className="text-3xl font-black"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            filter: 'blur(0.5px)',
            color: 'transparent',
            background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          STACK UP
        </div>
      </div>

      <HeaderHierarchy 
        level={2} 
        className={`text-center mb-8 sm:mb-12 text-brand-black dark:text-brand-cream transition-all duration-1000 delay-400 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        Ready to Flip the Script? Start Here
      </HeaderHierarchy>
      
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 max-w-4xl mx-auto transition-all duration-1000 delay-600 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {valueProps.map((prop, index) => (
          <Link
            key={index}
            to={prop.link}
            onClick={() => handleLinkClick(prop.title, prop.link)}
            className={`block p-6 sm:p-8 backdrop-blur-sm rounded-3xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ 
              transitionDelay: `${700 + index * 100}ms`,
              background: 'rgba(128, 128, 128, 0.1)',
              borderColor: 'rgba(244, 208, 63, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(244, 208, 63, 0.6)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(244, 208, 63, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(244, 208, 63, 0.2)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }}
            aria-label={`Navigate to ${prop.title} - ${prop.description}`}
          >
            {/* Enhanced urban gritty texture background */}
            <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_3px_3px,_rgba(0,0,0,1)_2px,_transparent_0)] bg-[length:25px_25px]"></div>
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(135deg,_transparent_46%,_rgba(0,0,0,0.6)_47%,_rgba(0,0,0,0.6)_53%,_transparent_54%)] bg-[length:10px_10px]"></div>
            
            {/* Enhanced street-style corner tear effect with yellow */}
            <div className="absolute top-0 right-0 w-10 h-10 transform rotate-45 translate-x-5 -translate-y-5 transition-colors" style={{
              background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
              opacity: 0.3
            }}></div>
            <div className="absolute top-1 right-1 w-6 h-6 transform rotate-45 translate-x-3 -translate-y-3" style={{
              background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
              opacity: 0.2
            }}></div>
            
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <div className="group-hover:scale-110 transition-transform duration-300 p-4 rounded-2xl relative overflow-hidden" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  animation: 'pearlescent 3s ease-in-out infinite',
                  opacity: 0.1
                }}>
                  {/* Subtle texture inside icon container */}
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.4)_1px,_transparent_0)] bg-[length:6px_6px]"></div>
                  <div className="relative z-10">
                    {prop.icon}
                  </div>
                </div>
              </div>
              
              <h3 
                className="text-xl sm:text-2xl font-black mb-4 text-brand-black dark:text-brand-cream transition-colors text-center transform -rotate-1 relative"
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
                {prop.title}
                {/* Subtle spray paint effect behind text */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10" style={{
                  background: 'linear-gradient(to right, transparent, rgba(244, 208, 63, 0.1), transparent)'
                }}></div>
              </h3>
              
              <p className="text-base sm:text-lg text-brand-black/80 dark:text-brand-cream/80 leading-relaxed text-center group-hover:text-brand-black/90 dark:group-hover:text-brand-cream/90 transition-colors">
                {prop.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Enhanced handwritten arrow pointing to blueprint CTA */}
      <div className="mt-12 flex justify-center relative z-10">
        <div 
          className="transform rotate-12 relative"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive"
          }}
        >
          {/* Enhanced hand-drawn arrow SVG with yellow color */}
          <svg 
            width="140" 
            height="90" 
            viewBox="0 0 140 90" 
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.15))' }}
          >
            <path 
              d="M25,70 Q45,25 65,45 Q85,65 105,35 L100,40 M105,35 L100,30" 
              stroke="#f4d03f"
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
            {/* Additional sketch lines for hand-drawn effect */}
            <path 
              d="M27,72 Q47,27 67,47 Q87,67 103,37" 
              stroke="#ffd700"
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
            />
            <path 
              d="M23,68 Q43,23 63,43 Q83,63 103,33" 
              stroke="#ffeb3b"
              strokeWidth="1" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.3"
            />
          </svg>
          
          <div className="text-lg font-bold mt-6 transform -rotate-6 relative" style={{
            color: 'transparent',
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}>
            Get the Blueprint ↓
            {/* Subtle spray effect */}
            <div className="absolute inset-0 opacity-60 blur-md -z-10" style={{
              background: 'linear-gradient(to right, transparent, rgba(244, 208, 63, 0.2), transparent)'
            }}></div>
          </div>
        </div>
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
  );
};

export default ValuePropsSection;
