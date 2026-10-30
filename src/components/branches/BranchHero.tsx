import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Navigation,
  MessageSquare,
  Star,
  Sparkles,
  ChevronRight,
  Car,
  Train,
} from 'lucide-react';
import { BranchDetail } from '@/types';
import SectionBadge from '@/components/common/SectionBadge';

interface BranchHeroProps {
  branch: BranchDetail;
}

export const BranchHero: React.FC<BranchHeroProps> = ({ branch }) => {
  return (
    <>
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
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#D9A93B] text-[#2B2420] shadow-xs">
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
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D9A93B]/40 text-[#2B2420] font-semibold text-sm hover:bg-[#FAF4EA] shadow-xs transition"
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
    </>
  );
};

