'use client';

import React from 'react';
import { Bell, Phone, Mail, Award, User } from 'lucide-react';

export default function NoticeTicker({ onOpenInquiry }) {
  return (
    <div className="bg-[#004e70] text-white text-xs border-b-2 border-[#ffc20e] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-1.5 gap-2">
          
          {/* Left: Flash News with Red & Yellow from Poster */}
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
            <span className="inline-flex items-center gap-1 bg-[#d31b26] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider flex-shrink-0 shadow">
              <Bell className="w-3 h-3 animate-pulse" /> ADMISSION 2026-27
            </span>
            <div className="truncate text-slate-100 font-medium">
              <span className="text-[#ffc20e] font-bold">Admissions Open:</span> Nursing, Pharmacy & Paramedical | <span className="text-[#fff200] font-semibold underline">10 Free B.Sc. Nursing Seats for BPL / Orphan Students!</span>
            </div>
          </div>

          {/* Right: Phone numbers matching poster */}
          <div className="flex items-center gap-3 sm:gap-5 text-slate-100 flex-shrink-0 text-[11px]">
            <a href="tel:+918815104383" className="flex items-center gap-1 text-white hover:text-[#ffc20e] font-bold transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#ffc20e]" />
              <span>+91 88151 04383</span>
            </a>
            <span className="text-sky-300">/</span>
            <a href="tel:+918815104390" className="flex items-center gap-1 text-white hover:text-[#ffc20e] font-bold transition-colors">
              <span>+91 88151 04390</span>
            </a>
            <span className="hidden sm:inline text-sky-400">|</span>
            <button 
              onClick={() => onOpenInquiry('Top Bar Portal')} 
              className="hidden sm:inline-flex items-center gap-1 bg-[#ffc20e] text-[#004e70] hover:bg-white font-extrabold px-2.5 py-0.5 rounded text-[11px] transition-colors uppercase tracking-wider shadow"
            >
              <User className="w-3 h-3" />
              <span>Apply Online</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
