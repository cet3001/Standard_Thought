
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Download, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const LeadMagnetPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if user has already seen popup this session
    const hasSeenPopup = sessionStorage.getItem('leadMagnetShown');
    if (hasSeenPopup) return;

    let scrollTriggered = false;
    let exitTriggered = false;

    // Scroll trigger (60% of page)
    const handleScroll = () => {
      if (scrollTriggered || hasTriggered) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= 60) {
        scrollTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    };

    // Exit intent trigger (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (exitTriggered || hasTriggered || window.innerWidth < 768) return;
      
      if (e.clientY <= 0) {
        exitTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    try {
      const { data: subscriber, error } = await supabase
        .from("Subscribers")
        .insert([
          {
            email: email,
            name: name || null,
            unsubscribe_token: crypto.randomUUID(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Subscription error:", error);
        toast.error("Failed to subscribe. Please try again.");
        return;
      }

      toast.success("Playbook sent! Check your email for your free PDF.");
      setIsVisible(false);
      setEmail("");
      setName("");
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Close button clicked"); // Debug log
    setIsVisible(false);
    sessionStorage.setItem('leadMagnetShown', 'true');
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log("Background clicked"); // Debug log
      setIsVisible(false);
      sessionStorage.setItem('leadMagnetShown', 'true');
    }
  };

  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div 
        className="bg-white dark:bg-brand-black max-w-md w-full rounded-2xl shadow-2xl border border-[#247EFF]/20 relative overflow-hidden"
        onClick={handlePopupClick}
      >
        {/* Close button - positioned outside the content area */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-30 w-10 h-10 bg-white dark:bg-brand-black border border-[#247EFF]/20 rounded-full flex items-center justify-center text-[#0A0A0A] dark:text-brand-cream hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 shadow-lg"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#247EFF]/5 to-transparent pointer-events-none"></div>

        <div className="p-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#247EFF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-2">
              Wait! Get Your Free Playbook
            </h3>
            <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
              Before you go, grab the blueprint that's helped 500+ builders turn nothing into generational wealth.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your first name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl"
            />
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-4 w-4" />
              <Input
                type="email"
                placeholder="Enter your email for instant access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 pl-11 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-[#247EFF] hover:bg-[#0057FF] text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                "Get Free Playbook PDF"
              )}
            </Button>
          </form>

          <p className="text-xs text-[#0A0A0A]/50 dark:text-brand-cream/50 text-center mt-4">
            📧 Instant delivery • No spam • Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetPopup;
