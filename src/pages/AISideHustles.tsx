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

        {/* Why AI Side Hustles Matter Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
                Why AI Side Hustles Matter{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}>
                  (Real Talk)
                </span>
              </h2>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10 mb-12">
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-black dark:text-brand-cream leading-relaxed italic">
                "AI is the new cheat code for the block. If you've ever felt locked out of tech or business, 
                this is your way in—no gatekeepers, no cap."
              </blockquote>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* The Struggle */}
              <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
                  The Real Struggle
                </h3>
                <ul className="space-y-3 text-black dark:text-brand-cream">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Lack of Access:</strong> Most AI courses cost hundreds or assume you already have resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Tech Intimidation:</strong> They make it sound like you need a computer science degree</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Culture Gap:</strong> Most advice comes from people who don't understand our hustle</span>
                  </li>
                </ul>
              </div>

              {/* Why Most AI Advice Doesn't Work */}
              <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#FFD700]">
                  Why Most "AI Money" Advice Falls Short
                </h3>
                <ul className="space-y-3 text-black dark:text-brand-cream">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>One-Size-Fits-All:</strong> Doesn't account for different starting points or resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Hype Over Help:</strong> Promises overnight success instead of real, sustainable growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Missing the Culture:</strong> Ignores how we actually network, build, and support each other</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed max-w-3xl mx-auto">
                We're here to change that. No fluff, no false promises—just real strategies that work for people 
                who understand the grind and are ready to level up with AI as their tool, not their master.
              </p>
            </div>
          </div>
        </section>

        {/* AI Side Hustle Myths vs. Realities Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
                AI Side Hustle{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}>
                  Myths vs. Realities
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              {/* Myth Card 1 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="bg-red-500/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/20 mb-4">
                      <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                        Myth:
                      </h3>
                      <p className="text-black dark:text-brand-cream">
                        You need to know how to code.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FFD700]/20">
                      <h3 className="text-lg font-bold text-[#FFD700] mb-2">
                        Reality:
                      </h3>
                      <p className="text-black dark:text-brand-cream">
                        Most AI hustles use drag-and-drop tools—no coding required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Myth Card 2 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="bg-red-500/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/20 mb-4">
                      <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                        Myth:
                      </h3>
                      <p className="text-black dark:text-brand-cream">
                        You need big money to start.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FFD700]/20">
                      <h3 className="text-lg font-bold text-[#FFD700] mb-2">
                        Reality:
                      </h3>
                      <p className="text-black dark:text-brand-cream">
                        Many AI tools are free or cost less than a Netflix subscription.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Myth Card 3 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="bg-red-500/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/20 mb-4">
                      <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                        Myth:
                      </h3>
                      <p className="text-black dark:text-brand-cream">
                        AI is just a fad.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FFD700]/20">
                      <h3 className="text-lg font-bold text-[#FFD700] mb-2">
                        Reality:
                      </h3>
                      <p className="text-black dark:text-brand-cream">
                        The bag is real—if you know how to move smart and stay ahead of the curve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step AI Side Hustle Blueprint Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
                Step-by-Step: From Zero to Your First{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}>
                  AI Bag
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/30">
                      <span className="text-xl font-bold text-[#FFD700]">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-brand-cream">
                      Pick Your Hustle
                    </h3>
                    <p className="text-black dark:text-brand-cream leading-relaxed">
                      AI writing, art/design, chatbots, voiceovers, social media automation, print-on-demand, and more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/30">
                      <span className="text-xl font-bold text-[#FFD700]">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-brand-cream">
                      Choose Your Tool
                    </h3>
                    <p className="text-black dark:text-brand-cream leading-relaxed">
                      Free/affordable AI platforms (e.g., ChatGPT, Canva, ElevenLabs, Midjourney, etc.).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/30">
                      <span className="text-xl font-bold text-[#FFD700]">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-brand-cream">
                      Set Up Your Offer
                    </h3>
                    <p className="text-black dark:text-brand-cream leading-relaxed">
                      How to package your service or product for real people and small businesses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/30">
                      <span className="text-xl font-bold text-[#FFD700]">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-brand-cream">
                      Automate the Grind
                    </h3>
                    <p className="text-black dark:text-brand-cream leading-relaxed">
                      Use AI to handle the boring stuff—emails, scheduling, content creation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/30">
                      <span className="text-xl font-bold text-[#FFD700]">5</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-brand-cream">
                      Get Your First Client or Sale
                    </h3>
                    <p className="text-black dark:text-brand-cream leading-relaxed">
                      Where to find your first customer (IG, Fiverr, Upwork, local businesses).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/30">
                      <span className="text-xl font-bold text-[#FFD700]">6</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-brand-cream">
                      Scale Up
                    </h3>
                    <p className="text-black dark:text-brand-cream leading-relaxed">
                      Turn one-off gigs into recurring income, upsell, and build your own brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Builder Wins Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
                Real Builder{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}>
                  Wins
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Polaroid Card 1 */}
              <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105" style={{
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'
              }}>
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-32 mb-4 rounded flex items-center justify-center">
                  <div className="text-gray-600 text-6xl font-bold">💰</div>
                </div>
                <blockquote className="text-black text-lg font-medium mb-4 leading-relaxed">
                  "I made my first $500 writing blog posts with ChatGPT—no tech background, just hustle."
                </blockquote>
                <div className="text-right">
                  <cite className="text-black font-bold not-italic">—Dre, Atlanta</cite>
                </div>
                {/* Tape effect */}
                <div className="absolute -top-2 -right-2 w-12 h-6 bg-yellow-200/80 transform rotate-45 rounded"></div>
              </div>

              {/* Polaroid Card 2 */}
              <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-xl transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105" style={{
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'
              }}>
                <div className="bg-gradient-to-br from-purple-200 to-pink-200 h-32 mb-4 rounded flex items-center justify-center">
                  <div className="text-purple-600 text-6xl font-bold">🎨</div>
                </div>
                <blockquote className="text-black text-lg font-medium mb-4 leading-relaxed">
                  "Standard Thought showed me how to use AI art to launch my own T-shirt line."
                </blockquote>
                <div className="text-right">
                  <cite className="text-black font-bold not-italic">—Maya, Chicago</cite>
                </div>
                {/* Tape effect */}
                <div className="absolute -top-2 -left-2 w-12 h-6 bg-yellow-200/80 transform -rotate-45 rounded"></div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed max-w-2xl mx-auto">
                These builders started from zero and turned AI tools into real income streams. 
                Your story could be next.
              </p>
            </div>
          </div>
        </section>

        {/* AI Side Hustle Action Plan Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <div className="bg-gradient-to-br from-[#FFD700]/10 via-[#FFA500]/5 to-[#FFD700]/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-[#FFD700]/30 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-black dark:text-brand-cream leading-tight">
                  AI Side Hustle{" "}
                  <span className="text-[#FFD700]" style={{
                    background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}>
                    Action Plan
                  </span>
                  {" "}(Downloadable)
                </h2>
                
                <p className="text-xl sm:text-2xl mb-8 text-black dark:text-brand-cream leading-relaxed max-w-3xl mx-auto">
                  Download the AI Side Hustle Launch Plan: Your step-by-step guide to flipping AI tools into real money.
                </p>
                
                {/* Hand-drawn style button */}
                <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-black text-xl rounded-2xl transition-all duration-300 hover:scale-105 transform rotate-1 hover:rotate-0 shadow-lg hover:shadow-xl" style={{
                  fontFamily: 'Permanent Marker, cursive',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))',
                  border: '3px solid #000',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)'
                }}>
                  <span className="relative z-10">Get the Plan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                <p className="text-sm text-black/70 dark:text-brand-cream/70 mt-4 font-medium">
                  Free download • No spam • Real strategies that work
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