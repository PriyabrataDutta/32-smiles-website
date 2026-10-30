'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { CLINIC_BRANCHES } from '@/data/clinicData';
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight, Navigation, Search, Calendar, ArrowRight } from 'lucide-react';
import { SectionBadge } from '@/components/common/SectionBadge';

interface BranchLocatorSectionProps {
  onSelectBranchForBooking?: (branchName: string) => void;
  className?: string;
}

export const BranchLocatorSection: React.FC<BranchLocatorSectionProps> = ({
  onSelectBranchForBooking,
  className = '',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredBranches = CLINIC_BRANCHES.filter(
    (b) =>
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-20 bg-[#FAF4EA] border-b border-[#E8DCC8] overflow-hidden ${className}`} id="branches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionBadge text="Bangalore Clinic Network" className="mb-3" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420] mb-3">
              9 Multispeciality Clinics Near You
            </h2>
            <p className="text-sm sm:text-base text-[#4E4636] max-w-xl">
              Advanced dental care within 15 minutes of your location in Bangalore. Equipped with 3D CBCT, lasers, and expert endodontists & implantologists.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search filter */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5C5143]" />
              <input
                type="text"
                aria-label="Search clinic branch by area or neighborhood"
                placeholder="Search area (e.g. Indiranagar, Whitefield)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full border border-[#D2C5B0] text-xs focus:outline-none focus:ring-2 focus:ring-[#D9A93B] shadow-xs"
              />
            </div>

            {/* Scroll buttons */}
            <div className="hidden md:flex gap-2 shrink-0">
              <button
                type="button"
                aria-label="Scroll branches left"
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full border border-[#D2C5B0] bg-white flex items-center justify-center hover:bg-[#795900] hover:text-white transition-colors cursor-pointer shadow-xs"
                title="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Scroll branches right"
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full border border-[#D2C5B0] bg-white flex items-center justify-center hover:bg-[#795900] hover:text-white transition-colors cursor-pointer shadow-xs"
                title="Scroll Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Branches List */}
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex overflow-x-auto gap-6 pb-6 snap-x scroll-smooth"
        >
          {filteredBranches.map((branch) => {
            const slug = branch.id || branch.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <div
                key={branch.name}
                className="min-w-[300px] sm:min-w-[340px] max-w-[360px] bg-white p-6 rounded-3xl card-shadow border border-[#E8DCC8] snap-start flex flex-col justify-between hover:border-[#D9A93B] transition-all group"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#2B2420] group-hover:text-[#795900] transition-colors">
                      {branch.name}
                    </h3>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                      Open Daily
                    </span>
                  </div>

                  <p className="text-xs text-[#6E6458] mb-4 h-10 line-clamp-2 leading-relaxed">
                    {branch.address}
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-[#2B2420] border-t border-b border-[#FAF4EA] py-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#D9A93B]" />
                      <span className="text-[#6E6458]">{branch.timings || '10:00 AM - 9:00 PM'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#D9A93B]" />
                      <a href={`tel:${branch.phone}`} className="font-semibold hover:text-[#795900]">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={branch.googleMapsUrl || `https://maps.google.com/?q=32+Smiles+Dental+${branch.name}+Bangalore`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#FAF4EA] hover:bg-[#F5EDE1] text-[#795900] border border-[#E8DCC8] text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>

                    {onSelectBranchForBooking ? (
                      <button
                        type="button"
                        onClick={() => onSelectBranchForBooking(branch.name)}
                        className="py-2.5 px-3 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Slot</span>
                      </button>
                    ) : (
                      <Link
                        href={`/book-appointment?branch=${encodeURIComponent(branch.name)}`}
                        className="py-2.5 px-3 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Slot</span>
                      </Link>
                    )}
                  </div>

                  <Link
                    href={`/branches/${slug}`}
                    className="w-full py-2 rounded-xl text-center text-xs font-bold text-[#795900] hover:underline flex items-center justify-center gap-1"
                  >
                    <span>View Clinic Details & Doctors</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
