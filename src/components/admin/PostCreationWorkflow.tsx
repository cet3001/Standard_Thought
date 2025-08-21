import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, Mail, Search, ArrowLeft } from 'lucide-react';

interface PostCreationWorkflowProps {
  id: string;
  title: string;
}

export const PostCreationWorkflow = ({ id, title }: PostCreationWorkflowProps) => {
  const workflowActions = [
    {
      title: 'Link to a CTA',
      description: 'Connect this guide to call-to-action buttons across your site',
      icon: ExternalLink,
      href: '/admin/cta',
      color: 'bg-blue-600'
    },
    {
      title: 'Create Email Campaign',
      description: 'Send targeted emails featuring your new guide',
      icon: Mail,
      href: '/admin/email',
      color: 'bg-purple-600'
    },
    {
      title: 'Configure SEO Settings',
      description: 'Optimize search engine visibility for your guide',
      icon: Search,
      href: '/admin/seo',
      color: 'bg-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Success Message */}
      <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 dark:text-green-300">
            Success!
          </h1>
          <p className="text-xl text-green-700 dark:text-green-400 mt-2">
            "<strong>{title}</strong>" has been created.
          </p>
        </CardHeader>
      </Card>

      {/* What's Next Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground text-center">
          What's Next?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center mx-auto`}>
                  <action.icon className="h-8 w-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {action.description}
                  </p>
                </div>
                
                <Button asChild className="w-full urban-cta">
                  <Link to={action.href}>
                    {action.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Return to Guides List */}
      <div className="text-center pt-6 border-t border-border">
        <Button asChild variant="outline" className="border-muted-foreground/20 hover:bg-accent">
          <Link to="/admin/guides">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Guides List
          </Link>
        </Button>
      </div>
    </div>
  );
};