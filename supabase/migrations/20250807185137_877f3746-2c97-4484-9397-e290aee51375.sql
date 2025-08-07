-- Create welcome email templates table
CREATE TABLE public.welcome_email_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.welcome_email_templates ENABLE ROW LEVEL SECURITY;

-- Create policies - only admins can manage templates
CREATE POLICY "Only admins can view welcome email templates" 
ON public.welcome_email_templates 
FOR SELECT 
USING (is_admin_user());

CREATE POLICY "Only admins can create welcome email templates" 
ON public.welcome_email_templates 
FOR INSERT 
WITH CHECK (is_admin_user());

CREATE POLICY "Only admins can update welcome email templates" 
ON public.welcome_email_templates 
FOR UPDATE 
USING (is_admin_user());

CREATE POLICY "Only admins can delete welcome email templates" 
ON public.welcome_email_templates 
FOR DELETE 
USING (is_admin_user());

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_welcome_email_templates_updated_at
BEFORE UPDATE ON public.welcome_email_templates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add unique constraint on is_active to ensure only one active template
CREATE UNIQUE INDEX idx_welcome_email_templates_active ON public.welcome_email_templates (is_active) WHERE is_active = true;