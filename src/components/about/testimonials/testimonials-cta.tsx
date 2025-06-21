
import { Button } from "@/components/ui/button";

const TestimonialsCTA = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-6">
        Ready to write your own success story?
      </h3>
      <Button 
        className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
        asChild
      >
        <a href="#newsletter">Get Your Free Playbook</a>
      </Button>
    </div>
  );
};

export default TestimonialsCTA;
