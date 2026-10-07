'use client';

import React from 'react';
import { 
  Hospital, 
  Activity, 
  Brain, 
  MapPin, 
  CheckCircle, 
  ShieldCheck 
} from 'lucide-react';

export default function ClinicalTraining() {
  const hospitals = [
    {
      name: 'Dr. Bhimrao Ambedkar Memorial Medical College Hospital',
      location: 'Raipur (Chhattisgarh)',
      type: 'Premier Tertiary Government Teaching Hospital',
      desc: 'The largest government multi-specialty medical college hospital in Chhattisgarh. Students undergo extensive bedside rotations in Emergency Trauma, Intensive Care Units (ICU/CCU/NICU), Modular Operation Theatres, and Inpatient Wards.',
      icon: Hospital,
      badge: 'Main Clinical Partner (Raipur)'
    },
    {
      name: 'State Mental Hospital (Sendri)',
      location: 'Bilaspur (Chhattisgarh)',
      type: 'Government Psychiatric Hospital',
      desc: 'Specialized state psychiatric institution providing rigorous practical training and clinical internships in Mental Health Nursing, Behavioral Sciences, and Psychiatric patient care management.',
      icon: Brain,
      badge: 'Psychiatric Training Center'
    },
    {
      name: 'Ranchi Institute of Neuro-Psychiatry & Allied Sciences (RINPAS)',
      location: 'Ranchi (Jharkhand)',
      type: 'National Neuro-Psychiatry Institute of Excellence',
      desc: 'One of the country\'s most prestigious neuro-psychiatric institutions. Students complete specialized hands-on postings in Clinical Neurology, Psychiatry, and advanced mental healthcare rehabilitation.',
      icon: Activity,
      badge: 'National Excellence (RINPAS)'
    }
  ];

  return (
    <section id="clinical-training" className="py-16 bg-[#0f172a] text-white relative overflow-hidden border-b-4 border-amber-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-900/80 text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-red-700/50">
            <Hospital className="w-3.5 h-3.5 text-amber-400" />
            <span>Practical Clinical Rotations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Associated Teaching Hospitals & Clinical Centers
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3"></div>
          <p className="text-slate-300 text-xs sm:text-sm mt-3">
            Ensuring 100% practical clinical competence and hands-on bedside experience at premier government medical and psychiatric hospitals.
          </p>
        </div>

        {/* 3 Hospital Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hospitals.map((hosp, idx) => {
            const Icon = hosp.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-700 hover:border-amber-400 p-6 rounded-xl transition-all shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-950 text-amber-300 border border-red-800 px-2.5 py-0.5 rounded">
                      {hosp.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-amber-300">
                      <MapPin className="w-3 h-3" />
                      <span>{hosp.location}</span>
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {hosp.name}
                  </h3>

                  <p className="text-xs text-slate-400 font-semibold mt-1">
                    {hosp.type}
                  </p>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {hosp.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>100% Practical Ward Training Certified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 100% Placement Callout from poster */}
        <div className="mt-10 bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 border border-amber-400/30 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                100% Placement Support Across Chhattisgarh, India & Overseas
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Backed by 20+ years of institutional reputation and strong clinical ties, our graduates are placed across leading super-specialty hospitals and healthcare organizations worldwide.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
