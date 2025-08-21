import React from "react";
import { AdminSidebar } from "./AdminSidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { BackButton } from "./BackButton";
import { useLocation } from "react-router-dom";
import SEO from "@/components/seo";

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  title = "Admin Dashboard",
  description = "Manage your site content, guides, and marketing campaigns"
}) => {
  const location = useLocation();
  const isOnDashboard = location.pathname === '/admin' || location.pathname === '/admin/';
  
  return (
    <div className="min-h-screen bg-gray-800 text-foreground">
      <SEO 
        title={`${title} | Standardthought`}
        description={description}
        url="/admin"
        noIndex={true}
      />
      
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AdminSidebar />
          
          <SidebarInset className="bg-gray-800">
            <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border bg-gray-700 px-4">
              <SidebarTrigger className="-ml-1" />
              {!isOnDashboard && <BackButton />}
              <div className="flex-1">
                <h1 className="font-semibold text-lg text-foreground">{title}</h1>
              </div>
            </header>
            
            <main className="flex-1 overflow-auto p-6 bg-gray-800">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};