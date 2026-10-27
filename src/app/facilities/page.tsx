import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Camera,
  Activity,
  CheckCircle2,
  Scan,
  Zap,
  Layers,
  ThermometerSnowflake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advanced Facilities & Dental Technology | 32 Smiles Bangalore',
  description:
    'Discover the cutting-edge 3D CBCT, iTero digital scanners, Class-B sterilization, and painless laser technology deployed across all 9 32 Smiles clinics in Bangalore.',
};

export default function FacilitiesPage() {
  const technologies = [
    {
      icon: Scan,
      title: '3D CBCT Low-Dose Scanner',
      desc: 'Sub-millimeter 3D imaging reveals exact nerve canals, bone density, and sinus contours for 100% predictable implant and surgical planning.',
    },
    {
      icon: Camera,
      title: 'iTero 5D Intraoral 3D Scanner',
      desc: 'Eliminates messy impression pastes. Captures 6,000 optical frames per second for high-precision aligners, veneers, and crowns.',
    },
    {
      icon: Zap,
      title: 'Diode Soft-Tissue Laser',
      desc: 'Enables bloodless, sutureless gum shaping and accelerates pocket healing with virtually zero post-operative pain or swelling.',
    },
    {
      icon: Activity,
      title: 'Rotary Micro-Endodontic Motors',
      desc: 'Digital torque-controlled Swiss motors paired with electronic apex locators complete root canals in one relaxing sitting.',
    },
    {
      icon: Layers,
      title: 'German Dental Operating Units',
      desc: 'Ergonomic orthopedic memory foam patient chairs equipped with overhead HD intraoral diagnostic display monitors.',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Piezo-Electric Surgical Unit',
      desc: 'Micrometric ultrasonic bone cutting for wisdom tooth removal that protects adjacent soft tissues, nerves, and blood vessels.',
    },
  ];

  const sterilizationSteps = [
    { step: '01', title: 'Ultrasonic Decontamination', desc: 'Pre-cleaning in enzyme bath to remove microscopic debris.' },
    { step: '02', title: 'Medical-Grade Pouches', desc: 'Individually hermetically heat-sealed in sterilization pouches with chemical indicators.' },
    { step: '03', title: 'Class-B Vacuum Autoclaving', desc: 'Sterilized at 134°C under high pressure to eliminate all spores and viruses.' },
    { step: '04', title: 'Point-of-Use Unsealing', desc: 'Instrument pouches are unsealed right before your eyes in the treatment room.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative py-16 md:py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#795900]">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span>Facilities</span>
              </div>
              <SectionBadge text="World-Class Infrastructure" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                Cutting-Edge Dental Technology for Painless Precision
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                We invest in the world's most advanced dental hardware and diagnostics from Germany, Switzerland, and the USA to ensure faster healing, pinpoint accuracy, and zero anxiety.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Technology Highlights */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <SectionBadge text="Digital Dentistry Suite" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                Precision Hardware Across All 9 Clinics
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] hover:border-[#D9A93B] card-shadow-hover transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DCC8] flex items-center justify-center text-[#795900] mb-5 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#2B2420] mb-2">{tech.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">{tech.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sterilization Standards */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <SectionBadge text="100% Infection-Free Environment" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                Our 4-Stage European Sterilization Protocol
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
              <p className="text-sm text-[#4E4636]">
                Every single instrument follows hospital-grade sterilization guidelines conforming strictly to ISO 9001:2015 and OSHA standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sterilizationSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-3xl bg-white border border-[#E8DCC8] card-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-3xl font-bold text-[#D9A93B] block mb-3">
                      {step.step}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#2B2420] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#6E6458] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#FAF4EA] flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Protocol</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form CTA */}
        <LeadFormSection
          title="Tour Our Clinic or Book Your Diagnostic Scan"
          subtitle="Experience painless dentistry powered by the finest medical technology in Bangalore."
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
