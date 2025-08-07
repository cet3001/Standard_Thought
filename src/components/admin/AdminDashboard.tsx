import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Mail, 
  Search, 
  DollarSign, 
  BookOpen, 
  Link2, 
  BarChart3,
  Users,
  MessageSquare
} from 'lucide-react';
import { useGuides } from '@/hooks/use-guides';
import { usePaidGuides } from '@/hooks/use-paid-guides';
import { useCTADetection } from '@/hooks/use-cta-detection';

export const AdminDashboard = () => {
  const { guides } = useGuides();
  const { guides: paidGuides } = usePaidGuides();
  const { unlinkedCTAs } = useCTADetection();

  const adminPages = [
    {
      title: 'Guide Forge',
      description: 'Create and edit guides with integrated tool',
      icon: FileText,
      href: '/admin/guide-forge',
      color: 'bg-indigo-600',
      stats: 'Integrated creator'
    },
    {
      title: 'Free Guides Management',
      description: 'Manage free guides, upload files, and track downloads',
      icon: BookOpen,
      href: '/admin/guides',
      color: 'bg-blue-600',
      stats: `${guides?.length || 0} guides`
    },
    {
      title: 'Paid Guides Management',
      description: 'Manage premium guides, pricing, and Stripe integration',
      icon: DollarSign,
      href: '/admin/paid-guides',
      color: 'bg-green-600',
      stats: `${paidGuides?.length || 0} paid guides`
    },
    {
      title: 'Email Campaigns',
      description: 'Send newsletters, manage subscribers, and track opens',
      icon: Mail,
      href: '/admin/email',
      color: 'bg-purple-600',
      stats: 'Mass email system'
    },
    {
      title: 'SEO Management',
      description: 'Optimize meta tags, generate sitemaps, and manage schemas',
      icon: Search,
      href: '/admin/seo',
      color: 'bg-orange-600',
      stats: 'Site-wide SEO'
    },
    {
      title: 'CTA Management',
      description: 'Link call-to-actions to guides and track conversions',
      icon: Link2,
      href: '/admin/cta',
      color: 'bg-teal-600',
      stats: `${unlinkedCTAs.length} unlinked CTAs`
    }
  ];

  const quickStats = [
    { label: 'Free Guides', value: guides?.filter(g => g.is_active)?.length || 0, icon: BookOpen },
    { label: 'Paid Guides', value: paidGuides?.filter(g => g.active)?.length || 0, icon: DollarSign },
    { label: 'Unlinked CTAs', value: unlinkedCTAs.length, icon: Link2, warning: unlinkedCTAs.length > 0 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
          Admin Dashboard
        </h1>
        <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80">
          Manage your site content, guides, and marketing campaigns
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className={`bg-slate-800 border-slate-700 ${stat.warning ? 'border-red-500/50' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-brand-cream/60 text-sm">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.warning ? 'text-red-400' : 'text-brand-gold'}`}>
                    {stat.value}
                  </p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.warning ? 'text-red-400' : 'text-brand-gold'}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Admin Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminPages.map((page, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700 hover:border-brand-gold/50 transition-colors group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${page.color} group-hover:scale-110 transition-transform`}>
                  <page.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-brand-cream text-lg">{page.title}</CardTitle>
                  <p className="text-brand-gold text-sm">{page.stats}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-brand-cream/80 mb-4">{page.description}</p>
              <Button asChild className="w-full bg-brand-gold text-black hover:bg-brand-gold/90">
                <Link to={page.href}>
                  Access {page.title}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Warning for Unlinked CTAs */}
      {unlinkedCTAs.length > 0 && (
        <Card className="bg-red-900/20 border-red-600/50">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Link2 className="h-5 w-5" />
              Action Required: Unlinked CTAs Detected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-300 mb-4">
              You have {unlinkedCTAs.length} call-to-action button{unlinkedCTAs.length !== 1 ? 's' : ''} that 
              {unlinkedCTAs.length !== 1 ? ' are' : ' is'} not connected to any guides. This may cause broken user experiences.
            </p>
            <Button asChild variant="outline" className="border-red-600 text-red-400 hover:bg-red-900/30">
              <Link to="/admin/cta">
                Fix CTA Connections
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};