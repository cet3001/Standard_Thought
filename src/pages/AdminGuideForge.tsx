import Navigation from "@/components/navigation";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Footer from "@/components/footer";
import SEO from "@/components/seo";

const AdminGuideForge = () => {
  const headerHeight = useHeaderHeight();

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Guide Forge | Admin | Standardthought"
        description="Create and manage guides using the integrated Guide Forge tool."
        url="/admin/guide-forge"
        noIndex={true}
      />
      
      <Navigation />
      
      <main style={{ marginTop: `${headerHeight}px`, paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
              Guide Forge
            </h1>
            <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80">
              Create and manage your guides with the integrated Guide Forge tool
            </p>
          </div>
          
          <div className="bg-white dark:bg-brand-black/50 rounded-lg shadow-lg overflow-hidden border border-[#0A0A0A]/10 dark:border-brand-cream/20">
            <iframe 
              src="https://guide-forge-standard.lovable.app/?adminMode=true&returnUrl=https://www.standardthought.com/admin/dashboard"
              width="100%" 
              height="800px"
              className="border-none"
              title="Guide Forge Integration"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminGuideForge;