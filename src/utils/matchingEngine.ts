import type { Scheme, MatchResult, CategoryType } from '../types';

const INDIAN_STATES_AND_UTS = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
  'Uttarakhand', 'West Bengal', 'Andaman', 'Chandigarh', 'Dadra', 'Daman', 'Delhi', 
  'Jammu', 'Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

export function evaluateSchemeEligibility(
  scheme: Scheme, 
  answers: Record<string, any>, 
  primaryCategory?: CategoryType
): MatchResult {
  const matchedPoints: string[] = [];
  const unmetPoints: string[] = [];
  let score = 95;
  let isDisqualified = false;

  // Extract applicant details with safe defaults
  const userCategory = primaryCategory || (answers.category as CategoryType) || 'student';
  const age = Number(answers.age) || 20;
  const gender = (answers.gender || 'Female').trim();
  const caste = (answers.casteCategory || 'General').trim();
  const userState = (answers.state || 'Maharashtra').trim();
  const annualIncome = Number(answers.annualIncome) || 150000;
  const employmentStatus = (answers.employmentStatus || 'Student').trim();
  const landHoldingAcres = Number(answers.landHoldingAcres) || 0;
  const hasDisability = Boolean(answers.hasDisability);
  const disabilityPercentage = Number(answers.disabilityPercentage) || 0;
  const isPregnantOrLactating = Boolean(answers.isPregnantOrLactating);
  const hasGirlChildUnder10 = Boolean(answers.hasGirlChildUnder10);
  const houseType = answers.houseType || 'SemiPucca';
  const isBPL = answers.rationCardType === 'BPL' || answers.rationCardType === 'AAY' || annualIncome <= 200000;
  const defenceStatus = answers.defenceStatus || 'None';

  const isDefenceAffiliated = userCategory === 'defence' || 
    employmentStatus === 'Defence' || 
    (defenceStatus !== 'None' && defenceStatus !== '') || 
    Boolean(answers.hasESMIdCard) || 
    Boolean(answers.hasECHSMembership) || 
    Boolean(answers.isGallantryAwardee);

  const isFarmerAffiliated = userCategory === 'farmer' || 
    employmentStatus === 'Farmer' || 
    employmentStatus === 'AgriLabor' || 
    landHoldingAcres > 0;

  const isStudentAffiliated = userCategory === 'student' || 
    employmentStatus === 'Student' || 
    age <= 25;

  const isMSMEAffiliated = userCategory === 'msme' || 
    employmentStatus === 'SelfEmployed' || 
    employmentStatus === 'Artisan';

  const crit = scheme.eligibilityCriteria || {};
  const categories = scheme.category || [];
  const fullText = (
    scheme.title + ' ' + 
    (scheme.tags || []).join(' ') + ' ' + 
    (scheme.shortDescription || '') + ' ' + 
    (scheme.ministryOrOrganization || '')
  ).toLowerCase();

  // ==========================================
  // 1. STATE DOMICILE CHECK
  // ==========================================
  // A. Formal criteria check
  if (crit.allowedStates && Array.isArray(crit.allowedStates) && crit.allowedStates.length > 0) {
    const isAllIndia = crit.allowedStates.some(s => 
      s.toLowerCase().includes('all india') || 
      s.toLowerCase().includes('central') || 
      s.toLowerCase() === 'all'
    );

    if (!isAllIndia) {
      const stateMatch = crit.allowedStates.some(s => 
        s.toLowerCase().trim() === userState.toLowerCase().trim() ||
        userState.toLowerCase().includes(s.toLowerCase().trim()) ||
        s.toLowerCase().includes(userState.toLowerCase().trim())
      );

      if (stateMatch) {
        matchedPoints.push(`Permanent domicile in ${userState} satisfies state eligibility (${crit.allowedStates.join(', ')})`);
        score += 10;
      } else {
        unmetPoints.push(`Exclusive to residents of ${crit.allowedStates.join(', ')} (Applicant domicile: ${userState})`);
        isDisqualified = true;
        score -= 60;
      }
    } else {
      matchedPoints.push(`Pan-India coverage valid for residents of ${userState}`);
    }
  }

  // B. Content-based state exclusivity check (many raw state schemes state names in title/tags)
  for (const st of INDIAN_STATES_AND_UTS) {
    if (st.toLowerCase() !== userState.toLowerCase() && fullText.includes(st.toLowerCase())) {
      // If mentions another state and not user's state or national central keywords
      if (!fullText.includes(userState.toLowerCase()) && !fullText.includes('all india') && !fullText.includes('central government')) {
        unmetPoints.push(`State-specific scheme for ${st} (Applicant domicile: ${userState})`);
        isDisqualified = true;
        score -= 60;
        break;
      }
    }
  }

  // ==========================================
  // 2. GENDER ELIGIBILITY
  // ==========================================
  if (crit.isWomenOnly || (crit.genders && !crit.genders.includes('All') && crit.genders.includes('Female') && !crit.genders.includes('Male'))) {
    if (gender === 'Female') {
      matchedPoints.push('Targeted female beneficiary criterion satisfied');
      score += 10;
    } else {
      unmetPoints.push('Reserved exclusively for female applicants');
      isDisqualified = true;
      score -= 60;
    }
  } else if (crit.genders && !crit.genders.includes('All')) {
    if (crit.genders.includes(gender as any)) {
      matchedPoints.push(`Gender requirement (${gender}) satisfied`);
    } else {
      unmetPoints.push(`Targeted exclusively towards ${crit.genders.join(' / ')} applicants`);
      isDisqualified = true;
      score -= 50;
    }
  }

  // Content-based female keywords for male applicants
  if (gender === 'Male') {
    const femaleKeywords = ['women', 'mahila', 'kanya', 'girl child', 'widow', 'nari', 'dikri', 'matru', 'maternity', 'pregnant', 'lactating'];
    if (femaleKeywords.some(kw => fullText.includes(kw))) {
      unmetPoints.push('Reserved specifically for women, mothers, or girl child beneficiaries');
      isDisqualified = true;
      score -= 60;
    }
  }

  // Transgender specific schemes
  if (gender !== 'Transgender') {
    if (fullText.includes('transgender') || fullText.includes('third gender')) {
      unmetPoints.push('Targeted specifically for transgender citizens');
      isDisqualified = true;
      score -= 60;
    }
  }

  // ==========================================
  // 3. AGE LIMITS & SENIOR CITIZENS
  // ==========================================
  const seniorKeywords = ['varishtha', 'vridha', 'senior citizen', 'old age pension', 'elderly', 'super senior'];
  const hasSeniorKeyword = seniorKeywords.some(kw => fullText.includes(kw));

  if (crit.isSeniorCitizenOnly || (categories.length === 1 && categories[0] === 'senior_citizen') || hasSeniorKeyword) {
    if (age >= 60) {
      matchedPoints.push(`Senior citizen age status confirmed (${age} yrs ≥ 60)`);
      score += 10;
    } else {
      unmetPoints.push(`Senior citizen benefits require minimum age of 60 years (Applicant: ${age} yrs)`);
      isDisqualified = true;
      score -= 60;
    }
  } else {
    if (crit.minAge !== undefined) {
      if (age >= crit.minAge) {
        matchedPoints.push(`Age ${age} yrs meets minimum threshold (≥ ${crit.minAge} yrs)`);
      } else {
        unmetPoints.push(`Applicant is ${age} yrs, scheme requires at least ${crit.minAge} yrs`);
        isDisqualified = true;
        score -= 40;
      }
    }

    if (crit.maxAge !== undefined) {
      if (age <= crit.maxAge) {
        matchedPoints.push(`Age ${age} yrs is within upper limit (≤ ${crit.maxAge} yrs)`);
      } else {
        unmetPoints.push(`Applicant is ${age} yrs, exceeds age ceiling of ${crit.maxAge} yrs`);
        isDisqualified = true;
        score -= 40;
      }
    }
  }

  // ==========================================
  // 4. INCOME CEILING
  // ==========================================
  if (crit.maxAnnualIncome !== undefined && crit.maxAnnualIncome > 0) {
    if (annualIncome <= crit.maxAnnualIncome) {
      const formattedLimit = `₹${(crit.maxAnnualIncome / 100000).toFixed(1)} Lakh`;
      matchedPoints.push(`Family income (₹${annualIncome.toLocaleString('en-IN')}) is within ${formattedLimit} ceiling`);
      score += 5;
    } else {
      unmetPoints.push(`Annual income ₹${annualIncome.toLocaleString('en-IN')} exceeds threshold of ₹${crit.maxAnnualIncome.toLocaleString('en-IN')}`);
      isDisqualified = true;
      score -= 45;
    }
  }

  // ==========================================
  // 5. CASTE / SOCIAL CATEGORY
  // ==========================================
  if (crit.castes && !crit.castes.includes('All')) {
    if (crit.castes.includes(caste as any)) {
      matchedPoints.push(`Social category '${caste}' eligible`);
      score += 10;
    } else {
      unmetPoints.push(`Targeted specifically towards ${crit.castes.join(' / ')} categories (Applicant: ${caste})`);
      isDisqualified = true;
      score -= 50;
    }
  }

  // ==========================================
  // 6. DISABILITY BENEFICIARIES
  // ==========================================
  const disKeywords = ['divyang', 'yogyajan', 'disability', 'tricycle', 'handicapped', 'blind', 'deaf', 'udid', 'prosthetic', 'special abled'];
  const hasDisabilityKeyword = disKeywords.some(kw => fullText.includes(kw));

  if (crit.isDisabilityOnly || categories.includes('disability') || hasDisabilityKeyword) {
    if (hasDisability && disabilityPercentage >= (crit.minDisabilityPercentage || 40)) {
      matchedPoints.push('Benchmark disability verified with UDID card');
      score += 20;
    } else {
      unmetPoints.push('Exclusive for differently-abled citizens with benchmark disability (40%+ UDID)');
      isDisqualified = true;
      score -= 60;
    }
  }

  // ==========================================
  // 7. INSTITUTIONAL & VOCATIONAL EXCLUSIONS
  // ==========================================
  // Non-individual / NGO grants
  if (fullText.includes('non-governmental organisation') || fullText.includes('residential homes for the children') || fullText.includes('grant-in-aid to voluntary')) {
    unmetPoints.push('Grant intended for registered institutions / NGOs rather than individual citizens');
    isDisqualified = true;
    score -= 60;
  }

  // Specialized vocation filtering
  const vocations = [
    { name: 'bunkar / weaver', keywords: ['bunkar', 'weaver', 'handloom', 'powerloom'] },
    { name: 'construction / BOCW worker', keywords: ['bocw', 'construction worker', 'building worker'] },
    { name: 'sanitation worker', keywords: ['safai karmachari', 'sanitation worker', 'manual scavenger'] },
    { name: 'advocate / lawyer', keywords: ['advocate', 'lawyer', 'bar council'] },
    { name: 'doctor / medical practitioner', keywords: ['doctor', 'medical practitioner', 'mbbs'] },
    { name: 'transport / auto rickshaw driver', keywords: ['auto driver', 'rickshaw', 'taxi driver'] },
    { name: 'fisheries / matsya', keywords: ['matsya', 'fisherman', 'fisheries', 'aquaculture'] },
    { name: 'mining worker', keywords: ['mine worker', 'quarry'] },
  ];

  for (const voc of vocations) {
    if (voc.keywords.some(k => fullText.includes(k))) {
      const isAffiliated = (voc.name.includes('fisheries') && isFarmerAffiliated) ||
                           (voc.name.includes('weaver') && isMSMEAffiliated);
      if (!isAffiliated) {
        unmetPoints.push(`Tailored specifically for ${voc.name}`);
        isDisqualified = true;
        score -= 50;
        break;
      }
    }
  }

  // ==========================================
  // 8. PRIMARY DOMAIN ALIGNMENT
  // ==========================================
  if (userCategory === 'student') {
    // Exclude schemes purely for other domains
    if (categories.includes('farmer') || categories.includes('defence') || categories.includes('disability')) {
      isDisqualified = true;
      unmetPoints.push('Intended for specialized sectors (farmer/defence/disability)');
      score -= 50;
    }

    // Exclude industrial MSME capital / loan schemes
    const msmeLoanKeywords = ['zed certification', 'financial support to msme', 'support to msme', 'commercial loan', 'business loan', 'enterprise credit'];
    if (msmeLoanKeywords.some(kw => fullText.includes(kw))) {
      isDisqualified = true;
      unmetPoints.push('MSME commercial industrial support grant');
      score -= 50;
    }

    const isStudentRelevant = categories.includes('student') || 
      categories.includes('unemployed') || 
      scheme.benefitType === 'Scholarship & Fee Waiver' ||
      [
        'scholarship', 'student', 'education', 'fellowship', 'study', 'coaching', 
        'chatra', 'youth', 'skill', 'internship', 'tuition', 'degree', 'diploma', 
        'exam', 'upsc', 'ssc', 'jee', 'neet', 'college', 'school', 'vidyarthi'
      ].some(k => fullText.includes(k));

    const isUniversalIdentity = fullText.includes('aadhaar') || fullText.includes('ayushman') || fullText.includes('digital india') || fullText.includes('voter');

    if (!isStudentRelevant && !isUniversalIdentity) {
      unmetPoints.push('Not directly aligned with educational, scholarship, or youth development goals');
      isDisqualified = true;
      score -= 50;
    } else {
      score += 15;
    }
  } else if (userCategory === 'farmer') {
    if (categories.includes('student') || categories.includes('defence') || categories.includes('disability')) {
      isDisqualified = true;
      unmetPoints.push('Intended for student/defence/disability sectors');
      score -= 50;
    }

    const isFarmerRelevant = categories.includes('farmer') || 
      [
        'farmer', 'kisan', 'agriculture', 'crop', 'krishi', 'soil', 'seed', 
        'fertilizer', 'irrigation', 'tractor', 'horticulture', 'dairy', 'livestock', 'mandi'
      ].some(k => fullText.includes(k));

    const isUniversalIdentity = fullText.includes('aadhaar') || fullText.includes('ayushman') || fullText.includes('digital india');

    if (!isFarmerRelevant && !isUniversalIdentity) {
      unmetPoints.push('Not directly aligned with agriculture, cultivation, or livestock farming');
      isDisqualified = true;
      score -= 50;
    } else {
      score += 15;
    }
  } else if (userCategory === 'defence') {
    const isDefenceRelevant = categories.includes('defence') || 
      [
        'defence', 'armed forces', 'military', 'ex-servicemen', 'veteran', 
        'echs', 'ksb', 'veer nari', 'gallantry', 'army', 'navy', 'air force', 'dgr'
      ].some(k => fullText.includes(k));

    const isUniversalIdentity = fullText.includes('aadhaar') || fullText.includes('ayushman');

    if (!isDefenceRelevant && !isUniversalIdentity) {
      unmetPoints.push('Not aligned with Armed Forces or Ex-Servicemen welfare entitlements');
      isDisqualified = true;
      score -= 50;
    } else {
      score += 20;
    }
  } else if (userCategory === 'msme') {
    const isMSMERelevant = categories.includes('msme') || 
      [
        'msme', 'business', 'enterprise', 'startup', 'industry', 'trader', 
        'mudra', 'pmegp', 'credit guarantee', 'udyam', 'subsidy loan', 'seed fund'
      ].some(k => fullText.includes(k));

    const isUniversalIdentity = fullText.includes('aadhaar') || fullText.includes('ayushman');

    if (!isMSMERelevant && !isUniversalIdentity) {
      unmetPoints.push('Not directly aligned with MSME, business capital, or entrepreneurship');
      isDisqualified = true;
      score -= 50;
    } else {
      score += 15;
    }
  } else if (userCategory === 'women') {
    const isWomenRelevant = categories.includes('women') || 
      [
        'women', 'mahila', 'kanya', 'girl', 'maternity', 'widow', 'shg', 'sukanya', 'poshan'
      ].some(k => fullText.includes(k));

    const isUniversalIdentity = fullText.includes('aadhaar') || fullText.includes('ayushman');

    if (!isWomenRelevant && !isUniversalIdentity) {
      unmetPoints.push('Not directly aligned with women & child welfare initiatives');
      isDisqualified = true;
      score -= 50;
    } else {
      score += 15;
    }
  }

  // ==========================================
  // 9. SPECIALIZED FLAGSHIP SCHEMES
  // ==========================================
  if (scheme.id === 'sukanya-samriddhi') {
    if (hasGirlChildUnder10) {
      matchedPoints.push('Guardian of girl child below 10 years verified');
      score += 20;
    } else {
      unmetPoints.push('Requires a girl child below 10 years of age in family');
      isDisqualified = true;
      score -= 50;
    }
  }

  if (scheme.id === 'pm-matru-vandana') {
    if (isPregnantOrLactating && gender === 'Female') {
      matchedPoints.push('Maternity / Lactating mother status verified');
      score += 20;
    } else {
      unmetPoints.push('For pregnant women & lactating mothers only');
      isDisqualified = true;
      score -= 50;
    }
  }

  if (scheme.id === 'pm-awas-yojana') {
    if (houseType === 'Kutcha' || houseType === 'SemiPucca' || houseType === 'Rented') {
      matchedPoints.push(`Eligible housing condition (${houseType} house) for pucca construction grant`);
      score += 15;
    } else {
      unmetPoints.push('Requires residing in non-pucca/dilapidated house');
      isDisqualified = true;
      score -= 30;
    }
  }

  // Category relevance boost
  if (categories.includes(userCategory)) {
    score += 15;
  }

  // Final score clamping
  const finalScore = Math.max(10, Math.min(100, score));

  // Strict eligibility:
  // Must NOT be disqualified by state, gender, senior, domain, income, or vocation
  // And must have 0 unmet hard criteria, and score >= 75
  const isEligible = !isDisqualified && unmetPoints.length === 0 && finalScore >= 75;

  return {
    scheme,
    matchScore: finalScore,
    isEligible,
    matchedPoints,
    unmetPoints
  };
}

export function calculateTotalPotentialBenefit(matchedSchemes: MatchResult[]): number {
  return matchedSchemes
    .filter(m => m.isEligible)
    .reduce((sum, item) => sum + (item.scheme.financialBenefitMax || 0), 0);
}
