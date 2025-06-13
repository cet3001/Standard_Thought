
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

      toast.success("Playbook sent! Check your email for your free PDF.");
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
    <section className="py-20 bg-gradient-to-br from-[#247EFF]/5 via-brand-cream to-[#247EFF]/10 dark:from-[#247EFF]/10 dark:via-brand-black dark:to-[#247EFF]/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#247EFF]/20 via-transparent to-[#247EFF]/10"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <Download className="w-8 h-8 text-[#247EFF] mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] dark:text-brand-cream">
                Get Your Free Builder's Playbook
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-8 leading-relaxed">
              The exact blueprint that helped 500+ first-gen builders turn nothing into something. 
              <span className="text-[#247EFF] font-semibold block mt-2">Instant PDF delivery + weekly "Hustle Notes"</span>
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "💰", title: "Money Mindset Reset", desc: "Break poverty programming that keeps you stuck" },
              { icon: "🎯", title: "Goal Stacking System", desc: "Turn big dreams into daily wins that compound" },
              { icon: "📈", title: "Wealth Building Roadmap", desc: "Step-by-step path from survival to abundance" }
            ].map((item, index) => (
              <div key={index} className="bg-white/50 dark:bg-brand-black/30 backdrop-blur-sm p-6 rounded-2xl border border-[#247EFF]/10 hover:border-[#247EFF]/30 transition-all duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream mb-2">{item.title}</h3>
                <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Your first name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-12 bg-white/80 dark:bg-brand-black/50 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl text-base"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Enter your email for instant access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 pl-12 bg-white/80 dark:bg-brand-black/50 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl text-base"
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending PDF...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Get Free Playbook PDF
                  </div>
                )}
              </Button>
            </form>
            
            <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Instant delivery
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No spam, ever
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Unsubscribe anytime
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-[#0A0A0A]/60 dark:text-brand-cream/60 text-sm mb-4">
              Join 10,000+ builders who've already downloaded the playbook
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#247EFF] to-[#0057FF] border-2 border-white dark:border-brand-black flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-[#0A0A0A]/60 dark:text-brand-cream/60 text-sm">and thousands more...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
