'use client';

import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Printer, 
  X,
  FileCheck
} from 'lucide-react';

export default function AdmissionForm({ isOpen, onClose, defaultCourse = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    course: 'B.Sc. (Nursing)',
    categoryStatus: 'General / Regular',
    qualification: '10+2 (PCB)',
    percentage: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setFormData(prev => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const generatedId = 'SHRISTI/ADM/2026/' + Math.floor(10000 + Math.random() * 90000);
      setApplicationId(generatedId);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      course: 'B.Sc. (Nursing)',
      categoryStatus: 'General / Regular',
      qualification: '10+2 (PCB)',
      percentage: '',
      message: ''
    });
    if (onClose) onClose();
  };

  if (isOpen !== undefined && !isOpen) return null;

  const content = (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-300 shadow-2xl relative font-sans text-slate-900">
      
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {!submitted ? (
        <div>
          {/* Form Header */}
          <div className="border-b-2 border-red-800 pb-4 mb-5">
            <div className="flex items-center gap-2 text-[10px] font-bold text-red-800 uppercase tracking-wider">
              <span>Central Admission Desk &bull; Session 2026-2027</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Online Admission & Counseling Form
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Shristi Nursing College & Nupoor College of Pharmacy Raipur
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans text-slate-800">
            
            {/* Name */}
            <div>
              <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
                Candidate Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Rahul Sahu / Anjali Sharma"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white"
              />
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 88151 04383"
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white"
                />
              </div>
            </div>

            {/* Course & Scheme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Program Interested In *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white"
                >
                  <optgroup label="Shristi Nursing College">
                    <option value="B.Sc. (Nursing)">B.Sc. (Nursing) - 4 Years Degree</option>
                    <option value="GNM">GNM (General Nursing) - 3 Years Diploma</option>
                    <option value="Post Basic B.Sc. (Nursing)">Post Basic B.Sc. (Nursing) - 2 Years</option>
                    <option value="M.Sc. (Nursing)">M.Sc. (Nursing) - 2 Years Postgraduate</option>
                  </optgroup>
                  <optgroup label="Nupoor College of Pharmacy">
                    <option value="D. Pharmacy">D. Pharmacy - 2 Years Diploma</option>
                  </optgroup>
                  <optgroup label="Paramedical 3 Year Degree">
                    <option value="BMLT">BMLT - Medical Lab Technician (3 Yrs)</option>
                    <option value="B.Sc (MLT)">B.Sc (MLT) (3 Yrs)</option>
                    <option value="B.Sc (OPT)">B.Sc (OPT) - Optometry (3 Yrs)</option>
                    <option value="B.Sc (DT)">B.Sc (DT) - Dialysis Technician (3 Yrs)</option>
                    <option value="B.Sc (OT)">B.Sc (OT) - Ophthalmic Technician (3 Yrs)</option>
                  </optgroup>
                  <optgroup label="Paramedical 2 Year Diploma">
                    <option value="DMLT">DMLT (Diploma Medical Lab Tech)</option>
                    <option value="DOA">DOA (Diploma Ophthalmic Assistant)</option>
                    <option value="Diploma in Pharmacy (Ayurved)">Diploma in Pharmacy (Ayurved)</option>
                    <option value="Diploma in Pharmacy (Unani)">Diploma in Pharmacy (Unani)</option>
                    <option value="Diploma in Pharmacy (Homeopathy)">Diploma in Pharmacy (Homeopathy)</option>
                  </optgroup>
                  <optgroup label="Paramedical 1 Year Certificate">
                    <option value="MPHW">MPHW (Multipurpose Health Worker)</option>
                    <option value="CMLT">CMLT (Certificate Medical Lab Tech)</option>
                    <option value="Certificate in Ortho & Dresser">Certificate in Ortho & Dresser</option>
                    <option value="CMRT (X-RAY)">CMRT (Certificate in X-RAY Tech)</option>
                    <option value="Certificate in OT Technician">Certificate in OT Technician (OTT)</option>
                    <option value="Certificate in Ayurvedic Compounder">Certificate in Ayurvedic Compounder</option>
                    <option value="Certificate in Homeopathic Compounder">Certificate in Homeopathic Compounder</option>
                    <option value="Certificate in Unani Compounder">Certificate in Unani Compounder</option>
                  </optgroup>
                  <optgroup label="Computer & Management">
                    <option value="DCA">DCA (Diploma in Computer Applications)</option>
                    <option value="PGDCA">PGDCA (PG Diploma Computer Applications)</option>
                    <option value="BBA">BBA (Bachelor of Business Admin)</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Special Scheme / Category
                </label>
                <select
                  name="categoryStatus"
                  value={formData.categoryStatus}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white"
                >
                  <option value="General / Regular Merit">General / Regular Admission</option>
                  <option value="BPL Card Holder">BPL Card Holder (10 Free Seat Scheme)</option>
                  <option value="Orphan Candidate">Orphan Candidate (Free Tuition Scheme)</option>
                  <option value="Naxal Affected">Naxal Affected (Free Tuition Scheme)</option>
                  <option value="Need Bank Education Loan">Require Bank Education Loan Support</option>
                </select>
              </div>
            </div>

            {/* City & Percentage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
                  City / State *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="e.g. Raipur, Bilaspur, Durg, Bastar..."
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
                  10th / 12th Percentage (%)
                </label>
                <input
                  type="text"
                  name="percentage"
                  placeholder="e.g. 74%"
                  value={formData.percentage}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
                Any Query regarding Hostels, Bus or Fee Structure?
              </label>
              <textarea
                name="message"
                rows={2}
                placeholder="Ask about hostel allotment, installment plans, or loan procedures..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-800 focus:bg-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? (
                <span>Submitting Application...</span>
              ) : (
                <>
                  <FileCheck className="w-4 h-4 text-amber-300" />
                  <span>Submit Application & Check Seat Allotment</span>
                </>
              )}
            </button>

            <div className="text-[11px] text-center text-slate-500 font-medium">
              Direct Helpline: +91 88151 04383 / +91 88151 04390
            </div>
          </form>
        </div>
      ) : (
        /* Official Slip */
        <div className="text-center py-4 space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Application Successfully Registered
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              Thank You, {formData.fullName}!
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Your provisional application has been logged at Shristi Group of Institutes Raipur.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 text-left max-w-md mx-auto space-y-2 text-xs text-slate-800">
            <div className="flex justify-between pb-1.5 border-b border-slate-200">
              <span className="text-slate-500 font-semibold">Acknowledgment No:</span>
              <strong className="text-red-800 font-mono font-bold">{applicationId}</strong>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-slate-200">
              <span className="text-slate-500 font-semibold">Course Applied:</span>
              <strong className="text-slate-900">{formData.course}</strong>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-slate-200">
              <span className="text-slate-500 font-semibold">Mobile:</span>
              <strong className="text-slate-900">{formData.phone}</strong>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-slate-200">
              <span className="text-slate-500 font-semibold">Category:</span>
              <strong className="text-slate-900">{formData.categoryStatus}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-semibold">Location:</span>
              <strong className="text-slate-900">{formData.city}</strong>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg text-[11px] text-amber-950 max-w-md mx-auto">
            📍 You may also visit our City Office: <strong>Bangali Kali Badi Samiti Campus, Kali Badi Chowk, Raipur</strong> along with your academic documents.
          </div>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 font-bold text-xs hover:bg-slate-100"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Slip</span>
            </button>
            <button
              onClick={handleReset}
              className="px-5 py-2 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-xl w-full my-8">
          {content}
        </div>
      </div>
    );
  }

  return content;
}
