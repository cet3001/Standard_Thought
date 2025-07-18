-- Create SEO settings table for managing meta tags and content
CREATE TABLE public.seo_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  keywords TEXT,
  meta_image TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  twitter_title TEXT,
  twitter_description TEXT,
  twitter_image TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.seo_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admins can view SEO settings" 
ON public.seo_settings 
FOR SELECT 
USING (is_admin_user());

CREATE POLICY "Admins can create SEO settings" 
ON public.seo_settings 
FOR INSERT 
WITH CHECK (is_admin_user());

CREATE POLICY "Admins can update SEO settings" 
ON public.seo_settings 
FOR UPDATE 
USING (is_admin_user())
WITH CHECK (is_admin_user());

CREATE POLICY "Admins can delete SEO settings" 
ON public.seo_settings 
FOR DELETE 
USING (is_admin_user());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_seo_settings_updated_at
BEFORE UPDATE ON public.seo_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default SEO settings
INSERT INTO public.seo_settings (page_type, title, description, keywords, og_title, og_description, twitter_title, twitter_description) VALUES
('homepage', 'Build generational wealth from grit and instinct—no inheritance needed', 'Urban wealth-building blueprints for the grind generation. Real strategies, no trust fund required. Transform your mindset, build your empire.', 'urban wealth, generational wealth, wealth building, financial independence, entrepreneurship, mindset, grit', 'Build generational wealth from grit and instinct—no inheritance needed', 'Urban wealth-building blueprints for the grind generation. Real strategies, no trust fund required.', 'Build generational wealth from grit and instinct—no inheritance needed', 'Urban wealth-building blueprints for the grind generation. Real strategies, no trust fund required.'),
('blog', 'Urban Wealth Blueprints - Financial Wisdom for the Grind Generation', 'Street-smart financial strategies and wealth-building insights. Real talk on money, entrepreneurship, and building generational wealth without a trust fund.', 'financial education, wealth building, urban entrepreneurship, money mindset, financial literacy', 'Urban Wealth Blueprints - Financial Wisdom', 'Street-smart financial strategies and wealth-building insights for the grind generation.', 'Urban Wealth Blueprints - Financial Wisdom', 'Street-smart financial strategies and wealth-building insights for the grind generation.'),
('credit', 'Master Your Credit Game - Urban Wealth Blueprints', 'Transform your credit from liability to wealth-building tool. Street-smart strategies for credit optimization and financial leverage.', 'credit building, credit repair, credit optimization, financial leverage, wealth building', 'Master Your Credit Game - Urban Wealth Blueprints', 'Transform your credit from liability to wealth-building tool with proven strategies.', 'Master Your Credit Game - Urban Wealth Blueprints', 'Transform your credit from liability to wealth-building tool with proven strategies.'),
('cash-management', 'Cash Flow Mastery - Urban Wealth Blueprints', 'Master the art of cash management and build sustainable wealth. Real strategies for cash flow optimization and financial freedom.', 'cash management, cash flow, financial planning, wealth building, money management', 'Cash Flow Mastery - Urban Wealth Blueprints', 'Master the art of cash management and build sustainable wealth with proven strategies.', 'Cash Flow Mastery - Urban Wealth Blueprints', 'Master the art of cash management and build sustainable wealth with proven strategies.'),
('investing', 'Investment Strategies for the Grind Generation', 'Build wealth through strategic investing. No-nonsense investment education for those starting from the bottom.', 'investing, investment strategies, wealth building, financial freedom, portfolio building', 'Investment Strategies for the Grind Generation', 'Build wealth through strategic investing with education for those starting from the bottom.', 'Investment Strategies for the Grind Generation', 'Build wealth through strategic investing with education for those starting from the bottom.'),
('ai-side-hustles', 'AI Side Hustles - Future-Proof Income Streams', 'Leverage AI to build multiple income streams. Modern side hustles for the digital economy and financial independence.', 'AI side hustles, passive income, digital entrepreneurship, online business, financial freedom', 'AI Side Hustles - Future-Proof Income Streams', 'Leverage AI to build multiple income streams in the digital economy.', 'AI Side Hustles - Future-Proof Income Streams', 'Leverage AI to build multiple income streams in the digital economy.');