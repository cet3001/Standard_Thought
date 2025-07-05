import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useGuideDownload } from "@/hooks/use-guide-download";
import { useGuides } from "@/hooks/use-guides";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckSquare, Eye, Shield, CreditCard, Clock, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { trackButtonClick } from "@/lib/analytics-utils";
import { useState, useEffect } from "react";
const Credit = () => {
  useMobilePerformance();
  const {
    textureImageUrl
  } = useUrbanTexture();
  const navigate = useNavigate();
  const { guides, loading: guidesLoading } = useGuides();
  const { downloadGuide, isDownloading } = useGuideDownload();
  
  // Testimonials data
  const testimonials = [
    {
      quote: "I went from a 520 to a 680 in 9 months—no cosigner, no cap.",
      name: "Tasha",
      location: "South Side",
      rotation: "rotate-2"
    },
    {
      quote: "Standard Thought showed me the play. Now I got my first apartment in my name.",
      name: "Jamal",
      location: "Oakland",
      rotation: "-rotate-1"
    },
    {
      quote: "Secured card strategy was pure game. Built my credit and kept my money safe.",
      name: "Maya",
      location: "Detroit",
      rotation: "rotate-3"
    },
    {
      quote: "From 480 to 720 in less than a year. These strategies actually work.",
      name: "Carlos",
      location: "East LA",   
      rotation: "-rotate-2"
    },
    {
      quote: "First time somebody explained credit without talking down to me. Real recognize real.",
      name: "Keisha",
      location: "Baltimore",
      rotation: "rotate-1"
    },
    {
      quote: "Went from getting denied everywhere to pre-approved for everything. Credit game changed.",
      name: "Marcus",
      location: "Atlanta",
      rotation: "-rotate-3"
    }
  ];

  // Testimonials rotation state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Find the credit building guide
  const creditGuide = guides?.find(guide => 
    guide.title.toLowerCase().includes('credit building action plan')
  );

  const handleDownloadGuide = async () => {
    trackButtonClick('Download Guide', 'credit_page', 'credit_building_action_plan');
    
    if (!creditGuide) {
      console.error('Credit guide not found');
      return;
    }
    
    // Simple email collection
    const email = prompt('Enter your email to download the Credit Building Action Plan:');
    if (!email) return;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Download the guide
    await downloadGuide(creditGuide.file_path || creditGuide.file_name || 'Credit Building Action Plan.pdf', email);
  };

  const breadcrumbs = [{
    name: "Home",
    url: "https://www.standardthought.com",
    position: 1
  }, {
    name: "Credit",
    url: "https://www.standardthought.com/credit",
    position: 2
  }];
  return <div className="min-h-screen relative overflow-hidden">
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
      <SEO title="Build Credit From Nothing | Credit Building for First-Gen Entrepreneurs | Standardthought" description="Learn how to build credit from zero without a cosigner. Real strategies for fixing your credit score, unlocking better rates, and making generational progress with street-smart credit building." keywords="build credit from nothing, credit building without cosigner, fix credit score, credit for first generation, urban credit building, credit repair strategies, improve credit rating" url="/credit" type="article" breadcrumbs={breadcrumbs} />

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
              Build Credit From Nothing—{" "}
              <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
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
                <p className="text-xl sm:text-2xl text-black dark:text-brand-cream leading-relaxed text-center font-medium">Credit isn't just a number—it's your ticket to better apartments, lower car payments, and real wealth moves. If you've been locked out, this is your blueprint to break in.</p>
                
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

        {/* Credit Myths vs. Realities Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-black dark:text-brand-cream text-center">
                Credit Myths vs.{" "}
                <span className="text-[#FFD700]">Realities</span>
              </h2>
              
              <div className="grid gap-8 sm:gap-12 max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 p-6 sm:p-8 rounded-xl">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                      Myth: You need a cosigner to start.
                    </h3>
                    <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                      <span className="text-green-600 dark:text-green-400 font-bold">Reality:</span> There are ways to build solo, even with no family help.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 p-6 sm:p-8 rounded-xl">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                      Myth: Bad credit is forever.
                    </h3>
                    <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                      <span className="text-green-600 dark:text-green-400 font-bold">Reality:</span> You can flip your score in 6–12 months with the right moves.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 p-6 sm:p-8 rounded-xl">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      Myth: Credit cards are traps.
                    </h3>
                    <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                      <span className="text-green-600 dark:text-green-400 font-bold">Reality:</span> If you play it smart, they're tools for stacking points and building history.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Credit Building Blueprint Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-black dark:text-brand-cream text-center">
                Step-by-Step:{" "}
                <span className="text-[#FFD700]">From No Score to Power Moves</span>
              </h2>
              
              <div className="max-w-3xl mx-auto mt-12">
                {/* Timeline Steps */}
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                        1. Check Your Credit (for Free)
                      </h3>
                      <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                        Go to annualcreditreport.com and pull your reports from all three bureaus (Experian, Equifax, TransUnion). Look for accounts you don't recognize, incorrect balances, or late payments that aren't yours.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                        2. Dispute the B.S.
                      </h3>
                      <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                        File disputes online through each bureau's website for any errors you found. Keep records of everything and follow up if they don't respond within 30 days.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                        3. Start with a Secured Card or Builder Loan
                      </h3>
                      <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                        Apply for a secured credit card with a $200-500 deposit or a credit builder loan from a credit union. Use the card for small purchases like gas or groceries, then pay it off immediately.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                        4. Pay On Time, Every Time
                      </h3>
                      <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                        Set up automatic payments for at least the minimum amount due. Add phone reminders 2-3 days before your due date as backup—one late payment can drop your score 60-100 points.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <CheckSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                        5. Keep Utilization Low
                      </h3>
                      <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                        Never use more than 30% of your available credit, but aim for under 10% for the best scores. If your limit is $500, keep your balance under $50 when statements close.
                      </p>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                        6. Level Up
                      </h3>
                      <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                        After 6-12 months of good history, apply for an unsecured card with rewards or request credit limit increases. Don't close old accounts—keep them open to maintain your credit history length.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Building Action Plan Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-[#FFD700]/30">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-black dark:text-brand-cream">
                  Credit Building{" "}
                  <span className="text-[#FFD700]">Action Plan</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-black dark:text-brand-cream leading-relaxed mb-8 max-w-2xl mx-auto">
                  Download the <strong>Credit Flip Action Plan</strong>: Your step-by-step guide to building credit from scratch.
                </p>
                
                <button 
                  onClick={handleDownloadGuide}
                  disabled={isDownloading || guidesLoading}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-black text-xl rounded-xl transition-all duration-300 hover:scale-105 transform rotate-1 hover:rotate-0 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'Permanent Marker, cursive',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))'
                  }}
                >
                  {isDownloading ? 'Downloading...' : 'Get the Plan'}
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="group-hover:translate-y-0.5 transition-transform"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </button>
                
                <p className="text-sm text-black/70 dark:text-brand-cream/70 mt-4">
                  Free download • No spam • Just the blueprint
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Builder Wins (Testimonials) Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-black dark:text-brand-cream text-center">
              Real Builder{" "}
              <span className="text-[#FFD700]">Wins</span>
            </h2>
            
            {/* Testimonials Carousel */}
            <div className="relative max-w-2xl mx-auto">
              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-[#FFD700]/80 hover:bg-[#FFD700] text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  transform: 'rotate(-2deg)',
                  filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.3))'
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-[#FFD700]/80 hover:bg-[#FFD700] text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  transform: 'rotate(2deg)',
                  filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.3))'
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Testimonial Cards - Polaroid Style */}
              <div className="relative h-80 flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentTestimonial 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-95 z-0'
                    }`}
                  >
                    <div
                      className={`bg-white dark:bg-gray-800 p-6 pb-8 rounded-lg shadow-2xl max-w-md mx-auto transform transition-all duration-300 hover:scale-105 ${testimonial.rotation}`}
                      style={{
                        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
                        border: '8px solid #f8f8f8',
                        borderBottom: '24px solid #f8f8f8'
                      }}
                    >
                      {/* Polaroid Photo Effect */}
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 h-32 rounded mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                          <span className="text-black font-black text-2xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-lg font-medium text-black dark:text-white mb-4 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Attribution */}
                      <div className="flex justify-between items-center">
                        <cite className="text-[#FFD700] font-bold not-italic">
                          —{testimonial.name}
                        </cite>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#FFD700] scale-125' 
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ: Real Talk About Credit Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-black dark:text-brand-cream text-center">
                FAQ: Real Talk About{" "}
                <span className="text-[#FFD700]">Credit</span>
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {/* FAQ 1 */}
                <div className="bg-gradient-to-r from-slate-500/10 to-slate-600/10 border border-slate-400/20 rounded-xl p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                    What if I got denied before?
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    You can always bounce back. We show you how to rebuild, even after setbacks. Every denial is just feedback—use it to come back stronger with the right strategy.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-xl p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                    Can I build credit with no job?
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Yes—secured cards and builder loans don't require a big income, just consistency. Even with irregular income, you can start building as long as you can make small, regular payments.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/20 rounded-xl p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                    How long before I see results?
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Most see a score jump in 3–6 months if they follow the blueprint. The key is consistent payments and keeping utilization low—patience pays off big time.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-400/20 rounded-xl p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                    Will checking my credit hurt my score?
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Nah, checking your own credit is a "soft pull" and won't hurt your score at all. You should actually check it regularly to track your progress and catch any errors early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Join the Movement Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-[#FFD700]/30">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-black dark:text-brand-cream">
                  Join the{" "}
                  <span className="text-[#FFD700]">Movement</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-black dark:text-brand-cream leading-relaxed mb-8 max-w-2xl mx-auto">
                  Get exclusive credit strategies, real builder wins, and financial moves that actually work—straight to your inbox.
                </p>
                
                <button 
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-black text-xl rounded-xl transition-all duration-300 hover:scale-105 transform rotate-1 hover:rotate-0 shadow-lg hover:shadow-xl mb-4"
                  style={{
                    fontFamily: 'Permanent Marker, cursive',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))'
                  }}
                >
                  Get More Credit Moves—Join the Community
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                </button>
                
                <p className="text-sm text-black/70 dark:text-brand-cream/70">
                  No spam, just real blueprints and updates.
                </p>
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
    </div>;
};
export default Credit;