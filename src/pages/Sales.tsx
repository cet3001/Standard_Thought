
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Zap, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/email-utils";

const Sales = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
      await subscribeToNewsletter(email, 'builder-access');
      
      setEmail("");
      toast({
        title: "You're locked in! 🔥",
        description: "You'll be first to know when we drop the real blueprint. Check your email for confirmation."
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
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#247EFF]/10 animate-float"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#D4AF37]/20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center bg-[#247EFF]/10 rounded-full px-6 py-3 mb-6">
                <Lock className="mr-2 h-5 w-5 text-[#247EFF]" />
                <span className="text-lg font-semibold text-[#247EFF]">Builders Only</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
              The Real <span className="text-[#247EFF]">Blueprint</span> Is Coming
            </h1>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed mb-8">
              For the ones who grind while others sleep. If you're tired of free game that don't hit, 
              we're building something different. First come, first served—no handouts, just results.
            </p>
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
                    Don't wait—tap in now. When we drop the real blueprint, mentorship, and community access, 
                    you'll be first in line. This isn't for everyone, and that's the point.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email (no spam, just the drop)"
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
                  Real builders only. We don't do spam or fake hype.
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
