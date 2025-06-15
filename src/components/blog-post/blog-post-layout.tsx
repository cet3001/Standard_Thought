
import { ReactNode } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";

interface BlogPostLayoutProps {
  children: ReactNode;
}

const BlogPostLayout = ({ children }: BlogPostLayoutProps) => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      <div className="pt-24">
        <BreadcrumbNavigation />
      </div>
      
      <article className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {children}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostLayout;
