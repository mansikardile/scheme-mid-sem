import type { Scheme, MatchResult, CategoryType } from '../types';

export function evaluateSchemeEligibility(scheme: Scheme, answers: Record<string, any>, primaryCategory?: CategoryType): MatchResult {
  const matchedPoints: string[] = [];
  const unmetPoints: string[] = [];
  let score = 100;

  const age = Number(answers.age) || 25;
  const gender = answers.gender || 'Male';
  const caste = answers.casteCategory || 'General';
  const annualIncome = Number(answers.annualIncome) || 150000;
  const employmentStatus = answers.employmentStatus || 'Farmer';
  const landHoldingAcres = Number(answers.landHoldingAcres) || 0;
  const hasDisability = Boolean(answers.hasDisability);
  const isPregnantOrLactating = Boolean(answers.isPregnantOrLactating);
  const hasGirlChildUnder10 = Boolean(answers.hasGirlChildUnder10);
  const houseType = answers.houseType || 'SemiPucca';
  const isBPL = answers.rationCardType === 'BPL' || answers.rationCardType === 'AAY' || annualIncome <= 200000;

  const crit = scheme.eligibilityCriteria;

  // 1. Age check
  if (crit.minAge !== undefined) {
    if (age >= crit.minAge) {
      matchedPoints.push(`Age ${age} meets minimum requirement (≥ ${crit.minAge} yrs)`);
    } else {
      unmetPoints.push(`Applicant is ${age} yrs, scheme requires at least ${crit.minAge} yrs`);
      score -= 30;
    }
  }

  if (crit.maxAge !== undefined) {
    if (age <= crit.maxAge) {
      matchedPoints.push(`Age ${age} is within upper limit (≤ ${crit.maxAge} yrs)`);
    } else {
      unmetPoints.push(`Applicant age ${age} exceeds limit of ${crit.maxAge} yrs`);
      score -= 35;
    }
  }

  // 2. Gender check
  if (crit.genders && !crit.genders.includes('All')) {
    if (crit.genders.includes(gender as any)) {
      matchedPoints.push(`Gender '${gender}' is specifically targeted`);
    } else {
      unmetPoints.push(`Reserved specifically for ${crit.genders.join(' / ')} applicants`);
      score -= 50;
    }
  } else {
    matchedPoints.push('Open to all genders');
  }

  // 3. Caste / Social Category
  if (crit.castes && !crit.castes.includes('All')) {
    if (crit.castes.includes(caste as any) || crit.castes.includes('General')) {
      matchedPoints.push(`Social category '${caste}' eligible`);
    } else {
      unmetPoints.push(`Targeted towards ${crit.castes.join(' / ')} categories`);
      score -= 30;
    }
  }

  // 4. Annual Income check
  if (crit.maxAnnualIncome !== undefined) {
    if (annualIncome <= crit.maxAnnualIncome) {
      const formattedLimit = `₹${(crit.maxAnnualIncome / 100000).toFixed(1)} Lakh`;
      matchedPoints.push(`Annual income (₹${annualIncome.toLocaleString('en-IN')}) is within ${formattedLimit} limit`);
    } else {
      unmetPoints.push(`Annual income exceeds threshold of ₹${crit.maxAnnualIncome.toLocaleString('en-IN')}`);
      score -= 40;
    }
  }

  // 5. Category-specific requirements
  if (crit.isFarmerOnly) {
    if (employmentStatus === 'Farmer' || primaryCategory === 'farmer' || landHoldingAcres > 0) {
      matchedPoints.push('Active agricultural landholder / cultivator profile verified');
      if (crit.minLandSizeAcres && landHoldingAcres < crit.minLandSizeAcres) {
        unmetPoints.push(`Requires at least ${crit.minLandSizeAcres} acres land (Applicant has ${landHoldingAcres} acres)`);
        score -= 20;
      }
    } else {
      unmetPoints.push('Exclusive to farmers and agricultural landholders');
      score -= 60;
    }
  }

  if (crit.isStudentOnly) {
    if (employmentStatus === 'Student' || primaryCategory === 'student' || age <= 28) {
      matchedPoints.push('Student / Higher education enrollment verified');
    } else {
      unmetPoints.push('Requires enrollment in school, college, or university');
      score -= 50;
    }
  }

  if (crit.isDisabilityOnly) {
    if (hasDisability) {
      matchedPoints.push('Benchmark disability profile confirmed');
    } else {
      unmetPoints.push('Exclusive for persons with benchmark disability (40%+)');
      score -= 60;
    }
  }

  if (crit.isBPLOnly) {
    if (isBPL) {
      matchedPoints.push('BPL / Priority ration card or low income bracket verified');
    } else {
      unmetPoints.push('Targeted towards Antyodaya / BPL / Low-income households');
      score -= 25;
    }
  }

  if (crit.isDefenceOnly) {
    const isDefenceApplicant = employmentStatus === 'Defence' || 
      primaryCategory === 'defence' || 
      (answers.defenceStatus && answers.defenceStatus !== 'None') ||
      Boolean(answers.hasESMIdCard) || 
      Boolean(answers.hasECHSMembership) || 
      Boolean(answers.isGallantryAwardee) ||
      answers.defencePersonnelStatus !== undefined;
    if (isDefenceApplicant) {
      matchedPoints.push('Defence Forces / Ex-Servicemen / Dependent credentials verified');
    } else {
      unmetPoints.push('Reserved exclusively for Armed Forces personnel, Ex-Servicemen, Veer Naris & dependents');
      score -= 60;
    }
  }

  // Specific scheme boosts
  if (scheme.id.includes('defence') || scheme.category.includes('defence')) {
    if (answers.defenceStatus === 'WarWidow' || answers.defencePersonnelStatus === 'WarWidow' || answers.isGallantryAwardee) {
      matchedPoints.push('High priority: Veer Nari / Gallantry Awardee status verified');
      score = Math.min(100, score + 15);
    }
    if ((answers.isSeekingPMSS || answers.defenceStatus === 'DependentWard') && (scheme.id.includes('pmss') || scheme.title.toLowerCase().includes('scholarship'))) {
      matchedPoints.push('PMSS Higher Education Scholarship criteria matched for dependent ward');
      score = Math.min(100, score + 15);
    }
  }
  if (scheme.id === 'sukanya-samriddhi') {
    if (hasGirlChildUnder10) {
      matchedPoints.push('Guardian of girl child below 10 years verified');
    } else {
      unmetPoints.push('Requires a girl child below 10 years of age in family');
      score -= 50;
    }
  }

  if (scheme.id === 'pm-matru-vandana') {
    if (isPregnantOrLactating && gender === 'Female') {
      matchedPoints.push('Maternity / Lactating mother status verified');
    } else {
      unmetPoints.push('For pregnant women & lactating mothers only');
      score -= 60;
    }
  }

  if (scheme.id === 'pm-awas-yojana') {
    if (houseType === 'Kutcha' || houseType === 'SemiPucca' || houseType === 'Rented') {
      matchedPoints.push(`Eligible housing condition (${houseType} house) for pucca construction grant`);
    } else {
      unmetPoints.push('Requires residing in non-pucca/dilapidated house');
      score -= 30;
    }
  }

  // Category relevance boost
  if (primaryCategory && scheme.category.includes(primaryCategory)) {
    score = Math.min(100, score + 15);
  }

  const finalScore = Math.max(10, Math.min(100, score));
  const isEligible = finalScore >= 60;

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
