'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen,
  FileText,
  Building
} from 'lucide-react';

export const ALL_COURSES_DATA = [
  // 1. NURSING COURSES (Yellow / Red Badges from Poster)
  {
    id: 'nursing-bsc',
    category: 'nursing',
    title: 'B.Sc. (Nursing)',
    college: 'Shristi Nursing College',
    level: 'Degree (4 Years)',
    duration: '4 Years (Degree)',
    badge: '10 Seats Free for BPL/Orphans',
    badgeBg: 'bg-[#ffc20e] text-[#004e70]',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#ffc20e] text-[#004e70]',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
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
    badgeBg: 'bg-[#ffc20e] text-[#004e70]',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
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
    badgeBg: 'bg-[#ffc20e] text-[#004e70]',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
    eligibility: 'B.Sc Nursing / Post Basic B.Sc with 1 year clinical experience.',
    desc: 'Postgraduate clinical master’s program for specialized clinical domains, teaching, research, and senior nursing administration.',
    features: ['Specialized Clinical Tracks', 'Assistant Professor & Lecturer eligibility', 'Thesis & hospital research guidance']
  },

  // 2. PHARMACY COURSES (Yellow Header from Poster)
  {
    id: 'pharm-d',
    category: 'pharmacy',
    title: 'D. Pharmacy (Diploma in Pharmacy)',
    college: 'Nupoor College of Pharmacy',
    level: 'Diploma (2 Years)',
    duration: '2 Years (Diploma)',
    badge: 'PCI Recognized',
    badgeBg: 'bg-[#ffc20e] text-[#004e70]',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
    eligibility: '10+2 with Science (PCB / PCM).',
    desc: 'Approved diploma curriculum covering pharmaceutical chemistry, pharmacology, dispensing pharmacy, and drug store management.',
    features: ['Registered Pharmacist License Eligibility', 'Retail Drug Store License', 'Hospital Pharmacist Jobs']
  },

  // 3. PARAMEDICAL 3 YEAR DEGREE COURSES (Red Box 3 from Poster)
  {
    id: 'para-bmlt',
    category: 'paramedical-3yr',
    title: 'BMLT (Bachelor in Medical Laboratory Technician)',
    college: 'Shristi Group of Institutes',
    level: 'Degree (3 Years)',
    duration: '3 Years (Degree)',
    badge: '3 Degree Paramedical',
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badge: '3 Degree Paramedical',
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badge: '3 Degree Paramedical',
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badge: '3 Degree Paramedical',
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
    eligibility: '10+2 with PCB.',
    desc: 'Specialized degree in ophthalmic assistance and eye surgery assisting techniques.',
    features: ['Ophthalmic surgery assistance', 'Visual acuity diagnostics & tonometry', 'Eye care institutions posting']
  },

  // 4. PARAMEDICAL 2 YEAR DIPLOMA COURSES (Blue Box 2 from Poster)
  {
    id: 'para-dmlt',
    category: 'paramedical-2yr',
    title: 'DMLT (Diploma in Medical Lab Technician)',
    college: 'Shristi Group of Institutes',
    level: 'Diploma (2 Years)',
    duration: '2 Years (Diploma)',
    badge: '2 Diploma Paramedical',
    badgeBg: 'bg-[#008fc6] text-white',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
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
    badge: '2 Diploma Paramedical',
    badgeBg: 'bg-[#008fc6] text-white',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
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
    badgeBg: 'bg-[#008fc6] text-white',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
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
    badgeBg: 'bg-[#008fc6] text-white',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
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
    badgeBg: 'bg-[#008fc6] text-white',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
    eligibility: '10+2 passed.',
    desc: 'Homeopathic dilution preparation, potencies, and dispensary maintenance.',
    features: ['Homeopathic pharmacy operations', 'Homeopathy clinic technician', 'Drug dispensing']
  },

  // 5. PARAMEDICAL 1 YEAR CERTIFICATE COURSES (Red Box 1 from Poster)
  {
    id: 'cert-mphw',
    category: 'paramedical-1yr',
    title: 'MPHW (Multipurpose Health Worker)',
    college: 'Shristi Group of Institutes',
    level: 'Certificate (1 Year)',
    duration: '1 Year (Certificate)',
    badge: '1 Year Certificate',
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
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
    badgeBg: 'bg-[#d31b26] text-white',
    btnBg: 'bg-[#d31b26] hover:bg-[#a3111a]',
    eligibility: '10th / 12th passed.',
    desc: 'Compounder training in Unani herbal medicines and clinic dispensary handling.',
    features: ['Unani compounder certification', 'Herbal dosage administration', 'Clinic assistance']
  },

  // 6. COMPUTER SCIENCE & MANAGEMENT (Yellow Box from Poster)
  {
    id: 'comp-dca',
    category: 'computer-mgmt',
    title: 'DCA (Diploma in Computer Applications)',
    college: 'Shristi Group of Institutes',
    level: 'Computer Diploma (1 Year)',
    duration: '1 Year (Diploma)',
    badge: 'Computer Science',
    badgeBg: 'bg-[#ffc20e] text-[#004e70]',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
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
    badge: 'Computer Science',
    badgeBg: 'bg-[#ffc20e] text-[#004e70]',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
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
    badgeBg: 'bg-[#ffc20e] text-[#004e70]',
    btnBg: 'bg-[#008fc6] hover:bg-[#006c96]',
    eligibility: '10+2 passed in any stream.',
    desc: 'Comprehensive undergraduate business management degree for corporate, healthcare, and administrative careers.',
    features: ['Healthcare & hospital administration scope', 'Marketing, HR & Finance principles', 'Leadership & business ethics']
  }
];

export default function CoursesSection({ onSelectCourse, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'nursing', label: 'Nursing Courses' },
    { id: 'pharmacy', label: 'Pharmacy (D.Pharm)' },
    { id: 'paramedical-3yr', label: '3-Year Degree Paramedical' },
    { id: 'paramedical-2yr', label: '2-Year Diploma Paramedical' },
    { id: 'paramedical-1yr', label: '1-Year Certificate Courses' },
    { id: 'computer-mgmt', label: 'Computer Science & BBA' },
  ];

  const filteredCourses = activeTab === 'all' 
    ? ALL_COURSES_DATA 
    : ALL_COURSES_DATA.filter(c => c.category === activeTab);

  return (
    <section id="courses" className="py-16 bg-[#f0f9ff] border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black text-[#d31b26] uppercase tracking-widest block mb-1">
            Academic Programs &bull; Session 2026-2027
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#004e70] tracking-tight">
            Approved Academic Programs Offered
          </h2>
          <div className="w-20 h-1 bg-[#ffc20e] mx-auto mt-3"></div>
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Recognized by Indian Nursing Council (INC) New Delhi, State Government, Pharmacy Council of India, and State Medical University.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
                activeTab === cat.id
                  ? 'bg-[#008fc6] text-white border-[#008fc6] shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Academic Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#008fc6] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group text-left"
            >
              {/* Card Header with poster badge colors */}
              <div className="bg-[#f8fafc] border-b border-slate-100 p-4 flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${course.badgeBg}`}>
                  {course.badge}
                </span>
                <span className="text-[11px] font-bold text-slate-600">
                  {course.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#008fc6] transition-colors">
                  {course.title}
                </h3>
                <span className="text-xs font-bold text-[#d31b26] block">
                  {course.college}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {course.desc}
                </p>

                {/* Eligibility Box */}
                <div className="p-3 bg-[#f0f9ff] border border-sky-100 rounded-xl text-xs">
                  <strong className="text-slate-800 block text-[11px] uppercase tracking-wider font-bold mb-0.5">
                    Eligibility Criteria:
                  </strong>
                  <span className="text-slate-600 leading-snug">{course.eligibility}</span>
                </div>

                {/* Key Features */}
                <div className="space-y-1 pt-1">
                  {course.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-4 bg-[#f8fafc] border-t border-slate-100">
                <button
                  onClick={() => {
                    onSelectCourse(course);
                    onOpenInquiry(course.title);
                  }}
                  className={`w-full text-white font-extrabold text-xs uppercase tracking-wider py-3 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md ${course.btnBg}`}
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Free Seats Banner matching poster Red box */}
        <div className="mt-12 bg-[#d31b26] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-white/20">
          <div className="space-y-1 text-center md:text-left">
            <span className="bg-[#ffc20e] text-[#004e70] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
              Special Welfare Scheme
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              10 Free B.Sc. Nursing Seats for BPL / Orphan / Naxal-Affected Students
            </h4>
            <p className="text-xs sm:text-sm text-amber-100 font-sans">
              10 seats in B.Sc. (Nursing) are completely free of tuition fees with nationalized bank education loan guidance.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Free B.Sc Scheme')}
            className="bg-[#ffc20e] hover:bg-white text-[#004e70] font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow whitespace-nowrap transition-all"
          >
            Apply for Free Seat &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
