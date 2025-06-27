import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Unsubscribe = () => {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'already_unsubscribed'>('loading');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUnsubscribe = useCallback(async () => {
    if (!token) return;
    
    setIsProcessing(true);
    
    try {
      // Call the database function to unsubscribe
      const { data, error } = await supabase.rpc('unsubscribe_user', {
        token: token
      });

      if (error) {
        console.error('Unsubscribe error:', error);
        setStatus('error');
      } else if (data === true) {
        setStatus('success');
      } else {
        setStatus('already_unsubscribed');
      }
    } catch (error) {
      console.error('Unsubscribe error:', error);
      setStatus('error');
    } finally {
      setIsProcessing(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      handleUnsubscribe();
    } else {
      setStatus('error');
    }
  }, [token, handleUnsubscribe]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="text-center py-12">
            <Loader2 className="mx-auto h-16 w-16 text-[#247EFF] animate-spin mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
              Processing Your Request
            </h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70">
              We're unsubscribing you from our newsletter...
            </p>
          </div>
        );

      case 'success':
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
              Successfully Unsubscribed
            </h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8">
              You've been removed from our newsletter. We're sad to see you go, but we respect your choice.
            </p>
            <div className="bg-[#247EFF]/10 border border-[#247EFF]/20 rounded-3xl p-6 max-w-md mx-auto">
              <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                Changed your mind? You can always re-subscribe anytime by visiting our website and signing up again.
              </p>
            </div>
          </div>
        );

      case 'already_unsubscribed':
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
              Already Unsubscribed
            </h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8">
              This email address has already been unsubscribed from our newsletter.
            </p>
            <p className="text-[#0A0A0A]/60 dark:text-brand-cream/60">
              If you're still receiving emails, please contact us directly.
            </p>
          </div>
        );

      case 'error':
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <XCircle size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
              Something Went Wrong
            </h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8">
              We couldn't process your unsubscribe request. This might be due to an invalid or expired link.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              disabled={isProcessing}
              className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300"
            >
              Try Again
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl overflow-hidden">
              <div className="p-12">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Unsubscribe;
