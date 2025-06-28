
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackNewsletterSignup } from "@/lib/analytics-utils";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Track successful newsletter signup
        trackNewsletterSignup(email, 'newsletter_section');
        
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
    <CardContent className="p-6 sm:p-8 pt-0 relative z-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Input
            type="email"
            placeholder="Enter your email to unlock the blueprint..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 sm:py-4 text-sm sm:text-base border-[#247EFF]/30 focus:border-[#247EFF] bg-brand-cream dark:bg-brand-black/50 text-brand-black dark:text-brand-cream rounded-2xl"
            required
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting || !email}
            className="w-full sm:w-auto bg-[#247EFF] hover:bg-[#0057FF] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base relative overflow-hidden border-2 border-[#247EFF] hover:border-[#0057FF]"
            style={{ 
              fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {/* Hand-drawn/spray-paint effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/20 via-transparent to-[#247EFF]/20 opacity-50"></div>
            <span className="relative z-10">
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Getting Blueprint...
                </div>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-label="Checkmark icon" />
                  Get the Blueprint
                </>
              )}
            </span>
          </Button>
        </div>
        
        {/* Quick line under the button */}
        <div className="text-center mt-3">
          <p 
            className="text-sm font-semibold text-[#247EFF] italic"
            style={{ 
              fontFamily: "'IBM Plex Sans', 'Courier New', monospace"
            }}
          >
            Don't miss your shot—real wins start here.
          </p>
        </div>
        
        <div className="flex items-center justify-center text-xs sm:text-sm text-brand-black dark:text-brand-cream space-x-4 pt-2">
          <div className="flex items-center">
            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#247EFF] mr-1" aria-label="Check mark" />
            <span>Free blueprint</span>
          </div>
          <div className="flex items-center">
            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#247EFF] mr-1" aria-label="Check mark" />
            <span>No spam, just value</span>
          </div>
          <div className="flex items-center">
            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#247EFF] mr-1" aria-label="Check mark" />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </form>
    </CardContent>
  );
};
