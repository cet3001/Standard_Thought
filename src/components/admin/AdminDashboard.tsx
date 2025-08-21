import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AdminSectionCard } from './AdminSectionCard';
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
    { 
      label: 'Free Guides', 
      value: guides?.filter(g => g.is_active)?.length || 0, 
      kpi: '1,284',
      kpiLabel: 'Downloads (30d)',
      icon: BookOpen 
    },
    { 
      label: 'Paid Guides', 
      value: paidGuides?.filter(g => g.active)?.length || 0, 
      kpi: '$2,590',
      kpiLabel: 'Revenue (30d)',
      icon: DollarSign 
    },
    { 
      label: 'CTA Performance', 
      value: unlinkedCTAs.length, 
      kpi: '12.5%',
      kpiLabel: 'Conversion Rate (30d)',
      secondaryLabel: 'Unlinked CTAs',
      icon: Link2, 
      warning: unlinkedCTAs.length > 0 
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Admin Dashboard
        </h1>
        <p className="text-xl text-muted-foreground">
          Manage your site content, guides, and marketing campaigns
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStats.map((stat, index) => (
          <AdminSectionCard key={index} className={stat.warning ? 'before:from-destructive/60 before:via-destructive/70 before:to-destructive/60' : undefined}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-xs font-medium">{stat.kpiLabel}</p>
                  <p className={`text-4xl font-bold ${stat.warning ? 'text-destructive' : 'text-primary'}`}>
                    {stat.kpi}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <span className="font-medium">{stat.secondaryLabel || stat.label}:</span> {stat.value}
                  </p>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.warning ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                <stat.icon className={`h-6 w-6 ${stat.warning ? 'text-destructive' : 'text-primary'}`} />
              </div>
            </div>
          </AdminSectionCard>
        ))}
      </div>

      {/* Admin Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminPages.map((page, index) => (
          <AdminSectionCard 
            key={index}
            title={page.title}
            description={page.description}
            icon={<page.icon className="h-5 w-5" />}
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">
                {page.stats}
              </p>
            </div>
            <Button asChild className="w-full urban-cta">
              <Link to={page.href}>
                Access {page.title}
              </Link>
            </Button>
          </AdminSectionCard>
        ))}
      </div>

      {/* Warning for Unlinked CTAs */}
      {unlinkedCTAs.length > 0 && (
        <AdminSectionCard 
          className="before:from-destructive/60 before:via-destructive/70 before:to-destructive/60"
          title="Action Required: Unlinked CTAs Detected"
          description={`You have ${unlinkedCTAs.length} call-to-action button${unlinkedCTAs.length !== 1 ? 's' : ''} that ${unlinkedCTAs.length !== 1 ? ' are' : ' is'} not connected to any guides. This may cause broken user experiences.`}
          icon={<Link2 className="h-5 w-5" />}
        >
          <Button asChild variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
            <Link to="/admin/cta">
              Fix CTA Connections
            </Link>
          </Button>
        </AdminSectionCard>
      )}
    </div>
  );
};