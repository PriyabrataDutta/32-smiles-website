import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { CLINIC_BRANCHES } from '@/data/clinicData';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  Navigation,
  Calendar,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Clinic Locations | 32 Smiles Bangalore',
  description:
    'Contact 32 Smiles Dental Clinics. Emergency helpline +91 94827 12345, open 7 days a week 10 AM - 9 PM across 9 prime Bangalore locations.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative py-16 md:py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#795900]">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span>Contact Us</span>
              </div>
              <SectionBadge text="Prompt & Compassionate Patient Desk" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                We are Here for Your Dental Needs, 7 Days a Week
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                Whether you have an acute toothache emergency or need to plan a smile makeover consultation, our patient coordinators across all 9 Bangalore clinics are ready to assist.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Quick Contact Cards */}
        <section className="py-16 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Emergency Hotline */}
              <div className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DCC8] flex items-center justify-center text-[#795900]">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2B2420]">24/7 Dental Helpline</h3>
                <p className="text-xs text-[#6E6458]">For instant priority triage and same-day emergency slots.</p>
                <a
                  href="tel:+919482712345"
                  className="inline-block font-serif text-lg font-bold text-[#795900] hover:underline"
                >
                  +91 94827 12345
                </a>
              </div>

              {/* WhatsApp Support */}
              <div className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DCC8] flex items-center justify-center text-emerald-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2B2420]">WhatsApp Chat Desk</h3>
                <p className="text-xs text-[#6E6458]">Share your X-rays or ask questions directly with a doctor.</p>
                <a
                  href="https://wa.me/919482712345?text=Hello%2032%20Smiles%20Clinic,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-xs font-bold text-emerald-700 hover:underline"
                >
                  Start WhatsApp Chat &rarr;
                </a>
              </div>

              {/* Working Hours */}
              <div className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DCC8] flex items-center justify-center text-[#795900]">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2B2420]">Clinic Timings</h3>
                <p className="text-xs text-[#6E6458]">Open everyday including Sundays & national holidays.</p>
                <p className="text-xs font-bold text-[#2B2420]">10:00 AM - 9:00 PM (Monday - Sunday)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9 Bangalore Branches Directory */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-3">
              <SectionBadge text="Direct Clinic Contact" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                All 9 Bangalore Clinic Locations
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLINIC_BRANCHES.map((b) => (
                <div
                  key={b.name}
                  className="p-6 rounded-3xl bg-white border border-[#E8DCC8] card-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-lg font-bold text-[#2B2420]">{b.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                        Open Daily
                      </span>
                    </div>
                    <p className="text-xs text-[#6E6458] mb-4 leading-relaxed">{b.address}</p>
                    <div className="space-y-1.5 text-xs text-[#2B2420] border-t border-[#FAF4EA] pt-3">
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#D9A93B]" />
                        <a href={`tel:${b.phone}`} className="font-semibold hover:text-[#795900]">
                          {b.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-2 text-[#6E6458]">
                        <Clock className="w-3.5 h-3.5 text-[#D9A93B]" />
                        <span>{b.timings}</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#FAF4EA] grid grid-cols-2 gap-2">
                    <a
                      href={b.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 rounded-xl bg-[#FAF4EA] hover:bg-[#F5EDE1] text-[#795900] text-center text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Directions</span>
                    </a>
                    <Link
                      href={`/book-appointment?branch=${encodeURIComponent(b.name)}`}
                      className="py-2 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white text-center text-xs font-bold transition-all flex items-center justify-center gap-1"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Book Slot</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form CTA */}
        <LeadFormSection
          title="Send an Online Inquiry or Book Your Visit"
          subtitle="Our central desk will get back to you within 15 minutes to answer questions or confirm your appointment."
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
