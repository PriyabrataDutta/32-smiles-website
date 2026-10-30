import React from 'react';
import { Clock, MapPin, Sparkles, Phone } from 'lucide-react';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#2B2420] text-[#FAF4EA] text-[11px] sm:text-xs py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 text-[#D9A93B]">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Mon - Sun: 10:00 AM - 9:00 PM</span>
          </span>
          <span className="hidden md:flex items-center gap-1 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-[#D9A93B]" />
            <span>9 Multispeciality Clinics across Bangalore</span>
          </span>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <span className="hidden sm:inline-flex items-center gap-1 text-[#D9A93B] font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>0% EMI Available</span>
          </span>
          <a
            href="tel:+919482712345"
            className="flex items-center gap-1.5 font-bold hover:text-[#D9A93B] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#D9A93B]" />
            <span>+91 94827 12345</span>
          </a>
        </div>
      </div>
    </div>
  );
};

