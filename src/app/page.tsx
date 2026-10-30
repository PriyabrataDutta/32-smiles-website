import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { TreatmentsSection } from '@/components/sections/TreatmentsSection';
import { DoctorBiosSection } from '@/components/sections/DoctorBiosSection';
import { BranchLocatorSection } from '@/components/sections/BranchLocatorSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import { SectionBadge } from '@/components/common/SectionBadge';
import { BEFORE_AFTER_CASES } from '@/data/clinicData';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const primaryCase = BEFORE_AFTER_CASES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      {/* Global Luxury Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* 20+ Years Clinical Milestone & Stats */}
        <StatsStrip />

        {/* Core Treatments Grid */}
        <TreatmentsSection limit={8} />

        {/* Before & After Interactive Showcase */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto space-y-3">
              <SectionBadge text="Proven Results • Real Patients" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                See What Micro-Precision Dentistry Can Do
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
              <p className="text-sm text-[#4E4636]">
                Drag the interactive slider to view before and after smile transformations created by our senior prosthodontists and aligner specialists.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <BeforeAfterSlider
                beforeImage={primaryCase.beforeImg}
                afterImage={primaryCase.afterImg}
                beforeAlt="Before Treatment at 32 Smiles"
                afterAlt="After Treatment at 32 Smiles"
              />

              <div className="mt-6 p-6 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2B2420]">
                    {primaryCase.title}
                  </h3>
                  <p className="text-xs text-[#6E6458] mt-1">{primaryCase.notes}</p>
                </div>
                <Link
                  href="/smile-gallery"
                  className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#795900] hover:bg-[#573F00] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Explore Full Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specialists & Lead Doctors */}
        <DoctorBiosSection />

        {/* 9 Bangalore Branches Locator */}
        <BranchLocatorSection />

        {/* Patient Stories & Testimonials */}
        <TestimonialsSection limit={6} />

        {/* FAQs */}
        <FaqSection />

        {/* High-Converting Lead Booking Form */}
        <LeadFormSection />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Bar (Call, WhatsApp, Book) */}
      <StickyBottomNav />
    </div>
  );
}
