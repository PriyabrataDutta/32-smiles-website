'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DOCTORS_LIST } from '@/data/clinicData';
import { DoctorProfile } from '@/types';
import { Award, Calendar, CheckCircle2, Star, X, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { SectionBadge } from '@/components/common/SectionBadge';

interface DoctorBiosSectionProps {
  onBookDoctor?: (doctorName: string) => void;
  className?: string;
}

export const DoctorBiosSection: React.FC<DoctorBiosSectionProps> = ({
  onBookDoctor,
  className = '',
}) => {
  const [activeDoctor, setActiveDoctor] = useState<DoctorProfile | null>(null);

  return (
    <section className={`py-20 bg-white border-b border-[#E8DCC8] ${className}`} id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
          <SectionBadge text="Master Clinicians & Specialists" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
            Led by Bangalore's Foremost Dental Specialists
          </h2>
          <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-[#4E4636]">
            Every procedure is planned and executed by seasoned MDS specialists with over 15+ years of clinical excellence.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {DOCTORS_LIST.map((doctor) => (
            <div
              key={doctor.name}
              className="group p-6 sm:p-8 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] hover:border-[#D9A93B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Circular Avatar */}
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white group-hover:border-[#D9A93B] transition-colors mb-5 shadow-md">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute bottom-1 right-1 bg-emerald-600 text-white p-1 rounded-full shadow-md"
                    title="Available for appointments"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="text-center">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2420] mb-1">
                    {doctor.name}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#795900] mb-2">
                    {doctor.specialty}
                  </p>

                  <p className="text-xs text-[#807663] mb-4">
                    {doctor.qualifications}
                  </p>

                  <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                      <Star className="w-3 h-3 fill-amber-600" /> 4.9 Rating
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F5EDE1] text-[#795900]">
                      <Award className="w-3 h-3" /> {doctor.experience}+ Yrs Exp
                    </span>
                  </div>

                  <p className="text-xs text-[#4E4636] line-clamp-3 mb-6 text-left leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#E8DCC8]">
                <button
                  type="button"
                  onClick={() => setActiveDoctor(doctor)}
                  className="flex-1 text-xs font-bold text-[#795900] hover:text-[#573F00] py-2.5 px-3 rounded-xl border border-[#D9A93B]/60 hover:bg-[#D9A93B]/10 transition-colors cursor-pointer"
                >
                  View Profile
                </button>
                {onBookDoctor ? (
                  <button
                    type="button"
                    onClick={() => onBookDoctor(doctor.name)}
                    className="flex-1 text-xs font-bold bg-[#795900] hover:bg-[#573F00] text-white py-2.5 px-3 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    Book Visit
                  </button>
                ) : (
                  <Link
                    href={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}`}
                    className="flex-1 text-center text-xs font-bold bg-[#795900] hover:bg-[#573F00] text-white py-2.5 px-3 rounded-xl shadow-xs transition-all"
                  >
                    Book Visit
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Modal */}
      {activeDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 card-shadow border border-[#E8DCC8] relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveDoctor(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#FAF4EA] text-[#4E4636] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-[#D9A93B]">
                <img
                  src={activeDoctor.image}
                  alt={activeDoctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2B2420]">
                  {activeDoctor.name}
                </h3>
                <p className="text-xs font-bold text-[#795900] uppercase tracking-wider">
                  {activeDoctor.specialty}
                </p>
                <p className="text-xs text-[#807663]">{activeDoctor.qualifications}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4E4636] leading-relaxed mb-6">
              <p>{activeDoctor.bio}</p>
              <div className="bg-[#FAF4EA] p-4 rounded-2xl border border-[#E8DCC8] space-y-2">
                <div className="flex items-center gap-2 text-[#795900] font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Clinical Expertise & Certifications</span>
                </div>
                <p className="text-xs text-[#6E6458]">
                  Trained in micro-endodontics, digital smile design, and guided implantology from top premier dental institutes.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/book-appointment?doctor=${encodeURIComponent(activeDoctor.name)}`}
                onClick={() => setActiveDoctor(null)}
                className="w-full py-3.5 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs text-center shadow-md transition-all"
              >
                Book Appointment with {activeDoctor.name}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
