
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import ValuePropCard from "./value-props/value-prop-card";
import ValuePropsBackground from "./value-props/value-props-background";
import ValuePropsArrow from "./value-props/value-props-arrow";
import { valuePropsData } from "./value-props/value-props-data";

interface ValuePropsSectionProps {
  isVisible: boolean;
}

const ValuePropsSection = ({ isVisible }: ValuePropsSectionProps) => {
  return (
    <div className="mb-12 sm:mb-16 relative">
      <ValuePropsBackground />

      <HeaderHierarchy 
        level={2} 
        className={`text-center mb-8 sm:mb-12 text-brand-black dark:text-brand-cream transition-all duration-1000 delay-400 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        Ready to Flip the Script? Start Here
      </HeaderHierarchy>
      
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 max-w-4xl mx-auto transition-all duration-1000 delay-600 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {valuePropsData.map((prop, index) => {
          const IconComponent = prop.icon;
          return (
            <ValuePropCard
              key={index}
              icon={
                <IconComponent 
                  className="h-12 w-12" 
                  style={{
                    color: 'transparent',
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }} 
                  aria-label={`${prop.title} icon`} 
                />
              }
              title={prop.title}
              description={prop.description}
              link={prop.link}
              index={index}
              isVisible={isVisible}
            />
          );
        })}
      </div>

      <ValuePropsArrow />

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

export default ValuePropsSection;
