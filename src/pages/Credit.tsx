import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Credit = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const navigate = useNavigate();

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
      <main className="relative z-10 mt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 relative">
          {/* Back Button - Left aligned */}
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <button
              onClick={() => navigate(-1)}
              className="mb-8 group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-xl transition-all duration-300 hover:bg-[#FFD700]/30 hover:scale-105 transform rotate-1 hover:rotate-0"
              style={{
                fontFamily: 'Permanent Marker, cursive',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3))'
              }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </button>
          </div>
          
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

          </div>
        </section>

        {/* Why Credit Matters Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream text-center">
                Why Credit Matters{" "}
                <span className="text-[#FFD700]">(Real Talk)</span>
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-xl sm:text-2xl text-black dark:text-brand-cream leading-relaxed text-center font-medium">
                  Credit ain't just a number—it's your ticket to better apartments, lower car payments, and real wealth moves. 
                  If you've been locked out, this is your blueprint to break in.
                </p>
                
                <div className="grid gap-6 sm:gap-8">
                  <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-l-4 border-red-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                      The Real Barriers
                    </h3>
                    <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                      The system wasn't built for us. No family credit history to lean on. No generational wealth to cushion the learning curve. 
                      Just higher interest rates and doors slammed in your face because of a three-digit number.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-l-4 border-[#FFD700] p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                      Predatory Lending Traps
                    </h3>
                    <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                      They target our communities with payday loans, rent-to-own schemes, and credit cards with 29% APR. 
                      These aren't helping—they're designed to keep you stuck in the cycle.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-l-4 border-blue-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                      Why Most Advice Don't Hit
                    </h3>
                    <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                      "Just ask your parents to cosign" or "Use your trust fund as collateral." That suburban playbook doesn't work on the block. 
                      You need strategies that work when you're starting from zero—no safety net, no shortcuts.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                    It's time to flip the script and build credit that actually opens doors.
                  </p>
                </div>
              </div>
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