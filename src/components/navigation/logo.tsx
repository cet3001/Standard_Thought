
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-3 hover:text-[#247EFF] transition-all duration-300 group"
    >
      <div className="w-8 h-8 flex-shrink-0">
        <img 
          src="/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png" 
          alt="ST Logo" 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="text-2xl font-bold font-satoshi">
        <span className="text-[#0A0A0A] dark:text-brand-cream group-hover:text-[#247EFF]">Standard</span>
        <span className="text-[#247EFF]">thought</span>
      </div>
    </Link>
  );
};

export default Logo;
