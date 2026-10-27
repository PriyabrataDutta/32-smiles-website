import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Star,
  ShieldCheck,
  MessageSquare,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { CLINIC_BRANCHES } from '@/data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B2420] text-[#F8F0E4] pt-16 pb-24 md:pb-16 border-t border-[#4E4636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Hotline Banner */}
        <div className="bg-[#3B322B] p-6 sm:p-8 rounded-3xl mb-12 border border-[#4E4636] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D9A93B]/20 text-[#D9A93B] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FFDEA0]">
                Dental Emergency or Acute Toothache?
              </h4>
              <p className="text-xs sm:text-sm text-[#D2C5B0]">
                Instant priority emergency routing across all 9 Bangalore clinics
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919482712345"
              className="bg-[#D9A93B] hover:bg-[#c2942c] text-[#573F00] font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline (+91 94827 12345)</span>
            </a>
            <a
              href="https://wa.me/919482712345?text=Hello%2032%20Smiles%20Clinic,%20I%20need%20urgent%20dental%20assistance"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#4E4636]">
          {/* Column 1: About & Head Office */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-44 h-12">
              <Image
                src="/logo.png"
                alt="32 Smiles Multispeciality Dental Clinics"
                fill
                className="object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs text-[#D2C5B0] leading-relaxed">
              Bangalore's trusted multispeciality dental network established in 2005. Painless, micro-precision treatments using 3D intraoral tech across 9 modern clinics.
            </p>

            <div className="pt-2 text-xs text-[#D2C5B0] space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9A93B] shrink-0 mt-0.5" />
                <span>Head Office: #45 100 Ft Rd, Opp Metro Pillar 120, Indiranagar, Bangalore 560038</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D9A93B] shrink-0" />
                <span>Hours: 10:00 AM - 9:00 PM (Monday - Sunday)</span>
              </p>
            </div>
          </div>

          {/* Column 2: Speciality Treatments */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#FFDEA0] uppercase tracking-wider mb-4 border-b border-[#4E4636] pb-2">
              Speciality Treatments
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-xs text-[#D2C5B0]">
              <li>
                <Link
                  href="/treatments/root-canal-treatment"
                  className="hover:text-[#FFDEA0] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D9A93B]">✦</span> Painless Single-Sitting Root Canal (RCT)
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/invisalign-treatment"
                  className="hover:text-[#FFDEA0] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D9A93B]">✦</span> Invisalign & Clear Aligners
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/dental-implants"
                  className="hover:text-[#FFDEA0] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D9A93B]">✦</span> 3D Guided Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/disimpaction"
                  className="hover:text-[#FFDEA0] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D9A93B]">✦</span> Wisdom Tooth Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/smile-designing"
                  className="hover:text-[#FFDEA0] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D9A93B]">✦</span> Cosmetic Smile Makeover & Veneers
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/teeth-whitening"
                  className="hover:text-[#FFDEA0] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D9A93B]">✦</span> Laser Teeth Whitening
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/orthodontics-braces"
                  className="hover:text-[#FFDEA0] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D9A93B]">✦</span> Orthodontic Braces (Metal & Ceramic)
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="text-[#FFDEA0] font-bold hover:underline pt-1 block"
                >
                  Explore All 14 Procedures &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 9 Bangalore Clinics */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#FFDEA0] uppercase tracking-wider mb-4 border-b border-[#4E4636] pb-2">
              Our 9 Clinics in Bangalore
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#D2C5B0]">
              {CLINIC_BRANCHES.map((b) => (
                <Link
                  key={b.name}
                  href={`/branches/${b.id}`}
                  className="hover:text-[#FFDEA0] transition-colors flex items-center gap-1 group py-1"
                >
                  <MapPin className="w-3 h-3 text-[#D9A93B] group-hover:translate-x-0.5 transition-transform" />
                  <span>{b.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-[#4E4636]">
              <Link
                href="/branches"
                className="text-xs text-[#FFDEA0] font-bold hover:underline flex items-center gap-1"
              >
                <span>Find Your Nearest Clinic</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Column 4: Trust & Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#FFDEA0] uppercase tracking-wider mb-4 border-b border-[#4E4636] pb-2">
              Trust & Certifications
            </h4>

            {/* Google Rating Card */}
            <div className="bg-[#3B322B] p-4 rounded-2xl border border-[#4E4636] space-y-1">
              <div className="flex items-center gap-1.5 text-[#D9A93B]">
                <span className="font-bold text-lg text-white">4.9 / 5.0</span>
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-[#D2C5B0]">
                Based on 15,200+ Verified Patient Reviews on Google & Practo
              </p>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 text-xs text-[#D2C5B0]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 9001:2015 6-Step Sterilization</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>0% Interest Easy EMI Schemes</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <Link
                href="/smile-gallery"
                className="px-3 py-1 rounded-full bg-[#3B322B] hover:bg-[#D9A93B] hover:text-[#573F00] transition-colors"
              >
                Smile Gallery
              </Link>
              <Link
                href="/dental-tourism"
                className="px-3 py-1 rounded-full bg-[#3B322B] hover:bg-[#D9A93B] hover:text-[#573F00] transition-colors"
              >
                Dental Tourism
              </Link>
              <Link
                href="/pricing-emi"
                className="px-3 py-1 rounded-full bg-[#3B322B] hover:bg-[#D9A93B] hover:text-[#573F00] transition-colors"
              >
                Pricing & EMI
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs text-[#807663] gap-3">
          <p>© 2026 32 Smiles Multispeciality Dental Clinics. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/patient-guidelines" className="hover:underline">Patient Guidelines</Link>
            <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
