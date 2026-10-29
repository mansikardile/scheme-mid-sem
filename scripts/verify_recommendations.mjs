import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import schemes
const allSchemes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/data/allSchemes.json'), 'utf-8'));
const b4sSchemes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/data/buddy4studySchemes.json'), 'utf-8'));

console.log(`Loaded ${allSchemes.length} all-India schemes and ${b4sSchemes.length} Buddy4Study scholarships.`);

const profile = {
  fullName: 'Mansi Kardile',
  selectedCategory: 'student',
  answers: {
    state: 'Maharashtra',
    gender: 'Female',
    casteCategory: 'OBC',
    annualIncome: 200000,
    hasDisability: false
  }
};

const otherStates = [
  'punjab', 'haryana', 'assam', 'bihar', 'gujarat', 'karnataka', 'kerala', 
  'madhya pradesh', 'odisha', 'rajasthan', 'tamil nadu', 'telangana', 'uttar pradesh', 
  'west bengal', 'andhra pradesh', 'chhattisgarh', 'himachal pradesh', 'jharkhand'
];

function testSearch(query) {
  const qLower = query.toLowerCase();
  const terms = qLower.split(/\s+/).filter(t => t.length > 2);
  const userState = 'Maharashtra'.toLowerCase();

  const combined = [...b4sSchemes, ...allSchemes];

  const results = combined.filter(scheme => {
    const fullText = (
      (scheme.title || '') + ' ' + 
      (scheme.shortDescription || '') + ' ' + 
      (scheme.detailedDescription || '') + ' ' + 
      (scheme.ministryOrOrganization || '')
    ).toLowerCase();

    // 1. State filter
    const mentionsOtherState = otherStates.some(st => st !== userState && fullText.includes(st));
    const mentionsUserState = fullText.includes(userState) || fullText.includes('mahadbt');
    const isCentral = (scheme.type || '').includes('Central') || fullText.includes('all india') || fullText.includes('national scholarship');

    if (mentionsOtherState && !mentionsUserState && !isCentral) {
      return false;
    }

    // 2. Disability filter
    if (fullText.includes('divyang') || fullText.includes('disability')) {
      return false;
    }

    return true;
  });

  console.log(`\nFiltered down to ${results.length} valid schemes for Mansi (State: Maharashtra, non-disabled).`);
  
  // Show top candidates matching 'scholarship'
  const matched = results.filter(s => {
    const title = (s.title || '').toLowerCase();
    return title.includes('scholarship') || title.includes('mahadbt') || title.includes('obc');
  }).slice(0, 5);

  console.log('Top matching titles:');
  matched.forEach((s, idx) => {
    console.log(`  ${idx + 1}. [${s.type}] ${s.title}`);
  });
}

testSearch('i want gov scheme scholarship');
