import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Download, Mail, Book } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const LeadMagnetPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    console.log("LeadMagnetPopup: Setting up triggers");
    
    // Clear session storage for testing - remove this line in production
    sessionStorage.removeItem('leadMagnetShown');
    
    // Check if user has already seen popup this session
    const hasSeenPopup = sessionStorage.getItem('leadMagnetShown');
    console.log("LeadMagnetPopup: Has seen popup before?", hasSeenPopup);
    
    if (hasSeenPopup) {
      console.log("LeadMagnetPopup: Popup already shown this session, skipping");
      return;
    }

    let scrollTriggered = false;
    let exitTriggered = false;

    // Scroll trigger (60% of page)
    const handleScroll = () => {
      if (scrollTriggered || hasTriggered) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      console.log("LeadMagnetPopup: Scroll percentage:", scrollPercentage);
      
      if (scrollPercentage >= 60) {
        console.log("LeadMagnetPopup: Scroll trigger activated!");
        scrollTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    };

    // Exit intent trigger (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (exitTriggered || hasTriggered || window.innerWidth < 768) return;
      
      console.log("LeadMagnetPopup: Mouse leave detected, clientY:", e.clientY);
      
      if (e.clientY <= 0) {
        console.log("LeadMagnetPopup: Exit intent trigger activated!");
        exitTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    };

    // Add a timeout trigger for testing (1 second for immediate testing)
    const timeoutTrigger = setTimeout(() => {
      if (!hasTriggered && !hasSeenPopup) {
        console.log("LeadMagnetPopup: Timeout trigger activated (1 second)!");
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    }, 1000);

    console.log("LeadMagnetPopup: Adding event listeners");
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      console.log("LeadMagnetPopup: Cleaning up event listeners");
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutTrigger);
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

  console.log("LeadMagnetPopup: Render - isVisible:", isVisible, "hasTriggered:", hasTriggered);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div 
        className="bg-white dark:bg-brand-black max-w-lg w-full rounded-3xl shadow-2xl border border-[#247EFF]/20 relative overflow-hidden"
        onClick={handlePopupClick}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-30 w-10 h-10 bg-white dark:bg-brand-black border border-[#247EFF]/20 rounded-full flex items-center justify-center text-[#0A0A0A] dark:text-brand-cream hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 shadow-lg"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Urban brick texture background */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Cdefs%3E%3Cpattern id='brick' patternUnits='userSpaceOnUse' width='40' height='20'%3E%3Crect width='40' height='20' fill='%23B85450'/%3E%3Crect width='18' height='8' x='1' y='1' fill='%23A0342E'/%3E%3Crect width='18' height='8' x='21' y='1' fill='%23A0342E'/%3E%3Crect width='18' height='8' x='1' y='11' fill='%23A0342E'/%3E%3Crect width='18' height='8' x='21' y='11' fill='%23A0342E'/%3E%3Cline x1='0' y1='10' x2='40' y2='10' stroke='%23E8E8E8' stroke-width='2'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='%23E8E8E8' stroke-width='2'/%3E%3Cline x1='20' y1='0' x2='20' y2='10' stroke='%23E8E8E8' stroke-width='2'/%3E%3Cline x1='0' y1='10' x2='0' y2='20' stroke='%23E8E8E8' stroke-width='1'/%3E%3Cline x1='40' y1='10' x2='40' y2='20' stroke='%23E8E8E8' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='100' fill='url(%23brick)'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 40px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Weathering and grit overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='25' r='0.8'/%3E%3Ccircle cx='50' cy='15' r='1.2'/%3E%3Ccircle cx='70' cy='35' r='0.6'/%3E%3Ccircle cx='90' cy='20' r='1'/%3E%3Ccircle cx='20' cy='45' r='0.7'/%3E%3Ccircle cx='40' cy='55' r='1.1'/%3E%3Ccircle cx='60' cy='75' r='0.9'/%3E%3Ccircle cx='80' cy='65' r='1.3'/%3E%3Ccircle cx='15' cy='85' r='0.5'/%3E%3Crect x='5' y='30' width='2' height='8' fill='%23000000' fill-opacity='0.2'/%3E%3Crect x='25' y='60' width='3' height='5' fill='%23000000' fill-opacity='0.15'/%3E%3Crect x='75' y='40' width='1' height='12' fill='%23000000' fill-opacity='0.25'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
              backgroundRepeat: 'repeat'
            }}
          />
        </div>

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/15 pointer-events-none"></div>

        {/* Content */}
        <div className="p-8 relative z-10 bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm rounded-3xl">
          {/* Header with playbook icon */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#247EFF] to-[#0057FF] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Book className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-3">
              Unlock the Blueprint to Generational Wealth
            </h3>
            <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-lg leading-relaxed">
              Join 500+ hustlers who started with nothing and are now building legacy. Drop your email below and get the playbook that's helping our community level up—no fluff, just real strategies.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <Input
              type="text"
              placeholder="First name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl bg-brand-cream/30 dark:bg-brand-black/30"
            />
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-5 w-5" />
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 pl-12 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl bg-brand-cream/30 dark:bg-brand-black/30"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[#247EFF] to-[#0057FF] hover:from-[#0057FF] hover:to-[#247EFF] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-70 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending Your Playbook...
                </div>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Unlock My Free Playbook
                </>
              )}
            </Button>
          </form>

          {/* Testimonial */}
          <div className="bg-[#247EFF]/10 rounded-2xl p-4 mb-4 border border-[#247EFF]/20">
            <p className="text-sm italic text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-2">
              "This playbook gave me the first steps I needed to level up."
            </p>
            <p className="text-xs font-semibold text-[#247EFF]">
              – Marcus, Atlanta
            </p>
          </div>

          {/* Trust signals */}
          <p className="text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60 text-center">
            ⚡ Instant delivery • 🚫 No spam, no games—just real value • ✉️ Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetPopup;
