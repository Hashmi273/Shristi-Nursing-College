export const ALL_COURSES_DATA = [
  // 1. NURSING COURSES
  {
    id: 'nursing-bsc',
    category: 'nursing',
    title: 'B.Sc. (Nursing)',
    college: 'Shristi Nursing College',
    level: 'Degree (4 Years)',
    duration: '4 Years (Degree)',
    badge: '10 Seats Free for BPL/Orphans',
    eligibility: '10+2 with PCB (Physics, Chemistry, Biology) & English with min 45%.',
    desc: 'Comprehensive 4-year degree program with hands-on hospital rotations at Dr. B.R. Ambedkar Memorial Medical College Hospital Raipur.',
    features: ['Clinical ward rotations from 1st year', 'Special mental health posting at RINPAS Ranchi', 'Govt & Overseas Hospital Placement']
  },
  {
    id: 'nursing-gnm',
    category: 'nursing',
    title: 'GNM (General Nursing & Midwifery)',
    college: 'Shristi Nursing College',
    level: 'Diploma (3 Years)',
    duration: '3 Years (Diploma)',
    badge: 'High Demand',
    eligibility: '10+2 in any stream (Science / Arts / Commerce) with min 40%.',
    desc: '3-year foundational nursing and midwifery diploma preparing competent healthcare practitioners for hospitals and clinics.',
    features: ['Open to Science/Arts/Commerce pass students', 'General ward, ICU and maternity training', 'Direct pathway to Post Basic B.Sc Nursing']
  },
  {
    id: 'nursing-pb',
    category: 'nursing',
    title: 'Post Basic B.Sc. (Nursing)',
    college: 'Shristi Nursing College',
    level: 'Degree Upgrade (2 Years)',
    duration: '2 Years (Degree)',
    badge: 'Career Upgrade',
    eligibility: 'Passed GNM and registered nurse (RN/RM) with State Nursing Council.',
    desc: 'Exclusively for registered GNM nurses to upgrade their educational qualification to a full-fledged University Bachelor’s Degree.',
    features: ['Advanced clinical nursing & management', 'Eligible for Nursing In-charge & Tutor roles', 'Opens M.Sc Nursing eligibility']
  },
  {
    id: 'nursing-msc',
    category: 'nursing',
    title: 'M.Sc. (Nursing)',
    college: 'Shristi Nursing College',
    level: 'Postgraduate (2 Years)',
    duration: '2 Years (PG)',
    badge: 'Postgraduate Master',
    eligibility: 'B.Sc Nursing / Post Basic B.Sc with 1 year clinical experience.',
    desc: 'Postgraduate clinical master’s program for specialized clinical domains, teaching, research, and senior nursing administration.',
    features: ['Specialized Clinical Tracks', 'Assistant Professor & Lecturer eligibility', 'Thesis & hospital research guidance']
  },

  // 2. PHARMACY COURSES
  {
    id: 'pharm-d',
    category: 'pharmacy',
    title: 'D. Pharmacy (Diploma in Pharmacy)',
    college: 'Nupoor College of Pharmacy',
    level: 'Diploma (2 Years)',
    duration: '2 Years (Diploma)',
    badge: 'PCI Recognized',
    eligibility: '10+2 with Science (PCB / PCM).',
    desc: 'Approved diploma curriculum covering pharmaceutical chemistry, pharmacology, dispensing pharmacy, and drug store management.',
    features: ['Registered Pharmacist License Eligibility', 'Retail Drug Store License', 'Hospital Pharmacist Jobs']
  },

  // 3. PARAMEDICAL 3 YEAR DEGREE COURSES
  {
    id: 'para-bmlt',
    category: 'paramedical-3yr',
    title: 'BMLT (Bachelor in Medical Laboratory Technician)',
    college: 'Shristi Group of Institutes',
    level: 'Degree (3 Years)',
    duration: '3 Years (Degree)',
    badge: '3 Year Degree',
    eligibility: '10+2 with PCB.',
    desc: 'Degree program preparing senior medical lab technologists for diagnostic pathology and hospital labs.',
    features: ['Blood banking & Biochemistry diagnostics', 'Histopathology & Microbiology training', 'Hospital Diagnostic Centers']
  },
  {
    id: 'para-bsc-mlt',
    category: 'paramedical-3yr',
    title: 'B.Sc (MLT) - Medical Laboratory Technician',
    college: 'Shristi Group of Institutes',
    level: 'Degree (3 Years)',
    duration: '3 Years (Degree)',
    badge: '3 Year Degree',
    eligibility: '10+2 with PCB.',
    desc: 'Bachelor of Science in Medical Laboratory Technology with clinical pathology hospital internships.',
    features: ['Modern diagnostic equipment operations', 'Clinical chemistry & molecular diagnostics', '100% Lab Placement Support']
  },
  {
    id: 'para-bsc-opt',
    category: 'paramedical-3yr',
    title: 'B.Sc (OPT) - Optometry Technician',
    college: 'Shristi Group of Institutes',
    level: 'Degree (3 Years)',
    duration: '3 Years (Degree)',
    badge: '3 Year Degree',
    eligibility: '10+2 with Science (PCB/PCM).',
    desc: 'Bachelor degree in Vision Science and Optometry for eye hospitals and optical clinics.',
    features: ['Refraction & Vision testing procedures', 'Contact lens fitting & low vision aids', 'Eye hospital clinical rotations']
  },
  {
    id: 'para-bsc-dt',
    category: 'paramedical-3yr',
    title: 'B.Sc (DT) - Dialysis Technician',
    college: 'Shristi Group of Institutes',
    level: 'Degree (3 Years)',
    duration: '3 Years (Degree)',
    badge: 'Critical Care Speciality',
    eligibility: '10+2 with Science (PCB).',
    desc: 'Degree program training hemodialysis and peritoneal dialysis technicians for nephrology units.',
    features: ['Hemodialysis machine operation', 'Renal ICU & Kidney Care hospital training', 'High demand across multi-specialty hospitals']
  },
  {
    id: 'para-bsc-ot',
    category: 'paramedical-3yr',
    title: 'B.Sc (OT) - Ophthalmic Technician',
    college: 'Shristi Group of Institutes',
    level: 'Degree (3 Years)',
    duration: '3 Years (Degree)',
    badge: '3 Year Degree',
    eligibility: '10+2 with PCB.',
    desc: 'Specialized degree in ophthalmic assistance and eye surgery assisting techniques.',
    features: ['Ophthalmic surgery assistance', 'Visual acuity diagnostics & tonometry', 'Eye care institutions posting']
  },

  // 4. PARAMEDICAL 2 YEAR DIPLOMA COURSES
  {
    id: 'para-dmlt',
    category: 'paramedical-2yr',
    title: 'DMLT (Diploma in Medical Lab Technician)',
    college: 'Shristi Group of Institutes',
    level: 'Diploma (2 Years)',
    duration: '2 Years (Diploma)',
    badge: '2 Year Diploma',
    eligibility: '10+2 with Science stream.',
    desc: 'Two-year practical diploma in routine laboratory examinations, hematology, and clinical microscopy.',
    features: ['Pathology lab technician certification', 'Clinical training in Dr. Ambedkar Hospital', 'High employability']
  },
  {
    id: 'para-doa',
    category: 'paramedical-2yr',
    title: 'DOA (Diploma in Ophthalmic Assistant)',
    college: 'Shristi Group of Institutes',
    level: 'Diploma (2 Years)',
    duration: '2 Years (Diploma)',
    badge: '2 Year Diploma',
    eligibility: '10+2 with Science.',
    desc: 'Diploma in ophthalmic assistance for eye checkups and optometric clinic assistance.',
    features: ['Eye clinic assistance', 'Spectacle prescription procedures', 'Ophthalmic equipment care']
  },
  {
    id: 'para-ayurved-dip',
    category: 'paramedical-2yr',
    title: 'Diploma in Pharmacy (Ayurved)',
    college: 'Shristi Group of Institutes',
    level: 'Ayush Diploma (2 Years)',
    duration: '2 Years (Diploma)',
    badge: 'Ayurvedic Pharmacy',
    eligibility: '10+2 passed.',
    desc: 'Ayurvedic pharmacy formulations, herbs preparation, and natural medicine dispensing.',
    features: ['Ayurvedic hospital pharmacy', 'Herbal drug production units', 'Govt Ayush dispensary jobs']
  },
  {
    id: 'para-unani-dip',
    category: 'paramedical-2yr',
    title: 'Diploma in Pharmacy (Unani)',
    college: 'Shristi Group of Institutes',
    level: 'Ayush Diploma (2 Years)',
    duration: '2 Years (Diploma)',
    badge: 'Unani Pharmacy',
    eligibility: '10+2 passed.',
    desc: 'Traditional Unani formulation pharmacy diploma for certified Unani dispensaries.',
    features: ['Unani drug dispensing', 'Herbal formulation preparation', 'Ayush clinics assistance']
  },
  {
    id: 'para-homeo-dip',
    category: 'paramedical-2yr',
    title: 'Diploma in Pharmacy (Homeopathy)',
    college: 'Shristi Group of Institutes',
    level: 'Ayush Diploma (2 Years)',
    duration: '2 Years (Diploma)',
    badge: 'Homeopathic Pharmacy',
    eligibility: '10+2 passed.',
    desc: 'Homeopathic dilution preparation, potencies, and dispensary maintenance.',
    features: ['Homeopathic pharmacy operations', 'Homeopathy clinic technician', 'Drug dispensing']
  },

  // 5. PARAMEDICAL 1 YEAR CERTIFICATE COURSES
  {
    id: 'cert-mphw',
    category: 'paramedical-1yr',
    title: 'MPHW (Multipurpose Health Worker)',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    eligibility: '10th / 12th passed.',
    desc: 'Job-ready certificate course for primary healthcare assistance and community health workers.',
    features: ['Primary healthcare & first aid', 'Community vaccination campaigns', 'Govt health mission assistance']
  },
  {
    id: 'cert-cmlt',
    category: 'paramedical-1yr',
    title: 'CMLT (Certificate in Medical Lab Technician)',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    eligibility: '10th / 12th passed.',
    desc: 'Short-term medical laboratory sample handling and basic test technician training.',
    features: ['Basic pathology test procedures', 'Sample collection & phlebotomy', 'Clinic lab assistance']
  },
  {
    id: 'cert-ortho',
    category: 'paramedical-1yr',
    title: 'Certificate in Ortho & Dresser',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    eligibility: '10th / 12th passed.',
    desc: 'Wound dressing, plaster of paris (POP) application, and orthopedic patient support.',
    features: ['Plaster & traction assistance', 'Wound management & sterile dressings', 'Emergency trauma dressing']
  },
  {
    id: 'cert-cmrt',
    category: 'paramedical-1yr',
    title: 'CMRT (Certificate in X-RAY Technician)',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    eligibility: '10th / 12th passed.',
    desc: 'Radiation safety, X-ray machine positioning, and radiograph processing training.',
    features: ['Diagnostic X-Ray shooting', 'Darkroom & digital X-Ray imaging', 'Hospital radiology postings']
  },
  {
    id: 'cert-ott',
    category: 'paramedical-1yr',
    title: 'Certificate in OT Technician (OTT)',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    eligibility: '10th / 12th passed.',
    desc: 'Operation theatre sterilization, surgical instruments preparation, and surgeon assistance.',
    features: ['OT sterilization & fumigation', 'Surgical instrument tray setups', 'Anesthesia support']
  },
  {
    id: 'cert-ayur-comp',
    category: 'paramedical-1yr',
    title: 'Certificate in Ayurvedic Compounder',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    eligibility: '10th / 12th passed.',
    desc: 'Compounder training for Ayurvedic hospitals, clinics, and herbal dispensing centers.',
    features: ['Ayurvedic medicine mixing', 'Panchakarma assistance', 'Clinic compounder roles']
  },
  {
    id: 'cert-homeo-comp',
    category: 'paramedical-1yr',
    title: 'Certificate in Homeopathic Compounder',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    eligibility: '10th / 12th passed.',
    desc: 'Compounder certificate for homeopathic medicine dispensing and clinic support.',
    features: ['Homeopathic globules & drops dispensing', 'Clinic record keeping', 'Doctor assistance']
  },
  {
    id: 'cert-unani-comp',
    category: 'paramedical-1yr',
    title: 'Certificate in Unani Compounder',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    eligibility: '10th / 12th passed.',
    desc: 'Compounder training in Unani herbal medicines and clinic dispensary handling.',
    features: ['Unani compounder certification', 'Herbal dosage administration', 'Clinic assistance']
  },

  // 6. COMPUTER SCIENCE & MANAGEMENT
  {
    id: 'comp-dca',
    category: 'computer-mgmt',
    title: 'DCA (Diploma in Computer Applications)',
    college: 'Shristi Group of Institutes',
    level: 'Computer Diploma (1 Year)',
    duration: '1 Year (Diploma)',
    badge: 'IT Diploma',
    eligibility: '10+2 passed in any stream.',
    desc: 'Practical computer applications diploma covering MS Office, Database, Internet, and Tally.',
    features: ['Hospital IT & billing training', 'Office automation skills', 'Data entry & office management']
  },
  {
    id: 'comp-pgdca',
    category: 'computer-mgmt',
    title: 'PGDCA (Post Graduate Diploma in Computer Applications)',
    college: 'Shristi Group of Institutes',
    level: 'Postgraduate Diploma (1 Year)',
    duration: '1 Year (PG Diploma)',
    badge: 'PG IT Diploma',
    eligibility: 'Graduation in any stream.',
    desc: 'Advanced post-graduate computer programming, web applications, and database administration.',
    features: ['Govt job exam eligibility', 'Software & IT management', 'Advanced database handling']
  },
  {
    id: 'mgmt-bba',
    category: 'computer-mgmt',
    title: 'BBA (Bachelor of Business Administration)',
    college: 'Shristi Group of Institutes',
    level: 'Management Degree (3 Years)',
    duration: '3 Years (Degree)',
    badge: 'Management Degree',
    eligibility: '10+2 passed in any stream.',
    desc: 'Comprehensive undergraduate business management degree for corporate, healthcare, and administrative careers.',
    features: ['Healthcare & hospital administration scope', 'Marketing, HR & Finance principles', 'Leadership & business ethics']
  }
];
