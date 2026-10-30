import React from 'react';
import { TreatmentDetail } from '@/data/treatmentsData';
import { FileText, CheckCircle2, AlertCircle, ShieldAlert, Sparkles, Activity } from 'lucide-react';

interface TreatmentOverviewSectionProps {
  treatment: TreatmentDetail;
}

export const TreatmentOverviewSection: React.FC<TreatmentOverviewSectionProps> = ({
  treatment,
}) => {
  return (
    <section id="overview" className="scroll-mt-28 space-y-8">
      {/* Overview Intro */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <FileText className="w-4 h-4 text-[#D9A93B]" />
          <span>Clinical Overview</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] mt-2">
          What are {treatment.name}?
        </h2>
        <p className="text-sm sm:text-base text-[#4E4636] mt-3 leading-relaxed">
          {treatment.overview}
        </p>
      </div>

      {/* Clinical Highlights Strip */}
      {treatment.clinicalSummary && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-4 sm:p-5 rounded-3xl bg-white border border-[#E8DCC8] shadow-xs">
          <div className="p-3 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8]">
            <span className="text-[10px] font-bold uppercase text-[#5C5143] block">Success Rate</span>
            <strong className="text-xs sm:text-sm text-emerald-800 font-bold block mt-0.5">
              {treatment.clinicalSummary.successRate}
            </strong>
          </div>
          <div className="p-3 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8]">
            <span className="text-[10px] font-bold uppercase text-[#5C5143] block">Anesthesia</span>
            <strong className="text-xs sm:text-sm text-[#2B2420] font-bold block mt-0.5">
              Painless Local
            </strong>
          </div>
          <div className="p-3 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8]">
            <span className="text-[10px] font-bold uppercase text-[#5C5143] block">Admission</span>
            <strong className="text-xs sm:text-sm text-[#2B2420] font-bold block mt-0.5">
              Day Procedure
            </strong>
          </div>
          <div className="p-3 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8]">
            <span className="text-[10px] font-bold uppercase text-[#5C5143] block">Durability</span>
            <strong className="text-xs sm:text-sm text-[#795900] font-bold block mt-0.5">
              Lifetime Care
            </strong>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8]">
            <span className="text-[10px] font-bold uppercase text-[#5C5143] block">Eligible Age</span>
            <strong className="text-xs sm:text-sm text-[#2B2420] font-bold block mt-0.5">
              {treatment.clinicalSummary.idealAgeRange}
            </strong>
          </div>
        </div>
      )}

      {/* Symptoms & Diagnosis Trigger */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8DCC8] shadow-xs space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900]">
            Diagnostic Indications
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2420] mt-1">
            When is this Procedure Recommended?
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {treatment.symptoms.map((sym, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[#FAF4EA]/60 p-3.5 rounded-2xl border border-[#E8DCC8]"
            >
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span className="text-xs text-[#4E4636] leading-relaxed">{sym}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Candidacy Evaluation Grid */}
      {treatment.candidacyCriteria && (
        <div id="candidacy" className="scroll-mt-28 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Ideal Candidates */}
          <div className="p-6 sm:p-7 rounded-3xl bg-emerald-50/50 border border-emerald-200 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ideal Candidates</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#2B2420]">
              Who is Eligible for Implants?
            </h4>
            <ul className="space-y-2.5">
              {treatment.candidacyCriteria.idealCandidates.map((cand, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#2B2420] leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contraindications & How We Manage Them */}
          <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/50 border border-amber-200 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Precautions & Safety Protocol</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#2B2420]">
              Conditions We Safely Manage
            </h4>
            <ul className="space-y-2.5">
              {treatment.candidacyCriteria.contraindications.map((contra, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#5C5143] leading-relaxed">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{contra}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Key Clinical Advantages */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8DCC8] shadow-xs space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
            Clinical Advantages
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2420] mt-1">
            Why Choose 32 Smiles for {treatment.name}?
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {treatment.benefits.map((ben, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[#FAF4EA] p-4 rounded-2xl border border-[#E8DCC8]"
            >
              <Sparkles className="w-4 h-4 text-[#795900] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-[#2B2420] font-medium leading-relaxed">
                {ben}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
