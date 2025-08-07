import Navigation from "@/components/navigation";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
          <div className="mb-6">
            <Link to="/admin">
              <Button variant="outline" className="border-muted-foreground/20 hover:bg-accent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Guide Forge
            </h1>
            <p className="text-xl text-muted-foreground">
              Create and manage your guides with the integrated Guide Forge tool
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Launch Guide Forge
              </h2>
              <p className="text-muted-foreground">
                Open the Guide Forge tool in a new window to create and manage your guides
              </p>
            </div>
            
            <button 
              onClick={() => {
                const url = 'https://guide-forge-standard.lovable.app/?adminMode=true&returnUrl=' + encodeURIComponent('https://www.standardthought.com/admin');
                window.open(url, 'guideGenerator', 'width=1200,height=800,scrollbars=yes,resizable=yes');
              }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
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