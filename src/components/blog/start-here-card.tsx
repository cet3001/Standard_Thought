
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, TrendingUp, Banknote } from "lucide-react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const StartHereCard = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="relative">
      {/* Urban Background with texture */}
      <div 
        className="absolute inset-0 rounded-none opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: textureImageUrl ? `url(${textureImageUrl})` : `
            radial-gradient(circle at 20% 30%, rgba(36, 126, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.08) 50%, transparent 70%)
          `
        }}
      />
      
      <Card className={`relative bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50 dark:from-yellow-300 dark:via-yellow-200 dark:to-yellow-100 backdrop-blur-sm border-none rounded-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform rotate-1 hover:rotate-0
        /* Post-it note shadow effect */
        shadow-[4px_6px_12px_rgba(0,0,0,0.15),_inset_0_1px_0_rgba(255,255,255,0.4)]
        /* Slight paper texture */
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-yellow-50/30 before:to-yellow-100/20 before:pointer-events-none
        /* Post-it note fold effect - top right corner */
        after:content-[''] after:absolute after:top-0 after:right-0 after:w-8 after:h-8 after:bg-gradient-to-bl after:from-yellow-300/80 after:to-transparent after:shadow-sm
      `}
      style={{ 
        // Subtle paper texture
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(255,193,7,0.1) 1px, transparent 1px),
          radial-gradient(circle at 80% 20%, rgba(255,193,7,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px, 35px 35px'
      }}>
        <CardContent className="p-8 pt-12 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 rounded-full mb-6 shadow-xl border-2 border-orange-300">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-3xl font-bold text-[#0A0A0A] mb-3"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  letterSpacing: '1px',
                  textShadow: '2px 2px 0px rgba(255,140,0,0.3)'
                }}>
              🚀 Start Here
            </h3>
            <p className="text-[#0A0A0A]/90 text-base leading-relaxed max-w-md mx-auto font-semibold"
               style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              New to the hustle? These moves will get you from zero to paid. <span className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] bg-clip-text text-transparent font-bold text-lg shadow-lg"
               style={{ 
                 fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                 textShadow: '1px 1px 2px rgba(255,215,0,0.8)',
                 WebkitTextStroke: '0.5px rgba(255,140,0,0.3)'
               }}>Real street knowledge</span>, no fluff.
            </p>
          </div>

          <div className="space-y-5">
            <a 
              href="/ai-side-hustles-guide" 
              className="block p-5 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 group border border-[#247EFF]/20 shadow-md hover:shadow-lg transform hover:scale-[1.02] hover:border-[#247EFF]/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#247EFF]/30 to-[#247EFF]/20 rounded-lg flex items-center justify-center border border-[#247EFF]/30 shadow-md">
                    <span className="text-xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace", letterSpacing: '0.5px' }}>
                      AI Hustles That Pay 🔥
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/70 font-medium">
                      Turn AI tools into cold hard cash
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#247EFF] group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>

            <a 
              href="/free-investing-guide" 
              className="block p-5 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 group border border-green-500/20 shadow-md hover:shadow-lg transform hover:scale-[1.02] hover:border-green-500/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 shadow-md">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace", letterSpacing: '0.5px' }}>
                      Zero to Investment Boss 📊
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/70 font-medium">
                      Start building wealth with $0 down
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>

            <a 
              href="/wealth-building-strategies" 
              className="block p-5 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 group border border-yellow-500/20 shadow-md hover:shadow-lg transform hover:scale-[1.02] hover:border-yellow-500/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/30 to-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30 shadow-md">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace", letterSpacing: '0.5px' }}>
                      Long-Term Wealth Game 🏛️
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/70 font-medium">
                      Build generational wealth strategies
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-600 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-orange-300/40 text-center relative">
            {/* Handwritten style text */}
            <p className="text-lg text-[#0A0A0A]/90 transform -rotate-1"
               style={{ 
                 fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                 textShadow: '1px 1px 0px rgba(255,140,0,0.4)',
                 letterSpacing: '0.5px'
               }}>
              ⬆️ Pick your lane and secure the bag 💸
            </p>
            {/* Underline scribble */}
            <div className="mx-auto w-48 h-2 mt-1 opacity-70"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3Cpath d='M5 15 Q 30 5, 60 12 T 120 8 T 195 13' stroke='%23FF8C00' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                   backgroundSize: 'contain',
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center'
                 }}>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartHereCard;
