import { AdminLayout } from "@/components/admin/AdminLayout";
import { CTAManagement } from "@/components/admin/CTAManagement";

const AdminCTA = () => {
  return (
    <AdminLayout title="CTA Management" description="Link call-to-action buttons to guides and ensure proper functionality">
      <CTAManagement />
    </AdminLayout>
  );
};

export default AdminCTA;