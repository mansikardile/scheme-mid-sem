-- Supabase Table Schema & Sample Batch Insert for 3,272 Schemes
CREATE TABLE IF NOT EXISTS public.schemes (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE,
    myscheme_id TEXT,
    title TEXT NOT NULL,
    ministry_or_organization TEXT,
    type TEXT,
    category TEXT[],
    benefit_type TEXT,
    short_description TEXT,
    detailed_description TEXT,
    financial_benefit_max NUMERIC DEFAULT 0,
    financial_benefit_text TEXT,
    deadline TEXT,
    is_popular BOOLEAN DEFAULT false,
    is_new BOOLEAN DEFAULT false,
    tags TEXT[],
    eligibility_criteria JSONB DEFAULT '{}'::jsonb,
    required_documents JSONB DEFAULT '[]'::jsonb,
    application_steps JSONB DEFAULT '[]'::jsonb,
    official_portal_url TEXT,
    helpline_phone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_schemes_category ON public.schemes USING GIN (category);
CREATE INDEX IF NOT EXISTS idx_schemes_type ON public.schemes (type);
CREATE INDEX IF NOT EXISTS idx_schemes_title_search ON public.schemes USING gin(to_tsvector('english', title));
