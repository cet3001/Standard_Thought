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
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div 
        className="relative w-full max-w-sm mx-auto rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0A0A0A 100%)',
          aspectRatio: '3/4',
          maxHeight: '90vh'
        }}
      >
        {/* Pearlescent border */}
        <div 
          className="absolute inset-0 rounded-lg"
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
          className="absolute top-4 right-4 z-10 text-brand-cream/60 hover:text-[#FFD700] hover:bg-transparent"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="relative h-full flex flex-col">
          {/* Top Section - Logo and Title */}
          <div className="flex-1 flex flex-col items-center justify-center px-8 pt-12 pb-6">
            {/* Logo */}
            <div className="mb-8">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center text-xl font-bold relative"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#0A0A0A'
                }}
              >
                <div 
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-sm"
                  style={{ color: '#0A0A0A' }}
                >
                  👑
                </div>
                ST
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h2 
                className="text-4xl font-bold tracking-wider mb-2"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                STANDARD
              </h2>
              <h2 
                className="text-4xl font-bold tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                THOUGHT
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-brand-cream/80 text-center text-sm leading-relaxed px-4 mb-8">
              Get the moves that actually build wealth—no theory, just action.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-4 px-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-brand-cream/5 border-brand-cream/20 text-brand-cream placeholder:text-brand-cream/50 focus:border-[#FFD700] focus:ring-[#FFD700]/20 h-12"
                disabled={isSubmitting}
              />
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-semibold py-3 h-12 text-[#0A0A0A] transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  boxShadow: '0 4px 20px rgba(255, 215, 0, 0.2)'
                }}
              >
                {isSubmitting ? 'Getting Blueprint...' : 'Get the Blueprint'}
              </Button>
            </form>
          </div>

          {/* Bottom Section - Blueprint */}
          <div className="h-48 relative overflow-hidden">
            <svg 
              viewBox="0 0 300 180" 
              className="w-full h-full absolute inset-0"
              style={{ 
                filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.3))',
                opacity: 0.7
              }}
            >
              <g stroke="#FFD700" strokeWidth="1" fill="none">
                {/* Main floor plan outline */}
                <rect x="50" y="40" width="200" height="120" />
                
                {/* Interior walls and rooms */}
                <line x1="120" y1="40" x2="120" y2="160" />
                <line x1="180" y1="40" x2="180" y2="100" />
                <line x1="50" y1="100" x2="120" y2="100" />
                <line x1="180" y1="100" x2="250" y2="100" />
                <line x1="120" y1="130" x2="250" y2="130" />
                
                {/* Doors */}
                <line x1="80" y1="40" x2="100" y2="40" strokeWidth="2" />
                <line x1="140" y1="40" x2="160" y2="40" strokeWidth="2" />
                <line x1="120" y1="85" x2="120" y2="95" strokeWidth="2" />
                <line x1="180" y1="85" x2="180" y2="95" strokeWidth="2" />
                
                {/* Windows */}
                <rect x="48" y="60" width="4" height="15" fill="#FFD700" opacity="0.3" />
                <rect x="48" y="90" width="4" height="15" fill="#FFD700" opacity="0.3" />
                <rect x="248" y="60" width="4" height="15" fill="#FFD700" opacity="0.3" />
                <rect x="248" y="120" width="4" height="15" fill="#FFD700" opacity="0.3" />
                
                {/* Architectural details */}
                <circle cx="70" cy="70" r="3" fill="none" />
                <circle cx="90" cy="70" r="3" fill="none" />
                <circle cx="200" cy="70" r="3" fill="none" />
                <circle cx="220" cy="70" r="3" fill="none" />
                
                {/* Dimension lines */}
                <line x1="45" y1="35" x2="255" y2="35" strokeWidth="0.5" opacity="0.6" />
                <line x1="45" y1="30" x2="45" y2="40" strokeWidth="0.5" opacity="0.6" />
                <line x1="255" y1="30" x2="255" y2="40" strokeWidth="0.5" opacity="0.6" />
                
                <line x1="40" y1="45" x2="40" y2="155" strokeWidth="0.5" opacity="0.6" />
                <line x1="35" y1="45" x2="45" y2="45" strokeWidth="0.5" opacity="0.6" />
                <line x1="35" y1="155" x2="45" y2="155" strokeWidth="0.5" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetPopup;