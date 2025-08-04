import Navigation from "@/components/navigation";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { CTAManagement } from "@/components/admin/CTAManagement";

const AdminCTA = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="CTA Management | Admin | Standardthought"
        description="Manage call-to-action buttons and their connections to guides across your website."
        url="/admin/cta"
        noIndex={true}
      />
      
      <Navigation />
      
      <main style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
              CTA Management
            </h1>
            <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80">
              Link call-to-action buttons to guides and ensure proper functionality
            </p>
          </div>
          
          <CTAManagement />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminCTA;