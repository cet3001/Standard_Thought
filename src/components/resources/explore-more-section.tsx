
import ExploreMoreHeader from "./explore-more/explore-more-header";
import ExploreMoreCard from "./explore-more/explore-more-card";
import ExploreMoreFooter from "./explore-more/explore-more-footer";
import ExploreMoreAnimations from "./explore-more/explore-more-animations";
import { exploreMoreTopics } from "./explore-more/topics-data";

const ExploreMoreSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Street-style background texture */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(184, 134, 11, 0.06) 0%, transparent 50%)
          `
        }}></div>
        {/* Concrete texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.1) 2px,
            rgba(0,0,0,0.1) 4px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <ExploreMoreHeader />

        {/* Street flyer-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {exploreMoreTopics.map((topic, index) => (
            <ExploreMoreCard 
              key={topic.title}
              topic={topic}
              index={index}
            />
          ))}
        </div>

        {/* Footer message */}
        <ExploreMoreFooter />
      </div>

      <ExploreMoreAnimations />
    </section>
  );
};

export default ExploreMoreSection;
