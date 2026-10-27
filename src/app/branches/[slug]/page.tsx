import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Navigation,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Star,
  Sparkles,
  ChevronRight,
  Car,
  Train,
  Stethoscope,
  Award,
} from 'lucide-react';
import { ALL_BRANCHES_DATA, getBranchBySlug } from '@/data/branchesData';
import { TESTIMONIALS } from '@/data/clinicData';
import SectionBadge from '@/components/common/SectionBadge';
import EmiCalculatorCard from '@/components/common/EmiCalculatorCard';
import LeadFormSection from '@/components/sections/LeadFormSection';

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

  // Find testimonials for this branch or fallback to general testimonials
  const branchTestimonials = TESTIMONIALS.filter(
    (t) => t.branch.toLowerCase().includes(branch.shortName.toLowerCase())
  );
  const displayTestimonials = branchTestimonials.length > 0 ? branchTestimonials : TESTIMONIALS.slice(0, 3);

  return (
    <div className="bg-[#FAF4EA] text-[#2B2420] min-h-screen pt-24 pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-2 text-xs text-[#2B2420]/60">
          <Link href="/" className="hover:text-[#795900] transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#2B2420]/40" />
          <Link href="/branches" className="hover:text-[#795900] transition">
            Bangalore Clinics
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#2B2420]/40" />
          <span className="text-[#795900] font-semibold">{branch.shortName}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#FAF4EA] via-[#F4E9D8] to-[#FAF4EA] border-b border-[#D9A93B]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Branch Info */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <SectionBadge>{branch.area}</SectionBadge>
                {branch.isFlagship && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#D9A93B] text-[#2B2420] shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" /> Flagship Clinic
                  </span>
                )}
                <div className="flex items-center gap-1 text-xs font-bold text-[#795900] bg-white px-2.5 py-1 rounded-full border border-[#D9A93B]/30">
                  <Star className="w-3.5 h-3.5 fill-[#D9A93B] text-[#D9A93B]" />
                  <span>{branch.rating} / 5.0</span>
                  <span className="text-[#2B2420]/60 font-normal">({branch.reviewsCount})</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2B2420] tracking-tight">
                {branch.name}
              </h1>
              <p className="mt-3 text-base md:text-lg text-[#795900] font-medium">{branch.tagline}</p>
              <p className="mt-4 text-sm md:text-base text-[#2B2420]/80 leading-relaxed">
                {branch.description}
              </p>

              {/* Primary Contact CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D9A93B] to-[#795900] text-white font-semibold text-sm hover:opacity-95 shadow-md transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {branch.phone}</span>
                </a>

                <a
                  href={`https://wa.me/919482712345?text=${encodeURIComponent(
                    `Hi 32 Smiles, I would like to book a consultation at the ${branch.shortName} clinic.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Clinic</span>
                </a>

                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D9A93B]/40 text-[#2B2420] font-semibold text-sm hover:bg-[#FAF4EA] shadow-sm transition"
                >
                  <Navigation className="w-4 h-4 text-[#795900]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Card with Key Fast Facts */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 border border-[#D9A93B]/30 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A93B]/10 rounded-full blur-2xl" />

                <h2 className="text-lg font-serif font-bold text-[#2B2420] border-b border-[#FAF4EA] pb-3 flex items-center justify-between">
                  <span>Clinic Quick Facts</span>
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-sans font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Open Today
                  </span>
                </h2>

                <div className="space-y-4 text-xs md:text-sm mt-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#2B2420]">Clinic Address:</span>
                      <p className="text-[#2B2420]/80 mt-0.5 leading-snug">{branch.address}</p>
                      <p className="text-[#795900] text-xs font-medium mt-1">Landmark: {branch.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#2B2420]">Consultation Hours:</span>
                      <p className="text-[#2B2420]/80 mt-0.5">{branch.timings}</p>
                    </div>
                  </div>

                  {branch.metroConnectivity && (
                    <div className="flex items-start gap-3">
                      <Train className="w-5 h-5 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-[#2B2420]">Metro Connectivity:</span>
                        <p className="text-[#2B2420]/80 mt-0.5">{branch.metroConnectivity}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#2B2420]">Parking Assistance:</span>
                      <p className="text-[#2B2420]/80 mt-0.5">{branch.parkingInfo}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#2B2420]">Direct Email:</span>
                      <a href={`mailto:${branch.email}`} className="text-[#795900] hover:underline">
                        {branch.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                className="bg-white p-5 rounded-2xl border border-[#D9A93B]/20 shadow-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#795900] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#2B2420] font-medium">{highlight}</span>
              </div>
            ))}
            <div className="bg-white p-5 rounded-2xl border border-[#D9A93B]/20 shadow-sm flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#795900] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#2B2420] font-medium">
                100% Autoclaved & Sealed Sterile Instrument Trays per patient
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Doctors at this Branch */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-[#D9A93B]/25 shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <SectionBadge>Resident Specialists</SectionBadge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2420] mt-2">
                Specialist Doctors at {branch.shortName}
              </h2>
              <p className="text-xs md:text-sm text-[#2B2420]/70 mt-1">
                Senior dental surgeons with 14+ years average clinical expertise.
              </p>
            </div>
            <Link
              href="/doctors"
              className="mt-4 md:mt-0 text-xs md:text-sm font-semibold text-[#795900] hover:underline flex items-center gap-1"
            >
              <span>View All 32 Smiles Doctors</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branch.doctors.map((doctor, idx) => (
              <div
                key={idx}
                className="bg-[#FAF4EA]/50 rounded-2xl p-6 border border-[#D9A93B]/20 flex flex-col sm:flex-row gap-5 items-center sm:items-start"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#D9A93B] shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-serif font-bold text-[#2B2420]">{doctor.name}</h3>
                  <p className="text-xs font-semibold text-[#795900] mt-0.5">{doctor.role}</p>
                  <p className="text-xs text-[#2B2420]/70 mt-1">{doctor.qualifications}</p>

                  <div className="mt-3 pt-3 border-t border-[#D9A93B]/20 flex items-center justify-center sm:justify-start gap-2 text-xs text-[#2B2420]/80">
                    <Calendar className="w-3.5 h-3.5 text-[#D9A93B]" />
                    <span className="font-medium">OPD Schedule:</span>
                    <span>{doctor.schedule}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
                className="bg-white p-5 rounded-2xl border border-[#D9A93B]/20 shadow-sm hover:shadow-md transition flex flex-col justify-between"
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

        {/* Section 4: Interactive EMI Calculator */}
        <section className="bg-gradient-to-br from-[#FAF4EA] to-[#F4E9D8] rounded-3xl p-8 border border-[#D9A93B]/30 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <SectionBadge>Flexible Dental Financing</SectionBadge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2420] mt-2">
                0% Interest EMI Available at {branch.shortName}
              </h2>
              <p className="text-sm text-[#2B2420]/80 mt-3 leading-relaxed">
                Don&apos;t postpone needed dental treatments. We offer paperless, instant EMI approvals through Bajaj
                Finserv, HDFC, ICICI, and major credit cards with zero down-payment options.
              </p>
              <ul className="mt-4 space-y-2 text-xs md:text-sm text-[#2B2420]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#795900]" />
                  <span>Instant digital approval within 5 minutes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#795900]" />
                  <span>Flexible tenures: 3, 6, 9, 12, or 24 months</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#795900]" />
                  <span>Zero hidden processing fees</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <EmiCalculatorCard />
            </div>
          </div>
        </section>

        {/* Section 5: Map & Surrounding Landmarks */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-[#D9A93B]/25 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionBadge>Location & Directions</SectionBadge>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2420] mt-2">
              Visit {branch.name}
            </h2>
            <p className="text-xs md:text-sm text-[#2B2420]/70 mt-1">
              {branch.address}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Map Embed or Directions Box */}
            <div className="lg:col-span-8 h-80 rounded-2xl overflow-hidden border border-[#D9A93B]/30 relative shadow-inner bg-[#FAF4EA]">
              <iframe
                title={`Google Map - ${branch.name}`}
                src={branch.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Landmarks List */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-base font-serif font-bold text-[#2B2420]">
                Nearby Transit & Landmarks:
              </h3>
              <ul className="space-y-3">
                {branch.nearbyLandmarks.map((landmark, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2B2420]/80">
                    <MapPin className="w-4 h-4 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#FAF4EA]">
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#795900] text-white text-xs md:text-sm font-semibold hover:bg-[#5f4600] transition"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </section>

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
                className="bg-white p-6 rounded-2xl border border-[#D9A93B]/20 shadow-sm flex flex-col justify-between"
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
          <LeadFormSection />
        </section>
      </div>
    </div>
  );
}
