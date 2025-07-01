
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div 
      className="floating-cta"
      role="dialog"
      aria-label="Call to action popup"
      aria-live="polite"
    >
      <div className="backdrop-blur-sm bg-white/90 dark:bg-brand-black/90 border border-[#247EFF]/30 rounded-3xl p-4 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/20 to-[#247EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
        
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#247EFF]/20 hover:bg-[#247EFF]/30 flex items-center justify-center transition-all duration-200 z-10"
          aria-label="Close call to action popup"
          title="Close popup"
          type="button"
        >
          <X size={12} className="text-[#247EFF]" aria-hidden="true" />
        </button>

        <div className="relative z-10">
          <div className="text-sm font-medium text-[#247EFF] mb-2" role="heading" aria-level={3}>
            Get the blueprint, get moving.
          </div>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl px-4 py-2 text-sm w-full border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
              textShadow: '1px 1px 0px rgba(0,0,0,0.2)' 
            }}
            aria-label="Start building your wealth - Get free blueprint"
            title="Start building your wealth"
          >
            Let's Build
          </Button>
        </div>

        {/* Pulse ring animation */}
        <div className="absolute inset-0 rounded-3xl border-2 border-[#247EFF] animate-pulse opacity-50" aria-hidden="true"></div>
      </div>
    </div>
  );
};

export default FloatingCTA;
