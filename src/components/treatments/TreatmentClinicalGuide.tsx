import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { TreatmentDetail } from '@/data/treatmentsData';
import { SectionBadge } from '@/components/common/SectionBadge';

interface TreatmentClinicalGuideProps {
  treatment: TreatmentDetail;
}

export const TreatmentClinicalGuide: React.FC<TreatmentClinicalGuideProps> = ({ treatment }) => {
  return (
    <>
      {/* Symptoms & Benefits Two-Column Section */}
      <section className="py-20 bg-white border-b border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Symptoms / When is it needed */}
            <div className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900]">
                  Diagnosis & Indications
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2B2420] mt-1">
                  When is this Treatment Recommended?
                </h3>
              </div>
              <div className="space-y-3">
                {treatment.symptoms.map((sym, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E8DCC8]">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4E4636] leading-relaxed">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DCC8] card-shadow space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Clinical Advantages
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2B2420] mt-1">
                  Why Choose 32 Smiles for {treatment.name}?
                </h3>
              </div>
              <div className="space-y-3">
                {treatment.benefits.map((ben, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#FAF4EA] p-4 rounded-2xl border border-[#E8DCC8]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#2B2420] font-medium leading-relaxed">{ben}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Clinical Procedure */}
      <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
            <SectionBadge text="Treatment Pathway" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
              Step-by-Step Procedure Workflow
            </h2>
            <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatment.steps.map((st) => (
              <div
                key={st.number}
                className="p-6 rounded-3xl bg-white border border-[#E8DCC8] card-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-[#D9A93B] block mb-3">
                    {st.number}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#2B2420] mb-2">{st.title}</h4>
                  <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">{st.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#FAF4EA] flex items-center gap-1.5 text-[11px] font-semibold text-[#795900]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Painless Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Deployed */}
      <section className="py-12 bg-white border-b border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h4 className="font-serif text-xl font-bold text-[#2B2420]">
            Precision Equipment Deployed for {treatment.name}
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {treatment.technologyUsed.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-[#FAF4EA] border border-[#E8DCC8] text-xs font-bold text-[#795900] shadow-2xs"
              >
                ✦ {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
