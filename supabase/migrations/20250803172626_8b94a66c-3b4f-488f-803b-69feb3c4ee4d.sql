-- Create paid guides table for the vault section
CREATE TABLE public.paid_guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  price INTEGER NOT NULL, -- Price in cents
  currency TEXT DEFAULT 'USD',
  slug TEXT UNIQUE NOT NULL,
  stripe_product_id TEXT,
  stripe_price_id TEXT,
  watermark_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.paid_guides ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active guides
CREATE POLICY "allow_public_read_active_guides" ON public.paid_guides
  FOR SELECT
  USING (active = TRUE);

-- Allow admin users to manage guides
CREATE POLICY "allow_admin_manage_guides" ON public.paid_guides
  FOR ALL
  USING (is_admin_user());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_paid_guides_updated_at
  BEFORE UPDATE ON public.paid_guides
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample paid guides
INSERT INTO public.paid_guides (title, subtitle, description, price, slug, featured) VALUES
('Flip Debt Into Seed Money', 'Turn your liability into liquidity with proven debt leverage strategies', 'Stop drowning in payments. Learn how to restructure debt into wealth-building leverage - the moves they don''t teach but real builders use.', 6700, 'flip-debt-seed-money', TRUE),
('Digital Hustle Vault', 'Underground online income streams for the culture', 'From content creation to digital products - here''s how to build multiple income streams that work while you sleep. No influencer fluff, just real receipts.', 4700, 'digital-hustle-vault', FALSE),
('Asset Stacking Blueprint', 'How to buy what appreciates and avoid what depreciates', 'The real difference between rich and broke: what you buy. Master the art of acquiring assets that pay you back - real estate, stocks, businesses.', 7700, 'asset-stacking-blueprint', FALSE),
('Credit Score Surgery', 'Advanced credit repair and optimization tactics', 'Go beyond disputes. Advanced strategies for rebuilding credit, optimizing utilization, and leveraging good credit for wealth building.', 5700, 'credit-score-surgery', FALSE);