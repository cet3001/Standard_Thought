
import WaitlistSignup from "@/components/resources/featured-guides/waitlist-signup";
import SocialProofSection from "@/components/resources/featured-guides/social-proof-section";

const CommunityEngagementSection = () => {
  return (
    <section className="mb-16 md:mb-20">
      {/* Waitlist Signup */}
      <div className="mb-12 md:mb-16">
        <WaitlistSignup />
      </div>

      {/* Social Proof Section */}
      <SocialProofSection />
    </section>
  );
};

export default CommunityEngagementSection;
