
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, TrendingUp, Banknote } from "lucide-react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const StartHereCard = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="relative">
      {/* Urban Background with texture */}
      <div 
        className="absolute inset-0 rounded-none opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: textureImageUrl ? `url(${textureImageUrl})` : `
            radial-gradient(circle at 20% 30%, rgba(36, 126, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.2) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%)
          `
        }}
      />
      
      <Card className={`relative bg-white/95 dark:bg-brand-black/90 backdrop-blur-sm border-none rounded-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
        /* Torn paper effect - top edge */
        before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-3 before:bg-white/95 dark:before:bg-brand-black/90
        before:shadow-[0_4px_8px_rgba(0,0,0,0.15)] before:z-10
        before:clip-path-[polygon(0%_0%,_5%_100%,_10%_30%,_15%_100%,_20%_20%,_25%_100%,_30%_40%,_35%_100%,_40%_10%,_45%_100%,_50%_50%,_55%_100%,_60%_25%,_65%_100%,_70%_35%,_75%_100%,_80%_15%,_85%_100%,_90%_45%,_95%_100%,_100%_0%)]
        /* Notebook margin line */
        after:content-[''] after:absolute after:top-0 after:left-8 after:bottom-0 after:w-px after:bg-[#FF6B6B]/30
        /* Paper texture with ruled lines */
        shadow-lg transform-gpu
      `}
      style={{ 
        // Add subtle paper texture with horizontal ruled lines
        backgroundImage: `
          linear-gradient(90deg, rgba(255,107,107,0.2) 1px, transparent 1px),
          linear-gradient(180deg, transparent 40px, rgba(200,200,200,0.3) 40px, rgba(200,200,200,0.3) 41px, transparent 41px)
        `,
        backgroundSize: '32px 100%, 100% 41px',
        backgroundPosition: '32px 0, 0 20px'
      }}>
        <CardContent className="p-8 pt-12 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-full mb-6 shadow-lg">
              <Zap className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-3"
                style={{ 
                  fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
                  letterSpacing: '0.5px'
                }}>
              🏆 Start Here
            </h3>
            <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-base leading-relaxed max-w-md mx-auto"
               style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              New to the hustle? These moves will get you from zero to paid. Real street knowledge, no fluff.
            </p>
          </div>

          <div className="space-y-5">
            <a 
              href="/ai-side-hustles-guide" 
              className="block p-5 bg-white/80 dark:bg-brand-black/60 backdrop-blur-sm rounded-lg hover:bg-white/90 dark:hover:bg-brand-black/80 transition-all duration-300 group border border-white/20 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#247EFF]/20 to-[#247EFF]/10 rounded-lg flex items-center justify-center border border-[#247EFF]/20">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] dark:text-brand-cream text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace" }}>
                      AI Hustles That Pay
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                      Turn AI tools into cold hard cash
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#247EFF] group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>

            <a 
              href="/free-investing-guide" 
              className="block p-5 bg-white/80 dark:bg-brand-black/60 backdrop-blur-sm rounded-lg hover:bg-white/90 dark:hover:bg-brand-black/80 transition-all duration-300 group border border-white/20 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] dark:text-brand-cream text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace" }}>
                      Zero to Investment Boss
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                      Start building wealth with $0 down
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>

            <a 
              href="/wealth-building-strategies" 
              className="block p-5 bg-white/80 dark:bg-brand-black/60 backdrop-blur-sm rounded-lg hover:bg-white/90 dark:hover:bg-brand-black/80 transition-all duration-300 group border border-white/20 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-lg flex items-center justify-center border border-yellow-500/20">
                    <span className="text-xl">💎</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0A0A] dark:text-brand-cream text-base mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', monospace" }}>
                      Long-Term Wealth Game
                    </h4>
                    <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                      Build generational wealth strategies
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-600 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#247EFF]/20 text-center">
            <p className="text-sm text-[#0A0A0A]/50 dark:text-brand-cream/50"
               style={{ fontFamily: "'IBM Plex Sans', monospace" }}>
              ⬆️ Pick your lane and secure the bag 💰
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartHereCard;
