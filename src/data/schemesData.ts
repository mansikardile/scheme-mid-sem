import type { Scheme } from '../types';

export const SCHEMES_DATABASE: Scheme[] = [
  // 1. PM-KISAN
  {
    id: 'pm-kisan',
    title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    ministryOrOrganization: 'Ministry of Agriculture and Farmers Welfare, Govt of India',
    type: 'Central Government',
    category: ['farmer'],
    benefitType: 'Direct Cash Transfer',
    shortDescription: 'Guaranteed ₹6,000 annual income support transferred directly to the bank accounts of landholding farmer families.',
    detailedDescription: 'PM-KISAN provides direct income support of ₹6,000 per year to all landholding farmer families having cultivable landholding, payable in three equal quarterly installments of ₹2,000 directly into their Aadhaar-linked bank accounts.',
    financialBenefitMax: 6000,
    financialBenefitText: '₹6,000 / year (in 3 installments)',
    deadline: 'Open throughout the year',
    isPopular: true,
    tags: ['Direct Cash Transfer', 'Farmers', 'Agriculture', 'Central Scheme'],
    eligibilityCriteria: {
      genders: ['All'],
      castes: ['All'],
      isFarmerOnly: true,
      minLandSizeAcres: 0.01,
      customRules: ['Must hold cultivable land in applicant\'s name', 'Must have active Aadhaar linked bank account']
    },
    requiredDocuments: [
      { name: 'Aadhaar Card', description: 'Mandatory Aadhaar of applicant', mandatory: true },
      { name: 'Land Record (7/12, Khasra, Khatoni)', description: 'Proof of land ownership with legal title', mandatory: true },
      { name: 'Bank Passbook / Account Details', description: 'DBT enabled bank account number & IFSC', mandatory: true },
    ],
    applicationSteps: [
      'Visit the official PM-KISAN online portal (pmkisan.gov.in) or your nearest CSC center.',
      'Click on "New Farmer Registration" in the Farmers Corner.',
      'Enter Aadhaar number, state, and mobile number to receive OTP.',
      'Fill in land details (Khata number, Khasra number, land area in hectares).',
      'Submit the form and record your Application Reference Number for tracking.'
    ],
    officialPortalUrl: 'https://pmkisan.gov.in',
    helplinePhone: '155261 / 011-24300606'
  },

  // 2. PM FASAL BIMA YOJANA
  {
    id: 'pm-fasal-bima',
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    ministryOrOrganization: 'Ministry of Agriculture and Farmers Welfare',
    type: 'Central Government',
    category: ['farmer'],
    benefitType: 'Health & Insurance',
    shortDescription: 'Comprehensive, heavily subsidized crop insurance shield against yield loss, drought, flood, pests & post-harvest damage.',
    detailedDescription: 'PMFBY offers the lowest premium rates (2% for Kharif crops, 1.5% for Rabi crops, and 5% for commercial/horticultural crops) with full sum insured payout for non-preventable natural risks from pre-sowing to post-harvest losses.',
    financialBenefitMax: 200000,
    financialBenefitText: 'Up to ₹2,00,000 / hectare crop damage cover',
    deadline: 'July 31 for Kharif / Dec 31 for Rabi',
    isPopular: true,
    tags: ['Crop Insurance', 'Risk Shield', 'Farmers'],
    eligibilityCriteria: {
      isFarmerOnly: true,
      customRules: ['Growing notified crops in notified areas', 'Both loanee and non-loanee farmers eligible']
    },
    requiredDocuments: [
      { name: 'Land Record Certificate / Sowing Certificate', description: 'Patwari verified sowing report', mandatory: true },
      { name: 'Aadhaar Card', description: 'Identity proof', mandatory: true },
      { name: 'Bank Account Passbook', description: 'With IFSC code', mandatory: true },
    ],
    applicationSteps: [
      'Visit pmfby.gov.in or apply via your local cooperative bank / CSC center.',
      'Register with your farmer credentials and Aadhaar.',
      'Select your season (Kharif/Rabi), district, taluka, and crop type.',
      'Upload the sowing certificate and pay the nominal 1.5% - 2% premium online.',
      'Policy receipt is generated instantly.'
    ],
    officialPortalUrl: 'https://pmfby.gov.in',
    helplinePhone: '14447'
  },

  // 3. PM MUDRA YOJANA
  {
    id: 'pm-mudra-yojana',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    ministryOrOrganization: 'Department of Financial Services, Ministry of Finance',
    type: 'Banking & Subsidized Loan',
    category: ['msme', 'unemployed', 'women'],
    benefitType: 'Subsidized Loan / Capital',
    shortDescription: 'Collateral-free business loans up to ₹20 Lakhs for micro-enterprises, shops, manufacturing, and traders.',
    detailedDescription: 'PMMY offers zero-collateral funding under three tiers: Shishu (loans up to ₹50,000), Kishore (loans ₹50,000 to ₹5 Lakhs), and Tarun / Tarun Plus (loans ₹5 Lakhs to ₹20 Lakhs) at concessional interest rates without requiring third-party guarantors.',
    financialBenefitMax: 2000000,
    financialBenefitText: 'Up to ₹20,00,000 Collateral-Free Business Loan',
    deadline: 'Open round the year across all scheduled banks',
    isPopular: true,
    tags: ['Zero Collateral Loan', 'MSME', 'Micro Enterprise', 'Youth & Women'],
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 65,
      customRules: ['Non-farming business activity', 'No default record with any financial institution']
    },
    requiredDocuments: [
      { name: 'KYC Documents (Aadhaar / PAN)', description: 'Identity & Address verification', mandatory: true },
      { name: 'Business Pitch / Project Report', description: 'Estimated machinery / working capital requirement', mandatory: true },
      { name: 'Bank Account Statements (Past 6 months)', description: 'Operational cash flow record', mandatory: false },
      { name: 'Udyam Registration Certificate', description: 'MSME registration certificate (if existing)', mandatory: false }
    ],
    applicationSteps: [
      'Apply online on the Udyamimitra portal (udyamimitra.in) or visit any commercial / rural bank.',
      'Select loan category (Shishu, Kishore, or Tarun).',
      'Upload business quotation or project report for machinery/goods.',
      'Bank officer verifies the project within 7-14 working days.',
      'Loan is disbursed directly to your MUDRA card / account.'
    ],
    officialPortalUrl: 'https://www.mudra.org.in',
    helplinePhone: '1800-180-1111'
  },

  // 4. PM VISHWAKARMA YOJANA
  {
    id: 'pm-vishwakarma',
    title: 'PM Vishwakarma Scheme',
    ministryOrOrganization: 'Ministry of Micro, Small & Medium Enterprises (MoMSME)',
    type: 'Central Government',
    category: ['msme', 'unemployed', 'general'],
    benefitType: 'Subsidized Loan / Capital',
    shortDescription: 'Holistic support for 18 traditional trades (carpenters, blacksmiths, tailors, sculptors, cobblers) with ₹15,000 toolkit + ₹3 Lakh loan at 5% interest.',
    detailedDescription: 'PM Vishwakarma recognizes traditional artisans and craftspeople. It delivers recognized certification, ₹500/day stipend during basic skill training, ₹15,000 grant for modern toolkit procurement, and enterprise loans up to ₹3,00,000 in two tranches with just 5% interest and government interest subvention.',
    financialBenefitMax: 315000,
    financialBenefitText: '₹15,000 Free Toolkit Grant + ₹3 Lakh Loan @ 5% interest',
    deadline: 'Active rolling enrollment',
    isPopular: true,
    tags: ['Artisans', 'Craftsmen', 'Toolkit Subsidy', 'Subsidized Credit'],
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 70,
      customRules: ['Engaged in one of 18 notified traditional trades', 'Only one member per family eligible']
    },
    requiredDocuments: [
      { name: 'Aadhaar Card with Mobile Link', description: 'Biometric verification', mandatory: true },
      { name: 'Bank Account Passbook', description: 'For stipend and toolkit transfer', mandatory: true },
      { name: 'Ration Card', description: 'Family member verification', mandatory: true }
    ],
    applicationSteps: [
      'Visit your nearest Common Service Centre (CSC) with Aadhaar and bank details.',
      'Complete biometric authentication and trade category declaration.',
      'Gram Panchayat / Urban Local Body verifies applicant identity.',
      'Download PM Vishwakarma Digital ID and Certificate.',
      'Undergo 5-7 days basic training, receive ₹15,000 toolkit e-voucher, and apply for loan.'
    ],
    officialPortalUrl: 'https://pmvishwakarma.gov.in',
    helplinePhone: '18002677777'
  },

  // 5. AYUSHMAN BHARAT PM-JAY
  {
    id: 'ayushman-bharat-pmjay',
    title: 'Ayushman Bharat PM-JAY (National Health Protection Scheme)',
    ministryOrOrganization: 'National Health Authority, Ministry of Health and Family Welfare',
    type: 'Central Government',
    category: ['healthcare', 'senior_citizen', 'general'],
    benefitType: 'Health & Insurance',
    shortDescription: 'World’s largest health assurance scheme providing ₹5,00,000 cashless secondary and tertiary hospitalization cover per family per year.',
    detailedDescription: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana covers over 1,949 medical procedures including heart surgery, chemotherapy, knee replacements, neurosurgery, and intensive care across 27,000+ empanelled government and private hospitals across India with zero out-of-pocket expenses.',
    financialBenefitMax: 500000,
    financialBenefitText: '₹5,00,000 / year Cashless Hospitalization per Family',
    deadline: 'Always Active',
    isPopular: true,
    tags: ['Cashless Healthcare', 'Universal Health', 'Free Treatment'],
    eligibilityCriteria: {
      isBPLOnly: true,
      maxAnnualIncome: 300000,
      customRules: ['Identified in SECC 2011 database or NFSA Ration Card', 'All citizens aged 70+ eligible regardless of income']
    },
    requiredDocuments: [
      { name: 'Aadhaar Card', description: 'For biometric e-KYC', mandatory: true },
      { name: 'Ration Card / Family ID', description: 'Proof of family roster', mandatory: true }
    ],
    applicationSteps: [
      'Visit beneficiary.nha.gov.in or download the Ayushman App on your phone.',
      'Search eligibility using your Ration Card Number, Aadhaar Number, or PM-JAY ID.',
      'Complete Aadhaar OTP or Face e-KYC.',
      'Download your Ayushman PVC Gold Card immediately.'
    ],
    officialPortalUrl: 'https://beneficiary.nha.gov.in',
    helplinePhone: '14555'
  },

  // 6. SUKANYA SAMRIDDHI YOJANA
  {
    id: 'sukanya-samriddhi',
    title: 'Sukanya Samriddhi Yojana (Beti Bachao Beti Padhao)',
    ministryOrOrganization: 'Ministry of Finance, Govt of India',
    type: 'Central Government',
    category: ['women', 'general'],
    benefitType: 'Direct Cash Transfer',
    shortDescription: 'Highest interest sovereign savings scheme for girl children with 8.2% annual interest and complete triple tax exemption (EEE).',
    detailedDescription: 'Sukanya Samriddhi Yojana accounts can be opened by parents for a girl child from birth until 10 years of age. It offers an exceptional 8.2% interest compounded annually, complete tax exemption under Section 80C, and builds a guaranteed wealth fund for higher education and marriage.',
    financialBenefitMax: 5000000,
    financialBenefitText: '8.2% Compound Interest + Tax-Free Maturity Fund',
    deadline: 'Before girl child attains age 10',
    isPopular: true,
    tags: ['Girl Child', 'High Return Savings', 'Tax Free (EEE)', 'Beti Bachao'],
    eligibilityCriteria: {
      genders: ['Female'],
      maxAge: 10,
      customRules: ['Account opened by natural/legal guardian for girl child under 10 years']
    },
    requiredDocuments: [
      { name: 'Birth Certificate of Girl Child', description: 'Issued by Municipal Corporation/Gram Panchayat', mandatory: true },
      { name: 'Guardian Aadhaar & PAN Card', description: 'Parent/Guardian KYC', mandatory: true },
      { name: 'Address Proof', description: 'Electricity bill / Ration card / Aadhaar', mandatory: true }
    ],
    applicationSteps: [
      'Visit any Post Office branch or nationalized bank (SBI, PNB, BoB, etc.).',
      'Fill out the SSY Account Opening Form (Form-1).',
      'Submit the girl child\'s birth certificate and guardian KYC documents.',
      'Deposit initial minimum amount of ₹250.',
      'Receive the physical SSY Passbook and net-banking link.'
    ],
    officialPortalUrl: 'https://www.indiapost.gov.in',
    helplinePhone: '1800-266-6868'
  },

  // 7. PM AWAS YOJANA (PMAY - GRAMIN & URBAN)
  {
    id: 'pm-awas-yojana',
    title: 'Pradhan Mantri Awas Yojana (PMAY 2.0)',
    ministryOrOrganization: 'Ministry of Housing and Urban Affairs & Ministry of Rural Development',
    type: 'Central Government',
    category: ['housing', 'farmer', 'women'],
    benefitType: 'Housing / Infrastructure',
    shortDescription: 'Direct financial subsidy of up to ₹2.67 Lakhs to build or purchase a permanent pucca house with clean kitchen, toilet and water.',
    detailedDescription: 'PMAY provides direct grant assistance to homeless and kutcha house residents: ₹1,20,000 in plains and ₹1,30,000 in hilly/difficult areas for PMAY-Gramin, along with 90 days of MGNREGA wages and ₹12,000 for toilet construction under Swachh Bharat Mission. Urban beneficiaries get up to ₹2.67 Lakh interest subsidy on home loans.',
    financialBenefitMax: 267000,
    financialBenefitText: '₹1.2 Lakh to ₹2.67 Lakh Grant for Pucca House',
    deadline: 'Ongoing under PMAY 2.0',
    isPopular: true,
    tags: ['Housing For All', 'Pucca House Subsidy', 'Direct Bank Transfer'],
    eligibilityCriteria: {
      maxAnnualIncome: 600000,
      customRules: ['Must not own a pucca concrete house anywhere in India', 'House title must include female head of family']
    },
    requiredDocuments: [
      { name: 'Aadhaar Card of all family members', description: 'Biometric verified identification', mandatory: true },
      { name: 'Ration Card / BPL Survey number', description: 'Proof of family composition', mandatory: true },
      { name: 'Land Ownership Document / Allotment Letter', description: 'Proof of plot for house construction', mandatory: true },
      { name: 'Bank Passbook with IFSC', description: 'DBT enabled account', mandatory: true }
    ],
    applicationSteps: [
      'Apply online through pmaymis.gov.in (Urban) or through Gram Sabha / AwaasApp (Gramin).',
      'Geo-tag the existing kutcha site using the official mobile application.',
      'Inspection and approval by Block Development Officer (BDO) / Municipal Commissioner.',
      'Funds released in 3-4 milestone-based installments directly to bank account upon stage-wise roof/lintel completion.'
    ],
    officialPortalUrl: 'https://pmay-urban.gov.in',
    helplinePhone: '1800-11-6163 / 011-23060484'
  },

  // 8. NSP CENTRAL SECTOR SCHOLARSHIP FOR STUDENTS
  {
    id: 'nsp-central-sector',
    title: 'Central Sector Scheme of Scholarship for College and University Students',
    ministryOrOrganization: 'Department of Higher Education, Ministry of Education',
    type: 'Central Government',
    category: ['student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: 'Annual scholarship of ₹12,000/yr for Undergrads and ₹20,000/yr for Postgrads to top scoring 12th pass students.',
    detailedDescription: 'Conferred to top percentile scorers in Class 12 board examinations pursuing regular graduate / postgraduate courses in recognized colleges. Beneficiaries receive ₹12,000 per annum for the first three years of undergraduate study and ₹20,000 per annum during postgraduate study.',
    financialBenefitMax: 76000,
    financialBenefitText: '₹12,000 to ₹20,000 per year direct scholarship',
    deadline: 'October 31 annually',
    isPopular: true,
    tags: ['Higher Education', 'Merit Scholarship', 'Direct DBT', 'College Students'],
    eligibilityCriteria: {
      minAge: 17,
      maxAge: 25,
      isStudentOnly: true,
      maxAnnualIncome: 450000,
      customRules: ['Above 80th percentile in relevant stream in Class 12', 'Enrolled in regular college course']
    },
    requiredDocuments: [
      { name: 'Class 12 Marksheet', description: 'Showing qualifying board percentile', mandatory: true },
      { name: 'Income Certificate (Tehsildar issued)', description: 'Showing family income < ₹4.5 Lakh', mandatory: true },
      { name: 'Bonafide College Student Certificate', description: 'Signed by College Principal/Registrar', mandatory: true },
      { name: 'Aadhaar Linked Bank Passbook', description: 'Student\'s own bank account', mandatory: true }
    ],
    applicationSteps: [
      'Create account on National Scholarship Portal (scholarships.gov.in) with OTR (One Time Registration).',
      'Select Department of Higher Education -> Central Sector Scheme.',
      'Enter Class 12 roll number, board name, and college admission details.',
      'College Nodal Officer verifies application digitally.',
      'Scholarship disbursed directly via PFMS DBT.'
    ],
    officialPortalUrl: 'https://scholarships.gov.in',
    helplinePhone: '0120-6619540'
  },

  // 9. RELIANCE FOUNDATION UNDERGRADUATE SCHOLARSHIP
  {
    id: 'reliance-foundation-scholarship',
    title: 'Reliance Foundation Undergraduate & Postgraduate Scholarships',
    ministryOrOrganization: 'Reliance Foundation (Private CSR Initiative)',
    type: 'Private & CSR',
    category: ['student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: 'Prestigious private merit-cum-means scholarship grant up to ₹2,00,000 (UG) and ₹6,00,000 (PG) plus mentorship network.',
    detailedDescription: 'One of India\'s largest private philanthropic scholarship funds supporting 5,000 meritorious undergraduate students each year across all academic streams. Includes direct financial support up to ₹2 Lakh over the degree duration, leadership workshops, and an influential alumni mentorship network.',
    financialBenefitMax: 200000,
    financialBenefitText: 'Up to ₹2,00,000 Grant over degree duration',
    deadline: 'October 15 annually',
    isPopular: true,
    tags: ['Private Grant', 'Reliance CSR', 'Merit-cum-Means', 'All Streams'],
    eligibilityCriteria: {
      isStudentOnly: true,
      maxAnnualIncome: 1500000,
      customRules: ['Enrolled in 1st year regular full-time undergraduate degree', 'Minimum 60% in Class 12']
    },
    requiredDocuments: [
      { name: 'Class 10 & 12 Marksheets', description: 'Academic records', mandatory: true },
      { name: 'Proof of College Enrollment', description: 'Fee receipt / College ID card', mandatory: true },
      { name: 'Household Income Proof', description: 'ITR or Salary slips or Income Certificate', mandatory: true },
      { name: 'Two Reference Letters', description: 'From teachers / school mentors', mandatory: false }
    ],
    applicationSteps: [
      'Register online at scholarships.reliancefoundation.org.',
      'Complete the online application form and personal essay.',
      'Take the online aptitude test (60 minutes testing verbal, analytical and numerical reasoning).',
      'Merit list declared with direct grant disbursal to recipient\'s account.'
    ],
    officialPortalUrl: 'https://scholarships.reliancefoundation.org',
    helplinePhone: '011-41182900'
  },

  // 10. TATA TRUSTS MEDICAL AND HIGHER EDUCATION SCHOLARSHIPS
  {
    id: 'tata-trusts-scholarship',
    title: 'Tata Trusts Higher Education & Healthcare Grant',
    ministryOrOrganization: 'Sir Ratan Tata Trust & Allied Trusts (Private CSR)',
    type: 'Private & CSR',
    category: ['student', 'healthcare'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: 'Substantial fee reimbursement grants for meritorious medical, healthcare, engineering and master degree students.',
    detailedDescription: 'Tata Trusts provides need-based educational assistance covering 30% to 80% of total annual college tuition fees for undergraduate and postgraduate studies in Medical Sciences, Dentistry, Nursing, Engineering, and Social Sciences across recognized institutions in India.',
    financialBenefitMax: 150000,
    financialBenefitText: 'Up to ₹1,50,000 / year College Tuition Fee Reimbursement',
    deadline: 'November 30 annually',
    tags: ['Tata Philanthropy', 'Medical Grant', 'Tuition Fee Waiver'],
    eligibilityCriteria: {
      isStudentOnly: true,
      maxAnnualIncome: 600000,
      customRules: ['Pursuing regular course in accredited Indian institute', 'Minimum 65% aggregate score in prior academic year']
    },
    requiredDocuments: [
      { name: 'College Fee Structure Receipt', description: 'Official institute fee breakdown', mandatory: true },
      { name: 'Previous Academic Transcripts', description: 'Semester / Year grade sheets', mandatory: true },
      { name: 'Income Proof of Parents', description: 'Form 16 or Tehsildar Income Certificate', mandatory: true }
    ],
    applicationSteps: [
      'Visit the Tata Trusts portal (tatatrusts.org) under Individual Grants.',
      'Create profile and submit educational expense statement.',
      'Upload genuine fee receipts from your educational institution.',
      'Trust review committee verifies economic need and disburses grant directly to student / college.'
    ],
    officialPortalUrl: 'https://www.tatatrusts.org/our-work/individual-grants-programme/education-grants',
    helplinePhone: '022-66658282'
  },

  // 11. STAND UP INDIA SCHEME
  {
    id: 'stand-up-india',
    title: 'Stand-Up India Scheme for Women & SC/ST Entrepreneurs',
    ministryOrOrganization: 'Department of Financial Services, Ministry of Finance',
    type: 'Banking & Subsidized Loan',
    category: ['women', 'msme'],
    benefitType: 'Subsidized Loan / Capital',
    shortDescription: 'Bank loans between ₹10 Lakhs to ₹1 Crore for setting up greenfield enterprises in manufacturing, services, or trading.',
    detailedDescription: 'Mandates every scheduled bank branch to provide loans between ₹10 Lakh and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower for setting up a greenfield green enterprise.',
    financialBenefitMax: 10000000,
    financialBenefitText: '₹10 Lakh to ₹1 Crore Greenfield Business Loan',
    deadline: 'Always Active',
    isPopular: true,
    tags: ['SC/ST Entrepreneurs', 'Women Led Enterprise', 'Greenfield Project', 'Bank Loan'],
    eligibilityCriteria: {
      minAge: 18,
      castes: ['SC', 'ST', 'All'],
      genders: ['Female', 'All'],
      customRules: ['Must be a greenfield project (first-time venture)', 'In non-individual enterprises, 51% shareholding must be SC/ST or woman']
    },
    requiredDocuments: [
      { name: 'Project Feasibility Report', description: 'Comprehensive DPR covering CAPEX and working capital', mandatory: true },
      { name: 'Caste Certificate (for SC/ST applicants)', description: 'Government verified community certificate', mandatory: false },
      { name: 'Udyam Registration & Company Incorporation', description: 'Business registration', mandatory: true },
      { name: 'ITR of promoters (past 2-3 years)', description: 'Financial filings', mandatory: false }
    ],
    applicationSteps: [
      'Register on standupmitra.in portal.',
      'Prepare project report using portal\'s handholding toolkit.',
      'Choose preferred bank branch or apply through lead bank.',
      'Meet bank appraisal manager for sanction and margin money assistance.'
    ],
    officialPortalUrl: 'https://www.standupmitra.in',
    helplinePhone: '1800-180-1111'
  },

  // 12. PM KUSUM (SOLAR AGRICULTURE PUMP)
  {
    id: 'pm-kusum-yojana',
    title: 'PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha Evam Utthaan Mahabhiyan)',
    ministryOrOrganization: 'Ministry of New and Renewable Energy (MNRE)',
    type: 'Central Government',
    category: ['farmer'],
    benefitType: 'Equipment / Seeds / Raw Material',
    shortDescription: 'Up to 90% government subsidy to install standalone solar water pumps and grid-connected solar power plants on agricultural land.',
    detailedDescription: 'PM-KUSUM provides 60% central + state financial subsidy and 30% bank loan for farmers to replace costly diesel pumps with high-capacity solar pumps (3 HP to 10 HP). Farmers only bear 10% cost and can also sell surplus power generated back to DISCOM for extra income.',
    financialBenefitMax: 350000,
    financialBenefitText: 'Up to 90% Subsidy on 3HP to 10HP Solar Water Pumps',
    deadline: 'State-wise quarterly quota windows',
    tags: ['Solar Pump Subsidy', 'Renewable Energy', 'Farmers', 'Irrigation'],
    eligibilityCriteria: {
      isFarmerOnly: true,
      minLandSizeAcres: 0.5,
      customRules: ['Must own agricultural land with water source (well/borewell)', 'Must not have existing subsidized grid electricity connection']
    },
    requiredDocuments: [
      { name: 'Land Ownership Document (7/12, Khatoni)', description: 'Proof of landholding', mandatory: true },
      { name: 'Water Source Availability Certificate', description: 'Proof of borewell or well on farmland', mandatory: true },
      { name: 'Aadhaar and Bank Passbook', description: 'Applicant KYC', mandatory: true }
    ],
    applicationSteps: [
      'Visit state renewable energy development agency portal (e.g., MEDA, UPNEDA, RRECL).',
      'Fill in farmer details and pump capacity (3HP, 5HP, or 7.5HP).',
      'Pay beneficiary 10% share online via direct payment gateway.',
      'Empanelled solar vendor delivers and installs the solar pump and panels on site.'
    ],
    officialPortalUrl: 'https://pmkusum.mnre.gov.in',
    helplinePhone: '1800-180-3333'
  },

  // 13. PM MATRU VANDANA YOJANA (PMMVY)
  {
    id: 'pm-matru-vandana',
    title: 'Pradhan Mantri Matru Vandana Yojana (PMMVY 2.0)',
    ministryOrOrganization: 'Ministry of Women and Child Development',
    type: 'Central Government',
    category: ['women', 'healthcare'],
    benefitType: 'Direct Cash Transfer',
    shortDescription: 'Direct cash incentive of ₹5,000 to ₹6,000 for pregnant and lactating mothers for first and second (girl) child.',
    detailedDescription: 'PMMVY provides partial wage compensation and nutritional support of ₹5,000 for the first child (in 2 installments) and an additional ₹6,000 for the second child (if girl child) directly into the mother\'s Aadhaar-linked bank account.',
    financialBenefitMax: 6000,
    financialBenefitText: '₹5,000 to ₹6,000 Direct Cash Transfer',
    deadline: 'Within 270 days of delivery / registration',
    tags: ['Maternity Benefit', 'Nutrition Support', 'Mother & Child', 'DBT'],
    eligibilityCriteria: {
      genders: ['Female'],
      customRules: ['Pregnant woman or lactating mother', 'Not in regular central/state government employment']
    },
    requiredDocuments: [
      { name: 'Mother Child Protection (MCP) Card', description: 'Issued by Anganwadi / Govt Hospital', mandatory: true },
      { name: 'Aadhaar Card of Mother and Husband', description: 'Identification', mandatory: true },
      { name: 'Bank Passbook linked with Aadhaar', description: 'Mother\'s single bank account', mandatory: true }
    ],
    applicationSteps: [
      'Register at your local Anganwadi Centre (AWC) or apply online at pmmvy.wcd.gov.in.',
      'Submit early pregnancy registration proof (MCP Card).',
      'Receive 1st installment upon at least 1 Antenatal Check-up (ANC).',
      'Receive 2nd installment upon institutional birth registration and primary child vaccination.'
    ],
    officialPortalUrl: 'https://pmmvy.wcd.gov.in',
    helplinePhone: '104 / 011-23382393'
  },

  // 14. ATAL PENSION YOJANA (APY)
  {
    id: 'atal-pension-yojana',
    title: 'Atal Pension Yojana (APY)',
    ministryOrOrganization: 'Pension Fund Regulatory and Development Authority (PFRDA)',
    type: 'Central Government',
    category: ['senior_citizen', 'unemployed', 'general'],
    benefitType: 'Direct Cash Transfer',
    shortDescription: 'Guaranteed government lifelong monthly pension of ₹1,000 to ₹5,000 per month starting at age 60.',
    detailedDescription: 'APY provides guaranteed social security to unorganized sector workers with monthly pension payouts of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 after reaching 60 years of age, with full return of pension corpus to legal heirs after spouse.',
    financialBenefitMax: 60000,
    financialBenefitText: 'Guaranteed ₹1,000 - ₹5,000 / month lifetime pension',
    deadline: 'Join between ages 18 to 40',
    tags: ['Lifelong Pension', 'Social Security', 'Senior Citizen', 'Guaranteed by Govt'],
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 40,
      customRules: ['Must not be an income tax payer', 'Must hold a savings bank account']
    },
    requiredDocuments: [
      { name: 'Aadhaar Card', description: 'For e-KYC', mandatory: true },
      { name: 'Bank Savings Account Passbook', description: 'With auto-debit consent', mandatory: true }
    ],
    applicationSteps: [
      'Visit your bank branch or use net banking / mobile banking app.',
      'Fill APY registration form with auto-debit instruction.',
      'Choose pension slab (₹1,000 to ₹5,000/month).',
      'Receive PRAN (Permanent Retirement Account Number) card instantly.'
    ],
    officialPortalUrl: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    helplinePhone: '1800-110-069'
  },

  // 15. STARTUP INDIA SEED FUND SCHEME (SISFS)
  {
    id: 'startup-india-seed-fund',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    ministryOrOrganization: 'DPIIT, Ministry of Commerce and Industry',
    type: 'Central Government',
    category: ['msme'],
    benefitType: 'Subsidized Loan / Capital',
    shortDescription: 'Financial assistance up to ₹20 Lakhs as grant for proof-of-concept and up to ₹50 Lakhs as debt/convertible debentures for commercialization.',
    detailedDescription: 'Provides early-stage financial support to DPIIT-recognized startups for proof of concept, prototype development, product trials, market entry, and commercialization through accredited business incubators across India.',
    financialBenefitMax: 5000000,
    financialBenefitText: 'Up to ₹20 Lakhs Grant + ₹50 Lakhs Convertible Debt',
    deadline: 'Open round the year',
    tags: ['Startups', 'Seed Capital', 'Innovation Grant', 'Incubation'],
    eligibilityCriteria: {
      customRules: [
        'DPIIT recognized startup incorporated not more than 2 years ago',
        'Startup must have a business idea to develop a product or service with a market fit',
        'Should not have received more than ₹10 Lakhs monetary support under other central/state schemes'
      ]
    },
    requiredDocuments: [
      { name: 'DPIIT Startup Recognition Certificate', description: 'From Startup India portal', mandatory: true },
      { name: 'Pitch Deck & Business Plan', description: 'Outlining product innovation and target market', mandatory: true },
      { name: 'Incorporation Certificate & GST', description: 'Company legal registration', mandatory: true }
    ],
    applicationSteps: [
      'Login with DPIIT credentials at seedfund.startupindia.gov.in.',
      'Select up to 3 preferred accredited incubators matching your industry domain.',
      'Submit detailed milestone roadmap and budget breakdown.',
      'Present pitch to incubator Investment Committee for final approval.'
    ],
    officialPortalUrl: 'https://seedfund.startupindia.gov.in',
    helplinePhone: '1800-115-565'
  },

  // 16. DIVYANGJAN SWAVALAMBAN YOJANA
  {
    id: 'divyangjan-swavalamban',
    title: 'Divyangjan Swavalamban Yojana (NDFDC)',
    ministryOrOrganization: 'National Handicapped Finance and Development Corporation',
    type: 'Central Government',
    category: ['disability', 'msme'],
    benefitType: 'Subsidized Loan / Capital',
    shortDescription: 'Concessional business loan up to ₹25 Lakhs at low interest rate of 4% - 8% for persons with disabilities.',
    detailedDescription: 'Promotes self-employment and professional education for differently-abled persons with benchmark disabilities of 40% and above, providing soft loans up to ₹25 Lakhs with special 0.5% interest rebate for women entrepreneurs with disabilities.',
    financialBenefitMax: 2500000,
    financialBenefitText: 'Up to ₹25,00,000 Soft Loan at 4%-8% Interest',
    deadline: 'Always Active',
    tags: ['Divyangjan', 'Disability Support', 'Concessional Credit', 'Self-Employment'],
    eligibilityCriteria: {
      minAge: 18,
      isDisabilityOnly: true,
      minDisabilityPercentage: 40,
      customRules: ['Must hold valid UDID Card or Disability Certificate issued by Medical Board']
    },
    requiredDocuments: [
      { name: 'UDID Card (Unique Disability ID)', description: 'Showing 40%+ disability', mandatory: true },
      { name: 'Aadhaar & PAN Card', description: 'Identity proof', mandatory: true },
      { name: 'Business Project Proposal', description: 'Estimated cost of equipment/shop', mandatory: true }
    ],
    applicationSteps: [
      'Apply online on the NHFDC portal (nhfdc.nic.in) or through State Channelising Agencies (SCAs).',
      'Submit project cost sheet and disability proof.',
      'State agency processes loan sanction with lead public sector bank.',
      'Disbursed with subsidy component to beneficiary account.'
    ],
    officialPortalUrl: 'http://www.nhfdc.nic.in',
    helplinePhone: '011-23381643'
  },

  // 17. PM UJJWALA YOJANA 2.0
  {
    id: 'pm-ujjwala-yojana',
    title: 'Pradhan Mantri Ujjwala Yojana (PMUY 2.0)',
    ministryOrOrganization: 'Ministry of Petroleum and Natural Gas',
    type: 'Central Government',
    category: ['women', 'housing', 'general'],
    benefitType: 'Equipment / Seeds / Raw Material',
    shortDescription: 'Free deposit-free LPG gas connection + free first refill cylinder + free hotplate/gas stove for adult women.',
    detailedDescription: 'Provides clean cooking fuel to deprived rural and poor households. Under Ujjwala 2.0, beneficiaries receive a completely deposit-free LPG connection, a free first LPG refill cylinder, and a free two-burner stove without needing ration card domicile proof for migrant workers.',
    financialBenefitMax: 3600,
    financialBenefitText: '100% Free LPG Connection + Stove + First Cylinder',
    deadline: 'Active enrollment',
    tags: ['Clean Energy', 'Women Empowerment', 'Free LPG Connection', 'Smokeless Kitchen'],
    eligibilityCriteria: {
      genders: ['Female'],
      minAge: 18,
      customRules: ['Must be an adult woman belonging to poor household', 'No existing LPG connection in the same household']
    },
    requiredDocuments: [
      { name: 'Aadhaar Card of Applicant Woman', description: 'Identity verification', mandatory: true },
      { name: 'Ration Card / Self-Declaration of Family', description: 'Family composition proof', mandatory: true },
      { name: 'Bank Account Passbook (Aadhaar linked)', description: 'For direct cylinder subsidy', mandatory: true }
    ],
    applicationSteps: [
      'Apply online on pmuy.gov.in or visit your local LPG distributor (Indane, Bharatgas, HP Gas).',
      'Submit KYC form and declare family details.',
      'Gas agency completes biometric verification and delivers LPG cylinder and stove to home.'
    ],
    officialPortalUrl: 'https://www.pmuy.gov.in',
    helplinePhone: '1800-266-6696'
  },

  // 18. AICTE PRAGATI SCHOLARSHIP FOR GIRLS
  {
    id: 'aicte-pragati-scholarship',
    title: 'AICTE Pragati Scholarship for Girl Students',
    ministryOrOrganization: 'All India Council for Technical Education (AICTE)',
    type: 'Central Government',
    category: ['student', 'women'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: '₹50,000 per annum for all 4 years of technical degree / 3 years of diploma study for female engineering students.',
    detailedDescription: 'Implemented to encourage female participation in technical engineering and management education. Provides ₹50,000 per annum lump sum payment towards college tuition fees, computer purchase, books, equipment, and competitive exam fees.',
    financialBenefitMax: 200000,
    financialBenefitText: '₹50,000 / year for 4 Years (Total ₹2,00,000)',
    deadline: 'December 31 annually',
    tags: ['Women in STEM', 'Technical Education', 'Engineering Scholarship', 'AICTE'],
    eligibilityCriteria: {
      genders: ['Female'],
      isStudentOnly: true,
      maxAnnualIncome: 800000,
      customRules: ['Admitted in 1st year of AICTE approved Degree/Diploma course', 'Maximum 2 girl children per family']
    },
    requiredDocuments: [
      { name: 'Class 10 & 12 Marksheets', description: 'Academic score proof', mandatory: true },
      { name: 'AICTE College Allotment Letter', description: 'Proof of centralized admission (CAP/JEE/CET)', mandatory: true },
      { name: 'Income Certificate (under ₹8 Lakh)', description: 'Tehsildar issued', mandatory: true },
      { name: 'Student Bank Passbook', description: 'Aadhaar linked', mandatory: true }
    ],
    applicationSteps: [
      'Register on the National Scholarship Portal (scholarships.gov.in).',
      'Select AICTE Scheme -> Pragati Scholarship Scheme for Girls.',
      'Upload institute admission receipt and income certificate.',
      'College nodel officer verifies student credentials online.',
      'Funds credited directly to bank account via DBT.'
    ],
    officialPortalUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/pragati',
    helplinePhone: '011-29581333'
  },

  // 19. PM SVANIDHI (STREET VENDORS)
  {
    id: 'pm-svanidhi',
    title: 'PM Street Vendor\'s AtmaNirbhar Nidhi (PM SVANidhi)',
    ministryOrOrganization: 'Ministry of Housing and Urban Affairs',
    type: 'Central Government',
    category: ['msme', 'unemployed'],
    benefitType: 'Subsidized Loan / Capital',
    shortDescription: 'Working capital micro-loans up to ₹50,000 with 7% interest subsidy and cashback for digital transactions.',
    detailedDescription: 'Affordable working capital collateral-free loans for street vendors, hawkers, vegetable/fruit sellers, and micro-cart operators. Starts with ₹10,000 first tranche; upon timely repayment, unlocks ₹20,000 second tranche and ₹50,000 third tranche with 7% interest subsidy and up to ₹1,200 annual digital cashback.',
    financialBenefitMax: 50000,
    financialBenefitText: 'Up to ₹50,000 Working Capital Loan with 7% Interest Subsidy',
    deadline: 'Always Active',
    tags: ['Street Vendors', 'Micro Loan', 'Cashback', 'No Collateral'],
    eligibilityCriteria: {
      minAge: 18,
      customRules: ['Engaged in vending in urban / peri-urban areas on or before March 24, 2020 or holds Vending Certificate/LoR']
    },
    requiredDocuments: [
      { name: 'Vending Certificate / Letter of Recommendation (LoR)', description: 'Issued by Urban Local Body / Municipality', mandatory: true },
      { name: 'Aadhaar Card', description: 'Identity verification', mandatory: true },
      { name: 'Bank Passbook', description: 'Linked with UPI for cashback', mandatory: true }
    ],
    applicationSteps: [
      'Apply online at pmsvanidhi.mohua.gov.in or through local Municipal Ward Office.',
      'Provide mobile number linked to Aadhaar to verify OTP.',
      'Select lending partner (State Bank of India, Bank of Baroda, etc.).',
      'Loan approved and credited into account within 48 hours.'
    ],
    officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in',
    helplinePhone: '1800-11-1979'
  },

  // 20. PMEGP (PRIME MINISTER'S EMPLOYMENT GENERATION PROGRAMME)
  {
    id: 'pmegp-scheme',
    title: 'Prime Minister\'s Employment Generation Programme (PMEGP)',
    ministryOrOrganization: 'Khadi and Village Industries Commission (KVIC), MoMSME',
    type: 'Central Government',
    category: ['msme', 'unemployed', 'women'],
    benefitType: 'Subsidized Loan / Capital',
    shortDescription: 'Up to 35% government capital subsidy on new business projects costing up to ₹50 Lakhs (Manufacturing) and ₹20 Lakhs (Services).',
    detailedDescription: 'A major credit-linked subsidy program to generate self-employment ventures. Beneficiaries only contribute 5% to 10% own equity, while the government provides 15% to 35% non-refundable margin money capital subsidy, and banks finance the remaining balance as term loan.',
    financialBenefitMax: 1750000,
    financialBenefitText: 'Up to 35% Non-Refundable Govt Subsidy (up to ₹17.5 Lakhs)',
    deadline: 'Continuous rolling application window',
    isPopular: true,
    tags: ['Capital Subsidy', 'New Business', 'Manufacturing & Services', 'KVIC'],
    eligibilityCriteria: {
      minAge: 18,
      customRules: ['At least 8th standard pass for manufacturing projects above ₹10 Lakhs or service projects above ₹5 Lakhs']
    },
    requiredDocuments: [
      { name: 'Detailed Project Report (DPR)', description: 'Prepared via KVIC DPR template', mandatory: true },
      { name: 'Highest Educational Certificate', description: 'Marksheet of 8th / 10th / Degree', mandatory: true },
      { name: 'Category / Domicile Certificate', description: 'For claiming 35% special category subsidy', mandatory: false },
      { name: 'Aadhaar & PAN Card', description: 'Promoter identification', mandatory: true }
    ],
    applicationSteps: [
      'Apply online on kviconline.gov.in/pmegpeportal.',
      'Submit Detailed Project Report (DPR) with machine quotation.',
      'District Task Force Committee (DTFC) reviews and recommends to nominated bank.',
      'Bank sanctions loan and KVIC deposits 35% subsidy into 3-year term deposit lock-in.'
    ],
    officialPortalUrl: 'https://www.kviconline.gov.in/pmegpeportal',
    helplinePhone: '1800-3000-0034'
  }
];
