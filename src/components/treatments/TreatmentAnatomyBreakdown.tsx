import React from 'react';
import Image from 'next/image';
import { AnatomyPart } from '@/data/treatmentsData';
import { Layers, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface TreatmentAnatomyBreakdownProps {
  anatomyParts: AnatomyPart[];
}

export const TreatmentAnatomyBreakdown: React.FC<TreatmentAnatomyBreakdownProps> = ({
  anatomyParts,
}) => {
  return (
    <section id="anatomy" className="scroll-mt-24 space-y-5">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Layers className="w-3.5 h-3.5 text-[#D9A93B]" />
          <span>Biomechanical Engineering</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1.5">
          Anatomy of a Modern Dental Implant
        </h2>
        <p className="text-xs sm:text-sm text-[#4E4636] mt-1 max-w-2xl leading-relaxed">
          Unlike bridges or dentures that sit on gum tissue, an implant is a 3-part titanium-zirconia system replicating the natural tooth root and crown.
        </p>
      </div>

      {/* Split Feature: Visual Diagram Image + 3-Tier Components */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: Illustrative Medical Visual */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative rounded-2xl overflow-hidden border border-[#E8DCC8] shadow-xs flex-1 min-h-[260px] group">
            <Image
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
              alt="Dental Implant Anatomy and Precision Zirconia Crown"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#795900] text-[#FFDEA0] text-[10px] font-bold uppercase tracking-wider mb-1">
                Precision Restorative Dentistry
              </span>
              <h3 className="font-serif font-bold text-sm sm:text-base">
                Permanent 3-Tier Bio-Integration
              </h3>
              <p className="text-[11px] text-[#E8DCC8] mt-0.5 leading-snug">
                Preserves native jawbone density and halts facial bone resorption for life.
              </p>
            </div>
          </div>
        </div>

        {/* Right: 3 Tier Cards (Compact & Elegant) */}
        <div className="lg:col-span-7 space-y-3">
          {anatomyParts.map((part, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E8DCC8] p-4 shadow-2xs hover:border-[#D9A93B]/60 transition-colors flex gap-3.5 items-start"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8] text-[#795900] font-serif font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                0{index + 1}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#2B2420]">
                    {part.partName}
                  </h3>
                  <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    100% Biocompatible
                  </span>
                </div>

                <p className="text-[11px] text-[#795900] font-semibold">
                  Material: <span className="font-normal text-[#5C5143]">{part.material}</span>
                </p>

                <p className="text-xs text-[#5C5143] leading-relaxed pt-0.5">
                  {part.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Biological Insight Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2B2420] via-[#382E27] to-[#2B2420] text-white flex items-center justify-between flex-wrap gap-3 shadow-xs">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-[#FFDEA0] shrink-0" />
          <p className="text-xs text-[#E8DCC8] leading-relaxed">
            <strong className="text-white">Why Implants Halt Jawbone Shrinkage:</strong> Unlike bridges that leave bone unstimulated, titanium osseointegration triggers osteocytes to maintain natural bone thickness.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#FFDEA0] shrink-0 font-semibold">
          <Shield className="w-3.5 h-3.5" />
          <span>Zero Bone Resorption</span>
        </div>
      </div>
    </section>
  );
};
