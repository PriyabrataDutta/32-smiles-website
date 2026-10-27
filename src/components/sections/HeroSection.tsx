'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';
import { SectionBadge } from '@/components/common/SectionBadge';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  imageSrc?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Bangalore's Premier Multispeciality Dental Clinics Since 2005",
  subtitle = "Painless Root Canals, Certified Invisalign Aligners, Precision Implants, and Cosmetic Smile Makeovers across 9 modern clinics in Bangalore.",
  badge = "Bangalore's Premier Dental Care Network",
  imageSrc = CLINIC_INFO.heroImage,
}) => {
  return (
    <section className="relative bg-[#FAF4EA] pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#E8DCC8]">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A93B]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left z-10">
            <SectionBadge text={badge} />

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#2B2420] leading-[1.15] tracking-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-[#4E4636] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-semibold text-[#2B2420]">
              <span className="bg-[#D9A93B]/20 text-[#795900] px-3 py-1 rounded-full font-bold">
                9 Bangalore Branches
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                4.9 <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> (15,200+ Reviews)
              </span>
              <span>•</span>
              <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                0% EMI Available
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/book-appointment"
                className="w-full sm:w-auto bg-[#795900] hover:bg-[#573F00] text-white font-bold text-sm px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/branches"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#795900] hover:text-[#573F00] px-5 py-3 rounded-full bg-white border border-[#D2C5B0] hover:bg-[#FAF4EA] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#D9A93B]" />
                <span>Locate Nearest Branch</span>
              </Link>
            </div>

            {/* Guarantees */}
            <div className="pt-4 border-t border-[#E8DCC8] grid grid-cols-2 gap-4 text-xs text-[#4E4636] font-medium max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Micro-Rotary Painless RCT</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ISO 9001:2015 Sterilization</span>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:w-1/2 relative w-full max-w-xl">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] group">
              <img
                src={imageSrc}
                alt="32 Smiles Premier Multispeciality Dental Clinic Bangalore"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge - 20+ Years */}
            <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E8DCC8] flex items-center gap-3 animate-fade-in z-20">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4EA] flex items-center justify-center text-[#795900] border border-[#E8DCC8]">
                <span className="font-serif text-2xl font-bold">20+</span>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#795900]">Years of</p>
                <p className="text-xs sm:text-sm font-bold text-[#2B2420]">Clinical Excellence</p>
              </div>
            </div>

            {/* Floating Badge - Verified Care */}
            <div className="hidden sm:flex absolute -top-4 -right-2 bg-white px-4 py-2 rounded-full shadow-lg border border-[#E8DCC8] items-center gap-2 text-xs font-semibold text-[#2B2420] z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Accepting New Patients Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
