import Navigation from "@/components/navigation";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { CTAManagement } from "@/components/admin/CTAManagement";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
          <div className="mb-6">
            <Link to="/admin">
              <Button variant="outline" className="mb-4 border-muted-foreground/20 hover:bg-accent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              CTA Management
            </h1>
            <p className="text-xl text-muted-foreground">
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