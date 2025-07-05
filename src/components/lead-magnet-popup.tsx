import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const LeadMagnetPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Handle email submission here
    console.log("Email submitted:", email);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsVisible(false);
    }, 1000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div 
        className={cn(
          "relative w-full max-w-md mx-auto",
          "bg-gray-500/20 backdrop-blur-md",
          "rounded-xl shadow-2xl",
          "border-2 border-transparent"
        )}
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007cba' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 20L30 10M30 50L30 40M40 30L50 30M10 30L20 30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: '60px 60px',
          border: '2px solid transparent',
          backgroundClip: 'padding-box'
        }}
      >
        {/* Pearlescent Border Effect */}
        <div 
          className="absolute inset-0 rounded-xl p-[2px] animate-pearlescent"
          style={{
            background: 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FFA500)',
            backgroundSize: '200% 200%'
          }}
        >
          <div className="w-full h-full rounded-[10px] bg-gray-500/20 backdrop-blur-md" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-brand-black dark:text-brand-cream" />
          </button>

          {/* ST Logo */}
          <div className="text-center mb-6">
            <div 
              className="text-3xl font-black text-[#FFD700] transform -rotate-2 inline-block"
              style={{ 
                fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                letterSpacing: '2px'
              }}
            >
              ST
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-2">
              Get the moves that actually build wealth—
            </h2>
            <p 
              className="text-lg font-semibold animate-pearlescent bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FFA500)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              no theory, just action.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email to get started"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full text-center font-medium bg-white/80 dark:bg-black/20 border-2 border-[#FFD700]/30 focus:border-[#FFD700] text-brand-black dark:text-brand-cream placeholder:text-brand-black/60 dark:placeholder:text-brand-cream/60"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full font-bold text-lg py-3",
                "bg-gradient-to-r from-[#FFD700] to-[#FFA500]",
                "text-brand-black",
                "hover:from-[#FFA500] hover:to-[#FFD700]",
                "border-2 border-[#FFD700]",
                "shadow-lg hover:shadow-xl",
                "transition-all duration-300",
                "transform hover:scale-105"
              )}
              style={{
                textShadow: '1px 1px 0px rgba(0,0,0,0.2)'
              }}
            >
              {isSubmitting ? "Getting Your Blueprint..." : "Get the Blueprint"}
            </Button>
          </form>

          {/* Bottom Text */}
          <div className="text-center mt-4">
            <p className="text-sm text-brand-black/70 dark:text-brand-cream/70">
              Join the community building real wealth from the ground up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetPopup;