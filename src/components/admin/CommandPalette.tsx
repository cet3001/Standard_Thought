import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  Link2, 
  Search, 
  Mail 
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const adminCommands = [
  {
    id: "dashboard",
    title: "Go to Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    id: "guides",
    title: "Go to Guide Management",
    path: "/admin/guides",
    icon: BookOpen,
  },
  {
    id: "cta",
    title: "Go to CTA Management", 
    path: "/admin/cta",
    icon: Link2,
  },
  {
    id: "seo",
    title: "Go to SEO Management",
    path: "/admin/seo",
    icon: Search,
  },
  {
    id: "email",
    title: "Go to Email Campaigns",
    path: "/admin/email",
    icon: Mail,
  },
];

export const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {adminCommands.map((command) => {
            const Icon = command.icon;
            return (
              <CommandItem
                key={command.id}
                onSelect={() => handleSelect(command.path)}
                className="cursor-pointer"
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{command.title}</span>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};