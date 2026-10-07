'use client';

import React from 'react';
import { 
  Home, 
  Hospital, 
  CreditCard, 
  Globe2, 
  HeartHandshake, 
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function CampusLife() {
  const suvidhayein = [
    {
      title: '20+ Years of Academic Excellence',
      desc: 'Successfully running for over two decades as a reputable and leading institution in Nursing, Paramedical, Pharmacy, and allied healthcare education.',
      icon: Award,
      badge: '20+ Years Legacy'
    },
    {
      title: 'Clinical Rotations in Top Hospitals',
      desc: 'Hands-on clinical postings at Dr. Bhimrao Ambedkar Memorial Medical College Hospital (Raipur), State Mental Hospital (Bilaspur), and RINPAS (Ranchi).',
      icon: Hospital,
      badge: '3 Hospital Centers'
    },
    {
      title: '10 Free B.Sc. (Nursing) Seats',
      desc: '10 seats in B.Sc. (Nursing) are provided completely free of tuition fees for students from Below Poverty Line (BPL), orphan candidates, and naxal-affected families.',
      icon: HeartHandshake,
      badge: '10 Free Seats'
    },
    {
      title: 'Nationalized Bank Education Loan',
      desc: 'Comprehensive administrative assistance in securing low-interest Education Loans from Nationalized Banks for students belonging to economically weaker sections.',
      icon: CreditCard,
      badge: 'Education Loan'
    },
    {
      title: 'Separate Hostels for Boys & Girls',
      desc: 'Well-maintained, highly secured on-campus residential facilities with 24/7 warden supervision, security personnel, study areas, and hygienic dining mess.',
      icon: Home,
      badge: 'Separate Hostels'
    },
    {
      title: '100% Placement in India & Abroad',
      desc: 'Dedicated placement wing facilitating campus interviews and job placements across premier hospital chains in Chhattisgarh, all-India, and international gateways.',
      icon: Globe2,
      badge: '100% Placement'
    }
  ];

  return (
    <section id="facilities" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-heading font-black text-univ-maroon uppercase tracking-widest block mb-1">
            Institutional Facilities & Highlights
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-univ-navy">
            Why Choose Shristi Group of Institutes?
          </h2>
          <div className="w-24 h-1 bg-univ-gold mx-auto mt-3"></div>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-sans">
            Committed to holistic student growth, clinical mastery, strict discipline, and prosperous healthcare careers.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {suvidhayein.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-lg p-6 border border-slate-200 hover:border-univ-gold shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded bg-univ-maroon/10 group-hover:bg-univ-maroon text-univ-maroon group-hover:text-amber-200 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-white text-univ-navy border border-slate-300 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-univ-navy group-hover:text-univ-maroon transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Institutional Facility</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
