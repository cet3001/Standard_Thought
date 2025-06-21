
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
    }
  ];

  return (
    <section className="py-16 bg-[#247EFF]/5 dark:bg-[#247EFF]/10 rounded-3xl my-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
            Real People, Real Results
          </h2>
          <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
            These aren't fake testimonials—these are builders like you who put in the work and saw results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-brand-black/50 rounded-2xl p-6 border border-[#247EFF]/20 relative">
              <Quote className="h-8 w-8 text-[#247EFF] mb-4" />
              
              <blockquote className="text-[#0A0A0A] dark:text-brand-cream mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#0A0A0A] dark:text-brand-cream">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                    {testimonial.location}
                  </div>
                </div>
                <div className="bg-[#247EFF]/10 text-[#247EFF] px-3 py-1 rounded-full text-xs font-semibold">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
            <strong>1,000+ builders</strong> have used these exact strategies to level up their financial game
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesTestimonial;
