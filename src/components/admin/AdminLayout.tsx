import React from "react";
import { AdminSidebar } from "./AdminSidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
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
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${title} | Standardthought`}
        description={description}
        url="/admin"
        noIndex={true}
      />
      
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AdminSidebar />
          
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="flex-1">
                <h1 className="font-semibold text-lg">{title}</h1>
              </div>
            </header>
            
            <main className="flex-1 overflow-auto p-6">
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