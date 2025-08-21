import { OptimizedImage } from "@/components/shared/OptimizedImage";

interface BlogHeroProps {
  isVisible: boolean;
}

const BlogHero = ({ isVisible }: BlogHeroProps) => {
  return (
    <div className={`py-20 px-6 md:px-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full">
              <OptimizedImage
                src="/lovable-uploads/3eb56c35-ead3-4041-bf85-1b724fad9ea7.png"
                alt="Young Black man in a hoodie writing in a notebook against a graffiti-covered wall at night, with city lights blurred in the distance"
                className="w-full h-auto object-cover object-top rounded-lg"
                width={400}
                height={500}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-brand-cream leading-tight mb-4">
                Out the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-permanent-marker transform -rotate-1 inline-block" style={{
                    color: 'transparent',
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}>
                    Mud:
                  </span>
                </span>{" "}
                Unfiltered Receipts & Real Talk
              </h1>
              
              <h2 className="text-xl md:text-2xl font-bold text-brand-black dark:text-brand-cream mt-4">
                Nobody passed you a map—so you drew your own. This is the underground—the untold stories of hustle pivots and belief flips, shared out loud for the first time.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
              No highlight reels. Every essay strips back the survival code and shows what it takes to turn mess into method—one busted rule at a time.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#blog-posts"
                className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-permanent-marker border-2 border-[#FFD700]/30 backdrop-blur-sm rotate-1 hover:rotate-0"
                style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  color: '#000',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.5)',
                  filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4)) drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  animation: 'pearlescent 3s ease-in-out infinite',
                  letterSpacing: '0.5px',
                  fontWeight: '900'
                }}
              >
                Start Digging—The Stories Are Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;