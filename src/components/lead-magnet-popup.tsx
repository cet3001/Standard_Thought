import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const LeadMagnetPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would typically submit to your email service
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You'll receive the blueprint in your inbox shortly.",
      });
      
      setIsVisible(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div 
        className="relative max-w-md w-full bg-[#0A0A0A] rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)',
          border: '2px solid transparent',
          backgroundClip: 'padding-box',
        }}
      >
        {/* Pearlescent border */}
        <div 
          className="absolute inset-0 rounded-lg opacity-60"
          style={{
            background: 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FFED4E)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 3s ease-in-out infinite',
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'subtract',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'subtract',
          }}
        />

        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-brand-cream hover:text-[#FFD700] hover:bg-brand-cream/10"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="relative p-8 text-center">
          {/* Logo */}
          <div className="mb-6">
            <div 
              className="w-20 h-20 mx-auto rounded-lg flex items-center justify-center text-2xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#0A0A0A'
              }}
            >
              <div className="relative">
                <div 
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs"
                  style={{ color: '#0A0A0A' }}
                >
                  👑
                </div>
                ST
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 
            className="text-3xl font-bold mb-3"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.05em'
            }}
          >
            STANDARD
          </h2>
          <h2 
            className="text-3xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.05em'
            }}
          >
            THOUGHT
          </h2>

          {/* Tagline */}
          <p className="text-brand-cream/90 text-sm mb-8 leading-relaxed">
            Get the moves that actually build wealth—no theory, just action.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-brand-cream/10 border-brand-cream/20 text-brand-cream placeholder:text-brand-cream/60 focus:border-[#FFD700] focus:ring-[#FFD700]/20"
              disabled={isSubmitting}
            />
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-semibold py-3 text-[#0A0A0A] transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)'
              }}
            >
              {isSubmitting ? 'Getting Blueprint...' : 'Get the Blueprint'}
            </Button>
          </form>

          {/* Blueprint visual hint */}
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20 pointer-events-none">
            <svg 
              viewBox="0 0 200 60" 
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))' }}
            >
              <g stroke="#FFD700" strokeWidth="0.5" fill="none">
                <rect x="20" y="20" width="30" height="20" />
                <rect x="55" y="15" width="25" height="30" />
                <rect x="85" y="25" width="20" height="15" />
                <rect x="110" y="10" width="35" height="35" />
                <rect x="150" y="20" width="25" height="20" />
                <line x1="20" y1="40" x2="50" y2="40" />
                <line x1="55" y1="45" x2="80" y2="45" />
                <line x1="110" y1="45" x2="145" y2="45" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetPopup;