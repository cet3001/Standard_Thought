
import { MindsetPrinciple } from "./mindset-principles-data";
import { TrendingUp, Users, Building } from "lucide-react";

interface MindsetPrincipleCardProps {
  principle: MindsetPrinciple;
  index: number;
  isVisible: boolean;
}

const MindsetPrincipleCard = ({ principle, index, isVisible }: MindsetPrincipleCardProps) => {
  const getCustomIcon = (iconName: string, iconStyle?: string) => {
    const iconProps = {
      size: 48,
      className: "drop-shadow-lg"
    };

    // Street sign style - bold, angular, high contrast
    if (iconStyle === 'street-sign') {
      return (
        <div className="relative">
          {/* Street sign background */}
          <div 
            className="absolute inset-0 transform rotate-45 rounded-sm"
            style={{
              width: '56px',
              height: '56px',
              top: '-4px',
              left: '-4px',
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(0,0,0,0.2)'
            }}
          />
          <TrendingUp 
            {...iconProps}
            className="relative z-10 text-white drop-shadow-lg"
            strokeWidth={3}
          />
        </div>
      );
    }

    // Graffiti style - colorful, layered, artistic
    if (iconStyle === 'graffiti') {
      return (
        <div className="relative">
          {/* Graffiti shadow layers */}
          <Users 
            {...iconProps}
            className="absolute text-black/30 drop-shadow-none"
            style={{ transform: 'translate(3px, 3px)' }}
            strokeWidth={4}
          />
          <Users 
            {...iconProps}
            className="absolute text-[#FFD700] drop-shadow-none"
            style={{ transform: 'translate(1px, 1px)' }}
            strokeWidth={3}
          />
          <Users 
            {...iconProps}
            className="relative z-10 drop-shadow-lg"
            style={{
              color: '#FFD700'
            }}
            strokeWidth={2.5}
          />
        </div>
      );
    }

    // Urban/building style - architectural, solid, imposing
    if (iconStyle === 'urban') {
      return (
        <div className="relative">
          {/* Urban base */}
          <div 
            className="absolute inset-0 rounded-lg transform -rotate-2"
            style={{
              width: '52px',
              height: '52px',
              top: '-2px',
              left: '-2px',
              background: 'linear-gradient(135deg, #0A0A0A, #f4d03f, #ffd700)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.4)'
            }}
          />
          <Building 
            {...iconProps}
            className="relative z-10 text-[#FFD700] drop-shadow-lg"
            strokeWidth={2}
          />
        </div>
      );
    }

    // Fallback
    return <TrendingUp {...iconProps} className="text-[#247EFF]" />;
  };

  return (
    <div 
      className={`bg-black/30 dark:bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 text-center transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${600 + index * 200}ms` }}
    >
      <div className="mb-6 flex justify-center items-center h-16">
        {getCustomIcon(principle.icon, principle.iconStyle)}
      </div>
      <h3 
        className="text-xl font-semibold mb-4"
        style={{ 
          fontFamily: "'Kalam', 'Comic Neue', cursive",
          textShadow: '1px 1px 0px rgba(0,0,0,0.1)',
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}
      >
        {principle.title}
      </h3>
      <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed">
        {principle.description}
      </p>
    </div>
  );
};

export default MindsetPrincipleCard;
