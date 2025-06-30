
import { ArrowRight } from "lucide-react";

const CardButton = () => {
  return (
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
        clipPath: 'polygon(3% 0%, 97% 2%, 98% 98%, 2% 97%)',
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
  );
};

export default CardButton;
