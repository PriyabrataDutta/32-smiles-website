import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Phone } from 'lucide-react';
import { SectionBadge } from '@/components/common/SectionBadge';
import { TreatmentDetail } from '@/data/treatmentsData';

interface TreatmentHeroProps {
  treatment: TreatmentDetail;
}

export const TreatmentHero: React.FC<TreatmentHeroProps> = ({ treatment }) => {
  return (
    <section className="relative py-8 md:py-12 bg-[#FAF4EA] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#795900]">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/treatments" className="hover:underline">Treatments</Link>
              <span>/</span>
              <span className="text-[#2B2420] truncate">{treatment.name}</span>
            </div>

            <SectionBadge text={treatment.badge} />

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] tracking-tight leading-[1.18]">
              {treatment.heroTitle}
            </h1>

            <p className="text-xs sm:text-sm text-[#4E4636] leading-relaxed max-w-2xl">
              {treatment.heroSubtitle}
            </p>

            {/* Quick Info Tags - Compact */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-[#E8DCC8] shadow-2xs">
                <span className="text-[#5C5143] block text-[9px] uppercase font-bold">Estimated Cost</span>
                <strong className="text-[#795900] text-xs sm:text-sm">{treatment.startingPrice.split('(')[0]}</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#E8DCC8] shadow-2xs">
                <span className="text-[#5C5143] block text-[9px] uppercase font-bold">Time Required</span>
                <strong className="text-[#2B2420] text-xs sm:text-sm">{treatment.duration.split('(')[0]}</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#E8DCC8] shadow-2xs">
                <span className="text-[#5C5143] block text-[9px] uppercase font-bold">Recovery</span>
                <strong className="text-emerald-700 text-xs sm:text-sm">{treatment.recovery.split('(')[0]}</strong>
              </div>
              {treatment.clinicalSummary && (
                <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 shadow-2xs">
                  <span className="text-emerald-800 block text-[9px] uppercase font-bold">Success Rate</span>
                  <strong className="text-emerald-900 text-xs sm:text-sm">{treatment.clinicalSummary.successRate.split(' ')[0]}</strong>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href={`/book-appointment?treatment=${encodeURIComponent(treatment.name)}`}
                className="px-6 py-2.5 rounded-full bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Priority Consultation</span>
              </Link>
              <a
                href="tel:+919482712345"
                className="px-5 py-2.5 rounded-full bg-white border border-[#D2C5B0] hover:bg-[#FAF4EA] text-[#795900] font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white aspect-[4/3] group">
              <Image
                src={treatment.heroImage}
                alt={treatment.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFDEA0] bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  Available Across All 9 Clinics
                </span>
                <h3 className="font-serif text-lg font-bold mt-1.5">{treatment.name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
