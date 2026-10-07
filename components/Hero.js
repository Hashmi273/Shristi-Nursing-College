'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Hospital, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  PhoneCall, 
  HeartHandshake,
  Sparkles
} from 'lucide-react';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative bg-gradient-to-r from-[#008fc6] via-[#007cae] to-[#006087] text-white overflow-hidden py-10 lg:py-16 border-b-4 border-[#ffc20e] font-sans">
      
      {/* Background Subtle Geometric Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#ffc20e]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Authentic Poster Style Details */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ffc20e] text-[#004e70] text-xs font-black uppercase tracking-wider shadow mx-auto lg:mx-0">
              <Award className="w-4 h-4 text-[#004e70]" />
              <span>Approved by INC New Delhi & State Nursing Council</span>
            </div>

            {/* Main Headline from Poster */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black text-white tracking-tight leading-[1.15] uppercase">
                SHRISTI GROUP OF <br />
                <span className="text-[#ffc20e]">INSTITUTES RAIPUR</span>
              </h1>
              <p className="text-sm sm:text-base font-bold text-white tracking-wide">
                शिक्षा • स्वास्थ्य • सेवा | सर्वे सन्तु निरामयाः
              </p>
              <p className="text-xs sm:text-sm font-bold text-amber-200 uppercase">
                Shristi Nursing College &bull; Nupoor College of Pharmacy
              </p>
            </div>

            {/* Brief Narrative */}
            <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A trusted and premier institution successfully operating for <strong className="text-[#ffc20e] font-bold">over 20+ years</strong> in Nursing, Pharmacy, and Paramedical education in Raipur, Chhattisgarh.
            </p>

            {/* Key Clinical & Welfare Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-100 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2 bg-black/20 p-2.5 rounded-lg border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#ffc20e] flex-shrink-0 mt-0.5" />
                <span>Dr. B.R. Ambedkar Medical College Hospital Rotations</span>
              </div>
              <div className="flex items-start gap-2 bg-black/20 p-2.5 rounded-lg border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#ffc20e] flex-shrink-0 mt-0.5" />
                <span>State Mental Hospital Sendri (Bilaspur) Training</span>
              </div>
              <div className="flex items-start gap-2 bg-black/20 p-2.5 rounded-lg border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#ffc20e] flex-shrink-0 mt-0.5" />
                <span>RINPAS (Ranchi, Jharkhand) Neuro-Psychiatry</span>
              </div>
              <div className="flex items-start gap-2 bg-black/20 p-2.5 rounded-lg border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#ffc20e] flex-shrink-0 mt-0.5" />
                <span>10 Free B.Sc. Seats for BPL & Orphan Students</span>
              </div>
            </div>

            {/* Action Buttons with Red from Poster */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => onOpenInquiry('Hero Apply CTA')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d31b26] hover:bg-[#a3111a] text-white font-black px-7 py-3.5 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider border border-white/20"
              >
                <span>Apply for Admission 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#004e70] font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow"
              >
                <GraduationCap className="w-4 h-4 text-[#d31b26]" />
                <span>Explore All 20+ Courses</span>
              </a>
            </div>

            {/* Quick Helpline from Poster */}
            <div className="pt-2 text-xs text-white font-medium flex items-center justify-center lg:justify-start gap-2">
              <PhoneCall className="w-4 h-4 text-[#ffc20e]" />
              <span>Admission Help: <strong className="text-[#ffc20e] font-bold text-sm">+91 88151 04383 / +91 88151 04390</strong></span>
            </div>

          </div>

          {/* Right Column: Nurse Photo with Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full">
              
              {/* Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#ffc20e] via-white/40 to-[#d31b26] rounded-3xl blur-md opacity-50"></div>

              {/* Nurse Card Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white bg-slate-900 shadow-2xl">
                <img
                  src={process.env.NODE_ENV === 'production' ? '/Shristi-Nursing-College/nurse-hero.jpg' : '/nurse-hero.jpg'}
                  alt="Professional Nurse - Shristi Nursing College Raipur"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top"
                />

                {/* Dark Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Top Badge: 20+ Years */}
                <div className="absolute top-4 left-4 bg-[#ffc20e] text-[#004e70] px-3.5 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#004e70]" />
                  <span>20+ Years Excellence</span>
                </div>

                {/* Bottom Overlay Card: Clinical Training */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#ffc20e]">Clinical Training Partner</span>
                    <span className="text-[10px] bg-[#d31b26] text-white font-bold px-2 py-0.5 rounded">750+ Beds</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Dr. B.R. Ambedkar Memorial Medical College Hospital (Raipur)
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Rotations in ICU, Trauma, Pediatrics & Modular OTs.
                  </p>
                </div>

              </div>

              {/* Floating Placement Badge */}
              <div className="hidden sm:flex absolute -top-3 -right-3 bg-[#d31b26] text-white p-3 rounded-2xl shadow-xl border-2 border-white flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-tight">Placement</span>
                <span className="text-lg font-black text-[#ffc20e]">100%</span>
                <span className="text-[9px] text-slate-100">CG & Abroad</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
