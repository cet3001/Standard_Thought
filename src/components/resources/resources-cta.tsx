
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Link } from "react-router-dom";

const ResourcesCTA = () => {
  return (
    <div className="text-center bg-[#247EFF]/10 rounded-3xl p-12">
      <HeaderHierarchy level={2} className="mb-4">
        Ready to Execute Your Plan?
      </HeaderHierarchy>
      
      <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8 max-w-2xl mx-auto">
        Get the complete action plan with step-by-step checklists, templates, and weekly execution guides.
      </p>
      
      <Link 
        to="/#newsletter"
        className="inline-flex items-center px-8 py-4 bg-[#247EFF] text-white rounded-3xl hover:bg-[#0057FF] transition-colors font-semibold"
      >
        Download Your Execution Kit
      </Link>
    </div>
  );
};

export default ResourcesCTA;
