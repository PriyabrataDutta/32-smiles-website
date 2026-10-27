import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import {
  Plane,
  Globe,
  ShieldCheck,
  Award,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  Hotel,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dental Tourism in Bangalore, India | 32 Smiles Multispeciality',
  description:
    'Save 60-70% on dental implants, full mouth rehabilitation, and smile makeovers in Bangalore. International patient concierge, airport transfers, and compressed itineraries.',
};

export default function DentalTourismPage() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Virtual Consultation & Digital Diagnosis',
      desc: 'Send us your dental X-rays, OPG scans, or photos via WhatsApp or email. Our Chief Implantologist reviews your case and returns a personalized treatment timeline and fixed cost estimate.',
    },
    {
      step: 'Step 2',
      title: 'Itinerary & Travel Assistance',
      desc: 'Our international patient coordinator assists with medical visa letters, partner hotel recommendations in Indiranagar / Whitefield, and schedules your treatment in compressed sessions.',
    },
    {
      step: 'Step 3',
      title: 'VIP Airport Pickup & Clinic Welcome',
      desc: 'Arrive at Bangalore Kempegowda International Airport (BLR). Our private chauffeur escorts you to your accommodation or directly to the clinic for your high-resolution 3D CBCT scan.',
    },
    {
      step: 'Step 4',
      title: 'Micro-Precision Treatment Execution',
      desc: 'Keyhole guided implants and digital smile makeovers executed in 3 to 5 comfortable days using Swiss titanium and German CAD/CAM ceramic crowns.',
    },
    {
      step: 'Step 5',
      title: 'Global Warranty & Return Home',
      desc: 'Receive your serialized lifetime implant warranty card and international aftercare documentation before enjoying a tour of Bangalore, Mysore, or the Coorg coffee hills.',
    },
  ];

  const savingsComparison = [
    { procedure: 'Single Dental Implant + Crown', usaPrice: '$3,500 - $5,000', ukPrice: '£2,200 - £3,000', smilesPrice: '$350 - $480', savings: 'Up to 75%' },
    { procedure: 'All-on-4 Full Mouth Implants', usaPrice: '$24,000 - $35,000', ukPrice: '£15,000 - £22,000', smilesPrice: '$3,200 - $4,500', savings: 'Up to 80%' },
    { procedure: 'Full Set Porcelain Veneers (16)', usaPrice: '$18,000 - $28,000', ukPrice: '£12,000 - £18,000', smilesPrice: '$2,200 - $3,000', savings: 'Up to 78%' },
    { procedure: 'Root Canal + Zirconia Crown', usaPrice: '$1,800 - $2,500', ukPrice: '£1,000 - £1,500', smilesPrice: '$160 - $220', savings: 'Up to 85%' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-[#FAF4EA] border-b border-[#E8DCC8] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A93B]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#795900]">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span>Dental Tourism</span>
              </div>
              <SectionBadge text="Global Patient Concierge" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                World-Class Smiles in Bangalore with 70% Global Savings
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                Experience precision Swiss & German dental implants and cosmetic makeovers delivered by fellowship-trained surgeons. Combine your treatment with an unforgettable visit to India's garden city.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919482712345?text=Hello%2032%20Smiles%20International%20Desk,%20I%20would%20like%20a%20free%20remote%20dental%20estimate."
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with International Desk</span>
                </a>
                <a
                  href="#cost-comparison"
                  className="px-7 py-3.5 rounded-full bg-white border border-[#D2C5B0] text-[#795900] font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#FAF4EA] transition-all"
                >
                  <span>View Global Cost Comparison</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Savings Table */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]" id="cost-comparison">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto space-y-3">
              <SectionBadge text="Global Price Benchmark" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                Compare Treatment Costs (USA / UK vs 32 Smiles)
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
              <p className="text-xs sm:text-sm text-[#4E4636]">
                Same FDA-approved Swiss implants (Straumann / Nobel Biocare) and 3M dental materials at a fraction of Western costs.
              </p>
            </div>

            <div className="bg-[#FAF4EA] rounded-3xl card-shadow border border-[#E8DCC8] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#2B2420] text-[#FFDEA0] uppercase font-bold text-[11px] tracking-wider">
                    <tr>
                      <th className="py-4 px-6">Dental Procedure</th>
                      <th className="py-4 px-6">USA Average</th>
                      <th className="py-4 px-6">UK Average</th>
                      <th className="py-4 px-6 text-[#D9A93B]">32 Smiles Bangalore</th>
                      <th className="py-4 px-6">Your Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DCC8]">
                    {savingsComparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/60 transition-colors">
                        <td className="py-4 px-6 font-semibold text-[#2B2420]">{row.procedure}</td>
                        <td className="py-4 px-6 text-gray-500 line-through">{row.usaPrice}</td>
                        <td className="py-4 px-6 text-gray-500 line-through">{row.ukPrice}</td>
                        <td className="py-4 px-6 font-bold text-[#795900] text-base">{row.smilesPrice}</td>
                        <td className="py-4 px-6">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                            {row.savings}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Step International Journey */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-3">
              <SectionBadge text="Seamless Experience" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                Your 5-Step Dental Vacation Journey
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DCC8] card-shadow-hover transition-all flex flex-col sm:flex-row items-start gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8] flex items-center justify-center font-serif text-xl font-bold text-[#795900] shrink-0">
                    0{idx + 1}
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#D9A93B] uppercase tracking-wider">
                      {s.step}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#2B2420]">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Remote Consultation Lead Form */}
        <LeadFormSection
          title="Request a Free Remote Case Evaluation"
          subtitle="Upload your details or message us on WhatsApp with your dental concerns for a fixed quote and treatment schedule."
          badgeText="International Concierge Response within 2 Hours"
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
