
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import ValuePropCard from "./value-props/value-prop-card";
import ValuePropsArrow from "./value-props/value-props-arrow";
import ValuePropsBackground from "./value-props/value-props-background";
import { valuePropsData } from "./value-props/value-props-data";
import { Target, RefreshCw, TrendingUp, Rocket } from "lucide-react";

interface ValuePropData {
  title: string;
  description: string;
  highlight: string;
}

interface ValuePropsSectionProps {
  isVisible: boolean;
  title?: string;
  subtitle?: string;
  props?: ValuePropData[];
}

const ValuePropsSection = ({ 
  isVisible,
  title = "THE BLUEPRINT",
  subtitle = "Four pillars that rebuild everything",
  props = valuePropsData
}: ValuePropsSectionProps) => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* More transparent background */}
      <div className="relative bg-gray-200/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/10 dark:border-gray-700/10">
        <ValuePropsBackground />
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-black dark:text-brand-cream leading-tight">
            {title}
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-black dark:text-brand-cream leading-relaxed px-4">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {props.map((prop, index) => {
            // Map icons to the value props
            const icons = [Target, RefreshCw, TrendingUp, Rocket];
            const IconComponent = icons[index % icons.length];
            
            return (
              <div key={index} className="relative">
                <ValuePropCard {...prop} icon={IconComponent} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ValuePropsSection;
