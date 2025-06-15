
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-3 hover:text-[#007cba] transition-all duration-300 group"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <img 
          src="/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png" 
          alt="ST Logo" 
          className="w-full h-full object-contain group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
        />
      </div>
      <div className="font-inter text-2xl md:text-3xl font-black">
        <span className="text-typography-primary group-hover:text-[#007cba] transition-colors duration-300">Standard</span>
        <span className="text-[#007cba] group-hover:text-[#247EFF] transition-colors duration-300">thought</span>
      </div>
    </Link>
  );
};

export default Logo;
