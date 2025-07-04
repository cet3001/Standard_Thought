import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Zap, Users, Download, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/email-utils";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Sales = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      await subscribeToNewsletter(email);
      
      setEmail("");
      toast({
        title: "You're locked in! 🔥",
        description: "Check your inbox for your welcome email and be first to know when we drop the real blueprint."
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Enhanced Urban Background with Better Texture Visibility */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Urban grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.8)_1px,_transparent_0)] bg-[length:8px_8px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_46%,_rgba(0,0,0,0.2)_47%,_rgba(0,0,0,0.2)_53%,_transparent_54%)] bg-[length:4px_4px] opacity-60"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#247EFF]/20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Subtle graffiti tags background */}
        <div className="absolute top-10 right-10 transform rotate-12 opacity-[0.08] pointer-events-none" aria-hidden="true">
          <div 
            className="text-[#247EFF] text-6xl font-black"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', cursive",
              textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
              filter: 'blur(0.5px)'
            }}
          >
            WEALTH BUILDER
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-brand-black dark:text-brand-cream relative">
              Unlock Your <span 
                className="text-[#FFD700] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              >
                Urban Wealth
                {/* Pearlescent overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
                  style={{
                    background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                    backgroundSize: '200% 100%',
                    mixBlendMode: 'overlay'
                  }}
                />
              </span><br />
              <span 
                className="text-[#247EFF] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, #247EFF, #4A9FFF, #0057FF, #247EFF)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              >
                Blueprint
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-brand-black dark:text-brand-cream leading-relaxed px-4">
              The official spot for free and premium guides, playbooks, and tools to help you stack bread, fix your credit, and build generational wealth—no trust fund needed.
            </p>

            {/* Single Primary CTA */}
            <div className="flex justify-center mb-12 px-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
                aria-label="Get your free wealth building blueprint"
              >
                <Download className="mr-3 h-5 w-5 sm:h-6 sm:w-6" aria-label="Download icon" />
                <span 
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                    transform: 'rotate(-1deg)',
                    display: 'inline-block'
                  }}
                >
                  Get Your Blueprint
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lock In Your Spot Section */}
      <section className="py-24 bg-white/90 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm border-[#247EFF]/20 rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <Zap className="mx-auto h-16 w-16 text-[#247EFF] mb-4" />
                  <h2 className="text-3xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
                    Lock In Your Spot
                  </h2>
                  <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70">
                    Don't wait—tap in now. You'll get an instant welcome email plus be first in line when we drop the real blueprint, mentorship, and community access.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email (instant welcome email + first access)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-4 rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] text-lg bg-white/80 dark:bg-brand-black/80 text-[#0A0A0A] dark:text-brand-cream"
                    required
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#D4AF37]/30 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-105 disabled:opacity-70"
                  >
                    {isLoading ? "Locking You In..." : "Get the Drop First"}
                  </Button>
                </form>

                <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 mt-4">
                  Real builders only. Instant welcome email, then first access to everything.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Coming for the Real Ones Section */}
      <section className="py-24 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">What's Coming for the Real Ones</h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
              No theory, no fluff. Just the exact blueprint, connections, and mindset that turn grind into generational wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔥",
                title: "The Real Blueprint",
                description: "Step-by-step playbooks from people who actually built from nothing. No guessing, no theory—just what works."
              },
              {
                icon: "🤝",
                title: "Direct Access",
                description: "1-on-1 time with builders who've been where you're going. Real mentorship, not just motivational talks."
              },
              {
                icon: "⚡",
                title: "Inner Circle",
                description: "Connect with serious builders, share real strategies, and get put on to opportunities before they go public."
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-[#247EFF]/20 rounded-3xl p-8 text-center transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A0A0A] dark:text-brand-cream">{feature.title}</h3>
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/90 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#0A0A0A] dark:text-brand-cream">Why Get In Early?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-[#247EFF]">First Access, Best Price</h3>
                <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                  Early builders get everything at the lowest price it'll ever be. Once we prove what we're building, prices go up.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Shape What We Build</h3>
                <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                  Your input matters. Help us build exactly what real entrepreneurs need, not what sounds good in theory.
                </p>
              </div>
            </div>

            <div className="bg-[#247EFF]/5 rounded-3xl p-8 border border-[#247EFF]/20">
              <Users className="mx-auto h-12 w-12 text-[#247EFF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
                "I went from broke to six figures in 8 months using these exact strategies."
              </h3>
              <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                - Marcus, First-Gen Builder
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sales;
