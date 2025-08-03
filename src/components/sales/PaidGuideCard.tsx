import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Star } from 'lucide-react';
import { PaidGuide } from '@/hooks/use-paid-guides';

interface PaidGuideCardProps {
  guide: PaidGuide;
  onPurchase: (guide: PaidGuide) => void;
}

const PaidGuideCard: React.FC<PaidGuideCardProps> = ({ guide, onPurchase }) => {
  const formatPrice = (price: number) => {
    return `$${(price / 100).toFixed(0)}`;
  };

  const handleCardClick = () => {
    onPurchase(guide);
  };

  return (
    <Card 
      className="h-full group cursor-pointer relative overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm bg-gradient-to-br from-slate-900/40 via-slate-800/50 to-slate-900/40 dark:from-slate-900/60 dark:via-slate-800/70 dark:to-slate-900/60 border-2 border-slate-600/40 hover:border-[#FFD700]/60 hover:shadow-[0_0_40px_rgba(255,211,105,0.3)]"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`Purchase ${guide.title} for ${formatPrice(guide.price)}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,215,0,0.2)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      
      {/* Subtle metallic edge effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* PAID Ribbon */}
      <div className="absolute top-0 left-0 z-20">
        <div className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-black font-black text-xs px-3 py-1 transform -skew-x-12 shadow-lg">
          <span className="transform skew-x-12 inline-block">
            PAID | {formatPrice(guide.price)}
          </span>
        </div>
      </div>

      {/* Featured badge */}
      {guide.featured && (
        <div className="absolute top-3 right-3 z-20">
          <Star className="h-5 w-5 text-[#FFD700] fill-current" />
        </div>
      )}

      <CardHeader className="pb-4 relative z-10 pt-8">
        <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700]/20 via-[#FFA500]/15 to-[#FF8C00]/20 border border-[#FFD700]/30 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:border-[#FFD700]/60 transition-all duration-300">
          <Lock className="h-7 w-7 text-[#FFD700] group-hover:text-[#FFA500] transition-colors duration-300" />
        </div>
        
        <CardTitle className="text-xl font-black text-brand-cream dark:text-brand-cream group-hover:text-white transition-all duration-300 leading-tight drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          {guide.title}
        </CardTitle>
        
        {guide.subtitle && (
          <CardDescription className="text-[#FFD369] font-bold text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {guide.subtitle}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        <CardDescription className="text-brand-cream/90 dark:text-brand-cream/90 text-base leading-relaxed font-medium group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-300">
          {guide.description}
        </CardDescription>

        {/* Price display with action indicator */}
        <div className="flex items-center justify-between pt-4 border-t border-[#FFD700]/20 group-hover:border-[#FFD700]/40 transition-colors duration-300">
          <div className="text-2xl font-black text-[#FFD700] group-hover:text-[#FFA500] transition-colors duration-300">
            {formatPrice(guide.price)}
          </div>
          <div className="text-[#FFD369] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            Click to unlock →
          </div>
        </div>
      </CardContent>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFA500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
    </Card>
  );
};

export default PaidGuideCard;