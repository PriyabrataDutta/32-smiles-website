import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BranchLocatorSection } from '@/components/sections/BranchLocatorSection';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { FaqAccordionIsland } from '@/components/sections/FaqAccordionIsland';
import { DETAILED_TREATMENTS } from '@/data/treatmentsData';
import { TreatmentHero } from '@/components/treatments/TreatmentHero';
import { TreatmentNavAnchor } from '@/components/treatments/TreatmentNavAnchor';
import { TreatmentSidebar } from '@/components/treatments/TreatmentSidebar';
import { TreatmentOverviewSection } from '@/components/treatments/TreatmentOverviewSection';
import { TreatmentAnatomyBreakdown } from '@/components/treatments/TreatmentAnatomyBreakdown';
import { TreatmentProcedureSection } from '@/components/treatments/TreatmentProcedureSection';
import { TreatmentBrandShowcase } from '@/components/treatments/TreatmentBrandShowcase';
import { TreatmentRecoveryTimeline } from '@/components/treatments/TreatmentRecoveryTimeline';
import { TreatmentComparisonTable } from '@/components/treatments/TreatmentComparisonTable';
import { TreatmentDoctorCard } from '@/components/treatments/TreatmentDoctorCard';
import { TreatmentPricingTiers } from '@/components/treatments/TreatmentPricingTiers';
import { TreatmentMobileActionBar } from '@/components/treatments/TreatmentMobileActionBar';

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
    title: `${treatment.name} in Bangalore | 32 Smiles Dental Clinics`,
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

  // Dynamic Table of Contents anchors
  const anchorItems = treatment.anatomyParts
    ? [
        { id: 'overview', label: 'Overview' },
        { id: 'candidacy', label: 'Candidacy' },
        { id: 'anatomy', label: 'Implant Anatomy' },
        { id: 'procedure', label: '3D Procedure' },
        { id: 'brands', label: 'Systems & Brands' },
        { id: 'recovery', label: 'Recovery Timeline' },
        { id: 'comparison', label: 'Implants vs Bridges' },
        { id: 'doctor', label: 'Operating Doctor' },
        { id: 'pricing', label: 'Pricing & Packages' },
        { id: 'faqs', label: 'Clinical FAQs' },
      ]
    : [
        { id: 'overview', label: 'Overview & Indications' },
        { id: 'procedure', label: 'Procedure Workflow' },
        { id: 'pricing', label: 'Pricing & Fees' },
        { id: 'faqs', label: 'Clinical FAQs' },
      ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      <Navbar />

      <main className="flex-1 pb-16 lg:pb-0">
        {/* Breadcrumb & Hero */}
        <TreatmentHero treatment={treatment} />

        {/* Sticky In-Page Navigation (Table of Contents) */}
        <TreatmentNavAnchor items={anchorItems} />

        {/* Two-Column Clinical Portal Layout - Compact & Beautiful */}
        <section className="py-8 lg:py-12 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left 8 Columns: Comprehensive Clinical Editorial */}
              <div className="lg:col-span-8 space-y-10 lg:space-y-12">
                {/* 1. Clinical Overview, Symptoms, Candidacy & Benefits */}
                <TreatmentOverviewSection treatment={treatment} />

                {/* 2. Biomechanical Anatomy Breakdown (Flagship) */}
                {treatment.anatomyParts && (
                  <TreatmentAnatomyBreakdown anatomyParts={treatment.anatomyParts} />
                )}

                {/* 3. 4-Stage 3D Guided Surgical Procedure with Images */}
                <TreatmentProcedureSection treatment={treatment} />

                {/* 4. Genuine Implant Brands & Systems (Flagship) */}
                {treatment.implantBrands && (
                  <TreatmentBrandShowcase brands={treatment.implantBrands} />
                )}

                {/* 5. Day-by-Day Recovery Timeline (Flagship) */}
                {treatment.recoveryPhases && (
                  <TreatmentRecoveryTimeline phases={treatment.recoveryPhases} />
                )}

                {/* 6. Clinical Decision Matrix (Implants vs Bridges vs Dentures) */}
                {treatment.comparisonMatrix && (
                  <TreatmentComparisonTable data={treatment.comparisonMatrix} />
                )}

                {/* 7. Operating Specialist Profile */}
                {treatment.leadDoctor && (
                  <TreatmentDoctorCard
                    doctor={treatment.leadDoctor}
                    treatmentName={treatment.name}
                  />
                )}

                {/* 8. Pricing Packages */}
                {treatment.pricingTiers ? (
                  <TreatmentPricingTiers
                    tiers={treatment.pricingTiers}
                    treatmentName={treatment.name}
                  />
                ) : (
                  <section id="pricing" className="scroll-mt-24 space-y-4">
                    <div className="p-5 rounded-2xl bg-white border border-[#E8DCC8] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#795900]">
                          Treatment Pricing
                        </span>
                        <h2 className="font-serif text-lg sm:text-xl font-bold text-[#2B2420] mt-0.5">
                          Estimated Cost: {treatment.startingPrice}
                        </h2>
                        <p className="text-xs text-[#5C5143] mt-0.5">
                          Exact quotes are determined following your initial digital examination and 3D diagnostics.
                        </p>
                      </div>
                      <Link
                        href={`/book-appointment?treatment=${encodeURIComponent(treatment.name)}`}
                        className="px-5 py-2.5 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs shrink-0 shadow-xs transition-colors"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </section>
                )}

                {/* 9. Comprehensive Clinical FAQs */}
                <section id="faqs" className="scroll-mt-24 space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#795900]">
                      Patient Clarity & FAQs
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1">
                      Frequently Asked Questions About {treatment.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4E4636] mt-1">
                      Clear clinical answers regarding pain management, safety, implant systems, durability, and recovery.
                    </p>
                  </div>
                  <FaqAccordionIsland items={treatment.faqs} />
                </section>
              </div>

              {/* Right 4 Columns: Sticky Conversion & Booking Sidebar */}
              <div className="lg:col-span-4">
                <TreatmentSidebar
                  treatmentName={treatment.name}
                  startingPrice={treatment.startingPrice}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9 Bangalore Branch Locator */}
        <BranchLocatorSection />

        {/* Lead Form CTA */}
        <LeadFormSection
          title={`Book Consultation for ${treatment.name}`}
          subtitle="Schedule your slot with our specialist doctor at your nearest Bangalore branch."
          selectedTreatmentName={treatment.name}
        />
      </main>

      <Footer />

      {/* Sticky Mobile Action Bar */}
      <TreatmentMobileActionBar
        treatmentName={treatment.name}
        startingPrice={treatment.startingPrice}
      />
    </div>
  );
}
