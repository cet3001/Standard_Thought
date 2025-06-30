
import { Quote } from "lucide-react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const ResourcesTestimonial = () => {
  const { textureImageUrl } = useUrbanTexture();

  const testimonials = [
    {
      quote: "This guide helped me go from no credit to approved for my first apartment in 8 months. The secured card strategy was game-changing.",
      name: "Jamal",
      location: "Brooklyn",
      result: "0 to 720 Credit Score"
    },
    {
      quote: "Started investing with $25 a week like Calvin taught. Two years later I've got $3,000 in my portfolio and finally feel like I'm building something.",
      name: "Maria",
      location: "Chicago",
      result: "$3K Portfolio Built"
    },
    {
      quote: "The AI side hustle blueprint got me my first $2K month freelancing. Now I'm making more than my day job.",
      name: "Deshawn",
      location: "Atlanta",
      result: "First $2K Month"
    },
    {
      quote: "I was drowning in overdraft fees every month. The cash flow system stopped that nightmare in 3 weeks. Haven't paid a fee since.",
      name: "Keisha",
      location: "Detroit",
      result: "No More Overdrafts"
    },
    {
      quote: "Used the micro-investing checklist and started with spare change from my coffee runs. Six months later I own shares in Apple and Tesla.",
      name: "Marcus",
      location: "Houston",
      result: "First Stock Portfolio"
    },
    {
      quote: "The credit building guide is straight fire. Went from 580 to 650 in four months just following the steps. My car loan rate dropped too.",
      name: "Aaliyah",
      location: "Miami",
      result: "70-Point Credit Jump"
    },
    {
      quote: "Started my virtual assistant business using the AI hustle guide. Made $800 my first month, $1,500 the second. This stuff actually works.",
      name: "Jordan",
      location: "Phoenix",
      result: "$1.5K in Month 2"
    },
    {
      quote: "The emergency fund strategy saved my life when my car broke down. Had $1,000 ready instead of panic and credit card debt.",
      name: "Tiffany",
      location: "Dallas",
      result: "$1K Emergency Fund"
    }
  ];

  return (
    <section className="py-12 md:py-16 rounded-2xl md:rounded-3xl my-12 md:my-16 mx-4 md:mx-0 relative overflow-hidden">
      {/* Urban Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-15 bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
              filter: 'contrast(1.2) brightness(0.8) saturate(0.9)'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-yellow-300/10 to-yellow-500/15 dark:from-yellow-500/30 dark:via-yellow-400/20 dark:to-yellow-600/25"></div>
        
        {/* Content overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent dark:from-transparent dark:via-black/20 dark:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-3 md:mb-4">
            Real People, Real Results
          </h2>
          <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto text-sm md:text-base">
            These aren't fake testimonials—these are builders like you who put in the work and saw results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/90 dark:bg-brand-black/70 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-yellow-200/30 relative">
              <Quote className="h-6 w-6 md:h-8 md:w-8 mb-3 md:mb-4" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }} />
              
              <blockquote className="text-[#0A0A0A] dark:text-brand-cream mb-4 md:mb-6 italic text-sm md:text-base leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#0A0A0A] dark:text-brand-cream text-sm md:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs md:text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                    {testimonial.location}
                  </div>
                </div>
                <div className="px-2 md:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 text-black" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
                }}>
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-xs md:text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
            <strong>2,500+ builders</strong> have used these exact strategies to level up their financial game
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default ResourcesTestimonial;
