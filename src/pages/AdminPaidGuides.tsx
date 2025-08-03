import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import PaidGuidesManagement from '@/components/admin/PaidGuidesManagement';
import { useHeaderHeight } from '@/hooks/use-header-height';
import { useUrbanTexture } from '@/hooks/use-urban-texture';

const AdminPaidGuides = () => {
  const headerHeight = useHeaderHeight();
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
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
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      <Helmet>
        <title>Paid Guides Management - Admin | Standard Thought</title>
        <meta name="description" content="Manage premium paid guides for the vault section" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navigation />

      <main className="relative z-10" style={{ marginTop: `${headerHeight}px`, paddingTop: '2rem' }}>
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-8">
              <PaidGuidesManagement />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPaidGuides;