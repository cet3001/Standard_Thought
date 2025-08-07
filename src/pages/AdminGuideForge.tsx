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
          
          <div className="bg-white dark:bg-brand-black/50 rounded-lg shadow-lg p-8 border border-[#0A0A0A]/10 dark:border-brand-cream/20 text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-3">
                Launch Guide Forge
              </h2>
              <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                Open the Guide Forge tool in a new window to create and manage your guides
              </p>
            </div>
            
            <button 
              onClick={() => {
                const url = 'https://guide-forge-standard.lovable.app/?adminMode=true&returnUrl=' + encodeURIComponent('https://www.standardthought.com/admin');
                window.open(url, 'guideGenerator', 'width=1200,height=800,scrollbars=yes,resizable=yes');
              }}
              className="bg-[#0A0A0A] dark:bg-brand-cream text-brand-cream dark:text-[#0A0A0A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0A0A0A]/90 dark:hover:bg-brand-cream/90 transition-colors"
            >
              Open Guide Forge
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminGuideForge;