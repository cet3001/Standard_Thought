
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface EmailPreviewProps {
  subject: string;
  content: string;
}

export const EmailPreview = ({ subject, content }: EmailPreviewProps) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Email Preview</CardTitle>
        <CardDescription>
          This is how your email will look to subscribers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-6 rounded-lg">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            {/* Header with professional banner */}
            <div className="text-center mb-6 pb-6 border-b">
              <img 
                src="/lovable-uploads/21728a70-c6c7-4f2f-8689-d74741cb605b.png" 
                alt="Standard Thought - Real Wisdom. Real Results." 
                className="w-full max-w-2xl mx-auto h-auto"
                style={{ maxHeight: '200px', width: 'auto' }}
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              <div className="text-lg mb-4 text-gray-800">Hey Subscriber,</div>
              {subject && (
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  {subject}
                </h2>
              )}
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {content || "Your email content will appear here..."}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t pt-6 text-center text-sm text-gray-500">
              <p className="mb-2">
                Keep building. Keep grinding. Your story matters.
              </p>
              <p className="mb-2">
                <a href="https://standardthought.com" className="text-blue-600 hover:underline mx-2">
                  Visit Website
                </a>
                <a href="https://standardthought.com/blog" className="text-blue-600 hover:underline mx-2">
                  Read Blog
                </a>
                <a href="https://instagram.com/standard_thought" className="text-blue-600 hover:underline mx-2">
                  Follow @standard_thought
                </a>
              </p>
              <p className="text-xs">
                You're receiving this email because you subscribed to our newsletter.
                <br />
                <a href="#" className="text-blue-600 hover:underline">
                  Unsubscribe
                </a> | 
                <a href="https://standardthought.com/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
