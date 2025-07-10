-- Create a table to track email campaigns and analytics
CREATE TABLE public.email_campaigns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_type TEXT NOT NULL, -- 'welcome', 'newsletter', 'weekly'
  subject TEXT NOT NULL,
  sent_count INTEGER NOT NULL DEFAULT 0,
  failed_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  sent_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES auth.users(id)
);

-- Create a table to track individual email sends for analytics
CREATE TABLE public.email_sends (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID REFERENCES public.email_campaigns(id),
  subscriber_email TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,
  status TEXT NOT NULL DEFAULT 'sent' -- 'sent', 'delivered', 'opened', 'clicked', 'failed'
);

-- Enable Row Level Security
ALTER TABLE public.email_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_sends ENABLE ROW LEVEL SECURITY;

-- Create policies for email_campaigns
CREATE POLICY "Admins can manage email campaigns" 
ON public.email_campaigns 
FOR ALL
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- Create policies for email_sends  
CREATE POLICY "Admins can view email sends" 
ON public.email_sends 
FOR SELECT
USING (is_admin_user());

CREATE POLICY "System can insert email sends" 
ON public.email_sends 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "System can update email sends" 
ON public.email_sends 
FOR UPDATE 
USING (true);

-- Create indexes for better performance
CREATE INDEX idx_email_campaigns_type ON public.email_campaigns(campaign_type);
CREATE INDEX idx_email_campaigns_sent_at ON public.email_campaigns(sent_at);
CREATE INDEX idx_email_sends_campaign_id ON public.email_sends(campaign_id);
CREATE INDEX idx_email_sends_subscriber_email ON public.email_sends(subscriber_email);
CREATE INDEX idx_email_sends_status ON public.email_sends(status);