import type { UserProfile, Scheme } from '../types';
import { schemeService } from './schemeService';
import { evaluateSchemeEligibility } from '../utils/matchingEngine';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  matchedSchemes?: Scheme[];
  suggestedFollowUps?: string[];
}

export interface OllamaModelInfo {
  name: string;
  model: string;
  size: number;
}

class OllamaService {
  private activeModel: string = 'qwen2.5:1.5b';
  private availableModels: string[] = ['qwen2.5:1.5b', 'qwen2.5:0.5b'];
  private isOllamaOnline: boolean | null = null;

  public async checkOllamaStatus(): Promise<{ online: boolean; models: string[] }> {
    try {
      // First try proxy, fallback to direct port
      let res = await fetch('/api/ollama/api/tags', { signal: AbortSignal.timeout(3000) }).catch(() => null);
      if (!res || !res.ok) {
        res = await fetch('http://localhost:11434/api/tags', { signal: AbortSignal.timeout(3000) }).catch(() => null);
      }

      if (res && res.ok) {
        const data = await res.json();
        const models = (data.models || []).map((m: any) => m.name || m.model);
        this.availableModels = models.length > 0 ? models : ['qwen2.5:1.5b', 'qwen2.5:0.5b'];
        
        // Pick qwen if present
        const qwenModel = this.availableModels.find(m => m.includes('qwen'));
        if (qwenModel) {
          this.activeModel = qwenModel;
        }

        this.isOllamaOnline = true;
        return { online: true, models: this.availableModels };
      }
    } catch {
      // offline
    }

    this.isOllamaOnline = false;
    return { online: false, models: [] };
  }

  public getActiveModel(): string {
    return this.activeModel;
  }

  public setActiveModel(modelName: string) {
    this.activeModel = modelName;
  }

  /**
   * Search local schemes relevant to the user query and profile
   * strictly enforcing state domicile, caste quota, disability, and intent.
   */
  public searchRelevantSchemes(query: string, userProfile?: UserProfile | null): Scheme[] {
    const all = schemeService.getAllSchemes();
    const qLower = query.toLowerCase().trim();
    const answers = userProfile?.answers || {};
    const category = userProfile?.selectedCategory || (answers.category as any) || 'student';
    const userState = (answers.state || 'Maharashtra').trim();
    const userCaste = (answers.casteCategory || 'General').trim();
    const userGender = (answers.gender || 'Female').trim();
    const hasDisability = Boolean(answers.hasDisability);

    // Intent detection
    const isGovQuery = /gov|sarkari|government|ministry|state|central|mahadbt|nsp/i.test(qLower);
    const isCsrQuery = /csr|private|corporate|tata|reliance|hdfc|aditya|wipro/i.test(qLower);
    const isScholarshipQuery = /scholar|student|college|fees|study|matric|degree|engineering|hostel/i.test(qLower) || category === 'student';

    const terms = qLower.split(/\s+/).filter(t => t.length > 2);

    const scored = all.map(scheme => {
      // 1. Rigorous Eligibility Evaluation
      const evalResult = evaluateSchemeEligibility(scheme, answers, category);
      
      // If not eligible (e.g. wrong state, wrong gender), drop completely unless user explicitly queried for that specific term
      if (!evalResult.isEligible) {
        const titleLower = scheme.title.toLowerCase();
        const mentionsExactQuery = terms.some(t => titleLower.includes(t));
        if (!mentionsExactQuery) {
          return { scheme, score: -100 };
        }
      }

      const crit = scheme.eligibilityCriteria || {};
      const fullText = (
        scheme.title + ' ' + 
        scheme.shortDescription + ' ' + 
        scheme.detailedDescription + ' ' + 
        scheme.ministryOrOrganization + ' ' + 
        (scheme.tags || []).join(' ')
      ).toLowerCase();

      // 2. Strict State Domicile Guard:
      // If scheme is state-specific and does not match the user's state, reject it!
      const otherStates = [
        'punjab', 'haryana', 'assam', 'bihar', 'gujarat', 'karnataka', 'kerala', 
        'madhya pradesh', 'odisha', 'rajasthan', 'tamil nadu', 'telangana', 'uttar pradesh', 
        'west bengal', 'andhra pradesh', 'chhattisgarh', 'himachal pradesh', 'jharkhand'
      ];
      
      const userStateLower = userState.toLowerCase();
      const mentionsOtherState = otherStates.some(st => st !== userStateLower && fullText.includes(st));
      const mentionsUserState = fullText.includes(userStateLower) || fullText.includes('mahadbt');
      const isCentralOrPanIndia = scheme.type === 'Central Government' || 
        fullText.includes('all india') || 
        fullText.includes('national scholarship portal') || 
        fullText.includes('ministry of education') ||
        (crit.allowedStates && crit.allowedStates.some(s => s.toLowerCase().includes('all')));

      if (mentionsOtherState && !mentionsUserState && !isCentralOrPanIndia) {
        return { scheme, score: -100 };
      }

      // 3. Strict Disability Guard:
      if ((crit.isDisabilityOnly || fullText.includes('divyang') || fullText.includes('disability')) && !hasDisability) {
        return { scheme, score: -100 };
      }

      // 4. Calculate intelligent relevance score
      let score = evalResult.matchScore || 50;

      // Category match
      if (category && scheme.category.includes(category)) {
        score += 15;
      }

      // Government Intent match
      if (isGovQuery) {
        if (scheme.type === 'Central Government' || scheme.type === 'State Government') {
          score += 25;
        } else if (scheme.type === 'Private & CSR') {
          score -= 15;
        }
      }

      // Private/CSR Intent match
      if (isCsrQuery) {
        if (scheme.type === 'Private & CSR' || scheme.id.startsWith('csr-') || scheme.id.startsWith('b4s-')) {
          score += 35;
        }
      }

      // Scholarship Intent match
      if (isScholarshipQuery) {
        if (crit.isStudentOnly || scheme.category.includes('student') || scheme.benefitType === 'Scholarship & Fee Waiver') {
          score += 20;
        }
      }

      // State Specific Boost (e.g. Maharashtra MahaDBT schemes for Maharashtra student)
      if (mentionsUserState || (crit.allowedStates && crit.allowedStates.includes(userState))) {
        score += 35;
      }

      // Quota / Caste match
      if (userCaste === 'OBC' && (fullText.includes('obc') || (crit.castes && crit.castes.includes('OBC')))) {
        score += 40;
      }

      // Gender match (e.g. Pragati scheme for girl students)
      if (userGender === 'Female' && (crit.isWomenOnly || fullText.includes('girl') || fullText.includes('pragati') || fullText.includes('women'))) {
        score += 30;
      }

      // Keyword matches
      const titleLower = scheme.title.toLowerCase();
      const orgLower = scheme.ministryOrOrganization.toLowerCase();
      for (const t of terms) {
        if (titleLower.includes(t)) score += 8;
        if (fullText.includes(t)) score += 3;
        if (orgLower.includes(t)) score += 5;
      }

      return { scheme, score };
    });

    return scored
      .filter(item => item.score > 20)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map(item => item.scheme);
  }

  /**
   * Generate an intelligent tailored answer using local Ollama Qwen model
   */
  public async generateChatResponse({
    userMessage,
    chatHistory,
    userProfile,
    onToken
  }: {
    userMessage: string;
    chatHistory: ChatMessage[];
    userProfile?: UserProfile | null;
    onToken?: (token: string) => void;
  }): Promise<{ replyText: string; matchedSchemes: Scheme[]; followUps: string[] }> {
    // 1. Retrieve local knowledge (Schemes & Scholarships)
    const relevantSchemes = this.searchRelevantSchemes(userMessage, userProfile);
    const userState = userProfile?.answers?.state || 'Maharashtra';
    const userCaste = userProfile?.answers?.casteCategory || 'OBC';
    const userGender = userProfile?.answers?.gender || 'Female';

    // 2. Format user profile context
    const profileDetails = userProfile ? `
USER CITIZEN PROFILE:
- Full Name: ${userProfile.fullName || 'Citizen'}
- Category: ${userProfile.selectedCategory || 'Student'}
- State of Permanent Domicile: ${userState}
- Age: ${userProfile.answers?.age || '20'}
- Gender: ${userGender}
- Social / Caste Category: ${userCaste}
- Annual Family Income: ₹${userProfile.answers?.annualIncome || '2,00,000'}
${userProfile.answers?.educationLevel ? `- Enrolled Course: ${userProfile.answers.educationLevel}` : '- Enrolled Course: College / Degree Student'}
${userProfile.answers?.marksPercentage ? `- Last Exam Marks: ${userProfile.answers.marksPercentage}%` : ''}
${userProfile.answers?.hasDisability ? '- Disability: Yes' : '- Disability: None (Do NOT recommend disability/Divyangjan schemes)'}
` : 'User profile: Student in Maharashtra, Female, OBC category, income ₹2,00,000.';

    // 3. Format relevant schemes context
    const schemesContext = relevantSchemes.length > 0 ? `
TOP MATCHED SCHEMES FROM LOCAL VERIFIED DATABASE:
${relevantSchemes.map((s, idx) => `
[Scheme ${idx + 1}]
Title: ${s.title}
Provider: ${s.ministryOrOrganization} (${s.type})
Financial Benefit: ${s.financialBenefitText}
Eligibility: ${s.shortDescription}
Application Deadline: ${s.deadline || 'Regular Cycle'}
Official Portal: ${s.officialPortalUrl}
`).join('\n')}
` : 'No direct keyword matches found in local database for this specific query.';

    // 4. Construct System Prompt with strict grounding constraints
    const systemPrompt = `You are "Scheme Sathi AI" (powered by Qwen), a friendly, highly intelligent Indian welfare advisor and scholarship counselor.

${profileDetails}

${schemesContext}

CRITICAL ADVISORY & GROUNDING RULES:
1. STRICT STATE DOMICILE RULE: The applicant is domiciled in "${userState}". You must NEVER recommend or suggest schemes exclusive to other states (such as Punjab, Haryana, Assam, Karnataka, etc.). Only recommend Central Government (Pan-India) schemes or State Government schemes specifically for ${userState} (such as MahaDBT schemes in Maharashtra).
2. STRICT ELIGIBILITY RULE: 
   - The user has NO disability: do NOT recommend Divyangjan or disability schemes.
   - The user is ${userCaste} and ${userGender}: highlight OBC quota benefits (e.g. Post Matric Scholarship for OBC Students) and female education schemes (e.g. AICTE Pragati) as applicable.
3. GROUNDING: Ground your suggestions strictly on the verified matched schemes provided above.
4. FORMATTING: Use clean, structured Markdown:
   - Use '### Scheme Name' for section titles.
   - Use bold '**...**' for amounts, benefits, and key eligibility criteria.
   - Use clean bullet points ('- ...') for benefits and application steps.
   - End with 1 or 2 polite, targeted follow-up questions to narrow down the grant to the tee (e.g. asking course type like Engineering/General degree or hostel stay).
`;

    // 5. Build conversation messages for Qwen
    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...chatHistory.slice(-4).map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      })),
      { role: 'user', content: userMessage }
    ];

    let fullReply = '';

    try {
      // Call Ollama via Vite proxy or direct port
      const endpoint = '/api/ollama/api/chat';
      const fallbackEndpoint = 'http://localhost:11434/api/chat';

      let response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: this.activeModel,
          messages: apiMessages,
          stream: Boolean(onToken)
        })
      }).catch(() => null);

      if (!response || !response.ok) {
        response = await fetch(fallbackEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: this.activeModel,
            messages: apiMessages,
            stream: Boolean(onToken)
          })
        }).catch(() => null);
      }

      if (response && response.ok) {
        if (onToken && response.body) {
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let done = false;

          while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) {
              const chunkStr = decoder.decode(value, { stream: true });
              const lines = chunkStr.split('\n').filter(l => l.trim().length > 0);
              for (const line of lines) {
                try {
                  const parsed = JSON.parse(line);
                  const token = parsed.message?.content || parsed.response || '';
                  if (token) {
                    fullReply += token;
                    onToken(token);
                  }
                } catch {
                  // ignore partial json
                }
              }
            }
          }
        } else {
          const data = await response.json();
          fullReply = data.message?.content || data.response || '';
        }
      }
    } catch (err) {
      console.warn('Ollama API stream note:', err);
    }

    // Fallback if Ollama response was empty or timed out
    if (!fullReply.trim()) {
      fullReply = this.generateOfflineFallbackReply(userMessage, userProfile, relevantSchemes);
    }

    // Generate smart follow-up suggestions
    const followUps = this.generateSmartFollowUps(userProfile, userMessage, relevantSchemes);

    return {
      replyText: fullReply,
      matchedSchemes: relevantSchemes,
      followUps
    };
  }

  private generateOfflineFallbackReply(
    query: string, 
    userProfile?: UserProfile | null, 
    schemes: Scheme[] = []
  ): string {
    const name = userProfile?.fullName ? userProfile.fullName.split(' ')[0] : 'friend';
    const category = userProfile?.selectedCategory || 'student';

    if (schemes.length > 0) {
      return `Hello ${name}! Based on your profile and query, I found **${schemes.length} exact matching programs** in our verified database:

${schemes.map((s, i) => `${i + 1}. **${s.title}**
   - 💰 **Benefit**: ${s.financialBenefitText}
   - 🎓 **Eligibility**: ${s.shortDescription}
   - ⏳ **Deadline**: ${s.deadline || 'Ongoing'}
`).join('\n')}

💡 **To narrow down to the absolute best scheme for you:**
- What is your exact course year / semester?
- What was your percentage in your latest marksheet?`;
    }

    return `Hello ${name}! I'm here to match you with exact Indian government schemes and Buddy4Study scholarships.

Based on your ${category} profile:
1. What specific course or project are you looking for funding for?
2. What is your family's annual income bracket (e.g. under ₹2.5L or ₹6L)?
3. What is your state of permanent residence?

Answer these details, and I will pinpoint the exact grants you can apply for right now!`;
  }

  private generateSmartFollowUps(
    userProfile?: UserProfile | null, 
    _userMessage?: string,
    schemes: Scheme[] = []
  ): string[] {
    const list: string[] = [];

    if (!userProfile?.answers?.annualIncome) {
      list.push('My family annual income is under ₹2.5 Lakhs');
    }
    if (!userProfile?.answers?.marksPercentage && userProfile?.selectedCategory === 'student') {
      list.push('I scored 75%+ in my last exams');
    }
    if (schemes.length > 0) {
      list.push(`How do I apply for ${schemes[0].title.slice(0, 30)}...?`);
      list.push('What documents do I need to prepare?');
    } else {
      list.push('Show scholarships for girls in STEM');
      list.push('Find central government fee waiver grants');
    }

    return list.slice(0, 3);
  }
}

export const ollamaService = new OllamaService();
