
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";

const ResourcesHero = () => {
  return (
    <div className="text-center mb-12 md:mb-16 px-4 md:px-0 pt-8">
      <HeaderHierarchy level={1} className="max-w-4xl mx-auto text-2xl md:text-4xl lg:text-5xl leading-tight">
        Unlock Your Urban <span style={{ 
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}>Wealth Blueprint</span>
      </HeaderHierarchy>
      
      <p className="text-lg md:text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
        The official spot for free and premium guides, playbooks, and tools to help you stack bread, fix your credit, and build generational wealth—no trust fund needed.
      </p>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ResourcesHero;
