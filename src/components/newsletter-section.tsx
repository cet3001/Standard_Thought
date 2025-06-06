
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle, Download, FileText } from "lucide-react";
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
        description: "Check your inbox for your welcome email with your FREE playbook PDF attachment!"
      });

      // Reset after 5 seconds to show the success longer
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
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
                  Get Your Free <span className="text-[#247EFF]">Playbook</span> Now
                </h2>
                <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80">
                  Instant access to the complete playbook + weekly "Hustle Notes" with unfiltered lessons from builders who started with nothing but grit.
                </p>
              </div>

              {/* Enhanced Playbook Showcase */}
              <div className="bg-gradient-to-br from-[#247EFF]/10 to-[#0057FF]/5 border border-[#247EFF]/20 rounded-3xl p-8 mb-8 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#247EFF] rounded-2xl p-4 mr-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#247EFF] mb-1">FREE Playbook PDF</h3>
                    <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-left">
                      Delivered instantly to your inbox
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-[#247EFF] mb-2">📖 What's Inside:</h4>
                    <ul className="text-[#0A0A0A]/70 dark:text-brand-cream/70 space-y-1">
                      <li>• The exact blueprint successful builders use</li>
                      <li>• From-scratch strategies that actually work</li>
                      <li>• Mindset shifts that change everything</li>
                      <li>• Real case studies and examples</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#247EFF] mb-2">📧 Plus Weekly Bonuses:</h4>
                    <ul className="text-[#0A0A0A]/70 dark:text-brand-cream/70 space-y-1">
                      <li>• Behind-the-scenes builder stories</li>
                      <li>• Raw lessons from real failures</li>
                      <li>• Exclusive frameworks and tools</li>
                      <li>• No fluff, just actionable insights</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-5 w-5" />
                  <Input 
                    type="email" 
                    placeholder="Enter your email for instant playbook access" 
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
                  className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-8 py-6 rounded-2xl whitespace-nowrap transition-all duration-300 hover:scale-105 disabled:opacity-70 flex items-center gap-2"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Download className="h-5 w-5" />
                      Get Free Playbook
                    </>
                  )}
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-[#247EFF]" />
                  <span>10,000+ builders already in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-[#247EFF]" />
                  <span>PDF delivered instantly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-[#247EFF]" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </>
          ) : (
            // Enhanced Success State
            <div className="py-12 animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-br from-[#247EFF] to-[#0057FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#247EFF]/30">
                <CheckCircle size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#247EFF]">Playbook Sent! Check Your Inbox 📧</h3>
              <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-4">
                Your FREE playbook PDF is attached to your welcome email. Download it now and start building!
              </p>
              <div className="bg-[#247EFF]/10 border border-[#247EFF]/20 rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-lg font-semibold text-[#247EFF] mb-2">Next Steps:</p>
                <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                  1. Check your email (including spam)<br/>
                  2. Download the playbook PDF<br/>
                  3. Start implementing immediately
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
