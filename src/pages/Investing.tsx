import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { generateFAQSchema } from "@/components/seo/schemas";
import InternalLinkingHub from "@/components/seo/internal-linking-hub";
import WhyInvestingMatters from "@/components/investing/WhyInvestingMatters";
import InvestingMythsRealities from "@/components/investing/InvestingMythsRealities";
import InvestingBlueprint from "@/components/investing/InvestingBlueprint";
import InvestingActionPlan from "@/components/investing/InvestingActionPlan";
import InvestingTestimonials from "@/components/investing/InvestingTestimonials";
import InvestingFAQ from "@/components/investing/InvestingFAQ";
import InvestingCTA from "@/components/investing/InvestingCTA";

const Investing = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const navigate = useNavigate();

  const breadcrumbs = [{
    name: "Home",
    url: "https://www.standardthought.com",
    position: 1
  }, {
    name: "Investing",
    url: "https://www.standardthought.com/investing",
    position: 2
  }];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "What if I'm broke?",
      answer: "You can start with $10 and consistency. The key is to start—no amount is too small. Skip one coffee this week, invest that $5. Every dollar you put to work today is building your future freedom."
    },
    {
      question: "How risky is this, really?",
      answer: "We show you how to move smart, avoid scams, and build slow if you need to. The biggest risk is doing nothing while inflation eats your money. Smart investing with index funds is way safer than gambling or staying broke."
    },
    {
      question: "How fast will I see results?",
      answer: "No overnight hype. Real investing is about stacking slow and steady wins. You might see some growth in months, but real wealth building happens over years. The goal is financial freedom, not quick flips."
    },
    {
      question: "Do I need to watch the market all day?",
      answer: "Nah, that's day trading—which is basically gambling. Real investing is set-it-and-forget-it. Put your money in solid index funds, automate your investments, and check in maybe once a month. Your time is better spent building your income."
    }
  ];

  const faqSchema = generateFAQSchema({ faqs: faqData });

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
        title="Investing for Beginners: Start with $100 | StandardThought" 
        description="Start investing without trust funds or connections. Real strategies for building wealth from your first $100." 
        keywords="investing from nothing, first time investing, investment strategies beginners, build wealth from zero, asset building, generational wealth, urban investing" 
        url="/investing" 
        type="article" 
        breadcrumbs={breadcrumbs} 
      />

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
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
              Investing From the{" "}
              <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
                Ground Up
              </span>
              —No Trust Fund, No Excuses
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-black dark:text-brand-cream leading-relaxed px-4 mb-12">
              Real talk: Investing isn't just for the rich or the connected. Here's how to start stacking assets, 
              flipping your first $100, and building generational wealth—even if you're starting with nothing.
            </p>
          </div>
        </section>

        <WhyInvestingMatters />

        <InvestingMythsRealities />

        <InvestingBlueprint />

        <InvestingActionPlan />

        <InvestingTestimonials />

        <InvestingFAQ />

        <InvestingCTA />

        {/* Internal Linking for SEO */}
        <InternalLinkingHub currentPage="/investing" showPillarsOnly={true} limit={3} />

        {/* Coming Soon Placeholder */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-300/10 dark:border-gray-700/10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-brand-cream">
                Investing Content Coming Soon
              </h2>
              <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed">
                We're putting together the most comprehensive investing guide for first-gen entrepreneurs. 
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

export default Investing;