
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate newsletter signup
    setIsSubmitted(true);
    setEmail("");
    
    toast({
      title: "Welcome to the Movement! 🎉",
      description: "You'll receive exclusive insights and stories from the Standard Thought community.",
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-brand-black dark:bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-accent/20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 rounded-2xl bg-accent/30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-cream">
                  Join the <span className="text-accent">Movement</span>
                </h2>
                <p className="text-xl text-brand-cream/80">
                  Get exclusive insights, behind-the-scenes stories, and actionable strategies delivered to your inbox. 
                  No spam, just pure value from builders who've been where you're going.
                </p>
              </div>

              {/* Incentive */}
              <div className="bg-white/5 border border-accent/20 rounded-3xl p-6 mb-8 glass-effect">
                <h3 className="text-lg font-semibold mb-2 text-accent">Free Welcome Gift 🎁</h3>
                <p className="text-brand-cream/70">
                  Get instant access to "The Legacy Builder's Playbook" - 50 pages of strategies, frameworks, and mindset shifts from entrepreneurs who built million-dollar businesses from scratch.
                </p>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-cream/60 h-5 w-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 py-6 rounded-2xl border-accent/20 focus:border-accent bg-white/10 text-brand-cream placeholder:text-brand-cream/50"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-6 rounded-2xl whitespace-nowrap"
                >
                  Join Movement
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-brand-cream/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-accent" />
                  <span>10,000+ members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-accent" />
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-accent" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </>
          ) : (
            // Success State
            <div className="py-12 animate-fade-in">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <CheckCircle size={40} className="text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-accent">Welcome to the Movement!</h3>
              <p className="text-xl text-brand-cream/80">
                Check your inbox for your welcome gift. Your journey to building legacy starts now.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
