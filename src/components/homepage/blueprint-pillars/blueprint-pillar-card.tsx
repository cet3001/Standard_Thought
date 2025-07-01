
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface BlueprintPillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  bgColor: string;
  hoverBgColor: string;
  iconColor: string;
}

const BlueprintPillarCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  bgColor, 
  hoverBgColor, 
  iconColor 
}: BlueprintPillarCardProps) => {
  return (
    <Link to={link} className="block group">
      <div className="p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden bg-black/25 dark:bg-white/15 backdrop-blur-sm rounded-lg border border-black/30 dark:border-white/20">
        
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
          <div className={`w-20 h-20 ${bgColor} ${hoverBgColor} rounded-full flex items-center justify-center transition-colors transform group-hover:rotate-12 group-hover:scale-110 duration-300 relative overflow-hidden`}>
            {/* Subtle texture in icon container */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.3)_1px,_transparent_0)] bg-[length:5px_5px]"></div>
            <div className="relative z-10">
              <Icon className={`h-10 w-10 ${iconColor}`} aria-hidden="true" />
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
          {title}
          {/* Spray paint effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f4d03f]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10"></div>
        </h3>
        
        <p className="text-black/80 dark:text-brand-cream/80 leading-relaxed group-hover:text-black/90 dark:group-hover:text-brand-cream/90 transition-colors relative z-10">
          {description}
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
  );
};

export default BlueprintPillarCard;
