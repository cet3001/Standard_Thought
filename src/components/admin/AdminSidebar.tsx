import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  Link2, 
  Search, 
  Mail
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const adminRoutes = [
  { 
    title: "Dashboard", 
    url: "/admin", 
    icon: LayoutDashboard 
  },
  { 
    title: "Guide Management", 
    url: "/admin/guides", 
    icon: BookOpen 
  },
  { 
    title: "CTA Management", 
    url: "/admin/cta", 
    icon: Link2 
  },
  { 
    title: "SEO Management", 
    url: "/admin/seo", 
    icon: Search 
  },
  { 
    title: "Email Campaigns", 
    url: "/admin/email", 
    icon: Mail 
  },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/admin") {
      return currentPath === "/admin";
    }
    return currentPath.startsWith(path);
  };

  const getNavClasses = (path: string) => {
    const baseClasses = "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full";
    return isActive(path) 
      ? `${baseClasses} bg-primary text-primary-foreground font-medium` 
      : `${baseClasses} text-muted-foreground hover:bg-muted hover:text-foreground`;
  };

  return (
    <Sidebar
      className="bg-card border-r border-border"
      collapsible="icon"
    >
      <SidebarContent className="bg-card">
        <SidebarGroup className="border-none">
          <SidebarGroupLabel className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
            {!isCollapsed && "Admin Panel"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {adminRoutes.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={route.url} 
                      end={route.url === "/admin"}
                      className={getNavClasses(route.url)}
                    >
                      <route.icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span>{route.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}