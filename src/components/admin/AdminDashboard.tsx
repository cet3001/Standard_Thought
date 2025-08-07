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
          <Card key={index} className={`bg-card border ${stat.warning ? 'border-destructive/50' : 'border-border'}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.warning ? 'text-destructive' : 'text-primary'}`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.warning ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                  <stat.icon className={`h-6 w-6 ${stat.warning ? 'text-destructive' : 'text-primary'}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Admin Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminPages.map((page, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${page.color} group-hover:scale-110 transition-transform duration-300`}>
                  <page.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-foreground text-lg mb-1">{page.title}</CardTitle>
                  <p className="text-primary text-sm font-medium">{page.stats}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground mb-6 leading-relaxed">{page.description}</p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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
        <Card className="bg-destructive/5 border-destructive/20">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <Link2 className="h-5 w-5" />
              Action Required: Unlinked CTAs Detected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive/80 mb-4 leading-relaxed">
              You have {unlinkedCTAs.length} call-to-action button{unlinkedCTAs.length !== 1 ? 's' : ''} that 
              {unlinkedCTAs.length !== 1 ? ' are' : ' is'} not connected to any guides. This may cause broken user experiences.
            </p>
            <Button asChild variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
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