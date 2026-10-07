'use client';

import React, { useState } from 'react';
import NoticeTicker from '../components/NoticeTicker';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickStats from '../components/QuickStats';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import ClinicalTraining from '../components/ClinicalTraining';
import LabsSection from '../components/LabsSection';
import CampusLife from '../components/CampusLife';
import PlacementsSection from '../components/PlacementsSection';
import AdmissionForm from '../components/AdmissionForm';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { Sparkles, Phone, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedCourseForInquiry, setSelectedCourseForInquiry] = useState('B.Sc. (Nursing)');

  const handleOpenInquiry = (courseName) => {
    if (courseName && typeof courseName === 'string') {
      setSelectedCourseForInquiry(courseName);
    }
    setInquiryModalOpen(true);
  };

  const handleSelectCourse = (courseObj) => {
    setSelectedCourseForInquiry(courseObj.title);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* 1. Top Notice Bar */}
      <NoticeTicker onOpenInquiry={handleOpenInquiry} />

      {/* 2. Main Navigation Bar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry('General Inquiry')} />

      {/* 3. Hero Section */}
      <Hero onOpenInquiry={() => handleOpenInquiry('Hero CTA')} />

      {/* 4. Key Metric Counter Cards */}
      <QuickStats />

      {/* 5. About Group, Vision & Welfare Programs */}
      <AboutSection />

      {/* 6. All Academic Courses (Nursing, Pharmacy, Paramedical 1/2/3 Yr, IT/Mgmt) */}
      <CoursesSection
        onSelectCourse={handleSelectCourse}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 7. Clinical Practical Training Centers (Ambedkar Hospital Raipur, Bilaspur, RINPAS Ranchi) */}
      <ClinicalTraining />

      {/* 8. Special Facilities from Poster */}
      <CampusLife />

      {/* 9. Specialized Simulation & Science Labs */}
      <LabsSection />

      {/* 10. Official Admission Poster Showcase & Prospectus */}
      <section className="py-16 bg-slate-100 border-y border-slate-200 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-300 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-red-700" />
                <span>Official Admission Prospectus & Poster</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Shristi Group of Institutes Raipur &bull; Official Information Brochure
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Review the complete institutional profile, 20+ years track record, 20+ courses in Nursing, Pharmacy & Paramedical sciences, associated government hospital training, and 10 free B.Sc. Nursing seats.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/shristi-poster.jpg"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider shadow transition-all"
                >
                  <Download className="w-4 h-4 text-amber-300" />
                  <span>View / Download Official Poster</span>
                </a>
                <button
                  onClick={() => handleOpenInquiry('Official Poster Inquiry')}
                  className="inline-flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider shadow transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Contact Admission Desk</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative group max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200 bg-slate-900">
                <img
                  src="/shristi-poster.jpg"
                  alt="Shristi Group of Institutes Raipur Official Admission Poster"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. On-Page Admission Inquiry Form Section with Solid Dark Slate Background */}
      <section id="apply-now" className="py-16 bg-[#0f172a] text-white relative font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-red-900/60 text-rose-300 text-xs font-bold uppercase tracking-wider border border-red-700/50">
                Admissions & Counseling 2026-2027
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Secure Your Admission at Shristi Group of Institutes Raipur
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Take your first step towards a prestigious career in Nursing, Pharmacy, or Allied Healthcare. Submit your online counseling application below for prompt seat allocation and verification.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200 pt-1">
                <div className="flex items-center gap-3 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <div className="w-7 h-7 rounded-full bg-red-800 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                  <span>Fill the online application or visit our City Office in Raipur</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <div className="w-7 h-7 rounded-full bg-red-800 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                  <span>Complete document verification & academic counseling</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <div className="w-7 h-7 rounded-full bg-red-800 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                  <span>Avail Nationalized Bank Education Loan & scholarship benefits</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-amber-300">
                📞 Direct Admission Helplines: <strong className="text-white font-bold text-sm">+91 88151 04383 / +91 88151 04390</strong>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AdmissionForm defaultCourse="B.Sc. (Nursing)" />
            </div>

          </div>
        </div>
      </section>

      {/* 12. Placements & Employability Record */}
      <PlacementsSection onOpenInquiry={() => handleOpenInquiry('Placement Desk')} />

      {/* 13. Student & Alumni Testimonials */}
      <Testimonials />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Comprehensive Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry('Footer CTA')} />

      {/* Floating Modal for Admission Inquiry */}
      <AdmissionForm
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultCourse={selectedCourseForInquiry}
      />

    </main>
  );
}
