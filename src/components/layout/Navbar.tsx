'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Calendar, Menu, X } from 'lucide-react';
import { CLINIC_BRANCHES } from '@/data/clinicData';
import { TopBanner } from './TopBanner';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF4EA]/95 backdrop-blur-md border-b border-[#E8DCC8] shadow-xs">
      {/* Top Banner Strip */}
      <TopBanner />

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
              loading="eager"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center h-full gap-7 text-[13px] font-semibold tracking-wide text-[#2B2420]">
          <Link href="/" className="hover:text-[#795900] transition-colors py-2">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative group h-full flex items-center">
            <button
              type="button"
              className="flex items-center gap-1 hover:text-[#795900] transition-colors py-2 cursor-pointer h-full"
            >
              <span>About</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="absolute -top-3 inset-x-0 h-4 bg-transparent pointer-events-auto" />
              <div className="bg-white rounded-2xl shadow-xl border border-[#E8DCC8] p-2">
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
          </div>

          {/* Treatments Mega-Menu */}
          <MegaMenu />

          {/* Branches Dropdown */}
          <div className="relative group h-full flex items-center">
            <Link
              href="/branches"
              className="flex items-center gap-1 hover:text-[#795900] transition-colors py-2 h-full"
            >
              <span>Branches</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full -left-10 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="absolute -top-3 inset-x-0 h-4 bg-transparent pointer-events-auto" />
              <div className="bg-white rounded-2xl shadow-2xl border border-[#E8DCC8] p-3">
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
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
