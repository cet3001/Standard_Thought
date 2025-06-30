
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ExploreMoreCardProps {
  topic: {
    title: string;
    description: string;
    icon: any;
    route: string;
    color: string;
    bgGradient: string;
  };
  index: number;
}

const ExploreMoreCard = ({ topic, index }: ExploreMoreCardProps) => {
  const navigate = useNavigate();
  const IconComponent = topic.icon;

  return (
    <div
      onClick={() => navigate(topic.route)}
      className={`group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-br ${topic.bgGradient}`}
      style={{
        borderRadius: '12px 20px 15px 18px', // Uneven, hand-cut borders
        filter: 'drop-shadow(4px 6px 12px rgba(0, 0, 0, 0.4))',
        animation: `streetFloat 4s ease-in-out infinite ${index * 0.7}s`,
        border: '2px solid rgba(255, 215, 0, 0.2)'
      }}
    >
      {/* Concrete/grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `
            repeating-conic-gradient(from 0deg at 50% 50%, 
              rgba(0,0,0,0.1) 0deg, transparent 2deg, rgba(0,0,0,0.05) 4deg, transparent 6deg),
            radial-gradient(circle at 30% 70%, rgba(255,255,255,0.02) 0%, transparent 50%)
          `,
          backgroundSize: '8px 8px, 100px 100px'
        }}
      />
      
      {/* Street art corner accent */}
      <div 
        className="absolute top-0 right-0 w-16 h-16 opacity-40"
        style={{
          background: `conic-gradient(from 45deg, ${topic.color}60 0deg, transparent 120deg)`,
          clipPath: 'polygon(60% 0%, 100% 0%, 100% 40%)',
          filter: 'blur(1px)'
        }}
      />
      
      {/* Hand-drawn icon container */}
      <div className="relative z-10 p-6 pb-4">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-1"
          style={{
            background: `linear-gradient(135deg, ${topic.color}25 0%, rgba(0,0,0,0.3) 100%)`,
            borderColor: `${topic.color}80`,
            boxShadow: `
              inset 2px 2px 4px rgba(255,255,255,0.1),
              inset -2px -2px 4px rgba(0,0,0,0.3),
              0 4px 12px ${topic.color}30
            `,
            transform: 'rotate(-2deg)'
          }}
        >
          <IconComponent 
            className="w-8 h-8 drop-shadow-lg" 
            style={{ 
              color: topic.color,
              filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'
            }}
          />
        </div>
      </div>

      {/* Street-style content */}
      <div className="relative z-10 px-6 pb-6">
        <h3 
          className="text-brand-cream font-black text-lg mb-3 leading-tight uppercase tracking-wide"
          style={{
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.8), 4px 4px 0px rgba(0,0,0,0.3)',
            transform: 'rotate(-0.5deg)',
            color: topic.color
          }}
        >
          {topic.title}
        </h3>
        <p className="text-brand-cream/85 text-sm leading-relaxed mb-4 font-medium">
          {topic.description}
        </p>
        
        {/* Hand-painted button */}
        <div 
          className="inline-flex items-center font-bold text-sm group-hover:translate-x-1 group-hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg border-2 backdrop-blur-sm uppercase tracking-wider"
          style={{
            background: `linear-gradient(135deg, ${topic.color}90 0%, ${topic.color}70 100%)`,
            borderColor: `${topic.color}`,
            color: '#0A0A0A',
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
            textShadow: '1px 1px 0px rgba(255,255,255,0.3)',
            boxShadow: `
              inset 1px 1px 2px rgba(255,255,255,0.3),
              inset -1px -1px 2px rgba(0,0,0,0.2),
              0 3px 8px rgba(0,0,0,0.4)
            `,
            transform: 'rotate(-1deg)'
          }}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Street art bottom accent */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${topic.color}80 20%, ${topic.color} 50%, ${topic.color}80 80%, transparent 100%)`,
          filter: 'blur(0.5px)'
        }}
      />

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at center, ${topic.color}40 0%, transparent 70%)`
        }}
      />
    </div>
  );
};

export default ExploreMoreCard;
