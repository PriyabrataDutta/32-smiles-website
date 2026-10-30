import React from 'react';
import { RecoveryPhase } from '@/data/treatmentsData';
import { Clock, HeartPulse, CheckCircle2, Utensils } from 'lucide-react';

interface TreatmentRecoveryTimelineProps {
  phases: RecoveryPhase[];
}

export const TreatmentRecoveryTimeline: React.FC<TreatmentRecoveryTimelineProps> = ({ phases }) => {
  return (
    <section id="recovery" className="scroll-mt-24 space-y-5">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Clock className="w-3.5 h-3.5 text-[#D9A93B]" />
          <span>Patient Journey</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1.5">
          Day-by-Day Recovery & Healing Pathway
        </h2>
        <p className="text-xs sm:text-sm text-[#4E4636] mt-1 max-w-2xl leading-relaxed">
          Flapless 3D keyhole guidance minimizes tissue disruption. Here is your expected progress from hour zero until your permanent crown is placed.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-7 border-l-2 border-[#D9A93B]/40 space-y-4 my-2">
        {phases.map((phase, index) => (
          <div key={index} className="relative group">
            {/* Timeline Bullet */}
            <div className="absolute -left-[29px] sm:-left-[33px] top-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#795900] text-white flex items-center justify-center font-bold text-[11px] ring-4 ring-[#FAF4EA] shadow-2xs">
              0{index + 1}
            </div>

            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#795900]/10 text-[#795900] text-[11px] font-bold">
                    {phase.timeline}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#2B2420]">
                    {phase.title}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <HeartPulse className="w-3 h-3" />
                  Comfort Care
                </span>
              </div>

              <p className="text-xs text-[#4E4636] leading-relaxed">
                {phase.whatToExpect}
              </p>

              {/* Diet & Care Protocol - Compact */}
              <div className="p-3 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8] space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#795900] flex items-center gap-1">
                  <Utensils className="w-3 h-3 text-[#D9A93B]" />
                  <span>Diet & Care Guidelines</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {phase.dietAndCare.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#5C5143] leading-snug">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
