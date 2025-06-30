
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import FeaturedGuideCard from "@/components/resources/featured-guides/featured-guide-card";
import ComingSoonGuideCard from "@/components/resources/featured-guides/coming-soon-guide-card";
import WaitlistSignup from "@/components/resources/featured-guides/waitlist-signup";
import SocialProofSection from "@/components/resources/featured-guides/social-proof-section";

const FeaturedGuidesSection = () => {
  return (
    <section className="mb-16 md:mb-20">
      {/* Featured Guides */}
      <div className="text-center mb-8 md:mb-12">
        <HeaderHierarchy level={2} className="mb-4 text-xl md:text-2xl lg:text-3xl">
          Featured <span style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}>Guides</span>
        </HeaderHierarchy>
        <p className="text-base md:text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Street-smart blueprints designed for hustlers ready to level up their money game
        </p>
      </div>

      {/* Grid layout for easy expansion */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 mb-16">
        <FeaturedGuideCard />
      </div>

      {/* Coming Soon Section */}
      <div className="text-center mb-8">
        <HeaderHierarchy level={2} className="mb-4 text-xl md:text-2xl lg:text-3xl">
          Coming <span style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}>Soon</span>
        </HeaderHierarchy>
      </div>

      {/* Coming Soon Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 mb-12">
        <ComingSoonGuideCard 
          title="Credit Repair Playbook"
          teaser="Dropping soon. Join the waitlist."
          image="/lovable-uploads/b4e3b459-4253-40a2-bc9a-74ec02d85e18.png"
        />
        <ComingSoonGuideCard 
          title="AI Side Hustle Blueprint"
          teaser="Dropping soon. Join the waitlist."
          image="/lovable-uploads/b4e3b459-4253-40a2-bc9a-74ec02d85e18.png"
        />
        <ComingSoonGuideCard 
          title="Real Estate Starter Kit"
          teaser="Dropping soon. Join the waitlist."
          image="/lovable-uploads/b4e3b459-4253-40a2-bc9a-74ec02d85e18.png"
        />
      </div>

      {/* Waitlist Signup */}
      <WaitlistSignup />

      {/* Social Proof Section - moved here */}
      <SocialProofSection />

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
    </section>
  );
};

export default FeaturedGuidesSection;
