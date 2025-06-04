
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";
import { subscribeToNewsletter } from "@/lib/email-utils";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
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
      
      setIsSubmitted(true);
      setEmail("");
      toast({
        title: "Welcome to the Movement! 🎉",
        description: "You'll receive exclusive insights and stories from the Standard Thought community."
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
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
    <section className="py-24 bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-[#247EFF]/20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 rounded-2xl bg-[#247EFF]/30 animate-float" style={{
          animationDelay: '1s'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
                  Tap In With The <span className="text-[#247EFF]">Movement</span>
                </h2>
                <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80">Real moves, real stories, real results. Get the playbook, behind-the-scenes gems, and unfiltered lessons—straight from the builders who started with nothing but grit.</p>
              </div>

              {/* Incentive */}
              <div className="bg-[#247EFF]/10 border border-[#247EFF]/20 rounded-3xl p-6 mb-8 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2 text-[#247EFF]">Weekly Hustle Notes:</h3>
                <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                  "Get the weekly 'Hustle Note'—raw lessons, builder interviews, and real-life playbooks you won't find anywhere else."
                </p>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-5 w-5" />
                  <Input 
                    type="email" 
                    placeholder="Enter your email for the realest inbox on the internet" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="pl-10 py-6 rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] bg-white/80 dark:bg-brand-black/80 text-[#0A0A0A] dark:text-brand-cream placeholder:text-[#0A0A0A]/50 dark:placeholder:text-brand-cream/50" 
                    required 
                    disabled={isLoading}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isLoading}
                  className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-8 py-6 rounded-2xl whitespace-nowrap transition-all duration-300 hover:scale-105 disabled:opacity-70"
                >
                  {isLoading ? "Joining..." : "Get the Playbook"}
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-[#247EFF]" />
                  <span>10,000+ building with us</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-[#247EFF]" />
                  <span>Zero fluff, zero spam—just real</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-[#247EFF]" />
                  <span>Unsubscribe anytime, but why would you?</span>
                </div>
              </div>
            </>
          ) : (
            // Success State
            <div className="py-12 animate-fade-in">
              <div className="w-20 h-20 bg-[#247EFF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#247EFF]/30">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#247EFF]">Welcome to the Movement!</h3>
              <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80">
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
