'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Which colleges and courses are offered under Shristi Group of Institutes, Raipur?',
      a: 'The group operates Shristi Nursing College (offering B.Sc. Nursing, GNM, Post Basic B.Sc. Nursing, M.Sc. Nursing), Nupoor College of Pharmacy (offering D. Pharmacy), and various 1, 2, and 3-year Paramedical programs (BMLT, DMLT, OTT, X-Ray, Optometry, Dialysis, MPHW) and IT/Management courses (DCA, PGDCA, BBA).'
    },
    {
      q: 'Where do students undergo practical clinical and hospital rotations?',
      a: 'Students undergo comprehensive practical clinical postings at Chhattisgarh\'s largest tertiary care government hospital — Dr. Bhimrao Ambedkar Memorial Medical College Hospital (Raipur), State Mental Hospital Sendri (Bilaspur), and the prestigious RINPAS (Ranchi, Jharkhand) for neuro-psychiatric clinical training.'
    },
    {
      q: 'What is the welfare scheme for BPL, Orphan, and Naxal-affected students?',
      a: 'As part of our institutional social responsibility, 10 seats in B.Sc. (Nursing) are completely free of tuition fees (as per management norms) for students from Below Poverty Line (BPL) families, orphan candidates, and students affected by naxal violence.'
    },
    {
      q: 'Does the institute provide Education Loan assistance from banks?',
      a: 'Yes, full administrative and documentation assistance is provided to candidates from economically weaker sections to avail student education loans from Nationalized Banks.'
    },
    {
      q: 'Are separate hostel facilities available for outstation boys and girls?',
      a: 'Yes, the campus provides fully secured, well-disciplined separate hostels for boys and girls equipped with 24/7 security personnel, warden supervision, study halls, and clean dining mess facilities.'
    },
    {
      q: 'What are the official address and contact details for admissions?',
      a: 'You can visit our City Office at Bangali Kali Badi Samiti Campus, Beside SBI ATM, Kali Badi Chowk, Raipur (Phone: +91 88151 04383 / +91 88151 04390) or the Main College Campus at Village Rakhi, Post Khorpa, Block Abhanpur, Old Dhamtari Road, Near Bharenga Bhatha Chowk, Raipur (C.G.) - 493661.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-heading font-black text-univ-maroon uppercase tracking-widest block mb-1">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-univ-navy">
            Admissions & Student Queries
          </h2>
          <div className="w-24 h-1 bg-univ-gold mx-auto mt-3"></div>
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Find answers to commonly asked questions regarding admissions, hospital rotations, hostels, and scholarship schemes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-300 rounded-lg overflow-hidden transition-all bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading font-bold text-slate-900 hover:text-univ-maroon transition-colors text-xs sm:text-sm"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-univ-maroon' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
