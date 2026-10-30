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
    <section id="comparison" className="scroll-mt-28 space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Scale className="w-4 h-4 text-[#D9A93B]" />
          <span>Clinical Decision Matrix</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] mt-2">
          Dental Implants vs Bridges vs Dentures
        </h2>
        <p className="text-sm sm:text-base text-[#4E4636] mt-2 max-w-3xl leading-relaxed">
          Before deciding on tooth replacement, evaluate how each option impacts your adjacent teeth, long-term bone health, chewing power, and 20-year overall cost.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-[#E8DCC8] bg-white shadow-md">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-[#E8DCC8] bg-[#FAF4EA]">
              <th className="py-4 px-5 text-xs font-bold text-[#5C5143] uppercase tracking-wider w-1/4">
                Clinical Feature
              </th>
              {/* Highlight Dental Implants */}
              <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider w-1/3 bg-[#795900]/10 text-[#795900] border-x border-[#E8DCC8] relative">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#795900]" />
                  <span>{data.headings[0]}</span>
                </div>
                <span className="inline-block mt-1 text-[10px] font-bold text-white bg-[#795900] px-2 py-0.5 rounded-full">
                  Gold Standard
                </span>
              </th>
              <th className="py-4 px-5 text-xs font-bold text-[#2B2420] uppercase tracking-wider w-1/4">
                {data.headings[1]}
              </th>
              <th className="py-4 px-5 text-xs font-bold text-[#2B2420] uppercase tracking-wider w-1/4">
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
                <td className="py-4 px-5 font-bold text-[#2B2420] align-top">
                  {row.aspect}
                </td>

                {/* Primary: Dental Implant */}
                <td className="py-4 px-5 bg-[#795900]/5 border-x border-[#E8DCC8] align-top">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#2B2420] leading-relaxed">
                      {row.primaryTreatment}
                    </span>
                  </div>
                </td>

                {/* Alternative 1: Dental Bridge */}
                <td className="py-4 px-5 align-top text-[#5C5143] leading-relaxed">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{row.alternativeOne}</span>
                  </div>
                </td>

                {/* Alternative 2: Removable Denture */}
                <td className="py-4 px-5 align-top text-[#5C5143] leading-relaxed">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.alternativeTwo}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Note */}
      <div className="p-4 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8] text-xs text-[#5C5143] flex items-center justify-between flex-wrap gap-2">
        <span>
          💡 <strong>Key takeaway:</strong> While bridges or dentures appear cheaper upfront, frequent replacements and damage to natural teeth make dental implants the most economical lifetime choice.
        </span>
        <a
          href="#pricing"
          className="text-[#795900] font-bold hover:underline shrink-0"
        >
          View 0% EMI Schemes →
        </a>
      </div>
    </section>
  );
};
