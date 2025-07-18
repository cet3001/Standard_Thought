import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Home, ArrowRight } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useHeaderHeight } from '@/hooks/use-header-height';
import { useUrbanTexture } from '@/hooks/use-urban-texture';
import { useGuides } from '@/hooks/use-guides';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const headerHeight = useHeaderHeight();
  const { textureImageUrl } = useUrbanTexture();
  const { guides } = useGuides();
  const { toast } = useToast();
  const [guide, setGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const guideId = searchParams.get('guide_id');

  useEffect(() => {
    if (guideId && guides.length > 0) {
      const foundGuide = guides.find(g => g.id === guideId);
      setGuide(foundGuide);
      setLoading(false);
    }
  }, [guideId, guides]);

  const handleDownload = async () => {
    if (!guide?.file_path) {
      toast({
        title: "Error",
        description: "Guide file not available",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.storage
        .from('guides')
        .download(guide.file_path);

      if (error) throw error;

      // Create download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = guide.file_name || `${guide.title}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Download Started",
        description: `Your ${guide.title} is downloading now.`,
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Error",
        description: "Failed to download guide. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      <Helmet>
        <title>Payment Successful | Urban Wealth Blueprint</title>
        <meta name="description" content="Your purchase was successful. Download your guide and start building wealth." />
      </Helmet>

      <Navigation />

      <main className="relative z-10" style={{ marginTop: `${headerHeight}px`, paddingTop: '3rem' }}>
        <section className="py-16 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Success Message */}
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Payment Successful!</span>
                </h1>
                
                <p className="text-xl text-brand-black dark:text-brand-cream/80 mb-8">
                  Your purchase has been confirmed. Time to start building that legacy.
                </p>
              </div>

              {/* Guide Download Card */}
              {loading ? (
                <Card className="bg-gradient-to-br from-[#f4d03f]/20 via-[#f7dc6f]/15 to-[#fdeaa7]/25 dark:from-[#f4d03f]/10 dark:via-[#f7dc6f]/8 dark:to-[#fdeaa7]/15 border-2 border-[#FFD700]/30 backdrop-blur-sm animate-pulse">
                  <CardContent className="p-8">
                    <div className="h-6 bg-[#FFD700]/30 rounded mb-4"></div>
                    <div className="h-4 bg-[#FFD700]/20 rounded mb-6"></div>
                    <div className="h-12 bg-[#FFD700]/30 rounded"></div>
                  </CardContent>
                </Card>
              ) : guide ? (
                <Card className="bg-gradient-to-br from-[#f4d03f]/20 via-[#f7dc6f]/15 to-[#fdeaa7]/25 dark:from-[#f4d03f]/10 dark:via-[#f7dc6f]/8 dark:to-[#fdeaa7]/15 border-2 border-[#FFD700]/30 backdrop-blur-sm shadow-xl mb-12">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-black text-brand-black dark:text-brand-cream text-center">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-brand-black/80 dark:text-brand-cream/80 text-center leading-relaxed">
                      {guide.description}
                    </p>
                    
                    {guide.bullets && guide.bullets.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-bold text-brand-black dark:text-brand-cream">What's inside:</h4>
                        <ul className="space-y-2">
                          {guide.bullets.map((bullet: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2 text-brand-black/80 dark:text-brand-cream/80">
                              <span className="text-[#FFD700] mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button 
                      onClick={handleDownload}
                      className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-4 px-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Your Guide Now
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-gradient-to-br from-[#f4d03f]/20 via-[#f7dc6f]/15 to-[#fdeaa7]/25 dark:from-[#f4d03f]/10 dark:via-[#f7dc6f]/8 dark:to-[#fdeaa7]/15 border-2 border-[#FFD700]/30 backdrop-blur-sm shadow-xl mb-12">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
                      Purchase Confirmed
                    </h3>
                    <p className="text-brand-black/80 dark:text-brand-cream/80 mb-6">
                      Thank you for your purchase! Your payment has been processed successfully.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Next Steps */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-[#f4d03f]/15 via-[#f7dc6f]/10 to-[#fdeaa7]/20 dark:from-[#f4d03f]/8 dark:via-[#f7dc6f]/5 dark:to-[#fdeaa7]/10 border-2 border-[#FFD700]/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Home className="h-12 w-12 mx-auto mb-4 text-[#FFD700]" />
                    <h3 className="text-lg font-bold text-brand-black dark:text-brand-cream mb-2">
                      Explore More Blueprints
                    </h3>
                    <p className="text-brand-black/80 dark:text-brand-cream/80 mb-4 text-sm">
                      Check out our full collection of wealth-building guides.
                    </p>
                    <Link to="/sales">
                      <Button variant="outline" className="w-full border-[#FFD700]/50 hover:bg-[#FFD700]/10">
                        Browse All Guides
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#f4d03f]/15 via-[#f7dc6f]/10 to-[#fdeaa7]/20 dark:from-[#f4d03f]/8 dark:via-[#f7dc6f]/5 dark:to-[#fdeaa7]/10 border-2 border-[#FFD700]/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <ArrowRight className="h-12 w-12 mx-auto mb-4 text-[#FFD700]" />
                    <h3 className="text-lg font-bold text-brand-black dark:text-brand-cream mb-2">
                      Join the Community
                    </h3>
                    <p className="text-brand-black/80 dark:text-brand-cream/80 mb-4 text-sm">
                      Connect with other builders on the same journey.
                    </p>
                    <Link to="/blog">
                      <Button variant="outline" className="w-full border-[#FFD700]/50 hover:bg-[#FFD700]/10">
                        Read Builder Stories
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;