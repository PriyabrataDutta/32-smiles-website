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
    <section className="relative py-14 md:py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#795900]">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/treatments" className="hover:underline">Treatments</Link>
              <span>/</span>
              <span className="text-[#2B2420] truncate">{treatment.name}</span>
            </div>

            <SectionBadge text={treatment.badge} />

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.18]">
              {treatment.heroTitle}
            </h1>

            <p className="text-sm sm:text-base text-[#4E4636] leading-relaxed">
              {treatment.heroSubtitle}
            </p>

            {/* Quick Info Tags */}
            <div className="flex flex-wrap gap-3 pt-2 text-xs">
              <div className="p-3 rounded-2xl bg-white border border-[#E8DCC8] shadow-xs">
                <span className="text-[#807663] block text-[10px] uppercase font-bold">Estimated Cost</span>
                <strong className="text-[#795900] text-sm">{treatment.startingPrice}</strong>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E8DCC8] shadow-xs">
                <span className="text-[#807663] block text-[10px] uppercase font-bold">Time Required</span>
                <strong className="text-[#2B2420] text-sm">{treatment.duration}</strong>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E8DCC8] shadow-xs">
                <span className="text-[#807663] block text-[10px] uppercase font-bold">Recovery</span>
                <strong className="text-emerald-700 text-sm">{treatment.recovery}</strong>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap gap-4">
              <Link
                href={`/book-appointment?treatment=${encodeURIComponent(treatment.name)}`}
                className="px-8 py-3.5 rounded-full bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Priority Consultation</span>
              </Link>
              <a
                href="tel:+919482712345"
                className="px-6 py-3.5 rounded-full bg-white border border-[#D2C5B0] hover:bg-[#FAF4EA] text-[#795900] font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3]">
              <Image
                src={treatment.heroImage}
                alt={treatment.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFDEA0] bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                  Performed at all 9 Clinics
                </span>
                <h3 className="font-serif text-xl font-bold mt-2">{treatment.name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
