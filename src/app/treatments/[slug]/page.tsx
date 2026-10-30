import React from 'react';
import type { Metadata } from 'next';
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
import { TreatmentHero } from '@/components/treatments/TreatmentHero';
import { TreatmentClinicalGuide } from '@/components/treatments/TreatmentClinicalGuide';

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
        <TreatmentHero treatment={treatment} />

        {/* Symptoms, Clinical Benefits, 4 Steps, and Tech Grid */}
        <TreatmentClinicalGuide treatment={treatment} />

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
