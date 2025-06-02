
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-black dark:text-brand-cream">
              Why <span className="text-accent">Standard</span>thought?
            </h1>
            <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 leading-relaxed">
              Because standard thinking gets standard results. We're here to challenge conventions, 
              break limitations, and build something extraordinary from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white/80 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <img 
                src="/placeholder.svg" 
                alt="Our story" 
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="text-4xl font-bold mb-6 text-brand-black dark:text-brand-cream">Our Story</h2>
              <div className="space-y-4 text-brand-black/70 dark:text-brand-cream/70">
                <p>
                  Standardthought was born from a simple observation: the most successful people 
                  didn't follow standard advice. They created their own path, questioned everything, 
                  and built something meaningful from nothing.
                </p>
                <p>
                  We started as a community of entrepreneurs, creators, and visionaries who refused 
                  to accept limitations. Today, we're a movement that empowers thousands to break 
                  free from conventional thinking and build their legacy.
                </p>
                <p>
                  This isn't about get-rich-quick schemes or overnight success. It's about the 
                  long game—building something that lasts, something that matters, something that 
                  creates value for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-brand-black dark:text-brand-cream">What We Stand For</h2>
            <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every decision, 
              every piece of content, and every interaction in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Growth",
                description: "Real success comes from genuine value creation, not shortcuts or manipulation."
              },
              {
                title: "Community First",
                description: "We succeed together. Individual wins that don't lift others aren't true victories."
              },
              {
                title: "Long-term Thinking",
                description: "Legacy isn't built in quarters or years. We think in decades and generations."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-accent/20 rounded-3xl p-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">{value.title}</h3>
                <p className="text-brand-black/70 dark:text-brand-cream/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
