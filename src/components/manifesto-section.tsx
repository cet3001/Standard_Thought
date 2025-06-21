
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ManifestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-section="manifesto"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      data-section="manifesto"
      className="py-24 bg-gradient-to-b from-accent/5 to-brand-cream dark:from-accent/10 dark:to-brand-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-2xl bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream">
              The Real About <span className="dark:text-accent">Building Wealth</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-black dark:text-brand-cream">
            <p>
              <strong>Nobody's coming to save you.</strong> The system wasn't built for us, and that's exactly why we're going to beat it at its own game.
            </p>
            
            <p>
              While others talk theory, we document reality. Every <Link to="/blog" className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 transition-colors font-semibold">builder story</Link> on this platform comes from someone who started with nothing but figured out how to turn hustle into strategy, strategy into income, and income into generational wealth.
            </p>

            <p>
              This isn't about get-rich-quick schemes or motivational fluff. It's about <Link to="/blog/ai-side-hustles-guide" className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 transition-colors font-semibold">proven AI side hustles</Link> that generate real money, <Link to="/financial-education-guide" className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 transition-colors font-semibold">street-smart financial education</Link> that cuts through the corporate BS, and <Link to="/blog/free-investing-guide" className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 transition-colors font-semibold">urban investing strategies</Link> that work in the real world.
            </p>

            <p>
              <strong>We're building different.</strong> Not just for ourselves, but for our families, our communities, and generations that haven't been born yet. Every dollar we make, every system we build, every story we tell is part of something bigger.
            </p>

            <p className="text-xl font-bold dark:text-accent">
              Legacy isn't inherited. It's built.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link to="/resources">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-[#FFD700] text-black font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Resources
                <ArrowRight className="ml-2 h-5 w-5" aria-label="Arrow pointing to resources" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
