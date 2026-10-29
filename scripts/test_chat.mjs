import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load local Buddy4Study scholarships
const b4sPath = path.resolve(__dirname, '../src/data/buddy4studySchemes.json');
const schemes = JSON.parse(fs.readFileSync(b4sPath, 'utf-8'));

const OLLAMA_URL = 'http://localhost:11434/api/chat';
const MODEL = 'qwen2.5:1.5b';

console.log('\x1b[36m============================================================\x1b[0m');
console.log('\x1b[1m\x1b[32m🇮🇳 Scheme Sathi AI - Terminal Qwen Chat\x1b[0m');
console.log('\x1b[36mModel: ' + MODEL + ' | Local Database: ' + schemes.length + ' Buddy4Study Scholarships\x1b[0m');
console.log('\x1b[36m============================================================\x1b[0m\n');

// Sample default student profile for testing
const sampleProfile = {
  fullName: 'Mansi Kardile',
  category: 'student',
  state: 'Maharashtra',
  age: 20,
  gender: 'Female',
  caste: 'OBC',
  income: '₹2,00,000 / year',
  education: 'Undergraduate (B.Tech / Engineering)',
  marks: '78%'
};

function searchLocalSchemes(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);
  const scored = schemes.map(s => {
    let score = 0;
    const text = (s.title + ' ' + s.shortDescription + ' ' + s.ministryOrOrganization).toLowerCase();
    for (const t of terms) {
      if (text.includes(t)) score += 5;
    }
    if (s.title.toLowerCase().includes('stem') || s.title.toLowerCase().includes('women') || s.title.toLowerCase().includes('kanya')) {
      score += 3;
    }
    return { s, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(x => x.s);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const conversationHistory = [];

async function askQuestion() {
  rl.question('\n\x1b[1m\x1b[33m👤 You: \x1b[0m', async (userQuery) => {
    if (!userQuery.trim() || userQuery.trim().toLowerCase() === 'exit') {
      console.log('\nExiting Scheme Sathi terminal chat. Goodbye!\n');
      rl.close();
      return;
    }

    // 1. RAG search
    const matched = searchLocalSchemes(userQuery);
    console.log(`\n\x1b[35m[RAG Search] Found ${matched.length} top matching schemes from local database:\x1b[0m`);
    matched.forEach((m, i) => console.log(`   ${i + 1}. \x1b[34m${m.title}\x1b[0m - \x1b[32m${m.financialBenefitText}\x1b[0m (${m.deadline})`));

    const systemPrompt = `You are "Scheme Sathi AI" (powered by Qwen), a friendly, highly intelligent Indian welfare advisor and scholarship counselor.
Factor in the student's profile:
- Name: ${sampleProfile.fullName}
- Level: ${sampleProfile.education}
- State: ${sampleProfile.state}
- Category: ${sampleProfile.caste}
- Family Income: ${sampleProfile.income}
- Marks: ${sampleProfile.marks}

Relevant local schemes retrieved:
${matched.map((m, i) => `[Scheme ${i + 1}] ${m.title} | Award: ${m.financialBenefitText} | Eligibility: ${m.shortDescription} | Deadline: ${m.deadline}`).join('\n')}

Instructions:
1. Provide a sharp, tailored answer highlighting matching schemes.
2. Proactively ask 1-2 targeted follow-up questions to narrow down to the exact scheme (e.g. asking course branch, family income certificate status, or admission type).
3. Be encouraging and concise.`;

    conversationHistory.push({ role: 'user', content: userQuery });

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-4)
    ];

    console.log(`\n\x1b[1m\x1b[32m🤖 Qwen AI (${MODEL}): \x1b[0m`);

    try {
      const response = await fetch(OLLAMA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL,
          messages,
          stream: true
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama HTTP Error: ${response.statusText}`);
      }

      let fullResponse = '';
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n').filter(Boolean);
          for (const line of lines) {
            try {
              const parsed = JSON.parse(line);
              const token = parsed.message?.content || parsed.response || '';
              if (token) {
                process.stdout.write(token);
                fullResponse += token;
              }
            } catch {
              // ignore
            }
          }
        }
      }

      conversationHistory.push({ role: 'assistant', content: fullResponse });
      console.log('\n');
    } catch (err) {
      console.error('\nError contacting Ollama:', err.message);
    }

    askQuestion();
  });
}

askQuestion();
