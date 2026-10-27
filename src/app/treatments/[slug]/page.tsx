import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { FaqSection } from '@/components/sections/FaqSection';
import { BranchLocatorSection } from '@/components/sections/BranchLocatorSection';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { EmiCalculatorCard } from '@/components/common/EmiCalculatorCard';
import { DETAILED_TREATMENTS } from '@/data/treatmentsData';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  Calendar,
  Zap,
  Award,
  AlertCircle,
} from 'lucide-react';

export async function generateStaticParams() {
  return Object.keys(DETAILED_TREATMENTS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = DETAILED_TREATMENTS[slug];

  if (!treatment) {
    return {
      title: 'Treatment Not Found | 32 Smiles Dental Clinics',
    };
  }

  return {
    title: `${treatment.name} in Bangalore | 32 Smiles Dental`,
    description: treatment.heroSubtitle,
    openGraph: {
      title: `${treatment.name} | 32 Smiles Bangalore`,
      description: treatment.heroSubtitle,
    },
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = DETAILED_TREATMENTS[slug];

  if (!treatment) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Hero */}
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
                  <img
                    src={treatment.heroImage}
                    alt={treatment.name}
                    loading="eager"
                    decoding="async"
                    // @ts-ignore
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
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

        {/* Symptoms & Benefits Two-Column Section */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Symptoms / When is it needed */}
              <div className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900]">
                    Diagnosis & Indications
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2B2420] mt-1">
                    When is this Treatment Recommended?
                  </h3>
                </div>
                <div className="space-y-3">
                  {treatment.symptoms.map((sym, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E8DCC8]">
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#4E4636] leading-relaxed">{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="p-8 rounded-3xl bg-white border border-[#E8DCC8] card-shadow space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Clinical Advantages
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2B2420] mt-1">
                    Why Choose 32 Smiles for {treatment.name}?
                  </h3>
                </div>
                <div className="space-y-3">
                  {treatment.benefits.map((ben, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#FAF4EA] p-4 rounded-2xl border border-[#E8DCC8]">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#2B2420] font-medium leading-relaxed">{ben}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Clinical Procedure */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <SectionBadge text="Treatment Pathway" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                Step-by-Step Procedure Workflow
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatment.steps.map((st) => (
                <div
                  key={st.number}
                  className="p-6 rounded-3xl bg-white border border-[#E8DCC8] card-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-3xl font-bold text-[#D9A93B] block mb-3">
                      {st.number}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#2B2420] mb-2">{st.title}</h4>
                    <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">{st.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#FAF4EA] flex items-center gap-1.5 text-[11px] font-semibold text-[#795900]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Painless Protocol</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Deployed */}
        <section className="py-12 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h4 className="font-serif text-xl font-bold text-[#2B2420]">
              Precision Equipment Deployed for {treatment.name}
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {treatment.technologyUsed.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[#FAF4EA] border border-[#E8DCC8] text-xs font-bold text-[#795900] shadow-2xs"
                >
                  ✦ {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 0% Interest EMI Section */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 space-y-2">
              <SectionBadge text="Affordable Monthly Installments" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420]">
                0% Interest EMI Plans for {treatment.name}
              </h2>
            </div>
            <EmiCalculatorCard />
          </div>
        </section>

        {/* Procedure Specific FAQs */}
        <FaqSection
          items={treatment.faqs}
          title={`Frequently Asked Questions About ${treatment.name}`}
          subtitle="Everything you need to know about pain, safety, durability, and recovery."
        />

        {/* 9 Bangalore Branch Locator */}
        <BranchLocatorSection />

        {/* Lead Form CTA */}
        <LeadFormSection
          title={`Book Consultation for ${treatment.name}`}
          subtitle={`Schedule your slot with our specialist doctor at your nearest Bangalore branch.`}
          selectedTreatmentName={treatment.name}
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
