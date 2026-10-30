import React from 'react';
import { ComparisonRow } from '@/data/treatmentsData';
import { Scale, CheckCircle2, AlertTriangle, XCircle, Sparkles } from 'lucide-react';

interface TreatmentComparisonTableProps {
  data: {
    headings: [string, string, string];
    rows: ComparisonRow[];
  };
}

export const TreatmentComparisonTable: React.FC<TreatmentComparisonTableProps> = ({ data }) => {
  return (
    <section id="comparison" className="scroll-mt-24 space-y-4">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Scale className="w-3.5 h-3.5 text-[#D9A93B]" />
          <span>Clinical Decision Matrix</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1.5">
          Dental Implants vs Bridges vs Dentures
        </h2>
        <p className="text-xs sm:text-sm text-[#4E4636] mt-1 w-full leading-relaxed">
          Evaluate how each option impacts adjacent teeth, long-term bone volume, bite power, and 20-year durability.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[#E8DCC8] bg-white shadow-xs">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[#E8DCC8] bg-[#FAF4EA]">
              <th className="py-3 px-4 text-[11px] font-bold text-[#5C5143] uppercase tracking-wider w-1/4">
                Clinical Feature
              </th>
              {/* Highlight Dental Implants */}
              <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider w-1/3 bg-[#795900]/10 text-[#795900] border-x border-[#E8DCC8]">
                <div className="flex items-center justify-between">
                  <span>{data.headings[0]}</span>
                  <span className="text-[9px] font-bold text-white bg-[#795900] px-2 py-0.5 rounded-full">
                    Gold Standard
                  </span>
                </div>
              </th>
              <th className="py-3 px-4 text-[11px] font-bold text-[#2B2420] uppercase tracking-wider w-1/4">
                {data.headings[1]}
              </th>
              <th className="py-3 px-4 text-[11px] font-bold text-[#2B2420] uppercase tracking-wider w-1/4">
                {data.headings[2]}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8DCC8] text-xs">
            {data.rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? 'bg-white hover:bg-[#FAF4EA]/40' : 'bg-[#FAF4EA]/20 hover:bg-[#FAF4EA]/60'}
              >
                {/* Feature Name */}
                <td className="py-3 px-4 font-bold text-[#2B2420] align-top text-xs">
                  {row.aspect}
                </td>

                {/* Primary: Dental Implant */}
                <td className="py-3 px-4 bg-[#795900]/5 border-x border-[#E8DCC8] align-top">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#2B2420] leading-snug">
                      {row.primaryTreatment}
                    </span>
                  </div>
                </td>

                {/* Alternative 1: Dental Bridge */}
                <td className="py-3 px-4 align-top text-[#5C5143] leading-snug">
                  <div className="flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{row.alternativeOne}</span>
                  </div>
                </td>

                {/* Alternative 2: Removable Denture */}
                <td className="py-3 px-4 align-top text-[#5C5143] leading-snug">
                  <div className="flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.alternativeTwo}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8] text-xs text-[#5C5143] flex items-center justify-between flex-wrap gap-2">
        <span>
          💡 <strong>Key Clinical Takeaway:</strong> Bridges damage 2 adjacent teeth, while dentures accelerate bone shrinkage. Dental implants are the only restoration that protects your natural teeth and jawbone.
        </span>
        <a
          href="#pricing"
          className="text-[#795900] font-bold hover:underline shrink-0 text-xs"
        >
          View Packages & Rates →
        </a>
      </div>
    </section>
  );
};
