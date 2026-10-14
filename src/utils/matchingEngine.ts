import type { Scheme, MatchResult, CategoryType } from '../types';

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
  const age = Number(answers.age) || 22;
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

  // ==========================================
  // 1. STATE DOMICILE CHECK (Crucial for 3,000+ State Schemes)
  // ==========================================
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

  // ==========================================
  // 3. AGE LIMITS & SENIOR CITIZENS
  // ==========================================
  if (crit.isSeniorCitizenOnly || (categories.length === 1 && categories[0] === 'senior_citizen')) {
    if (age >= 60) {
      matchedPoints.push(`Senior citizen age status confirmed (${age} yrs ≥ 60)`);
      score += 10;
    } else {
      unmetPoints.push(`Senior citizen pension requires minimum age of 60 years (Applicant: ${age} yrs)`);
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
    const isSpecificTarget = crit.castes.some(c => ['SC', 'ST', 'Minority'].includes(c));
    if (crit.castes.includes(caste as any) || (!isSpecificTarget && caste === 'General')) {
      matchedPoints.push(`Social category '${caste}' eligible`);
    } else {
      unmetPoints.push(`Targeted specifically towards ${crit.castes.join(' / ')} categories (Applicant: ${caste})`);
      isDisqualified = true;
      score -= 50;
    }
  }

  // ==========================================
  // 6. DOMAIN FILTERING (Farmer vs Student vs MSME vs Defence vs Disability)
  // ==========================================
  // A. Farmer Exclusivity
  const isPureFarmerScheme = crit.isFarmerOnly || (
    categories.includes('farmer') && 
    !categories.includes('student') && 
    !categories.includes('women') && 
    !categories.includes('general')
  );
  if (isPureFarmerScheme) {
    if (isFarmerAffiliated) {
      matchedPoints.push('Agricultural cultivator / landholding status verified');
      score += 15;
    } else {
      unmetPoints.push('Agricultural scheme exclusively for farmers / cultivators with landholding');
      isDisqualified = true;
      score -= 60;
    }
  }

  // B. Student Exclusivity
  const isPureStudentScheme = crit.isStudentOnly || (
    categories.includes('student') && 
    !categories.includes('farmer') && 
    !categories.includes('msme') && 
    !categories.includes('general')
  );
  if (isPureStudentScheme) {
    if (isStudentAffiliated) {
      matchedPoints.push('Student / Higher education enrollment verified');
      score += 15;
    } else {
      unmetPoints.push('Academic scholarship exclusive to enrolled students');
      isDisqualified = true;
      score -= 60;
    }
  }

  // C. Disability Exclusivity
  const isPureDisabilityScheme = crit.isDisabilityOnly || (
    categories.includes('disability') && 
    !categories.includes('general')
  );
  if (isPureDisabilityScheme) {
    if (hasDisability && disabilityPercentage >= (crit.minDisabilityPercentage || 40)) {
      matchedPoints.push('Benchmark disability verified with UDID card');
      score += 20;
    } else {
      unmetPoints.push('Exclusive for differently-abled citizens with benchmark disability (40%+ UDID)');
      isDisqualified = true;
      score -= 60;
    }
  }

  // D. Defence Exclusivity
  const isPureDefenceScheme = crit.isDefenceOnly || (
    categories.includes('defence') && 
    !categories.includes('student') && 
    !categories.includes('general')
  );
  if (isPureDefenceScheme) {
    if (isDefenceAffiliated) {
      matchedPoints.push('Armed Forces / Ex-Servicemen credentials verified');
      score += 20;
    } else {
      unmetPoints.push('Reserved exclusively for Armed Forces personnel, Ex-Servicemen, Veer Naris & dependents');
      isDisqualified = true;
      score -= 60;
    }
  }

  // E. MSME Exclusivity
  const isPureMSMEScheme = crit.requiresUdyamRegistration || (
    categories.includes('msme') && 
    !categories.includes('student') && 
    !categories.includes('farmer') && 
    !categories.includes('general') &&
    (scheme.title.toLowerCase().includes('enterprise') || scheme.title.toLowerCase().includes('startup') || scheme.benefitType === 'Subsidized Loan / Capital')
  );
  if (isPureMSMEScheme) {
    if (isMSMEAffiliated) {
      matchedPoints.push('Micro/Small enterprise entrepreneur status verified');
      score += 15;
    } else {
      unmetPoints.push('Business loan / capital subsidy targeted towards MSME entrepreneurs & traders');
      isDisqualified = true;
      score -= 50;
    }
  }

  // F. BPL / Ration Card
  if (crit.isBPLOnly) {
    if (isBPL) {
      matchedPoints.push('BPL / Priority ration card or low income bracket verified');
      score += 10;
    } else {
      unmetPoints.push('Targeted towards Antyodaya / BPL / Low-income households');
      isDisqualified = true;
      score -= 35;
    }
  }

  // ==========================================
  // 7. SPECIFIC SPECIALIZED SCHEMES
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
  // Must NOT be disqualified by state, gender, senior, domain, income, etc.
  // And must have 0 unmet hard criteria, and score >= 70
  const isEligible = !isDisqualified && unmetPoints.length === 0 && finalScore >= 70;

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
