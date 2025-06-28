
import { Button } from "@/components/ui/button";

const TestimonialsCTA = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-6">
        Ready to write your own success story?
      </h3>
      <Button 
        className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-3xl border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
        style={{ 
          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
          textShadow: '1px 1px 0px rgba(0,0,0,0.2)' 
        }}
        asChild
      >
        <a href="#newsletter">Get Your Free Playbook</a>
      </Button>
    </div>
  );
};

export default TestimonialsCTA;
