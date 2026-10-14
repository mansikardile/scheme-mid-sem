import type { Scheme, CategoryType } from '../types';
import { SCHEMES_DATABASE } from '../data/schemesData';
import { PRIVATE_CSR_SCHEMES_DATABASE } from '../data/privateSchemesData';
import allSchemesRaw from '../data/allSchemes.json';

const MYSCHEME_API_KEY = 'tYTy5eEhlu9rFjyxuCr7ra7ACp4dv1RH8gWuHTDc';

export interface LiveSchemeEnrichment {
  officialName?: string;
  briefDescription?: string;
  detailedDescription?: string;
  eligibilityText?: string;
  documents?: { name: string; mandatory?: boolean }[];
  faqs?: { question: string; answer: string }[];
  applicationChannels?: { applicationName: string; applicationUrl: string; mode?: string }[];
}

class SchemeService {
  private masterSchemes: Scheme[] = [];
  private schemeMap: Map<string, Scheme> = new Map();
  private liveCache: Map<string, LiveSchemeEnrichment> = new Map();

  constructor() {
    this.initDatabase();
  }

  private initDatabase() {
    // 1. Start with curated high-fidelity schemes (Central & Key Flagship)
    const curatedIds = new Set<string>();
    const list: Scheme[] = [];

    for (const scheme of SCHEMES_DATABASE) {
      curatedIds.add(scheme.id);
      if (scheme.slug) curatedIds.add(scheme.slug);
      list.push(scheme);
    }

    // 2. Append Verified Private & Corporate CSR Philanthropic Schemes
    for (const privateScheme of PRIVATE_CSR_SCHEMES_DATABASE) {
      if (!curatedIds.has(privateScheme.id)) {
        curatedIds.add(privateScheme.id);
        list.push(privateScheme);
      }
    }

    // 3. Append all 3,272 schemes from government master database
    for (const raw of allSchemesRaw as unknown as Scheme[]) {
      const matchKey = raw.slug || raw.id.replace('myscheme-', '');
      if (!curatedIds.has(raw.id) && !curatedIds.has(matchKey)) {
        list.push(raw);
      }
    }

    this.masterSchemes = list;
    for (const s of list) {
      this.schemeMap.set(s.id, s);
      if (s.slug) this.schemeMap.set(s.slug, s);
    }
  }

  public getAllSchemes(): Scheme[] {
    return this.masterSchemes;
  }

  public getTotalCount(): number {
    return this.masterSchemes.length;
  }

  public getSchemeById(id: string): Scheme | undefined {
    return this.schemeMap.get(id);
  }

  public searchSchemes({
    query = '',
    category = 'all',
    schemeType = 'all',
    page = 1,
    pageSize = 24
  }: {
    query?: string;
    category?: string;
    schemeType?: string;
    page?: number;
    pageSize?: number;
  }): { schemes: Scheme[]; total: number; totalPages: number } {
    let filtered = this.masterSchemes;

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(s => 
        s.category.includes(category as CategoryType)
      );
    }

    // Filter by scheme type (Central vs State)
    if (schemeType && schemeType !== 'all') {
      filtered = filtered.filter(s => s.type === schemeType);
    }

    // Filter by query
    if (query && query.trim()) {
      const terms = query.toLowerCase().trim().split(/\s+/);
      filtered = filtered.filter(s => {
        const fullSearchText = (
          s.title + ' ' + 
          s.shortDescription + ' ' + 
          s.ministryOrOrganization + ' ' + 
          (s.tags || []).join(' ')
        ).toLowerCase();
        return terms.every(t => fullSearchText.includes(t));
      });
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const paginated = filtered.slice(start, start + pageSize);

    return {
      schemes: paginated,
      total,
      totalPages
    };
  }

  /**
   * Fetches official live details from MyScheme API
   */
  public async fetchLiveSchemeDetails(slugOrId: string): Promise<LiveSchemeEnrichment | null> {
    const scheme = this.schemeMap.get(slugOrId);
    const slug = scheme?.slug || slugOrId.replace('myscheme-', '');

    if (this.liveCache.has(slug)) {
      return this.liveCache.get(slug)!;
    }

    try {
      const baseUrl = 'https://api.myscheme.gov.in/schemes/v6/public/schemes';
      const headers = {
        'x-api-key': MYSCHEME_API_KEY,
        'User-Agent': 'Mozilla/5.0'
      };

      const detailRes = await fetch(`${baseUrl}?slug=${encodeURIComponent(slug)}&lang=en`, { headers });
      if (!detailRes.ok) return null;
      const detailJson = await detailRes.json();
      const data = detailJson?.data?.en;
      if (!data) return null;

      const schemeId = detailJson.data._id;
      let documents: { name: string; mandatory?: boolean }[] = [];
      let faqs: { question: string; answer: string }[] = [];
      let applicationChannels: { applicationName: string; applicationUrl: string }[] = [];

      // Concurrently fetch documents, FAQs, and application channels if schemeId exists
      if (schemeId) {
        try {
          const [docRes, faqRes, appRes] = await Promise.allSettled([
            fetch(`${baseUrl}/${schemeId}/documents?lang=en`, { headers }).then(r => r.json()),
            fetch(`${baseUrl}/${schemeId}/faqs?lang=en`, { headers }).then(r => r.json()),
            fetch(`${baseUrl}/${schemeId}/applicationchannel`, { headers }).then(r => r.json())
          ]);

          if (docRes.status === 'fulfilled' && docRes.value?.data?.en?.documents_required) {
            const rawDocs = docRes.value.data.en.documents_required;
            if (Array.isArray(rawDocs)) {
              for (const d of rawDocs) {
                if (d.children) {
                  for (const c of d.children) {
                    const text = c.children?.map((ch: any) => ch.text).join('') || '';
                    if (text.trim()) documents.push({ name: text.trim(), mandatory: true });
                  }
                }
              }
            }
          }

          if (faqRes.status === 'fulfilled' && faqRes.value?.data?.en?.faqs) {
            const rawFaqs = faqRes.value.data.en.faqs;
            if (Array.isArray(rawFaqs)) {
              faqs = rawFaqs.map((f: any) => ({
                question: f.question,
                answer: Array.isArray(f.answer) 
                  ? f.answer.map((a: any) => a.children?.map((c: any) => c.text).join('')).join('\n')
                  : String(f.answer || '')
              }));
            }
          }

          if (appRes.status === 'fulfilled' && appRes.value?.data?.applicationChannel) {
            applicationChannels = appRes.value.data.applicationChannel.map((ch: any) => ({
              applicationName: ch.applicationName || 'Official Portal',
              applicationUrl: ch.applicationUrl || '#'
            }));
          }
        } catch (subErr) {
          console.warn('Sub-resource fetch note:', subErr);
        }
      }

      // Extract eligibility description
      let eligibilityText = '';
      if (typeof data.eligibilityCriteria?.eligibilityDescription_md === 'string') {
        eligibilityText = data.eligibilityCriteria.eligibilityDescription_md;
      } else if (Array.isArray(data.eligibilityCriteria?.eligibilityDescription)) {
        eligibilityText = data.eligibilityCriteria.eligibilityDescription
          .map((item: any) => item.children?.map((c: any) => c.text).join('') || '')
          .filter(Boolean)
          .join('\n');
      }

      const enrichment: LiveSchemeEnrichment = {
        officialName: data.basicDetails?.schemeName,
        briefDescription: data.schemeContent?.briefDescription,
        detailedDescription: data.schemeContent?.detailedDescription,
        eligibilityText,
        documents: documents.length > 0 ? documents : undefined,
        faqs: faqs.length > 0 ? faqs : undefined,
        applicationChannels: applicationChannels.length > 0 ? applicationChannels : undefined
      };

      this.liveCache.set(slug, enrichment);
      return enrichment;
    } catch (err) {
      console.warn('Live scheme fetch note:', err);
      return null;
    }
  }
}

export const schemeService = new SchemeService();
