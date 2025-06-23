
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Logo = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleJoinMovement = () => {
    navigate("/auth");
  };

  return (
    <div className="flex items-center space-x-3">
      <Link 
        to="/" 
        className="flex items-center space-x-3 hover:text-[#007cba] transition-all duration-300 group"
        aria-label="Standardthought - Return to homepage"
      >
        <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
          <img 
            src="/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png" 
            alt="Standardthought logo - Urban entrepreneurship and wealth building" 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="font-inter text-logo md:text-logo-lg">
          <div className="flex flex-col">
            <div>
              <span className="text-typography-primary group-hover:text-[#007cba]">Standard</span>
              <span className="text-[#007cba]">thought</span>
            </div>
            <div className="text-xs font-medium text-[#0A0A0A]/60 dark:text-brand-cream/60 mt-1">
              Urban Wealth. Real Progress.
            </div>
          </div>
        </div>
      </Link>
      
      {/* Mobile Join Movement Button - only show on mobile when user is not logged in */}
      {!user && (
        <div className="lg:hidden">
          <Button 
            onClick={handleJoinMovement}
            size="sm"
            className="bg-gradient-to-r from-accent to-[#FFD700] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-3 py-1 border-0 text-xs"
            aria-label="Join the wealth building movement - Sign up or login"
          >
            Join
          </Button>
        </div>
      )}
    </div>
  );
};

export default Logo;
