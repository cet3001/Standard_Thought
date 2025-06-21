
import { Link } from "react-router-dom";

const ValuesInternalLinks = () => {
  return (
    <div className="text-center mt-16 bg-white/80 dark:bg-brand-black/60 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 max-w-4xl mx-auto">
      <p className="text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-4">
        See how others have used these frameworks to flip their story in our{" "}
        <Link 
          to="/blog" 
          className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all duration-300 font-semibold"
        >
          Builder Stories
        </Link>{" "}
        section, or dive deeper with proven{" "}
        <Link 
          to="/resources" 
          className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all duration-300 font-semibold"
        >
          Success Strategies
        </Link>{" "}
        that turn mindset shifts into real results.
      </p>
    </div>
  );
};

export default ValuesInternalLinks;
