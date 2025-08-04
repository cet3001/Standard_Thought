import Navigation from "@/components/navigation";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { AdminDashboard as AdminDashboardComponent } from "@/components/admin/AdminDashboard";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Admin Dashboard | Standardthought"
        description="Manage your site content, guides, email campaigns, and SEO settings from the central admin dashboard."
        url="/admin"
        noIndex={true}
      />
      
      <Navigation />
      
      <main style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <AdminDashboardComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;