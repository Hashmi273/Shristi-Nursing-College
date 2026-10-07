'use client';

import React from 'react';
import { Star, Quote, Award, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ritu Deshmukh',
      role: 'Staff Nurse at Apollo Super-Specialty, Hyderabad',
      batch: 'B.Sc. Nursing (Batch 2021-25)',
      imageText: 'RD',
      text: 'The 750-bed parent hospital rotations gave me real clinical confidence from day one. I was exposed to ICU, ventilators, and emergency trauma protocols before graduation, which made clearing the hospital interview so easy!'
    },
    {
      name: 'Aman Verma',
      role: 'Nursing Officer at AIIMS (NORCET Qualified)',
      batch: 'B.Sc. Nursing (Batch 2020-24)',
      imageText: 'AV',
      text: 'The faculties at Apex College of Nursing are dedicated and supportive. The college provided specialized weekend coaching for NORCET and state competitive exams, which helped me secure a central government posting.'
    },
    {
      name: 'Sneha Patel',
      role: 'Staff Midwife & Registered Nurse, UK NHS Trust',
      batch: 'Post Basic B.Sc. Nursing (Batch 2022-24)',
      imageText: 'SP',
      text: 'Upgrading my GNM to Post Basic B.Sc opened international doors for me. The college helped me prepare my documentation, OET English exam, and CBT for the UK Nursing and Midwifery Council.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-emerald-600" />
            <span>Alumni Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stories of Transformation & Success
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Hear directly from our alumni who are now serving with distinction in premier national hospitals and international healthcare systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-sky-200" />

                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-sky-600 to-teal-500 text-white font-bold text-sm flex items-center justify-center shadow-md">
                  {item.imageText}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                  <p className="text-xs text-sky-600 font-medium">{item.role}</p>
                  <p className="text-[11px] text-slate-400">{item.batch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
