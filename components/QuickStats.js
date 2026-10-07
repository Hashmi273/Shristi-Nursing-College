'use client';

import React from 'react';
import { Hospital, Award, Users, HeartHandshake } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      icon: Award,
      value: '20+ Years',
      label: 'Two Decades of Excellence',
      desc: 'Trusted and premier institution in Nursing, Pharmacy & Paramedical education.',
      borderColor: 'border-t-[#d31b26]'
    },
    {
      icon: Hospital,
      value: '3 Hospitals',
      label: 'Premier Clinical Postings',
      desc: 'Dr. B.R. Ambedkar Memorial Medical College, Bilaspur & RINPAS Ranchi.',
      borderColor: 'border-t-[#008fc6]'
    },
    {
      icon: Users,
      value: '100%',
      label: 'Placement Record',
      desc: '100% placement support across Chhattisgarh, major Indian hospitals & abroad.',
      borderColor: 'border-t-[#d31b26]'
    },
    {
      icon: HeartHandshake,
      value: '10 Seats Free',
      label: 'B.Sc. Welfare Scheme',
      desc: '10 free seats for BPL / Orphan / Naxal-affected candidates & bank loan assistance.',
      borderColor: 'border-t-[#ffc20e]'
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`bg-[#f0f9ff] hover:bg-white rounded-2xl p-6 border border-slate-200 border-t-4 ${stat.borderColor} shadow-sm hover:shadow-md transition-all flex items-start gap-4`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#008fc6]/10 text-[#008fc6] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#004e70] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
