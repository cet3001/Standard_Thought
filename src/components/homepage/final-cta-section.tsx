
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface FinalCTASectionProps {
  isVisible: boolean;
  scrollToNewsletter: () => void;
}

const FinalCTASection = ({ isVisible, scrollToNewsletter }: FinalCTASectionProps) => {
  return (
    <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Button removed - section maintained for spacing and animation timing */}
    </div>
  );
};

export default FinalCTASection;
