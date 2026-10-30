import React from 'react';
import Link from 'next/link';
import { PricingTier } from '@/data/treatmentsData';
import { CreditCard, CheckCircle2, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { EmiCalculatorCard } from '@/components/common/EmiCalculatorCard';

interface TreatmentPricingTiersProps {
  tiers: PricingTier[];
  treatmentName: string;
}

export const TreatmentPricingTiers: React.FC<TreatmentPricingTiersProps> = ({
  tiers,
  treatmentName,
}) => {
  return (
    <section id="pricing" className="scroll-mt-28 space-y-10">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <CreditCard className="w-4 h-4 text-[#D9A93B]" />
          <span>Transparent Packages</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] mt-2">
          Implant Packages & 0% EMI Plans
        </h2>
        <p className="text-sm sm:text-base text-[#4E4636] mt-2 max-w-3xl leading-relaxed">
          Clear, all-inclusive pricing with zero hidden charges. Every package covers your titanium fixture, custom abutment, permanent monolithic zirconia crown, and clinical warranty card.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => {
          return (
            <div
              key={index}
              className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all ${
                tier.recommended
                  ? 'bg-white border-[#D9A93B] shadow-xl ring-2 ring-[#D9A93B]/40 relative'
                  : 'bg-white border-[#E8DCC8] shadow-xs hover:shadow-md'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#795900] text-white px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FFDEA0]" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B2420]">
                    {tier.title}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-[#795900]">
                      {tier.price}
                    </span>
                    <span className="text-xs text-[#5C5143]">/ tooth</span>
                  </div>
                  <div className="text-xs font-bold text-emerald-700 mt-1">
                    0% EMI: {tier.emi}
                  </div>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#FAF4EA]">
                  {tier.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#4E4636]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FAF4EA]">
                <Link
                  href={`/book-appointment?package=${encodeURIComponent(tier.title)}&treatment=${encodeURIComponent(treatmentName)}`}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    tier.recommended
                      ? 'bg-[#795900] hover:bg-[#573F00] text-white shadow-sm'
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

      {/* Interactive 0% EMI Calculator Widget */}
      <div className="bg-[#FAF4EA] rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900]">
            No-Cost Monthly Installments
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#2B2420]">
            Calculate Your Monthly EMI
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5143]">
            Instant paperless approvals via Bajaj Finserv, HDFC Bank, ICICI Bank, and Pine Labs at all 9 clinics.
          </p>
        </div>
        <EmiCalculatorCard />
      </div>
    </section>
  );
};
