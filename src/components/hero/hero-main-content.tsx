
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroMainContentProps {
  scrollToNewsletter: () => void;
}

const HeroMainContent = ({ scrollToNewsletter }: HeroMainContentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="text-center mb-16">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-brand-black dark:text-brand-cream">
          Build <span className="text-accent">Legacy</span><br />
          From <span className="text-accent">Nothing</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
          Real strategies for <strong>urban wealth building</strong>, proven <Link to="/blog/ai-side-hustles-guide" className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 transition-colors">AI side hustles</Link>, and <Link to="/financial-education-guide" className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 transition-colors">financial education</Link> designed for first-gen entrepreneurs building generational wealth.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg"
            onClick={scrollToNewsletter}
            className="bg-gradient-to-r from-accent to-[#FFD700] text-black font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Get the wealth building blueprint - scroll to newsletter signup"
          >
            <Zap className="mr-2 h-5 w-5" aria-label="Lightning bolt icon representing fast action" />
            Get the Blueprint
          </Button>
          
          <Link to="/blog">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-black font-semibold px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105"
              aria-label="Read real builder success stories"
            >
              Read Builder Stories
            </Button>
          </Link>
        </div>

        <div className="text-center text-sm text-brand-black/60 dark:text-brand-cream/60">
          <p>
            Join 1000+ first-gen entrepreneurs mastering <Link to="/blog/free-investing-guide" className="text-[#247EFF] hover:text-[#0057FF] underline">urban investing strategies</Link>, 
            learning <Link to="/resources" className="text-[#247EFF] hover:text-[#0057FF] underline">street-smart money moves</Link>, and building wealth that lasts generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroMainContent;
