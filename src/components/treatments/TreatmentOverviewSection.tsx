import React from 'react';
import Image from 'next/image';
import { TreatmentDetail } from '@/data/treatmentsData';
import { FileText, CheckCircle2, AlertCircle, ShieldAlert, Sparkles, ShieldCheck } from 'lucide-react';

interface TreatmentOverviewSectionProps {
  treatment: TreatmentDetail;
}

export const TreatmentOverviewSection: React.FC<TreatmentOverviewSectionProps> = ({
  treatment,
}) => {
  return (
    <section id="overview" className="scroll-mt-24 space-y-6">
      {/* Visual Clinical Hero Feature */}
      <div className="bg-white rounded-3xl border border-[#E8DCC8] p-5 sm:p-7 shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Text & Key Metrics */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
              <FileText className="w-3.5 h-3.5 text-[#D9A93B]" />
              <span>Clinical Overview</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] tracking-tight">
              What are {treatment.name}?
            </h2>

            <p className="text-xs sm:text-sm text-[#4E4636] leading-relaxed">
              {treatment.overview}
            </p>

            {/* Compact Clinical Metrics Strip */}
            {treatment.clinicalSummary && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="p-2.5 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8]">
                  <span className="text-[10px] uppercase font-bold text-[#5C5143] block">Success Rate</span>
                  <strong className="text-xs font-bold text-emerald-800">{treatment.clinicalSummary.successRate.split(' ')[0]}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8]">
                  <span className="text-[10px] uppercase font-bold text-[#5C5143] block">Anesthesia</span>
                  <strong className="text-xs font-bold text-[#2B2420]">Painless Local</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8]">
                  <span className="text-[10px] uppercase font-bold text-[#5C5143] block">Duration</span>
                  <strong className="text-xs font-bold text-[#795900]">{treatment.duration.split('(')[0]}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8]">
                  <span className="text-[10px] uppercase font-bold text-[#5C5143] block">Longevity</span>
                  <strong className="text-xs font-bold text-[#2B2420]">Lifetime Care</strong>
                </div>
              </div>
            )}
          </div>

          {/* Right Clinical Image */}
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#FAF4EA] shadow-md group">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="32 Smiles Digital Implant Consultation"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-bold text-[#FFDEA0] border border-white/20">
                  <ShieldCheck className="w-3 h-3 text-[#FFDEA0]" />
                  3D CBCT Guided Center
                </span>
                <p className="text-xs font-semibold mt-1">Computer-Navigated Surgical Precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Candidacy & Diagnostic Triggers (Compact 2-Column Grid) */}
      <div id="candidacy" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Diagnostic Indications */}
        <div className="bg-white rounded-2xl border border-[#E8DCC8] p-5 shadow-2xs space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>When is this Treatment Needed?</span>
          </div>
          <ul className="space-y-2">
            {treatment.symptoms.map((sym, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-[#4E4636] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A93B] shrink-0 mt-1.5" />
                <span>{sym}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Candidacy & Safety Management */}
        <div className="bg-white rounded-2xl border border-[#E8DCC8] p-5 shadow-2xs space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Eligibility & Candidacy</span>
          </div>
          <ul className="space-y-2">
            {treatment.candidacyCriteria ? (
              treatment.candidacyCriteria.idealCandidates.slice(0, 4).map((cand, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#2B2420] leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cand}</span>
                </li>
              ))
            ) : (
              treatment.benefits.slice(0, 4).map((ben, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#2B2420] leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{ben}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* Clinical Advantages Strip */}
      <div className="bg-[#FAF4EA] rounded-2xl border border-[#E8DCC8] p-5 space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Sparkles className="w-3.5 h-3.5 text-[#D9A93B]" />
          <span>Why Choose 32 Smiles for {treatment.name}?</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {treatment.benefits.map((ben, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-xl border border-[#E8DCC8] flex items-start gap-2 text-xs text-[#2B2420] shadow-2xs"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="font-medium leading-snug">{ben}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
