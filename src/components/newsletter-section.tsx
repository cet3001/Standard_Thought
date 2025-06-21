
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Check, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackNewsletterSignup } from "@/components/analytics";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-section="newsletter"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

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
    <section 
      data-section="newsletter" 
      className="py-16 sm:py-20 bg-gradient-to-b from-accent/10 to-white dark:from-accent/20 dark:to-brand-black"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm border-accent/30 shadow-2xl">
            <CardHeader className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-accent" aria-label="Email newsletter icon" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-black text-brand-black dark:text-brand-cream mb-4">
                Get the <span className="text-accent">Urban Wealth Blueprint</span>
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Join 1000+ first-gen entrepreneurs getting weekly strategies for building generational wealth, 
                plus exclusive AI side hustle frameworks and street-smart investing tips.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6 sm:p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email to start building..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 sm:py-4 text-sm sm:text-base border-accent/30 focus:border-accent bg-white dark:bg-brand-black/50 text-brand-black dark:text-brand-cream rounded-2xl"
                    required
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full sm:w-auto bg-gradient-to-r from-accent to-[#FFD700] text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                        Joining...
                      </div>
                    ) : (
                      <>
                        <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-label="Checkmark icon" />
                        Get My Blueprint
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-center text-xs sm:text-sm text-brand-black/60 dark:text-brand-cream/60 space-x-4">
                  <div className="flex items-center">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent mr-1" aria-label="Check mark" />
                    <span>Free wealth blueprint</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent mr-1" aria-label="Check mark" />
                    <span>No spam, just value</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent mr-1" aria-label="Check mark" />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
