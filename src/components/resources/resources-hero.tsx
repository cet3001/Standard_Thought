
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";

const ResourcesHero = () => {
  return (
    <div className="text-center mb-16">
      <HeaderHierarchy level={1} className="max-w-4xl mx-auto">
        Your Urban Wealth Building <span className="text-[#247EFF]">Resource Hub</span>
      </HeaderHierarchy>
      
      <p className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
        Blueprints & Tools to Flip Your Circumstance—All in One Place
      </p>
      
      <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto mb-8">
        No fluff. No gatekeeping. Just step-by-step guides for hustlers building from scratch.
      </p>
      
      <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-3xl mx-auto mb-8">
        Master <strong>street-smart money moves</strong>, learn proven strategies for <strong>securing the bag</strong>, and get the complete blueprint for <strong>building generational wealth from scratch</strong>.
      </p>
    </div>
  );
};

export default ResourcesHero;
