'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShieldCheck, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  subtitle?: string;
  badge?: string;
  imageSrc?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  subtitle = 'Thoughtful dental care for every stage of your smile journey — from preventive checkups to advanced implants and confident smile makeovers.',
  badge = 'A calmer way to care for your smile',
  imageSrc = '/hero-consultation.png',
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F7F2EA] border-b border-[#E8DCC8]">
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#D9A93B]/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#C6D7CF]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-16">
          <div className="lg:w-[46%] flex flex-col justify-center space-y-6 text-center lg:text-left z-10">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#795900]">
              <span className="h-px w-8 bg-[#D9A93B]" />
              <span>{badge}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-semibold text-[#2B2420] leading-[1.05] tracking-tight">
              A healthier smile starts with a little more <span className="text-[#9A7121] italic">care.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C5147] leading-relaxed max-w-xl mx-auto lg:mx-0">{subtitle}</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs font-semibold text-[#4E4636]">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 / 5 from 15,200+ patients</span>
              <span className="h-1 w-1 rounded-full bg-[#D9A93B]" />
              <span>9 clinics across Bangalore</span>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/book-appointment" className="w-full sm:w-auto bg-[#795900] hover:bg-[#573F00] text-white font-bold text-sm px-7 py-4 rounded-full shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer">
                <span>Book a free consultation</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/branches" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#795900] hover:text-[#573F00] px-5 py-3 rounded-full bg-white/70 border border-[#D2C5B0] hover:bg-white transition-colors">
                <MapPin className="w-4 h-4 text-[#D9A93B]" /><span>Find your nearest clinic</span>
              </Link>
            </div>
            <div className="pt-5 border-t border-[#E8DCC8] grid grid-cols-2 gap-4 text-xs text-[#4E4636] font-medium max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /><span>Gentle, pain-aware treatment</span></div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" /><span>Modern, hygienic clinics</span></div>
            </div>
          </div>

          <div className="lg:w-[54%] relative w-full max-w-2xl">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white aspect-[4/3] group">
              <Image
                src={imageSrc}
                alt="A relaxed dental consultation at 32 Smiles"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 54vw, 672px"
                quality={85}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2420]/20 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E8DCC8] flex items-center gap-3 animate-fade-in z-20">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4EA] flex items-center justify-center text-[#795900] border border-[#E8DCC8]"><span className="font-serif text-2xl font-bold">20+</span></div>
              <div><p className="text-[10px] uppercase font-bold tracking-wider text-[#795900]">Established</p><p className="text-xs sm:text-sm font-bold text-[#2B2420]">in Bangalore since 2005</p></div>
            </div>
            <div className="hidden sm:flex absolute -top-4 -right-2 bg-white px-4 py-2 rounded-full shadow-lg border border-[#E8DCC8] items-center gap-2 text-xs font-semibold text-[#2B2420] z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /><span>Open today · 10 AM – 9 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
