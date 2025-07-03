
import BlueprintPillarsHeader from "./blueprint-pillars/blueprint-pillars-header";
import BlueprintPillarCard from "./blueprint-pillars/blueprint-pillar-card";
import { SectionOverlayBox } from "@/components/layout";
import { blueprintPillarsData } from "./blueprint-pillars/blueprint-pillars-data";

interface BlueprintPillarsSectionProps {
  isVisible: boolean;
}

const BlueprintPillarsSection = ({ isVisible }: BlueprintPillarsSectionProps) => {
  return (
    <SectionOverlayBox className={`mb-16 relative duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <BlueprintPillarsHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10" role="group" aria-label="Standard Thought methodology pillars">
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
      </SectionOverlayBox>
  );
};

export default BlueprintPillarsSection;
