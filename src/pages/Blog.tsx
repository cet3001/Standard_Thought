
import BlogPage from "@/components/blog/blog-page";
import PageShell from "@/components/layout/PageShell";
import GlassPanel from "@/components/layout/GlassPanel";

const Blog = () => {
  return (
    <PageShell>
      <main className="pt-32 pb-20">
        <GlassPanel className="mx-auto max-w-7xl p-12">
          <BlogPage />
        </GlassPanel>
      </main>
    </PageShell>
  );
};

export default Blog;
