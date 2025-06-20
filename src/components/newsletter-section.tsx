
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle, Download, Mail } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    try {
      // Insert subscriber into database
      const { data: subscriber, error } = await supabase
        .from("Subscribers")
        .insert([
          {
            email: email,
            name: name || null,
            unsubscribe_token: crypto.randomUUID(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Subscription error:", error);
        toast.error("Failed to subscribe. Please try again.");
        return;
      }

      // Send notification email to admin
      try {
        const { error: notificationError } = await supabase.functions.invoke('notify-new-subscriber', {
          body: {
            subscriberId: subscriber.id,
            email: subscriber.email,
            name: subscriber.name,
            created_at: subscriber.created_at
          }
        });

        if (notificationError) {
          console.error("Notification error:", notificationError);
          // Don't show error to user as subscription was successful
        }
      } catch (notificationError) {
        console.error("Failed to send notification:", notificationError);
        // Don't show error to user as subscription was successful
      }

      toast.success("Blueprint sent! Check your email for your free PDF.");
      setEmail("");
      setName("");
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      className="py-20 bg-gradient-to-br from-[#247EFF]/5 via-brand-cream to-[#247EFF]/10 dark:from-[#247EFF]/10 dark:via-brand-black dark:to-[#247EFF]/5 relative overflow-hidden"
      data-section="newsletter"
      aria-labelledby="newsletter-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#247EFF]/20 via-transparent to-[#247EFF]/10"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <Download className="w-8 h-8 text-[#247EFF] mr-3" aria-hidden="true" />
              <h2 id="newsletter-heading" className="text-4xl md:text-5xl font-bold text-[#0A0A0A] dark:text-brand-cream">
                Get Your Free Wealth Building Blueprint
              </h2>
            </div>
            
            {/* New bulleted list */}
            <div className="max-w-2xl mx-auto mb-8">
              <ul className="text-left text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 space-y-3" role="list">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#247EFF] mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  Step-by-step AI side hustle guide for beginners
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#247EFF] mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  Credit building moves that actually work
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#247EFF] mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  Blueprint for turning small wins into generational progress
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#247EFF] mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  Weekly "Level Up Notes" direct to your inbox
                </li>
              </ul>
            </div>
            
            <p className="text-xl md:text-2xl text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-8 leading-relaxed">
              The same blueprint that helped 500+ people go from broke to <strong>securing the bag</strong> consistently. 
              <span className="text-[#247EFF] font-semibold block mt-2">Instant PDF delivery + weekly "Level Up Notes"</span>
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12" role="group" aria-label="Blueprint features">
            {[
              { icon: "💰", title: "Money Mindset Shift", desc: "Break the broke mentality that keeps you stuck in survival mode" },
              { icon: "🎯", title: "Goal Stacking Framework", desc: "Turn big dreams into daily wins that build momentum" },
              { icon: "📈", title: "Wealth Building Roadmap", desc: "Step-by-step path from paycheck to paycheck to generational wealth" }
            ].map((item, index) => (
              <div key={index} className="bg-white/50 dark:bg-brand-black/30 backdrop-blur-sm p-6 rounded-2xl border border-[#247EFF]/10 hover:border-[#247EFF]/30 transition-all duration-300">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream mb-2">{item.title}</h3>
                <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4" role="form" aria-labelledby="newsletter-heading">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Your first name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-12 bg-white/80 dark:bg-brand-black/50 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl text-base"
                  aria-label="Your first name (optional)"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-5 w-5" aria-hidden="true" />
                <Input
                  type="email"
                  placeholder="Enter your email to start leveling up"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 pl-12 bg-white/80 dark:bg-brand-black/50 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl text-base"
                  disabled={isLoading}
                  aria-label="Your email address (required)"
                  aria-describedby="email-help"
                />
              </div>
              <div id="email-help" className="sr-only">
                We'll send your free blueprint to this email address
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 disabled:opacity-70"
                disabled={isLoading}
                aria-describedby="submit-help"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" aria-hidden="true"></div>
                    <span>Sending Blueprint...</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                    Get Free Blueprint
                  </div>
                )}
              </Button>
              <div id="submit-help" className="sr-only">
                Click to receive your free wealth building blueprint PDF
              </div>
            </form>
            
            <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60" role="group" aria-label="Newsletter benefits">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" aria-hidden="true" />
                Instant delivery
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" aria-hidden="true" />
                No spam, just game
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" aria-hidden="true" />
                Unsubscribe anytime
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-[#0A0A0A]/60 dark:text-brand-cream/60 text-sm mb-4">
              Join 10,000+ builders who are already leveling up financially
            </p>
            <div className="flex justify-center items-center space-x-2" role="group" aria-label="Member avatars">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#247EFF] to-[#0057FF] border-2 border-white dark:border-brand-black flex items-center justify-center text-white text-xs font-bold"
                    aria-label={`Member avatar ${i}`}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-[#0A0A0A]/60 dark:text-brand-cream/60 text-sm">and thousands more securing the bag...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
