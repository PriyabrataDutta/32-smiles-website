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
  MapPin,
  Clock,
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
    <aside className="lg:sticky lg:top-24 space-y-5">
      {/* Consultation Card - Compact & Polished */}
      <div className="bg-white rounded-2xl border-2 border-[#D9A93B]/40 shadow-lg p-5 relative overflow-hidden">
        {/* Top Gold Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#795900] via-[#D9A93B] to-[#795900]" />

        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF4EA] text-[#795900] text-[10px] font-bold border border-[#E8DCC8]">
              <Sparkles className="w-3 h-3 text-[#D9A93B]" />
              Priority Booking
            </span>
            <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Slots Open Today
            </span>
          </div>

          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B2420]">
              Book Consultation
            </h3>
            <p className="text-[11px] text-[#5C5143] mt-0.5">
              Meet our senior MDS specialist at your preferred Bangalore clinic.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-emerald-950 text-xs">
                Appointment Requested!
              </h4>
              <p className="text-[11px] text-emerald-800 leading-snug">
                Thank you, <strong>{name}</strong>. Our clinical coordinator will call you within 15 minutes to confirm your slot at <strong>{branch}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-[10px] font-bold text-emerald-700 underline mt-1 inline-block cursor-pointer"
              >
                Book another slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div>
                <label htmlFor="sidebar-name" className="block text-[10px] font-bold text-[#2B2420] uppercase tracking-wider mb-0.5">
                  Full Name *
                </label>
                <input
                  id="sidebar-name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#D2C5B0] bg-[#FAF4EA]/40 text-xs text-[#2B2420] placeholder-[#807663] focus:outline-none focus:ring-2 focus:ring-[#795900] focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="sidebar-phone" className="block text-[10px] font-bold text-[#2B2420] uppercase tracking-wider mb-0.5">
                  Phone Number *
                </label>
                <input
                  id="sidebar-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#D2C5B0] bg-[#FAF4EA]/40 text-xs text-[#2B2420] placeholder-[#807663] focus:outline-none focus:ring-2 focus:ring-[#795900] focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="sidebar-branch" className="block text-[10px] font-bold text-[#2B2420] uppercase tracking-wider mb-0.5">
                  Select Clinic Branch
                </label>
                <select
                  id="sidebar-branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#D2C5B0] bg-[#FAF4EA]/40 text-xs text-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#795900] focus:bg-white"
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name} ({b.landmark ? b.landmark.slice(0, 22) : 'Bangalore'})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="sidebar-date" className="block text-[10px] font-bold text-[#2B2420] uppercase tracking-wider mb-0.5">
                  Preferred Date
                </label>
                <input
                  id="sidebar-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#D2C5B0] bg-[#FAF4EA]/40 text-xs text-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#795900] focus:bg-white"
                />
              </div>

              <div className="p-2 rounded-lg bg-[#FAF4EA] border border-[#E8DCC8] text-[10px] text-[#5C5143] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Includes <strong>Free 3D CBCT Evaluation</strong> with booking</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-3 rounded-lg bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Confirm Consultation</span>
              </button>
            </form>
          )}

          <div className="pt-2 border-t border-[#FAF4EA] text-center">
            <span className="text-[10px] text-[#5C5143] block mb-1.5">
              Need immediate emergency help?
            </span>
            <div className="flex gap-2">
              <a
                href="tel:+919482712345"
                className="flex-1 py-1.5 px-2 rounded-lg bg-[#FAF4EA] border border-[#D2C5B0] hover:bg-white text-[#795900] text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>Call Hotline</span>
              </a>
              <a
                href={`https://wa.me/919482712345?text=${encodeURIComponent(
                  `Hi 32 Smiles, I would like to consult an implant specialist for ${treatmentName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Assurance & Accreditations (Replaces EMI calculator card) */}
      <div className="bg-white rounded-2xl border border-[#E8DCC8] p-5 shadow-2xs space-y-3">
        <h4 className="font-serif font-bold text-[#2B2420] text-xs sm:text-sm flex items-center gap-1.5">
          <Award className="w-4 h-4 text-[#D9A93B]" />
          <span>Clinical Assurance at 32 Smiles</span>
        </h4>

        <div className="space-y-2 text-[11px] text-[#4E4636]">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Lifetime Warranty:</strong> Official manufacturer certificate for Swiss & Swedish implants.</span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>98.7% Documented Success:</strong> Over 10,000 implants placed with zero nerve injury.</span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>ISO 9001:2015 Sterilization:</strong> Hospital-grade autoclaving and disposable surgical draping.</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#795900] shrink-0 mt-0.5" />
            <span><strong>9 Prime Bangalore Clinics:</strong> Convenient follow-ups and reviews across the city.</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
