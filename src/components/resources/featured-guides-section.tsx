
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import FeaturedGuideCard from "@/components/resources/featured-guides/featured-guide-card";
import ComingSoonGuideCard from "@/components/resources/featured-guides/coming-soon-guide-card";
import WaitlistSignup from "@/components/resources/featured-guides/waitlist-signup";
import SocialProofSection from "@/components/resources/featured-guides/social-proof-section";

const FeaturedGuidesSection = () => {
  const comingSoonGuides = [
    {
      title: "AI Side Hustles Blueprint",
      teaser: "Dropping soon. Join the waitlist.",
      image: "/lovable-uploads/319b9311-4018-46d0-9292-5c7220a671c7.png"
    },
    {
      title: "Credit Repair Playbook", 
      teaser: "Dropping soon. Join the waitlist.",
      image: "/lovable-uploads/4696326a-6203-4b1e-b0bc-e1ccc29263be.png"
    }
  ];

  return (
    <section className="mb-16 md:mb-20">
      <div className="text-center mb-8 md:mb-12">
        <HeaderHierarchy level={2} className="mb-4 text-xl md:text-2xl lg:text-3xl">
          Featured <span className="text-[#247EFF]">Wealth Building</span> Guides
        </HeaderHierarchy>
        <p className="text-base md:text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Street-smart blueprints designed for hustlers ready to level up their money game
        </p>
      </div>

      {/* Flexible grid for current and future guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 mb-12">
        {/* Featured Guide Card */}
        <FeaturedGuideCard />

        {/* Coming Soon Cards */}
        {comingSoonGuides.map((guide, index) => (
          <ComingSoonGuideCard 
            key={index}
            title={guide.title}
            teaser={guide.teaser}
            image={guide.image}
          />
        ))}
      </div>

      {/* Waitlist Signup Section */}
      <WaitlistSignup />

      {/* Social Proof Section - No Cards */}
      <SocialProofSection />
    </section>
  );
};

export default FeaturedGuidesSection;
