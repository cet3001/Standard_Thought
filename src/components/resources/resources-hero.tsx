
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";

const ResourcesHero = () => {
  return (
    <div className="text-center mb-16">
      <HeaderHierarchy level={1} className="max-w-4xl mx-auto">
        Step-by-Step Wealth Building <span className="text-[#247EFF]">Blueprints</span>
      </HeaderHierarchy>
      
      <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto mb-8">
        Actionable guides organized by where you're at in your money journey. Pick your path and start building.
      </p>
    </div>
  );
};

export default ResourcesHero;
