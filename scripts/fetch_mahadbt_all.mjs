import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const catalogPath = path.resolve(__dirname, 'mahadbt_scheme_catalog.json');
const outputPath = path.resolve(__dirname, '../src/data/mahadbtSchemes.json');
const sqlOutputPath = path.resolve(__dirname, '../supabase_mahadbt_insert.sql');

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#160;/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .split('\n')
    .map(line => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseIncome(text) {
  if (!text) return undefined;
  const match = text.match(/(?:income\s*(?:below|less\s*than|<=|upto|up\s*to)?\s*(?:rs\.?|inr|₹)?\s*)([\d,]+)/i)
    || text.match(/([\d,]+)\s*\/?\s*-\s*(?:only|per\s*annum)?/i);
  if (match) {
    const num = parseInt(match[1].replace(/,/g, ''), 10);
    if (!isNaN(num) && num > 10000 && num <= 2000000) return num;
  }
  if (/2\.5\s*(?:lakh|lakhs)/i.test(text) || /250000/.test(text)) return 250000;
  if (/8\s*(?:lakh|lakhs)/i.test(text) || /800000/.test(text)) return 800000;
  if (/1\.5\s*(?:lakh|lakhs)/i.test(text) || /150000/.test(text)) return 150000;
  return undefined;
}

function parseFinancialMax(benefitsText) {
  if (!benefitsText) return 50000;
  const amounts = [];
  const regex = /(?:₹|Rs\.?|INR)\s*([\d,]+)/gi;
  let m;
  while ((m = regex.exec(benefitsText)) !== null) {
    const val = parseInt(m[1].replace(/,/g, ''), 10);
    if (!isNaN(val) && val > 0 && val < 500000) amounts.push(val);
  }
  if (amounts.length > 0) {
    const maxVal = Math.max(...amounts);
    // If monthly amount (e.g. 1200), extrapolate to 10-12 months + fee waiver
    if (maxVal <= 2000) return maxVal * 10 + 20000;
    return maxVal;
  }
  if (/100%\s*(?:tuition|fee)/i.test(benefitsText)) return 100000;
  return 50000;
}

function detectCastes(title, dept, eligibility) {
  const combined = `${title} ${dept} ${eligibility}`.toLowerCase();
  const castes = [];
  if (/\bsc\b|scheduled caste|neo bouddhist|neo-buddhist|social justice/i.test(combined)) castes.push('SC');
  if (/\bst\b|scheduled tribe|tribal/i.test(combined)) castes.push('ST');
  if (/\bvjnt\b|vj\b|nt\b|vimukta|nomadic/i.test(combined)) castes.push('OBC');
  if (/\bsbc\b|special backward/i.test(combined)) castes.push('OBC');
  if (/\bobc\b|other backward/i.test(combined)) castes.push('OBC');
  if (/\bsebc\b|socially and educationally backward/i.test(combined)) castes.push('OBC');
  if (/\bminority\b|muslim|christian|sikh|buddhist|parsi|jain/i.test(combined)) castes.push('Minority');
  if (/\bopen\b|ebc\b|economically backward|general|merit/i.test(combined)) castes.push('General', 'EWS');
  if (castes.length === 0) castes.push('All');
  return [...new Set(castes)];
}

function parseSchemeHtml(html, fallbackTitle, fallbackDept, url) {
  let title = fallbackTitle;
  const titleMatch = html.match(/<div\s+class=["']pagetitle["'][^>]*>\s*<h1>([\s\S]*?)<\/h1>/i);
  if (titleMatch) {
    title = cleanText(titleMatch[1]).replace(/\.$/, '').trim();
  }

  let department = fallbackDept;
  const deptMatch = html.match(/<h3>\s*Department Name\s*<\/h3>\s*<p>([\s\S]*?)<\/p>/i);
  if (deptMatch) {
    department = cleanText(deptMatch[1]);
  }

  function getSection(heading) {
    const regex = new RegExp(`<h3>\\s*${heading}\\s*<\\/h3>\\s*<ul[^>]*class=["']list["'][^>]*>([\\s\\S]*?)<\\/ul>`, 'i');
    const m = html.match(regex);
    return m ? cleanText(m[1]) : '';
  }

  const overview = getSection('Overview') || `${title} offered by ${department}, Government of Maharashtra.`;
  const benefits = getSection('Benefits') || 'Financial assistance, maintenance allowance, and tuition/exam fee waiver as per Government of Maharashtra norms.';
  const eligibility = getSection('Eligibility') || 'Open to eligible domicile students of Maharashtra meeting prescribed department criteria.';
  const renewalPolicy = getSection('Renewal Policy') || '';
  const documentsRaw = getSection('Documents Required') || '';

  const rawDocs = documentsRaw
    ? documentsRaw.split('\n').map(d => d.replace(/^[•\d\.\)\-\*]+\s*/, '').trim()).filter(Boolean)
    : ['Caste Certificate (if applicable)', 'Income Certificate', 'Previous Year Marksheet', 'Domicile Certificate'];

  const requiredDocuments = rawDocs.map(doc => ({
    name: doc,
    description: `Original or certified copy required during online application on MahaDBT portal.`,
    mandatory: true
  }));

  // GR / Related Docs
  const relatedMatch = html.match(/<h2>\s*Related Documents\s*<\/h2>[\s\S]*?<ul[^>]*class=["']list["'][^>]*>([\s\S]*?)<\/ul>/i);
  const relatedDocuments = [];
  if (relatedMatch) {
    const linkRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let lm;
    while ((lm = linkRegex.exec(relatedMatch[1])) !== null) {
      const fullUrl = lm[1].startsWith('http') ? lm[1] : 'https://mahadbt.maharashtra.gov.in' + lm[1];
      relatedDocuments.push({ title: cleanText(lm[2]), url: fullUrl });
    }
  }

  const combinedText = `${title} ${overview} ${eligibility}`.toLowerCase();
  const isWomenOnly = /\b(girls?|women|female|kanya)\b/i.test(title);
  const isDisabilityOnly = /\b(disab|handicapped|divyang|blind|pwd)\b/i.test(title);
  const detectedIncome = parseIncome(eligibility);
  const maxFinancial = parseFinancialMax(benefits);
  const castes = detectCastes(title, department, eligibility);

  const categories = ['student'];
  if (isWomenOnly) categories.push('women');
  if (isDisabilityOnly) categories.push('disability');

  const slug = `mahadbt-${slugify(title).substring(0, 75)}`;
  const id = slug;

  return {
    id,
    slug,
    myschemeId: `MAHADBT-${Math.abs(hashString(url))}`,
    title,
    ministryOrOrganization: `${department}, Government of Maharashtra`,
    type: 'State Government',
    category: categories,
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: overview.split('\n')[0] || `${title} by ${department}`,
    detailedDescription: `${overview}\n\nBenefits:\n${benefits}${renewalPolicy ? `\n\nRenewal Policy:\n${renewalPolicy}` : ''}`,
    financialBenefitMax: maxFinancial,
    financialBenefitText: benefits.split('\n')[0] || 'Tuition fee & examination fee waiver with maintenance allowance.',
    deadline: 'Active for Academic Year (Apply via MahaDBT Portal)',
    isPopular: true,
    isNew: false,
    tags: ['mahadbt', 'maharashtra', 'scholarship', 'state-government', department.toLowerCase().replace(/[^a-z0-9]/g, '-')],
    eligibilityCriteria: {
      allowedStates: ['Maharashtra'],
      isStudentOnly: true,
      castes: castes,
      ...(detectedIncome ? { maxAnnualIncome: detectedIncome } : {}),
      ...(isWomenOnly ? { isWomenOnly: true } : {}),
      ...(isDisabilityOnly ? { isDisabilityOnly: true } : {}),
      minEducationLevel: /10th|ssc/i.test(eligibility) ? 'Class 10 / Matric' : 'Post Matric / Higher Secondary',
      customRules: eligibility.split('\n').filter(Boolean)
    },
    requiredDocuments,
    officialPortalUrl: url,
    applicationSteps: [
      { stepNumber: 1, title: 'Portal Registration', description: 'Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP.' },
      { stepNumber: 2, title: 'Profile Creation', description: 'Complete Personal, Address, Caste, Income, and Academic details in your student dashboard.' },
      { stepNumber: 3, title: 'Scheme Selection & Apply', description: `Select ${department} > ${title} and submit supporting documents.` },
      { stepNumber: 4, title: 'Institute Verification', description: 'College scrutiny officer verifies and submits application to Department scrutiny for sanction.' }
    ],
    helplinePhone: '022-49150800',
    relatedDocuments
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log(`Starting full MahaDBT Schemes crawler...`);
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  console.log(`Loaded catalog with ${catalog.length} schemes.`);

  const results = [];
  const failed = [];

  for (let i = 0; i < catalog.length; i++) {
    const item = catalog[i];
    console.log(`[${i + 1}/${catalog.length}] Fetching: ${item.title}`);
    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      const parsed = parseSchemeHtml(html, item.title, item.department, item.url);
      results.push(parsed);
      await sleep(250); // polite delay
    } catch (err) {
      console.error(`Failed to fetch ${item.title}:`, err.message);
      failed.push(item);
    }
  }

  console.log(`\n Successfully parsed ${results.length} schemes (${failed.length} failed).`);

  // Save to src/data/mahadbtSchemes.json
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(` Saved full JSON data to ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);

  // Generate Supabase SQL Insert Migration
  const sqlStatements = [
    `-- MahaDBT Maharashtra State Schemes Batch Insert (55 Schemes)`,
    `-- Generated on ${new Date().toISOString()}`,
    `INSERT INTO public.schemes (`,
    `    id, slug, myscheme_id, title, ministry_or_organization, type, category, benefit_type,`,
    `    short_description, detailed_description, financial_benefit_max, financial_benefit_text,`,
    `    deadline, is_popular, is_new, tags, eligibility_criteria, required_documents, application_steps,`,
    `    official_portal_url, helpline_phone`,
    `) VALUES`
  ];

  const valuesRows = results.map(s => {
    const escapeSql = (str) => typeof str === 'string' ? `'${str.replace(/'/g, "''")}'` : 'NULL';
    const jsonSql = (obj) => `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
    const arraySql = (arr) => `ARRAY[${arr.map(a => escapeSql(a)).join(', ')}]`;

    return `(
    ${escapeSql(s.id)},
    ${escapeSql(s.slug)},
    ${escapeSql(s.myschemeId)},
    ${escapeSql(s.title)},
    ${escapeSql(s.ministryOrOrganization)},
    ${escapeSql(s.type)},
    ${arraySql(s.category)},
    ${escapeSql(s.benefitType)},
    ${escapeSql(s.shortDescription)},
    ${escapeSql(s.detailedDescription)},
    ${s.financialBenefitMax || 0},
    ${escapeSql(s.financialBenefitText)},
    ${escapeSql(s.deadline)},
    ${s.isPopular ? 'true' : 'false'},
    ${s.isNew ? 'true' : 'false'},
    ${arraySql(s.tags)},
    ${jsonSql(s.eligibilityCriteria)},
    ${jsonSql(s.requiredDocuments)},
    ${jsonSql(s.applicationSteps)},
    ${escapeSql(s.officialPortalUrl)},
    ${escapeSql(s.helplinePhone)}
)`;
  });

  sqlStatements.push(valuesRows.join(',\n'));
  sqlStatements.push(`ON CONFLICT (id) DO UPDATE SET`);
  sqlStatements.push(`    title = EXCLUDED.title,`);
  sqlStatements.push(`    detailed_description = EXCLUDED.detailed_description,`);
  sqlStatements.push(`    eligibility_criteria = EXCLUDED.eligibility_criteria,`);
  sqlStatements.push(`    required_documents = EXCLUDED.required_documents,`);
  sqlStatements.push(`    updated_at = NOW();`);

  fs.writeFileSync(sqlOutputPath, sqlStatements.join('\n'), 'utf8');
  console.log(` Generated Supabase SQL file at ${sqlOutputPath} (${(fs.statSync(sqlOutputPath).size / 1024).toFixed(1)} KB)`);
}

run();
