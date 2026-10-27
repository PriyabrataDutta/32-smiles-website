'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface StickyBottomNavProps {
  phoneNumber?: string;
  whatsappMessage?: string;
}

export const StickyBottomNav: React.FC<StickyBottomNavProps> = ({
  phoneNumber = '+919482712345',
  whatsappMessage = 'Hello 32 Smiles Dental Clinic, I would like to book a dental consultation.',
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8DCC8] shadow-2xl p-2.5 sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FAF4EA] text-[#795900] border border-[#E8DCC8] active:bg-[#F5EDE1] transition-colors"
        >
          <Phone className="w-4 h-4 mb-1 text-[#795900]" />
          <span className="text-[10px] font-bold tracking-tight">Call Clinic</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 active:bg-emerald-100 transition-colors"
        >
          <MessageSquare className="w-4 h-4 mb-1 text-emerald-600" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <Link
          href="/book-appointment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#795900] text-white active:bg-[#573F00] shadow-sm transition-colors"
        >
          <Calendar className="w-4 h-4 mb-1 text-[#FFDEA0]" />
          <span className="text-[10px] font-bold tracking-tight">Book Visit</span>
        </Link>
      </div>
    </div>
  );
};
