import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CashManagementHero = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-24 relative">
      {/* Back Button - Left aligned */}
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <button onClick={() => navigate('/sales')} className="mb-8 group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-xl transition-all duration-300 hover:bg-[#FFD700]/30 hover:scale-105 transform rotate-1 hover:rotate-0" style={{
        fontFamily: 'Permanent Marker, cursive',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3))'
      }}>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          Back
        </button>
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
          Cash Management:{" "}
          <span className="text-[#FFD700]" style={{
          background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 3s ease-in-out infinite'
        }}>
            Stack, Save, and Move Smart
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-black dark:text-brand-cream leading-relaxed px-4 mb-12">
          Real talk: Managing your money isn't just about budgeting—it's about controlling your cash flow, 
          breaking the paycheck-to-paycheck cycle, and building a system that works even when you're starting with nothing.
        </p>
      </div>
    </section>
  );
};

export default CashManagementHero;