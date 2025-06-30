
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
        filter: `
          drop-shadow(4px 6px 12px rgba(0, 0, 0, 0.4))
          drop-shadow(-2px 3px 8px rgba(0, 0, 0, 0.2))
          drop-shadow(6px -2px 10px rgba(0, 0, 0, 0.15))
        `,
        animation: `streetFloat 4s ease-in-out infinite ${index * 0.7}s`,
        border: '2px solid rgba(255, 215, 0, 0.2)',
        clipPath: `polygon(
          0% 2%, 3% 0%, 97% 0%, 100% 3%, 
          100% 95%, 98% 100%, 2% 100%, 0% 97%
        )` // Torn-paper effect
      }}
    >
      {/* Heavy concrete texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `
            repeating-conic-gradient(from 0deg at 50% 50%, 
              rgba(0,0,0,0.15) 0deg, transparent 2deg, rgba(0,0,0,0.08) 4deg, transparent 6deg),
            radial-gradient(circle at 30% 70%, rgba(255,255,255,0.03) 0%, transparent 50%),
            repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.05) 0px,
              rgba(0,0,0,0.05) 1px,
              transparent 1px,
              transparent 3px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(0,0,0,0.03) 0px,
              rgba(0,0,0,0.03) 1px,
              transparent 1px,
              transparent 4px
            )
          `,
          backgroundSize: '8px 8px, 100px 100px, 4px 4px, 6px 6px'
        }}
      />
      
      {/* Street art corner accent with torn edge */}
      <div 
        className="absolute top-0 right-0 w-16 h-16 opacity-40"
        style={{
          background: `conic-gradient(from 45deg, ${topic.color}60 0deg, transparent 120deg)`,
          clipPath: 'polygon(65% 0%, 100% 0%, 100% 45%, 85% 35%)',
          filter: 'blur(1px)'
        }}
      />
      
      {/* Hand-drawn icon container with graffiti style */}
      <div className="relative z-10 p-6 pb-4">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-1"
          style={{
            background: `
              linear-gradient(135deg, ${topic.color}25 0%, rgba(0,0,0,0.3) 100%),
              repeating-conic-gradient(from 0deg at 50% 50%, 
                rgba(255,255,255,0.02) 0deg, transparent 30deg)
            `,
            borderColor: `${topic.color}80`,
            boxShadow: `
              inset 2px 2px 4px rgba(255,255,255,0.1),
              inset -2px -2px 4px rgba(0,0,0,0.3),
              0 4px 12px ${topic.color}30,
              inset 0 0 10px rgba(0,0,0,0.1)
            `,
            transform: 'rotate(-2deg)',
            clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' // Slight angle cut
          }}
        >
          <IconComponent 
            className="w-8 h-8 drop-shadow-lg" 
            style={{ 
              color: topic.color,
              filter: `
                drop-shadow(1px 1px 2px rgba(0,0,0,0.5))
                drop-shadow(0 0 4px ${topic.color}40)
              `,
              strokeWidth: 2.5 // Thicker strokes for hand-drawn feel
            }}
          />
        </div>
      </div>

      {/* Enhanced street-style content */}
      <div className="relative z-10 px-6 pb-6">
        <h3 
          className="text-brand-cream font-black text-xl mb-3 leading-tight uppercase tracking-wide transform -rotate-1"
          style={{
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
            textShadow: `
              3px 3px 0px rgba(0,0,0,0.9), 
              5px 5px 0px rgba(0,0,0,0.4),
              2px 2px 0px ${topic.color}50,
              -1px -1px 0px rgba(0,0,0,0.6)
            `,
            color: topic.color,
            fontWeight: '900',
            letterSpacing: '1px'
          }}
        >
          {topic.title}
        </h3>
        <p className="text-brand-cream/85 text-sm leading-relaxed mb-4 font-medium">
          {topic.description}
        </p>
        
        {/* Spray-painted button with pearlescent yellow background */}
        <div 
          className="inline-flex items-center font-black text-sm group-hover:translate-x-1 group-hover:scale-105 transition-all duration-300 px-4 py-2.5 rounded-lg border-2 backdrop-blur-sm uppercase tracking-wider transform -rotate-1"
          style={{
            background: `
              linear-gradient(135deg, 
                #FFD700 0%, 
                #FFF700 25%, 
                #FFED4A 50%, 
                #F9E71E 75%, 
                #FFD700 100%
              ),
              repeating-linear-gradient(
                90deg,
                rgba(255,255,255,0.2) 0px,
                rgba(255,255,255,0.2) 1px,
                transparent 1px,
                transparent 4px
              ),
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)
            `,
            borderColor: '#B8860B',
            borderWidth: '3px',
            borderStyle: 'solid',
            color: '#0A0A0A',
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.2)',
            boxShadow: `
              inset 2px 2px 4px rgba(255,255,255,0.4),
              inset -2px -2px 4px rgba(0,0,0,0.15),
              0 4px 12px rgba(0,0,0,0.5),
              inset 0 0 15px rgba(255,255,255,0.1),
              0 0 20px rgba(255, 215, 0, 0.3)
            `,
            clipPath: 'polygon(3% 0%, 97% 2%, 98% 98%, 2% 97%)', // Imperfect rough edges
            fontSize: '13px',
            fontWeight: '900'
          }}
        >
          <span>LEARN MORE</span>
          <ArrowRight 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
            style={{ 
              strokeWidth: 3,
              filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.3))'
            }}
          />
        </div>
      </div>

      {/* Enhanced street art bottom accent with texture */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 opacity-70"
        style={{
          background: `
            linear-gradient(90deg, 
              transparent 0%, 
              ${topic.color}80 20%, 
              ${topic.color} 50%, 
              ${topic.color}80 80%, 
              transparent 100%
            ),
            repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.1) 0px,
              rgba(0,0,0,0.1) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
          filter: 'blur(0.5px)',
          clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)' // Slightly uneven
        }}
      />

      {/* Enhanced hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `
            radial-gradient(circle at center, ${topic.color}40 0%, transparent 70%),
            repeating-conic-gradient(from 0deg at 50% 50%, 
              ${topic.color}10 0deg, transparent 60deg)
          `
        }}
      />

      {/* Scrapbook-style torn edges shadow */}
      <div 
        className="absolute -inset-1 -z-10 opacity-60"
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          filter: 'blur(3px)',
          clipPath: `polygon(
            1% 3%, 4% 1%, 96% 1%, 99% 4%, 
            99% 94%, 97% 99%, 3% 99%, 1% 96%
          )`,
          transform: 'rotate(0.5deg) scale(1.02)'
        }}
      />
    </div>
  );
};

export default ExploreMoreCard;
