
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ManifestoCTA = () => {
  return (
    <div className="text-center mt-12 relative z-10">
      <Link to="/resources">
        <Button 
          size="lg"
          className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
          style={{ 
            fontFamily: "'IBM Plex Sans', 'Courier New', monospace"
          }}
        >
          <span className="relative z-10">
            Explore All Resources
            <ArrowRight className="ml-2 h-5 w-5 inline" aria-label="Arrow pointing to resources" />
          </span>
        </Button>
      </Link>
    </div>
  );
};
