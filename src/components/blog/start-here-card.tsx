
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, TrendingUp, Banknote } from "lucide-react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const StartHereCard = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="relative">
      {/* Urban Background with texture */}
      <div 
        className="absolute inset-0 rounded-none opacity-40 bg-cover bg-center"
        style={{
          backgroundImage: textureImageUrl ? `url(${textureImageUrl})` : `
            radial-gradient(circle at 20% 30%, rgba(36, 126, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.2) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%)
          `
        }}
      />
      
      <Card className={`relative bg-white/95 dark:bg-brand-black/90 backdrop-blur-sm border-none rounded-none overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300
        /* Torn paper effect - top edge */
        before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-3 before:bg-white/95 dark:before:bg-brand-black/90
        before:shadow-[0_4px_8px_rgba(0,0,0,0.25)] before:z-10
        before:clip-path-[polygon(0%_0%,_3%_100%,_8%_30%,_12%_100%,_18%_20%,_23%_100%,_28%_40%,_33%_100%,_38%_10%,_43%_100%,_48%_50%,_53%_100%,_58%_25%,_63%_100%,_68%_35%,_73%_100%,_78%_15%,_83%_100%,_88%_45%,_93%_100%,_97%_60%,_100%_0%)]
        /* Notebook margin line */
        after:content-[''] after:absolute after:top-0 after:left-8 after:bottom-0 after:w-px after:bg-[#FF6B6B]/40
        /* Paper texture with ruled lines */
        shadow-2xl transform-gpu border-l-4 border-l-[#FF6B6B]/30
      `}
      style={{ 
        // Add subtle paper texture with horizontal ruled lines
        backgroundImage: `
          linear-gradient(90deg, rgba(255,107,107,0.3) 1px, transparent 1px),
          linear-gradient(180deg, transparent 40px, rgba(200,200,200,0.4) 40px, rgba(200,200,200,0.4) 41px, transparent 41px)
        `,
        backgroundSize: '32px 100%, 100% 41px',
        backgroundPosition: '32px 0, 0 20px'
      }}>
        <CardContent className="p-8 pt-12 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-full mb-6 shadow-xl border-2 border-[#FFD700]/30">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-3"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  letterSpacing: '1px',
                  textShadow: '2px 2px 0px rgba(255,215,0,0.3)'
                }}>
              🏆 Start Here
            </h3>
            <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 text-base leading-relaxed max-w-md mx-auto font-semibold"
               style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              New to the hustle? These moves will get you from zero to paid. <span className="text-[#247EFF] font-bold">Real street knowledge</span>, no fluff.
            </p>
          </div>

          <div className="space-y-5">
            <a 
              href="/ai-side-hustles-guide" 
              className="block p-5 bg-white/90 dark:bg-brand-black/70 backdrop-blur-sm rounded-lg hover:bg-white/95 dark:hover:bg-brand-black/85 transition-all duration-300 group border border-[#247EFF]/20 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover:border-[#247EFF]/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#247EFF]/30 to-[#247EFF]/20 rounded-lg flex items-center justify-center border border-[#247EFF]/30 shadow-md">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] dark:text-brand-cream text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace", letterSpacing: '0.5px' }}>
                      AI Hustles That Pay 💰
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 font-medium">
                      Turn AI tools into cold hard cash
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#247EFF] group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>

            <a 
              href="/free-investing-guide" 
              className="block p-5 bg-white/90 dark:bg-brand-black/70 backdrop-blur-sm rounded-lg hover:bg-white/95 dark:hover:bg-brand-black/85 transition-all duration-300 group border border-green-500/20 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover:border-green-500/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 shadow-md">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] dark:text-brand-cream text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace", letterSpacing: '0.5px' }}>
                      Zero to Investment Boss 📈
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 font-medium">
                      Start building wealth with $0 down
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>

            <a 
              href="/wealth-building-strategies" 
              className="block p-5 bg-white/90 dark:bg-brand-black/70 backdrop-blur-sm rounded-lg hover:bg-white/95 dark:hover:bg-brand-black/85 transition-all duration-300 group border border-yellow-500/20 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover:border-yellow-500/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/30 to-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30 shadow-md">
                    <span className="text-xl">💎</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] dark:text-brand-cream text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace", letterSpacing: '0.5px' }}>
                      Long-Term Wealth Game 🏛️
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 font-medium">
                      Build generational wealth strategies
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-600 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#247EFF]/30 text-center relative">
            {/* Handwritten style text */}
            <p className="text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 transform -rotate-1"
               style={{ 
                 fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                 textShadow: '1px 1px 0px rgba(255,215,0,0.3)',
                 letterSpacing: '0.5px'
               }}>
              ⬆️ Pick your lane and secure the bag 💰
            </p>
            {/* Underline scribble */}
            <div className="mx-auto w-48 h-2 mt-1 opacity-60"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3Cpath d='M5 15 Q 30 5, 60 12 T 120 8 T 195 13' stroke='%23FFD700' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
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
