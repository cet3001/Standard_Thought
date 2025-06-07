
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-3 hover:text-[#007cba] transition-all duration-300 group"
    >
      <div className="w-8 h-8 flex-shrink-0">
        <img 
          src="/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png" 
          alt="ST Logo" 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="font-inter text-logo md:text-logo-lg">
        <span className="text-typography-primary group-hover:text-[#007cba]">Standard</span>
        <span className="text-[#007cba]">thought</span>
      </div>
    </Link>
  );
};

export default Logo;
