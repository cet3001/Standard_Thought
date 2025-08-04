import { Helmet } from "react-helmet";
import { generateProductSchema } from "@/components/seo/enhanced-schemas";

interface PaidGuide {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  price: number;
  currency: string;
  slug: string;
  watermark_url?: string;
  featured?: boolean;
  active?: boolean;
}

interface PaidGuideSchemaProps {
  guide: PaidGuide;
  pageUrl: string;
}

const PaidGuideSchema = ({ guide, pageUrl }: PaidGuideSchemaProps) => {
  const schema = generateProductSchema({
    name: guide.title,
    description: guide.description || guide.subtitle || `Premium guide: ${guide.title}`,
    url: pageUrl,
    image: guide.watermark_url,
    price: guide.price,
    currency: guide.currency,
    brand: "Standardthought",
    category: "Educational Content",
    availability: guide.active ? "InStock" : "OutOfStock"
  });

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default PaidGuideSchema;