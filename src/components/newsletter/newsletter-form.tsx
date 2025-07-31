
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackNewsletterSignup } from "@/lib/analytics-utils";
import { validateEmail, newsletterRateLimiter, getClientIdentifier, sanitizeText } from "@/lib/security-utils";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Sanitize and validate input
    const sanitizedEmail = sanitizeText(email);
    if (!validateEmail(sanitizedEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Rate limiting check
    const clientId = getClientIdentifier();
    if (!newsletterRateLimiter.isAllowed(clientId)) {
      const remainingTime = Math.ceil(newsletterRateLimiter.getRemainingTime(clientId) / 1000 / 60);
      toast({
        title: "Too many attempts",
        description: `Please wait ${remainingTime} minutes before trying again.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: sanitizedEmail }),
      });

      if (response.ok) {
        // Track successful newsletter signup
        trackNewsletterSignup(sanitizedEmail, 'newsletter_section');
        
        toast({
          title: "Welcome to the movement! 🔥",
          description: "Check your email for the Urban Wealth Building Blueprint and exclusive content.",
          duration: 5000,
        });
        setEmail("");
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 pt-0 relative z-10">
      <div 
        className="relative p-8 rounded-2xl mb-4 border-3"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.12), rgba(255, 235, 59, 0.08), rgba(255, 193, 7, 0.12))',
          borderColor: 'rgba(255, 215, 0, 0.6)',
          boxShadow: '0 12px 40px rgba(255, 215, 0, 0.25), inset 0 2px 8px rgba(255, 215, 0, 0.15)',
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Enhanced glow effect around the form */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-40 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, #ffd700, #ffed4e, #fff176, #ffeb3b, #f4d03f, #f7dc6f, #fdeaa7, #ffd700)',
            backgroundSize: '400% 400%',
            animation: 'enhanced-pearlescent 3s ease-in-out infinite',
            filter: 'blur(8px)',
            zIndex: -1
          }}
        />

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Input
              type="email"
              placeholder="Enter your email to unlock the blueprint..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 sm:py-4 text-sm sm:text-base rounded-2xl border-3 shadow-md"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(255, 215, 0, 0.7)',
                color: '#0A0A0A',
                boxShadow: '0 6px 20px rgba(255, 215, 0, 0.2), inset 0 1px 3px rgba(255, 215, 0, 0.1)'
              }}
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full sm:w-auto font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-sm sm:text-base relative overflow-hidden border-3"
              style={{ 
                background: 'linear-gradient(45deg, #ffd700, #ffed4e, #fff176, #ffeb3b, #f4d03f, #f7dc6f, #fdeaa7, #ffd700)',
                backgroundSize: '300% 300%',
                animation: 'enhanced-pearlescent 2.5s ease-in-out infinite',
                color: 'black',
                borderColor: 'rgba(255, 215, 0, 0.8)',
                fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                filter: 'drop-shadow(0 8px 16px rgba(255, 215, 0, 0.5))'
              }}
            >
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 opacity-60" style={{
                background: 'linear-gradient(45deg, #ffd700, #ffeb3b, #fff176)',
                opacity: 0.4
              }}></div>
              <span className="relative z-10">
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                    Getting Blueprint...
                  </div>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-label="Checkmark icon" />
                    <span 
                      style={{ 
                        fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                        textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                        transform: 'rotate(-0.5deg)',
                        display: 'inline-block'
                      }}
                    >
                      Send Me The Playbook
                    </span>
                  </>
                )}
              </span>
            </Button>
          </div>
        </form>
      </div>
      
      {/* Benefits list */}
      <div className="text-center mt-4 mb-3">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center text-sm font-medium">
          <div className="flex items-center text-brand-black dark:text-brand-cream">
            <Check className="h-4 w-4 text-[#ffd700] mr-2" aria-label="Check mark" />
            Free AI Hustle Toolkit
          </div>
          <div className="flex items-center text-brand-black dark:text-brand-cream">
            <Check className="h-4 w-4 text-[#ffd700] mr-2" aria-label="Check mark" />
            Weekly money reframe tips
          </div>
          <div className="flex items-center text-brand-black dark:text-brand-cream">
            <Check className="h-4 w-4 text-[#ffd700] mr-2" aria-label="Check mark" />
            No fluff. Just real plays.
          </div>
        </div>
      </div>
      
      {/* Quick line under the input section */}
      <div className="text-center mt-3">
        <p 
          className="text-sm font-semibold italic drop-shadow-sm"
          style={{ 
            fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
            background: 'linear-gradient(45deg, #ffd700, #ffed4e, #fff176, #ffeb3b, #f4d03f)',
            backgroundSize: '200% 200%',
            animation: 'enhanced-pearlescent 2s ease-in-out infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))'
          }}
        >
          Don't miss your shot—real wins start here.
        </p>
      </div>
      
      <div className="text-center pt-4">
        <p className="text-xs sm:text-sm text-brand-black dark:text-brand-cream font-medium">
          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#ffd700] mr-1 inline" aria-label="Check mark" />
          Trusted by 1,000+ cycle-breakers / Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};
