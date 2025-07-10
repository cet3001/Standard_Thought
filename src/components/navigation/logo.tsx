
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-4 hover:text-[#007cba] transition-all duration-300 group" 
      aria-label="Standardthought - Return to homepage"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
        <img 
          src="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" 
          alt="Standardthought logo - Urban entrepreneurship and wealth building" 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
        />
      </div>
      <div className="font-inter text-logo-lg md:text-[3.5rem]">
        <div className="flex flex-col">
          <div className="leading-none">
            <span className="text-[#0A0A0A] group-hover:text-[#007cba]">Standard</span>
            <span 
              className="font-black"
              style={{ 
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Thought
            </span>
          </div>
          <div 
            className="text-base font-black mt-1 transform -rotate-1"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
              background: 'linear-gradient(45deg, #FFD700, #F4D03F, #FFEB3B, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '2px 2px 4px rgba(0,0,0,0.4), 1px 1px 0px rgba(255,255,255,0.2)',
              letterSpacing: '0.5px',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}
          >
            Urban Wealth. Real Progress.
          </div>
        </div>
      </div>

    </Link>
  );
};

export default Logo;
