
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Check, AlertCircle, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackNewsletterSignup } from "@/lib/analytics-utils";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const { textureImageUrl } = useUrbanTexture();

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
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Urban Background - Matches Hero Section */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-20 bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
              filter: 'contrast(1.3) brightness(0.7)'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/95 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/95"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="relative bg-brand-cream/90 dark:bg-brand-black/90 backdrop-blur-sm border-[#247EFF]/30 shadow-2xl overflow-hidden">
            {/* Blueprint Paper Background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #247EFF 1px, transparent 1px),
                  linear-gradient(to bottom, #247EFF 1px, transparent 1px),
                  linear-gradient(45deg, transparent 10px, rgba(36,126,255,0.05) 10px, rgba(36,126,255,0.05) 20px, transparent 20px),
                  linear-gradient(-45deg, transparent 10px, rgba(36,126,255,0.03) 10px, rgba(36,126,255,0.03) 20px, transparent 20px)
                `,
                backgroundSize: '20px 20px, 20px 20px, 40px 40px, 40px 40px',
                backgroundPosition: '0 0, 0 0, 0 0, 20px 20px'
              }}
            />

            {/* "Members Only" Stamp Overlay */}
            <div className="absolute top-6 right-6 z-10">
              <div 
                className="bg-[#247EFF]/90 text-white px-4 py-2 transform -rotate-12 shadow-lg border-2 border-[#247EFF]"
                style={{ 
                  fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
                  fontSize: '14px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                <Lock className="w-4 h-4 inline mr-2" />
                Members Only
              </div>
            </div>

            <CardHeader className="text-center p-6 sm:p-8 relative z-10">
              <div className="w-16 h-16 bg-[#247EFF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-[#247EFF]/30">
                <Mail className="h-8 w-8 text-[#247EFF]" aria-label="Email newsletter icon" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-black text-brand-black dark:text-brand-cream mb-4">
                Unlock the <span className="text-[#247EFF]">Urban Wealth Blueprint</span>
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-brand-black dark:text-brand-cream max-w-2xl mx-auto leading-relaxed">
                Join 1,000+ first-gen hustlers flipping the script on money. Get weekly street-smart strategies, 
                exclusive AI side hustle plays, and real talk on breaking money trauma—straight to your inbox. 
                No spam, no fluff—just blueprints that actually work.
              </CardDescription>
            </CardHeader>
            
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
          </Card>
        </div>
      </div>
    </section>
  );
};
