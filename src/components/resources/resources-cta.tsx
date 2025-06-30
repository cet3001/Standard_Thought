
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Link } from "react-router-dom";

const ResourcesCTA = () => {
  return (
    <div className="text-center bg-[#0A0A0A]/5 dark:bg-brand-cream/10 backdrop-blur-sm rounded-3xl p-12 border border-[#247EFF]/10 shadow-sm relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(36, 126, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 35px 35px'
        }}
      />
      
      <div className="relative z-10">
        <HeaderHierarchy level={2} className="mb-4">
          Ready to Execute Your Plan?
        </HeaderHierarchy>
        
        <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8 max-w-2xl mx-auto">
          Get the complete action plan with step-by-step checklists, templates, and weekly execution guides.
        </p>
        
        <Link 
          to="/#newsletter"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-3xl border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700] text-lg"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
            textShadow: '1px 1px 0px rgba(0,0,0,0.2)' 
          }}
        >
          Download Your Execution Kit
        </Link>
      </div>
    </div>
  );
};

export default ResourcesCTA;
