'use client';

import React, { useState } from 'react';
import { 
  Microscope, 
  Baby, 
  HeartHandshake, 
  Utensils, 
  Laptop, 
  Trees, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function LabsSection() {
  const labs = [
    {
      id: 'simulation',
      title: 'Nursing Foundation & Advanced Simulation Lab',
      badge: 'Core Clinical Lab',
      icon: HeartHandshake,
      description: 'Equipped with high-fidelity adult, child and geriatric manikins, CPR trainers, intravenous (IV) cannulation arms, catheterization simulators, and cardiac monitor mockups to perfect clinical skills before entering patient wards.',
      equipment: ['Multi-scenario Patient Manikins', 'CPR & Defibrillation Simulators', 'IV Cannulation & Injection Training Arms', 'Hospital Bed Setups with Central Oxygen Lines']
    },
    {
      id: 'obg',
      title: 'Maternal & Child Health / OBG Lab',
      badge: 'Maternity Specialist',
      icon: Baby,
      description: 'Dedicated to Obstetrics and Gynaecological nursing education. Features advanced birthing simulators, maternal pelvis models, fetal developmental stages, and postpartum complication management stations.',
      equipment: ['Full-Body Birthing Simulators', 'Fetal Heart Doppler & CTG Simulators', 'Episiotomy & Suturing Models', 'Newborn Resuscitation Warmers']
    },
    {
      id: 'pediatric',
      title: 'Child Health Nursing (Pediatric) Lab',
      badge: 'Child Care Unit',
      icon: Baby,
      description: 'A dedicated simulated pediatric care environment with radiant warmers, phototherapy simulation units, infant CPR mannequins, and developmental milestone assessment toolkits.',
      equipment: ['Infant Incubator & Phototherapy Mockups', 'Pediatric Anthropometric Measurement Tools', 'Pediatric Emergency Crash Cart', 'Child Friendly Play Therapy Corner']
    },
    {
      id: 'preclinical',
      title: 'Pre-Clinical Science & Anatomy Lab',
      badge: 'Medical Science',
      icon: Microscope,
      description: 'Features 3D anatomical skeletal structures, human organ models, histology slide microscopes, physiology diagnostic equipment, and microbiology culture study kits.',
      equipment: ['Full Human Skeleton & Organ Dissection Models', 'High-Resolution Binocular Microscopes', 'Specimen Jars & Histology Charts', 'Biochemistry Centrifuges & Colorimeters']
    },
    {
      id: 'community',
      title: 'Community Health Nursing Lab',
      badge: 'Public Health',
      icon: Trees,
      description: 'Equipped for public healthcare preparation including individual community nursing bags with diagnostic kits, immunization cold-chain carrier boxes, and health education AV models.',
      equipment: ['Standardized Community Health Bags (CHB)', 'Immunization Vaccine Carrier Models', 'Epidemiological Mapping Systems', 'Health Education Flashcards & Puppet Kits']
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Dietetics Laboratory',
      badge: 'Diet & Nutrition',
      icon: Utensils,
      description: 'Modern culinary and dietetic workstations for formulating therapeutic diets (diabetic, renal, cardiac, enteral feeds) based on nutritional biochemistry for hospitalized patients.',
      equipment: ['Individual Student Cooking Stations', 'Dietary Calorie & Nutrient Calculation Software', 'Weighing Scales & Food Preservation Tools', 'Enteral Feeding Bag Formulations']
    },
    {
      id: 'computer',
      title: 'Digital Computer & E-Library Lab',
      badge: 'E-Learning Hub',
      icon: Laptop,
      description: 'High-speed internet connected computing lab with access to DELNET, PubMed, clinical decision-support systems, and Hospital Information Management System (HIMS) training.',
      equipment: ['50+ High-Performance Workstations', 'Access to National & International Medical Journals', 'HIMS & Nursing Informatics Training', 'E-Books & NCLEX Exam Simulation Software']
    }
  ];

  const [activeLab, setActiveLab] = useState(labs[0]);

  return (
    <section id="facilities" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Infrastructure & Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Tech Nursing Simulation & Science Labs
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Our specialized laboratories are built in compliance with Indian Nursing Council standards, allowing students to rehearse and master clinical procedures in a zero-risk simulated hospital environment.
          </p>
        </div>

        {/* Labs Interactive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Lab Navigation List */}
          <div className="lg:col-span-5 space-y-2.5">
            {labs.map((lab) => {
              const Icon = lab.icon;
              const isSelected = activeLab.id === lab.id;
              return (
                <button
                  key={lab.id}
                  onClick={() => setActiveLab(lab)}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-sky-500 shadow-lg shadow-sky-500/10'
                      : 'bg-white/60 hover:bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-sky-700' : 'text-slate-800'}`}>
                        {lab.title}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {lab.badge}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${isSelected ? 'text-sky-600' : 'text-slate-400'}`}>
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Lab Details Showcase */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                {activeLab.badge}
              </span>
              <span className="text-xs text-slate-400 font-semibold">INC Standard Lab</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-4">
              {activeLab.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
              {activeLab.description}
            </p>

            {/* Equipment Grid */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Featured Equipment & Simulators</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeLab.equipment.map((eq, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 p-4 rounded-2xl bg-teal-50 border border-teal-100 text-xs text-teal-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Students complete 100+ simulated clinical hours before actual patient ward deployment.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
