import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import UrbanFinanceFAQs from "@/components/faq/urban-finance-faqs";

/**
 * Page: /faq
 * Purpose: Serve a real FAQ page with navigation, SEO, and grouped questions.
 * Why: The old page was barebones, leaving folks staring at a blank screen.
 */
const FAQ = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO
        title="Urban Finance FAQs | Standardthought"
        description="Quick answers on credit, investing, and AI hustles for first-gen wealth builders."
        keywords="faq, credit building, urban investing, ai side hustles, generational wealth"
        url="/faq"
      />
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-16 max-w-4xl">
        <UrbanFinanceFAQs />
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
