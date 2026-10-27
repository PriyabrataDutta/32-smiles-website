import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { DETAILED_TREATMENTS } from '@/data/treatmentsData';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  BadgePercent,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Dental Treatments & Procedures | 32 Smiles Bangalore',
  description:
    'Browse 14 specialized dental procedures across 9 clinics in Bangalore: Painless Root Canals, Invisalign, Dental Implants, Wisdom Tooth Removal, and Veneers.',
};

export default function TreatmentsHubPage() {
  const treatmentsArray = Object.values(DETAILED_TREATMENTS);

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
                <span>Treatments</span>
              </div>
              <SectionBadge text="14 Speciality Dental Solutions" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                World-Class Dental Care Tailored to Your Smile
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                From micro-precision single-sitting root canals to certified Invisalign clear aligners and Swiss keyhole implants, every procedure is performed by qualified MDS specialists.
              </p>
            </div>
          </div>
        </section>

        {/* 0% EMI Banner */}
        <section className="bg-[#2B2420] text-white py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#FFDEA0]">
              <BadgePercent className="w-4 h-4 text-[#D9A93B]" />
              <span className="font-semibold">0% Interest Easy EMI Schemes Available on All Major Treatments</span>
            </div>
            <Link
              href="/pricing-emi"
              className="text-[#D9A93B] hover:underline font-bold flex items-center gap-1"
            >
              <span>Calculate Your Monthly Installment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentsArray.map((t) => (
                <div
                  key={t.slug}
                  className="p-6 sm:p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] hover:border-[#D9A93B] card-shadow-hover transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#795900] bg-white px-3 py-1 rounded-full border border-[#E8DCC8]">
                        {t.category}
                      </span>
                      <span className="text-xs font-bold text-[#795900]">
                        {t.startingPrice}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2420] group-hover:text-[#795900] transition-colors">
                      {t.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed line-clamp-3">
                      {t.overview}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-[#E8DCC8]/60 text-xs text-[#4E4636]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#D9A93B]" />
                        <span>Duration: <strong>{t.duration}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Recovery: <strong>{t.recovery}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8DCC8] flex items-center justify-between">
                    <Link
                      href={`/treatments/${t.slug}`}
                      className="text-xs font-bold text-[#795900] group-hover:text-[#573F00] flex items-center gap-1.5 hover:underline"
                    >
                      <span>Full Procedure Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href={`/book-appointment?treatment=${encodeURIComponent(t.name)}`}
                      className="px-4 py-2 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white text-xs font-bold shadow-xs transition-all"
                    >
                      Book Visit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form CTA */}
        <LeadFormSection
          title="Not Sure Which Treatment You Need?"
          subtitle="Book a free consultation and 3D digital scan with our senior dentists. We will evaluate your teeth and walk you through every option."
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
