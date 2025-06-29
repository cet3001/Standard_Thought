
import { Link } from "react-router-dom";
import { Home, Mail, Upload } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <Home className="w-5 h-5" />
            Standard Thought
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/admin-email" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
