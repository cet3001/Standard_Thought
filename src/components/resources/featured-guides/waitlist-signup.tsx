
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/email-utils";

const WaitlistSignup = () => {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isJoiningWaitlist, setIsJoiningWaitlist] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSignup = async () => {
    if (!waitlistEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsJoiningWaitlist(true);
    
    try {
      await subscribeToNewsletter(waitlistEmail);
      
      toast({
        title: "You're on the list! 🎯",
        description: "We'll hit you up when new blueprints drop.",
      });
      
      setWaitlistEmail("");
    } catch (error) {
      console.error('Waitlist signup error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsJoiningWaitlist(false);
    }
  };

  return (
    <div className="text-center max-w-md mx-auto mb-16">
      <HeaderHierarchy level={3} className="mb-4 text-lg md:text-xl">
        Want first dibs? Get on the waitlist for new blueprints.
      </HeaderHierarchy>
      
      <div className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email for early access..."
          value={waitlistEmail}
          onChange={(e) => setWaitlistEmail(e.target.value)}
          className="w-full"
          disabled={isJoiningWaitlist}
        />
        <Button 
          onClick={handleWaitlistSignup}
          disabled={isJoiningWaitlist || !waitlistEmail}
          className="w-full bg-gradient-to-r from-[#247EFF] to-[#0057FF] hover:scale-105 text-white min-h-[44px] touch-manipulation font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl border-0" 
        >
          {isJoiningWaitlist ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Joining Waitlist...
            </div>
          ) : (
            'Join Waitlist'
          )}
        </Button>
      </div>
    </div>
  );
};

export default WaitlistSignup;
