import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUDDY4STUDY_API_URL = 'https://api.buddy4study.com/api/v1.0/ssms/scholarship';
const BUDDY4STUDY_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJ0cnVzdCJdLCJleHAiOjE4MjQ0ODgxNzIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwianRpIjoiYmI0ZDFlOTYtZmNjMS00YTg4LTlmNmYtNWRlM2FiZDM2MGI2IiwiY2xpZW50X2lkIjoiYjRzIn0.BbzyG5ih3eOT-elH5sfMDCKP0YaS5FsrxLfbKhAtl88';

function parseAmount(text) {
  if (!text) return 50000;
  const match = text.match(/(?:INR|Rs\.?|₹|upto|up to)\s*([\d,]+)/i);
  if (match) {
    const num = parseInt(match[1].replace(/,/g, ''), 10);
    if (!isNaN(num) && num > 0) return num;
  }
  if (/100%\s*(?:fee|scholarship)/i.test(text)) return 100000;
  return 50000;
}

function extractProvider(title, item) {
  if (title.includes('Tata Capital')) return 'Tata Capital Foundation';
  if (title.includes('Kotak')) return 'Kotak Education Foundation';
  if (title.includes('Mahindra')) return 'Mahindra Foundation';
  if (title.includes('HDFC') || title.includes('Parivartan')) return 'HDFC Bank CSR Parivartan';
  if (title.includes('Aditya Birla')) return 'Aditya Birla Capital Foundation';
  if (title.includes('DXC')) return 'DXC Technology CSR';
  if (title.includes('Raman Kant Munjal')) return 'Hero Group / Raman Kant Munjal Foundation';
  if (title.includes('Infocepts')) return 'Infocepts Foundation';
  if (title.includes('L\'Oreal') || title.includes('L’Oréal')) return 'L\'Oréal India';
  if (title.includes('Ujjivan')) return 'Ujjivan Small Finance Bank';
  if (title.includes('Vidyadhan')) return 'Sarojini Damodaran Foundation';
  if (title.includes('Winnie Sun')) return 'Synergies Castings CSR';
  if (title.includes('SDEF')) return 'Swami Dayanand Education Foundation';
  if (title.includes('Indic AI')) return 'Indic AI Foundation';
  if (title.includes('Satya')) return 'Satya Bharti Foundation';
  if (title.includes('Muskaan')) return 'Valvoline Cummins CSR';
  return 'Buddy4Study CSR & Philanthropy Network';
}

function determineCategories(applicableText, title) {
  const cats = ['student'];
  const lower = (applicableText + ' ' + title).toLowerCase();
  if (lower.includes('women') || lower.includes('girl') || lower.includes('kanya') || lower.includes('female')) {
    cats.push('women');
  }
  if (lower.includes('pwd') || lower.includes('disab') || lower.includes('physically challenged')) {
    cats.push('disability');
  }
  return cats;
}

async function fetchAndSave() {
  console.log('Fetching live scholarships from Buddy4Study API...');
  const res = await fetch(BUDDY4STUDY_API_URL, {
    headers: {
      'accept': 'application/json',
      'authorization': BUDDY4STUDY_TOKEN,
      'origin': 'https://www.buddy4study.com',
      'referer': 'https://www.buddy4study.com/',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch from Buddy4Study API: ${res.status} ${res.statusText}`);
  }

  const rawList = await res.json();
  console.log(`Fetched ${rawList.length} raw scholarship records from Buddy4Study.`);

  const schemes = [];

  for (const item of rawList) {
    if (!item.scholarshipName || item.isDeleted) continue;

    const multi = item.scholarshipMultilinguals?.[0] || {};
    const title = (multi.title || item.scholarshipName).trim();
    const rawApplicable = multi.applicableFor || 'Open to eligible Indian students pursuing higher education, diploma, or school studies.';
    const rawAward = multi.purposeAward || 'Direct Financial Scholarship Grant';
    const amountNum = parseAmount(rawAward);
    const provider = extractProvider(title, item);
    const slug = item.slug || item.pageSlug?.replace('page/', '') || `b4s-${Math.random().toString(36).substring(2, 9)}`;
    const id = `b4s-${slug}`;
    const pageUrl = item.pageSlug 
      ? `https://www.buddy4study.com/${item.pageSlug}` 
      : `https://www.buddy4study.com/scholarship/${slug}`;

    const categories = determineCategories(rawApplicable, title);

    const schemeObj = {
      id,
      slug,
      myschemeId: item.bsid ? `B4S-${item.bsid}` : undefined,
      title,
      ministryOrOrganization: provider,
      type: 'Private & CSR',
      category: categories,
      benefitType: 'Scholarship & Fee Waiver',
      shortDescription: rawApplicable.length > 220 ? rawApplicable.substring(0, 217) + '...' : rawApplicable,
      detailedDescription: `${rawApplicable}\n\nAward Details: ${rawAward}.\nOffered via Buddy4Study's verified scholarship program. Eligible candidates can apply directly online through the verified portal link.`,
      financialBenefitMax: amountNum,
      financialBenefitText: rawAward,
      deadline: item.deadlineDate ? `Last Date: ${item.deadlineDate}` : 'Continuous / Ongoing',
      isPopular: true,
      isNew: (item.deadlineDateDiff ?? 0) < 30,
      tags: ['Scholarship', 'Education', 'Buddy4Study', 'CSR Grant', ...categories],
      eligibilityCriteria: {
        minAge: 14,
        maxAge: 32,
        isStudentOnly: true,
        maxAnnualIncome: 600000,
        allowedStates: ['All India'],
        genders: categories.includes('women') ? ['Female'] : ['All'],
        castes: ['All']
      },
      requiredDocuments: [
        { name: 'Previous Year Marksheet', mandatory: true, description: 'Self-attested copy of latest academic mark sheet (min. passing grade).' },
        { name: 'Income Certificate / BPL Card', mandatory: true, description: 'Government issued family income proof or salary slip / Tehsildar certificate.' },
        { name: 'College / School Admission ID Proof', mandatory: true, description: 'Current academic year bona fide certificate or fee payment receipt.' },
        { name: 'Aadhaar Card / Government Photo ID', mandatory: true, description: 'Valid government ID of the student applicant for DBT verification.' },
        { name: 'Bank Account Passbook / Cancelled Cheque', mandatory: true, description: 'Bank account in the name of the applicant linked with Aadhaar.' }
      ],
      applicationSteps: [
        `Click on the 'Apply Now' button to visit the official scholarship application page on Buddy4Study (${pageUrl}).`,
        "Register or log in using your active mobile number or verified email address.",
        "Navigate to the application form and enter your personal, academic, and family income details accurately.",
        "Upload scanned PDF/JPEG copies of all mandatory documents including marksheets and income proof.",
        "Review your responses thoroughly, click Submit, and note your Application Tracking ID for future reference."
      ],
      officialPortalUrl: pageUrl,
      helplinePhone: '011-430-92248',
      officialHelplineEmail: 'support@buddy4study.com'
    };

    schemes.push(schemeObj);
  }

  const outputPath = path.resolve(__dirname, '../src/data/buddy4studySchemes.json');
  fs.writeFileSync(outputPath, JSON.stringify(schemes, null, 2), 'utf-8');
  console.log(`Successfully saved ${schemes.length} Buddy4Study scholarships to ${outputPath}`);
}

fetchAndSave().catch(err => {
  console.error('Error fetching Buddy4Study scholarships:', err);
  process.exit(1);
});
