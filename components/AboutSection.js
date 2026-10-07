'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Check, 
  Award,
  Sparkles,
  Stethoscope,
  HeartHandshake
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="about" className="py-16 bg-white border-b border-slate-200 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black text-[#d31b26] uppercase tracking-widest block mb-1">
            20+ Years of Dedication &bull; Education - Healthcare - Service
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#004e70] tracking-tight">
            About Shristi Group of Institutes, Raipur
          </h2>
          <div className="w-20 h-1 bg-[#ffc20e] mx-auto mt-3"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
              activeTab === 'overview'
                ? 'bg-[#008fc6] text-white border-[#008fc6] shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'
            }`}
          >
            Overview & Profile
          </button>
          <button
            onClick={() => setActiveTab('facilities')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
              activeTab === 'facilities'
                ? 'bg-[#008fc6] text-white border-[#008fc6] shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'
            }`}
          >
            Key Facilities (सुविधाएँ)
          </button>
          <button
            onClick={() => setActiveTab('institutes')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
              activeTab === 'institutes'
                ? 'bg-[#008fc6] text-white border-[#008fc6] shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'
            }`}
          >
            Constituent Colleges
          </button>
          <button
            onClick={() => setActiveTab('welfare')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
              activeTab === 'welfare'
                ? 'bg-[#008fc6] text-white border-[#008fc6] shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'
            }`}
          >
            Free Education & Loan Scheme
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
              <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#004e70]">
                  20 Years of Service, Dedication & Healthcare Excellence
                </h3>
                <p>
                  <strong>Shristi Group of Institutes, Raipur</strong> is a premier and trusted educational landmark in Chhattisgarh, dedicated to nursing, pharmacy, and allied healthcare sciences. The core motto of the institute is <em>'Education • Healthcare • Service'</em> and <em>'Sarve Santu Niramayah'</em>.
                </p>
                <p>
                  To provide our students with the highest caliber of practical clinical exposure and bedside patient care experience, intensive clinical postings are conducted at Chhattisgarh's largest medical institution: <strong>Dr. Bhimrao Ambedkar Memorial Medical College Hospital (Raipur)</strong>, <strong>State Mental Hospital Sendri (Bilaspur)</strong>, and <strong>RINPAS (Ranchi, Jharkhand)</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white border-l-4 border-[#d31b26] rounded-lg shadow-sm text-xs font-semibold text-slate-800">
                    ✓ Approved by Indian Nursing Council (INC) & State Nursing Council
                  </div>
                  <div className="p-3 bg-white border-l-4 border-[#008fc6] rounded-lg shadow-sm text-xs font-semibold text-slate-800">
                    ✓ 100% Practical Training at Dr. B.R. Ambedkar Medical College Hospital
                  </div>
                  <div className="p-3 bg-white border-l-4 border-[#d31b26] rounded-lg shadow-sm text-xs font-semibold text-slate-800">
                    ✓ Fully Secured Separate Hostels for Boys & Girls
                  </div>
                  <div className="p-3 bg-white border-l-4 border-[#008fc6] rounded-lg shadow-sm text-xs font-semibold text-slate-800">
                    ✓ 100% Placement Support in CG, Pan-India & Abroad
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-[#004e70] to-[#00344d] text-white p-6 sm:p-7 rounded-2xl border-2 border-[#ffc20e] space-y-4 shadow-xl text-left">
                <div className="border-b border-white/20 pb-3">
                  <span className="text-[10px] font-bold text-[#ffc20e] uppercase tracking-widest block">Affiliation & Identity</span>
                  <h4 className="text-lg font-bold text-white">Shristi Group of Institutes Raipur</h4>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex justify-between pb-1 border-b border-white/10">
                    <span className="text-sky-200">Nursing College:</span>
                    <strong className="text-[#ffc20e]">Shristi Nursing College</strong>
                  </li>
                  <li className="flex justify-between pb-1 border-b border-white/10">
                    <span className="text-sky-200">Pharmacy College:</span>
                    <strong className="text-[#ffc20e]">Nupoor College of Pharmacy</strong>
                  </li>
                  <li className="flex justify-between pb-1 border-b border-white/10">
                    <span className="text-sky-200">Paramedical Programs:</span>
                    <strong className="text-white">Degree, Diploma & Certificate</strong>
                  </li>
                  <li className="flex justify-between pb-1 border-b border-white/10">
                    <span className="text-sky-200">IT & Management:</span>
                    <strong className="text-white">DCA, PGDCA, BBA</strong>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sky-200">Welfare Seats:</span>
                    <strong className="text-emerald-300">10 Free Seats for BPL / Orphans</strong>
                  </li>
                </ul>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-[#ffc20e] font-bold block">
                    Helpline: +91 88151 04383 / +91 88151 04390
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'facilities' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-left">
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h4 className="text-base font-bold text-[#004e70] mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#d31b26] text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>Clinical Practical Training (Hospital Rotations)</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <li>• Practical training at <strong>Dr. Bhimrao Ambedkar Memorial Medical College Hospital, Raipur</strong>.</li>
                  <li>• Specialized psychiatric training at <strong>State Mental Hospital Sendri, Bilaspur</strong>.</li>
                  <li>• Advanced mental healthcare training at <strong>Ranchi Institute of Neuro-Psychiatry & Allied Sciences (RINPAS), Ranchi</strong>.</li>
                </ul>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h4 className="text-base font-bold text-[#004e70] mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#008fc6] text-white text-xs flex items-center justify-center font-bold">2</span>
                  <span>Hostel, Education Loan & Placements</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <li>• Well-equipped <strong>Separate Hostels for Boys & Girls</strong> with full security and hygienic mess.</li>
                  <li>• <strong>Education Loan facility from Nationalized Banks</strong> for eligible students.</li>
                  <li>• <strong>100% Placement assistance</strong> across Chhattisgarh, major Indian hospitals, and abroad.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'institutes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-left">
              <div className="p-5 bg-white border-t-4 border-[#d31b26] rounded-xl shadow-sm">
                <span className="text-[10px] font-bold text-[#d31b26] uppercase tracking-widest block">Unit 1</span>
                <h4 className="text-lg font-bold text-[#004e70] mt-1">Shristi Nursing College</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Recognized by Indian Nursing Council (INC) & State Nursing Council. Offering B.Sc. Nursing, GNM, Post Basic B.Sc. Nursing, and M.Sc. Nursing with 100% practical hospital rotations.
                </p>
              </div>

              <div className="p-5 bg-white border-t-4 border-[#008fc6] rounded-xl shadow-sm">
                <span className="text-[10px] font-bold text-[#008fc6] uppercase tracking-widest block">Unit 2</span>
                <h4 className="text-lg font-bold text-[#004e70] mt-1">Nupoor College of Pharmacy</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Offering Diploma in Pharmacy (D. Pharmacy) equipped with modern pharmaceutical chemistry laboratories, pharmaceutics equipment, and drug testing facilities.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'welfare' && (
            <div className="p-6 bg-[#fff9e6] border-2 border-[#ffc20e] rounded-xl text-slate-800 font-sans space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d31b26] text-white flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#004e70]">Special Social Welfare & Free Education Scheme</h4>
                  <p className="text-xs font-bold text-[#d31b26]">BPL / Orphan / Naxal-Affected Students Policy</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                As per management guidelines, <strong>10 Seats in B.Sc. (Nursing) are completely FREE of tuition fees</strong> for wards of parents living Below Poverty Line (BPL), orphan candidates, and naxal-affected students.
              </p>
              <div className="pt-2 text-xs font-bold text-[#004e70]">
                ✓ Full assistance in obtaining Education Loans from Nationalized Banks for economically weaker section students.
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
