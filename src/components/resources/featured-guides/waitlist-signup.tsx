
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
    <div className="text-center max-w-md mx-auto">
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
          className="w-full min-h-[44px] touch-manipulation font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl border-0 hover:scale-105 text-black relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}
        >
          {isJoiningWaitlist ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
              Joining Waitlist...
            </div>
          ) : (
            'Join Waitlist'
          )}
        </Button>
      </div>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default WaitlistSignup;
