export type CategoryType = 
  | 'farmer' 
  | 'student' 
  | 'msme' 
  | 'women' 
  | 'senior_citizen' 
  | 'healthcare' 
  | 'disability' 
  | 'unemployed' 
  | 'housing' 
  | 'defence'
  | 'general';

export type SchemeType = 'Central Government' | 'State Government' | 'Private & CSR' | 'Banking & Subsidized Loan';

export type BenefitType = 'Direct Cash Transfer' | 'Scholarship & Fee Waiver' | 'Subsidized Loan / Capital' | 'Health & Insurance' | 'Equipment / Seeds / Raw Material' | 'Skill Training & Certification' | 'Housing / Infrastructure';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  isEmailVerified: boolean;
  selectedCategory: CategoryType;
  secondaryCategories?: CategoryType[];
  answers: Record<string, any>;
  hasCompletedQuestionnaire: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Scheme {
  id: string;
  slug?: string;
  myschemeId?: string;
  title: string;
  ministryOrOrganization: string;
  type: SchemeType;
  category: CategoryType[];
  benefitType: BenefitType;
  shortDescription: string;
  detailedDescription: string;
  financialBenefitMax: number; // in INR
  financialBenefitText: string;
  deadline?: string;
  isPopular?: boolean;
  isNew?: boolean;
  tags: string[];
  eligibilityCriteria: {
    minAge?: number;
    maxAge?: number;
    genders?: ('Male' | 'Female' | 'Transgender' | 'All')[];
    castes?: ('General' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'Minority' | 'All')[];
    maxAnnualIncome?: number; // in INR
    allowedStates?: string[]; // 'All India' or specific states
    occupationRequired?: string[];
    isFarmerOnly?: boolean;
    maxLandSizeAcres?: number;
    minLandSizeAcres?: number;
    isStudentOnly?: boolean;
    minEducationLevel?: string;
    isWomenOnly?: boolean;
    isDisabilityOnly?: boolean;
    minDisabilityPercentage?: number;
    isSeniorCitizenOnly?: boolean;
    isBPLOnly?: boolean;
    isDefenceOnly?: boolean;
    requiresUdyamRegistration?: boolean;
    customRules?: string[];
  };
  requiredDocuments: {
    name: string;
    description: string;
    mandatory: boolean;
  }[];
  applicationSteps: string[];
  officialPortalUrl: string;
  helplinePhone?: string;
}

export interface MatchResult {
  scheme: Scheme;
  matchScore: number; // 0 to 100
  isEligible: boolean;
  matchedPoints: string[];
  unmetPoints: string[];
}

export interface QuestionnaireField {
  id: string;
  label: string;
  description?: string;
  type: 'select' | 'number' | 'text' | 'boolean' | 'radio' | 'multiselect';
  categoryFilter?: CategoryType[]; // If present, only shows when specific category is active
  options?: { label: string; value: string | number }[];
  placeholder?: string;
  unit?: string;
  min?: number;
  max?: number;
  defaultValue?: any;
  required?: boolean;
  section: 'demographics' | 'economic' | 'category_specific' | 'education' | 'enterprise' | 'defence' | 'housing_health';
}
