
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
    <div className="floating-cta">
      <div className="glass-effect border border-accent/30 rounded-3xl p-4 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-all duration-200 z-10"
        >
          <X size={12} className="text-accent" />
        </button>

        <div className="relative z-10">
          <div className="text-sm font-medium text-accent mb-2">Join the Movement</div>
          <Button 
            size="sm"
            className="bg-accent hover:bg-accent/90 text-black font-medium rounded-2xl px-4 py-2 text-sm glow-pulse w-full"
          >
            Get Started
          </Button>
        </div>

        {/* Pulse ring animation */}
        <div className="absolute inset-0 rounded-3xl border-2 border-accent animate-pulse opacity-50"></div>
      </div>
    </div>
  );
};

export default FloatingCTA;
