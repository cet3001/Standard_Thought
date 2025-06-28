
import { MindsetPrinciple } from "./mindset-principles-data";

interface MindsetPrincipleCardProps {
  principle: MindsetPrinciple;
  index: number;
  isVisible: boolean;
}

const MindsetPrincipleCard = ({ principle, index, isVisible }: MindsetPrincipleCardProps) => {
  return (
    <div 
      className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 text-center transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${600 + index * 200}ms` }}
    >
      <div className="text-4xl mb-4 filter drop-shadow-lg">{principle.icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-[#247EFF]">{principle.title}</h3>
      <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed">{principle.description}</p>
    </div>
  );
};

export default MindsetPrincipleCard;
