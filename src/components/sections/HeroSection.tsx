import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, MapPin, Sparkles, UserCheck } from 'lucide-react';

interface HeroSectionProps {
  eyebrow?: string;
  headline?: React.ReactNode;
  subtitle?: string;
  imageSrc?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const patientAvatars = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces&q=80',
    alt: 'Satisfied 32 Smiles Patient',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=80',
    alt: 'Smiles Transformation Patient',
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces&q=80',
    alt: 'Dental Care Patient',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80',
    alt: 'Happy Aligner Patient',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  eyebrow = 'EXPERT DENTAL CARE FOR A HEALTHIER TOMORROW',
  headline,
  subtitle = 'Advanced dental treatments, expert specialists and compassionate care — all under one roof in Bengaluru.',
  imageSrc = '/32-smiles-hero.png',
  primaryCtaText = 'Book an Appointment',
  primaryCtaLink = '/book-appointment',
  secondaryCtaText = 'Explore Treatments',
  secondaryCtaLink = '/treatments',
}) => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[#FAF4EA] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20"
    >
      {/* Subtle Background Tooth Watermark on Left */}
      <svg
        className="pointer-events-none absolute -left-16 sm:-left-8 top-8 h-80 w-80 sm:h-[420px] sm:w-[420px] text-[#D9A93B]/15 select-none"
        viewBox="0 0 200 240"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M40 70 C35 30, 85 20, 100 45 C115 20, 165 30, 160 70 C156 100, 150 140, 140 210 C135 225, 120 220, 115 195 C110 170, 105 155, 100 155 C95 155, 90 170, 85 195 C80 220, 65 225, 60 210 C50 140, 44 100, 40 70 Z" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* Left Editorial Content */}
          <div className="relative z-10 flex flex-col text-left">
            {/* Eyebrow with Target Icon */}
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#795900] sm:text-[12.5px]">
              <svg
                className="h-3.5 w-3.5 text-[#795900] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
              <span>{eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="font-serif text-[2.6rem] font-bold leading-[1.06] tracking-tight text-[#2B2420] sm:text-5xl lg:text-[58px] xl:text-[64px]"
            >
              {headline ?? (
                <>
                  Confident
                  <br />
                  Smiles for a
                  <br />
                  Brighter You
                </>
              )}
            </h1>

            {/* Supporting Subtext */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C5147] sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            {/* CTA Buttons Row */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href={primaryCtaLink}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#795900] px-7 py-3.5 sm:py-4 text-sm sm:text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(121,89,0,0.2)] transition-all hover:bg-[#573F00] hover:shadow-[0_12px_28px_rgba(87,63,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A93B]"
              >
                <Calendar className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                <span>{primaryCtaText}</span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href={secondaryCtaLink}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#2B2420] bg-transparent px-7 py-3.5 sm:py-4 text-sm sm:text-[15px] font-semibold text-[#2B2420] transition-colors hover:bg-[#2B2420]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A93B]"
              >
                <span>{secondaryCtaText}</span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Trust Indicators Row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs sm:text-[13px] font-semibold text-[#4E4636]">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 shrink-0 text-[#795900]" aria-hidden="true" />
                <span>Experienced Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-[#795900]" aria-hidden="true" />
                <span>Advanced Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#795900]" aria-hidden="true" />
                <span>9+ Clinics in Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[15/10] w-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] bg-[#F7F0E4] shadow-[0_16px_45px_rgba(43,36,32,0.12)]">
              {/* Soft Left Blend Gradient on Desktop */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-28 bg-gradient-to-r from-[#FAF4EA] via-[#FAF4EA]/50 to-transparent lg:block"
                aria-hidden="true"
              />

              <Image
                src={imageSrc}
                alt="Friendly Indian female dentist treating a smiling, relaxed female patient in a modern dental chair at 32 Smiles clinic"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                quality={90}
                className="object-cover object-[70%_center]"
              />

              {/* Hand-Drawn Script Badge: Because Every Smile Matters */}
              <div
                className="pointer-events-none absolute top-4 right-4 sm:top-6 sm:right-6 z-20 select-none text-[#2B2420]"
                aria-hidden="true"
              >
                <div className="text-right font-serif italic drop-shadow-xs rotate-[-3deg]">
                  <p className="text-sm sm:text-base lg:text-lg leading-tight font-normal text-[#4E4636]">
                    Because
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-[26px] font-bold leading-tight text-[#2B2420]">
                    Every Smile
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-tight font-normal text-[#4E4636]">
                    Matters
                  </p>
                </div>
                {/* Curved smile underline */}
                <svg
                  className="ml-auto mt-0.5 h-4 w-20 sm:w-24 text-[#2B2420]"
                  viewBox="0 0 100 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <path d="M 8 6 Q 50 24 92 6" />
                  <path d="M 7 11 C 7.5 8, 10 6, 12 5" />
                  <path d="M 93 11 C 92.5 8, 90 6, 88 5" />
                </svg>
              </div>

              {/* Floating Patient Trust Pill at Bottom */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center gap-3 rounded-2xl border border-[#E8DCC8] bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:px-4 sm:py-3">
                {/* Overlapping Avatars */}
                <div className="flex -space-x-2 overflow-hidden">
                  {patientAvatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-white overflow-hidden bg-[#FAF4EA]"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Trust Label */}
                <div className="text-left">
                  <p className="text-[10.5px] font-medium leading-none text-[#6E6458]">
                    Trusted by
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold leading-none text-[#2B2420]">
                    15,000+ Patients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
