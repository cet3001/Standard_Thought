
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import OptimizedImage from "@/components/optimized-image";
import { Lock } from "lucide-react";

interface ComingSoonGuideCardProps {
  title: string;
  teaser: string;
  image: string;
}

const ComingSoonGuideCard = ({ title, teaser, image }: ComingSoonGuideCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-white/95 to-white/90 dark:from-[#0A0A0A]/95 dark:to-[#0A0A0A]/90 backdrop-blur-sm border border-[#0A0A0A]/10 dark:border-brand-cream/10 opacity-75">
      {/* Lock Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className="bg-gradient-to-r from-slate-400 to-slate-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
          <Lock className="w-3 h-3" />
          LOCKED
        </span>
      </div>

      <CardHeader className="p-0">
        {/* Blurred Guide Cover Image */}
        <div className="relative overflow-hidden rounded-t-lg h-40 md:h-44 flex items-center justify-center">
          <OptimizedImage
            src={image}
            alt={`${title} - Coming Soon`}
            className="max-w-full max-h-full object-contain p-2 filter blur-lg grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/40"></div>
          
          {/* Lock Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 dark:bg-black/90 rounded-full p-3 shadow-xl">
              <Lock className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-[#0A0A0A] dark:text-brand-cream mb-2">
          <HeaderHierarchy level={3} className="mb-0 text-base md:text-lg leading-tight opacity-60">
            {title}
          </HeaderHierarchy>
        </CardTitle>

        <CardDescription className="text-[#0A0A0A]/50 dark:text-brand-cream/50 text-sm leading-relaxed mb-4">
          {teaser}
        </CardDescription>

        <Button 
          disabled
          className="w-full bg-gradient-to-r from-slate-300 to-slate-400 text-slate-600 min-h-[40px] font-bold text-sm cursor-not-allowed opacity-75" 
        >
          Coming Soon
        </Button>
      </CardContent>
    </Card>
  );
};

export default ComingSoonGuideCard;
