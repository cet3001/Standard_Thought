
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
          type="button"
        >
          <X size={12} className="text-[#247EFF]" aria-hidden="true" />
        </button>

        <div className="relative z-10">
          <div className="text-sm font-medium text-[#247EFF] mb-2" role="heading" aria-level="3">
            Get the blueprint, get moving.
          </div>
          <Button 
            size="sm"
            className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-medium rounded-2xl px-4 py-2 text-sm w-full transition-all duration-300"
            aria-label="Start building your wealth - Get free blueprint"
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
