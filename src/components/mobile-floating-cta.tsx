
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
      className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in"
      role="dialog"
      aria-label="Call to action popup"
      aria-live="polite"
    >
      <div className="bg-white/95 dark:bg-brand-black/95 border border-[#247EFF]/30 rounded-2xl p-4 shadow-lg relative">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#247EFF]/20 hover:bg-[#247EFF]/30 flex items-center justify-center transition-colors duration-200 touch-manipulation"
          aria-label="Close call to action popup"
          type="button"
        >
          <X size={16} className="text-[#247EFF]" aria-hidden="true" />
        </button>

        <div className="pr-8">
          <div className="text-base font-semibold text-[#247EFF] mb-3" role="heading" aria-level={3}>
            Ready to build wealth?
          </div>
          <Button 
            size="lg"
            className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-semibold rounded-xl px-6 py-3 text-base w-full touch-manipulation"
            aria-label="Start building your wealth - Get free blueprint"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileFloatingCTA;
