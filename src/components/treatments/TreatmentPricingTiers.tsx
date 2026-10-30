import React from 'react';
import Link from 'next/link';
import { PricingTier } from '@/data/treatmentsData';
import { CheckCircle2, Sparkles, Shield, ArrowRight, Award } from 'lucide-react';

interface TreatmentPricingTiersProps {
  tiers: PricingTier[];
  treatmentName: string;
}

export const TreatmentPricingTiers: React.FC<TreatmentPricingTiersProps> = ({
  tiers,
  treatmentName,
}) => {
  return (
    <section id="pricing" className="scroll-mt-24 space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Award className="w-4 h-4 text-[#D9A93B]" />
          <span>Transparent Packages</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1.5">
          Implant Packages & Pricing
        </h2>
        <p className="text-xs sm:text-sm text-[#4E4636] mt-1.5 w-full leading-relaxed">
          All-inclusive pricing with zero hidden fees. Every package covers your titanium fixture, custom CAD/CAM abutment, monolithic zirconia crown, and clinical warranty card.
        </p>
      </div>

      {/* Pricing Cards Grid - Compact & Beautiful */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((tier, index) => {
          return (
            <div
              key={index}
              className={`rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                tier.recommended
                  ? 'bg-white border-[#D9A93B] shadow-lg ring-2 ring-[#D9A93B]/30 relative'
                  : 'bg-white border-[#E8DCC8] shadow-2xs hover:shadow-sm'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#795900] text-white px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#FFDEA0]" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div className="space-y-3.5">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B2420]">
                    {tier.title}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#795900]">
                      {tier.price}
                    </span>
                    <span className="text-[11px] text-[#5C5143]">/ tooth complete</span>
                  </div>
                </div>

                <ul className="space-y-2 pt-3 border-t border-[#FAF4EA]">
                  {tier.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#4E4636]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#FAF4EA]">
                <Link
                  href={`/book-appointment?package=${encodeURIComponent(tier.title)}&treatment=${encodeURIComponent(treatmentName)}`}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    tier.recommended
                      ? 'bg-[#795900] hover:bg-[#573F00] text-white shadow-xs'
                      : 'bg-[#FAF4EA] hover:bg-white text-[#795900] border border-[#D2C5B0]'
                  }`}
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust reassurance banner */}
      <div className="p-4 rounded-2xl bg-white border border-[#E8DCC8] shadow-2xs flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2.5 text-xs text-[#4E4636]">
          <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Includes complete preoperative 3D digital diagnosis, sterile surgical setup, and follow-up reviews.</span>
        </div>
        <span className="text-[11px] font-bold text-[#795900] bg-[#FAF4EA] px-3 py-1 rounded-full border border-[#E8DCC8]">
          Fixed Transparent Rates
        </span>
      </div>
    </section>
  );
};
