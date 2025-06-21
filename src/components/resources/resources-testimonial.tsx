
import { Quote } from "lucide-react";

const ResourcesTestimonial = () => {
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
    <section className="py-12 md:py-16 bg-[#247EFF]/5 dark:bg-[#247EFF]/10 rounded-2xl md:rounded-3xl my-12 md:my-16 mx-4 md:mx-0">
      <div className="container mx-auto px-4 md:px-6">
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
            <div key={index} className="bg-white dark:bg-brand-black/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#247EFF]/20 relative">
              <Quote className="h-6 w-6 md:h-8 md:w-8 text-[#247EFF] mb-3 md:mb-4" />
              
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
                <div className="bg-[#247EFF]/10 text-[#247EFF] px-2 md:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
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
    </section>
  );
};

export default ResourcesTestimonial;
