import React from 'react';
import { RecoveryPhase } from '@/data/treatmentsData';
import { Clock, HeartPulse, CheckCircle2, Utensils } from 'lucide-react';

interface TreatmentRecoveryTimelineProps {
  phases: RecoveryPhase[];
}

export const TreatmentRecoveryTimeline: React.FC<TreatmentRecoveryTimelineProps> = ({ phases }) => {
  return (
    <section id="recovery" className="scroll-mt-28 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Clock className="w-4 h-4 text-[#D9A93B]" />
          <span>Patient Journey</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] mt-2">
          Day-by-Day Recovery & Healing Pathway
        </h2>
        <p className="text-sm sm:text-base text-[#4E4636] mt-2 max-w-3xl leading-relaxed">
          Because we use 3D-guided flapless keyhole surgery, tissue disruption is minimal. Here is exactly what you will experience from hour zero until your final permanent smile is revealed.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#D9A93B]/40 space-y-10 my-4">
        {phases.map((phase, index) => (
          <div key={index} className="relative group">
            {/* Timeline Bullet */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#795900] text-white flex items-center justify-center font-bold text-xs ring-4 ring-[#FAF4EA] shadow-sm">
              0{index + 1}
            </div>

            <div className="bg-white rounded-3xl border border-[#E8DCC8] p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#795900]/10 text-[#795900] text-xs font-bold">
                  {phase.timeline}
                </span>
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <HeartPulse className="w-3.5 h-3.5" />
                  Controlled Healing
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B2420]">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4E4636] mt-1.5 leading-relaxed">
                  {phase.whatToExpect}
                </p>
              </div>

              {/* Diet & Care Protocol */}
              <div className="p-4 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8] space-y-2.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#795900] flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#D9A93B]" />
                  <span>Diet & Post-Op Guidelines</span>
                </div>
                <ul className="space-y-1.5">
                  {phase.dietAndCare.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#5C5143]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
