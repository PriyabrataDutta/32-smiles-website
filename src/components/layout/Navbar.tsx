'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Calendar,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { CLINIC_BRANCHES } from '@/data/clinicData';

const TREATMENT_CATEGORIES = [
  {
    title: 'Orthodontics & Aligners',
    items: [
      {
        name: 'Invisalign & Clear Aligners',
        href: '/treatments/invisalign-treatment',
        desc: 'US Diamond Provider · 3D iTero Simulation',
        badge: 'From ₹45k',
      },
      {
        name: 'Orthodontic Braces',
        href: '/treatments/orthodontics-braces',
        desc: 'Ceramic, Metal & Self-Ligating',
        badge: 'From ₹28k',
      },
    ],
  },
  {
    title: 'Implants & Surgery',
    items: [
      {
        name: 'Dental Implants',
        href: '/treatments/dental-implants',
        desc: 'Swiss Straumann · Lifetime Warranty',
        badge: 'From ₹25k',
      },
      {
        name: 'Single-Sitting RCT',
        href: '/treatments/root-canal-treatment',
        desc: 'Painless Micro Rotary Endodontics',
        badge: 'From ₹4,500',
      },
      {
        name: 'Wisdom Tooth Removal',
        href: '/treatments/disimpaction',
        desc: 'Sutureless Piezoelectric Surgery',
        badge: 'From ₹3,500',
      },
      {
        name: 'Crowns & Bridges',
        href: '/treatments/crown-and-bridges',
        desc: 'CAD/CAM Monolithic Zirconia',
        badge: 'From ₹5,500',
      },
    ],
  },
  {
    title: 'Cosmetic & Smile',
    items: [
      {
        name: 'Smile Designing',
        href: '/treatments/smile-designing',
        desc: 'Digital Smile Design (DSD) Preview',
        badge: 'Custom',
      },
      {
        name: 'Porcelain Veneers',
        href: '/treatments/dental-veneer',
        desc: 'Ultra-thin E-max Handcrafted',
        badge: 'From ₹8,500',
      },
      {
        name: 'Laser Teeth Whitening',
        href: '/treatments/teeth-whitening',
        desc: 'Philips Zoom · 8 Shades in 45m',
        badge: 'From ₹6,500',
      },
      {
        name: 'Tooth Fillings & Inlays',
        href: '/treatments/tooth-filling',
        desc: 'Biomimetic Tooth-Colored Composite',
        badge: 'From ₹1,200',
      },
    ],
  },
  {
    title: 'Preventive & Gums',
    items: [
      {
        name: 'Scaling & Polishing',
        href: '/treatments/scaling-polishing',
        desc: 'Ultrasonic Airflow Stain Removal',
        badge: 'From ₹999',
      },
      {
        name: 'Laser Dentistry',
        href: '/treatments/laser-dentistry',
        desc: 'Biolase WaterLase Minimally Invasive',
        badge: 'Painless',
      },
      {
        name: 'Gum Treatments',
        href: '/treatments/gum-treatments',
        desc: 'Laser Periodontics & Flap Surgery',
        badge: 'Specialist',
      },
      {
        name: 'Child Dental Care',
        href: '/treatments/child-dental-care',
        desc: 'Pediatric Sedation & Fluoride',
        badge: 'Kids Friendly',
      },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF4EA]/95 backdrop-blur-md border-b border-[#E8DCC8] shadow-xs">
      {/* Top Banner Strip */}
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

      {/* Main Navbar */}
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-40 sm:w-48 h-12">
            <Image
              src="/logo.png"
              alt="32 Smiles Multispeciality Dental Clinics"
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-semibold tracking-wide text-[#2B2420]">
          <Link href="/" className="hover:text-[#795900] transition-colors">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#795900] transition-colors py-2 cursor-pointer">
              <span>About</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-[#E8DCC8] p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="/about"
                className="block px-4 py-2.5 rounded-xl hover:bg-[#FDF8EE] hover:text-[#795900] transition-colors"
              >
                About 32 Smiles
              </Link>
              <Link
                href="/doctors"
                className="block px-4 py-2.5 rounded-xl hover:bg-[#FDF8EE] hover:text-[#795900] transition-colors"
              >
                Our Dental Specialists
              </Link>
              <Link
                href="/facilities"
                className="block px-4 py-2.5 rounded-xl hover:bg-[#FDF8EE] hover:text-[#795900] transition-colors"
              >
                Advanced Facilities
              </Link>
            </div>
          </div>

          {/* Treatments Mega-Menu - Full Container Width */}
          <div className="group">
            <Link
              href="/treatments"
              className="flex items-center gap-1 hover:text-[#795900] transition-colors py-2"
            >
              <span>Treatments</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-0 right-0 w-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white rounded-3xl shadow-2xl border border-[#E8DCC8] p-7">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#FAF4EA]">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#D9A93B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#795900]">
                      Comprehensive Dental Specialities — All 14 Procedures
                    </span>
                  </div>
                  <Link
                    href="/treatments"
                    className="text-xs font-semibold text-[#795900] hover:underline flex items-center gap-1.5 group/link"
                  >
                    <span>Explore Full Treatments Directory & Fee Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 5 Equal-Sized Generous Columns */}
                <div className="grid grid-cols-5 gap-6">
                  {/* Column 1: Orthodontics & Aligners */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-[#795900] uppercase tracking-wider pb-1.5 border-b border-[#FAF4EA]">
                      {TREATMENT_CATEGORIES[0].title}
                    </div>
                    <div className="space-y-2">
                      {TREATMENT_CATEGORIES[0].items.map((t) => (
                        <Link
                          key={t.href}
                          href={t.href}
                          className="block p-3 rounded-2xl hover:bg-[#FDF8EE] border border-transparent hover:border-[#E8DCC8] transition-all group/item"
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <span className="font-bold text-[#2B2420] group-hover/item:text-[#795900] text-xs leading-snug">
                              {t.name}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF4EA] text-[#795900] font-semibold flex-shrink-0 border border-[#D9A93B]/20">
                              {t.badge}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#6E6458] mt-1 leading-normal">
                            {t.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Implants & Surgery */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-[#795900] uppercase tracking-wider pb-1.5 border-b border-[#FAF4EA]">
                      {TREATMENT_CATEGORIES[1].title}
                    </div>
                    <div className="space-y-2">
                      {TREATMENT_CATEGORIES[1].items.map((t) => (
                        <Link
                          key={t.href}
                          href={t.href}
                          className="block p-3 rounded-2xl hover:bg-[#FDF8EE] border border-transparent hover:border-[#E8DCC8] transition-all group/item"
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <span className="font-bold text-[#2B2420] group-hover/item:text-[#795900] text-xs leading-snug">
                              {t.name}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF4EA] text-[#795900] font-semibold flex-shrink-0 border border-[#D9A93B]/20">
                              {t.badge}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#6E6458] mt-1 leading-normal">
                            {t.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Cosmetic & Smile */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-[#795900] uppercase tracking-wider pb-1.5 border-b border-[#FAF4EA]">
                      {TREATMENT_CATEGORIES[2].title}
                    </div>
                    <div className="space-y-2">
                      {TREATMENT_CATEGORIES[2].items.map((t) => (
                        <Link
                          key={t.href}
                          href={t.href}
                          className="block p-3 rounded-2xl hover:bg-[#FDF8EE] border border-transparent hover:border-[#E8DCC8] transition-all group/item"
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <span className="font-bold text-[#2B2420] group-hover/item:text-[#795900] text-xs leading-snug">
                              {t.name}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF4EA] text-[#795900] font-semibold flex-shrink-0 border border-[#D9A93B]/20">
                              {t.badge}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#6E6458] mt-1 leading-normal">
                            {t.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Preventive & Gums */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-[#795900] uppercase tracking-wider pb-1.5 border-b border-[#FAF4EA]">
                      {TREATMENT_CATEGORIES[3].title}
                    </div>
                    <div className="space-y-2">
                      {TREATMENT_CATEGORIES[3].items.map((t) => (
                        <Link
                          key={t.href}
                          href={t.href}
                          className="block p-3 rounded-2xl hover:bg-[#FDF8EE] border border-transparent hover:border-[#E8DCC8] transition-all group/item"
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <span className="font-bold text-[#2B2420] group-hover/item:text-[#795900] text-xs leading-snug">
                              {t.name}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF4EA] text-[#795900] font-semibold flex-shrink-0 border border-[#D9A93B]/20">
                              {t.badge}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#6E6458] mt-1 leading-normal">
                            {t.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 5: Featured Patient Action Card */}
                  <div className="bg-gradient-to-br from-[#FAF4EA] via-[#F4E9D8] to-[#FAF4EA] p-5 rounded-2xl border border-[#D9A93B]/30 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-white/80 text-[#795900] mb-3 w-fit border border-[#D9A93B]/30 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5 text-[#D9A93B]" />
                        <span>Digital 3D Smile Scan</span>
                      </div>
                      <h5 className="font-serif font-bold text-sm text-[#2B2420] leading-snug">
                        Free 3D Optical Scan & Smile Preview
                      </h5>
                      <p className="text-xs text-[#6E6458] mt-1.5 leading-relaxed">
                        See your simulated teeth alignment and smile transformation on screen before starting.
                      </p>
                      <div className="mt-4 p-2.5 bg-white/90 rounded-xl border border-[#D9A93B]/25 text-xs text-[#795900] font-semibold flex items-center gap-2">
                        <span>💳</span>
                        <span>0% Interest EMI starting ₹2,499/mo</span>
                      </div>
                    </div>

                    <div className="mt-5 space-y-2">
                      <Link
                        href="/book-appointment"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white text-xs font-bold shadow-sm transition"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Free Consultation</span>
                      </Link>
                      <a
                        href="https://wa.me/919482712345?text=Hi%2032%20Smiles%2C%20I%20have%20a%20query%20about%20dental%20treatments."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp Clinic Doctor</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Strip */}
                <div className="mt-5 pt-3.5 border-t border-[#FAF4EA] flex items-center justify-between text-xs text-[#6E6458]">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#D9A93B]" />
                      <span>Unified European Class-B Sterilization</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-4 h-4 text-[#D9A93B]" />
                      <span>Standardized Transparent Pricing</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-[#D9A93B]" />
                      <span>Open 7 Days (10 AM - 9 PM)</span>
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#795900]">
                    15-Minute Response Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Branches Dropdown */}
          <div className="relative group">
            <Link
              href="/branches"
              className="flex items-center gap-1 hover:text-[#795900] transition-colors py-2"
            >
              <span>Branches</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full -left-10 w-72 bg-white rounded-2xl shadow-2xl border border-[#E8DCC8] p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="text-[11px] font-bold text-[#795900] px-3 py-1 uppercase tracking-wider">
                9 Bangalore Clinics
              </div>
              <div className="max-h-80 overflow-y-auto no-scrollbar space-y-1">
                {CLINIC_BRANCHES.map((b) => (
                  <Link
                    key={b.name}
                    href={`/branches/${b.id}`}
                    className="block px-3 py-2 rounded-xl text-xs hover:bg-[#FDF8EE] hover:text-[#795900] transition-colors"
                  >
                    <div className="font-bold text-[#2B2420]">{b.name}</div>
                    <div className="text-[10px] text-[#6E6458] truncate">{b.area}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/smile-gallery" className="hover:text-[#795900] transition-colors">
            Smile Gallery
          </Link>

          <Link href="/pricing-emi" className="hover:text-[#795900] transition-colors">
            Pricing & EMI
          </Link>

          <Link href="/dental-tourism" className="hover:text-[#795900] transition-colors">
            Dental Tourism
          </Link>

          <Link href="/contact" className="hover:text-[#795900] transition-colors">
            Contact
          </Link>
        </div>

        {/* Right Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#795900] hover:bg-[#573F00] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all tracking-wide cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white border border-[#E8DCC8] text-[#2B2420] hover:bg-[#FDF8EE] cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8DCC8] shadow-2xl px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B2420]"
          >
            Home
          </Link>

          {/* About Toggle */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full text-sm font-bold text-[#2B2420]"
            >
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {aboutOpen && (
              <div className="pl-4 mt-2 space-y-2 text-xs text-[#6E6458]">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1">About 32 Smiles</Link>
                <Link href="/doctors" onClick={() => setMobileMenuOpen(false)} className="block py-1">Our Doctors</Link>
                <Link href="/facilities" onClick={() => setMobileMenuOpen(false)} className="block py-1">Facilities & Technology</Link>
              </div>
            )}
          </div>

          {/* Treatments Toggle */}
          <div>
            <button
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              className="flex items-center justify-between w-full text-sm font-bold text-[#2B2420]"
            >
              <span>Treatments (All 14)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} />
            </button>
            {treatmentsOpen && (
              <div className="pl-3 mt-2 space-y-3 text-xs">
                <Link
                  href="/treatments"
                  onClick={() => setMobileMenuOpen(false)}
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
                          onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setBranchesOpen(!branchesOpen)}
              className="flex items-center justify-between w-full text-sm font-bold text-[#2B2420]"
            >
              <span>Bangalore Branches (9)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${branchesOpen ? 'rotate-180' : ''}`} />
            </button>
            {branchesOpen && (
              <div className="pl-4 mt-2 space-y-2 text-xs text-[#6E6458]">
                <Link href="/branches" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-bold text-[#795900]">View All 9 Locations</Link>
                {CLINIC_BRANCHES.map((b) => (
                  <Link
                    key={b.name}
                    href={`/branches/${b.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/smile-gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B2420]"
          >
            Smile Gallery
          </Link>
          <Link
            href="/pricing-emi"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B2420]"
          >
            Pricing & 0% EMI
          </Link>
          <Link
            href="/dental-tourism"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B2420]"
          >
            Dental Tourism
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#2B2420]"
          >
            Contact & Clinics
          </Link>

          <div className="pt-4 border-t border-[#E8DCC8] space-y-3">
            <Link
              href="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
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
      )}
    </header>
  );
};
