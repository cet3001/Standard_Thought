import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

const GlassPanel = ({ children, className }: GlassPanelProps) => {
  return (
    <section
      className={cn(
        "relative isolate rounded-2xl bg-brand-black/60 backdrop-blur-md",
        "ring-1 ring-white/10 shadow-inner shadow-brand-black/40",
        className
      )}
    >
      {children}
    </section>
  );
};

export default GlassPanel;