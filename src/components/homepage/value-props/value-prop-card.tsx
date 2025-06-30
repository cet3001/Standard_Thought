
import { Link } from "react-router-dom";
import { trackResourceClick } from "@/lib/analytics-utils";

interface ValuePropCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
  isVisible: boolean;
}

const ValuePropCard = ({ icon, title, description, link, index, isVisible }: ValuePropCardProps) => {
  const handleLinkClick = (title: string, link: string) => {
    trackResourceClick(title, 'hero_value_prop');
  };

  return (
    <Link
      to={link}
      onClick={() => handleLinkClick(title, link)}
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
      aria-label={`Navigate to ${title} - ${description}`}
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
              {icon}
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
          {title}
          {/* Subtle spray paint effect behind text */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10" style={{
            background: 'linear-gradient(to right, transparent, rgba(244, 208, 63, 0.1), transparent)'
          }}></div>
        </h3>
        
        <p className="text-base sm:text-lg text-brand-black/80 dark:text-brand-cream/80 leading-relaxed text-center group-hover:text-brand-black/90 dark:group-hover:text-brand-cream/90 transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ValuePropCard;
