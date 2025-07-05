import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Credit = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Credit", url: "https://www.standardthought.com/credit", position: 2 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO
        title="Build Credit From Nothing | Credit Building for First-Gen Entrepreneurs | Standardthought"
        description="Learn how to build credit from zero without a cosigner. Real strategies for fixing your credit score, unlocking better rates, and making generational progress with street-smart credit building."
        keywords="build credit from nothing, credit building without cosigner, fix credit score, credit for first generation, urban credit building, credit repair strategies, improve credit rating"
        url="/credit"
        type="article"
        breadcrumbs={breadcrumbs}
      />

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
              Build Credit From Nothing—{" "}
              <span 
                className="text-[#FFD700]"
                style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              >
                No Cosigner, No Cap
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-black dark:text-brand-cream leading-relaxed px-4 mb-12">
              Real talk: Credit is the key to unlocking better rates, bigger moves, and generational progress. 
              Here's how to flip your score, even if you're starting at zero.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold text-lg rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Credit Blueprint
              </button>
              <button className="px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg rounded-xl hover:bg-[#FFD700]/10 transition-all duration-300">
                Watch Free Training
              </button>
            </div>
          </div>
        </section>

        {/* Coming Soon Placeholder */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-300/10 dark:border-gray-700/10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-brand-cream">
                Credit Building Content Coming Soon
              </h2>
              <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed">
                We're putting together the most comprehensive credit building guide for first-gen entrepreneurs. 
                Sign up below to get notified when it drops.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Credit;