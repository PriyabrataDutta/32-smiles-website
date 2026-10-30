'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  CreditCard,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { BRANCHES } from '@/data/clinicData';

interface TreatmentSidebarProps {
  treatmentName: string;
  startingPrice: string;
}

export const TreatmentSidebar: React.FC<TreatmentSidebarProps> = ({
  treatmentName,
  startingPrice,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState(BRANCHES[0]?.name || 'Indiranagar');
  const [date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <aside className="lg:sticky lg:top-28 space-y-6">
      {/* Consultation Card */}
      <div className="bg-white rounded-3xl border-2 border-[#D9A93B]/40 shadow-xl p-6 sm:p-7 relative overflow-hidden">
        {/* Top Gold Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#795900] via-[#D9A93B] to-[#795900]" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF4EA] text-[#795900] text-[11px] font-bold border border-[#E8DCC8]">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A93B]" />
              Priority Booking
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Slots Open Today
            </span>
          </div>

          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2420]">
              Book Consultation
            </h3>
            <p className="text-xs text-[#5C5143] mt-1 leading-relaxed">
              Meet our senior MDS specialist at your preferred Bangalore clinic.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-emerald-950 text-sm">
                Appointment Requested!
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Thank you, <strong>{name}</strong>. Our clinical coordinator will call you within 15 minutes to confirm your preferred slot at <strong>{branch}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-[11px] font-bold text-emerald-700 underline mt-2 inline-block cursor-pointer"
              >
                Book another slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="sidebar-name" className="block text-[11px] font-bold text-[#2B2420] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  id="sidebar-name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D2C5B0] bg-[#FAF4EA]/40 text-xs text-[#2B2420] placeholder-[#807663] focus:outline-none focus:ring-2 focus:ring-[#795900] focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="sidebar-phone" className="block text-[11px] font-bold text-[#2B2420] uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  id="sidebar-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D2C5B0] bg-[#FAF4EA]/40 text-xs text-[#2B2420] placeholder-[#807663] focus:outline-none focus:ring-2 focus:ring-[#795900] focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="sidebar-branch" className="block text-[11px] font-bold text-[#2B2420] uppercase tracking-wider mb-1">
                  Select Clinic Branch
                </label>
                <select
                  id="sidebar-branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D2C5B0] bg-[#FAF4EA]/40 text-xs text-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#795900] focus:bg-white"
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name} ({b.landmark ? b.landmark.slice(0, 24) : 'Bangalore'})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="sidebar-date" className="block text-[11px] font-bold text-[#2B2420] uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <input
                  id="sidebar-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D2C5B0] bg-[#FAF4EA]/40 text-xs text-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#795900] focus:bg-white"
                />
              </div>

              <div className="p-2.5 rounded-xl bg-[#FAF4EA] border border-[#E8DCC8] text-[11px] text-[#5C5143] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Includes <strong>Free 3D CBCT Evaluation</strong> with booking</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Consultation</span>
              </button>
            </form>
          )}

          <div className="pt-2 border-t border-[#FAF4EA] text-center">
            <span className="text-[11px] text-[#5C5143]">
              Need immediate emergency help?
            </span>
            <div className="mt-2 flex gap-2">
              <a
                href="tel:+919482712345"
                className="flex-1 py-2 px-3 rounded-lg bg-[#FAF4EA] border border-[#D2C5B0] hover:bg-white text-[#795900] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hotline</span>
              </a>
              <a
                href={`https://wa.me/919482712345?text=${encodeURIComponent(
                  `Hi 32 Smiles, I would like to consult an implant specialist for ${treatmentName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 0% Interest Financing Snapshot Card */}
      <div className="bg-[#FAF4EA] rounded-3xl border border-[#E8DCC8] p-6 space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#795900] text-white flex items-center justify-center shrink-0">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#795900] block">
              Flexible Payments
            </span>
            <h4 className="font-serif font-bold text-[#2B2420] text-base leading-tight">
              0% Interest EMI Plans
            </h4>
          </div>
        </div>

        <p className="text-xs text-[#4E4636] leading-relaxed">
          High-grade treatment should never be delayed by budget. Pay in convenient monthly installments with <strong>zero down payment</strong>.
        </p>

        <div className="p-3.5 rounded-2xl bg-white border border-[#E8DCC8] space-y-1">
          <div className="text-[11px] text-[#5C5143]">Starting Installment:</div>
          <div className="text-xl font-bold text-[#795900] font-serif">₹2,499 / month</div>
          <div className="text-[10px] text-emerald-700 font-semibold">6, 9 & 12 Month Zero-Cost Tenures</div>
        </div>

        <div className="text-[11px] text-[#5C5143] flex items-center justify-between pt-1">
          <span>Bajaj Finserv • HDFC • ICICI</span>
          <a
            href="#pricing"
            className="text-[#795900] font-bold hover:underline inline-flex items-center gap-1"
          >
            Calculate EMI <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Trust & Clinical Certifications */}
      <div className="bg-white rounded-3xl border border-[#E8DCC8] p-6 space-y-3.5">
        <h4 className="font-serif font-bold text-[#2B2420] text-sm flex items-center gap-2">
          <Award className="w-4 h-4 text-[#D9A93B]" />
          Clinical Assurance at 32 Smiles
        </h4>

        <div className="space-y-2.5 text-xs text-[#4E4636]">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Lifetime Warranty:</strong> Official manufacturer guarantee card for Swiss & Swedish implants.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>98.7% Documented Success:</strong> Over 10,000 implants placed with zero nerve injury.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>ISO 9001:2015 Sterilization:</strong> Hospital-grade autoclaving and disposable surgical draping.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>9 Prime Bangalore Clinics:</strong> Convenient follow-ups and lifetime maintenance anywhere in town.</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
