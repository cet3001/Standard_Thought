
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";

const ResourcesHero = () => {
  return (
    <div className="text-center mb-12 md:mb-16 px-4 md:px-0 pt-8">
      <HeaderHierarchy level={1} className="max-w-4xl mx-auto text-2xl md:text-4xl lg:text-5xl leading-tight">
        Unlock Your Urban <span className="text-[#247EFF]">Wealth Blueprint</span>
      </HeaderHierarchy>
      
      <p className="text-lg md:text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
        The official spot for free and premium guides, playbooks, and tools to help you stack bread, fix your credit, and build generational wealth—no trust fund needed.
      </p>
    </div>
  );
};

export default ResourcesHero;
