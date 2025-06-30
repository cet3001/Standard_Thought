
import GuidesGridSection from "@/components/resources/guides-grid-section";
import CommunityEngagementSection from "@/components/resources/community-engagement-section";
import ExploreMoreSection from "@/components/resources/explore-more-section";
import ResourcesFAQSection from "@/components/resources/resources-faq-section";

const FeaturedGuidesSection = () => {
  return (
    <>
      {/* Guides Grid */}
      <GuidesGridSection />

      {/* Community Engagement (Waitlist + Social Proof) */}
      <CommunityEngagementSection />

      {/* Explore More Section */}
      <ExploreMoreSection />

      {/* FAQ Section */}
      <ResourcesFAQSection />
    </>
  );
};

export default FeaturedGuidesSection;
