
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, TrendingUp, Banknote } from "lucide-react";

const StartHereCard = () => {
  return (
    <Card className="bg-gradient-to-br from-[#247EFF]/10 via-blue-50/80 to-[#247EFF]/5 dark:from-[#247EFF]/20 dark:via-blue-900/30 dark:to-[#247EFF]/10 border-2 border-[#247EFF]/30 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#247EFF] rounded-full mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-2">
            💯 Start Here
          </h3>
          <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm leading-relaxed">
            New to the game? Jump in with these proven moves that actually get you paid.
          </p>
        </div>

        <div className="space-y-4">
          <a 
            href="/ai-side-hustles-guide" 
            className="block p-4 bg-white/60 dark:bg-brand-black/40 rounded-xl hover:bg-white/80 dark:hover:bg-brand-black/60 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#247EFF]/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🔥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A0A0A] dark:text-brand-cream text-sm">
                    AI Side Hustles
                  </h4>
                  <p className="text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60">
                    Stack paper with AI tools
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#247EFF] group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          <a 
            href="/free-investing-guide" 
            className="block p-4 bg-white/60 dark:bg-brand-black/40 rounded-xl hover:bg-white/80 dark:hover:bg-brand-black/60 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A0A0A] dark:text-brand-cream text-sm">
                    Free Investing
                  </h4>
                  <p className="text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60">
                    Start investing with $0 down
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          <a 
            href="/wealth-building-strategies" 
            className="block p-4 bg-white/60 dark:bg-brand-black/40 rounded-xl hover:bg-white/80 dark:hover:bg-brand-black/60 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A0A0A] dark:text-brand-cream text-sm">
                    Wealth Building
                  </h4>
                  <p className="text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60">
                    Long-term wealth strategies
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-[#247EFF]/20 text-center">
          <p className="text-xs text-[#0A0A0A]/50 dark:text-brand-cream/50">
            ⬆️ Pick your path and secure the bag
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StartHereCard;
