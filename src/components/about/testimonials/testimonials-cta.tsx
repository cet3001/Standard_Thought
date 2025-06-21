
import { Button } from "@/components/ui/button";

const TestimonialsCTA = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-6">
        Ready to write your own success story?
      </h3>
      <Button 
        className="bg-gradient-to-r from-accent to-[#FFD700] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-8 py-4 text-lg rounded-xl"
        asChild
      >
        <a href="#newsletter">Get Your Free Playbook</a>
      </Button>
    </div>
  );
};

export default TestimonialsCTA;
