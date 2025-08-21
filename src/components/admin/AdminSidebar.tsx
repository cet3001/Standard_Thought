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
      ? `${baseClasses} bg-yellow-400/20 text-[#0D0D0D] font-semibold border border-yellow-400/30` 
      : `${baseClasses} text-gray-600 hover:bg-yellow-400/10 hover:text-[#0D0D0D]`;
  };

  return (
    <Sidebar
      className="bg-white border-r border-gray-300"
      collapsible="icon"
    >
      <SidebarContent className="bg-white">
        <SidebarGroup className="border-none">
          <SidebarGroupLabel className="text-[#0D0D0D] font-semibold text-sm uppercase tracking-wider mb-4">
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