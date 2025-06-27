
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

      {/* Hero Section with extra top padding */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-[#247EFF]/10 to-transparent">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-6 leading-tight">
            Your Questions, <span className="text-[#247EFF]">Answered</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8 leading-relaxed">
            Real talk on building wealth, fixing credit, and securing the bag with AI side hustles
          </p>
          <div className="w-24 h-1 bg-[#247EFF] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="pb-16 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <UrbanFinanceFAQs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
