import React from 'react';
import Image from 'next/image';
import { TreatmentDetail } from '@/data/treatmentsData';
import { GitCommit, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';

interface TreatmentProcedureSectionProps {
  treatment: TreatmentDetail;
}

const STEP_IMAGES = [
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
];

export const TreatmentProcedureSection: React.FC<TreatmentProcedureSectionProps> = ({
  treatment,
}) => {
  return (
    <section id="procedure" className="scroll-mt-24 space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <GitCommit className="w-3.5 h-3.5 text-[#D9A93B]" />
          <span>Surgical Protocol</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1.5">
          Step-by-Step 3D Guided Clinical Pathway
        </h2>
        <p className="text-xs sm:text-sm text-[#4E4636] mt-1 max-w-2xl leading-relaxed">
          Every stage is computer-navigated using 3D CBCT imaging to eliminate manual error, protect delicate nerves, and ensure painless recovery.
        </p>
      </div>

      {/* 4-Step Image-Rich 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {treatment.steps.map((st, index) => {
          const imgUrl = STEP_IMAGES[index] || STEP_IMAGES[0];
          return (
            <div
              key={st.number}
              className="bg-white rounded-2xl border border-[#E8DCC8] overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              {/* Step Image Thumbnail */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF4EA]">
                <Image
                  src={imgUrl}
                  alt={st.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#795900] text-white flex items-center justify-center font-serif text-sm font-bold shadow-xs">
                  {st.number}
                </div>
                <div className="absolute bottom-2.5 right-3 text-[10px] font-semibold text-white bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Painless Protocol</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B2420] leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#5C5143] leading-relaxed mt-1.5">
                    {st.description}
                  </p>
                </div>

                {st.clinicalNote && (
                  <div className="p-2.5 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8] text-[11px] text-[#5C5143] flex items-start gap-2 mt-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#795900] shrink-0 mt-0.5" />
                    <span><strong>Precision Note:</strong> {st.clinicalNote}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Compact Technology Deployed Strip */}
      <div className="p-4 rounded-2xl bg-white border border-[#E8DCC8] shadow-2xs space-y-2.5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#2B2420]">
          <Cpu className="w-4 h-4 text-[#795900]" />
          <span>Advanced Diagnostic & Surgical Equipment Deployed:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {treatment.technologyUsed.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-[#FAF4EA] border border-[#E8DCC8] text-[11px] font-bold text-[#795900]"
            >
              ✦ {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
