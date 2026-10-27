'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { Sparkles, Calendar, Clock, ArrowRight, Star } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '@/data/clinicData';

export default function SmileGalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const galleryCases = [
    ...BEFORE_AFTER_CASES,
    {
      id: 'case-3',
      category: 'aesthetic' as const,
      categoryLabel: 'Cosmetic Veneers',
      title: 'E-Max Porcelain Veneers & Diastema Closure',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
      patientAge: '29 Years',
      durationDays: '4 Days',
      notes: 'Corrected midline spacing, fluorosis stains, and tooth asymmetry with 8 ultra-thin veneers.',
    },
    {
      id: 'case-4',
      category: 'full-mouth' as const,
      categoryLabel: 'Full Arch Implants',
      title: 'Lower Arch Immediate-Load Implant Fixed Teeth',
      beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      patientAge: '61 Years',
      durationDays: '3 Days',
      notes: 'Restored chewing comfort after 10 years of ill-fitting loose dentures.',
    },
  ];

  const filteredCases = activeCategory === 'all'
    ? galleryCases
    : galleryCases.filter(c => c.category === activeCategory);

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
                <span>Smile Gallery</span>
              </div>
              <SectionBadge text="Real Patient Transformations" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                Before & After Transformations
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                Explore real clinical cases documented across our 9 Bangalore clinics. Drag the interactive sliders to inspect natural gum lines, shade matches, and alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-white border-b border-[#E8DCC8] sticky top-20 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
            {[
              { id: 'all', label: 'All Transformations' },
              { id: 'crowding', label: 'Invisalign Aligners' },
              { id: 'full-mouth', label: 'Dental Implants' },
              { id: 'aesthetic', label: 'Cosmetic Veneers' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#795900] text-white shadow-md'
                    : 'bg-[#FAF4EA] text-[#2B2420] border border-[#E8DCC8] hover:bg-[#F5EDE1]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid with Interactive Sliders */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredCases.map(item => (
                <div
                  key={item.id}
                  className="bg-white p-6 sm:p-8 rounded-3xl card-shadow border border-[#E8DCC8] space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#795900] bg-[#FAF4EA] px-3 py-1 rounded-full border border-[#E8DCC8]">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-[#807663] font-medium">
                      Patient Age: {item.patientAge}
                    </span>
                  </div>

                  <BeforeAfterSlider
                    beforeImage={item.beforeImg}
                    afterImage={item.afterImg}
                    beforeAlt={`${item.title} - Before`}
                    afterAlt={`${item.title} - After`}
                  />

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#2B2420]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">
                      {item.notes}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FAF4EA] flex items-center justify-between text-xs">
                    <span className="text-[#807663]">
                      Duration: <strong>{item.durationMonths || item.durationDays}</strong>
                    </span>
                    <Link
                      href="/book-appointment"
                      className="font-bold text-[#795900] hover:underline flex items-center gap-1"
                    >
                      <span>Book Similar Smile Design</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form CTA */}
        <LeadFormSection
          title="Ready to Transform Your Smile?"
          subtitle="Get a 3D digital simulation preview of your new smile before beginning any treatment."
          badgeText="Free 3D Smile Simulation Available"
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
