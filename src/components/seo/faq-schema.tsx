
import { Helmet } from "react-helmet";
import { generateFAQSchema } from "./schemas";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = generateFAQSchema({ faqs });
  
  // Don't render anything if schema is null or empty
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
