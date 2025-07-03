import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

const GlassPanel = ({ children, className }: GlassPanelProps) => {
  return (
    <section className={cn("glass-panel", className)}>
      {children}
    </section>
  );
};

export default GlassPanel;