
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Card, CardContent } from "@/components/ui/card";

const InvestingTestimonials = () => {
  const testimonials = [
    {
      quote: "I started with $5 on Cash App and bought my first stock. Now, two years later, I'm investing $20 a month and teaching my little cousin how to do it too.",
      author: "Darnell",
      location: "Chicago"
    },
    {
      quote: "I thought you needed a lot of money to invest, but I started with $10 and now I've got a portfolio worth over $1,000.",
      author: "Keisha",
      location: "Atlanta"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <HeaderHierarchy level={2} className="text-center mb-12 text-white">
            Real People, Real <span className="text-[#FFD700]">Progress</span>
          </HeaderHierarchy>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#247EFF]/10 to-green-500/10 border-[#247EFF]/30">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-gray-200 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#247EFF] to-green-500 flex items-center justify-center text-white font-bold">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-[#FFD700]">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestingTestimonials;
