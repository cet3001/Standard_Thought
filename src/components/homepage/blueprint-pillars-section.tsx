
import BlueprintPillarsHeader from "./blueprint-pillars/blueprint-pillars-header";
import BlueprintPillarCard from "./blueprint-pillars/blueprint-pillar-card";
import BlueprintPillarsBackground from "./blueprint-pillars/blueprint-pillars-background";
import { blueprintPillarsData } from "./blueprint-pillars/blueprint-pillars-data";

interface BlueprintPillarsSectionProps {
  isVisible: boolean;
}

const BlueprintPillarsSection = ({ isVisible }: BlueprintPillarsSectionProps) => {
  return (
    <div className={`mb-16 relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* More transparent background */}
      <div className="relative bg-gray-200/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/5 dark:border-gray-700/5">
        <BlueprintPillarsBackground />

        <BlueprintPillarsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" role="group" aria-label="Standard Thought methodology pillars">
          {blueprintPillarsData.map((pillar, index) => (
            <BlueprintPillarCard key={index} {...pillar} />
          ))}
        </div>

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
    </div>
  );
};

export default BlueprintPillarsSection;
