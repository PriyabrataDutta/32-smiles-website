'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone,
  MapPin,
} from 'lucide-react';

function BookingFormContent() {
  const searchParams = useSearchParams();
  const branchParam = searchParams.get('branch') || undefined;
  const doctorParam = searchParams.get('doctor') || undefined;
  const treatmentParam = searchParams.get('treatment') || undefined;

  return (
    <div>
      <LeadFormSection
        selectedBranchName={branchParam}
        selectedDoctorName={doctorParam}
        selectedTreatmentName={treatmentParam}
        title="Schedule Your Appointment Slot"
        subtitle="Select your preferred clinic branch, doctor, and date. Our patient desk will confirm your appointment in 15 minutes."
        badgeText="Complimentary Initial Screening & 3D Scan Consultation"
      />
    </div>
  );
}

export default function BookAppointmentPage() {
  const perks = [
    { title: '15-Minute Callback', desc: 'Instant priority routing to our head dental coordinator.' },
    { title: 'Complimentary 3D Scan', desc: 'High-resolution digital scan & smile audit included with zero obligation.' },
    { title: 'Zero Waiting Time', desc: 'Pre-scheduled appointment slots eliminate crowded waiting room delays.' },
    { title: '9 Bangalore Branches', desc: 'Choose the clinic closest to your home or office.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative py-14 md:py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#795900]">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span>Book Appointment</span>
              </div>
              <SectionBadge text="Direct Specialist Booking" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                Book Your Dental Visit at 32 Smiles
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                Take the first step toward a healthier, more confident smile. Choose your preferred clinic branch across Bangalore below.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Quick Booking Perks */}
        <section className="py-10 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {perks.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF4EA] text-[#795900] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DCC8]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#2B2420]">{p.title}</h4>
                    <p className="text-[11px] text-[#6E6458] mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Form with Suspense */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-sm font-bold text-[#795900]">
              Loading Booking System...
            </div>
          }
        >
          <BookingFormContent />
        </Suspense>

        {/* Emergency Call Strip */}
        <section className="py-8 bg-[#2B2420] text-[#FAF4EA]">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
            <p className="text-xs sm:text-sm text-[#FFDEA0]">
              Need immediate attention for severe toothache or broken dental crowns?
            </p>
            <a
              href="tel:+919482712345"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-white hover:text-[#D9A93B] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#D9A93B]" />
              <span>Call Emergency Priority Line: +91 94827 12345</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
