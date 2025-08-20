
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import ValuePropCard from "./value-props/value-prop-card";
import ValuePropsArrow from "./value-props/value-props-arrow";
import ValuePropsBackground from "./value-props/value-props-background";
import { valuePropsData } from "./value-props/value-props-data";

interface ValuePropsContent {
  headline: string;
  subheadline: string;
}

interface ValuePropsSectionProps {
  isVisible: boolean;
  content?: ValuePropsContent;
}

const ValuePropsSection = ({ isVisible, content }: ValuePropsSectionProps) => {
  // Default content fallback to preserve existing behavior
  const defaultContent: ValuePropsContent = {
    headline: "The Standard Thought Way",
    subheadline: "A clear, sequential 4-step system to transform your life."
  };

  const valuePropsContent = content || defaultContent;
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* More transparent background */}
      <div className="relative bg-gray-200/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/10 dark:border-gray-700/10">
        <ValuePropsBackground />
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-black dark:text-brand-cream leading-tight">
            <span dangerouslySetInnerHTML={{ __html: valuePropsContent.headline }} />
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-black dark:text-brand-cream leading-relaxed px-4">
            {valuePropsContent.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {valuePropsData.map((prop, index) => (
            <div key={index} className="relative">
              <ValuePropCard {...prop} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuePropsSection;
