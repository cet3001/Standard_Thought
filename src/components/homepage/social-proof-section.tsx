
import { Users, TrendingUp, CheckCircle } from "lucide-react";

interface SocialProofSectionProps {
  isVisible: boolean;
}

const SocialProofSection = ({ isVisible }: SocialProofSectionProps) => {
  return (
    <div className={`relative bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} overflow-hidden`}>
      
      {/* Torn Paper Effect Background */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <svg 
          viewBox="0 0 400 200" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M0,0 L400,0 L395,15 L385,25 L390,35 L380,45 L385,55 L375,65 L380,75 L370,85 L375,95 L365,105 L370,115 L360,125 L365,135 L355,145 L360,155 L350,165 L355,175 L345,185 L350,195 L400,200 L0,200 Z" 
            fill="currentColor" 
            className="text-[#247EFF]/10"
          />
          <path 
            d="M0,20 L15,25 L25,15 L35,30 L45,20 L55,35 L65,25 L75,40 L85,30 L95,45 L105,35 L115,50 L125,40 L135,55 L145,45 L155,60 L165,50 L175,65 L185,55 L195,70 L205,60 L215,75 L225,65 L235,80 L245,70 L255,85 L265,75 L275,90 L285,80 L295,95 L305,85 L315,100 L325,90 L335,105 L345,95 L355,110 L365,100 L375,115 L385,105 L395,120 L400,115 L400,200 L0,200 Z" 
            fill="currentColor" 
            className="text-[#FFD700]/15"
          />
        </svg>
      </div>

      {/* Gritty texture overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10" role="group" aria-label="Success metrics and social proof">
        
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#247EFF]/10 rounded-full flex items-center justify-center group-hover:bg-[#247EFF]/20 transition-colors">
              <Users className="h-8 w-8 text-[#247EFF]" aria-hidden="true" />
            </div>
          </div>
          <div 
            className="text-4xl md:text-5xl font-black text-[#247EFF] mb-3 transform -rotate-1 relative" 
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)' 
            }}
            aria-label="Over 1000 hustlers leveling up"
          >
            1,000+
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#FFD700] rounded-full opacity-80"></div>
          </div>
          <div className="text-[#0A0A0A]/90 dark:text-brand-cream/90 font-bold text-lg mb-1">
            hustlers leveling up
          </div>
          <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
            Real people, real progress
          </div>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <TrendingUp className="h-8 w-8 text-green-600" aria-hidden="true" />
            </div>
          </div>
          <div 
            className="text-3xl md:text-4xl font-black text-green-600 mb-3 transform rotate-1 relative" 
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)' 
            }}
            aria-label="500 to 50,000 dollars real wins no cap"
          >
            $500–$50K
            <div className="absolute -bottom-1 -left-2 w-4 h-1 bg-green-400 rounded-full opacity-70 transform -rotate-12"></div>
          </div>
          <div className="text-[#0A0A0A]/90 dark:text-brand-cream/90 font-bold text-lg mb-1">
            Real wins, no cap
          </div>
          <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
            From side hustles to serious money
          </div>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <CheckCircle className="h-8 w-8 text-orange-600" aria-hidden="true" />
            </div>
          </div>
          <div 
            className="text-4xl md:text-5xl font-black text-orange-600 mb-3 transform -rotate-2 relative" 
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)' 
            }}
          >
            83%
            <div className="absolute top-0 right-0 text-lg text-orange-400 transform rotate-12">✓</div>
          </div>
          <div className="text-[#0A0A0A]/90 dark:text-brand-cream/90 font-bold text-lg mb-1">
            broke the cycle
          </div>
          <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
            Changed their whole money game
          </div>
        </div>
      </div>

      <div className="mt-10 pt-10 border-t border-[#247EFF]/20 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 text-lg leading-8 mb-6">
            "This ain't your typical finance advice. These folks understand the struggle and give you real strategies that actually work when you're starting from zero."
          </p>
          <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
            — Keisha M., Community Member
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
