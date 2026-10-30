'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface EmiCalculatorCardProps {
  onApplyEmi?: (monthlyAmount: string, totalCost: number) => void;
  title?: string;
  subtitle?: string;
  defaultCost?: number;
}

export const EmiCalculatorCard: React.FC<EmiCalculatorCardProps> = ({
  onApplyEmi,
  title = 'Instant 0% Dental EMI Calculator',
  subtitle = 'Afford world-class smile treatments comfortably with easy monthly installments. Zero hidden charges, zero processing fees.',
  defaultCost = 35000,
}) => {
  const [cost, setCost] = useState<number>(defaultCost);

  const presets = [
    { label: 'Root Canal & Crown', amount: 15000 },
    { label: 'Dental Implant', amount: 28000 },
    { label: 'Invisalign Aligners', amount: 75000 },
    { label: 'Smile Makeover', amount: 120000 },
  ];

  const emi6 = Math.round(cost / 6);
  const emi12 = Math.round(cost / 12);
  const emi24 = Math.round(cost / 24);

  return (
    <div className="bg-[#FFF8F0] rounded-3xl p-6 sm:p-10 border-2 border-[#D9A93B] shadow-xl relative overflow-hidden">
      {/* Subtle Corner Badge */}
      <div className="absolute top-0 right-0 bg-[#D9A93B] text-[#573F00] text-[11px] font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1 shadow-xs">
        <Sparkles className="w-3.5 h-3.5" />
        0% Interest Schemes Available
      </div>

      <div className="text-center mb-8 max-w-xl mx-auto pt-2">
        <div className="w-12 h-12 rounded-2xl bg-[#D9A93B]/20 flex items-center justify-center text-[#795900] mx-auto mb-3">
          <Calculator className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#4E4636]">
          {subtitle}
        </p>
      </div>

      {/* Preset Selector */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-[#795900] uppercase tracking-wider mb-2 text-center">
          Quick Preset Treatments
        </label>
        <div className="flex flex-wrap justify-center gap-2">
          {presets.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setCost(p.amount)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                cost === p.amount
                  ? 'bg-[#795900] text-white shadow'
                  : 'bg-white text-[#2B2420] border border-[#D2C5B0] hover:bg-[#F5EDE1]'
              }`}
            >
              {p.label} ({formatCurrency(p.amount)})
            </button>
          ))}
        </div>
      </div>

      {/* Slider and Manual Input */}
      <div className="bg-white p-6 rounded-2xl border border-[#EBE3D7] mb-8 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label htmlFor="treatment-cost-input" className="text-xs font-bold text-[#2B2420]">
            Estimated Treatment Cost
          </label>
          <div className="flex items-center gap-2">
            <input
              id="treatment-cost-input"
              aria-label="Estimated treatment cost in rupees"
              type="number"
              min={5000}
              max={600000}
              step={5000}
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              className="w-36 px-3 py-1.5 rounded-lg border border-[#D2C5B0] text-right font-serif text-lg font-bold text-[#2B2420] focus:ring-2 focus:ring-[#D9A93B] outline-none"
            />
          </div>
        </div>

        <input
          id="treatment-cost-range"
          aria-label="Adjust estimated treatment cost with slider"
          type="range"
          min={5000}
          max={600000}
          step={5000}
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          className="w-full accent-[#795900] cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-[#5C5143] font-medium">
          <span>₹5,000</span>
          <span>₹3,00,000</span>
          <span>₹6,00,000</span>
        </div>
      </div>

      {/* EMI Option Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* 6 Months */}
        <div className="bg-white p-5 rounded-2xl border border-[#D2C5B0] text-center hover:border-[#795900] transition-colors relative">
          <span className="text-[10px] font-bold tracking-wider text-[#5C5143] uppercase">
            6 Months Tenure
          </span>
          <div className="font-serif text-2xl font-bold text-[#795900] my-1">
            {formatCurrency(emi6)}
            <span className="text-xs text-[#5C5143] font-sans font-normal">/mo</span>
          </div>
          <span className="inline-block text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
            0% Interest
          </span>
        </div>

        {/* 12 Months (Recommended) */}
        <div className="bg-white p-5 rounded-2xl border-2 border-[#795900] text-center relative shadow-md">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#795900] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
          <span className="text-[10px] font-bold tracking-wider text-[#5C5143] uppercase">
            12 Months Tenure
          </span>
          <div className="font-serif text-2xl font-bold text-[#795900] my-1">
            {formatCurrency(emi12)}
            <span className="text-xs text-[#5C5143] font-sans font-normal">/mo</span>
          </div>
          <span className="inline-block text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
            0% Interest
          </span>
        </div>

        {/* 24 Months */}
        <div className="bg-white p-5 rounded-2xl border border-[#D2C5B0] text-center hover:border-[#795900] transition-colors">
          <span className="text-[10px] font-bold tracking-wider text-[#5C5143] uppercase">
            24 Months Tenure
          </span>
          <div className="font-serif text-2xl font-bold text-[#795900] my-1">
            {formatCurrency(emi24)}
            <span className="text-xs text-[#5C5143] font-sans font-normal">/mo</span>
          </div>
          <span className="inline-block text-[10px] bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
            Low Interest Partner
          </span>
        </div>
      </div>

      {/* Trust Points */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#573F00] font-medium border-t border-[#EBE3D7] pt-6">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#795900]" />
          Instant Approval with Aadhaar / PAN
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#795900]" />
          Zero Foreclosure Fees
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#795900]" />
          All Major Debit / Credit Cards & Bajaj Finserv
        </div>
      </div>

      {onApplyEmi && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => onApplyEmi(formatCurrency(emi12), cost)}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#795900] hover:bg-[#573F00] text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            Apply for EMI Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default EmiCalculatorCard;

