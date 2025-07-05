import { useState, useEffect } from "react";
import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LeadMagnetPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Add email submission logic here
    setTimeout(() => {
      setIsVisible(false);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div 
        className="relative max-w-md w-full p-8 rounded-xl shadow-2xl transform transition-all duration-300 animate-scale-in"
        style={{
          background: 'rgba(128, 128, 128, 0.15)',
          backdropFilter: 'blur(20px)',
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.15), rgba(128, 128, 128, 0.15)), linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'content-box, border-box',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-brand-black/60 hover:text-brand-black dark:text-brand-cream/60 dark:hover:text-brand-cream transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* ST Logo */}
        <div className="text-center mb-4">
          <div 
            className="text-3xl font-black inline-block px-4 py-2 rounded-lg"
            style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ST
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-6">
          <h2 
            className="text-lg font-bold leading-tight"
            style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Get the moves that actually build wealth—no theory, just action.
          </h2>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-md" style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite',
              padding: '2px'
            }}>
              <div className="h-full w-full bg-white dark:bg-brand-black rounded-md"></div>
            </div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="relative z-10 bg-transparent border-0 focus:ring-0 text-brand-black dark:text-brand-cream placeholder:text-brand-black/60 dark:placeholder:text-brand-cream/60"
              required
            />
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brand-black/40 dark:text-brand-cream/40 z-10" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-lg font-black border-0 relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite',
              color: '#000',
              fontFamily: "'Kalam', 'Comic Neue', cursive"
            }}
          >
            {isSubmitting ? "Getting Blueprint..." : "Get Blueprint"}
          </Button>
        </form>

        {/* Glass texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,1)_1px,_transparent_0)] bg-[length:20px_20px] pointer-events-none rounded-xl"></div>
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

export default LeadMagnetPopup;