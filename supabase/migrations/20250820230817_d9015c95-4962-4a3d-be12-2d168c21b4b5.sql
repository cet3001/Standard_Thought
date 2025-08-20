-- Create landing_page_content table for dynamic homepage content
CREATE TABLE public.landing_page_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_name TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.landing_page_content ENABLE ROW LEVEL SECURITY;

-- Allow admins to manage all content
CREATE POLICY "Admins can manage landing page content" 
ON public.landing_page_content 
FOR ALL 
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- Allow public read access to active content
CREATE POLICY "Anyone can read active landing page content" 
ON public.landing_page_content 
FOR SELECT 
USING (is_active = true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_landing_page_content_updated_at
BEFORE UPDATE ON public.landing_page_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default content (preserving existing content exactly)
INSERT INTO public.landing_page_content (section_name, content) VALUES 
('hero', '{
  "headline": "Break Cycles. Build Legacy. Define Your Truth.",
  "subheadline": "You weren'\''t handed blueprints. You inherited burdens. Now it'\''s time to flip the script—rebuild identity, stack wealth, and transcend survival thinking.",
  "tagline": "Standard Thought is a digital sanctuary for those reclaiming power and purpose.",
  "cta_text": "📥 Download the Legacy Starter Kit",
  "cta_url": "/download/legacy-starter-kit",
  "image_url": "/lovable-uploads/d8ba41eb-6e6c-44f0-8503-5dfdabe0ad13.png",
  "image_alt": "Three people standing on a rooftop at sunrise, representing vision, unity, and power"
}'),
('value_props', '{
  "headline": "The Standard Thought Way",
  "subheadline": "A clear, sequential 4-step system to transform your life."
}');