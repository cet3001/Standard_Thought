
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Link } from "react-router-dom";

const ResourcesCTA = () => {
  return (
    <div className="text-center bg-[#247EFF]/10 rounded-3xl p-12">
      <HeaderHierarchy level={2} className="mb-4">
        Ready to Build Your Legacy?
      </HeaderHierarchy>
      
      <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8 max-w-2xl mx-auto">
        Join 1000+ urban entrepreneurs mastering <strong>generational wealth building for beginners</strong> with proven frameworks and community support.
      </p>
      
      <Link 
        to="/#newsletter"
        className="inline-flex items-center px-8 py-4 bg-[#247EFF] text-white rounded-3xl hover:bg-[#0057FF] transition-colors font-semibold"
      >
        Get Your Free Playbook
      </Link>
    </div>
  );
};

export default ResourcesCTA;
