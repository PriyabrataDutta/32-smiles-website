import React from 'react';
import { ImplantBrand } from '@/data/treatmentsData';
import { Award, ShieldCheck, CheckCircle2, Globe, Sparkles } from 'lucide-react';

interface TreatmentBrandShowcaseProps {
  brands: ImplantBrand[];
}

export const TreatmentBrandShowcase: React.FC<TreatmentBrandShowcaseProps> = ({ brands }) => {
  return (
    <section id="brands" className="scroll-mt-28 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Award className="w-4 h-4 text-[#D9A93B]" />
          <span>Global Implantology Brands</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] mt-2">
          Original Swiss & Swedish Implant Systems
        </h2>
        <p className="text-sm sm:text-base text-[#4E4636] mt-2 max-w-3xl leading-relaxed">
          At 32 Smiles, we never cut corners with unbranded generic implants. Every fixture placed is an authentic, serialized medical implant manufactured in Switzerland, Sweden, or South Korea, backed by international authenticity certificates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {brands.map((brand, i) => {
          return (
            <div
              key={i}
              className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all ${
                brand.highlight
                  ? 'bg-white border-[#D9A93B] shadow-xl ring-2 ring-[#D9A93B]/30 relative'
                  : 'bg-white border-[#E8DCC8] shadow-xs hover:shadow-md'
              }`}
            >
              {brand.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#795900] text-white px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FFDEA0]" />
                  <span>Clinician's Choice</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-[#5C5143] font-semibold">
                    <Globe className="w-3.5 h-3.5 text-[#795900]" />
                    {brand.origin}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                    {brand.warranty}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B2420]">
                    {brand.name}
                  </h3>
                  <div className="text-[11px] text-[#795900] font-semibold mt-1">
                    Ideal For: {brand.recommendedFor}
                  </div>
                </div>

                <ul className="space-y-2 pt-2 border-t border-[#FAF4EA]">
                  {brand.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#4E4636] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FAF4EA] flex items-center justify-between text-xs">
                <span className="text-[#5C5143] text-[11px]">Authenticity Guarantee</span>
                <span className="font-bold text-[#795900] flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#D9A93B]" />
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
