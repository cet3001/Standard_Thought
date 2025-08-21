import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navigation from "@/components/navigation";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { PostCreationWorkflow } from '@/components/admin/PostCreationWorkflow';
import Loading from '@/components/ui/loading';
import { toast } from '@/hooks/use-toast';

const AdminGuideSuccess = () => {
  const { id } = useParams<{ id: string }>();
  const headerHeight = useHeaderHeight();
  const [guide, setGuide] = useState<{ id: string; title: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGuide = async () => {
      if (!id) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('guides')
          .select('id, title')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching guide:', error);
          setError(true);
          toast({
            title: "Error",
            description: "Failed to load guide information.",
            variant: "destructive",
          });
        } else if (data) {
          setGuide(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGuide();
  }, [id]);

  if (!id || error) {
    return <Navigate to="/admin/guides" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        <main style={{ marginTop: `${headerHeight}px`, paddingTop: '3rem', paddingBottom: '4rem' }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <Loading />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!guide) {
    return <Navigate to="/admin/guides" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title={`Guide Created: ${guide.title} | Admin | Standardthought`}
        description="Your guide has been successfully created. Choose your next action to maximize its impact."
        url={`/admin/guides/success/${id}`}
        noIndex={true}
      />
      
      <Navigation />
      
      <main style={{ marginTop: `${headerHeight}px`, paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <PostCreationWorkflow id={guide.id} title={guide.title} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminGuideSuccess;