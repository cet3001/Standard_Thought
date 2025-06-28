
import { Button } from "@/components/ui/button";

const TestimonialsCTA = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-6">
        Ready to write your own success story?
      </h3>
      <Button 
        className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
        style={{ 
          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
          textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
          borderRadius: '25px 35px 25px 30px',
          transform: 'rotate(-1deg)',
          border: '3px solid #000',
          boxShadow: '5px 5px 0px rgba(0,0,0,0.3), inset -2px -2px 0px rgba(0,0,0,0.1)',
          background: `
            linear-gradient(45deg, #FFD700 0%, #FFF8DC 25%, #FFA500 50%, #FFD700 75%, #FFF8DC 100%),
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(0,0,0,0.1) 0%, transparent 30%)
          `,
          backgroundSize: '200% 100%, 100% 100%, 100% 100%',
          animation: 'spray-paint 4s ease-in-out infinite'
        }}
        asChild
      >
        <a href="#newsletter">Get Your Free Playbook</a>
      </Button>
      
      {/* Added line under the button */}
      <p 
        className="mt-4 text-white/80 text-sm italic"
        style={{ 
          fontFamily: "'Kalam', 'Comic Neue', cursive",
          textShadow: '1px 1px 0px rgba(0,0,0,0.3)'
        }}
      >
        No spam, just real blueprints.
      </p>

      <style>{`
        @keyframes spray-paint {
          0% {
            background-position: 0% 50%;
            transform: rotate(-1deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          50% {
            background-position: 100% 50%;
            transform: rotate(-0.5deg);
          }
          75% {
            transform: rotate(1deg);
          }
          100% {
            background-position: 0% 50%;
            transform: rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCTA;
