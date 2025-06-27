
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface FinalCTASectionProps {
  isVisible: boolean;
  scrollToNewsletter: () => void;
}

const FinalCTASection = ({ isVisible, scrollToNewsletter }: FinalCTASectionProps) => {
  return (
    <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Button 
        size="lg"
        variant="outline"
        onClick={scrollToNewsletter}
        className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-8 py-4 rounded-3xl border-0 hover:from-[#FFA500] hover:to-[#FFD700]"
        aria-label="Ready to start your own story - Scroll to newsletter signup"
      >
        <ArrowDown className="mr-2 h-5 w-5" aria-label="Arrow pointing down to scroll to newsletter section" />
        Ready to start your own story? Get the Blueprint
      </Button>
    </div>
  );
};

export default FinalCTASection;
