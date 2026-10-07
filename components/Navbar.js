'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown, HeartHandshake, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200 font-sans">
      
      {/* 1. Main College Logo Header */}
      <div className="bg-white border-b border-slate-100 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo Emblem (Chocolate Maroon from Poster) + Title */}
            <a href="#" className="flex items-center gap-3.5 sm:gap-4 group">
              {/* Emblem from Poster */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#5c1717] border-2 border-[#ffc20e] p-1 shadow-md flex items-center justify-center text-center flex-shrink-0">
                <div className="w-full h-full rounded-full border border-amber-300/50 flex flex-col items-center justify-center text-amber-200">
                  <span className="text-[8px] sm:text-[9px] font-bold tracking-widest leading-none text-[#ffc20e]">सृष्टि</span>
                  <HeartHandshake className="w-5 h-5 text-white mt-0.5" />
                  <span className="text-[7px] font-bold text-slate-200 uppercase leading-none mt-0.5">RAIPUR</span>
                </div>
              </div>

              {/* Title from Poster */}
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-xl sm:text-2xl md:text-3xl text-[#006c96] tracking-tight leading-none uppercase">
                  SHRISTI GROUP <span className="text-[#004e70]">OF INSTITUTES</span>
                </span>
                <div className="text-xs sm:text-sm font-bold text-[#d31b26] mt-1 flex flex-wrap items-center gap-x-2">
                  <span>SHRISTI NURSING COLLEGE</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-[#006c96]">NUPOOR COLLEGE OF PHARMACY</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 flex items-center gap-2 mt-0.5">
                  <span className="text-emerald-700 font-bold">Approved by INC & State Council</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#d31b26] font-bold">20+ Years Excellence</span>
                </div>
              </div>
            </a>

            {/* Right Top Contact & Red Button from Poster */}
            <div className="hidden lg:flex items-center gap-4 text-right">
              <div className="p-2.5 rounded-xl bg-[#e4f4fb] border border-[#008fc6]/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#008fc6] text-white flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Admission Helpline</span>
                  <span className="text-sm font-extrabold text-[#004e70]">+91 88151 04383</span>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry('Nav Apply')}
                className="bg-[#d31b26] hover:bg-[#a3111a] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 border border-red-400/30"
              >
                ONLINE REGISTRATION 2026-27
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenInquiry('Mobile Apply')}
                className="bg-[#d31b26] text-white text-xs font-bold px-3 py-2 rounded-lg"
              >
                Apply
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-800 hover:bg-slate-100"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Cyan Blue Navigation Bar from Poster */}
      <div className="bg-[#008fc6] text-white hidden lg:block border-t-2 border-[#ffc20e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between text-[13px] font-bold uppercase tracking-wider">
            
            <div className="flex items-center space-x-1">
              <a href="#" className="px-4 py-3.5 hover:bg-[#006c96] text-white hover:text-[#ffc20e] transition-colors">
                Home
              </a>

              {/* About Dropdown */}
              <div 
                className="relative group py-3.5 px-4 cursor-pointer hover:bg-[#006c96] hover:text-[#ffc20e] transition-colors flex items-center gap-1"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <a href="#about" className="flex items-center gap-1 text-white">
                  <span>About Us</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white group-hover:rotate-180 transition-transform" />
                </a>

                {aboutDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-2xl rounded-b-xl border-t-4 border-[#d31b26] p-2 normal-case font-normal text-xs z-50">
                    <a href="#about" className="block px-3 py-2 hover:bg-sky-50 font-bold text-slate-800 rounded">
                      About Shristi Group
                    </a>
                    <a href="#about" className="block px-3 py-2 hover:bg-sky-50 text-slate-600 rounded">
                      Vision, Mission & Slogan
                    </a>
                    <a href="#facilities" className="block px-3 py-2 hover:bg-sky-50 text-slate-600 rounded">
                      10 Free B.Sc. Seats Scheme
                    </a>
                    <a href="#facilities" className="block px-3 py-2 hover:bg-sky-50 text-slate-600 rounded">
                      20+ Years Legacy
                    </a>
                  </div>
                )}
              </div>

              {/* Academics & Courses Dropdown */}
              <div 
                className="relative group py-3.5 px-4 cursor-pointer hover:bg-[#006c96] hover:text-[#ffc20e] transition-colors flex items-center gap-1"
                onMouseEnter={() => setAcademicsDropdown(true)}
                onMouseLeave={() => setAcademicsDropdown(false)}
              >
                <a href="#courses" className="flex items-center gap-1 text-white">
                  <span>Courses Offered</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white group-hover:rotate-180 transition-transform" />
                </a>

                {academicsDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white text-slate-800 shadow-2xl rounded-b-xl border-t-4 border-[#ffc20e] p-3 normal-case font-normal text-xs z-50">
                    <div className="font-bold uppercase text-[10px] text-[#d31b26] tracking-wider pb-1 border-b border-slate-200 mb-2">
                      Shristi Nursing College
                    </div>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 font-bold text-slate-800 rounded">
                      • B.Sc. Nursing (4 Years Degree)
                    </a>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 font-bold text-slate-800 rounded">
                      • GNM (General Nursing - 3 Years)
                    </a>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 font-bold text-slate-800 rounded">
                      • Post Basic B.Sc. Nursing (2 Years)
                    </a>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 font-bold text-slate-800 rounded">
                      • M.Sc. Nursing (2 Years PG)
                    </a>

                    <div className="font-bold uppercase text-[10px] text-[#006c96] tracking-wider pb-1 border-b border-slate-200 mt-2 mb-1">
                      Nupoor College of Pharmacy
                    </div>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 font-bold text-slate-800 rounded">
                      • D. Pharmacy (2 Years Diploma)
                    </a>

                    <div className="font-bold uppercase text-[10px] text-emerald-800 tracking-wider pb-1 border-b border-slate-200 mt-2 mb-1">
                      Paramedical & IT Programs
                    </div>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 text-slate-700 rounded">
                      • BMLT, B.Sc MLT, Optometry, Dialysis (3 Yrs)
                    </a>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 text-slate-700 rounded">
                      • DMLT, DOA, Ayush Pharmacy (2 Yrs)
                    </a>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 text-slate-700 rounded">
                      • MPHW, CMLT, OTT, X-Ray, Compounder (1 Yr)
                    </a>
                    <a href="#courses" className="block px-2 py-1.5 hover:bg-sky-50 text-slate-700 rounded">
                      • DCA, PGDCA, BBA
                    </a>
                  </div>
                )}
              </div>

              <a href="#clinical-training" className="px-4 py-3.5 hover:bg-[#006c96] text-white hover:text-[#ffc20e] transition-colors">
                Hospital Rotations
              </a>

              <a href="#facilities" className="px-4 py-3.5 hover:bg-[#006c96] text-white hover:text-[#ffc20e] transition-colors">
                Facilities (सुविधाएँ)
              </a>

              <a href="#placements" className="px-4 py-3.5 hover:bg-[#006c96] text-white hover:text-[#ffc20e] transition-colors">
                Placements
              </a>

              <a href="#contact" className="px-4 py-3.5 hover:bg-[#006c96] text-white hover:text-[#ffc20e] transition-colors">
                Contact & Addresses
              </a>
            </div>

            {/* Right Fast Tag with Yellow Background from Poster */}
            <div className="flex items-center">
              <span className="bg-[#ffc20e] text-[#004e70] text-[11px] font-black px-3.5 py-1 rounded shadow tracking-tight">
                CODE: CG-NRC-2026
              </span>
            </div>

          </nav>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#004e70] text-white px-4 pt-3 pb-6 space-y-2 border-t-2 border-[#ffc20e]">
          <a href="#" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold border-b border-sky-800">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold border-b border-sky-800">About Group</a>
          <a href="#courses" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold border-b border-sky-800">Courses Offered</a>
          <a href="#clinical-training" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold border-b border-sky-800">Hospital Rotations</a>
          <a href="#facilities" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold border-b border-sky-800">Facilities (सुविधाएँ)</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold border-b border-sky-800">City Office & Campus</a>
          <div className="pt-3">
            <button
              onClick={() => { setIsOpen(false); onOpenInquiry('Mobile Drawer'); }}
              className="w-full bg-[#d31b26] text-white font-bold py-3 rounded-xl text-center"
            >
              Online Admission Form 2026-27
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
