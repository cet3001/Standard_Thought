import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

const PageShell = ({ children }: PageShellProps) => {
  return (
    <div className="relative min-h-screen bg-dots bg-brand-black text-brand-cream">
      <div className="absolute inset-0 -z-10 bg-hero-fade" />
      {children}
    </div>
  );
};

export default PageShell;