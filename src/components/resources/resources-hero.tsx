
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";

const ResourcesHero = () => {
  return (
    <div className="text-center mb-16">
      <HeaderHierarchy level={1} className="max-w-4xl mx-auto">
        Complete Resource Hub for <span className="text-[#247EFF]">Leveling Up Financially</span>
      </HeaderHierarchy>
      
      <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-3xl mx-auto mb-8">
        Master <strong>street-smart money moves</strong>, learn proven strategies for <strong>securing the bag</strong>, and get the complete blueprint for <strong>building generational wealth from scratch</strong>.
      </p>
    </div>
  );
};

export default ResourcesHero;
