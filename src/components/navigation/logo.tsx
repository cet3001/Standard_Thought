
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
          src="/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png" 
          alt="Standardthought logo - Urban entrepreneurship and wealth building" 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="font-inter text-logo-lg md:text-[3.5rem]">
        <div className="flex flex-col">
          <div className="leading-none">
            <span className="text-typography-primary group-hover:text-[#007cba]">Standard</span>
            <span className="text-[#007cba]">thought</span>
          </div>
          <div className="text-sm font-medium text-[#0A0A0A]/60 dark:text-brand-cream/60 mt-1">
            Urban Wealth. Real Progress.
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
