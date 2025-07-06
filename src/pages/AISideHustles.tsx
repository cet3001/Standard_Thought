import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AISideHustles = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const navigate = useNavigate();

  const breadcrumbs = [{
    name: "Home",
    url: "https://www.standardthought.com",
    position: 1
  }, {
    name: "AI Side Hustles",
    url: "https://www.standardthought.com/ai-side-hustles",
    position: 2
  }];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && <div className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed" style={{
        backgroundImage: `url(${textureImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }} />}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO 
        title="AI Side Hustles - Stack Bread with Bots | Real AI Money-Making Strategies | Standardthought" 
        description="Turn AI tools into consistent income streams. Learn how to use free and low-cost AI to build side hustles, automate your grind, and make money with your phone or laptop." 
        keywords="AI side hustles, make money with AI, AI tools income, automated income, AI business ideas, artificial intelligence money making" 
        url="/ai-side-hustles" 
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
            <button onClick={() => navigate('/sales')} className="mb-8 group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-xl transition-all duration-300 hover:bg-[#FFD700]/30 hover:scale-105 transform rotate-1 hover:rotate-0" style={{
            fontFamily: 'Permanent Marker, cursive',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3))'
          }}>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </button>
          </div>
          
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
              AI Side Hustles—Stack{" "}
              <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
                Bread
              </span>{" "}
              with Bots, Not Just Sweat
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-black dark:text-brand-cream leading-relaxed px-4 mb-12">
              Real talk: AI isn't just for Silicon Valley. Here's how to use free and low-cost AI tools to build side hustles, 
              automate your grind, and turn your phone or laptop into a money machine—even if you're starting from zero.
            </p>
          </div>
        </section>

        {/* Coming Soon Placeholder */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-300/10 dark:border-gray-700/10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-brand-cream">
                AI Side Hustles Content Coming Soon
              </h2>
              <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed">
                We're putting together the most comprehensive AI side hustle guide for first-gen entrepreneurs. 
                Sign up for our newsletter to get notified when it drops.
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

export default AISideHustles;