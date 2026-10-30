import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { BranchDetail } from '@/types';
import SectionBadge from '@/components/common/SectionBadge';

interface BranchTransitInfoProps {
  branch: BranchDetail;
}

export const BranchTransitInfo: React.FC<BranchTransitInfoProps> = ({ branch }) => {
  return (
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
  );
};

