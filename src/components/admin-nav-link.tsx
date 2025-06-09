
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const AdminEmailNavLink = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) return null;

  return (
    <Link
      to="/admin-email"
      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      <Mail className="w-4 h-4" />
      Send Newsletter
    </Link>
  );
};

export default AdminEmailNavLink;
