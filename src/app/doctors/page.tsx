import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { DoctorBiosSection } from '@/components/sections/DoctorBiosSection';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { DOCTORS_LIST } from '@/data/clinicData';
import {
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Specialist Doctors & Dental Surgeons | 32 Smiles Bangalore',
  description:
    'Meet the master dental clinicians, implantologists, and orthodontists at 32 Smiles Bangalore. Decades of specialized clinical expertise across our 9 clinics.',
};

export default function DoctorsPage() {
  const clinicalDepartments = [
    { name: 'Endodontics (Root Canal)', desc: 'Microscopic single-sitting root canal specialists saving infected natural teeth.' },
    { name: 'Implantology & Prosthodontics', desc: 'Computer-guided titanium & zirconia implant placement and full arch rehabilitation.' },
    { name: 'Orthodontics & Dentofacial', desc: 'Certified Invisalign Diamond doctors correcting malocclusions and deep bites.' },
    { name: 'Oral & Maxillofacial Surgery', desc: 'Atraumatic piezo-surgical extractions of impacted third molars and jaw corrections.' },
    { name: 'Periodontics & Gum Surgery', desc: 'Laser gum therapy, bone regeneration, and treatment for bleeding gums.' },
    { name: 'Pediatric Dentistry', desc: 'Child psychologists and pedodontists creating joyful first dental experiences.' },
  ];

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
                <span>Our Doctors</span>
              </div>
              <SectionBadge text="Super-Specialist Dental Team" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                Treated Exclusively by Seasoned MDS Specialists
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                At 32 Smiles, complex procedures are never delegated to general practitioners. Every root canal, implant, and aligner plan is executed by certified post-graduate specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Doctor Bios */}
        <DoctorBiosSection />

        {/* Clinical Super-Specialities */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto space-y-3">
              <SectionBadge text="Speciality Departments" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                Dedicated Specialized Wings Under One Roof
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
              <p className="text-sm text-[#4E4636]">
                Seamless inter-disciplinary collaboration ensures every facet of your oral health is handled by a dedicated domain expert.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalDepartments.map((dept, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#E8DCC8] card-shadow-hover transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8] flex items-center justify-center text-[#795900] mb-4 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2B2420] mb-2">{dept.name}</h3>
                  <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">{dept.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form CTA */}
        <LeadFormSection
          title="Consult with a Senior Specialist Today"
          subtitle="Select your preferred doctor and clinic branch. Our desk will schedule your priority consultation slot."
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
