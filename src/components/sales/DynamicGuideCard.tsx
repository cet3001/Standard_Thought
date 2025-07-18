import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, CreditCard, ExternalLink } from 'lucide-react';
import { Guide } from '@/hooks/use-guides';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface DynamicGuideCardProps {
  guide: Guide;
}

export const DynamicGuideCard: React.FC<DynamicGuideCardProps> = ({ guide }) => {
  const { toast } = useToast();
  const isFree = guide.price === 0;

  const handleDownload = async () => {
    if (!guide.file_path) {
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

  const handlePurchase = async () => {
    try {
      const { data: sessionData, error } = await supabase.functions.invoke('create-payment', {
        body: {
          guide_id: guide.id,
          guide_title: guide.title,
          amount: Math.round(Number(guide.price) * 100), // Convert to cents
          currency: 'usd'
        }
      });

      if (error) throw error;

      if (sessionData?.url) {
        // Open Stripe checkout in a new tab
        window.open(sessionData.url, '_blank');
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCTA = () => {
    if (isFree) {
      handleDownload();
    } else {
      handlePurchase();
    }
  };

  return (
    <Card className="group bg-gradient-to-br from-[#f4d03f]/20 via-[#f7dc6f]/15 to-[#fdeaa7]/25 dark:from-[#f4d03f]/10 dark:via-[#f7dc6f]/8 dark:to-[#fdeaa7]/15 border-2 border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#f4d03f]/10 before:via-transparent before:to-[#fdeaa7]/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,208,63,0.4)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      
      <CardHeader className="pb-4 relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FFD700]/80 before:to-[#FFA500]/80 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:rounded-2xl">
          {isFree ? (
            <Download className="h-7 w-7 text-black relative z-10" />
          ) : (
            <CreditCard className="h-7 w-7 text-black relative z-10" />
          )}
        </div>
        
        <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:pearlescent-text transition-all duration-300">
          {guide.title}
        </CardTitle>
        
        {!isFree && (
          <div className="text-2xl font-black text-[#FFD700] mt-2">
            ${Number(guide.price).toFixed(0)}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10">
        <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
          {guide.description}
        </CardDescription>
        
        {guide.bullets && guide.bullets.length > 0 && (
          <ul className="space-y-2">
            {guide.bullets.slice(0, 3).map((bullet, index) => (
              <li key={index} className="flex items-start space-x-2 text-brand-black/80 dark:text-brand-cream/80 text-sm">
                <span className="text-[#FFD700] mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button 
          className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
          onClick={handleCTA}
        >
          {isFree ? (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download Free
            </>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" />
              Get for ${Number(guide.price).toFixed(0)}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};