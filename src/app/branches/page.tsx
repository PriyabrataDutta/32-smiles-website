'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Search,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Star,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ALL_BRANCHES_DATA } from '@/data/branchesData';
import SectionBadge from '@/components/common/SectionBadge';
import LeadFormSection from '@/components/sections/LeadFormSection';
import FaqSection from '@/components/sections/FaqSection';

const REGION_FILTERS = [
  { id: 'all', label: 'All 9 Clinics' },
  { id: 'east', label: 'East Bangalore (Indiranagar, Whitefield, Kundalahalli)' },
  { id: 'south', label: 'South Bangalore (Koramangala, HSR, BTM)' },
  { id: 'orr', label: 'Tech Corridor / ORR (Sarjapur, Panathur, Marathahalli)' },
];

export default function BranchesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredBranches = useMemo(() => {
    return ALL_BRANCHES_DATA.filter((branch) => {
      const matchesSearch =
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.landmark.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.shortName.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesRegion = true;
      if (selectedRegion === 'east') {
        matchesRegion = ['indiranagar', 'whitefield', 'kundalahalli-gate'].includes(branch.slug);
      } else if (selectedRegion === 'south') {
        matchesRegion = ['koramangala', 'hsr-layout', 'btm-layout'].includes(branch.slug);
      } else if (selectedRegion === 'orr') {
        matchesRegion = ['sarjapura-road', 'panathur', 'marathahalli'].includes(branch.slug);
      }

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="bg-[#FAF4EA] text-[#2B2420] min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#FAF4EA] via-[#F4E9D8] to-[#FAF4EA] border-b border-[#D9A93B]/20">
        <div className="max-w-6xl mx-auto text-center">
          <SectionBadge>9 Premier Clinics in Bangalore</SectionBadge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2B2420] font-bold mt-4 tracking-tight">
            Find a 32 Smiles Dental Clinic{' '}
            <span className="text-[#D9A93B]">Near You in Bangalore</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#2B2420]/80 max-w-3xl mx-auto leading-relaxed">
            Conveniently located across major tech parks, residential hubs, and metro corridors.
            All 9 branches operate under unified European sterilization standards with shared digital patient records.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#D9A93B]/20 text-center shadow-sm">
              <span className="block text-2xl md:text-3xl font-serif font-bold text-[#795900]">9</span>
              <span className="text-xs uppercase tracking-wider text-[#2B2420]/70 font-medium">Bangalore Clinics</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#D9A93B]/20 text-center shadow-sm">
              <span className="block text-2xl md:text-3xl font-serif font-bold text-[#795900]">7 Days</span>
              <span className="text-xs uppercase tracking-wider text-[#2B2420]/70 font-medium">Open 10 AM - 9 PM</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#D9A93B]/20 text-center shadow-sm">
              <span className="block text-2xl md:text-3xl font-serif font-bold text-[#795900]">4.9 ★</span>
              <span className="text-xs uppercase tracking-wider text-[#2B2420]/70 font-medium">15,000+ Reviews</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#D9A93B]/20 text-center shadow-sm">
              <span className="block text-2xl md:text-3xl font-serif font-bold text-[#795900]">15 Min</span>
              <span className="text-xs uppercase tracking-wider text-[#2B2420]/70 font-medium">Response Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-[#D9A93B]/20 shadow-md">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2B2420]/40" />
              <input
                type="text"
                placeholder="Search by area, landmark, or metro station..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#D9A93B]/30 focus:outline-none focus:ring-2 focus:ring-[#D9A93B] text-sm bg-[#FAF4EA]/40 text-[#2B2420] placeholder-[#2B2420]/50"
              />
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {REGION_FILTERS.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-3 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
                    selectedRegion === region.id
                      ? 'bg-[#795900] text-white shadow'
                      : 'bg-[#FAF4EA] text-[#2B2420]/80 hover:bg-[#F4E9D8] border border-[#D9A93B]/20'
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branch Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-[#2B2420]">
            Showing <span className="text-[#795900]">{filteredBranches.length}</span> Bangalore Clinics
          </h2>
          <span className="text-xs uppercase tracking-wider text-[#2B2420]/60 font-medium">
            Unified Pricing Across All Clinics
          </span>
        </div>

        {filteredBranches.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#D9A93B]/20">
            <MapPin className="w-12 h-12 text-[#D9A93B] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-serif font-bold text-[#2B2420]">No branches found</h3>
            <p className="text-sm text-[#2B2420]/70 mt-1">
              Try adjusting your search query or selecting &quot;All 9 Clinics&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
              }}
              className="mt-4 px-4 py-2 bg-[#795900] text-white rounded-xl text-sm font-medium hover:bg-[#5f4600] transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-2xl border border-[#D9A93B]/25 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Header with Tag & Rating */}
                <div className="p-6 border-b border-[#FAF4EA] bg-gradient-to-br from-white via-white to-[#FAF4EA]/50">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D9A93B]/15 text-[#795900] border border-[#D9A93B]/30 flex items-center gap-1">
                      {branch.isFlagship ? (
                        <>
                          <Sparkles className="w-3 h-3 text-[#D9A93B]" /> Flagship Center
                        </>
                      ) : (
                        branch.area
                      )}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-[#795900]">
                      <Star className="w-3.5 h-3.5 fill-[#D9A93B] text-[#D9A93B]" />
                      <span>{branch.rating}</span>
                      <span className="text-[#2B2420]/50 font-normal">({branch.reviewsCount.split(' ')[0]})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2B2420] group-hover:text-[#795900] transition">
                    <Link href={`/branches/${branch.slug}`}>{branch.name}</Link>
                  </h3>
                  <p className="text-xs text-[#2B2420]/70 mt-1 line-clamp-1">{branch.tagline}</p>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3 text-xs md:text-sm text-[#2B2420]/80">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[#2B2420]">{branch.address}</p>
                        <p className="text-xs text-[#2B2420]/60 mt-0.5">{branch.landmark}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#D9A93B] flex-shrink-0" />
                      <span>{branch.timings}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#D9A93B] flex-shrink-0" />
                      <a
                        href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                        className="text-[#795900] font-semibold hover:underline"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Highlights pills */}
                  <div className="pt-3 border-t border-[#FAF4EA]">
                    <div className="flex flex-wrap gap-1.5">
                      {branch.highlights.slice(0, 2).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#FAF4EA] text-[#2B2420]/80 px-2 py-0.5 rounded border border-[#D9A93B]/15"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-2 flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={branch.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-[#D9A93B]/40 text-xs font-medium text-[#2B2420] hover:bg-[#FAF4EA] transition"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#795900]" />
                        Directions
                      </a>
                      <a
                        href={`https://wa.me/919482712345?text=${encodeURIComponent(
                          `Hi 32 Smiles, I would like to book an appointment at your ${branch.shortName} clinic.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-medium text-emerald-800 hover:bg-emerald-100 transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        WhatsApp
                      </a>
                    </div>

                    <Link
                      href={`/branches/${branch.slug}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D9A93B] to-[#795900] text-white text-xs md:text-sm font-semibold hover:opacity-95 shadow-sm transition"
                    >
                      <span>View Branch & Book Visit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Network Advantages Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#2B2420] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-[#D9A93B]/30 shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#D9A93B] font-semibold">
              The 32 Smiles Network Advantage
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold mt-2 text-[#FAF4EA]">
              Move Between Bangalore Branches Seamlessly
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#FAF4EA]/80 leading-relaxed">
              Living in Koramangala but working in Whitefield? No problem. Your complete dental history, 3D scans,
              aligner schedules, and payment receipts are digitally synced across all 9 clinics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#FAF4EA]/90">Class-B German Autoclave Sterilization</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#FAF4EA]/90">Standardized Pricing & 0% EMI across all clinics</span>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#D9A93B] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#FAF4EA]/90">Emergency Care Slots Reserved Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="mt-16">
        <LeadFormSection />
      </section>

      {/* FAQs */}
      <section className="mt-12">
        <FaqSection />
      </section>
    </div>
  );
}
