import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AdminSectionCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
}

export const AdminSectionCard = ({ 
  children, 
  className, 
  title, 
  description, 
  icon 
}: AdminSectionCardProps) => {
  return (
    <div className={cn(
      "relative bg-[#F2F2F2] backdrop-blur-sm",
      "border-2 border-transparent rounded-xl overflow-hidden",
      "shadow-lg hover:shadow-xl transition-all duration-300",
      "group",
      // Pearlescent border effect
      "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
      "before:bg-gradient-to-r before:from-yellow-300/80 before:via-yellow-400/90 before:to-yellow-500/80",
      "before:bg-[length:200%_200%] before:animate-[pearlescent_3s_ease-in-out_infinite]",
      "before:-z-10",
      // Inner background to create border effect with cream color  
      "after:absolute after:inset-[2px] after:bg-[#F2F2F2] after:rounded-[10px] after:-z-10",
      className
    )}>
      {/* Header section if title provided */}
      {(title || description || icon) && (
        <div className="relative z-10 p-8 pb-5 border-b border-gray-300/50">
          <div className="flex items-start gap-4">
            {icon && (
              <div className="flex-shrink-0 p-3 rounded-lg bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 group-hover:bg-yellow-400/20 transition-colors">
                {icon}
              </div>
            )}
            <div className="flex-1">
              {title && (
                <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2 group-hover:text-yellow-600 transition-colors">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-base text-gray-600 leading-relaxed font-medium">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-8 text-[#0D0D0D]">
        {children}
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20 rounded-xl" />
      </div>
    </div>
  );
};