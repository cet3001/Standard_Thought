
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import OptimizedImage from "@/components/optimized-image";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useGuideDownload } from "@/hooks/use-guide-download";
import { subscribeToNewsletter } from "@/lib/email-utils";

const FeaturedGuideCard = () => {
  const { downloadGuide, isDownloading } = useGuideDownload();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to download the guide.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    
    try {
      await subscribeToNewsletter(email);
      await downloadGuide('10k-starter-blueprint.pdf', email);
      
      toast({
        title: "Success! 🎉",
        description: "You've been subscribed and your guide is downloading now!",
      });
      
      setEmail("");
    } catch (error) {
      console.error('Download process error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <Card className="hover:shadow-xl group relative overflow-hidden bg-gradient-to-br from-white/95 to-white/90 dark:from-[#0A0A0A]/95 dark:to-[#0A0A0A]/90 backdrop-blur-sm border border-[#0A0A0A]/10 dark:border-brand-cream/10 transition-all duration-300">
      {/* "FREE" Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span 
          className="text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}
        >
          FREE
        </span>
      </div>

      <CardHeader className="p-0">
        {/* Guide Cover Image */}
        <div className="relative overflow-hidden rounded-t-lg h-40 md:h-44 flex items-center justify-center">
          <OptimizedImage
            src="/lovable-uploads/b4e3b459-4253-40a2-bc9a-74ec02d85e18.png"
            alt="The $10K Starter Blueprint - Premium Investing Playbook Cover"
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2"
            priority={true}
          />
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-[#0A0A0A] dark:text-brand-cream mb-2">
          <HeaderHierarchy level={3} className="mb-0 text-base md:text-lg leading-tight">
            The $10K Starter Blueprint
          </HeaderHierarchy>
        </CardTitle>

        <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm leading-relaxed mb-4">
          Step-by-step investing for first-gen hustlers and underestimated creatives.
        </CardDescription>

        {/* Email Input + Download CTA */}
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-sm"
            disabled={isSubscribing || isDownloading}
          />
          <Button 
            onClick={handleDownload}
            disabled={isSubscribing || isDownloading || !email}
            className="w-full hover:scale-105 text-black min-h-[40px] touch-manipulation font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-0"
            style={{ 
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}
            aria-label="Download The $10K Starter Blueprint for free"
          >
            {isSubscribing || isDownloading ? (
              <div className="flex items-center">
                <div className="w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                {isSubscribing ? 'Getting Ready...' : 'Downloading...'}
              </div>
            ) : (
              'Download Free'
            )}
          </Button>
        </div>
      </CardContent>

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
    </Card>
  );
};

export default FeaturedGuideCard;
