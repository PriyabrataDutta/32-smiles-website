'use client';

import React from 'react';
import Link from 'next/link';
import { TREATMENTS_LIST } from '@/data/clinicData';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Baby,
  Activity,
  Scissors,
  HeartPulse,
  ChevronRight,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { SectionBadge } from '@/components/common/SectionBadge';

interface TreatmentsSectionProps {
  className?: string;
  limit?: number;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  className = '',
  limit,
}) => {
  const getTreatmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#795900]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#795900]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#795900]" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-[#795900]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#795900]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#795900]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-[#795900]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#795900]" />;
    }
  };

  const displayedTreatments = limit ? TREATMENTS_LIST.slice(0, limit) : TREATMENTS_LIST;

  return (
    <section className={`py-20 bg-[#FAF4EA] border-b border-[#E8DCC8] ${className}`} id="treatments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
          <SectionBadge text="Multispeciality Dental Procedures" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
            Comprehensive Dental Solutions Under One Roof
          </h2>
          <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-[#4E4636]">
            Every treatment is guided by micro-precision instruments, 3D intraoral diagnostics, and pain-free anesthesia protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTreatments.map((treatment) => {
            const slug = treatment.name
              .toLowerCase()
              .replace(/[\/\(\)]+/g, '')
              .replace(/\s+/g, '-');

            return (
              <Link
                key={treatment.id}
                href={`/treatments/${slug}`}
                className="bg-white p-6 rounded-3xl card-shadow border border-[#E8DCC8] hover:border-[#D9A93B] card-shadow-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#FAF4EA] group-hover:bg-[#D9A93B] rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <div className="group-hover:text-[#573F00] transition-colors">
                      {getTreatmentIcon(treatment.iconName)}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#2B2420] mb-2 group-hover:text-[#795900] transition-colors">
                    {treatment.name}
                  </h3>

                  <p className="text-xs text-[#6E6458] leading-relaxed line-clamp-2">
                    {treatment.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FAF4EA] flex items-center justify-between text-xs font-bold text-[#795900] group-hover:text-[#573F00]">
                  <span>Explore Procedure</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-[#D2C5B0] hover:border-[#795900] text-[#795900] rounded-full font-bold text-xs shadow-xs hover:shadow-md transition-all"
            >
              <span>View All 14 Speciality Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
