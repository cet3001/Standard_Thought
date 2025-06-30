
import { Accordion } from "@/components/ui/accordion";
import FAQSchema from "@/components/seo/faq-schema";
import { resourcesFAQs } from "./resources-faq-data";
import FAQSectionHeader from "./resources-faq/faq-section-header";
import FAQCard from "./resources-faq/faq-card";
import FAQAnimations from "./resources-faq/faq-animations";

const ResourcesFAQSection = () => {
  return (
    <section className="py-12 md:py-16 mx-4 md:mx-0" aria-labelledby="resources-faq-heading">
      <FAQSchema faqs={resourcesFAQs} />
      <FAQAnimations />
      
      <FAQSectionHeader />
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {resourcesFAQs.map((faq, index) => (
            <FAQCard key={index} faq={faq} index={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ResourcesFAQSection;
