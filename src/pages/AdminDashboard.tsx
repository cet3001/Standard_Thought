import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminDashboard as AdminDashboardComponent } from "@/components/admin/AdminDashboard";

const AdminDashboard = () => {
  return (
    <AdminLayout title="Admin Dashboard" description="Manage your site content, guides, email campaigns, and SEO settings from the central admin dashboard.">
      <AdminDashboardComponent />
    </AdminLayout>
  );
};

export default AdminDashboard;
