import React from 'react';
import Image from 'next/image';
import { AnatomyPart } from '@/data/treatmentsData';
import { Layers, CheckCircle2, Shield, Sparkles, Cpu, Award } from 'lucide-react';

interface TreatmentAnatomyBreakdownProps {
  anatomyParts: AnatomyPart[];
}

const TIER_IMAGES = [
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80', // Titanium Fixture (Root)
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80', // CAD/CAM Abutment (Collar)
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80', // Monolithic Zirconia Crown
];

const TIER_BADGES = ['Lifetime Root Fusion', 'Zero Micro-Gap Seal', 'Diamond Milled 1200+ MPa'];

export const TreatmentAnatomyBreakdown: React.FC<TreatmentAnatomyBreakdownProps> = ({
  anatomyParts,
}) => {
  return (
    <section id="anatomy" className="scroll-mt-24 space-y-5 w-full">
      {/* Section Header - Stretches Full Width */}
      <div className="w-full">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Layers className="w-3.5 h-3.5 text-[#D9A93B]" />
          <span>Biomechanical Engineering</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1.5">
          Anatomy of a Modern Dental Implant
        </h2>
        <p className="text-xs sm:text-sm text-[#4E4636] mt-1 w-full leading-relaxed">
          Unlike bridges or dentures that sit on gum tissue, an implant is a 3-part titanium-zirconia system replicating the natural tooth root and crown.
        </p>
      </div>

      {/* Wide Illustrative Anatomy Banner - Stretches 100% Width */}
      <div className="relative w-full rounded-2xl overflow-hidden aspect-[21/8] sm:aspect-[24/7] border border-[#E8DCC8] shadow-xs group">
        <Image
          src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
          alt="Dental Implant Anatomy and 3-Tier Bio-Integration"
          fill
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover group-hover:scale-102 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent flex items-center p-5 sm:p-7">
          <div className="max-w-lg text-white space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#795900] text-[#FFDEA0] text-[10px] font-bold uppercase tracking-wider">
              Precision Restorative Engineering
            </span>
            <h3 className="font-serif text-base sm:text-xl font-bold leading-tight">
              Permanent 3-Tier Bio-Integration
            </h3>
            <p className="text-[11px] sm:text-xs text-[#E8DCC8] leading-relaxed hidden sm:block">
              Each component is custom-machined down to 0.01mm to replicate natural tooth root mechanics, stimulating living jawbone cells to halt bone resorption and preserve facial contour for life.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-xs text-[10px] text-white font-medium">
                ① Monolithic Crown
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-xs text-[10px] text-white font-medium">
                ② CAD/CAM Abutment
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-xs text-[10px] text-white font-medium">
                ③ Titanium Root
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Tier Cards - Stretches 100% Width Across 3 Equal Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {anatomyParts.map((part, index) => {
          const imgUrl = TIER_IMAGES[index] || TIER_IMAGES[0];
          const badgeText = TIER_BADGES[index] || '100% Biocompatible';

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E8DCC8] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#D9A93B]/60 transition-all flex flex-col justify-between group w-full"
            >
              {/* Card Thumbnail Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF4EA]">
                <Image
                  src={imgUrl}
                  alt={part.partName}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-[#795900] text-white flex items-center justify-center font-serif text-xs font-bold shadow-xs">
                  0{index + 1}
                </div>
                <div className="absolute bottom-2 right-2 text-[9px] font-bold text-emerald-900 bg-emerald-100/90 backdrop-blur-xs px-2 py-0.5 rounded-full border border-emerald-300">
                  {badgeText}
                </div>
              </div>

              {/* Card Content - Stretches to Fill */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#2B2420] leading-snug">
                    {part.partName}
                  </h3>

                  <div className="mt-1.5 p-2 rounded-lg bg-[#FAF4EA] border border-[#E8DCC8] text-[11px] space-y-1">
                    <div className="text-[#5C5143]">
                      <strong className="text-[#2B2420]">Material:</strong> {part.material}
                    </div>
                    <div className="text-[#795900]">
                      <strong>Function:</strong> {part.function}
                    </div>
                  </div>

                  <p className="text-xs text-[#5C5143] leading-relaxed mt-2">
                    {part.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#FAF4EA] flex items-center gap-1.5 text-[10px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Biologically inert & non-allergenic</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-Width Biological Insight Banner - Stretches 100% Width */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2B2420] via-[#382E27] to-[#2B2420] text-white flex items-center justify-between flex-wrap gap-3 shadow-xs w-full">
        <div className="flex items-center gap-2.5 max-w-2xl">
          <Sparkles className="w-4 h-4 text-[#FFDEA0] shrink-0" />
          <p className="text-xs text-[#E8DCC8] leading-relaxed">
            <strong className="text-white">Why Implants Halt Jawbone Shrinkage:</strong> Unlike bridges that leave bone unstimulated, titanium osseointegration transmits natural masticatory forces to osteocytes, maintaining bone thickness and youthful facial symmetry.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#FFDEA0] shrink-0 font-semibold bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
          <Shield className="w-3.5 h-3.5" />
          <span>Zero Bone Resorption</span>
        </div>
      </div>
    </section>
  );
};
