import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Reviews & Ratings | 32 Smiles Dental Clinics Bangalore',
  description:
    'Read over 15,200+ verified Google and Practo reviews from patients treated across our 9 Bangalore clinics for implants, root canals, and Invisalign.',
};

export default function ReviewsPage() {
  const ratingBars = [
    { stars: '5 Star', percentage: '94%', count: '14,288' },
    { stars: '4 Star', percentage: '5%', count: '760' },
    { stars: '3 Star', percentage: '1%', count: '152' },
    { stars: '2 Star', percentage: '<1%', count: '0' },
    { stars: '1 Star', percentage: '<1%', count: '0' },
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
                <span>Patient Reviews</span>
              </div>
              <SectionBadge text="15,200+ Verified Patient Stories" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                Why Bangalore Smiles with 32 Smiles
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                Nothing speaks louder than authentic feedback. Read verified experiences from families, tech professionals, and international visitors across our 9 clinics.
              </p>
            </div>
          </div>
        </section>

        {/* Rating Breakdown Summary */}
        <section className="py-16 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] grid grid-cols-1 md:grid-cols-12 gap-8 items-center card-shadow">
              {/* Overall Score */}
              <div className="md:col-span-5 text-center md:border-r md:border-[#E8DCC8] md:pr-8">
                <div className="font-serif text-6xl font-bold text-[#2B2420]">4.9</div>
                <div className="flex justify-center text-amber-400 my-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-[#795900] uppercase tracking-wider">
                  Exceptional Rating
                </p>
                <p className="text-[11px] text-[#5C5143] mt-1">
                  Across 15,200+ Reviews on Google & Practo
                </p>
              </div>

              {/* Progress Bars */}
              <div className="md:col-span-7 space-y-2.5">
                {ratingBars.map((bar) => (
                  <div key={bar.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 font-medium text-[#2B2420]">{bar.stars}</span>
                    <div className="flex-1 h-3 bg-white rounded-full overflow-hidden border border-[#E8DCC8]">
                      <div
                        className="h-full bg-[#D9A93B] rounded-full"
                        style={{ width: bar.percentage }}
                      ></div>
                    </div>
                    <span className="w-14 text-right text-[11px] text-[#5C5143] font-semibold">
                      {bar.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Full Testimonials Section Component */}
        <TestimonialsSection limit={12} />

        {/* Lead Form CTA */}
        <LeadFormSection
          title="Join Our 15,200+ Happy Smiling Patients"
          subtitle="Experience painless dental treatment tailored to your comfort and schedule."
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
