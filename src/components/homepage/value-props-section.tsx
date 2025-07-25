
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import ValuePropCard from "./value-props/value-prop-card";
import ValuePropsArrow from "./value-props/value-props-arrow";
import ValuePropsBackground from "./value-props/value-props-background";
import { valuePropsData } from "./value-props/value-props-data";

interface ValuePropsSectionProps {
  isVisible: boolean;
}

const ValuePropsSection = ({ isVisible }: ValuePropsSectionProps) => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* More transparent background */}
      <div className="relative bg-gray-200/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/10 dark:border-gray-700/10">
        <ValuePropsBackground />
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-black dark:text-brand-cream leading-tight">
            Ready to Flip the Script?{" "}
            <span 
              className="text-[#FFD700]"
              style={{
                background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s ease-in-out infinite'
              }}
            >
              Start Here
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-black dark:text-brand-cream leading-relaxed px-4">
            Pick your lane. Stack your wins. Build your legacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
          {valuePropsData.map((prop, index) => (
            <div key={index} className="relative">
              <ValuePropCard {...prop} />
              {index === 0 && <ValuePropsArrow />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuePropsSection;
