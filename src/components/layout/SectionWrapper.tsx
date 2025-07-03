import { ReactNode } from "react";
import SectionOverlayBox from "./SectionOverlayBox";

// Wrapper that now leans on SectionOverlayBox for the standardized look.

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return (
    <section className={`relative ${className}`}>
      <SectionOverlayBox>
        {children}
      </SectionOverlayBox>
    </section>
  );
};

export default SectionWrapper;