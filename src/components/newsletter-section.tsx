
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
          <div className="relative backdrop-blur-sm overflow-hidden rounded-3xl p-8 border-2"
               style={{ 
                 background: 'rgba(128, 128, 128, 0.15)',
                 borderColor: 'rgba(255, 215, 0, 0.4)',
                 boxShadow: '0 20px 40px rgba(255, 215, 0, 0.15)'
               }}>
            {/* Enhanced texture backgrounds */}
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:18px_18px]"></div>
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(135deg,_transparent_46%,_rgba(0,0,0,0.6)_47%,_rgba(0,0,0,0.6)_53%,_transparent_54%)] bg-[length:8px_8px]"></div>

            {/* Blueprint Paper Background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 215, 0, 0.6) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 215, 0, 0.6) 1px, transparent 1px),
                  linear-gradient(45deg, transparent 10px, rgba(255, 215, 0, 0.05) 10px, rgba(255, 215, 0, 0.05) 20px, transparent 20px),
                  linear-gradient(-45deg, transparent 10px, rgba(255, 215, 0, 0.03) 10px, rgba(255, 215, 0, 0.03) 20px, transparent 20px)
                `,
                backgroundSize: '20px 20px, 20px 20px, 40px 40px, 40px 40px',
                backgroundPosition: '0 0, 0 0, 0 0, 20px 20px'
              }}
            />

            {/* "Members Only" Stamp Overlay with enhanced yellow pearlescent effect */}
            <div className="absolute top-6 right-6 z-10">
              <div 
                className="text-black px-4 py-2 transform -rotate-12 shadow-xl border-3 border-black"
                style={{ 
                  background: 'linear-gradient(45deg, #ffd700, #ffed4e, #fff176, #ffeb3b, #f4d03f, #f7dc6f, #fdeaa7, #ffd700)',
                  backgroundSize: '300% 300%',
                  animation: 'enhanced-pearlescent 2.5s ease-in-out infinite',
                  fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
                  fontSize: '14px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  filter: 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.4))'
                }}
              >
                <Lock className="w-4 h-4 inline mr-2" />
                Members Only
              </div>
            </div>

            <div className="text-center p-6 sm:p-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 shadow-lg"
                   style={{
                     background: 'rgba(128, 128, 128, 0.2)',
                     borderColor: 'rgba(255, 215, 0, 0.5)'
                   }}>
                <Mail className="h-8 w-8 text-[#ffd700]" aria-label="Email newsletter icon" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-brand-black dark:text-brand-cream mb-4">
                Unlock the <span className="text-[#ffd700] drop-shadow-lg">Urban Wealth Blueprint</span>
              </h2>
              
              <p className="text-base sm:text-lg text-brand-black dark:text-brand-cream max-w-2xl mx-auto leading-relaxed mb-8">
                Join 1,000+ first-gen hustlers flipping the script on money. Get weekly street-smart strategies, 
                exclusive AI side hustle plays, and real talk on breaking money trauma—straight to your inbox. 
                No spam, no fluff—just blueprints that actually work.
              </p>
            </div>
            
            {/* Enhanced Email Input Section with stronger emphasis */}
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
                            Get the Blueprint
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </form>
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
              
              <div className="flex items-center justify-center text-xs sm:text-sm text-brand-black dark:text-brand-cream space-x-4 pt-4">
                <div className="flex items-center">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#ffd700] mr-1" aria-label="Check mark" />
                  <span>Free blueprint</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#ffd700] mr-1" aria-label="Check mark" />
                  <span>No spam, just value</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#ffd700] mr-1" aria-label="Check mark" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes enhanced-pearlescent {
          0% {
            background-position: 0% 50%;
            filter: drop-shadow(0 6px 12px rgba(255, 215, 0, 0.4)) brightness(1);
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 8px 16px rgba(255, 215, 0, 0.6)) brightness(1.1);
          }
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 6px 12px rgba(255, 215, 0, 0.4)) brightness(1);
          }
        }
      `}</style>
    </section>
  );
};
