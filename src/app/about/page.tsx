import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import {
  ShieldCheck,
  Award,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  Target,
  Users,
} from 'lucide-react';
import { DOCTORS_LIST } from '@/data/clinicData';

export const metadata: Metadata = {
  title: 'About 32 Smiles | 20+ Years of Dental Excellence in Bangalore',
  description:
    'Founded in 2005 by Dr. Naveen Indla, 32 Smiles has grown into a premier network of 9 multispeciality dental clinics across Bangalore delivering painless, world-class dental care.',
};

export default function AboutPage() {
  const founder = DOCTORS_LIST[0];

  const milestones = [
    { year: '2005', title: 'The Genesis', desc: 'Dr. Naveen Indla founded the first flagship 32 Smiles clinic in Indiranagar with a vision for pain-free ethical dental care.' },
    { year: '2011', title: 'Advanced Implantology', desc: 'Introduced computer-guided 3D keyhole dental implants and digital intraoral radiography to South India.' },
    { year: '2016', title: 'City-Wide Expansion', desc: 'Expanded across prime Bangalore tech corridors including Koramangala, Whitefield, and HSR Layout.' },
    { year: '2020', title: 'Invisalign Diamond Network', desc: 'Recognized as one of the top certified provider networks for Invisalign clear aligners in Karnataka.' },
    { year: '2026', title: '9 Centers of Excellence', desc: 'Serving over 25,000+ happy patients with an integrated EHR network, 3D CBCT, and 0% EMI financing.' },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Painless Micro-Dentistry',
      desc: 'Rotary endodontics, computerized anesthesia, and piezo-surgical extractions eliminate dental anxiety completely.',
    },
    {
      icon: Award,
      title: 'ISO 9001:2015 Sterilization',
      desc: 'Class-B European autoclaves, vacuum sealing, and ultraviolet sterilization ensure 100% cross-infection prevention.',
    },
    {
      icon: HeartHandshake,
      title: 'Ethical & Transparent Care',
      desc: 'Upfront printed treatment estimates, zero hidden fees, and lifetime warranties on select dental implants.',
    },
    {
      icon: Target,
      title: '3D Digital Precision',
      desc: 'iTero intraoral 3D scanners and 3D CBCT imaging replace old gooey impression trays with digital accuracy.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-16 md:py-24 bg-[#FAF4EA] border-b border-[#E8DCC8] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9A93B]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#795900]">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span>About Us</span>
              </div>
              <SectionBadge text="20+ Years of Dental Excellence" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                Restoring Smiles with Scientific Precision & Gentle Care
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                Founded in 2005 by Dr. Naveen Indla, 32 Smiles has evolved from a single clinic in Indiranagar into Bangalore's premier multispeciality dental network spanning 9 modern centers.
              </p>
            </div>
          </div>
        </section>

        {/* Milestone Stats */}
        <StatsStrip />

        {/* Founder & Director Section */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF4EA] aspect-[4/5] max-w-md mx-auto">
                  <img
                    src={founder?.image || '/logo.png'}
                    alt="Dr. Naveen Indla - Founder & Director of 32 Smiles"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">{founder?.name || 'Dr. Naveen Indla'}</h3>
                    <p className="text-xs text-[#FFDEA0] font-semibold">{founder?.title || 'Founder & Director'}</p>
                    <p className="text-[11px] text-white/80 mt-1">22+ Years Experience • 25,000+ Treated Patients</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <SectionBadge text="Founder's Message" />
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                  "Dentistry is not just about fixing teeth—it is about restoring self-esteem, comfort, and joy."
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#4E4636] leading-relaxed">
                  <p>
                    When I began 32 Smiles in 2005, dental visits were synonymous with apprehension and discomfort. My mission was straightforward: create a sanctuary where state-of-the-art dental technology converges with genuine empathy.
                  </p>
                  <p>
                    Today, across all 9 of our Bangalore clinics, every root canal, dental implant, and smile makeover is guided by microscopic precision, pain-free anesthesia, and complete transparency. We treat every patient with the same dedication we would accord our own family members.
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#E8DCC8]">
                  <div className="p-4 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8]">
                    <div className="font-serif text-2xl font-bold text-[#795900]">2005</div>
                    <div className="text-xs text-[#6E6458]">Founded in Bangalore</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8]">
                    <div className="font-serif text-2xl font-bold text-[#795900]">9 Clinics</div>
                    <div className="text-xs text-[#6E6458]">Bangalore-Wide Network</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8]">
                    <div className="font-serif text-2xl font-bold text-[#795900]">99.2%</div>
                    <div className="text-xs text-[#6E6458]">Clinical Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars of Excellence */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <SectionBadge text="Our Core Philosophy" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                The Four Pillars of 32 Smiles Care
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
              <p className="text-sm text-[#4E4636]">
                How we set the benchmark for quality, patient safety, and comfort in multispeciality dental practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-white border border-[#E8DCC8] card-shadow-hover transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8] flex items-center justify-center text-[#795900] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#2B2420] mb-2">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Journey */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-3">
              <SectionBadge text="Milestones" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                Two Decades of Smile Transformations
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-[#E8DCC8] before:-translate-x-1/2">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    idx % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'
                  }`}
                >
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="p-6 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] card-shadow">
                      <span className="text-xs font-bold text-[#795900] bg-white px-3 py-1 rounded-full border border-[#D2C5B0]">
                        {m.year}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#2B2420] mt-3 mb-1">
                        {m.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#795900] border-4 border-white shadow-md z-10 flex items-center justify-center"></div>

                  <div className="hidden md:block w-1/2 md:px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form CTA */}
        <LeadFormSection
          title="Experience the 32 Smiles Difference"
          subtitle="Consult with our senior specialists at any of our 9 clinics across Bangalore. We are here to make your smile journey seamless."
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
