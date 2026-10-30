import React from 'react';
import { TreatmentDetail } from '@/data/treatmentsData';
import { GitCommit, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';

interface TreatmentProcedureSectionProps {
  treatment: TreatmentDetail;
}

export const TreatmentProcedureSection: React.FC<TreatmentProcedureSectionProps> = ({
  treatment,
}) => {
  return (
    <section id="procedure" className="scroll-mt-28 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <GitCommit className="w-4 h-4 text-[#D9A93B]" />
          <span>Surgical Protocol</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] mt-2">
          Step-by-Step 3D Guided Clinical Pathway
        </h2>
        <p className="text-sm sm:text-base text-[#4E4636] mt-2 max-w-3xl leading-relaxed">
          Every stage of your treatment is computer-navigated to eliminate human error, protect delicate mandibular nerves, and ensure painless, predictable recovery.
        </p>
      </div>

      {/* 4-Step Grid */}
      <div className="space-y-6">
        {treatment.steps.map((st, index) => (
          <div
            key={st.number}
            className="bg-white rounded-3xl border border-[#E8DCC8] p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Step Number Badge */}
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8] flex items-center justify-center font-serif text-2xl font-bold text-[#795900]">
              {st.number}
            </div>

            {/* Step Body */}
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B2420]">
                  {st.title}
                </h3>
                <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Painless Protocol</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#4E4636] leading-relaxed">
                {st.description}
              </p>

              {st.clinicalNote && (
                <div className="p-3 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8] text-xs text-[#5C5143] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#795900] shrink-0 mt-0.5" />
                  <span><strong>Clinical precision:</strong> {st.clinicalNote}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Technology Used Strip */}
      <div className="p-6 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] space-y-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#795900]" />
          <h4 className="font-serif font-bold text-[#2B2420] text-sm sm:text-base">
            Advanced Diagnostic & Surgical Technology Deployed
          </h4>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {treatment.technologyUsed.map((tech, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#E8DCC8] text-xs font-bold text-[#795900] shadow-2xs"
            >
              ✦ {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
