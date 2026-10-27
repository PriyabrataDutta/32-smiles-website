import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBottomNav } from '@/components/layout/StickyBottomNav';
import { SectionBadge } from '@/components/common/SectionBadge';
import { EmiCalculatorCard } from '@/components/common/EmiCalculatorCard';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import {
  CreditCard,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  FileText,
  BadgePercent,
  Clock,
} from 'lucide-react';
import { TREATMENTS_LIST } from '@/data/clinicData';

export const metadata: Metadata = {
  title: 'Dental Treatment Pricing & 0% EMI Calculator | 32 Smiles Bangalore',
  description:
    'Explore transparent pricing for dental implants, root canals, Invisalign, and veneers at 32 Smiles. Calculate your 0% interest monthly installment instantly.',
};

export default function PricingEmiPage() {
  const pricingTable = [
    { treatment: 'Comprehensive 3D Consultation & X-Ray', startingAt: 'Complimentary / ₹499', duration: '30 mins', emiAvailable: 'N/A' },
    { treatment: 'Ultrasonic Scaling & Enamel Polishing', startingAt: '₹999', duration: '45 mins', emiAvailable: 'No' },
    { treatment: 'Single-Sitting Rotary Root Canal (RCT)', startingAt: '₹4,500', duration: '45 - 60 mins', emiAvailable: 'Yes (0% EMI)' },
    { treatment: 'CAD/CAM Premium Zirconia Crown', startingAt: '₹6,500', duration: '2 visits', emiAvailable: 'Yes (0% EMI)' },
    { treatment: 'Swiss/German Dental Implant (with Crown)', startingAt: '₹24,999', duration: '2 - 3 visits', emiAvailable: 'Yes (from ₹2,083/mo)' },
    { treatment: 'Certified Invisalign Clear Aligners', startingAt: '₹45,000', duration: '6 - 12 months', emiAvailable: 'Yes (from ₹3,750/mo)' },
    { treatment: 'In-Office Cold-Laser Teeth Whitening', startingAt: '₹6,999', duration: '45 mins', emiAvailable: 'No' },
    { treatment: 'Ultra-Thin E-Max Porcelain Veneer', startingAt: '₹8,500 / tooth', duration: '2 visits', emiAvailable: 'Yes (0% EMI)' },
    { treatment: 'Piezo-Surgical Wisdom Tooth Removal', startingAt: '₹3,500', duration: '30 mins', emiAvailable: 'Yes (0% EMI)' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA]">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative py-16 md:py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#795900]">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span>Pricing & EMI</span>
              </div>
              <SectionBadge text="Honest & Transparent Healthcare" />
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B2420] tracking-tight leading-[1.15]">
                Transparent Dental Pricing with 0% Monthly EMI
              </h1>
              <p className="text-base sm:text-lg text-[#4E4636] leading-relaxed">
                World-class dental care should be accessible to everyone. We offer zero hidden charges, printed estimates, and seamless 0% interest EMI options.
              </p>
            </div>
          </div>
        </section>

        {/* EMI Calculator Container */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 space-y-2">
              <SectionBadge text="Interactive EMI Estimator" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420]">
                Calculate Your Monthly Installment
              </h2>
            </div>
            <EmiCalculatorCard />
          </div>
        </section>

        {/* Transparent Pricing Table */}
        <section className="py-20 bg-[#FAF4EA] border-b border-[#E8DCC8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto space-y-3">
              <SectionBadge text="Treatment Cost Matrix" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
                Indicative Treatment Fees
              </h2>
              <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
              <p className="text-xs sm:text-sm text-[#4E4636]">
                Fees include standard local anesthesia, sterilization overheads, and specialist doctor fees. Custom quotes provided upon initial 3D scan.
              </p>
            </div>

            <div className="bg-white rounded-3xl card-shadow border border-[#E8DCC8] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF4EA] text-[#795900] uppercase font-bold text-[11px] tracking-wider border-b border-[#E8DCC8]">
                    <tr>
                      <th className="py-4 px-6">Treatment / Procedure</th>
                      <th className="py-4 px-6">Indicative Starting Fee</th>
                      <th className="py-4 px-6">Avg Duration</th>
                      <th className="py-4 px-6">0% EMI Available</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FAF4EA]">
                    {pricingTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF4EA]/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-[#2B2420]">{row.treatment}</td>
                        <td className="py-4 px-6 font-bold text-[#795900]">{row.startingAt}</td>
                        <td className="py-4 px-6 text-[#6E6458]">{row.duration}</td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                              row.emiAvailable.includes('Yes')
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {row.emiAvailable}
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

        {/* Insurance & Financing Partners */}
        <section className="py-20 bg-white border-b border-[#E8DCC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8]">
                <BadgePercent className="w-8 h-8 text-[#795900] mb-4" />
                <h3 className="font-serif text-xl font-bold text-[#2B2420] mb-2">0% Interest Partners</h3>
                <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">
                  We partner with Bajaj Finserv, Pine Labs, and all leading credit cards (HDFC, ICICI, SBI, Axis) for zero-cost instant paperless EMI approvals.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8]">
                <FileText className="w-8 h-8 text-[#795900] mb-4" />
                <h3 className="font-serif text-xl font-bold text-[#2B2420] mb-2">Insurance Reimbursement</h3>
                <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">
                  We provide detailed itemized medical bills, diagnostic X-rays, and signed claim documents for reimbursement through all major corporate health TPAs.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8]">
                <ShieldCheck className="w-8 h-8 text-[#795900] mb-4" />
                <h3 className="font-serif text-xl font-bold text-[#2B2420] mb-2">Lifetime Warranty Cards</h3>
                <p className="text-xs sm:text-sm text-[#6E6458] leading-relaxed">
                  Select Swiss dental implants and zirconia crowns come with serialized manufacturer warranty certificates recognized globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form CTA */}
        <LeadFormSection
          title="Apply for Easy 0% EMI Consultation"
          subtitle="Get a personalized clinical quote and pre-approval check for your dental procedure in under 15 minutes."
        />
      </main>

      <Footer />
      <StickyBottomNav />
    </div>
  );
}
