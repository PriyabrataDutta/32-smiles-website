import React from 'react';
import { ImplantBrand } from '@/data/treatmentsData';
import { Award, ShieldCheck, CheckCircle2, Globe, Sparkles } from 'lucide-react';

interface TreatmentBrandShowcaseProps {
  brands: ImplantBrand[];
}

export const TreatmentBrandShowcase: React.FC<TreatmentBrandShowcaseProps> = ({ brands }) => {
  return (
    <section id="brands" className="scroll-mt-24 space-y-5">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Award className="w-3.5 h-3.5 text-[#D9A93B]" />
          <span>Global Implantology Brands</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1.5">
          Original Swiss & Swedish Implant Systems
        </h2>
        <p className="text-xs sm:text-sm text-[#4E4636] mt-1 w-full leading-relaxed">
          At 32 Smiles, every fixture is an authentic, serialized medical post manufactured in Switzerland, Sweden, or South Korea, accompanied by a verified manufacturer certificate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {brands.map((brand, i) => {
          return (
            <div
              key={i}
              className={`rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                brand.highlight
                  ? 'bg-white border-[#D9A93B] shadow-md ring-2 ring-[#D9A93B]/30 relative'
                  : 'bg-white border-[#E8DCC8] shadow-2xs hover:shadow-xs'
              }`}
            >
              {brand.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#795900] text-white px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#FFDEA0]" />
                  <span>Clinician's Choice</span>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-[#5C5143] font-semibold">
                    <Globe className="w-3.5 h-3.5 text-[#795900]" />
                    {brand.origin}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                    {brand.warranty}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B2420]">
                    {brand.name}
                  </h3>
                  <div className="text-[11px] text-[#795900] font-semibold mt-0.5">
                    Ideal: {brand.recommendedFor.slice(0, 48)}...
                  </div>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-[#FAF4EA]">
                  {brand.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#4E4636] leading-snug">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-[#FAF4EA] flex items-center justify-between text-xs">
                <span className="text-[#5C5143] text-[10px]">Authenticity Guarantee</span>
                <span className="font-bold text-[#795900] text-[11px] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9A93B]" />
                  Serialized Card
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
