
import ResourcesHero from "@/components/resources/resources-hero";
import ResourcesCTA from "@/components/resources/resources-cta";
import FeaturedGuidesSection from "@/components/resources/featured-guides-section";

const ResourcesContent = () => {
  return (
    <main className="pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <ResourcesHero />
        <FeaturedGuidesSection />
        <ResourcesCTA />
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
    </main>
  );
};

export default ResourcesContent;
