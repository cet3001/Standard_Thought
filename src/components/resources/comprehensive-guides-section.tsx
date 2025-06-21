
import ComprehensiveGuideSection from "@/components/content-structure/comprehensive-guide-section";
import { creditBuildingGuide, investingGuide } from "./comprehensive-guides-data";

const ComprehensiveGuidesSection = () => {
  return (
    <div className="mb-16">
      <ComprehensiveGuideSection {...creditBuildingGuide} className="mb-16" />
      <ComprehensiveGuideSection {...investingGuide} className="mb-16" />
    </div>
  );
};

export default ComprehensiveGuidesSection;
