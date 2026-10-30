'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, GraduationCap } from 'lucide-react';
import { DoctorProfile } from '@/types';

interface DoctorCardActionsProps {
  doctor: DoctorProfile;
  onBookDoctor?: (doctorName: string) => void;
}

export const DoctorCardActions: React.FC<DoctorCardActionsProps> = ({
  doctor,
  onBookDoctor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#E8DCC8]">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
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

      {/* Doctor Modal Island */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 card-shadow border border-[#E8DCC8] relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#FAF4EA] text-[#4E4636] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-[#D9A93B]">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2B2420]">
                  {doctor.name}
                </h3>
                <p className="text-xs font-bold text-[#795900] uppercase tracking-wider">
                  {doctor.specialty}
                </p>
                <p className="text-xs text-[#5C5143]">{doctor.qualifications}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4E4636] leading-relaxed mb-6">
              <p>{doctor.bio}</p>
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
                href={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}`}
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs text-center shadow-md transition-all"
              >
                Book Appointment with {doctor.name}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

