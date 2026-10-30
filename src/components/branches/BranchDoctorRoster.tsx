import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, Calendar } from 'lucide-react';
import { BranchDetail } from '@/types';
import SectionBadge from '@/components/common/SectionBadge';

interface BranchDoctorRosterProps {
  branch: BranchDetail;
}

export const BranchDoctorRoster: React.FC<BranchDoctorRosterProps> = ({ branch }) => {
  return (
    <section>
      <div className="text-center max-w-2xl mx-auto mb-8">
        <SectionBadge>Specialists in Attendance</SectionBadge>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2420] mt-2">
          Consulting Doctors at {branch.shortName}
        </h2>
        <p className="text-sm text-[#2B2420]/70 mt-2">
          Pre-book appointments with senior MDS doctors practicing at this branch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branch.doctors.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-[#D9A93B]/20 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D9A93B]/40 shrink-0">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#2B2420]">{doc.name}</h3>
                  <p className="text-xs font-semibold text-[#795900]">{doc.role}</p>
                  <p className="text-[11px] text-[#2B2420]/60 mt-0.5">{doc.qualifications}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#FAF4EA] text-xs text-[#2B2420]/80">
                <span className="font-semibold block text-[#2B2420]">Consultation Schedule:</span>
                <p className="mt-1 flex items-center gap-1.5 text-[#795900]">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>{doc.schedule}</span>
                </p>
              </div>
            </div>

            <div className="mt-5">
              <Link
                href={`/book-appointment?branch=${encodeURIComponent(branch.shortName)}&doctor=${encodeURIComponent(
                  doc.name
                )}`}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#FAF4EA] hover:bg-[#D9A93B] hover:text-[#573F00] text-[#795900] text-xs font-bold border border-[#D9A93B]/30 transition"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Slot with {doc.name.split(' ')[1] || doc.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

