
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;

    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 5000); // Longer delay on mobile to avoid interrupting reading

    return () => clearTimeout(timer);
  }, [isDismissed, isMobile]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isMobile || !isVisible || isDismissed) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in max-w-sm mx-auto"
      role="dialog"
      aria-label="Call to action popup"
      aria-live="polite"
    >
      <div className="bg-white/95 dark:bg-gray-900/95 border border-[#247EFF]/30 rounded-2xl p-4 shadow-lg relative backdrop-blur-sm">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 w-10 h-10 rounded-full bg-[#247EFF]/20 hover:bg-[#247EFF]/30 flex items-center justify-center transition-colors duration-200 touch-manipulation"
          aria-label="Close call to action popup"
          type="button"
        >
          <X size={18} className="text-[#247EFF]" aria-hidden="true" />
        </button>

        <div className="pr-12">
          <div className="text-lg font-semibold text-[#247EFF] dark:text-[#FFD700] mb-3" role="heading" aria-level={3}>
            Ready to build wealth?
          </div>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl px-6 py-4 text-lg w-full touch-manipulation border-0 relative overflow-hidden min-h-[56px] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
              textShadow: '1px 1px 0px rgba(0,0,0,0.2)' 
            }}
            aria-label="Start building your wealth - Get free blueprint"
          >
            <span className="relative z-10">Get Started Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileFloatingCTA;
