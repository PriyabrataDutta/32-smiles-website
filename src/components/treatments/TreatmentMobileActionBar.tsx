import React from 'react';
import Link from 'next/link';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';

interface TreatmentMobileActionBarProps {
  treatmentName: string;
  startingPrice: string;
}

export const TreatmentMobileActionBar: React.FC<TreatmentMobileActionBarProps> = ({
  treatmentName,
  startingPrice,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8DCC8] px-4 py-2 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        {/* Price Info */}
        <div className="shrink-0">
          <span className="text-[9px] uppercase font-bold text-[#5C5143] block">
            Starting Price
          </span>
          <div className="font-serif font-bold text-sm text-[#795900] leading-tight">
            {startingPrice.split(' ')[0]}
          </div>
          <span className="text-[9px] font-semibold text-emerald-800 flex items-center gap-0.5">
            <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
            Lifetime Warranty
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <a
            href="tel:+919482712345"
            aria-label="Call Emergency Helpline"
            className="w-9 h-9 rounded-full bg-[#FAF4EA] border border-[#D2C5B0] text-[#795900] flex items-center justify-center shrink-0 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
          </a>
          <Link
            href={`/book-appointment?treatment=${encodeURIComponent(treatmentName)}`}
            className="py-2 px-4 rounded-full bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs active:scale-95 shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consult</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
