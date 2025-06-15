
import { Users, Star } from "lucide-react";

const TrustBadgeSection = () => {
  return (
    <section className="py-12 bg-brand-cream/50 dark:bg-brand-black/50 border-t border-[#0A0A0A]/10 dark:border-brand-cream/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-4 font-medium tracking-wide uppercase">
            As seen in
          </p>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white dark:bg-brand-black border border-[#247EFF]/20 rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center mr-4">
              <Users className="w-5 h-5 text-[#247EFF] mr-2" />
              <span className="text-[#0A0A0A] dark:text-brand-cream font-semibold">
                Trusted by 1000+ first-gen hustlers
              </span>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeSection;
