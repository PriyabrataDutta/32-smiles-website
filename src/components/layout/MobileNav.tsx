import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Calendar, Phone } from 'lucide-react';
import { CLINIC_BRANCHES } from '@/data/clinicData';
import { TREATMENT_CATEGORIES } from './MegaMenu';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-[#E8DCC8] shadow-2xl px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
      <Link href="/" onClick={onClose} className="block text-sm font-bold text-[#2B2420]">
        Home
      </Link>

      {/* About Toggle */}
      <div>
        <button
          type="button"
          onClick={() => setAboutOpen(!aboutOpen)}
          className="flex items-center justify-between w-full text-sm font-bold text-[#2B2420]"
        >
          <span>About Us</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {aboutOpen && (
          <div className="pl-4 mt-2 space-y-2 text-xs text-[#6E6458]">
            <Link href="/about" onClick={onClose} className="block py-1">
              About 32 Smiles
            </Link>
            <Link href="/doctors" onClick={onClose} className="block py-1">
              Our Doctors
            </Link>
            <Link href="/facilities" onClick={onClose} className="block py-1">
              Facilities & Technology
            </Link>
          </div>
        )}
      </div>

      {/* Treatments Toggle */}
      <div>
        <button
          type="button"
          onClick={() => setTreatmentsOpen(!treatmentsOpen)}
          className="flex items-center justify-between w-full text-sm font-bold text-[#2B2420]"
        >
          <span>Treatments (All 14)</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {treatmentsOpen && (
          <div className="pl-3 mt-2 space-y-3 text-xs">
            <Link
              href="/treatments"
              onClick={onClose}
              className="block py-1.5 px-3 rounded-lg bg-[#FAF4EA] font-bold text-[#795900] border border-[#D9A93B]/20"
            >
              View Complete 14-Treatment Guide &rarr;
            </Link>
            {TREATMENT_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#795900] pt-1">
                  {cat.title}
                </div>
                <div className="pl-2 space-y-1 border-l-2 border-[#D9A93B]/30">
                  {cat.items.map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-1 text-[#2B2420]/80 hover:text-[#795900]"
                    >
                      <span>{t.name}</span>
                      <span className="text-[10px] text-[#795900] font-semibold">{t.badge}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Branches Toggle */}
      <div>
        <button
          type="button"
          onClick={() => setBranchesOpen(!branchesOpen)}
          className="flex items-center justify-between w-full text-sm font-bold text-[#2B2420]"
        >
          <span>Bangalore Branches (9)</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${branchesOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {branchesOpen && (
          <div className="pl-4 mt-2 space-y-2 text-xs text-[#6E6458]">
            <Link href="/branches" onClick={onClose} className="block py-1 font-bold text-[#795900]">
              View All 9 Locations
            </Link>
            {CLINIC_BRANCHES.map((b) => (
              <Link
                key={b.name}
                href={`/branches/${b.id}`}
                onClick={onClose}
                className="block py-1"
              >
                {b.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="/smile-gallery" onClick={onClose} className="block text-sm font-bold text-[#2B2420]">
        Smile Gallery
      </Link>
      <Link href="/pricing-emi" onClick={onClose} className="block text-sm font-bold text-[#2B2420]">
        Pricing & 0% EMI
      </Link>
      <Link href="/dental-tourism" onClick={onClose} className="block text-sm font-bold text-[#2B2420]">
        Dental Tourism
      </Link>
      <Link href="/contact" onClick={onClose} className="block text-sm font-bold text-[#2B2420]">
        Contact & Clinics
      </Link>

      <div className="pt-4 border-t border-[#E8DCC8] space-y-3">
        <Link
          href="/book-appointment"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#795900] text-white text-xs font-bold shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </Link>
        <a
          href="tel:+919482712345"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#FDF8EE] border border-[#E8DCC8] text-[#795900] text-xs font-bold"
        >
          <Phone className="w-4 h-4" />
          <span>Call Helpline: +91 94827 12345</span>
        </a>
      </div>
    </div>
  );
};

