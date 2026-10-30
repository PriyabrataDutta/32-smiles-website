import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Stethoscope, ChevronRight, Star } from 'lucide-react';
import { ALL_BRANCHES_DATA, getBranchBySlug } from '@/data/branchesData';
import { TESTIMONIALS } from '@/data/clinicData';
import SectionBadge from '@/components/common/SectionBadge';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { BranchHero } from '@/components/branches/BranchHero';
import { BranchDoctorRoster } from '@/components/branches/BranchDoctorRoster';
import { BranchTransitInfo } from '@/components/branches/BranchTransitInfo';

interface BranchPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_BRANCHES_DATA.map((branch) => ({
    slug: branch.slug,
  }));
}

export async function generateMetadata({ params }: BranchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);

  if (!branch) {
    return {
      title: 'Branch Not Found | 32 Smiles Dental Clinics',
    };
  }

  return {
    title: `${branch.name} | Best Dental Clinic in ${branch.shortName}`,
    description: `Visit 32 Smiles Dental Clinic in ${branch.shortName}, Bangalore. ${branch.tagline}. Painless RCT, Invisalign Aligners, Swiss Dental Implants & 0% EMI. Book appointment online or call ${branch.phone}.`,
    keywords: [
      `dental clinic in ${branch.shortName}`,
      `dentist ${branch.shortName}`,
      `teeth cleaning ${branch.shortName}`,
      `root canal ${branch.shortName}`,
      `invisalign ${branch.shortName}`,
      `dental implants ${branch.shortName}`,
    ],
  };
}

export default async function BranchDetailPage({ params }: BranchPageProps) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);

  if (!branch) {
    notFound();
  }

  const branchTestimonials = TESTIMONIALS.filter(
    (t) => t.branch.toLowerCase().includes(branch.shortName.toLowerCase())
  );
  const displayTestimonials = branchTestimonials.length > 0 ? branchTestimonials : TESTIMONIALS.slice(0, 3);

  return (
    <div className="bg-[#FAF4EA] text-[#2B2420] min-h-screen pt-24 pb-20">
      {/* Branch Hero & Fast Facts */}
      <BranchHero branch={branch} />

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Section 1: Highlights & Clinical Amenities */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionBadge>Specialized Infrastructure</SectionBadge>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2420] mt-2">
              Why Patients Trust Our {branch.shortName} Center
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branch.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#D9A93B]/20 shadow-xs flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#795900] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#2B2420] font-medium">{highlight}</span>
              </div>
            ))}
            <div className="bg-white p-5 rounded-2xl border border-[#D9A93B]/20 shadow-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#795900] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#2B2420] font-medium">
                100% Autoclaved & Sealed Sterile Instrument Trays per patient
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Doctors at this Branch */}
        <BranchDoctorRoster branch={branch} />

        {/* Section 3: Popular Treatments & Pricing */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionBadge>Complete Oral Healthcare</SectionBadge>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2420] mt-2">
              Treatments Performed at {branch.shortName}
            </h2>
            <p className="text-xs md:text-sm text-[#2B2420]/70 mt-1">
              Transparent standardized pricing with zero surprise charges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {branch.popularTreatments.map((treatment, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#D9A93B]/20 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#D9A93B]/15 flex items-center justify-center text-[#795900] mb-3">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-serif font-bold text-[#2B2420]">{treatment}</h3>
                  <p className="text-xs text-[#2B2420]/70 mt-1">
                    Advanced microscopic care with 0% interest monthly installments available.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#FAF4EA] flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-semibold">Available Daily</span>
                  <Link
                    href="/treatments"
                    className="text-xs font-semibold text-[#795900] hover:underline flex items-center gap-0.5"
                  >
                    Details <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Transit & Map */}
        <BranchTransitInfo branch={branch} />

        {/* Section 6: Patient Reviews */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionBadge>Real Patient Feedback</SectionBadge>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2420] mt-2">
              What Patients Say About {branch.shortName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-[#D9A93B]/20 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D9A93B] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-[#2B2420]/80 italic leading-relaxed">
                    &quot;{t.review}&quot;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#FAF4EA] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2B2420] block">{t.patientName}</span>
                    <span className="text-[11px] text-[#795900]">{t.treatment}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Branch FAQs */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-[#D9A93B]/25 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionBadge>Common Questions</SectionBadge>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2420] mt-2">
              FAQs for 32 Smiles {branch.shortName}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {branch.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF4EA]/60 border border-[#D9A93B]/20">
                <h3 className="text-sm md:text-base font-serif font-bold text-[#2B2420]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-[#2B2420]/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Lead Form Pre-filled */}
        <section>
          <LeadFormSection selectedBranchName={branch.shortName} />
        </section>
      </div>
    </div>
  );
}
