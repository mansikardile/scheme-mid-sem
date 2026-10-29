-- MahaDBT Maharashtra State Schemes Batch Insert (55 Schemes)
-- Generated on 2026-10-27T19:41:27.191Z
INSERT INTO public.schemes (
    id, slug, myscheme_id, title, ministry_or_organization, type, category, benefit_type,
    short_description, detailed_description, financial_benefit_max, financial_benefit_text,
    deadline, is_popular, is_new, tags, eligibility_criteria, required_documents, application_steps,
    official_portal_url, helpline_phone
) VALUES
(
    'mahadbt-government-of-india-post-matric-scholarship',
    'mahadbt-government-of-india-post-matric-scholarship',
    'MAHADBT-130059048',
    'Government of India Post-Matric Scholarship',
    'Social Justice and Special Assisstance, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '1) Providing financial assistance for education.',
    '1) Providing financial assistance for education.
2) Providing financial assistance for education.
3) To reduce the drop in education leakage.
4) Creating a passion for higher education.
5) Providing students the opportunity to go to the mainstream of education through education.
6) Scholarship scheme to avoid transparency, co-ordination and delay.
7) Benefits of Tuition Fees, Exam Fees and Maintenance Allowance are paid to only SC category students.
8) Candidate family income should be less than or equal to 2,50,000/-

Benefits:
Under this Scheme the eligible SC/ Neo Buddhist students are paid benefits as bellow.
1) Maintenance Allowance is provided as per Group I, Group II, Group III, Group IV per month from date of admission to date of exam (max 10 months)
Day Scholar: (Amount in Rupees per month)
• Group I 550
• Group II 530
• Group III 300
• Group IV 230
Hosteller (Amount in Rupees per month)
• Group I 1200
• Group II 820
• Group III 570
• Group IV 380
2) Additional allowances for SC students with disabilities(Type wise disabilities) as mentioned in GR are as follows,
Type of Disability Allowances(Rs per month) Remark
Blindness/Low vision Grp I & II – 150/-
Grp III – 125/-
Grp IV – 100/- As per GR (A) of additional allowances
Leprosy cured All Groups:
i) Transportation Allowance upto 100/-(Students residing outside hostel campus)
ii) Escort Allowance 100/-
iii) Special Pay allowance for hostel employee as care taker. 100/- As per GR (B, C, D) of additional allowances
Hearing Impaired All Groups:
i) Transportation Allowance upto 100/-(Students residing outside hostel campus)
As per GR (B) of additional allowances
Locomotor Disability All Groups:
i) Transportation Allowance upto 100/-(Students residing outside hostel campus)
As per GR (B) of additional allowances
Mental Retardation/ Mental Illness All Groups:
i) Transportation Allowance upto 100/-(Students residing outside hostel campus)
ii) Escort Allowance 100/-
iii) Special Pay allowance for hostel employee as care taker. 100/-
iv) Extra Coaching allowance 150/- As per GR (B, C, D, E) of additional allowances
Orthopaedic Disability All Groups:
i) Transportation Allowance upto 100/-(Students residing outside hostel campus)
ii) Escort Allowance 100/-
iii) Special Pay allowance for hostel employee as care taker. 100/- As per GR (B, C, D) of additional allowances
3) In addition to the maintenance allowance all mandatory fees/ compulsory payable fees i.e. (Tuition Fees, Exam Fees & other Fees) by the student to the institutes are covered under this scheme.',
    50000,
    'Under this Scheme the eligible SC/ Neo Buddhist students are paid benefits as bellow.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'social-justice-and-special-assisstance'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["SC","OBC"],"minEducationLevel":"Class 10 / Matric","customRules":["1) The parents/Guardian annual income shall be less than or equal to Rs. 2,50,000.","2) Student category shall belong to Scheduled caste or Navbouddha","3) Student shall belong to resident of Maharashtra","4) Student should be passes SSC/equivalent Matric.","5) Failure: if student fail first time then should avail Exam fees & maintenance allowance. If fails second time in same class then he/she will not get any allowance and after two drops he will pass and go to next class then he will be eligible.","6) In case of student studying out of Maharashtra then same rules are applicable as per GOI.","7) Only 2 professional Courses are allowed."]}'::jsonb,
    '[{"name":"Income Certificate(Provided by Tahesildar)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Cast Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet for last appeared examination","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet for SSC or HSC","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Father date Certificate(if required)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap & Self Declaration(if required)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Hostel Certificate (if required)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Husband Income Certificate(if girl is married)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Social Justice and Special Assisstance > Government of India Post-Matric Scholarship and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ACE99921E698B1EE85995B38445F14746E1B0DD7E66FFF88B',
    '022-49150800'
),
(
    'mahadbt-post-matric-tuition-fee-and-examination-fee-freeship',
    'mahadbt-post-matric-tuition-fee-and-examination-fee-freeship',
    'MAHADBT-370492465',
    'Post-Matric Tuition Fee and Examination Fee (Freeship)',
    'Social Justice and Special Assisstance, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '1) Create interest in education among students.',
    '1) Create interest in education among students.
2) Making financial assistance available for higher education.
3) To reduce the drop in education leakage.
4) Creating opportunities for financial growth through higher education.
5) Scholarship scheme to avoid transparency, unity and delay.
6) All types of compulsory fees such as Tuition fees, Exam Fees and other admissible fees are reimbursed to the concern SC category student.

Benefits:
• Tuition Fees, Exam Fees & other fees which are mandatory or compulsorily payable by the student to the institution are covered under the scheme.',
    50000,
    '• Tuition Fees, Exam Fees & other fees which are mandatory or compulsorily payable by the student to the institution are covered under the scheme.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'social-justice-and-special-assisstance'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["SC","OBC"],"maxAnnualIncome":250000,"minEducationLevel":"Class 10 / Matric","customRules":["• The parents / Guardian annual income above Rs. 250000.to unlimited.","• Student category should be Scheduled caste or Neo bouddhist","• Student should be resident of Maharashtra","• Student should be passes SSC/equivalent Matric.","• Institute should be located in Maharashtra & shall be government recognized.","• For Professional Courses student should admit through CAP round only","• Only 1 Failure is allowed in whole curriculum."]}'::jsonb,
    '[{"name":"Income Certificate (Provided by Tahesildar).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Cast Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Cast Validity Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet for last appeared examination","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet for SSC or HSC","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Father date Certificate(if required)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Hostel Certificate (if required)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP round allotment letter","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Social Justice and Special Assisstance > Post-Matric Tuition Fee and Examination Fee (Freeship) and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE0CB048159E784170A4F3BD768B3A64E4772B0EF7B9990B2',
    '022-49150800'
),
(
    'mahadbt-maintenance-allowance-for-student-studying-in-professional-courses',
    'mahadbt-maintenance-allowance-for-student-studying-in-professional-courses',
    'MAHADBT-1288791',
    'Maintenance Allowance for student Studying in professional courses',
    'Social Justice and Special Assisstance, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '1) Benefits of maintenance allowance are paid to SC Students studying in professional courses and living in hostel attached to professional colleges.',
    '1) Benefits of maintenance allowance are paid to SC Students studying in professional courses and living in hostel attached to professional colleges.

Benefits:
From Maintenance allowance user can get fund for Professional course books, Stationary, Residence & Food. As bellow
( from hostel date of joining to date of Exam or Max 10 month)
1) For students who are residing in Government Hostels.
i) Course duration between 4 to 5 years: 700/- Rs per month (Rs 7000 PA.)
ii) Course duration between 2 to 3 years: 500/- Rs per month (Rs 5000 PA.)
iii) Course duration bellow 2 years : 500/- Rs per month (Rs 5000 PA.)
2) For students who are eligible for Government hostels but not admitted in Government Hostels.
i) Course duration between 4 to 5 years: 1000/- Rs per month (Rs 10000 PA.)
ii) Course duration between 2 to 3 years: 700/- Rs per month (Rs 7000 PA.)
iii) Course duration bellow 2 years: 500/- Rs per month (Rs 5000 PA.)',
    10000,
    'From Maintenance allowance user can get fund for Professional course books, Stationary, Residence & Food. As bellow',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'social-justice-and-special-assisstance'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["SC","OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["• Student should be admitted in professional Course.","• Students should be the scholarship holder of Government of India","• The limit of income will be applicable as per the Government of India scholarship scheme i.e. annual income limit less than or equal to 2.5 lac","• Students who are studying in the professional curriculum and residing in Hostel (Government. or Institutes Hostel or outside)."]}'::jsonb,
    '[{"name":"Cast Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Parents Income Cert.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"College Admission Receipt","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Warden Letter(If student not getting admission in hostel)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"His/hers Registration/Application ID with GOI post matric scholarship scheme","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Social Justice and Special Assisstance > Maintenance Allowance for student Studying in professional courses and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A178A7905AEC2C82CFA6A7ADA9024B0C242EEB3AA7065D22A',
    '022-49150800'
),
(
    'mahadbt-rajarshri-chhatrapati-shahu-maharaj-merit-scholarship',
    'mahadbt-rajarshri-chhatrapati-shahu-maharaj-merit-scholarship',
    'MAHADBT-140112211',
    'Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship',
    'Social Justice and Special Assisstance, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '• Creating an interest in learning among SC students.',
    '• Creating an interest in learning among SC students.
• Making financial assistance available for education.
• Increase the quality of SC category students.
• Only SC category students can avail this merit wise scholarship.

Benefits:
• Under this scheme, the SC students who secured 75% or more than 75% marks in the SSC examination and takes admission in the 11th Std. will get scholarship @ Rs. 300 per month for 10 months for two years. I.e. in the 11th and 12th Std.
• This Scholarship will be given in addition to GOI scholarship and Freeship',
    23000,
    '• Under this scheme, the SC students who secured 75% or more than 75% marks in the SSC examination and takes admission in the 11th Std. will get scholarship @ Rs. 300 per month for 10 months for two years. I.e. in the 11th and 12th Std.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'social-justice-and-special-assisstance'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["SC","OBC","General","EWS"],"minEducationLevel":"Class 10 / Matric","customRules":["• Student should belong to SC.","• There is no income limit for the Scholarship.","• Students must be Studying in 11th or 12th.","• Students should secure 75% and above in 10th.","• Student should be resident of Maharashtra"]}'::jsonb,
    '[{"name":"Cast Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"10th Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"TC/LC","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"11th Admission Receipt.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Social Justice and Special Assisstance > Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADF0B5B3136AAAD4C06BEFD7079D45EBAADC7F5BA9DCAA1F3',
    '022-49150800'
),
(
    'mahadbt-post-matric-scholarship-for-persons-with-disability',
    'mahadbt-post-matric-scholarship-for-persons-with-disability',
    'MAHADBT-821010962',
    'Post-Matric Scholarship for persons with disability',
    'Social Justice and Special Assisstance, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '1) Providing financial assistance for education.',
    '1) Providing financial assistance for education.
2) To reduce the drop in education leakage.
3) Creating a passion for higher education.
4) Providing students the opportunity to go to the mainstream of education through education.
5) Scholarship scheme to avoid transparency, co-ordination and delay.
6) Benefits of Tuition Fees, Exam Fees and Maintenance Allowance are paid to only Disable Persons.

Benefits:
Under this Scheme the eligible Students are paid benefits as bellow.
1) Maintenance Allowance is provided as per Group A, Group B, Group C, Group D, Group E per month from admission date to exam date (max 10 months)
Day Scholar:
Group A 550
Group B 530
Group C 530
Group D 300
Group E 230
Hosteller
Group A 1200
Group B 820
Group C 820
Group D 570
Group E 380
2) Blind: Vachak Bhatta (Additional):
Group A, B, C: 100
Group D: 75
Group E: 50
3) In addition to the maintenance allowance all mandatory fees/ compulsory payable fees (Tuition Fees, Exam Fees & other Fees) by the student to the institutes are covered under this scheme.
4) For Professional & Technical Education candidate must go for practice tour then he gets additional max500 Rs or whatever is applicable per year.(If the study tour as part of educational course)
5) If Project is mandatory part of course then for printing and typing he get additional maximum up-to 600 Rs whatever is applicable per year, but principal certificate is mandatory.
6) for candidate who is studying in Mphil and phd courses they get maintenance allowance as per Post graduation Group A, B,C.
7) If the student take admission upto 20th of that month then the maintenance allowance is allowed for this month.',
    50000,
    'Under this Scheme the eligible Students are paid benefits as bellow.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'social-justice-and-special-assisstance'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["SC","OBC","General","EWS"],"minEducationLevel":"Class 10 / Matric","customRules":["• Student should be disable. (40% or above)","• Student should be residential of Maharashtra.","• Student should be Studying in recognized University or Recognized institute.","• The scholarship will not be applicable if the candidate fails or quit the same course in the applied course (incomplete course).","• The Scholarship will not be applicable twice or second time if the candidate applies on the criteria of HSC/SSC/Degree. (application should be in progressive format)(only once course is allowed)","• Student studying in recognized institute or college out of Maharashtra but he should be residential of MH.","• If student is in Post-Graduation from medical education field and he is not allow to do practice out of institute then he is eligible. For ex: internship or houseman ship where stipend is getting.","• if student arts, science & Commerce student discontinues his course & applies from professional course, technical education certificate/diploma/degree is applicable for the scholarship. But except group “A” the candidate fails the scholarship will not be applicable for the scholarship.","• For Group B, C, D, and E: If the student fails then he will not be eligible for this scheme.","• For Group A: If the student fails 1 time, he may be eligible for this scheme, but he will not be eligible if he fails Second time during the full time of education.","• The candidate who taking distance education from recognized uni/Institution where non-refundable fees has to be paid by the student such students are getting annual Rs. 500/- for books and material purchase.","• Candidate only can apply Shahu Maharaj Merit Schol with this Scheme. cant apply for another scheme.","• If candidate is working full time employment then he/she is not eligible.","• If candidate is from Gov hosteller & he is not getting books and stationery from hostel then he is eligible for additional 1/3 amount of maintenance allowance allowed for hosteller.","• The candidate residing in college/institute or any other recognized hostel & if he/she pays hostel fees (application point no 11) then the candidates maintenance allowance will be given of hosteller rates."]}'::jsonb,
    '[{"name":"Mark- Sheet for the last appeared examination","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domocile Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Disability Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Guardian Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"(Only for Group A) If Gap in Education then Gap Certificate is must","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Social Justice and Special Assisstance > Post-Matric Scholarship for persons with disability and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ABCC44582035F06CB9B6B2704869FE16E9E8F561A36261D4D',
    '022-49150800'
),
(
    'mahadbt-vocational-training-fee-reimbursement-for-the-students-belonging-to-schedul',
    'mahadbt-vocational-training-fee-reimbursement-for-the-students-belonging-to-schedul',
    'MAHADBT-740065111',
    'Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students',
    'Social Justice and Special Assistance Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Vocational Training Fee reimbursement for the students belonging to Scheduled Caste Category students and admitted to the seats under PPP scheme in Government ITIs and Private ITIs through Centralized Admission Process. They will avail Fee Reimbursement benefit only if they met the Scheme Criteria.',
    'Vocational Training Fee reimbursement for the students belonging to Scheduled Caste Category students and admitted to the seats under PPP scheme in Government ITIs and Private ITIs through Centralized Admission Process. They will avail Fee Reimbursement benefit only if they met the Scheme Criteria.

Benefits:
1. SSC Pass and Family income Less than or equal to 2,50,000 then As Per GOI scholarship.
2. SSC Pass and Family income above 2,50,000 to Less than or up to 8,00,000 Lakh then 100 % reimbursement of Course Fee.
3. SSC Fail and Family income up to 8,00,000 Lakh then 100 % reimbursement of Course Fee.

Renewal Policy:
i) The student have to be on roll in next year.
ii) Attendance is As per DGT criteria.',
    50000,
    '1. SSC Pass and Family income Less than or equal to 2,50,000 then As Per GOI scholarship.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'social-justice-and-special-assistance-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["SC","OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1. Admission taken through PPP scheme in Government Skill Development Institute or Private Institute and admitted through central Online Admission Process.","2. No scholarship for Management Quota Admission","3. Student should belong to Scheduled Caste Category (SC Category) and should provide caste certificate.","4. Overall Family Income Limit should be Rs.8.00 lacs","5. Orphan candidate requires Recommendation Letter.","6. Candidate should not have taken any benefit for course previously from Government or Private ITI.","7. Candidate should not have taken any benefit for training program sponsored by State / Central Government / Department / Local Body / Company or Corporation.","8. Domicile of Maharashtra.","9. Admission taken for DGT, New Delhi or MSCVT approved courses.","10. Attendance criteria is mandatory.","11. Candidate need to attend each semester /annual exam. If any medical emergency then after recommendation by institute Regional Joint Director should certify or recommend.","12. Non Satisfactory educational progress due to misconduct- Failure in academic year, not fulfilling attendance criteria if found then candidate will not be eligible for scholarship."]}'::jsonb,
    '[{"name":"Required Documents As per GR","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Aadhaar Card.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet SSC /HSC.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year mark sheet for renewal.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate by competent authority.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Social Justice and Special Assistance Department > Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A018CC49F7EDF7669263658A643602B20E9A001B39A682B16',
    '022-49150800'
),
(
    'mahadbt-post-matric-scholarship-scheme-government-of-india',
    'mahadbt-post-matric-scholarship-scheme-government-of-india',
    'MAHADBT-1303602491',
    'Post Matric Scholarship Scheme (Government Of India )',
    'Tribal Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Scheme of Post Matric Scholarships to the students belonging to Scheduled Tribes for Studies in India',
    'Scheme of Post Matric Scholarships to the students belonging to Scheduled Tribes for Studies in India

Benefits:
[Hostellers/Day Scholors] per Month-
Group 1 : 1200/550Rs,Group 2 :820/530Rs,Group 3 :570/300 Rs,Group 4 :380/230 Rs
* Additional to this Reader Allowance :Group1-2 : 240 Rs,Group 3 :200 Rs,Group 4:160Rs
* Escort Allowance : 160 Rs/month
* Special Pay :160 Rs/Month. For Mentally retired, extra coaching : 240 Rs/Month
* Study Tours :1600 Rs/Anum
* Thesis Typing/Printing :1600/Anum
* Book Grant 1200 Rs/Annum

Renewal Policy:
The student have to pass the previous year examination
If student fails in any year then he is not paid the scholarship for that particular year
The student has to apply for renewal of the scholarship',
    50000,
    '[Hostellers/Day Scholors] per Month-',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'tribal-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["ST","OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["Applicable for ST only","* If Family Income"]}'::jsonb,
    '[{"name":"Caste Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year''s marksheet","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Professional Course selected than caste validity certificate mandatory","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Tribal Development Department > Post Matric Scholarship Scheme (Government Of India ) and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A668ED132B54E2162E54C475F826D85C79DA948301E5F7772',
    '022-49150800'
),
(
    'mahadbt-tuition-fee-exam-fee-for-tribal-students-freeship',
    'mahadbt-tuition-fee-exam-fee-for-tribal-students-freeship',
    'MAHADBT-1746454317',
    'Tuition Fee & Exam Fee for Tribal Students ( Freeship)',
    'Tribal Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'This is state sponsored scheme. Applicant who''s parent income limit are more than 2.5 lakhs can apply of the scheme. Only applicant tuition fee and exam fee is reimbursed',
    'This is state sponsored scheme. Applicant who''s parent income limit are more than 2.5 lakhs can apply of the scheme. Only applicant tuition fee and exam fee is reimbursed

Benefits:
Tuition Fee and Exam Fees As per approved college fee structure

Renewal Policy:
The student have to pass the previous year examination
If student fails in any year then he is not paid the scholarship for that particular year',
    50000,
    'Tuition Fee and Exam Fees As per approved college fee structure',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'tribal-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["ST","OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["Applicable for ST only","* Family annual income limit is RS. > 2,50,000","Renewal Policy : The student have to pass the previous year examination","* If student fails in any year then he is not paid the scholarship for that particular year"]}'::jsonb,
    '[{"name":"Caste Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year''s marksheet","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Tribal Development Department > Tuition Fee & Exam Fee for Tribal Students ( Freeship) and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE7C10C1B9446574716EB93196C4CB29808753F77C61BEF29',
    '022-49150800'
),
(
    'mahadbt-vocational-education-fee-reimbursement',
    'mahadbt-vocational-education-fee-reimbursement',
    'MAHADBT-1253200535',
    'Vocational Education Fee Reimbursement',
    'Tribal Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Under this scheme students who are enrolled for vocational education courses like, Engineering, Pharmacy , Animal Husbandry, Dairy Development, Vaastu Shastra, MBA, MCA can take benefit.',
    'Under this scheme students who are enrolled for vocational education courses like, Engineering, Pharmacy , Animal Husbandry, Dairy Development, Vaastu Shastra, MBA, MCA can take benefit.
Applicant whose parent income limit is above 2.5 Lakhs can apply for the scheme.

Benefits:
Tuition Fee and Exam Fees As per approved college fee structure

Renewal Policy:
The student have to pass the previous year examination
If student fails in any year then he is not paid the scholarship for that particular year',
    50000,
    'Tuition Fee and Exam Fees As per approved college fee structure',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'tribal-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["ST","OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["Applicable for ST only","Family annual income limit is RS. > 2,50,000"]}'::jsonb,
    '[{"name":"Caste certificate issued by Competent authority.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate of Maharashtra","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"College admission receipt","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Tribal Development Department > Vocational Education Fee Reimbursement and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A903EC510F2DCBF009D17A0AB763F0C2343B13AF0AB323366',
    '022-49150800'
),
(
    'mahadbt-vocational-education-maintenance-allowance',
    'mahadbt-vocational-education-maintenance-allowance',
    'MAHADBT-958299142',
    'Vocational Education Maintenance Allowance',
    'Tribal Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Applicant who are enrolled for vocational education courses can apply for this scholarship. Parent income limit should be less than 2.5 lakhs.',
    'Applicant who are enrolled for vocational education courses can apply for this scholarship. Parent income limit should be less than 2.5 lakhs.

Benefits:
Maintenance allowance is categorized by course duration[Hostellers/Day Scholors/Annum
* 4-5 Year Courses Rs 7,000/10,000 / Annum.2-3 Year Course Rs 5000/7000 / Annum
* 2 years or less Rs 5000/5000 / Annum

Renewal Policy:
The student have to pass the previous year examination
If student fails in any year then he is not paid the scholarship for that particular year',
    7000,
    'Maintenance allowance is categorized by course duration[Hostellers/Day Scholors/Annum',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'tribal-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["ST","OBC"],"maxAnnualIncome":250000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["Applicable for ST caste only.","* If Family Income 2,50,000 then he will get a freeship","Renewal Policy : The student have to pass the previous year examination","* If student fails in any year then he is not paid the scholarship for that particular year"]}'::jsonb,
    '[{"name":"Caste Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year''s marksheet","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste validity certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Declaration of Rector/Superintendent of the college","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Tribal Development Department > Vocational Education Maintenance Allowance and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A150D8D3BD5BBF9E579F0BA8D2D926043D82C17776CB73469',
    '022-49150800'
),
(
    'mahadbt-vocational-training-fee-reimbursement-for-the-students-belonging-to-schedul',
    'mahadbt-vocational-training-fee-reimbursement-for-the-students-belonging-to-schedul',
    'MAHADBT-816946998',
    'Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe category',
    'Tribal Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category Students and admitted to the seats under PPP scheme in Government ITIs and Private ITIs through Centralized Admission Process. They will avail Fee Reimbursement benefit only if they met the Scheme Criteria.',
    'Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category Students and admitted to the seats under PPP scheme in Government ITIs and Private ITIs through Centralized Admission Process. They will avail Fee Reimbursement benefit only if they met the Scheme Criteria.

Benefits:
1. SSC Pass and Family income Less than or equal to 2,50,000 then As Per GOI scholarship.
2. SSC Pass and Family income above 2,50,000 to Less than or up to 8,00,000 Lakh then 100 % reimbursement of Course Fee.
3. SSc Fail and Family income up to 8,00,000 Lakh then 100 % reimbursement of Course Fee.

Renewal Policy:
i) The student have to be on roll in next year.
ii) Attendance is As per DGT criteria.',
    50000,
    '1. SSC Pass and Family income Less than or equal to 2,50,000 then As Per GOI scholarship.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'tribal-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["ST","OBC"],"minEducationLevel":"Class 10 / Matric","customRules":["1. Student should belong to ST Category and also provide Caste Validity Certificate.","2. Original Leaving Certificate / Transfer Certificate is Mandatory.","3. Scheme applicable for SSC Pass and SSC Fail.","4. Admission taken through PPP scheme in Government Skill Development Institute or Private Institute and admitted through central Online Admission Process.","5. No Fee reimbursement for Management Quota Admission.","6. Overall Family Income will be considered (Father + Mother Income)","7. Candidate should not have taken any benefit for course previously from Government or Private ITI.","8. Candidate should not have taken any benefit for training program sponsored by State / Central Government / Department / Local Body / Company or Corporation.","9. Domicile of Maharashtra","10. Admission taken for DGT, New Delhi or MSCVT approved courses","11. Benefit applicable to only 2 children.","12. Attendance criteria is mandatory.","13. Candidate need to attend each semester /annual exam. If not after recommendation by Student and Institute, Project Officer integrated Tribal Development Project should certify or recommend.","14. Non Satisfactory educational progress due to misconduct- Failure in academic year, not fulfilling attendance criteria if found then candidate will not be eligible for reimbursement."]}'::jsonb,
    '[{"name":"Required Documents As per GR","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Aadhaar Card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet SSC / HSC","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year mark sheet for renewal","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste certificate and Caste validity certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Tribal Development Department > Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe category and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1CE86EBA1BA63DA13D68304CE1D46C55A5B53B49580C2589',
    '022-49150800'
),
(
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-scheme',
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-scheme',
    'MAHADBT-1194806332',
    'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Under this scheme of Directorate of Higher Education, scholarship is applicable for the economically weaker sections. The students family annual income limit is up to Rs. 8.00 lakh, those who have taken an admission for Professional and non- professional courses which come Under Directorate of Higher Education Government / Non-government aided/ Partially Aided – Unaided/Permanent Unaided College and Non-Agricultural Universities and Sub-Centers (Excluding Private Universities / Self-financed Private Universities).',
    'Under this scheme of Directorate of Higher Education, scholarship is applicable for the economically weaker sections. The students family annual income limit is up to Rs. 8.00 lakh, those who have taken an admission for Professional and non- professional courses which come Under Directorate of Higher Education Government / Non-government aided/ Partially Aided – Unaided/Permanent Unaided College and Non-Agricultural Universities and Sub-Centers (Excluding Private Universities / Self-financed Private Universities).

Benefits:
A) Tuition Fees :-
Income Limit
Courses
Government
Non Government Aided
Partially Aided / UnAided
Permanent Unaided
Professional Courses
Up to Rs. 2.50 Lakh
Girl with professional course
100%
100%
100%
100%
Boy
100%
100%
50%
50%
2.50 Up to Rs. 8 Lakh
Girl with professional course
100%
100%
100%
100%
Boy
50%
50%
50%
50%
Non Professional Course
Up to Rs. 8 Lakh
Girl with non-professional course
100%
100%
100%
100%
Boy
100%
100%
100%
100%
B) Exam Fees :-
Professional Course
Girl with professional course
100%
Boy
50%
Non professional course
Girl with non-professional course
100%
Boy
100%

Renewal Policy:
1. Last year, students availed of scholarship can apply for the Renewal scholarship.
2. To Renew the application, student should use an application ID from the list published on website of www.dhepune.gov.in, Higher Education Directorate.',
    20080,
    'A) Tuition Fees :-',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 7.10.2017 , 31.3.2018 & 07.08.2018, 11.07.2019 )","Applicant should be Domicile of Maharashtra and applicant belongs to Maharashtra State and Karnataka state border can apply for scheme.","Family annual income limit is upto Rs. 8.00 lakh.","As per Government Resolution first two children are eligible for scheme.","Candidate those who take admission under general category is eligible.","Courses from GR 07/10/17 (DHE courses) can apply.","Candidates are eligible those who have taken an admission under general category and SEBC Category.","Courses by GR 07/10/17 (DHE courses) can apply.","Applicant should not avail any other scholarship or stipend.","Students are not eligible who has taken an admission in Distance Education, virtual learning and part time courses.","The Courses approved by (Government /University/AICTE,PCI/COA/MCI/NCTE/ etc ) are eligible.","During course, candidate should not have a gap of 2 years.","Applicant should attempt every semester or annual exam."]}'::jsonb,
    '[{"name":"Students should submit domicile certificate issued by Authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Students should submit previous year Annual income certificate issued by Authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Related document.(only for B.ed,Law, BPed,MPed).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap Related Document(if Gap is there)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Family Declaration Certificate about two children’s.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Attendance Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA86467549C6E0CFFDFD61E992C8610ED352EC9DEF886C9CD',
    '022-49150800'
),
(
    'mahadbt-assistance-to-meritorious-students-scholarship',
    'mahadbt-assistance-to-meritorious-students-scholarship',
    'MAHADBT-586265429',
    'Assistance to Meritorious Students scholarship',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Higher Secodnary Level (After 12 th):-',
    'Higher Secodnary Level (After 12 th):-
From Each Divisional Board 15 Students. For Eight Divisional Board Total 120 Students.

Benefits:
(As Per GR Dated 1.3.2011 Medical education Dept. & 11.09.2003) AMS Junior level:-Scholarship amount sanction as per Government Rule varies from course to course 11th - 12th - Rs.1600/- to Rs. 2300/-
AMS Senior level:- Scholarship amount sanction as per Government Rule varies from course to course from Rs.2800 to 72000/- plus.',
    2800,
    '(As Per GR Dated 1.3.2011 Medical education Dept. & 11.09.2003) AMS Junior level:-Scholarship amount sanction as per Government Rule varies from course to course 11th - 12th - Rs.1600/- to Rs. 2300/-',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) AMS Scholarship (Junior Level) ( As Per GR Dated 17.05.1984 ) The students from 11 & 12th class are eligible who gets top rank in secondary and higher secondary examinations.","For Renewal:- Junior level student must possess 55% marks should have admission to next class.","DHE sanctioned letter","Maharashtrian Students studying Out of Maharashtra can apply for this scheme.","2) AMS Scholarship (Senior Level) (As Per GR Dated 17.05.1984) The students after 12th are eligible who gets top rank in secondary and higher secondary examinations.","For Renewal:- Senior level students must possess 65% marks and should have admission to next class.","DHE sanctioned letter.","Maharashtrian Students studying Out of Maharashtra can apply for this scheme."]}'::jsonb,
    '[{"name":"(As Per GR Dated 17.05.1984)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous Year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Fee receipt of current year.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Hostel Fee Receipt.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"DHE Scholarship sanctioned letter.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Assistance to Meritorious Students scholarship and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE6CC3420B0C53DCEB5F351B3D2A9E2CDC4ABAD8058B38786',
    '022-49150800'
),
(
    'mahadbt-education-concession-to-the-children-of-ex-servicemen',
    'mahadbt-education-concession-to-the-children-of-ex-servicemen',
    'MAHADBT-1188884409',
    'Education Concession to the Children of Ex-Servicemen',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Educational concession to the children of Exservice’s man is given No. MIS1465/H,Date23/11/1965.',
    'Educational concession to the children of Exservice’s man is given No. MIS1465/H,Date23/11/1965.

Benefits:
Admission Fee 100%
Semester Fee 100%
Library Fee 100%
Laboratory Fee 100%',
    50000,
    'Admission Fee 100%',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 14.01.1985) Students should be Son/Daughter/Wife/Widow of an EX-SERVICEMAN","Only government and aided college.","Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme."]}'::jsonb,
    '[{"name":"Eligiblity Certificate issued by collector and President of DSSA board.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Admission receipt","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Education Concession to the Children of Ex-Servicemen and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A7909EC2FB46546FC0ADC6852AEB8D3556C79D437D47E3A55',
    '022-49150800'
),
(
    'mahadbt-eklavya-scholarship',
    'mahadbt-eklavya-scholarship',
    'MAHADBT-1914827972',
    'Eklavya Scholarship',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Those students who admitted for Post Graduate and obtained 60 percent marks in arts commerce and law graduation and 70 % marks in Science graduation are eligible to apply for this scolarship.',
    'Those students who admitted for Post Graduate and obtained 60 percent marks in arts commerce and law graduation and 70 % marks in Science graduation are eligible to apply for this scolarship.
Parental annual income should not exceed 75.000 Rs/-
Student should resident of Maharashtra Students should not work full time or part time. Selection of Candidates Is on Merit basis

Benefits:
(As Per GR Dated 7.02.1996)
Rs.5000/- for all sanction students Selection of Candidates Is on Merit basis',
    5000,
    '(As Per GR Dated 7.02.1996)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"maxAnnualIncome":75000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["(As Per GR Dated 7.02.1996) & GR Dated 5.02.2004) Students must graduate from Law, Commerce & Arts having 60% marks and for Science students must have 70%.","Annual income of the applicant''s parents should be less than/equal to Rs. 75,000/- limit.","The applicant must be a resident of Maharashtra State.","The beneficiary should not do a part-time or full-time job anywhere.","Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme."]}'::jsonb,
    '[{"name":"Annual Income Certificate issued by Tahsildar.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous Year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Eklavya Scholarship and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1655B141877065672B6A562E1EC5891E6D5A884AC6702F5D',
    '022-49150800'
),
(
    'mahadbt-state-government-open-merit-scholarship',
    'mahadbt-state-government-open-merit-scholarship',
    'MAHADBT-1456150283',
    'State Government Open Merit Scholarship',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Sanction Set - 1208 Students Admited in Arts Commerce Science Law Graduation are eligible for application For Fresh - Candidate must secure 60 Percentage in 12th standard',
    'Sanction Set - 1208 Students Admited in Arts Commerce Science Law Graduation are eligible for application For Fresh - Candidate must secure 60 Percentage in 12th standard
New sanction process done through DHE office and Renewal sanction process done through joint director office of concern colleges. Selection of Candidates Is on Merit basis

Benefits:
( As Per GR Dated 16.11.1964)
Rs. 100 per month to student bank account.
Selection of Candidates Is on Faculty wise (Arts/ Commerce/science etc.) Merit basis',
    21000,
    '( As Per GR Dated 16.11.1964)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["The applicant must be a resident of the Maharashtra State.","Need to get at least 60 percent in 12th standard.","Only applicable for stream Arts, commerce, science and law.","Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme."]}'::jsonb,
    '[{"name":"Previous Year Marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Bonafide Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > State Government Open Merit Scholarship and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AED33CA69606C0CC2EF25388FB8EC7046E5E9B1E993657CEB',
    '022-49150800'
),
(
    'mahadbt-scholarship-to-meritorious-students-possessing-mathematics-physics',
    'mahadbt-scholarship-to-meritorious-students-possessing-mathematics-physics',
    'MAHADBT-664689356',
    'Scholarship to Meritorious students possessing Mathematics /Physics',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Sanction Set-100 (Maths 50 and Physics 50) Students admited for science graduation and having maths or physics as a main subject are eligible to apply this schoalrship.',
    'Sanction Set-100 (Maths 50 and Physics 50) Students admited for science graduation and having maths or physics as a main subject are eligible to apply this schoalrship.
For Fresh - Candidate must secure 60 Percentage in 12th standard.
He is not awarded any other scholarshiop of State & Central Governement.
candidate must be resident of Maharashtra State. 6. New sanction process done through DHE office and Renewal sanction process done through joint director office of concern colleges. Selection of Candidates Is on Merit basis

Benefits:
( As Per GR Dated 05.02.2004)
Rs. 100 per month.
Selection of Candidates Is on Merit basis.',
    21000,
    '( As Per GR Dated 05.02.2004)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 07.10.1985) Need to get in 12th std with atleast 60% in science exam and more than 60% in Maths & Physics.","Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme.","The applicant must be a resident of the Maharashtra State."]}'::jsonb,
    '[{"name":"Previous year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"College Bonafide Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Scholarship to Meritorious students possessing Mathematics /Physics and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE50D4D8851DF49C43E0ED43F316413C64DC359D08045E4DB',
    '022-49150800'
),
(
    'mahadbt-government-vidyaniketan-scholarship',
    'mahadbt-government-vidyaniketan-scholarship',
    'MAHADBT-1190806207',
    'Government Vidyaniketan Scholarship',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Sanction Set 80 (For Government vidhyaniketan,Pusegaon Amravati Aurangabad Dhule 20 students from each) Students passed Xth Class from Govt Vidhyaniketan are eligible for this schoalrship.',
    'Sanction Set 80 (For Government vidhyaniketan,Pusegaon Amravati Aurangabad Dhule 20 students from each) Students passed Xth Class from Govt Vidhyaniketan are eligible for this schoalrship.
For new sanction students must have 60% marks in Xth Class.
New sanction process done through DHE office and Renewal sanction process done through joint director office of concern colleges. Selection of Candidates Is on Merit basis

Benefits:
Beneficiary Category: all category (only UG students) ( As Per GR Dated 02.09.1986)
11-12th Rs. 100 per month. After 12th Rs.100 per month. Selection of Candidates Is on Merit basis',
    21000,
    'Beneficiary Category: all category (only UG students) ( As Per GR Dated 02.09.1986)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Class 10 / Matric","customRules":["( As Per GR Dated 02.09.1986) Need to get 60% marks in 10th standard.","Need to passed by 10th standard exam from The State Government Vidyanikethan only.","Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme.","The applicant must be a resident of the Maharashtra State."]}'::jsonb,
    '[{"name":"Previous Year Marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Entitlement Card from Vidhyaniketan","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Bonafied Certificate of admited College.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Government Vidyaniketan Scholarship and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A63C8EB5C6B8591A03ACAAA73B08A2E9A0140E826A54AE104',
    '022-49150800'
),
(
    'mahadbt-state-government-daxshina-adhichatra-scholarship',
    'mahadbt-state-government-daxshina-adhichatra-scholarship',
    'MAHADBT-825104042',
    'State Government Daxshina Adhichatra Scholarship',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'For Meriterious Students Studying in PG in Government Institutes And Colleges and Non Agricultural Universities . Total Student76 Government Institutes And Colleges (10)54 Students. Non Agricultural Universities(06)22 Students.',
    'For Meriterious Students Studying in PG in Government Institutes And Colleges and Non Agricultural Universities . Total Student76 Government Institutes And Colleges (10)54 Students. Non Agricultural Universities(06)22 Students.

Benefits:
Beneficiary Category: all categories(only for PG) ( As Per GR Dated 05.02.2004)
Sanction-Rs 250/- Per Month.scholarship amount disburse directly to the students bank account by DHE office.',
    22500,
    'Beneficiary Category: all categories(only for PG) ( As Per GR Dated 05.02.2004)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 29.9.1965). Applicant Must be a Graduate. (Non Agricultural Universities)","only government colleges a)elphinstone college,Bombay(6) b)institue of science,Bombay(6) c) Ismaail yusuf college,jogeshwari (4) d)Sydenham college of commerce(4) e) Govt. Law college,Bombay (4) f)Rajaram college, kolhapur (6) g) college of science,nagpur(6) h)nagpur mahavidyalaya,nagpur(6) i) vidarbha mahavidyalaya amravati(6), j) govt arts and science college,aurangabad(6) and","Mumbai university(4),Pune university(4),Nagpur university(4),Kolhapur(4),SNDT(2),","Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme","The applicant must be a resident of the Maharashtra State"]}'::jsonb,
    '[{"name":"Previous year Mark Sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Bonafide Certificate For PG Admision.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"for renewal:- progress report of PG 1st year","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > State Government Daxshina Adhichatra Scholarship and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A9D67A04BA966CE9B96F78E67437811F5BC8073C49AE8C141',
    '022-49150800'
),
(
    'mahadbt-government-research-adhichatra',
    'mahadbt-government-research-adhichatra',
    'MAHADBT-1016069491',
    'Government Research Adhichatra',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Government Research Adhichtra GR. SCH-1082/4199/VISHI-3, DATED 13/8/1985 has started scholarship for the student wanted to do Ph.D in their subject in Government Colleges and Universities.',
    'Government Research Adhichtra GR. SCH-1082/4199/VISHI-3, DATED 13/8/1985 has started scholarship for the student wanted to do Ph.D in their subject in Government Colleges and Universities.
No of Seats - 14 Government Colleges(05) - 11 Seats Non Agricultural University - 03 Seats University leavel seats are selected by commity under Director from received applications.
College leveal seats are selected by commity under Principal.

Benefits:
Beneficiary Category: all categories (After PG) ( As Per GR Dated 05.02.2004)
Scholarship amount Rs. 750/- per month and Rs.1000/- per year other expenses. and for renewal - it is same as above',
    30000,
    'Beneficiary Category: all categories (After PG) ( As Per GR Dated 05.02.2004)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 13.08.1985) Applicant must be post graduate","The applicant must be a resident of the Maharashtra State","Applicant should have 60% marks in post graduation. B.A/BSC/B.ED AND M.A/MSC/M.ED AND for any other degree below 60% marks is applicable","Only govt science institute(Mumbai-3,Nagpur-3,Aurangabad-3),and govt vidarbh gyan vidnyan science institute(Amravati-1), vasantrao naik mahavidyalay college(Nagpur-1),universities and affilated colleges.(3) ---Brackets indicates quota","Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme"]}'::jsonb,
    '[{"name":"AS per department inputs( As Per GR Dated 13.08.1985) Name of the Guide of the Students.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Sanction letter of university for the Guide.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Graduation and PG marklist.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"For renewal student should submit annual progresive report of his Guide.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Applicant must be domicile of Maharashtra.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"For renewal:-Progress report of Last year. ( As Per GR Dated 13.08.1985)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Government Research Adhichatra and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AF8D6D26D8FA7FEBA8680F51C3601BE8CE372CCCB64746C38',
    '022-49150800'
),
(
    'mahadbt-education-concession-to-the-children-freedom-fighter',
    'mahadbt-education-concession-to-the-children-freedom-fighter',
    'MAHADBT-1205910468',
    'Education Concession to the Children Freedom Fighter',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Educational concession to the children of Ex-service’s man is given No. MIS-1465/H,Date-23/11/1965.',
    'Educational concession to the children of Ex-service’s man is given No. MIS-1465/H,Date-23/11/1965.

Benefits:
( As Per GR Dated13.09.1994)
Beneficiary Category: All categories can apply Benefit only after 12th courses.
Scholarship:- for degree/Pg- Rs 50 per month and for Engineering students, rs 60 per month
Books allowance: for degree/Pg- Rs 200 per annum and for Engineering students, rs 400 per annum',
    24000,
    '( As Per GR Dated13.09.1994)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["All"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["(As Per GR Dated 23.11.1965 & GR Dated 31.12.1990) Students should be Son/Daughter/Wife/Widow of freedom fighter","Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme","Domicile of Maharashtra."]}'::jsonb,
    '[{"name":"Freedom fighter Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Current year fee receipt","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Bonafide certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Education Concession to the Children Freedom Fighter and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0C88CA9F14E2BAB30E38CD07F22F76EE9DCCA97D78964A4C',
    '022-49150800'
),
(
    'mahadbt-jawaharlal-nehru-university',
    'mahadbt-jawaharlal-nehru-university',
    'MAHADBT-1469684841',
    'Jawaharlal Nehru University',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Jawaharlal Nehru University scheme is started by Jawaharlal University for Maharashtra .',
    'Jawaharlal Nehru University scheme is started by Jawaharlal University for Maharashtra .
Among the students from maharastra studying in that University One Student is selected by University according to GR.SCH1082/151160/(2173)/GEN5,DATED 7/5/1983.

Benefits:
Beneficiary Category: All Category
( As Per GR Dated 05.02.2004) Scholarship Amount Rs. 8000/- per month plus Rs.10,000/-extra for yearly.',
    10000,
    'Beneficiary Category: All Category',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["All"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 07.05.1983) Maharashtrian students who studied in JNU. Quota is only for 1 decided by JNU","Only students pursuing Junior Research Fellowship are eligible for the scheme","Domicile of Maharashtra."]}'::jsonb,
    '[{"name":"Fee receipt.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous Year Mark Sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Jawaharlal Nehru University and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAB02274CF2CA0B03BE063BF30732AFD192E705F070148D56',
    '022-49150800'
),
(
    'mahadbt-assistance-to-meritorious-students-scholarship-senior-level',
    'mahadbt-assistance-to-meritorious-students-scholarship-senior-level',
    'MAHADBT-1575702453',
    'Assistance to Meritorious Students scholarship - Senior Level',
    'Directorate of Higher Education (DHE), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Higher Secodnary Level (After 12 th):-',
    'Higher Secodnary Level (After 12 th):-
From Each Divisional Board 15 Students. For Eight Divisional Board Total 120 Students.

Benefits:
(As Per GR Dated 1.3.2011 Medical education Dept. & 11.09.2003) AMS Junior level:-Scholarship amount sanction as per Government Rule varies from course to course 11th - 12th - Rs.1600/- to Rs. 2300/-
AMS Senior level:- Scholarship amount sanction as per Government Rule varies from course to course from Rs.2800 to 72000/- plus.',
    2800,
    '(As Per GR Dated 1.3.2011 Medical education Dept. & 11.09.2003) AMS Junior level:-Scholarship amount sanction as per Government Rule varies from course to course 11th - 12th - Rs.1600/- to Rs. 2300/-',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-higher-education--dhe-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) AMS Scholarship (Junior Level) ( As Per GR Dated 17.05.1984 ) The students from 11 & 12th class are eligible who gets top rank in secondary and higher secondary examinations.","For Renewal:- Junior level student must possess 55% marks should have admission to next class.","DHE sanctioned letter","Maharashtrian Students studying Out of Maharashtra can apply for this scheme.","2) AMS Scholarship (Senior Level) (As Per GR Dated 17.05.1984) The students after 12th are eligible who gets top rank in secondary and higher secondary examinations.","For Renewal:- Senior level students must possess 65% marks and should have admission to next class.","DHE sanctioned letter.","Maharashtrian Students studying Out of Maharashtra can apply for this scheme."]}'::jsonb,
    '[{"name":"(As Per GR Dated 17.05.1984)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous Year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Fee receipt of current year.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Hostel Fee Receipt.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"DHE Scholarship sanctioned letter.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Higher Education (DHE) > Assistance to Meritorious Students scholarship - Senior Level and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A081772910D526AF0EDDF60A95235BCA1E7C80233A30F725A',
    '022-49150800'
),
(
    'mahadbt-dr-panjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'mahadbt-dr-panjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'MAHADBT-1948901614',
    'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna',
    'Higher and Technical Education ,Maharashtra State ,Scheme implemented by Technical Education,M.S , Mumbai, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Under this scheme, Directorate of Higher Education, scholarship is applicable for the economically weaker sections. The student’s those who have taken an admission for Professional and Non-Professional courses which come Under Directorate of Higher Education Government /Non-government aided/Partially Aided -Unaided/Permanent Unaided College and Non-Agricultural Universities and Sub-Centers (Excluding Private Universities / Self-financed Private Universities).',
    'Under this scheme, Directorate of Higher Education, scholarship is applicable for the economically weaker sections. The student’s those who have taken an admission for Professional and Non-Professional courses which come Under Directorate of Higher Education Government /Non-government aided/Partially Aided -Unaided/Permanent Unaided College and Non-Agricultural Universities and Sub-Centers (Excluding Private Universities / Self-financed Private Universities).

Benefits:
A. Professional Courses :
Allowance Table
Quota
Sr.No.
Type
District (Quota)
1
Student whose Parents are Small Land Holder Farmer / Registered Labour
All Eligible Students
2
Economically Backward Class Student (Annual Family Income - upto 1 Lakh)
All Eligible Students
3
Economically Backward Class Student (Annual Family Income - More than 1 Lakh to 8 Lakhs)
500 Students for Each District (33% Seats are reserved for Female Students, Professional Course-wise Merit)
Sr. No
Allowance
Students pursuing higher education in cities including Mumbai city, Mumbai suburbs, Navi Mumbai, Thane, Pune, Pimpri Chinchwad and Nagpur
Students pursuing higher education in other revenue divisional cities and remaining C class municipal areas
Students pursuing higher education in other districts
Students pursuing higher education in Talukas
1
Food Allowance
32,000
28,000
25,000
23,000
2
Residence Allowance
20,000
15,000
12,000
10,000
3
Subsistence Allowance
8,000
8,000
6,000
5,000
Total Amount
60,000
51,000
43,000
38,000
B. Non-Professional Courses :
1. Non-Professional courses up to 1 lack income, benefit Rs.2000 /- Annual for 10 Month.

Renewal Policy:
1. Last year, students availed scholarship, He/She can apply for the renewal Scholarship.
2. To Renew the application, the students should use an application ID, The list published on website of www.dhepune.gov.in, Higher Education Directorate.',
    40000,
    'A. Professional Courses :',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'higher-and-technical-education--maharashtra-state--scheme-implemented-by-technical-education-m-s---mumbai'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["(As Per GR Dated 7.10.2017 , 22.02.2018 , 11.07.2019)","1. Applicant should be Domicile of Maharashtra.","2. For professional courses, Applicant should be a child of registered labor , child of Alpabhudarak or both as total annual income of family/ Guardian should not be more than 8.lakh.","3. For Non Professional Courses, applicant should have upto 1 lakh family Annual Income.","4. Applicant should submit Family Annual Income Certificate.","5. As per Government Resolution first two children eligible for scheme.","6. Candidates are eligible those who have taken an admission under general category and SEBC Category.","7. Courses by GR 07/10/17 (DHE courses) can apply.","8. Applicant should be hosteller.(Govt/Private hostel/ Paying Guest/ Tenant.)","9. Applicant should not avail any other Nirvah Bhatta benefit.","10. Courses approved by (Govt/AICTE,PCI/COA/MCI/NCTE/University etc ) are eligible.","11. During course, candidate should not have a gap of 2 years.","12. Applicant should attempt every semester or annual exam."]}'::jsonb,
    '[{"name":"Students should submit domicile certificate issued by Authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Registered labor certificate / Alpabudharak Certificate/ Family Annual Income Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Hosteller Document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Students should submit previous year Annual income certificate issued by Authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Related document.(only for B.ed, Law, BPed, MPed).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap Related Document(if Gap is there)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Family Declaration Certificate about two children’s.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Attendance Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Higher and Technical Education ,Maharashtra State ,Scheme implemented by Technical Education,M.S , Mumbai > Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1FA3AA7E67D54CF402FD88D88C64949C41EC3238C8545A71',
    '022-49150800'
),
(
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-yojna',
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-yojna',
    'MAHADBT-1683518910',
    'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna',
    'Higher and Technical Education ,Maharashtra State ,Scheme implemented by Technical Education,M.S , Mumbai, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'The objective of the Scheme is to provide financial assistance to the Economic Backward Class (EBC) , Economically Weaker Section (EWS) who are admitted in Diploma / Degree / Postgraduate Technical and Professional courses through Centralized Admission Process (CAP).',
    'The objective of the Scheme is to provide financial assistance to the Economic Backward Class (EBC) , Economically Weaker Section (EWS) who are admitted in Diploma / Degree / Postgraduate Technical and Professional courses through Centralized Admission Process (CAP).

Benefits:
Sr.No.
Type
Income Limit
Course
Student
Tution Fee
Exam Fee
1
Scholarship
Upto 8 Lakhs
Professional
Male
50%
50%
2
Female
100%
100%
Through MahaDBT Portal, The Benefit of Scheme will be disbursed in two Installment in Aadhar Seeded Bank Account.',
    50000,
    'Sr.No.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'higher-and-technical-education--maharashtra-state--scheme-implemented-by-technical-education-m-s---mumbai'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"maxAnnualIncome":800000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["(As per the GR Dated 07th Oct 2017, 01st March 2018, 31st March 2018, 11th July 2019, 08 July 2024)","a) Applicant should have Nationality of India.","b) Candidate should be Domicile of Maharashtra State.","c) Applicant should be ”Bonafide Student of Institute” and admitted for Professional and Technical course (Diploma / Graduation / Post Graduation Degree) as mentioned in GR.","d) Deemed University and Private university is not applicable.","e) Candidate should be admitted through Centralized Admission Process (CAP).","f) Applicant should not avail any other scholarship/stipend.","g) For current Academic Year, Only 2 child from family are allowed for benefit of scheme.","h) The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.","i) Minimum 50 % attendance in previous semester (Exception for first semester fresh admitted Student ).","j) During course duration, candidate should not have a gap of 2 or more than 2 years."]}'::jsonb,
    '[{"name":"For Fresh Application-","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"a) Mark sheet of 10th (S.S.C) & Onwards.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"b) Domicile Certificate of Maharashtra State.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"c) Previous Year Family Annual Income certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"d) Undertaking “In current year, not more than 2 beneficiary from family”.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"e) CAP Related document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"For Renewal Application-","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"a) Previous Year Family Annual Income certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"b) Previous Year Marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Higher and Technical Education ,Maharashtra State ,Scheme implemented by Technical Education,M.S , Mumbai > Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A7F4D327BDEB7125DE0BA4AE1C51180C272281017EBEF6F7C',
    '022-49150800'
),
(
    'mahadbt-dr-panjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'mahadbt-dr-panjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'MAHADBT-324199821',
    'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna',
    'Higher and Technical Education ,Maharashtra State ,Scheme implemented by Technical Education,M.S , Mumbai, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'This is a plan for students of government, government funded and non-affiliated colleges / polytechnics entering the vocational courses set by the government, whose students are certified by the competent authority, as a marginal farmers or whose parents are registered laborers.',
    'This is a plan for students of government, government funded and non-affiliated colleges / polytechnics entering the vocational courses set by the government, whose students are certified by the competent authority, as a marginal farmers or whose parents are registered laborers.

Benefits:
Allowance Table
Sr. No
Allowance
Students pursuing higher education in cities including Mumbai city, Mumbai suburbs, Navi Mumbai, Thane, Pune, Pimpri Chinchwad and Nagpur
Students pursuing higher education in other revenue divisional cities and remaining C class municipal areas
Students pursuing higher education in other districts
Students pursuing higher education in Talukas
1
Food Allowance
32,000
28,000
25,000
23,000
2
Residence Allowance
20,000
15,000
12,000
10,000
3
Subsistence Allowance
8,000
8,000
6,000
5,000
Total Amount
60,000
51,000
43,000
38,000',
    50000,
    'Allowance Table',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'higher-and-technical-education--maharashtra-state--scheme-implemented-by-technical-education-m-s---mumbai'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"maxAnnualIncome":800000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["(As per the GR Dated 07th Oct 2017, 22nd Feb 2018, 01st March 2018, 18th June 2018, 11th July 2019)","a) Applicant should have Nationality of India.","b) Candidate should be Domicile of Maharashtra State.","c) Applicant should be \"Bonafide Student of Institute\" and admitted for Professional and Technical courses (Diploma / Graduation / Post Graduation Degree) as mentioned in GR.","d) Deemed University and Private university are not applicable.","e) Candidate should be admitted through Centralized Admission Process (CAP).","f) For current Academic Year, only 2 children from the family are allowed for the benefit of the scheme.","g) The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.","h) Minimum 50% attendance in the previous semester (Exception for freshly admitted students in College).","i) During the course duration, the candidate should not have a gap of 2 or more years.","j) Candidates are eligible if they have taken admission under the General category and SEBC Category."]}'::jsonb,
    '[{"name":"a) Mark sheet of 10th (S.S.C) & onwards.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"b) Domicile Certificate of Maharashtra State.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"c) Register Labor Certificate / Alpabhudharak (Marginal Land Holder) Certificate. (In case of not a child of Alpabhudharak or Registered Labour, then a Family Annual Income Certificate is required).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"d) Undertaking stating \"In current year, not more than 2 beneficiaries from the family\".","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"e) CAP-related document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"f) Hosteller documents (In case of private hostel or Paying Guest, an agreement with the owner will be required).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Higher and Technical Education ,Maharashtra State ,Scheme implemented by Technical Education,M.S , Mumbai > Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3D30C2CB15631E4E31F4E2AFF5E4258B33E89887D583052E',
    '022-49150800'
),
(
    'mahadbt-open-merit-scholarships-in-junior-college',
    'mahadbt-open-merit-scholarships-in-junior-college',
    'MAHADBT-1535705500',
    'Open Merit Scholarships in Junior College',
    'School Education and Sports Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'School Education Department, Government of Maharashtra invites applications for the Open Merit Scholarships in Junior College,',
    'School Education Department, Government of Maharashtra invites applications for the Open Merit Scholarships in Junior College,
Maharashtra from the students who have secured 60 percent marks in the SSC examination.
The objective of this scholarship is to motivate those students for further higher education.
The scheme provides scholarship for students studying in 11th and 12th standard.

Benefits:
For students in class 11th and 12th: INR 50 per month for ten months (Rs. 500 per Year).',
    25000,
    'For students in class 11th and 12th: INR 50 per month for ten months (Rs. 500 per Year).',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'school-education-and-sports-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Class 10 / Matric","customRules":["Applicant must be studying in Class 11 or 12.","Applicant must have secured a minimum of 60 percent marks in the SSC examination in First Attempt.","The continuance of scholarships is subject to satisfactory progress and securing at least 50 % marks at the end of the first year of Junior College","Beneficary Category - All Categories"]}'::jsonb,
    '[{"name":"SSC Mark sheet","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"For Renewal Standard 11th mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select School Education and Sports Department > Open Merit Scholarships in Junior College and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD2BE9F3A5300828BE4EFF8979CAC37F89BF462A7353CD060',
    '022-49150800'
),
(
    'mahadbt-merit-scholarships-for-economically-backward-class-students',
    'mahadbt-merit-scholarships-for-economically-backward-class-students',
    'MAHADBT-232931710',
    'Merit Scholarships for Economically Backward Class Students',
    'School Education and Sports Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'The School Education Department, Government of Maharashtra invites applications from students for boys - only students of Class 11 and 12 for Open Merit Scholarships for EBC students.',
    'The School Education Department, Government of Maharashtra invites applications from students for boys - only students of Class 11 and 12 for Open Merit Scholarships for EBC students.
The key objective of the scholarship is to enable students of economically backward classes to continue further education.

Benefits:
Beneficial amount provided per month every year (For 10months)
The hosteler boys will receive a scholarship amount of INR 140 per month for 10 months that sums up to INR 1400.
The non-hosteler boys will receive INR 80 per month for 10 months that sums up to INR 800.
The hosteler girls will receive INR 160 per month for 10 months that sums up to INR 1600.
The non-hosteler girls will receive INR 100 per month for 10 months that sums up to INR 1000.',
    36000,
    'Beneficial amount provided per month every year (For 10months)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'school-education-and-sports-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Class 10 / Matric","customRules":["Applicant must secure a minimum of 50 % marks in SSC examination.","Students who cleared examination in first attempt."]}'::jsonb,
    '[{"name":"Income certificate (Approved by Tahasildar)*","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"SSC marksheeet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous Year Mark sheet. (For Renewal)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select School Education and Sports Department > Merit Scholarships for Economically Backward Class Students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A28BFA30CC1E4590B8F718E4CDE619112BB546E172DF7EFEA',
    '022-49150800'
),
(
    'mahadbt-post-matric-scholarship-to-vjnt-students',
    'mahadbt-post-matric-scholarship-to-vjnt-students',
    'MAHADBT-1274798648',
    'Post Matric Scholarship to VJNT Students',
    'VJNT,OBC and SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '• Providing financial assistance for education.',
    '• Providing financial assistance for education.
• Creating a passion for higher education.
• Providing students the opportunity to go to the mainstream of education through education.
• Scholarship scheme to avoid transparency, co-ordination and delay.
• Benefits of Tuition Fees, Exam Fees and Maintenance Allowance are paid to only VJNT category students.

Benefits:
Eligible V.J.N.T. Applicants are paid maintenance allowance :
1) If Applicant select Course Group A - for hostlers Rs.425/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m. (Duration - Admission date to till exam completion date)
2) If Applicant select Course Group B - for hostlers Rs.290/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m.(Duration - Admission date to till exam completion date)
3) If Applicant select Course Group C - for hostlers Rs.290/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m.(Duration - Admission date to till exam completion date)
4) If Applicant select Course Group D - for hostlers Rs.230/p.m. & Day Scholars(Non Hostlers) Rs.120/p.m. (Duration - Admission date to till exam completion date)
5) If Applicant select Course Group E - for hostlers Rs.150/p.m. & Day Scholars (Non Hostlers) Rs.90/p.m. (Duration - Admission date to till exam completion date)
6) Tuition Fee, Exam Fee and Maintenance allowance are paid 100% to applicants who’s studying in government/aided/non aided institutions in professional courses and non-professional courses.
7) If Applicant get admission in government hostel then he will eligible only 1/3rd amount of hostlers.
8) For B.Ed and D.Ed courses : 100 % benefit (Tuition Fees, Exam Fees and Maintenance Allowance) is applicable for D.Ed, B.Ed courses. For students studying in Aided, UnAided for D.Ed, B.Ed courses then Fee structure is applicable as per Government rates for same course
9) Note : If applicant takes an admission on or before 20th of any month should entitle date maintenance allowance will be issued for that current month. Otherwise maintenance allowance will be entitle from next month.

Renewal Policy:
1) Applicant have to pass the previous year examination.
2) In case of VJNT if Applicant fails for a year then the Applicant is not paid any reimbursement for that particular year.
3) For Group A – If an applicant pursuing Group A course fails in the examination for the 1st time the award may be renewed. For second & sub sequent failure in any class the Applicant shall bear his / her own expenses until he / she secure promotion to the next higher class.
4) For Group B,C,D,E - he/she has to secure promotion to higher class (For second & sub sequent failure in any class the Applicant shall bear his / her own expenses until he / she secure promotion to the next higher class.)
5) If due to any medical condition or due to any unforeseeable event the Applicant cannot appear in the annual examination, the head master of the college can approve or certify that if the Applicant would have appeared in the annual examination, he would have been able to pass the examination. This will be only allowed if the head of the institution is satisfied by the submission of medical proof or any other required sufficient proof that the Applicant presents to the college.',
    24250,
    'Eligible V.J.N.T. Applicants are paid maintenance allowance :',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'vjnt-obc-and-sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) The parents/Guardians annual Income should be less than or equal to Rs.2.50 Lac.","2) Applicant should be belongs to VJNT category.","3) Applicants must be residents of Maharashtra.","4) Applicants must be pursuing the education course approved by the government from class Post-Matric.","5) Maintenance allowance & Exam Fees are paid to Applicant if Applicant get promoted to next higher class.","6) If Applicant fails in particular year then he will get the Tuition Fees, Exam Fees and Maintenance allowance of that particular academic year but he/she will not get the benefit until he/she gets promoted to next higher class.","7) Applicant should be come through CAP round for only professional courses.","8) Only two children (i) any number of girls applicants allowed. ii) boys applicants maximum 2 of the same parent) of the same parents will be eligible for the Scholarship.","9) No scholarship will be paid to the Applicants under this scheme from the date he /she accepts another Scholarship / stipend.","10) 75 % attendance is mandatory for current year.","11) Applicant will be eligible for scholarship if he / she changes the course Non – Professional to Professional but he will not be eligible if he / she changes the course from Professional to Non – Professional.","12) Scholarships/freeship will continue until Applicant completes one course. Ex. - 11th, 12th Arts - B.A., M.A. , M.Phil., P.H.D. If, Applicant completed B.A and B.Ed. course and later after taking admission for M.A., for M.A. course He/she will not be allowed for scholarship/freeship. But after admission to M.B.A. after B.Ed, it can be eligible for scholarship/freeship as it is a professional post graduate course.","13) Applicant studying in particular professional/Non-Professional course, and availing benefits of scholarship/freeship for that academic course and if he/she wants to change his existing Professional/Non-Professional course in between academic years he/she will not be eligible for freeship/scholarship for further course."]}'::jsonb,
    '[{"name":"Caste certificate - should be issued by competent authority(Issued by Govt. of Maharashtra) This certificate considered as Proof of Resident.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate / Income Declaration - should be issued by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate – (Mandatory for Professional Degree courses, Professional Post Graduate. For Non Professional courses caste validity is not mandatory)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"HSC or SSC marksheet or last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap certificate - Not mandatory but in case of gap it is mandatory.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"If applicable father/Guardians death certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card for identify number of children in family.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Declaration certificate of parents/guardians about number of children beneficiaries.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select VJNT,OBC and SBC Welfare Department > Post Matric Scholarship to VJNT Students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFD83FFC8C5199983E26D3BE9645241F26E1947ED73B2823D',
    '022-49150800'
),
(
    'mahadbt-tuition-fees-and-examination-fees-to-vjnt-students',
    'mahadbt-tuition-fees-and-examination-fees-to-vjnt-students',
    'MAHADBT-1221985277',
    'Tuition Fees and Examination Fees to VJNT Students',
    'VJNT,OBC and SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '1) Create interest in education among students.',
    '1) Create interest in education among students.
2) Making financial assistance available for higher education.
3) Creating opportunities for financial growth through higher education.
4) Scholarship scheme to avoid transparency, unity and delay.
5) All types of compulsory fees such as Tuition fees, Exam Fees and other admissible fees are reimbursed to the concern VJNT category studen.

Benefits:
1) Tuition fees and Exam Fees reimbursed to the concern Applicant vide Govt. Resolution dated 12/3/2007, since 2006-07 the Applicants who are admitted in professional courses through CAP round in the Govt., Govt. approved private non aided and permanently non granted colleges are applicable to pay 100 % Tuition Fees & Exam Fees approved by Education Fee Committee..
2) Also those applicants are taken admission in Deemed University for professional courses won’t get benefit of scholarship / freeship.
3) Start date of application is depending upon the applicant takes admission in college/Institute and End date of application is depend upon the last date of examination.(For 10 months - it will vary every academic year on admission date)

Renewal Policy:
1) Applicant need to provide previous years marksheet.
2) At a time Applicant can apply freeship for only one educational course and it will be applicable till he/she completes that educational course in specified time.
3) Applicant cannot take freeship for more than 2 professional courses.
4) If due to any medical condition or due to any unforeseeable event the Applicant cannot appear in the annual examination, the head master of the college can approve or certify that if the Applicant would have appeared in the annual examination, he would have been able to pass the examination. This will be only allowed if the head of the institution is satisfied by the submission of medical proof or any other required sufficient proof that the Applicant presents to the college.',
    50000,
    '1) Tuition fees and Exam Fees reimbursed to the concern Applicant vide Govt. Resolution dated 12/3/2007, since 2006-07 the Applicants who are admitted in professional courses through CAP round in the Govt., Govt. approved private non aided and permanently non granted colleges are applicable to pay 100 % Tuition Fees & Exam Fees approved by Education Fee Committee..',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'vjnt-obc-and-sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) Applicant must be taking post matric education.","2) Applicant should be belongs to VJNT category.","3) Applicants must be residents of Maharashtra.","4) Applicants should be pursuing the education course approved by the government for Post Matric courses.","5) Applicant must be taken admission in government government aided / Private Non-Aided / private permanently non aided for professional courses","6) Degree Courses in Health Science(Medical, Dental, Homeopathy, Unani, Ayurveda, Physiotherapy, Business Aid, Nursing) :","If Applicant is admitted through Association of Managements of Unaided Private Medical and Dental Colleges entrance examination or admitted through government common entrance examination then he/she will be eligible the for the freeship.","7) Higher and Technical Education Department :","Freeship will be applicable to unaided colleges / government and aided colleges with technical education / Polytechnic and government unaided professional courses.","Following are the applicable courses for this scheme :","a) Diploma – Engineering, Pharmacology, HMCT","b) Degree – Engineering, Pharmacology, HMCT","c) Post Graduate –MBA/MMS, MCA","8) Agriculture, Animal Husbandry and Dairy Development and Fisheries Department :","The scholarship fees will be applicable to the Applicants who have been admitted through government quota in private un aided/permanently un aided institute.","a) Agricultural colleges (diploma)","b) Dairy Business Department (Diploma)","c) Colleges for Agricultural and Allied subjects (Degree and Post Graduate)","d) Agriculture and Bio-Technology Colleges (Degree and Post Graduate)","e) Agriculture and Food Technology Colleges (Graduate and Post Graduate)","9) For B.Ed and D.Ed courses : 100 % benefit (Tuition Fees, Exam Fees) is applicable for D.Ed, B.Ed courses. For students studying in Aided, UnAided for D.Ed, B.Ed courses then Fee structure is applicable as per Government rates for same course.","10) For professional courses Applicant should admitted through CAP round is must.","11) If Applicant fails in particular year then he will get the Tuition Fees and Exam Fees of that particular academic year but he/she will not get the benefit until he/she gets promoted to next higher class..","12) Applicant will be eligible for scholarship if he / she change the course Non – Professional to Professional but he will not be eligible if he / she change the course from Professional to Non – Professional.","13) If an applicant pursuing professional course admitted in private un aided/permanently un aided institute for year 2015-16 onwards fails in the examination two or more times in particular academic course duration then he / she not eligible for the freeship.","14) Scholarships/freeship will continue until Applicant completes one course. Ex. - 11th, 12th Arts - B.A., M.A. , M.Phil., P.H.D. If, Applicant completed B.A and B.Ed. course and later after taking admission for M.A., for M.A. course He/she will not be allowed for scholarship/freeship. But after admission to M.B.A. after B.Ed, it can be eligible for scholarship/freeship as it is a professional postgraduate course.","15) Applicant studying in particular professional/Non-Professional course, and availing benefits of scholarship/freeship for that academic course and if he/she wants to change his existing Professional/Non-Professional course in between academic years he/she will not be eligible for freeship/scholarship for further course."]}'::jsonb,
    '[{"name":"Caste certificate - should be issued by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate / Non Creamy layer Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"HSC or SSC marksheet or last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap certificate - Not mandatory but in case of gap it is mandatory.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Declaration certificate of parents/guardians about number of children beneficiaries.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"If applicable father death certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Allotment Letter (For Professional Courses)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate (For Professional Courses As Per GR Dated 31st July 2008) Exempted Professional courses to be identified","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration card for identify number of children’s in family","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select VJNT,OBC and SBC Welfare Department > Tuition Fees and Examination Fees to VJNT Students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAC3D52BF09BB773555F3C82D946AC992C39B99CA73982F62',
    '022-49150800'
),
(
    'mahadbt-payment-of-maintenance-allowance-to-vjnt-and-sbc-students-studying-in-profe',
    'mahadbt-payment-of-maintenance-allowance-to-vjnt-and-sbc-students-studying-in-profe',
    'MAHADBT-1290923420',
    'Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges',
    'VJNT,OBC and SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Benefits of maintenance allowance are paid to VJNT and SBC Students studying in professional courses and living in hostel attached to professional colleges.',
    'Benefits of maintenance allowance are paid to VJNT and SBC Students studying in professional courses and living in hostel attached to professional colleges.

Benefits:
1) Maintenance allowance for Applicants staying in college attached Hostel. (For 10 months) 4 to 5 years course (Medical, Engineering, Agriculture, veterinary, Architecture etc.) 700/- per month i.e Rs.7000/- for 10 months.
2) Maintenance allowance for Applicants staying in college attached Hostel. (For 10 months) 2 to 3 years course (Engineering Diploma , M.B.A, M.S.W., etc.) Rs. 500/- per month i.e Rs.5000/- for 10 months.
3) Maintenance allowance for Applicants staying in college attached Hostel. (For 10 months) 2 years and lesser duration courses (B.Ed., D.Ed., etc) Rs.500/- per month i.e. Rs. 5000/- for 10 months.
4) Maintenance allowance for Applicants not staying in government hostel. (For 10 months) 4 to 5 years course (Medical, Engineering, Agriculture, veterinary, Architecture etc.) Rs.1000/- per month i.e. Rs.10,000/- for 10 months.
5) Maintenance allowance for Applicants not staying in government hostel. (For 10 months) 2 to 3 years course (Engineering Diploma , M.B.A, M.S.W., etc.) Rs.700/- per month i.e. Rs. 7000/- for 10 months.
6) Maintenance allowance for Applicants not staying in government hostel. (For 10 months) 2 years and lesser duration courses (B.Ed., D.Ed. etc) Rs.500/- per month i.e. Rs. 5000/- for 10 months.

Renewal Policy:
1) Applicant should have to pass the previous year examination.
2) Applicant need to pass each year of the specified educational year[In case of failure in a particular year he/she wont be provided reimbursement for that year].
3) Applicant cannot take scholarship for more than 2 professional courses.',
    10000,
    '1) Maintenance allowance for Applicants staying in college attached Hostel. (For 10 months) 4 to 5 years course (Medical, Engineering, Agriculture, veterinary, Architecture etc.) 700/- per month i.e Rs.7000/- for 10 months.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'vjnt-obc-and-sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) Applicant should be studying in professional course Engineering, Medical, Veterinary, Architecture, and Agriculture.","2) Applicant must be belongs to VJNT and SBC category.","3) Applicant should be eligible for Post Matric Scholarship.","4) Applicants parents annual income should be less than or equal to Rs. 1 Lac.","5) Applicant should submit Application form for admission in Govt. Hostel.","6) Applicant is not eligible for maintenance allowance if Applicant takes admission in government hostel.","7) Applicant should have admitted in the hostels attached to Professional Colleges or should produce the certificate of non-availability of the rooms.","8) Applicant who is residing outside the hostel, should submit Certificate that he had applied for Govt. hostel and College hostel but he could not get admission even though he is eligible for admission.","9) If Applicant fails in particular year then he will get the maintenance allowance of that particular academic year but he/she will not get the benefit until he/she gets promoted to next higher class.","10) Applicant will be eligible for scholarship if he / she changes the course Non – Professional to Professional but he will not be eligible if he / she changes the course from Professional to Non – Professional.","11) Scholarships/freeship will continue until Applicant completes one course. Ex. - 11th, 12th Arts - B.A., M.A. , M.Phil., P.H.D. If, Applicant completed B.A and B.Ed. course and later after taking admission for M.A., for M.A. course He/she will not be allowed for scholarship/freeship. But after admission to M.B.A. after B.Ed, it can be eligible for scholarship/freeship as it is a professional postgraduate course."]}'::jsonb,
    '[{"name":"Caste certificate- should be issued by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate- should be issued by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"College Admission Receipt","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Wadern Letter (If applicable candidate is not getting admission in Government hostel, attached hostel to college)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Rent Agreement of private hostel/ place (If student staying outside of hostel)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Student Affidavit (If student is staying in outside of hostel)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Principal letter (If student getting admission in attached hostel)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"His/Her Registration / Application ID with Post Matric scholarship Scheme.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate (for professional courses)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select VJNT,OBC and SBC Welfare Department > Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADF6AE1F1FBCD6E5590683EDAFF0DF60958CB2C07261F364B',
    '022-49150800'
),
(
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-merit-scholarship-for-students-studying-',
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-merit-scholarship-for-students-studying-',
    'MAHADBT-713065939',
    'Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category',
    'VJNT,OBC and SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '• Creating an interest in learning among VJNT / SBC students.',
    '• Creating an interest in learning among VJNT / SBC students.
• Making financial assistance available for education.
• Increase the quality of VJNT / SBC category students.
• Only VJNT and SBC category students can avail this merit wise scholarship.

Benefits:
1) Applicants studying in 11th and 12th, a scholarship will get Rs. 300 / - per month and for 10 months it will get Rs. 3000.
2) Applicable for Scholarship and Freeship.

Renewal Policy:
• The applicant should have to pass the 11th standard examination.',
    3000,
    '1) Applicants studying in 11th and 12th, a scholarship will get Rs. 300 / - per month and for 10 months it will get Rs. 3000.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'vjnt-obc-and-sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Class 10 / Matric","customRules":["1) Applicants should belong to Vimukta Jatis, Nomadic Tribes or Special Backward Class.","2) Applicant must be studying in 11th and 12th standard in Jr. College.","3) There will be no income limit for this Scholarship.","4) Applicant should have to secure 75% and above marks in 10th standard Examination.","5) Scholarship benefit can be taken in addition to Post Matric Scholarship.","6) Education gap is not allowed for this scholarship.","7) Applicant must be residents of Maharashtra."]}'::jsonb,
    '[{"name":"Caste certificate- should be issued by competent authority(certified by only Govt. of Maharashtra)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"SSC marksheet or last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select VJNT,OBC and SBC Welfare Department > Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A91E82A5FCFBAAB0483ADB704B47ED161F43EE2545EC67678',
    '022-49150800'
),
(
    'mahadbt-post-matric-scholarship-to-obc-students',
    'mahadbt-post-matric-scholarship-to-obc-students',
    'MAHADBT-2111455643',
    'Post Matric Scholarship to OBC Students',
    'VJNT,OBC and SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '1) Providing financial assistance for education.',
    '1) Providing financial assistance for education.
2) Creating a passion for higher education.
3) Providing students the opportunity to go to the mainstream of education through education.
4) Scholarship scheme to avoid transparency, co-ordination and delay.
5) Benefits of Tuition Fees, Exam Fees and Maintenance Allowance are paid to only OBC categorystudents

Benefits:
Eligible O.B.C Applicants are paid maintenance allowance:
1) If Applicant select Course Group A - for hostlers Rs.425/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m. (Duration - Admission date to till exam completion date)
2) If Applicant select Course Group B - for hostlers Rs.290/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m.(Duration - Admission date to till exam completion date)
3) If Applicant select Course Group C - for hostlers Rs.290/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m.(Duration - Admission date to till exam completion date)
4) If Applicant select Course Group D - for hostlers Rs.230/p.m. & Day Scholars(Non Hostlers) Rs.120/p.m. (Duration - Admission date to till exam completion date)
5) If Applicant select Course Group E - for hostlers Rs.150/p.m. & Day Scholars(Non Hostlers) Rs.90/p.m.(Duration - Admission date to till exam completion date)
6) As per the GR dt.8 ’th July 2024, 100 % benefit will be applicable for girl Applicant.
7) Also the OBC Applicants admitted in Govt. Approved non granted colleges in professional courses are paid 50% Tuition fees and Exam fees.
8) Tuition Fee, Exam Fee and Maintenance allowance are paid 100% to applicants who’s studying in government/aided institutions in professional courses and non-professional courses.
9) Tuition Fee and Exam Fee are paid 50% and Maintenance allowance are paid 100% to applicants who’s studying in non-government/unaided institutions in professional courses and non-professional courses.
10) If Applicant get admission in government hostel then he will eligible only 1/3rd amount of hostlers.
11) For OBC Applicants studying in private un-aided institutions, fees structure of government aided institutions will be applicable only for Non – Professional courses (Tuition Fees, Exam Fees and other Fees)
12) Applicant studying in particular professional/Non-Professional course, and availing benefits of scholarship/freeship for that academic course and if he/she wants to change his existing Professional/Non-Professional course in between academic years he/she will not be eligible for freeship/scholarship for further course.
13) For B.Ed and D.Ed courses : 100 % benefit (Tuition Fees, Exam Fees and Maintenance Allowance) is applicable for D.Ed, B.Ed courses. For students studying in Aided, UnAided for D.Ed, B.Ed courses then Fee structure is applicable as per Government rates for same course.
Note: If applicant takes an admission on or before 20th of any month should entitle date maintenance allowance will be issued for that current month. Otherwise maintenance allowance will be entitled from next month.

Renewal Policy:
1) The Applicant have to pass the previous year examination.
2) In case of OBC if Applicant fails for a year then the Applicant is not paid any reimbursement for that particular year.
3) For Group A – If an applicant pursuing Group A course fails in the examination for the 1st time the award may be renewed. For second & sub sequent failure in any class the Applicant shall bear his / her own expenses until he / she secure promotion to the next higher class.
4) For Group B,C,D,E Courses - he/she has to secure promotion to higher class.( For second & sub sequent failure in any class the Applicant shall bear his / her own expenses until he / she secure promotion to the next higher class.)
5) If due to any medical condition or due to any unforeseeable event the Applicant cannot appear in the annual examination, the head master of the college can approve or certify that if the Applicant would have appeared in the annual examination, he would have been able to pass the examination.
This will be only allowed if the head of the institution is satisfied by the submission of medical proof or any other required sufficient proof that the Applicant presents to the college.',
    24250,
    'Eligible O.B.C Applicants are paid maintenance allowance:',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'vjnt-obc-and-sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) The parents/Guardians annual Income should be less than or equal to Rs.2.50 Lac.","2) Applicant should be belongs to OBC category.","3) Applicants must be residents of Maharashtra.","4) Applicants must be pursuing the education course approved by the government from class Post-Matric.","5) If Applicant fails in particular year then he will get the Tuition Fees, Exam Fees and Maintenance allowance of that particular academic year but he/she will not get the benefit until he/she gets promoted to next higher class.","6) Applicant should be come through CAP round for only professional courses.","7) Only two children (i)any number of girls applicants allowed. ii) boys applicants maximum 2 of the same parents will be eligible for the Scholarship.","8) No scholarship will be paid to the Applicants under this scheme from the date he /she accepts another Scholarship / stipend.","9) 75 % attendance is mandatory for current year.","10) Applicant will be eligible for scholarship if he / she changes the course Non – Professional to Professional but he will not be eligible if he / she changes the course from Professional to Non – Professional.","11) Scholarships/freeship will continue until Applicant completes one course. Ex. - 11th, 12th Arts - B.A., M.A, M.Phil., P.H.D. If, Applicant completed B.A and B.Ed. course and later after taking admission for M.A., for M.A. course He/she will not be allowed for scholarship/freeship. But after admission to M.B.A. after B.Ed, it can be eligible for scholarship/freeship as it is a professional postgraduate course.","12) Applicant studying in particular professional/Non-Professional course, and availing benefits of scholarship/freeship for that academic course and if he/she wants to change his existing Professional/Non-Professional course in between academic years he/she will not be eligible for freeship/scholarship for further course."]}'::jsonb,
    '[{"name":"Caste certificate - should be issued by competent authority(Issued by Govt. of Maharashtra) This certificate considered as Proof of Resident.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate / Income Declaration - should be issued by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate – (Mandatory for Professional Degree courses, Professional Post Graduate. For Non Professional courses caste validity is not mandatory)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"HSC or SSC marksheet or last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap certificate - Not mandatory but in case of gap it is mandatory.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"If applicable father/Guardians death certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card for identify number of children in family.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Declaration certificate of parents/guardians about number of children beneficiaries.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select VJNT,OBC and SBC Welfare Department > Post Matric Scholarship to OBC Students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB02E984835E89FEFDB316E301CE6A991F41C5D42B01A7D7E',
    '022-49150800'
),
(
    'mahadbt-post-matric-scholarship-to-sbc-students',
    'mahadbt-post-matric-scholarship-to-sbc-students',
    'MAHADBT-303271466',
    'Post Matric Scholarship to SBC Students',
    'VJNT,OBC and SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '• Providing financial assistance for education.',
    '• Providing financial assistance for education.
• Creating a passion for higher education.
• Providing students the opportunity to go to the mainstream of education through education.
• Scholarship scheme to avoid transparency, co-ordination and delay.
• Benefits of Tuition Fees, Exam Fees and Maintenance Allowance are paid to only SBC category students.

Benefits:
Eligible SBC Applicants are paid maintenance allowance :
1) If Applicant select Course Group A - for hostlers Rs.425/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m. (Duration - Admission date to till exam completion date)
2) If Applicant select Course Group B - for hostlers Rs.290/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m.(Duration - Admission date to till exam completion date)
3) If Applicant select Course Group C - for hostlers Rs.290/p.m. & Day Scholars(Non Hostlers) Rs.190/p.m.(Duration - Admission date to till exam completion date)
4) If Applicant select Course Group D - for hostlers Rs.230/p.m. & Day Scholars(Non Hostlers) Rs.120/p.m. (Duration - Admission date to till exam completion date)
5) If Applicant select Course Group E - for hostlers Rs.150/p.m. & Day Scholars(Non Hostlers) Rs.90/p.m.(Duration - Admission date to till exam completion date)
6) Tuition Fee, Exam Fee and Maintenance allowance are paid 100% to applicants who’s studying in government/aided/unaided institutions in professional courses and non-professional courses.
7) If Applicant get admission in government hostel then he will eligible only 1/3rd amount of hostlers.
8) For B.Ed and D.Ed courses : 100 % benefit (Tuition Fees, Exam Fees and Maintenance Allowance) is applicable for D.Ed, B.Ed courses. For students studying in Aided, UnAided for D.Ed, B.Ed courses then Fee structure is applicable as per Government rates for same course
Note : If applicant takes an admission on or before 20th of any month should entitle date maintenance allowance will be issued for that current month. Other wise maintenance allowance will be entitle from next month.

Renewal Policy:
1) The Applicant have to pass the previous year examination.
2) In case of SBC if Applicant fails for a year then the Applicant is not paid any reimbursement for that particular year.
3) For Group A – If an applicant pursuing Group A course fails in the examination for the 1st time the award may be renewed. For second & sub sequent failure in any class the Applicant shall bear his / her own expenses until he / she secure promotion to the next higher class.
4) For Group B,C,D,E - he/she has to secure promotion to higher class(For second & sub sequent failure in any class the Applicant shall bear his / her own expenses until he / she secure promotion to the next higher class.).
5) If due to any medical condition or due to any unforeseeable event the Applicant cannot appear in the annual examination, the head master of the college can approve or certify that if the Applicant would have appeared in the annual examination, he would have been able to pass the examination. This will be only allowed if the head of the institution is satisfied by the submission of medical proof or any other required sufficient proof that the Applicant presents to the college.',
    24250,
    'Eligible SBC Applicants are paid maintenance allowance :',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'vjnt-obc-and-sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) The parents/Guardians annual Income should be less than or equal to Rs.2.50 Lac.","2) Applicants must be belongs to SBC category.","3) Applicants should be residents of Maharashtra.","4) Applicants must be pursuing the education course approved by the government from class Post-Matric.","5) If Applicant fails in particular year then he will get the Tuition Fees, Exam Fees and Maintenance allowance of that particular academic year but he/she will not get the benefit until he/she gets promoted to next higher class.","6) Applicant should be come through CAP round for only professional courses.","7) Only two children (i)any number of girls applicants allowed. ii) boys applicants maximum 2 of the same parent will be eligible for the Scholarship.","8) No scholarship will be paid to the Applicants under this scheme from the date he /she accepts another Scholarship / stipend.","9) 75 % attendance is mandatory for current year.","10) Applicant will be eligible for scholarship if he / she changes the course Non – Professional to Professional but he will not be eligible if he / she changes the course from Professional to Non – Professional.","11) Scholarships/freeship will continue until Applicant completes one course. Ex. - 11th, 12th Arts - B.A., M.A. , M.Phil., P.H.D. If, Applicant completed B.A and B.Ed. course and later after taking admission for M.A., for M.A. course He/she will not be allowed for scholarship/freeship. But after admission to M.B.A. after B.Ed, it can be eligible for scholarship/freeship as it is a professional postgraduate course.","12) Applicant studying in particular professional/Non-Professional course, and availing benefits of scholarship/freeship for that academic course and if he/she wants to change his existing Professional/Non-Professional course in between academic years he/she will not be eligible for freeship/scholarship for further course."]}'::jsonb,
    '[{"name":"Caste certificate - should be issued by competent authority(Issued by Govt. of Maharashtra) This certificate considered as Proof of Resident.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate / Income Declaration - should be issued by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate – (Mandatory for Professional Degree courses, Professional Post Graduate. For Non Professional courses caste validity is not mandatory)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"HSC or SSC marksheet or last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap certificate - Not mandatory but in case of gap it is mandatory.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"If applicable father/Guardians death certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card for identify number of children in family.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Declaration certificate of parents/guardians about number of children beneficiaries.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select VJNT,OBC and SBC Welfare Department > Post Matric Scholarship to SBC Students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ABD801C85A5E1070827B2230746448BA9CCB9B577565F338F',
    '022-49150800'
),
(
    'mahadbt-tuition-fees-and-examination-fees-to-obc-students',
    'mahadbt-tuition-fees-and-examination-fees-to-obc-students',
    'MAHADBT-399033041',
    'Tuition Fees and Examination Fees to OBC Students',
    'VJNT,OBC and SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '1)Create interest in education among students.',
    '1)Create interest in education among students.
2) Making financial assistance available for higher education.
3) Creating opportunities for financial growth through higher education.
4) Scholarship scheme to avoid transparency, unity and delay.
5) All types of compulsory fees such as Tuition fees, Exam Fees and other admissible fees are reimbursed to the concern OBC category student.

Benefits:
1) Tuition Fees and Exam Fees reimbursed to the concern Applicant vide Govt. Resolution dated 12/3/2007, since 2006-07 the Applicants who are admitted in professional courses through CAP round in the Govt., Govt. approved private non-aided and permanently non granted colleges are applicable to pay 50 % Tuition Fees & Exam Fees approved by Education Fee Committee.
2) As per the GR dt.8 ’th July 2024, 100 % benefit will be applicable for girl Applicant. Tuition Fee and Exam Fee are paid 100% to applicants who’s studying in government/aided institutions in professional courses.
3) Tuition Fee and Exam Fee are paid 50% to applicants who’s studying in non-government/unaided institutions in professional courses.
4) Also those applicants are taken admission in Deemed University for professional courses won’t get benefit of scholarship / freeship.
5) Start date of application is depending upon the applicant takes admission in college/Institute and End date of application is depend upon the last date of examination.(For 10 months - it will vary every academic year on admission date)
6) For OBC Applicants studying in private un-aided institutions, fees structure of government aided institutions will be applicable only for Non – Professional courses (Tuition Fees, Exam Fees and other Fees)

Renewal Policy:
1) Applicant need to provide previous years marksheet.
2) At a time Applicant can apply freeship for only one educational course and it will be applicable till he/she completes that educational course in specified time.
3) Applicant need to pass each year of the specified educational year [In case of failure in a particular year he/she wont be provided reimbursement of tuition fees, Exam fees for that year].
4) Applicant cannot take freeship for more than 2 professional courses.
5) If due to any medical condition or due to any unforeseeable event the Applicant cannot appear in the annual examination, the head master of the college can approve or certify that if the Applicant would have appeared in the annual examination, he would have been able to pass the examination. This will be only allowed if the head of the institution is satisfied by the submission of medical proof or any other required sufficient proof that the Applicant presents to the college.',
    50000,
    '1) Tuition Fees and Exam Fees reimbursed to the concern Applicant vide Govt. Resolution dated 12/3/2007, since 2006-07 the Applicants who are admitted in professional courses through CAP round in the Govt., Govt. approved private non-aided and permanently non granted colleges are applicable to pay 50 % Tuition Fees & Exam Fees approved by Education Fee Committee.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'vjnt-obc-and-sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) Applicant must be taking post matric education.","2) Applicant should be belongs to OBC category.","3) Applicants must be pursuing the education course approved by the government from Post - Matriccourse","4) Applicants must be residents of Maharashtra.","5) Applicant must be taken admission in government government aided / Private Non-Aided / Privatepermanently non aided courses.","6) Degree Courses in Health Science(Medical, Dental, Homeopathy, Unani, Ayurveda,Physiotherapy, Business Aid, Nursing) :","If Applicant is admitted through Association of Managements of Unaided Private Medical and Dental Colleges entrance examination or admitted through government common entrance examination then he/she will be eligible the for the freeship.","7) Higher and Technical Education Department :","Freeship will be applicable to unaided colleges / government and aided colleges with technical education / Polytechnic and government unaided professional courses.","Following are the applicable courses for this scheme :","a. Diploma – Engineering, Pharmacology, HMCT","b. Degree – Engineering, Pharmacology, HMCT","c. Post Graduate –MBA/MMS, MCA","8) Agriculture, Animal Husbandry and Dairy Development and Fisheries Department :","The scholarship fees will be applicable to the Applicants who have been admitted through government quota in private un aided/permanently un aided institute.","a. Agricultural colleges (diploma)","b. Dairy Business Department (Diploma)","c. Colleges for Agricultural and Allied subjects (Degree and Post Graduate)","d. Agriculture and Bio-Technology Colleges (Degree and Post Graduate)","e. Agriculture and Food Technology Colleges (Graduate and Post Graduate)","9)For B.Ed and D.Ed courses : 100 % benefit (Tuition Fees, Exam Fees) is applicable for D.Ed, B.Ed courses. For students studying in Aided, UnAided for D.Ed, B.Ed courses then Fee structure is applicable as per Government rates for same course.","10) For professional courses Applicant should admitted through CAP round is must.","11) If Applicant fails in particular year then he will get the Tuition Fees and Exam Fees of that particular academic year but he/she will not get the benefit until he/she gets promoted to next higher class.","12) Applicant will be eligible for scholarship if he / she changes the course Non – Professional to Professional but he will not be eligible if he / she changes the course from Professional to Non – Professional.","13) If an applicant pursuing professional course admitted in private un aided/permanently un aided institute for year 2015-16 onwards fails in the examination two or more times in particular academic course duration then he / she not eligible for the freeship.","14) Applicant studying in particular professional/Non-Professional course, and availing benefits of scholarship/freeship for that academic course and if he/she wants to change his existing Professional/Non-Professional course in between academic years he/she will not be eligible for freeship/scholarship for further course.","15) Scholarships/freeship will continue until Applicant completes one course. Ex. - 11th, 12th Arts - B.A., M.A. , M.Phil., P.H.D. If, Applicant completed B.A and B.Ed. course and later after taking admission for M.A., for M.A. course He/she will not be allowed for scholarship/freeship. But after admission to M.B.A. after B.Ed, it can be eligible for scholarship/freeship as it is a professional postgraduate course."]}'::jsonb,
    '[{"name":"Caste certificate- should be issued by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate / Non creamy layer certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"HSC or SSC marksheet or last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap certificate - Not mandatory but in case of gap it is mandatory.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Declaration certificate of parents/guardians about number of children beneficiaries.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"If applicable father death certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Allotment Letter (For Professional Courses)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate (For Professional Courses As Per GR Dated 31st July 2008) Exempted Professional courses to be identified","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration card for identify number of children’s in family","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select VJNT,OBC and SBC Welfare Department > Tuition Fees and Examination Fees to OBC Students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A19A7691F3B40AD4EE0F3DDA5DE324AC54819922BB3D36B63',
    '022-49150800'
),
(
    'mahadbt-tuition-fees-and-examination-fees-to-sbc-students',
    'mahadbt-tuition-fees-and-examination-fees-to-sbc-students',
    'MAHADBT-224694707',
    'Tuition Fees and Examination Fees to SBC Students',
    'VJNT,OBC and SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    '1) Create interest in education among students.',
    '1) Create interest in education among students.
2) Making financial assistance available for higher education.
3) Creating opportunities for financial growth through higher education.
4) Scholarship scheme to avoid transparency, unity and delay.
5) All types of compulsory fees such as Tuition fees, Exam Fees and other admissible fees are reimbursed to the concern SBC category student.

Benefits:
1) Tuition fees and Exam fees reimbursed to the concern Applicant vide Govt. Resolution dated 12/3/2007, since 2006-07 the Applicants who are admitted in professional courses through CAP round in the Govt., Govt. approved private, non-aided and permanently non granted colleges are applicable to pay 100 % Tuition Fees & Exam Fees approved by Education Fee Committee.
2) Also those applicants are taken admission in Deemed University for professional courses won’t get benefit of scholarship / freeship.
3) Start date of application is depending upon the applicant takes admission in college/Institute and End date of application is depend upon the last date of examination. (For 10 months - it will vary every academic year on admission date)

Renewal Policy:
1) Applicant need to provide previous years marksheet.
2) At a time Applicant can apply freeship for only one educational course and it will be applicable till he/she completes that educational course in specified time.
3) Applicant need to pass each year of the specified educational year[In case of failure in a particular year he/she wont be provided reimbursement of tuition fees, Exam fees for that year]. In any academic course maximum of 2 failures is allowed.
4) Applicant cannot take freeship for more than 2 professional courses.
5) If due to any medical condition or due to any unforeseeable event the Applicant cannot appear in the annual examination, the head master of the college can approve or certify that if the Applicant would have appeared in the annual examination, he would have been able to pass the examination. This will be only allowed if the head of the institution is satisfied by the submission of medical proof or any other required sufficient proof that the Applicant presents to the college.',
    50000,
    '1) Tuition fees and Exam fees reimbursed to the concern Applicant vide Govt. Resolution dated 12/3/2007, since 2006-07 the Applicants who are admitted in professional courses through CAP round in the Govt., Govt. approved private, non-aided and permanently non granted colleges are applicable to pay 100 % Tuition Fees & Exam Fees approved by Education Fee Committee.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'vjnt-obc-and-sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1) Applicant must be taking post matric education.","2) Applicant should be belongs to SBC Category.","3) Applicants must be residents of Maharashtra.","4) Applicants must be pursuing the education course approved by the government for Post Matric courses.","5) Applicant should be taken admission in government government aided / Private Non-Aided / private permanently non aided courses.","6) Degree Courses in Health Science(Medical, Dental, Homeopathy, Unani, Ayurveda, Physiotherapy, Business Aid, Nursing) :","If Applicant is admitted through Association of Managements of Unaided Private Medical and Dental Colleges entrance examination or admitted through government common entrance examination then he/she will be eligible the for the freeship.","7) Higher and Technical Education Department :","Freeship will be applicable to unaided colleges / government and aided colleges with technical education / Polytechnic and government unaided professional courses.","Following are the applicable courses for this scheme :","a) Diploma – Engineering, Pharmacology, HMCT","b) Degree – Engineering, Pharmacology, HMCT","c) Post Graduate –MBA/MMS, MCA","8) Agriculture, Animal Husbandry and Dairy Development and Fisheries Department :","The scholarship fees will be applicable to the Applicants who have been admitted through government quota in private un aided/permanently un aided institute.","a) Agricultural colleges (diploma)","b) Dairy Business Department (Diploma)","c) Colleges for Agricultural and Allied subjects (Degree and Post Graduate)","d) Agriculture and Bio-Technology Colleges (Degree and Post Graduate)","e) Agriculture and Food Technology Colleges (Graduate and Post Graduate)","9) For B.Ed and D.Ed courses : 100 % benefit (Tuition Fees, Exam Fees) is applicable for D.Ed, B.Ed courses. For students studying in Aided, UnAided for D.Ed, B.Ed courses then Fee structure is applicable as per Government rates for same course.","10) For professional courses Applicant should admitted through CAP round is must.","11) If Applicant fails in particular year then he will get the Tuition Fees and Exam Fees of that particular academic year but he/she will not get the benefit until he/she gets promoted to next higher class.","12) Applicant will be eligible for scholarship if he / she changes the course Non – Professional to Professional but he will not be eligible if he / she changes the course from Professional to Non – Professional.","13) If an applicant pursuing professional course admitted for year 2015-16 onwards fails in the examination two or more times in particular academic course duration then he / she not eligible for the freeship.","14) Scholarships/freeship will continue until Applicant completes one course. Ex. - 11th, 12th Arts - B.A., M.A. , M.Phil., P.H.D. If, Applicant completed B.A and B.Ed. course and later after taking admission for M.A., for M.A. course He/she will not be allowed for scholarship/freeship. But after admission to M.B.A. after B.Ed, it can be eligible for scholarship/freeship as it is a professional postgraduate course."]}'::jsonb,
    '[{"name":"Caste certificate- should be issued by competent authority","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate / Non Creamy layer Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"HSC or SSC marksheet or last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap certificate - Not mandatory but in case of gap it is mandatory.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Declaration certificate of parents/guardians about number of children beneficiaries.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"If applicable father death certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Allotment Letter (For Professional Courses)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate (For Professional Courses As Per GR Dated 31st July 2008) Exempted Professional courses to be identified","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration card for identify number of children’s in family","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select VJNT,OBC and SBC Welfare Department > Tuition Fees and Examination Fees to SBC Students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1D7F9196D9D63BED796B8715593324631CD0734AB93952ED',
    '022-49150800'
),
(
    'mahadbt-vocational-training-fee-reimbursement-for-the-obc-sebc-vjnt-sbc-welfare-dep',
    'mahadbt-vocational-training-fee-reimbursement-for-the-obc-sebc-vjnt-sbc-welfare-dep',
    'MAHADBT-1926052757',
    'Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students',
    'OBC, SEBC, VJNT & SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Vocational Training Fee reimbursement for the students belonging to OBC, SEBC, VJNT & SBC Category students and admitted to the seats under PPP scheme in Government ITIs and Private ITIs through Centralized Admission Process. They will avail Fee Reimbursement benefit only if they met the Scheme Criteria.',
    'Vocational Training Fee reimbursement for the students belonging to OBC, SEBC, VJNT & SBC Category students and admitted to the seats under PPP scheme in Government ITIs and Private ITIs through Centralized Admission Process. They will avail Fee Reimbursement benefit only if they met the Scheme Criteria.

Benefits:
80 % of (Private Institute Course Fee - Government Institute Course fee) for both SSC Pass and SSC fail category.

Renewal Policy:
1)The student have to be on roll in next year.
2) Attendance is As per DGT criteria.',
    50000,
    '80 % of (Private Institute Course Fee - Government Institute Course fee) for both SSC Pass and SSC fail category.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'obc--sebc--vjnt---sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1.Admission taken through PPP scheme in Government Skill Development Institute or Private Institute and admitted through central Online Admission Process.","2.No Fee reimbursement for Management Quota Admission","3.Student should belong to OBC, SEBC, VJNT & SBC Category and should provide caste certificate.","4.Overall Family Income should be Rs.8.00 lacs. Non Cremy layer certificate is required.","5.Orphan candidate requires Recommendation Letter.","6.Candidate should not have taken any benefit for course previously from Government or Private ITI.","7.Candidate should not have taken any benefit for training program sponsored by State / Central Government / Department / Local Body / Company or Corporation.","8.Domicile of Maharashtra.","9.Admission taken for DGT, New Delhi or MSCVT approved courses.","10.Benefit applicable to only 2 children","11.Attendance criteria is mandatory.","12.Candidate need to attend each semester /annual exam. If any medical emergency then after recommendation by institute Regional Joint Director should certify or recommend.","13.Non Satisfactory educational progress due to misconduct- Failure in academic year, not fulfilling attendance criteria if found then candidate will not be eligible for reimbursement."]}'::jsonb,
    '[{"name":"Aadhaar Card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet SSC /HSC","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year mark sheet for renewal","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate / declaration for business person","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Non creamy layer certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select OBC, SEBC, VJNT & SBC Welfare Department > Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6BF9C803E998CF7698D365C08C21682615495BBF3667A9D0',
    '022-49150800'
),
(
    'mahadbt-post-matric-scholarship-to-the-girls-belonging-to-other-backward-classes-ta',
    'mahadbt-post-matric-scholarship-to-the-girls-belonging-to-other-backward-classes-ta',
    'MAHADBT-257775043',
    'Post Matric Scholarship to the Girls Belonging to Other Backward Classes taking admission in Professional Courses',
    'OBC, SEBC, VJNT & SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student', 'women'],
    'Scholarship & Fee Waiver',
    'To provide financial assistance for education.',
    'To provide financial assistance for education.
To promote higher education among OBC girls.
To empower girls through education and bring them into the mainstream of society.
To implement a transparent and efficient scholarship process, avoiding delays and miscoordination.
Scholarship benefits include Tuition Fees, Examination Fees, and Maintenance Allowance for eligible OBC girl students.

Benefits:
Eligible OBC girl applicants are provided the following maintenance allowance:
Course Group Hostellers (per month) Day Scholars (per month)
Group A RS.425 RS.190
Group B RS.290 RS.190
Group C RS.290 RS.190
Group D RS.230 RS.120
Group E RS.150 RS.90
Duration: From the date of admission until the completion of the final exam.
As per GR dated 8th July 2024, 100% scholarship benefit is applicable for OBC girl applicants.
Full reimbursement of Tuition Fees, Exam Fees, and Maintenance Allowance is provided to girl students studying in government/aided institutions/non-government/unaided institutions in professional courses.
If a girl student is admitted to a government hostel, she will receive only 1/3rd of the hosteller’s maintenance allowance.
If a girl student changes her professional or non-professional course mid-academic year after availing the scholarship, she will not be eligible for benefits for the new course.
For B.Ed. and D.Ed. courses, 100% benefits (Tuition Fees, Exam Fees, and Maintenance Allowance) are applicable. In aided/unaided institutions, fee reimbursement will be as per government-approved rates.
Note: If a girl takes admission on or before the 20th of any month, maintenance allowance will be disbursed for that month. Otherwise, it will start from the next month.

Renewal Policy:
The applicant must pass the previous year’s examination.
In case of failure, no reimbursement will be paid for that year.
Group A Courses: If the applicant fails for the first time, the scholarship may be renewed. For subsequent failures, the applicant must bear her own expenses until promoted.
Group B, C, D, E Courses: The applicant must be promoted to the next class to continue receiving benefits. Subsequent failures will not be reimbursed.
In cases of medical emergencies or unforeseen events, if the head of the institution is satisfied with valid documentary proof (e.g., medical certificate), benefits may be continued.',
    24250,
    'Eligible OBC girl applicants are provided the following maintenance allowance:',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'obc--sebc--vjnt---sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"maxAnnualIncome":250000,"isWomenOnly":true,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["The annual family income should be less than or equal to RS.2.5 lakh.","Applicant must belong to the OBC category.","Applicant must be a resident of Maharashtra.","Applicant must be pursuing a professional course approved by the government.","If the applicant fails in any academic year, she will receive benefits only for that year, but not for the subsequent year until she is promoted to the next class.","Admission must be taken through the Centralized Admission Process (CAP) for professional courses.","Scholarship is allowed for all girl applicants, whereas a maximum of two boys from the same family can avail the scheme.","If the applicant accepts another scholarship or stipend, she will be ineligible under this scheme from that date.","Minimum 75% attendance is mandatory for the current academic year.","A girl applicant will remain eligible if she changes her course from Non-Professional to Professional. However, changing from Professional to Non-Professional makes her ineligible.","If the applicant changes her professional course during the academic year after availing benefits, she will not be eligible for further benefits."]}'::jsonb,
    '[{"name":"Caste Certificate issued by a competent authority (Govt. of Maharashtra) – also serves as residence proof.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income Certificate / Declaration issued by a competent authority.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate – Mandatory for Professional Degree and Postgraduate courses.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"HSC/SSC or last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap Certificate (mandatory only in case of academic gap).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Father’s/Guardian’s Death Certificate, if applicable.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card – To determine the number of children in the family.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Parent/Guardian Declaration Certificate – Stating the number of children availing the scholarship.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select OBC, SEBC, VJNT & SBC Welfare Department > Post Matric Scholarship to the Girls Belonging to Other Backward Classes taking admission in Professional Courses and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A20E2AADEC5FCAFCAA9EF15C9E7BE6DA49EFF8397D1CB5063',
    '022-49150800'
),
(
    'mahadbt-payment-of-tuition-fees-and-examination-fees-to-obc-girls-pursuing-professi',
    'mahadbt-payment-of-tuition-fees-and-examination-fees-to-obc-girls-pursuing-professi',
    'MAHADBT-283284675',
    'Payment of Tuition Fees and Examination Fees to OBC Girls Pursuing Professional Courses',
    'OBC, SEBC, VJNT & SBC Welfare Department, Government of Maharashtra',
    'State Government',
    ARRAY['student', 'women'],
    'Scholarship & Fee Waiver',
    'To create interest in education among students.',
    'To create interest in education among students.
To provide financial assistance for higher education.
To create opportunities for financial empowerment through education.
To implement a scholarship scheme that ensures transparency, uniformity, and avoids delays.
Reimbursement of all compulsory fees, such as Tuition Fees and Examination Fees, to eligible OBC girls.

Benefits:
As per the Government Resolution (GR) dated 8th July 2024, 100% Tuition and Examination Fees will be reimbursed to girl applicants studying in government/aided/non-government/unaided institutions offering professional courses.
Applicants admitted to Deemed Universities for professional courses are also eligible for freeship benefits.
The application start date depends on the applicant’s date of admission to the institution, while the end date depends on the final examination date. (The application window typically remains open for around 10 months and varies every academic year.)

Renewal Policy:
The applicant must provide the marksheet of the previous academic year.
The scheme is applicable to only one educational course at a time and is valid until completion of that course within the specified duration.
The applicant must pass every academic year. In case of failure, Tuition and Exam Fees will not be reimbursed for that year.
If the applicant is unable to appear for exams due to medical or unforeseen circumstances, the Head of the Institution can recommend fee reimbursement, provided sufficient medical or valid documentation is submitted and accepted.',
    100000,
    'As per the Government Resolution (GR) dated 8th July 2024, 100% Tuition and Examination Fees will be reimbursed to girl applicants studying in government/aided/non-government/unaided institutions offering professional courses.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'obc--sebc--vjnt---sbc-welfare-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"isWomenOnly":true,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["The applicant must be enrolled in a professional education course.","The applicant must belong to the OBC category.","The professional course must be approved by the government.","The applicant must be a resident of Maharashtra.","Admission must be taken in Government/Government Aided/Private Non-Aided/Permanently Non-Aided institutions.","For professional courses, admission through the CAP round is mandatory.","If the applicant fails in a particular academic year, she will receive the benefit for that year, but will not be eligible again until she is promoted to the next academic year.","If the applicant changes the course from professional to non-professional, she will become ineligible for the scheme."]}'::jsonb,
    '[{"name":"Caste Certificate – Issued by a competent authority.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income Certificate / Non-Creamy Layer Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"HSC or SSC Marksheet or the last examination marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap Certificate – Not mandatory, but required in case of an education gap.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Declaration by Parents/Guardians regarding the number of beneficiary children.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Allotment Letter – For professional course admissions.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste Validity Certificate – As per GR dated 31st July 2008 (applicable only to specific professional courses; exempted courses to be identified).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Leaving Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card – To identify the number of children in the family.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select OBC, SEBC, VJNT & SBC Welfare Department > Payment of Tuition Fees and Examination Fees to OBC Girls Pursuing Professional Courses and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A861D18FEEFAC4F5F6568CABC51F37B2D8E783259DE953673',
    '022-49150800'
),
(
    'mahadbt-rajarshri-chhatrapati-shahu-maharaj-fee-reimbursement-scheme',
    'mahadbt-rajarshri-chhatrapati-shahu-maharaj-fee-reimbursement-scheme',
    'MAHADBT-705703758',
    'Rajarshri Chhatrapati Shahu Maharaj Fee Reimbursement Scheme',
    'Directorate of Medical Education Research, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'The scheme provides course fee reimbursement for students applying for MBBS,BDS,BAMS,BHMS,BPTH,BOTH,B.SC Nursing, BUMS, BP & O, BASLP in government aided/Corporation/Private un-aided colleges.',
    'The scheme provides course fee reimbursement for students applying for MBBS,BDS,BAMS,BHMS,BPTH,BOTH,B.SC Nursing, BUMS, BP & O, BASLP in government aided/Corporation/Private un-aided colleges.
Beneficiary Category: EBC
Eligible Courses: MBBS, BDS, BAMS, BHMS, BPTH ,BOTH,B.SC Nursing, BUMS, BP & O, BASLP in government aided/Corporation/Private un-aided colleges.

Benefits:
50% fee reimbursement (tuition fee + exam fee) will be provided.',
    50000,
    '50% fee reimbursement (tuition fee + exam fee) will be provided.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-medical-education-research'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1. For MBBS/BDS and other courses candidates who''s Family''s annual income < Rs.8,00,000.","2. Candidates are eligible those who have taken an admission under General category and SEBC Category"]}'::jsonb,
    '[{"name":"Domicile Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"New applicants need to submit HSC and SSC marksheet","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate of Parents.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year''s marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Affidavit","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Aadhar card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Student''s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Father''s PAN card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mother''s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Medical Education Research > Rajarshri Chhatrapati Shahu Maharaj Fee Reimbursement Scheme and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A85D4A975C5D5142BC657258E23D57FBDAD7167545F0B41EF',
    '022-49150800'
),
(
    'mahadbt-dr-panjabrao-deshmukh-hostel-maintenance-allowance',
    'mahadbt-dr-panjabrao-deshmukh-hostel-maintenance-allowance',
    'MAHADBT-67683533',
    'Dr. Panjabrao Deshmukh Hostel Maintenance Allowance',
    'Directorate of Medical Education Research, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Students whose parent''s annual Income is below 800000 and Student whose parent''s are Marginal Land Holder and registered labour.',
    'Students whose parent''s annual Income is below 800000 and Student whose parent''s are Marginal Land Holder and registered labour.

Benefits:
Hostel maintenance allowance for student’s with annual income less than 8,00,000: Rs.3000 per year for Mumbai ,Pune ,Nagpur ,Aurangabad and Rs.2000 per year for other locations.(for 10months in a academic year).
Hostel maintenance allowance for student’s whose parents are Aplabhudharak shetkari/Registered Labourers : Rs.30,000 per year for Mumbai ,Pune ,Nagpur ,Aurangabad and Rs.20,000 per year for other locations(for 10months in a academic year).',
    30000,
    'Hostel maintenance allowance for student’s with annual income less than 8,00,000: Rs.3000 per year for Mumbai ,Pune ,Nagpur ,Aurangabad and Rs.2000 per year for other locations.(for 10months in a academic year).',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-medical-education-research'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["SC","OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["For Students who had taken admission for MBBS,BDS,BAMS,BHMS,BPTH,BOTH,B.SC Nursing ,BUMS, BP & O, BASLP in government aided/Corporation/Private un-aided colleges.","Family''s Annual income is less than equal to Rs.8,00,000 .","For students whose parents are Alpabhudharak Shetkari/registered labourers.","Hostel maintenance allowance for student''s with annual income less than 1, 00,000: Rs.3000 per year for Mumbai ,Pune ,Nagpur ,Aurangabad and Rs.2000 per year for other locations.(for 10months in a academic year).","Hostel maintenance allowance for student''s whose parents are Aplabhudharak shetkari/Registered Labourers : Rs.30,000 per year for Mumbai ,Pune ,Nagpur ,Aurangabad and Rs.20,000 per year for other locations(for 10months in a academic year).","Not applicable for students pursuing admission through management quota/Institute level.","Students who have taken hostel admission in Mumbai ,Pune ,Aurangabad ,Nagpur or other locations in Maharashtra.","Candidates are eligible those who have taken an admission under General category and SEBC Category"]}'::jsonb,
    '[{"name":"Domicile Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"New applicants need to submit HSC and SSC marksheet","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate of Parents.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year''s marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Affidavit","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Registered Labourers/aplabhudarak shetkari need to submit a proof letter approved from tahsildar /Income certificate of Parents.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Aadhar card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Student''s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Father''s PAN card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mother''s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Medical Education Research > Dr. Panjabrao Deshmukh Hostel Maintenance Allowance and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A154AF155ACB2A8B2FDDAB7A49A24E2B13EFE22C60B340852',
    '022-49150800'
),
(
    'mahadbt-education-fee-reimbursement-for-open-category-students-affected-due-to-sebc',
    'mahadbt-education-fee-reimbursement-for-open-category-students-affected-due-to-sebc',
    'MAHADBT-518889108',
    'Education Fee reimbursement for open category students affected due to SEBC and EWS reservation in medical and Dental colleges',
    'Directorate of Medical Education Research, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'The scheme provides course fee reimbursement for students applying for MBBS,BDS, Post Graduate Medical (MD/MS) in Private un-aided colleges.',
    'The scheme provides course fee reimbursement for students applying for MBBS,BDS, Post Graduate Medical (MD/MS) in Private un-aided colleges.
Beneficiary Category: OPEN
Eligible Courses: Eligible Courses: MBBS, BDS, Post Graduate Medical (MD/MS) in Private un-aided colleges.

Benefits:
Benefit Amount = Institute FRA approved fee (Private) – Government Institute approved fee will be provided.

Renewal Policy:
1. The student have to pass the previous year examination. ATKT will be allowed.
2. 50 % Attendance is mandatory for renewal.',
    50000,
    'Benefit Amount = Institute FRA approved fee (Private) – Government Institute approved fee will be provided.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-medical-education-research'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1. Applicant should belong to Open category. (Total 112 applicants are going to take benefit of this scheme)","2. Applicant should have taken admission through CAP.","3. No scholarship for Management Quota Admission.","4. No Income criteria check for this scheme.","5. Applicant should be domicile of Maharashtra.","6. Deemed university students are not applicable for this scheme.","7. Applicant should not have gap of 2 or more than 2 year in course duration.","9. Failure in academic year, misconduct, not fulfilling attendance criteria if found then candidate will not be eligible."]}'::jsonb,
    '[{"name":"Domicile Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"New applicants need to submit HSC and SSC marksheet","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year''s marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Aadhar card.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Student''s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Father''s PAN card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mother''s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Medical Education Research > Education Fee reimbursement for open category students affected due to SEBC and EWS reservation in medical and Dental colleges and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4B35AA6BF0E14F175519B3FFB55DBFB0420845CFD04D6FA5',
    '022-49150800'
),
(
    'mahadbt-reimbursement-of-tuition-fee-and-examination-fee-for-girls-under-rajarshri-',
    'mahadbt-reimbursement-of-tuition-fee-and-examination-fee-for-girls-under-rajarshri-',
    'MAHADBT-357330574',
    'Reimbursement of tuition fee and examination fee for girls under Rajarshri Chhatrapati Shahu Maharaj Tuition Fee Scholarship Scheme (100% Tuition Fee + Exam Fee)',
    'Directorate of Medical Education Research, Government of Maharashtra',
    'State Government',
    ARRAY['student', 'women'],
    'Scholarship & Fee Waiver',
    'The scheme provides course fee reimbursement for students applying for MBBS,BDS,BAMS,BHMS,BPTH,BOTH,B.SC Nursing, BUMS, BP & O, BASLP in government aided/Corporation/Private un-aided colleges. Beneficiary Category: EBC/OPEN',
    'The scheme provides course fee reimbursement for students applying for MBBS,BDS,BAMS,BHMS,BPTH,BOTH,B.SC Nursing, BUMS, BP & O, BASLP in government aided/Corporation/Private un-aided colleges. Beneficiary Category: EBC/OPEN
Eligible Courses: MBBS, BDS, BAMS, BHMS, BPTH ,BOTH,B.SC Nursing, BUMS, BP & O, BASLP in government aided/Corporation/Private un-aided colleges.

Benefits:
100% fee reimbursement (Tuition fee + Exam fee) will be provided.',
    100000,
    '100% fee reimbursement (Tuition fee + Exam fee) will be provided.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-medical-education-research'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"isWomenOnly":true,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1. For MBBS/BDS and other courses candidates who''s Family\\s annual income < Rs.8,00,000.","2. Candidates are eligible those who have taken an admission under General category and SEBC Category"]}'::jsonb,
    '[{"name":"Domicile Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"New applicants need to submit HSC and SSC marksheet","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate of Parents.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year''s marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Affidavit","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Aadhar card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Student''s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Father''s PAN card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mother''s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Medical Education Research > Reimbursement of tuition fee and examination fee for girls under Rajarshri Chhatrapati Shahu Maharaj Tuition Fee Scholarship Scheme (100% Tuition Fee + Exam Fee) and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A8813422C6527A70BC8F386DEBD6292C54D5D3E063C32F598',
    '022-49150800'
),
(
    'mahadbt-state-minority-scholarship-part-ii-dhe',
    'mahadbt-state-minority-scholarship-part-ii-dhe',
    'MAHADBT-676287352',
    'State Minority Scholarship Part II (DHE)',
    'Minority Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Post Matric- State Government scholarship for minority students studying in Arts, Commerce, Science, Law, Education Courses (part-2)',
    'Post Matric- State Government scholarship for minority students studying in Arts, Commerce, Science, Law, Education Courses (part-2)

Benefits:
( As Per GR Dated 14.10.2011)
Total annual course fee or 5000 whichever amount is less will be scholarship amount.',
    50000,
    '( As Per GR Dated 14.10.2011)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'minority-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","Minority"],"maxAnnualIncome":800000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["--( As Per GR Dated 14.10.2011)","1. Graduation and post-graduation can apply (arts/commerce/science/Law/Education)","2.Domicile of Maharashtra.","3.Income should be upto Rs.8 lakhs","4.Only 2000 applicants will be provided quota (freshers)","5. Maharashtrian Students studying Out of Maharashtra cannot apply for this scheme."]}'::jsonb,
    '[{"name":"previous year Marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"th year marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"current year fee receipt .","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"minority certificate self-declared.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"College bonafide certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Minority Development Department > State Minority Scholarship Part II (DHE) and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0D73B666D1DADFB476AD7228CCFCCECE862BCF76CF63E6DB',
    '022-49150800'
),
(
    'mahadbt-scholarship-scheme-for-state-minority-communities-pursuing-higher-professio',
    'mahadbt-scholarship-scheme-for-state-minority-communities-pursuing-higher-professio',
    'MAHADBT-1274984046',
    'Scholarship Scheme for State Minority Communities Pursuing Higher Professional Education/All Post H.S.C Courses.(Part-I{(Technical Course(DTE)}',
    'Minority Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'The objective of the Scheme is to provide financial assistance to the meritorious students belonging to Minority Communities ( Muslim , Buddhist, Christian , Sikh , Parsi , Jain & Jews Community ) to enable them to pursue Professional and Technical Courses.',
    'The objective of the Scheme is to provide financial assistance to the meritorious students belonging to Minority Communities ( Muslim , Buddhist, Christian , Sikh , Parsi , Jain & Jews Community ) to enable them to pursue Professional and Technical Courses.

Benefits:
• For Technical Course ( Part-I of GR ) –Scholarship Amount Maximum Rs.50,000/- Per Annum or Actual Tution Fees and Exam Fee whichever is less effective from AY 2022-23.',
    50000,
    '• For Technical Course ( Part-I of GR ) –Scholarship Amount Maximum Rs.50,000/- Per Annum or Actual Tution Fees and Exam Fee whichever is less effective from AY 2022-23.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'minority-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","Minority"],"maxAnnualIncome":800000,"minEducationLevel":"Class 10 / Matric","customRules":["a) Applicant should have Nationality of India.","b) Candidate should be Domicile of Maharashtra State.","c) Candidates should have pass SSC from Maharashtra State.","d) Applicant should be ”Bonafide Student of Institute” and admitted for Professional and Technical course (Diploma / Graduation / Post Graduation Degree) as mentioned in GR","e) Candidate should be admitted through Centralized Admission Process (CAP) / Institute Level.","f) Applicant should not avail any other scholarship/stipend.","g) The Total Annual Income of Family / Guardian should not be more than 8 Lakhs."]}'::jsonb,
    '[{"name":"a) Educational Certificate – S.S.C.(10th) & onwards.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"b) Income and Minority declaration – Affidavit on Non-Judicial Stamp Paper or Income certificate from the employer, if any. School leaving certificate can also be considered as Proof of Minority ) or Self Declaration.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"c) Proof of permanent residence: - Copy of Domicile Certificate/Election Card etc.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"d) For Renewal of Scholarship: - Income declaration and Mark Sheet of previous examination.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Minority Development Department > Scholarship Scheme for State Minority Communities Pursuing Higher Professional Education/All Post H.S.C Courses.(Part-I{(Technical Course(DTE)} and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2C489D8FEE1DE79D3D179EC97AB141825125A9561892EF10',
    '022-49150800'
),
(
    'mahadbt-minority-scholarship',
    'mahadbt-minority-scholarship',
    'MAHADBT-1100007089',
    'Minority Scholarship',
    'Minority Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'This scheme is belongs to Muslim, Buddha, Christian, Jain ,Sikh , Parsi , Jews religion.',
    'This scheme is belongs to Muslim, Buddha, Christian, Jain ,Sikh , Parsi , Jews religion.

Benefits:
Total annual course fee or Rs.50,000 whichever amount is less will be scholarship amount.',
    50000,
    'Total annual course fee or Rs.50,000 whichever amount is less will be scholarship amount.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'minority-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","Minority"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["For students who had taken admission from MBBS ,BDS ,BAMS ,BHMS ,BUMS, BPTH ,BOTH ,BASLP ,BP&O ,BSc Nursing ,MSc Nursing ,BPMT,OPTHALMIC ASST.,OPTOMETRY,PB BSc Nursing","and courses affiliated to Maharashtra university of health science, Nashik.","Family’s Annual Income less than equal to 8,00,000.","Admission to the course should be through CET/competitive exam/HSC marks obtained.","30%scholarship is reserved for girls. First list of 70% students (combined) is prepared and after that 30% girls scholarship will be selected which are not included in 70% list.","The person should be Domicile of Maharashtra.","If targeted amount of scholarship for particular minority community is not achieved then other minority community student’s scholarship can be included in it.","Also applicable for candidate studying outside Maharashtra, but he/she must be a domicile of Maharashtra/resident of Maharashtra since 15years.","If candidate is studying outside Maharashtra the following documents need to be submitted :","Letter from concerned council/Authority stating the institute is recognized.","Copy of FRA","Bonafide for current academic year"]}'::jsonb,
    '[{"name":"School leaving Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"New applicants need to submit HSC and SSC marksheet(Not applicable for renewal)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate of Parents/Form no 16.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"In income certificate/Affidavit it should be clear cut mentioned that candidate belongs to minority community.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile Certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Student’s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Father’s PAN card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mother’s PAN card (optional)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Aadhar card","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year''s marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"If candidate is studying outside Maharashtra the following documents need to be submitted :","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Letter from concerned council/Authority stating the institute is recognized.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Copy of FRA","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Bonafide for current academic year","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Minority Development Department > Minority Scholarship and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3DED9E25855FB26766A86AA048E5C167661433728284252E',
    '022-49150800'
),
(
    'mahadbt-scholarship-for-student-communities-pursuing-higher-and-professional-course',
    'mahadbt-scholarship-for-student-communities-pursuing-higher-and-professional-course',
    'MAHADBT-1877678498',
    'Scholarship for student communities pursuing higher and Professional Courses (MCAER)',
    'Minority Development Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'This scheme belongs to Muslim, Buddha, Christian, Jain, Sikh, Parsi, Jews religions.',
    'This scheme belongs to Muslim, Buddha, Christian, Jain, Sikh, Parsi, Jews religions.

Benefits:
Total annual course fee is Rs. 50,000, whichever amount is less will be the scholarship amount.',
    50000,
    'Total annual course fee is Rs. 50,000, whichever amount is less will be the scholarship amount.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'minority-development-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","Minority"],"maxAnnualIncome":800000,"minEducationLevel":"Class 10 / Matric","customRules":["a) Applicant should have Nationality of India.","b) Candidate should be Domicile of Maharashtra State.","c) Candidates should have pass SSC from Maharashtra State.","d) Applicant should be ”Bonafide Student of Institute” and admitted for Professional and Technical course (Graduation / Post Graduation Degree) as mentioned in GR.","e) Candidate should be admitted through Centralized Admission Process (CAP) / Institute Level.","f) Applicant should not avail any other scholarship/stipend.","g) The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.","h) Any two chilldrens from family will be alotted for a scheme."]}'::jsonb,
    '[{"name":"a) Educational Certificate – S.S.C.(10th)/ H.S.C(12th).& onwards.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"b) Income certificate of Parents/Form no.16","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"c) In income certificate/Affidavit it should be clear cut mentioned that candidate belongs to minority community.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"d) Proof of permanent residence: - Copy of Domicile Certificate/Election Card etc.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"e) For Renewal of Scholarship: - Income declaration and Mark Sheet of previous examination.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"f) Student Adhar card.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"g) Previous year’s marksheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"h) Copy of FRA","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Minority Development Department > Scholarship for student communities pursuing higher and Professional Courses (MCAER) and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A14D02B3B9D1B4C86EFDF20E447AB42D8B9E7FDA684F6DF59',
    '022-49150800'
),
(
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-scheme',
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-scheme',
    'MAHADBT-599052589',
    'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme',
    'Directorate of Art, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Under this scheme of Directorate of Art , scholarship is applicable for the economically weaker sections. The students family annual income limit is up to Rs. 8.00 lakh, those who have taken an admission for Professional courses which come Under Directorate of Art Government / Non- government aided/ Partially Aided – Unaided/Permanent Unaided College and Non-Agricultural Universities and Sub-Centers (Excluding Private Universities / Self-financed Private Universities).',
    'Under this scheme of Directorate of Art , scholarship is applicable for the economically weaker sections. The students family annual income limit is up to Rs. 8.00 lakh, those who have taken an admission for Professional courses which come Under Directorate of Art Government / Non- government aided/ Partially Aided – Unaided/Permanent Unaided College and Non-Agricultural Universities and Sub-Centers (Excluding Private Universities / Self-financed Private Universities).

Benefits:
A) Tuition Fees :-
Income Limit
Courses
Government
Non Government Aided
Partially Aided / UnAided
Permanent Unaided
Professional Courses
Up to Rs. 2.50 Lakh
Girl with professional course
100%
100%
100%
100%
Boy
100%
100%
50%
50%
2.50 Up to Rs. 8 Lakh
Girl with professional course
100%
100%
100%
100%
Boy
50%
50%
50%
50%
Non Professional Course
Up to Rs. 8 Lakh
Girl with non-professional course
100%
100%
100%
100%
Boy
100%
100%
100%
100%
B) Exam Fees :-
Professional Course
Girl with professional course
100%
Boy
50%
Non Professional Course
Girl with non-professional course
100%
Boy
100%

Renewal Policy:
1. Last year, students availed of scholarship can apply for the Renewal scholarship.
2. To Renew the application, student should use an application ID from the list published on website of Department- Directorate of Art.',
    20080,
    'A) Tuition Fees :-',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-art'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 7.10.2017 , 31.3.2018 & 07.08.2018 )","1. Applicant should be Domicile of Maharashtra and applicant belongs to Maharashtra State and Karnataka state border can apply for scheme.","2. Family annual income limit is upto Rs. 8.00 lakh.","3. As per Government Resolution first two children are eligible for scheme.","4. Candidate those who take admission under general category is eligible.","5. Applicant should not avail any other scholarship or stipend.","6. Students are not eligible who has taken an admission in Distance Education, virtual learning and part time courses.","7.During course, candidate should not have a gap of 2 years.","8 .Applicant should attempt every semester or annual exam."]}'::jsonb,
    '[{"name":"Students should submit domicile certificate issued by Authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Students should submit previous year Annual income certificate issued by Authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Related document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap Related Document(if Gap is there)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Family Declaration Certificate about two children’s.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Attendance Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Art > Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AF1EB6E005AF00CE987BDFC9C0AF5E19F88A435E8941B1D64',
    '022-49150800'
),
(
    'mahadbt-dr-punjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'mahadbt-dr-punjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'MAHADBT-118823490',
    'Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna',
    'Directorate of Art, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Under this scheme, scholarship is applicable for the economically weaker sections. The student’s those who have taken an admission for Professional courses which come Under Directorate of Art Government /Non-government aided/Partially Aided -Unaided/Permanent Unaided College and Non-Agricultural Universities and Sub-Centers (Excluding Private Universities / Self-financed Private Universities).',
    'Under this scheme, scholarship is applicable for the economically weaker sections. The student’s those who have taken an admission for Professional courses which come Under Directorate of Art Government /Non-government aided/Partially Aided -Unaided/Permanent Unaided College and Non-Agricultural Universities and Sub-Centers (Excluding Private Universities / Self-financed Private Universities).

Benefits:
A. Professional Courses :
Allowance Table
Quota
Sr.No.
Type
District Wise Quota
1
Student whose parents are Registered Labor/Alpabhudharak (Marginal Land Holder).
All Eligible Students
2
Student whose parent''s Annual Family income up to 1 Lakhs.
All Eligible Students
3
Student whose parent''s Annual Family income in between 1 Lakh to 8 Lakhs.
Set of 500 per district (33% reserved for Girls and as per course wise merit decided)
Sr. No
Allowance
Students pursuing higher education in cities including Mumbai city, Mumbai suburbs, Navi Mumbai, Thane, Pune, Pimpri Chinchwad and Nagpur
Students pursuing higher education in other revenue divisional cities and remaining C class municipal areas
Students pursuing higher education in other districts
Students pursuing higher education in Talukas
1
Food Allowance
32,000
28,000
25,000
23,000
2
Residence Allowance
20,000
15,000
12,000
10,000
3
Subsistence Allowance
8,000
8,000
6,000
5,000
Total Amount
60,000
51,000
43,000
38,000

Renewal Policy:
1. Last year, students availed scholarship, He/She can apply for the renewal Scholarship.
2. To Renew the application, the students should use an application ID, The list published onwebsite of Department- Directorate of Art.',
    50000,
    'A. Professional Courses :',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'directorate-of-art'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"maxAnnualIncome":800000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 7.10.2017 , 31.3.2018 & 07.08.2018 )","1. Applicant should be Domicile of Maharashtra.","2. For professional courses, Applicant should be a child of registered labor , child of Alpabhudarak or both as total annual income of family/ Guardian should not be more than 8 lakh.","3. Applicant should submit Family Annual Income Certificate.","4. As per Government Resolution first two children eligible for scheme.","5. Candidates are eligible those who have taken an admission under general category.","6. Applicant should be hosteller.(Govt/Private hostel/ Paying Guest/ Tenant.)","7. Applicant should not avail any other Nirvah Bhatta benefit.","8. During course, candidate should not have a gap of 2 years.","9. Applicant should attempt every semester or annual exam."]}'::jsonb,
    '[{"name":"Students should submit domicile certificate issued by Authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Registered labor certificate / Alpabudharak Certificate/ Family Annual Income Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Hosteller Document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Students should submit previous year Annual income certificate issued by Authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Related document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap Related Document(if Gap is there)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Family Declaration Certificate about two children’s.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Attendance Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Directorate of Art > Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A78ED7CE6EFC1BA66278D9242EB6BD70623E4341DD9200A3E',
    '022-49150800'
),
(
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-yojnaebc',
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-yojnaebc',
    'MAHADBT-151567877',
    'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)',
    'Maharashtra Council of Agriculture Education and Research (MCAER), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'The objective of the Scheme is to provide financial assistance to the Economic Backward Class who are admitted to Diploma / Degree / Postgraduate Professional & Non Professional courses through Centralized Admission Process (CAP).',
    'The objective of the Scheme is to provide financial assistance to the Economic Backward Class who are admitted to Diploma / Degree / Postgraduate Professional & Non Professional courses through Centralized Admission Process (CAP).

Benefits:
100 % of Tuition Fees and 100 % of Exam Fee.',
    50000,
    '100 % of Tuition Fees and 100 % of Exam Fee.',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'maharashtra-council-of-agriculture-education-and-research--mcaer-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"maxAnnualIncome":800000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["Eligibility Criteria: (As per the GR Dated 07th Oct 2017,01st March 2018, 31st March 2018) and 14th January 2019","a) Applicant should have Nationality of India.","b) Candidate should be Domicile of Maharashtra State.","c) Applicant should be ”Bonafide Student of Institute” and admitted for Professional & Non Professional and Technical course (Diploma / Graduation / Post Graduation Degree) as mentioned in GR 14th January 2019","d) Deemed University and Private university is not applicable","e) Candidate should be admitted through Centralized Admission Process (CAP).","f) Applicant should not avail any other scholarship/stipend.","g) For current Academic Year, Only 2 child from family are allowed for benefit of scheme.","h) The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.","i) Minimum 50 % attendance in previous semester (Exception for fresh admitted in College).","j) During course duration, candidate should not have a gap of 2 or more than 2 years.","k) Candidates are eligible those who have taken an admission under General category and SEBC Category"]}'::jsonb,
    '[{"name":"a) Mark sheet of 10th (S.S.C) & Onwards.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"b) Domicile Certificate of Maharashtra State.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"c) Family Annual Income certificate","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"d) Undertaking “In current year, not more than 2 beneficiary from family”.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"e) CAP Related document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"f) Proof of Biometric attendance (Interface UIDAI).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Maharashtra Council of Agriculture Education and Research (MCAER) > Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC) and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AF93663E6569EFD2493B74079C9D4BC045DDEC4D398AED1BA',
    '022-49150800'
),
(
    'mahadbt-dr-panjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'mahadbt-dr-panjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'MAHADBT-835635382',
    'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna',
    'Maharashtra Council Of Agriculture Education And Research (MCAER), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'This is a plan for students of government, government funded and non-affiliated colleges / polytechnics entering the vocational courses set by the government, whose students are certified by the competent authority, as a marginal farmers or whose parents are registered laborers.',
    'This is a plan for students of government, government funded and non-affiliated colleges / polytechnics entering the vocational courses set by the government, whose students are certified by the competent authority, as a marginal farmers or whose parents are registered laborers.

Benefits:
Allowance Table
Quota
Sr.No.
Type
District (Quota)
1
Student whose Parents are Small Land Holder Farmer / Registered Labour
All Eligible Students
2
Economically Backward Class Student (Annual Family Income - upto 1 Lakh)
All Eligible Students
3
Economically Backward Class Student (Annual Family Income - More than 1 Lakh to 8 Lakhs)
500 Students for Each District (33% Seats are reserved for Female Students, Professional Course-wise Merit)
Sr. No
Allowance
Students pursuing higher education in cities including Mumbai city, Mumbai suburbs, Navi Mumbai, Thane, Pune, Pimpri Chinchwad and Nagpur
Students pursuing higher education in other revenue divisional cities and remaining C class municipal areas
Students pursuing higher education in other districts
Students pursuing higher education in Talukas
1
Food Allowance
32,000
28,000
25,000
23,000
2
Residence Allowance
20,000
15,000
12,000
10,000
3
Subsistence Allowance
8,000
8,000
6,000
5,000
Total Amount
60,000
51,000
43,000
38,000',
    50000,
    'Allowance Table',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'maharashtra-council-of-agriculture-education-and-research--mcaer-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"maxAnnualIncome":800000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["Eligibility Criteria: (As per the GR Dated 07th Oct 2017, 22nd Feb 2018 , 01st March 2018, 18th June 2018 , 11th July 2019)","a) Applicant should have Nationality of India.","b) Candidate should be Domicile of Maharashtra State.","c) Applicant should be ”Bonafide Student of Institute” and admitted for Professional and Technical course (Diploma / Graduation / Post Graduation Degree) as mentioned in GR","d) Deemed University and Private university is not applicable","e) Candidate should be admitted through Centralized Admission Process (CAP).","f) Applicant should not avail any other scholarship/stipend.","g) For current Academic Year, Only 2 child from family are allowed for benefit of scheme.","h) The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.","i) Minimum 50 % attendance in previous semester (Exception for fresh admitted in College).","j) During course duration, candidate should not have a gap of 2 or more than 2 years.","k) Candidates are eligible those who have taken an admission under General category and SEBC Category"]}'::jsonb,
    '[{"name":"a) Mark sheet of 10th (S.S.C) & Onwards.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"b) Domicile Certificate of Maharashtra State.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"c) Register Labor Certificate / Alpabhudharak (Marginal Land Holder) Certificate ( In case of not a child of Alpabudharak or Registered Labour then family Annual Income Certificate ).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"d) Undertaking “In current year, not more than 2 beneficiary from family”.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"e) CAP Related document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"f) Hosteller documents ( In case of private hostel or Paying Guest, Agreement with owner will be required.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Maharashtra Council Of Agriculture Education And Research (MCAER) > Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADC627964D50030272270A16502AD36F854C3ED3BCB559D6B',
    '022-49150800'
),
(
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-yojna',
    'mahadbt-rajarshi-chhatrapati-shahu-maharaj-shikshan-shulkh-shishyavrutti-yojna',
    'MAHADBT-1472957542',
    'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna',
    'Maharashtra Animal and Fishery Sciences University(MAFSU), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'The objective of the Scheme is to provide financial assistance to the Economic Backward Class who are admitted to Diploma / Degree / Postgraduate Professional courses through Centralized Admission Process (CAP).',
    'The objective of the Scheme is to provide financial assistance to the Economic Backward Class who are admitted to Diploma / Degree / Postgraduate Professional courses through Centralized Admission Process (CAP).

Benefits:
B) Tuition Fees :-
Income Limit
Courses
Government
Non Government Aided
Partially Aided / UnAided
Permanent Unaided
Professional Courses
Up to Rs. 2.50 Lakh
Girl with professional course
100%
100%
100%
100%
Boy
100%
100%
50%
50%
2.50 Up to Rs. 8 Lakh
Girl with professional course
100%
100%
100%
100%
Boy
50%
50%
50%
50%
B) Exam Fees :-
Income Up to Rs. 8 Lakh
Professional Course
Girl with professional course
100%
Boy
50%',
    20080,
    'B) Tuition Fees :-',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'maharashtra-animal-and-fishery-sciences-university-mafsu-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"maxAnnualIncome":800000,"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As per the GR Dated 01st March 2018 - 07th October 2017 )","1. Applicant should have Nationality of India.","2. Candidate should be Domicile of Maharashtra State.","3. Applicant should be ”Bonafide Studentof Institute” and admitted for Professional and Technical course (Graduation / Post Graduation Degree) as mentioned in GR.","4. Deemed University and Private university is not applicable.","5. Candidate should be admitted through Centralized Admission Process (CAP).","6. Applicant should not avail any other scholarship/stipend.","7. For current Academic Year, Only 2 child from family are allowed for benefit of scheme.","8. The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.","9. Minimum 50 % attendance in previous semester (Exception for fresh admitted in College).","10.During course duration, candidate should not have a gap of 2 years.","11.Candidates are eligible those who have taken an admission under general category.","12.Applicant should attempt every semester or annual exam."]}'::jsonb,
    '[{"name":"Mark sheet of 12th(H.S.C) & Onwards.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile Certificate of Maharashtra State.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Family Annual Income certificate issued by authorized official.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Undertaking “In current year, not more than 2 beneficiary from family”.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"CAP Related document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Attendance Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Gap Related Documents (if Gap is there)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Maharashtra Animal and Fishery Sciences University(MAFSU) > Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AEA9BC48B6A7FC6028D83FB435163D2E3D6296333C81E963D',
    '022-49150800'
),
(
    'mahadbt-dr-panjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'mahadbt-dr-panjabrao-deshmukh-vasatigruh-nirvah-bhatta-yojna',
    'MAHADBT-948354206',
    'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna',
    'Maharashtra Animal and Fishery Sciences University(MAFSU), Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'This is a plan for students of government, government funded and non-affiliated colleges / polytechnics entering the vocational courses set by the government, whose students are certified by the competent authority, as a marginal farmers or whose parents are registered laborers.',
    'This is a plan for students of government, government funded and non-affiliated colleges / polytechnics entering the vocational courses set by the government, whose students are certified by the competent authority, as a marginal farmers or whose parents are registered laborers.

Benefits:
Allowance Table
Quota
Sr.No.
Type
District (Quota)
1
Student whose Parents are Small Land Holder Farmer / Registered Labour
All Eligible Students
2
Economically Backward Class Student (Annual Family Income - upto 1 Lakh)
All Eligible Students
3
Economically Backward Class Student (Annual Family Income - More than 1 Lakh to 8 Lakhs)
500 Students for Each District (33% Seats are reserved for Female Students, Professional Course-wise Merit)
Sr. No
Allowance
Students pursuing higher education in cities including Mumbai city, Mumbai suburbs, Navi Mumbai, Thane, Pune, Pimpri Chinchwad and Nagpur
Students pursuing higher education in other revenue divisional cities and remaining C class municipal areas
Students pursuing higher education in other districts
Students pursuing higher education in Talukas
1
Food Allowance
32,000
28,000
25,000
23,000
2
Residence Allowance
20,000
15,000
12,000
10,000
3
Subsistence Allowance
8,000
8,000
6,000
5,000
Total Amount
60,000
51,000
43,000
38,000',
    50000,
    'Allowance Table',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'maharashtra-animal-and-fishery-sciences-university-mafsu-'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["a). Applicant should have Nationality of India.","b). Candidate should be Domicile of Maharashtra State.","c). Applicant should be ”Bonafide Student of Institute” and admitted for Professional and Technical course (Graduation / Post Graduation Degree) as mentioned in GR.","d). Deemed University and Private university is not applicable.","e). Candidate should be admitted through Centralized Admission Process (CAP).","f). Applicant should not avail any other Maintenance Allowance Scheme.","g). For current Academic Year, Only 2 child from family are allowed for benefit of scheme.","h). Applicant should be child of Registered Labour or Child of Alpabhudharak or Both / Total Annual Income of Family / Guardian should not be more than 6 Lakhs.","i). Minimum 50 % attendance in previous semester (Exception for fresh admitted in College).","j). During course duration, candidate should not have a gap of 2 years.","k). Applicant should be Hosteller.","l). Should not avail maintenance allowance of any other scheme.","m). Candidates are eligible those who have taken an admission under general category.","n). Applicant should attempt every semester or annual exam."]}'::jsonb,
    '[{"name":"a). Mark sheet of 10th(S.S.C) & Onwards.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"b). Domicile Certificate of Maharashtra State.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"c). Register Labor Certificate / Alpabhudharak (Marginal Land Holder) Certificate ( In case of not a child of Alpabudharak or Registered Labour then family Annual Income Certificate ).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"d). Undertaking “In current year, not more than 2 beneficiaries from family”.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"e). CAP Related document.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"f). Hosteller documents (In case of private hostel or Paying Guest, Agreement with owner will be required.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"g). Attendance Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"h). Previous year Mark sheet.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"i). Gap Related Documents (if Gap is there)","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Maharashtra Animal and Fishery Sciences University(MAFSU) > Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AEB31D461DD8183B67F07C60D4AAAA2026FB7F4DCFD673D35',
    '022-49150800'
),
(
    'mahadbt-vocational-training-fee-reimbursement-for-the-students-belonging-to-sociall',
    'mahadbt-vocational-training-fee-reimbursement-for-the-students-belonging-to-sociall',
    'MAHADBT-208401579',
    'Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students',
    'Skill Development, Employement And Entrepreneurship Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Vocational Training Fee reimbursement for the students belonging to Socially and Educationally backward class and Open Category (Economically Weaker Section) students and admitted to the seats under PPP scheme in Government ITIs and Private ITIs through Centralized Admission Process. They will avail Fee Reimbursement benefit only if they met the Scheme Criteria.',
    'Vocational Training Fee reimbursement for the students belonging to Socially and Educationally backward class and Open Category (Economically Weaker Section) students and admitted to the seats under PPP scheme in Government ITIs and Private ITIs through Centralized Admission Process. They will avail Fee Reimbursement benefit only if they met the Scheme Criteria.

Benefits:
( As Per GR Dated 29.05.2019)
1. Family income above 2,50,000 to Less than or up to 8,00,000 Lakh then 80 % of (Private Institute Course Fee - Government Institute Course fee).
2. Family income Less than or equal to 2,50,000 then 100 % of (Private Institute Course Fee - Government Institute Course fee).',
    50000,
    '( As Per GR Dated 29.05.2019)',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'skill-development--employement-and-entrepreneurship-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["OBC","General","EWS"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["( As Per GR Dated 29.05.2019)","1. Admission taken through PPP scheme in Government Industrial Training Institute or Private Industrial Training Institute and admitted through central Online Admission Process.","2.No scholarship for Management Quota Admission.","3.Student should belong to OPEN Category and Economical Weaker Section (EWS).","4.Overall Family Income will be considered (Father + Mother Income)","5.Orphan candidate requires Recommendation Letter.","6.Candidate should not have taken any benefit for course previously from Government or Private ITI.","7.Candidate should not have taken any benefit for training program sponsored by State / Central Government / Department / Local Body / Company or Corporation.","8.Domicile of Maharashtra.","9.Admission taken for DGT, New Delhi or MSCVT approved courses.","10.Benefit applicable to only 2 children.","11.Attendance criteria is mandatory.","12.Candidate need to attend each semester /annual exam. If any medical emergency then after recommendation by institute Regional Joint Director should certify or recommend.","13.Non Satisfactory educational progress due to misconduct- Failure in academic year, not fulfilling attendance criteria if found then candidate will not be eligible for scholarship."]}'::jsonb,
    '[{"name":"Aadhaar Card.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Ration Card.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet SSC /HSC.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Previous year mark sheet for renewal.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income certificate competent authority.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Skill Development, Employement And Entrepreneurship Department > Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6CA0A2358C3CEC1D64ECE777FC5CDB517A5E9878CFC6ACBD',
    '022-49150800'
),
(
    'mahadbt-stipend-of-rs-500-per-month-for-trainees-in-craftsman-training-scheme-in-go',
    'mahadbt-stipend-of-rs-500-per-month-for-trainees-in-craftsman-training-scheme-in-go',
    'MAHADBT-185063292',
    'Stipend of Rs. 500 per month for trainees in Craftsman Training Scheme in Govt ITI',
    'Skill Development, Employement And Entrepreneurship Department, Government of Maharashtra',
    'State Government',
    ARRAY['student'],
    'Scholarship & Fee Waiver',
    'Training under the Craftsmen Training Scheme is provided in 419 GITI and 575 PITI in Maharashtra. As of the Government Resolution (GR) dated 07/05/1983, 50% of trainees in GITI were granted a stipend of either Rs. 40 or Rs. 60 per month. Despite the increasing inflation rate, there has been no adjustment in the stipend over the past 40 years. According to the State Employment and Entrepreneurship Exchange and Self Employment Institute Development (SEEID) GR dated 13/09/2023, a decision has been made to provide a stipend of Rs. 500/- per month to all trainees (including Open, OBC, SBC, EWS, VJ-A/DT, NT-B, NT- C, NT-D, SC, ST) at GITI starting from the 2023-2024 session.',
    'Training under the Craftsmen Training Scheme is provided in 419 GITI and 575 PITI in Maharashtra. As of the Government Resolution (GR) dated 07/05/1983, 50% of trainees in GITI were granted a stipend of either Rs. 40 or Rs. 60 per month. Despite the increasing inflation rate, there has been no adjustment in the stipend over the past 40 years. According to the State Employment and Entrepreneurship Exchange and Self Employment Institute Development (SEEID) GR dated 13/09/2023, a decision has been made to provide a stipend of Rs. 500/- per month to all trainees (including Open, OBC, SBC, EWS, VJ-A/DT, NT-B, NT- C, NT-D, SC, ST) at GITI starting from the 2023-2024 session.

Benefits:
Stipend 500/- Rs per month

Renewal Policy:
i) The student have to be on roll in next year.
ii) Attendance is As per DGT criteria.',
    50000,
    'Stipend 500/- Rs per month',
    'Active for Academic Year (Apply via MahaDBT Portal)',
    true,
    false,
    ARRAY['mahadbt', 'maharashtra', 'scholarship', 'state-government', 'skill-development--employement-and-entrepreneurship-department'],
    '{"allowedStates":["Maharashtra"],"isStudentOnly":true,"castes":["SC","OBC"],"minEducationLevel":"Post Matric / Higher Secondary","customRules":["1. The trainee should be domicile in Maharashtra.","2. The annual income should not exceed Rs. 8 lac. Future amendments made by the Government of Maharashtra (GoM) for non-creamy layer criteria will be applicable.","3. Only two siblings within a family are eligible for this benefit.","4. The benefit will be provided in two installments.","5. Maintaining an average of 80% attendance is mandatory.","6. For trainees enrolled in a 2-year duration trade, passing the first year is necessary.","7. SC trainees with an annual income of less than Rs. 2.5 lac are also eligible for the Post Matric Scholarship.","8. Trainees suspended or found non-eligible for the All India Trade Test (AITT) will not qualify.","9. Trainees who have left the GITI are not eligible from their date of departure.","10. Having an Aadhar-seeded savings bank account in a nationalized bank is mandatory.","11. Trainee registration on the MAHA-DBT portal is compulsory.","12. The scheme will be implemented exclusively through the MAHA-DBT portal.","13. Trainees in PITI are ineligible for this scheme."]}'::jsonb,
    '[{"name":"Required Documents As per GR","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Income Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Mark sheet (as per course criteria).","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Aadhaar Card.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Domicile Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Non Creamy Certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true},{"name":"Caste certificate.","description":"Original or certified copy required during online application on MahaDBT portal.","mandatory":true}]'::jsonb,
    '[{"stepNumber":1,"title":"Portal Registration","description":"Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar and mobile OTP."},{"stepNumber":2,"title":"Profile Creation","description":"Complete Personal, Address, Caste, Income, and Academic details in your student dashboard."},{"stepNumber":3,"title":"Scheme Selection & Apply","description":"Select Skill Development, Employement And Entrepreneurship Department > Stipend of Rs. 500 per month for trainees in Craftsman Training Scheme in Govt ITI and submit supporting documents."},{"stepNumber":4,"title":"Institute Verification","description":"College scrutiny officer verifies and submits application to Department scrutiny for sanction."}]'::jsonb,
    'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A8D6E1E4E8866EE600571B0A841AF768C93C24C5AEB049B3D',
    '022-49150800'
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    detailed_description = EXCLUDED.detailed_description,
    eligibility_criteria = EXCLUDED.eligibility_criteria,
    required_documents = EXCLUDED.required_documents,
    updated_at = NOW();