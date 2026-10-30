import React from 'react';
import { AnatomyPart } from '@/data/treatmentsData';
import { Shield, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

interface TreatmentAnatomyBreakdownProps {
  anatomyParts: AnatomyPart[];
}

export const TreatmentAnatomyBreakdown: React.FC<TreatmentAnatomyBreakdownProps> = ({
  anatomyParts,
}) => {
  return (
    <section id="anatomy" className="scroll-mt-28 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Layers className="w-4 h-4 text-[#D9A93B]" />
          <span>Biomechanical Engineering</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] mt-2">
          Anatomy of a Modern Dental Implant
        </h2>
        <p className="text-sm sm:text-base text-[#4E4636] mt-2 max-w-3xl leading-relaxed">
          Unlike temporary bridges or acrylic dentures that merely rest on top of your gums, a dental implant is a precision-engineered 3-tier system that replicates the exact biology, root mechanics, and bite force of a natural human tooth.
        </p>
      </div>

      {/* Anatomy Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {anatomyParts.map((part, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-3xl border border-[#E8DCC8] p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FAF4EA] rounded-bl-3xl flex items-center justify-center font-serif text-2xl font-bold text-[#D9A93B]">
                0{index + 1}
              </div>

              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FAF4EA] text-[#795900] text-[10px] font-bold uppercase tracking-wider border border-[#E8DCC8]">
                  Tier 0{index + 1}
                </span>

                <h3 className="font-serif text-lg font-bold text-[#2B2420] leading-snug">
                  {part.partName}
                </h3>

                <div className="space-y-2 pt-1">
                  <div className="text-[11px] text-[#5C5143]">
                    <span className="font-bold text-[#2B2420] block">Material:</span>
                    <span>{part.material}</span>
                  </div>

                  <div className="text-[11px] text-[#5C5143]">
                    <span className="font-bold text-[#795900] block">Primary Function:</span>
                    <span>{part.function}</span>
                  </div>
                </div>

                <p className="text-xs text-[#5C5143] leading-relaxed pt-2 border-t border-[#FAF4EA]">
                  {part.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FAF4EA] flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Biocompatible</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clinical Biological Insight Banner */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#2B2420] to-[#3D332D] text-white space-y-4 shadow-lg">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#FFDEA0]" />
          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FFDEA0]">
            The Osseointegration Miracle: Why Implants Stop Facial Sagging
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-[#E8DCC8] leading-relaxed">
          When a tooth is lost, the surrounding alveolar jawbone no longer receives chewing stimulation. Within the first 12 months, up to <strong>25% of jawbone width is resorbed by the body</strong>, leading to premature facial wrinkling and sunken cheeks. Dental implants are the <em>only</em> dental restoration that sends direct micro-mechanical signals to living osteocytes, completely halting bone loss and preserving your youthful facial jawline for life.
        </p>
        <div className="pt-2 flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
            <Shield className="w-3.5 h-3.5 text-[#FFDEA0]" />
            <span>Zero Bone Resorption</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Lifelong Skeletal Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
};
