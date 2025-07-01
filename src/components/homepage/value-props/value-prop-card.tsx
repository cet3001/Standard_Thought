
import { LucideIcon } from "lucide-react";

interface ValuePropCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

const ValuePropCard = ({ icon: Icon, title, description, highlight }: ValuePropCardProps) => {
  return (
    <div className="p-8 relative overflow-hidden transition-all duration-300 hover:scale-105">
      {/* Card accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500]"></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 rounded-2xl flex items-center justify-center border border-[#FFD700]/30">
          <Icon className="w-8 h-8 text-[#FFD700]" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-2">
            {title}
          </h3>
        </div>
      </div>
      
      <p className="text-base sm:text-lg text-black dark:text-brand-cream leading-relaxed mb-4">
        {description}
      </p>
      
      <p className="text-sm sm:text-base font-semibold text-[#FFD700] bg-[#FFD700]/10 px-4 py-2 rounded-lg border border-[#FFD700]/20">
        {highlight}
      </p>
    </div>
  );
};

export default ValuePropCard;
