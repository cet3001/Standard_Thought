
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTASectionProps {
  isVisible: boolean;
  scrollToNewsletter: () => void;
}

const FinalCTASection = ({ isVisible, scrollToNewsletter }: FinalCTASectionProps) => {
  return (
    <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Main CTA Box */}
      <div className="relative max-w-2xl mx-auto p-8 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl border border-white/20 dark:border-gray-700/30 shadow-2xl">
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlRmlsdGVyIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+')] pointer-events-none rounded-xl"></div>
        
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-brand-black dark:text-brand-cream font-ibm-plex-mono leading-tight">
          You made it this far for a reason. Don't scroll past your own shift.
        </h2>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl mb-8 text-brand-black/80 dark:text-brand-cream/80 leading-relaxed font-medium">
          Start from soul. Build from vision. Join the ones breaking cycles—not just chasing bags.
        </p>
        
        {/* CTA Button */}
        <Button
          onClick={scrollToNewsletter}
          size="lg"
          className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base border-0 relative overflow-hidden group"
        >
          <span 
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
              textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
              transform: 'rotate(-1deg)',
              display: 'inline-block'
            }}
          >
            I'm Built For This
          </span>
          <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-6 h-6 transform rotate-45 rounded-sm opacity-20" style={{
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/10 transform -rotate-12 rounded-full opacity-40"></div>
      </div>
      
      <style>{`
        @keyframes pearlescent {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default FinalCTASection;
