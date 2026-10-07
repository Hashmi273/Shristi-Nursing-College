'use client';

import React from 'react';
import { 
  Briefcase, 
  Globe2, 
  Award, 
  TrendingUp, 
  Building2, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function PlacementsSection({ onOpenInquiry }) {
  const recruiters = [
    { name: 'Apollo Hospitals', tag: 'Pan-India Super Specialty' },
    { name: 'Fortis Healthcare', tag: 'Multi-City Tertiary Care' },
    { name: 'Max Healthcare', tag: 'Quaternary Healthcare Chain' },
    { name: 'Medanta - The Medicity', tag: 'Cardiology & Critical Care' },
    { name: 'Manipal Hospitals', tag: 'Academic Medical Network' },
    { name: 'Rainbow Children’s', tag: 'Pediatric & Neonatal Network' },
    { name: 'Narayana Health', tag: 'Cardiac & Multi-Specialty' },
    { name: 'UK NHS / Overseas Pathway', tag: 'Global Nursing Placement' },
  ];

  return (
    <section id="placements" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
            <Briefcase className="w-3.5 h-3.5 text-teal-400" />
            <span>Career Pathways & Employability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            100% Placement Record with Top Hospital Chains
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4">
            Our graduates are highly sought-after for their rigorous clinical training, immediate ward readiness, and compassionate patient care standards.
          </p>
        </div>

        {/* Highlight Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-black text-teal-300">100%</div>
            <div className="text-sm font-bold text-white mt-1">Placement Support</div>
            <p className="text-xs text-slate-400 mt-1">Dedicated Training & Placement Cell</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-black text-sky-300">₹4.2 - ₹8.5 LPA</div>
            <div className="text-sm font-bold text-white mt-1">Domestic Salary Packages</div>
            <p className="text-xs text-slate-400 mt-1">Super-Specialty Hospitals & Govt Posts</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl text-center">
            <div className="text-3xl sm:text-4xl font-black text-amber-300">UK, UAE & US</div>
            <div className="text-sm font-bold text-white mt-1">International Career Gateways</div>
            <p className="text-xs text-slate-400 mt-1">NCLEX-RN, CBT & OET/IELTS Training</p>
          </div>
        </div>

        {/* Recruiter Logos Grid */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 sm:p-10">
          <h3 className="text-center text-sm font-bold uppercase tracking-wider text-slate-400 mb-8">
            Major Placement Partners & Clinical Recruiters
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {recruiters.map((rec, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-700/80 hover:border-teal-400/50 p-4 rounded-xl text-center flex flex-col justify-center items-center transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-300 flex items-center justify-center mb-2 font-bold text-sm">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">{rec.name}</h4>
                <span className="text-[11px] text-slate-400 mt-1">{rec.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Exam Coaching Box */}
        <div className="mt-8 bg-gradient-to-r from-sky-900/90 to-teal-900/90 border border-sky-600/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-teal-300 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Integrated NORCET (AIIMS) & NCLEX Preparation</h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                Special weekend mock tests and guest lectures from AIIMS Nursing Officers to prepare final year students for top government and international exams.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenInquiry('Placement Inquiry')}
            className="whitespace-nowrap bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
          >
            Download Placement Report
          </button>
        </div>

      </div>
    </section>
  );
}
