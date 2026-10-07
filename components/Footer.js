'use client';

import React from 'react';
import { 
  HeartHandshake, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Globe, 
  Building2
} from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer id="contact" className="bg-[#0b1329] text-white border-t-4 border-amber-500 font-sans">
      
      {/* 1. Official Helpline & Contact Strip */}
      <div className="bg-[#050b17] border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-800 text-amber-200 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-amber-300 tracking-wider block">Admission Helpline (Raipur)</span>
                <span className="text-sm font-bold text-white">
                  <a href="tel:+918815104383" className="hover:text-amber-300">+91 88151 04383</a> / <a href="tel:+918815104390" className="hover:text-amber-300">+91 88151 04390</a>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Official Email</span>
                <span className="text-xs font-bold text-white">
                  <a href="mailto:shristigroupinstitutes@gmail.com" className="hover:text-amber-300">
                    shristigroupinstitutes@gmail.com
                  </a>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Official Portal</span>
                <span className="text-xs font-bold text-white">
                  <a href="https://www.shristinursing.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
                    www.shristinursing.org
                  </a>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Institutional Address Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          
          {/* Col 1: Institutional Profile */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-800 border border-amber-400 flex items-center justify-center text-amber-200 flex-shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block leading-tight">
                  SHRISTI GROUP <span className="text-amber-300">OF INSTITUTES</span>
                </span>
                <span className="text-[10px] text-slate-300">Education • Healthcare • Service | Sarve Santu Niramayah</span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              A premier academic institution in Chhattisgarh for over 20+ years, recognized by the Indian Nursing Council (INC) New Delhi and State Government for Nursing, Paramedical, and Pharmacy excellence.
            </p>

            <div className="pt-2 border-t border-slate-800 space-y-1 text-slate-300">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SHRISTI NURSING COLLEGE</span>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NUPOOR COLLEGE OF PHARMACY</span>
              </div>
            </div>
          </div>

          {/* Col 2: City Office Address */}
          <div className="lg:col-span-4 space-y-2 text-left">
            <h4 className="font-bold text-amber-300 uppercase tracking-wider text-xs border-b border-slate-800 pb-1 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-rose-400" />
              <span>City Office (Raipur)</span>
            </h4>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-slate-200 leading-relaxed">
              <p className="font-bold text-white">Bangali Kali Badi Samiti Campus,</p>
              <p>Beside SBI ATM, Kali Badi Chowk,</p>
              <p className="text-amber-300 font-semibold">Raipur (C.G.)</p>
              <p className="text-[11px] text-slate-400 mt-2">
                Visiting Hours: Mon - Sat (10:00 AM to 5:30 PM)
              </p>
            </div>
          </div>

          {/* Col 3: Main Campus Address */}
          <div className="lg:col-span-4 space-y-2 text-left">
            <h4 className="font-bold text-amber-300 uppercase tracking-wider text-xs border-b border-slate-800 pb-1 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Main College Campus Address</span>
            </h4>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-slate-200 leading-relaxed">
              <p className="font-bold text-white">Village - Rakhi, Post - Khorpa,</p>
              <p>Block - Abhanpur, Old Dhamtari Road,</p>
              <p>Near Bharenga Bhatha Chowk,</p>
              <p className="text-amber-300 font-semibold">Raipur (C.G.) - 493661</p>
              <p className="text-[11px] text-slate-400 mt-2">
                Campus Helpline: +91 88151 04383 / +91 88151 04390
              </p>
            </div>
          </div>

        </div>

        {/* Anti Ragging & Statutory Notice */}
        <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            🔒 <strong>Anti-Ragging Compliance:</strong> Ragging in any form is strictly prohibited on campus as per UGC & INC Regulations.
          </p>
          <button
            onClick={() => onOpenInquiry('Footer Direct Form')}
            className="text-amber-300 hover:text-white font-bold uppercase tracking-wider"
          >
            Online Admission Form &rarr;
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026-2027 Shristi Group of Institutes Raipur. All Rights Reserved.</p>
          <p className="text-slate-400">Official Portal: www.shristinursing.org</p>
        </div>

      </div>

    </footer>
  );
}
