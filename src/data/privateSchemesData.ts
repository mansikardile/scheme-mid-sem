import type { Scheme } from '../types';

export const PRIVATE_CSR_SCHEMES_DATABASE: Scheme[] = [
  // 1. HDFC BANK PARIVARTAN ECSS SCHOLARSHIP
  {
    id: 'hdfc-parivartan-ecss',
    title: 'HDFC Bank Parivartan Educational Crisis Scholarship Support (ECSS)',
    ministryOrOrganization: 'HDFC Bank CSR Foundation (Private Philanthropy)',
    type: 'Private & CSR',
    category: ['student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: 'Need-based private crisis grant up to ₹75,000 for school and college students facing economic crisis or bereavement in family.',
    detailedDescription: 'The HDFC Bank Parivartan ECSS Programme supports students from underprivileged backgrounds who are going through personal or financial crises (such as loss of a earning parent, critical illness, or job loss) to prevent them from dropping out of school or higher education.',
    financialBenefitMax: 75000,
    financialBenefitText: 'Up to ₹75,000 / year education grant',
    deadline: 'December 31 annually',
    isPopular: true,
    tags: ['Private CSR', 'HDFC Bank', 'Crisis Support', 'Merit-cum-Means', 'Pan India'],
    eligibilityCriteria: {
      isStudentOnly: true,
      maxAnnualIncome: 600000,
      customRules: [
        'Enrolled in School (Classes 1-12), Diploma, UG, or PG courses',
        'Applicant must have passed previous qualifying exam with minimum 55% marks',
        'Facing personal/economic crisis or parent demise/job loss in last 3 years'
      ]
    },
    requiredDocuments: [
      { name: 'Previous Year Marksheet', description: 'Academic record (minimum 55%)', mandatory: true },
      { name: 'Identity Proof', description: 'Aadhaar Card / Voter ID / Passport', mandatory: true },
      { name: 'Current Year Admission Proof', description: 'Fee receipt / Admission letter / College ID card', mandatory: true },
      { name: 'Crisis Document', description: 'Death certificate of earning parent / Medical proof / Loss of job letter', mandatory: true },
      { name: 'Family Income Proof', description: 'Income certificate / BPL Ration card / ITR / Salary slip', mandatory: true },
      { name: 'Student Bank Account Details', description: 'Cancelled cheque or passbook copy', mandatory: true }
    ],
    applicationSteps: [
      'Visit the official HDFC Parivartan scholarship portal on Buddy4Study or hdfcbank.com/csr.',
      'Register with your mobile number or email ID.',
      'Fill in applicant details, current academic stage, and family economic background.',
      'Upload the crisis verification document and latest marksheet.',
      'Submit the application and attend the telephone verification interview if shortlisted.'
    ],
    officialPortalUrl: 'https://www.hdfcbank.com/personal/about-us/corporate-social-responsibility',
    helplinePhone: '011-43092248 (Ext. 116)'
  },

  // 2. INFOSYS FOUNDATION AAROHAN SOCIAL INNOVATION GRANTS
  {
    id: 'infosys-foundation-aarohan',
    title: 'Infosys Foundation Aarohan Social Innovation Grants & Fellowships',
    ministryOrOrganization: 'Infosys Foundation (Corporate CSR)',
    type: 'Private & CSR',
    category: ['msme', 'healthcare', 'farmer'],
    benefitType: 'Subsidized Loan / Capital',
    shortDescription: 'Private catalytic grant up to ₹50,00,000 for grassroots innovators, tech startups, and social entrepreneurs working in rural India.',
    detailedDescription: 'Aarohan Social Innovation Awards by Infosys Foundation recognize and scale social innovators, grassroots entrepreneurs, and researchers who develop low-cost, scalable solutions in Healthcare, Education, Rural Development, Sustainability, and Women Empowerment.',
    financialBenefitMax: 5000000,
    financialBenefitText: '₹5,00,000 to ₹50,00,000 Equity-Free Innovation Grant',
    deadline: 'September 30 annually',
    isPopular: true,
    tags: ['Infosys CSR', 'Innovation Grant', 'Social Enterprise', 'Rural Tech'],
    eligibilityCriteria: {
      customRules: [
        'Open to Indian citizens, social enterprises, NGOs, and startup founders',
        'Innovation must have a working prototype or proof-of-concept (TRL 4+)',
        'Must solve a major social challenge in rural or underserved India'
      ]
    },
    requiredDocuments: [
      { name: 'Detailed Project Proposal', description: 'Impact metrics, scalability roadmap, and financial budget', mandatory: true },
      { name: 'Working Prototype Demonstration', description: 'Video or design specifications of innovation', mandatory: true },
      { name: 'Entity Incorporation / Founder Identity', description: 'DPIIT registration / Aadhaar / PAN', mandatory: true }
    ],
    applicationSteps: [
      'Visit the Infosys Foundation Aarohan Portal (infosys.com/infosys-foundation).',
      'Select your innovation category (Healthcare, Rural Development, Education).',
      'Submit the innovation summary, technical architecture, and impact potential.',
      'Shortlisted innovations present before a jury of industry leaders and researchers.',
      'Grant disbursed in milestone tranches with mentorship from Infosys leaders.'
    ],
    officialPortalUrl: 'https://www.infosys.com/infosys-foundation/aarohan.html',
    helplinePhone: '080-28520261'
  },

  // 3. KOTAK KANYA SCHOLARSHIP FOR GIRLS IN HIGHER EDUCATION
  {
    id: 'kotak-kanya-scholarship',
    title: 'Kotak Kanya Scholarship for Meritorious Girl Students',
    ministryOrOrganization: 'Kotak Education Foundation (Kotak Mahindra Bank CSR)',
    type: 'Private & CSR',
    category: ['women', 'student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: '₹1,50,000 per year private scholarship grant for meritorious female students pursuing professional degrees (Engineering, MBBS, Law, Architecture).',
    detailedDescription: 'The Kotak Kanya Scholarship aims to empower young women from low-income families by funding their higher education in professional graduation courses across India. Covers academic fees, books, hostel expenses, and laptop support.',
    financialBenefitMax: 150000,
    financialBenefitText: '₹1,50,000 / year until graduation',
    deadline: 'September 30 annually',
    isPopular: true,
    tags: ['Women in Higher Ed', 'Kotak CSR', 'Professional Degrees', 'Girls Education'],
    eligibilityCriteria: {
      isWomenOnly: true,
      isStudentOnly: true,
      maxAnnualIncome: 600000,
      customRules: [
        'Meritorious female students having secured 85%+ in Class 12 board examination',
        'Secured admission in 1st year of professional degree courses (MBBS, B.Tech, B.Arch, Integrated LLB, Design)',
        'Institutes must be NAAC / NIRF accredited'
      ]
    },
    requiredDocuments: [
      { name: 'Class 12 Marksheet', description: 'Scorecard showing minimum 85% aggregate', mandatory: true },
      { name: 'Entrance Exam Scorecard', description: 'JEE / NEET / CLAT / NATA scorecard', mandatory: true },
      { name: 'College Admission Letter & Fee Receipt', description: 'Confirmation of 1st year professional seat', mandatory: true },
      { name: 'Parent Income Certificate', description: 'Annual household income under ₹6 Lakhs', mandatory: true },
      { name: 'Bank Account Passbook', description: 'In the name of the female applicant', mandatory: true }
    ],
    applicationSteps: [
      'Apply online on the Kotak Education Foundation partner portal (kotakeducation.org).',
      'Upload academic records, competitive entrance rank cards, and verified fee receipts.',
      'Attend the online telephonic and video panel interview.',
      'Award confirmation and annual renewal based on maintaining minimum 60% CGPA.'
    ],
    officialPortalUrl: 'https://kotakeducation.org/kotak-kanya-scholarship',
    helplinePhone: '022-68800100'
  },

  // 4. L’ORÉAL INDIA FOR YOUNG WOMEN IN SCIENCE SCHOLARSHIP
  {
    id: 'loreal-women-in-science',
    title: "L'Oréal India For Young Women in Science (FWIS) Scholarship",
    ministryOrOrganization: "L'Oréal India CSR Foundation (Private CSR)",
    type: 'Private & CSR',
    category: ['women', 'student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: '₹2,50,000 grant for promising young women scientists to pursue undergraduate degrees in Science, STEM, Medicine, and Biotechnology.',
    detailedDescription: "L'Oréal India For Young Women in Science Scholarship is an annual national CSR initiative to encourage young women to pursue careers in scientific research, biotechnology, astrophysics, engineering, medicine, and pharmaceutical sciences in premier Indian institutes.",
    financialBenefitMax: 250000,
    financialBenefitText: '₹2,50,000 total grant over college duration',
    deadline: 'January 15 annually',
    isPopular: true,
    tags: ['Women in STEM', 'LOréal CSR', 'Pure Science', 'Biotech', 'Engineering'],
    eligibilityCriteria: {
      isWomenOnly: true,
      isStudentOnly: true,
      maxAnnualIncome: 600000,
      customRules: [
        'Passed Class 12 with minimum 85% marks in Science stream (PCM / PCB / PCMB)',
        'Enrolled in current academic year in a recognized STEM / Science undergraduate program',
        'Maximum 19 years of age'
      ]
    },
    requiredDocuments: [
      { name: 'Class 10 and 12 Marksheet', description: 'Proof of 85%+ in Science stream', mandatory: true },
      { name: 'College Admission & Fee Receipt', description: 'Proof of enrollment in B.Sc, B.Tech, MBBS, Biotech', mandatory: true },
      { name: 'Income Certificate', description: 'Government revenue authority certificate', mandatory: true },
      { name: 'Aadhaar Card', description: 'Proof of age and identity', mandatory: true }
    ],
    applicationSteps: [
      'Register on the official portal at loreal.com/en/india or Buddy4Study.',
      'Complete personal details and write a statement of purpose on your scientific passion.',
      'Upload academic transcripts and family income proof.',
      'Appear for the personal interview round with the scientific jury.',
      'Scholarship amount disbursed directly in installments.'
    ],
    officialPortalUrl: 'https://www.loreal.com/en/india/pages/commitments/for-women-in-science-india/',
    helplinePhone: '022-67003000'
  },

  // 5. WIPRO SANTOOR WOMEN’S SCHOLARSHIP
  {
    id: 'wipro-santoor-scholarship',
    title: "Wipro Santoor Scholarship for Young Women",
    ministryOrOrganization: 'Wipro Consumer Care and Wipro Cares Foundation',
    type: 'Private & CSR',
    category: ['women', 'student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: '₹24,000 per year continuing financial assistance for underprivileged young women pursuing any degree after Class 12.',
    detailedDescription: 'The Santoor Scholarship Programme, launched by Wipro Consumer Care and Lighting, supports young women from disadvantaged backgrounds in Andhra Pradesh, Karnataka, Telangana, and Chhattisgarh to pursue higher education in Humanities, Arts, Sciences, or Commerce.',
    financialBenefitMax: 72000,
    financialBenefitText: '₹24,000 / year (₹72,000 over 3 years)',
    deadline: 'November 15 annually',
    isPopular: true,
    tags: ['Wipro CSR', 'Girls Education', 'Undergraduate', 'State Specific'],
    eligibilityCriteria: {
      isWomenOnly: true,
      isStudentOnly: true,
      allowedStates: ['Andhra Pradesh', 'Karnataka', 'Telangana', 'Chhattisgarh'],
      customRules: [
        'Passed Class 10 from a government school',
        'Passed Class 12 from a government or government-aided junior college',
        'Enrolled in a full-time 3-year degree program'
      ]
    },
    requiredDocuments: [
      { name: 'Class 10 & 12 Marksheets', description: 'Government school passing certificate', mandatory: true },
      { name: 'Degree College ID / Fee Receipt', description: 'Proof of 1st year admission', mandatory: true },
      { name: 'Student Bank Account Details', description: 'Bank passbook copy', mandatory: true }
    ],
    applicationSteps: [
      'Apply online at santoorscholarship.com or download the physical application form.',
      'Fill in education history and attach school endorsement.',
      'Submit online or post the application to Wipro Cares Office.',
      'Recipients selected purely on economic need and academic consistency.'
    ],
    officialPortalUrl: 'https://santoorscholarship.com',
    helplinePhone: '0120-6834200'
  },

  // 6. ADITYA BIRLA CAPITAL FOUNDATION SCHOLARSHIP
  {
    id: 'aditya-birla-capital-scholarship',
    title: 'Aditya Birla Capital COVID & General Education Scholarship',
    ministryOrOrganization: 'Aditya Birla Capital Foundation (Corporate CSR)',
    type: 'Private & CSR',
    category: ['student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: 'Comprehensive private scholarship up to ₹60,000 per year for school and undergraduate college students across India.',
    detailedDescription: 'An initiative of the Aditya Birla Capital Foundation to support children from vulnerable socio-economic backgrounds across India so that financial distress does not disrupt their educational continuum.',
    financialBenefitMax: 60000,
    financialBenefitText: 'Up to ₹60,000 / year tuition support',
    deadline: 'October 30 annually',
    isPopular: true,
    tags: ['Aditya Birla CSR', 'School & College', 'Tuition Waiver', 'Pan India'],
    eligibilityCriteria: {
      isStudentOnly: true,
      maxAnnualIncome: 600000,
      customRules: [
        'Open to students from Class 1 to 12 as well as undergraduate degree courses',
        'Must have scored at least 60% in the previous academic year',
        'Annual household income from all sources less than ₹6,00,000'
      ]
    },
    requiredDocuments: [
      { name: 'Previous Academic Year Marksheet', description: 'Minimum 60% marks', mandatory: true },
      { name: 'Government ID Proof', description: 'Aadhaar Card / School ID', mandatory: true },
      { name: 'Income Certificate', description: 'Salary slip / Form 16 / Tehsildar certificate', mandatory: true },
      { name: 'Admission & Fee Receipt', description: 'Current session academic receipt', mandatory: true }
    ],
    applicationSteps: [
      'Visit the Aditya Birla Capital Foundation portal.',
      'Upload verified academic marksheets and household income documents.',
      'Internal verification of credentials and direct scholarship transfer into beneficiary bank account.'
    ],
    officialPortalUrl: 'https://www.adityabirlacapital.com/about-us/corporate-social-responsibility',
    helplinePhone: '011-43092248'
  },

  // 7. SITARAM JINDAL FOUNDATION SCHOLARSHIP SCHEME
  {
    id: 'sitaram-jindal-scholarship',
    title: 'Sitaram Jindal Foundation Educational Scholarship',
    ministryOrOrganization: 'Sitaram Jindal Foundation (Private Trust Philanthropy)',
    type: 'Private & CSR',
    category: ['student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: 'Continuous monthly scholarship stipend up to ₹38,400 per year for students from Class 11 to Post-Graduation, ITI, and Engineering.',
    detailedDescription: 'One of the longest-running and most reliable private charitable scholarships in India, providing non-repayable monthly stipends to over 50,000 underprivileged boys and girls each year across all recognized schools, ITIs, polytechnics, and colleges.',
    financialBenefitMax: 38400,
    financialBenefitText: '₹500 to ₹3,200 per month (Up to ₹38,400/yr)',
    deadline: 'Open throughout the year',
    isPopular: true,
    tags: ['Jindal Philanthropy', 'Monthly Stipend', 'ITI & Polytechnic', 'College Grant'],
    eligibilityCriteria: {
      isStudentOnly: true,
      maxAnnualIncome: 400000,
      customRules: [
        'Studying in Class 11, 12, ITI, Diploma, Graduation, or Post-Graduation',
        'Boys: Minimum 60%-70% marks depending on course; Girls: Minimum 55%-65% marks'
      ]
    },
    requiredDocuments: [
      { name: 'Previous Examination Marksheet', description: 'Duly verified by Principal/Dean', mandatory: true },
      { name: 'Income Certificate', description: 'BPL card or authorized income certificate', mandatory: true },
      { name: 'Fee Receipt', description: 'Current session payment slip', mandatory: true },
      { name: 'Hostel Certificate (if applicable)', description: 'For additional hostel allowance', mandatory: false }
    ],
    applicationSteps: [
      'Download Annexure-I application form from sitaramjindalfoundation.org.',
      'Fill in personal and academic details and get it signed by your college Principal or Head of Institution.',
      'Mail the physical form with required attested documents to the Jindal Bangalore or Delhi office.',
      'Cheque / NEFT disbursed directly to student quarterly.'
    ],
    officialPortalUrl: 'https://www.sitaramjindalfoundation.org/scholarships.php',
    helplinePhone: '080-23717777'
  },

  // 8. TATA MEMORIAL HOSPITAL / TATA TRUSTS CRITICAL CANCER CARE RELIEF
  {
    id: 'tata-cancer-care-relief',
    title: 'Tata Trusts Critical Illness & Pediatric Cancer Patient Care Fund',
    ministryOrOrganization: 'Tata Trusts & Tata Memorial Centre (Philanthropic Grant)',
    type: 'Private & CSR',
    category: ['healthcare'],
    benefitType: 'Health & Insurance',
    shortDescription: 'Direct medical treatment grant up to ₹5,00,000 for patients undergoing cancer therapy, bone marrow transplant, or pediatric surgery.',
    detailedDescription: 'Tata Trusts provides compassionate direct financial aid to patients from economically weaker sections undergoing complex tertiary medical treatments, especially pediatric leukemia, bone marrow transplants, and critical surgeries in network hospitals across India.',
    financialBenefitMax: 500000,
    financialBenefitText: 'Up to ₹5,00,000 direct hospital bill sponsorship',
    deadline: 'Open 365 days / Emergency basis',
    isPopular: true,
    tags: ['Tata Healthcare', 'Cancer Treatment', 'Pediatric Surgery', 'Cashless Grant'],
    eligibilityCriteria: {
      maxAnnualIncome: 400000,
      customRules: [
        'Undergoing treatment at Tata Memorial Centre, ACTREC, or authorized Tata Trusts partner hospitals',
        'Patient family annual income below ₹4,00,000'
      ]
    },
    requiredDocuments: [
      { name: 'Doctor Treatment Protocol & Cost Estimate', description: 'From treating oncologist/surgeon', mandatory: true },
      { name: 'Income Certificate / BPL Card', description: 'Proof of economic indigence', mandatory: true },
      { name: 'Identity & Address Proof of Patient', description: 'Aadhaar / Ration Card', mandatory: true }
    ],
    applicationSteps: [
      'Contact the Medical Social Worker (MSW) office at the treating Tata Network Hospital.',
      'Submit the medical diagnosis, official estimation letter, and family income proof.',
      'Social work committee evaluates and approves the charitable relief.',
      'Payment is settled directly with hospital billing desk with zero out-of-pocket payment for patient.'
    ],
    officialPortalUrl: 'https://www.tatatrusts.org/our-work/healthcare',
    helplinePhone: '022-24177000'
  },

  // 9. AZIM PREMJI FOUNDATION FELLOWSHIP & EDUCATION GRANTS
  {
    id: 'azim-premji-fellowship',
    title: 'Azim Premji Foundation Rural Education Fellowship & Livelihood Grant',
    ministryOrOrganization: 'Azim Premji Philanthropic Initiatives (APPI)',
    type: 'Private & CSR',
    category: ['student', 'unemployed'],
    benefitType: 'Skill Training & Certification',
    shortDescription: '₹35,000 monthly fellowship stipend + health insurance for graduates working to transform rural government school education.',
    detailedDescription: 'The Azim Premji Fellowship is an immersive 2-year leadership journey for young Indian graduates and working professionals who want to contribute directly to strengthening grassroots public education and rural community development across 50+ rural districts in India.',
    financialBenefitMax: 420000,
    financialBenefitText: '₹35,000 / month stipend (₹4.2 Lakhs/year) + Insurance',
    deadline: 'March 31 annually',
    isPopular: true,
    tags: ['Azim Premji CSR', 'Fellowship', 'Rural Education', 'Monthly Stipend'],
    eligibilityCriteria: {
      minAge: 21,
      maxAge: 35,
      customRules: [
        'Graduate or Post-Graduate in any discipline',
        'Minimum 3 to 10 years of work experience or strong demonstrated passion for social change',
        'Proficiency in local state language (Hindi, Kannada, Odia, Telugu, Tamil)'
      ]
    },
    requiredDocuments: [
      { name: 'Graduation Degree Certificate', description: 'Proof of completed undergraduate or master degree', mandatory: true },
      { name: 'Resume and Personal Statement', description: 'Why you want to work in rural development', mandatory: true },
      { name: 'Work Experience Certificate (if applicable)', description: 'Previous employment details', mandatory: false }
    ],
    applicationSteps: [
      'Apply online on azimpremjifoundation.org/fellowship.',
      'Take the online written evaluation test testing reading comprehension and socio-economic awareness.',
      'Attend the personal interview with education experts.',
      'Field placement in district institute with monthly direct stipend transfer.'
    ],
    officialPortalUrl: 'https://azimpremjifoundation.org/fellowship',
    helplinePhone: '1800-419-0201'
  },

  // 10. ITC MISSION SUNEHRA KAL RURAL & FARMER EMPOWERMENT
  {
    id: 'itc-mission-sunehra-kal',
    title: 'ITC Mission Sunehra Kal Farmer Climate-Smart Agriculture Grant',
    ministryOrOrganization: 'ITC Limited CSR Foundation (Private CSR)',
    type: 'Private & CSR',
    category: ['farmer'],
    benefitType: 'Equipment / Seeds / Raw Material',
    shortDescription: 'Subsidized drip irrigation, certified climate-smart seeds, and zero-tillage machinery support for smallholder farmers.',
    detailedDescription: 'ITC Mission Sunehra Kal collaborates with agricultural universities and rural farmer producer organizations (FPOs) across 17 states to provide 50% to 80% subsidies on micro-irrigation, biological pest control, soil testing kits, and mechanized seeders.',
    financialBenefitMax: 60000,
    financialBenefitText: 'Up to ₹60,000 subsidized farm equipment & seed input',
    deadline: 'Open prior to Kharif & Rabi seasons',
    isPopular: true,
    tags: ['ITC CSR', 'Smart Agriculture', 'FPOs', 'Small Farmers'],
    eligibilityCriteria: {
      isFarmerOnly: true,
      maxLandSizeAcres: 5,
      customRules: [
        'Small and marginal farmer holding under 5 acres cultivable land',
        'Active member of local Village Agriculture Society or ITC e-Choupal / FPO network'
      ]
    },
    requiredDocuments: [
      { name: 'Land Record Document', description: 'Khasra / 7-12 proof showing under 5 acres', mandatory: true },
      { name: 'Aadhaar Card', description: 'Farmer identification', mandatory: true },
      { name: 'FPO / Village Society Membership Card', description: 'Proof of cooperative participation', mandatory: true }
    ],
    applicationSteps: [
      'Contact your nearest ITC Choupal Saagar or local village coordinator.',
      'Submit land area details and request equipment/seed subsidy package.',
      'Field verification by ITC agricultural extension officer.',
      'Direct distribution of machinery/inputs at heavily subsidized rate.'
    ],
    officialPortalUrl: 'https://www.itcportal.com/sustainability/mission-sunehra-kal.aspx',
    helplinePhone: '033-22889371'
  },

  // 11. GOOGLE INDIA GENERATION SCHOLARSHIP FOR WOMEN IN TECH
  {
    id: 'google-generation-scholarship',
    title: 'Google Generation Scholarship (Women in Computer Science)',
    ministryOrOrganization: 'Google Asia Pacific (Google CSR / DEI Grant)',
    type: 'Private & CSR',
    category: ['women', 'student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: '$2,500 (approx. ₹2,05,000) merit award for female students studying computer science or computer engineering in India.',
    detailedDescription: 'The Generation Google Scholarship for women in computer science is designed to help students pursuing technology degrees excel in their studies and become active leaders in the computing industry.',
    financialBenefitMax: 205000,
    financialBenefitText: '$2,500 (approx. ₹2,05,000) direct cash grant',
    deadline: 'May 31 annually',
    isPopular: true,
    tags: ['Google Tech', 'Women in CS', 'Coding Grant', 'International Award'],
    eligibilityCriteria: {
      isWomenOnly: true,
      isStudentOnly: true,
      customRules: [
        'Enrolled as a full-time undergraduate student in a recognized university in India',
        'Studying Computer Science, Computer Engineering, or closely related technical field',
        'Strong academic record and demonstrated passion for improving diversity in tech'
      ]
    },
    requiredDocuments: [
      { name: 'Resume / CV', description: 'Highlighting technical projects and extracurricular work', mandatory: true },
      { name: 'Current Academic Transcripts', description: 'College semester grade card', mandatory: true },
      { name: 'Two Short Essays', description: 'Responses to Google scholarship essay prompts', mandatory: true }
    ],
    applicationSteps: [
      'Register online at buildyourfuture.withgoogle.com/scholarships.',
      'Submit answers to essay questions on community impact and technical passion.',
      'Upload academic transcripts and technical resume.',
      'Winners awarded $2,500 direct grant and invited to Google Developer retreats.'
    ],
    officialPortalUrl: 'https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac',
    helplinePhone: 'N/A (Online Portal Support)'
  },

  // 12. AMBUJA CEMENT FOUNDATION RURAL WATER & LIVELIHOOD PROGRAM
  {
    id: 'ambuja-foundation-grant',
    title: 'Ambuja Cement Foundation Watershed & Farm Livelihood Grant',
    ministryOrOrganization: 'Ambuja Cement Foundation (Corporate CSR)',
    type: 'Private & CSR',
    category: ['farmer', 'msme'],
    benefitType: 'Equipment / Seeds / Raw Material',
    shortDescription: 'Up to ₹80,000 community water harvesting, check dam construction, and drip irrigation subsidy for dryland farmers.',
    detailedDescription: 'Ambuja Cement Foundation works across rural Maharashtra, Gujarat, Rajasthan, Himachal Pradesh, and Punjab to support dryland farmers with water harvesting structures, farm ponds, micro-irrigation, and cattle breed improvement.',
    financialBenefitMax: 80000,
    financialBenefitText: 'Up to ₹80,000 infrastructure & farm input support',
    deadline: 'Open throughout the year',
    tags: ['Water Harvesting', 'Dryland Farmers', 'Ambuja CSR', 'Rural Livelihood'],
    eligibilityCriteria: {
      isFarmerOnly: true,
      allowedStates: ['Maharashtra', 'Gujarat', 'Rajasthan', 'Himachal Pradesh', 'Punjab'],
      customRules: ['Farmer residing in notified rural blocks covered by Ambuja Foundation programs']
    },
    requiredDocuments: [
      { name: 'Land Record Papers', description: 'Proof of agricultural land', mandatory: true },
      { name: 'Aadhaar Card', description: 'Identity proof', mandatory: true }
    ],
    applicationSteps: [
      'Contact local Ambuja Cement Foundation village resource center.',
      'Join the local watershed committee.',
      'Receive approved technical and financial subsidy for farm ponds and micro-irrigation.'
    ],
    officialPortalUrl: 'https://www.ambujacementfoundation.org',
    helplinePhone: '022-40667000'
  },

  // 13. K.C. MAHINDRA ALL INDIA TALENT SCHOLARSHIP (MAITS)
  {
    id: 'kc-mahindra-scholarship',
    title: 'K.C. Mahindra All India Talent Scholarship (MAITS) for Diploma Holders',
    ministryOrOrganization: 'K.C. Mahindra Education Trust (Mahindra CSR)',
    type: 'Private & CSR',
    category: ['student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: '₹10,000 per year private scholarship for 3 years (₹30,000 total) for students pursuing Polytechnic Engineering Diplomas.',
    detailedDescription: 'Established in 1995 to encourage students from economically disadvantaged families to pursue vocational and engineering polytechnic diploma courses, opening immediate employment opportunities in industrial manufacturing.',
    financialBenefitMax: 30000,
    financialBenefitText: '₹10,000 / year for 3 consecutive years',
    deadline: 'August 31 annually',
    isPopular: true,
    tags: ['Mahindra CSR', 'Polytechnic Diploma', 'Vocational Training', 'Engineering'],
    eligibilityCriteria: {
      isStudentOnly: true,
      maxAnnualIncome: 450000,
      customRules: [
        'Passed Class 10 or 12 with minimum 60% marks',
        'Secured admission into 1st year of a recognized government or recognized Polytechnic Diploma course'
      ]
    },
    requiredDocuments: [
      { name: 'Class 10 / 12 Marksheet', description: 'Minimum 60% aggregate', mandatory: true },
      { name: 'Polytechnic Admission Letter', description: 'Allotment letter & fee receipt', mandatory: true },
      { name: 'Household Income Proof', description: 'Tehsildar certificate or employer salary slip', mandatory: true },
      { name: 'Bank Account Passbook', description: 'Student account copy', mandatory: true }
    ],
    applicationSteps: [
      'Download the MAITS application form from kcmet.org.',
      'Fill in personal and institute credentials.',
      'Submit the form along with attested documents to the nearest Mahindra Trust office.',
      'Shortlisted applicants undergo an in-person interview in major regional centers.'
    ],
    officialPortalUrl: 'https://www.kcmet.org/what-we-do-Scholarships-All-India-Talent.aspx',
    helplinePhone: '022-22895500'
  },

  // 14. SIEMENS INDIA SCHOLARSHIP PROGRAM
  {
    id: 'siemens-scholarship',
    title: 'Siemens India Scholarship Program for 1st Year Engineering Students',
    ministryOrOrganization: 'Siemens India CSR Foundation',
    type: 'Private & CSR',
    category: ['student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: '100% full tuition fee waiver + book allowance + holistic soft skill and technical internship at Siemens factories.',
    detailedDescription: 'Siemens India Scholarship Program provides comprehensive financial assistance covering 100% of college tuition fees and allowances for first-year undergraduate students pursuing B.Tech / B.E. in Electrical, Mechanical, Instrumentation, Electronics, or Computer Science in Government Engineering Colleges.',
    financialBenefitMax: 400000,
    financialBenefitText: '100% Full Tuition Fee Covered + ₹25k Book Allowance / year',
    deadline: 'October 31 annually',
    isPopular: true,
    tags: ['Siemens CSR', 'Full Tuition Waiver', 'Engineering BTech', 'Internship & Job'],
    eligibilityCriteria: {
      isStudentOnly: true,
      maxAnnualIncome: 200000,
      maxAge: 20,
      customRules: [
        '1st year student of Government Engineering College in India',
        'Minimum 60% in Class 10 and 50% in Class 12 (PCM)',
        'Family income under ₹2,00,000 per annum (strictly for economically weaker backgrounds)'
      ]
    },
    requiredDocuments: [
      { name: 'Class 10 and 12 Passing Marksheets', description: 'Academic records', mandatory: true },
      { name: 'Government Engineering College ID & Fee Structure', description: 'Official college verification', mandatory: true },
      { name: 'Tehsildar Income Certificate', description: 'Proof of income under ₹2 Lakhs', mandatory: true }
    ],
    applicationSteps: [
      'Apply online on the Siemens India Scholarship Portal (siemens.co.in).',
      'Upload marksheet, income certificate, and college enrollment verification.',
      'Appear for the online assessment and interview.',
      'Selected scholars receive full fee reimbursement throughout the 4-year degree.'
    ],
    officialPortalUrl: 'https://www.siemens.com/in/en/company/sustainability/corporate-citizenship/siemens-scholarship-program.html',
    helplinePhone: '022-39677000'
  },

  // 15. NSDL VIDYASAARATHI MULTI-CORPORATE CSR SCHOLARSHIP PORTAL
  {
    id: 'vidyasaarathi-csr-portal',
    title: 'Vidyasaarathi Multi-Corporate CSR Scholarship Platform',
    ministryOrOrganization: 'NSDL e-Governance Foundation (Multi-Corporate CSR Consortium)',
    type: 'Private & CSR',
    category: ['student'],
    benefitType: 'Scholarship & Fee Waiver',
    shortDescription: 'Single gateway to 50+ private CSR scholarships funded by ACC, JSW, Tega Industries, TransUnion, and NSDL up to ₹1,00,000/yr.',
    detailedDescription: 'Vidyasaarathi is a technology-enabled initiative by Protean (formerly NSDL) where leading corporate giants channel their mandatory 2% CSR funds directly into student scholarships for ITI, Undergraduates, Medical, and Engineering courses.',
    financialBenefitMax: 100000,
    financialBenefitText: '₹20,000 to ₹1,00,000 / year (Multiple Corporate Sponsors)',
    deadline: 'Varies by corporate scheme (Rolling)',
    isPopular: true,
    tags: ['Protean NSDL', 'Multi-Corporate CSR', 'ACC & JSW', 'All Courses'],
    eligibilityCriteria: {
      isStudentOnly: true,
      maxAnnualIncome: 500000,
      customRules: [
        'Enrolled in ITI, Diploma, Undergraduate, or Postgraduate degree',
        'Minimum 50% to 60% marks in prior qualifying examination'
      ]
    },
    requiredDocuments: [
      { name: 'Applicant Photograph & Aadhaar', description: 'Identity verification', mandatory: true },
      { name: 'Previous Year Marksheet', description: 'Proof of academic qualification', mandatory: true },
      { name: 'Current Year College Fee Receipt', description: 'Verification of active enrollment', mandatory: true },
      { name: 'Income Certificate', description: 'Government revenue authority document', mandatory: true },
      { name: 'Bank Passbook / Cancelled Cheque', description: 'For direct grant transfer', mandatory: true }
    ],
    applicationSteps: [
      'Register free profile on vidyasaarathi.co.in.',
      'Browse matching corporate CSR scholarship programs (ACC, JSW, Protean, TransUnion).',
      'Apply to up to 3 relevant matching CSR grants with a single click.',
      'Track selection status online and receive direct grant transfer.'
    ],
    officialPortalUrl: 'https://www.vidyasaarathi.co.in',
    helplinePhone: '022-40904484'
  }
];
