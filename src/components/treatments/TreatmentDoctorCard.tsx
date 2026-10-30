import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TreatmentDoctor } from '@/data/treatmentsData';
import { Award, CheckCircle2, Calendar, Star, Shield } from 'lucide-react';

interface TreatmentDoctorCardProps {
  doctor: TreatmentDoctor;
  treatmentName: string;
}

export const TreatmentDoctorCard: React.FC<TreatmentDoctorCardProps> = ({
  doctor,
  treatmentName,
}) => {
  return (
    <section id="doctor" className="scroll-mt-24 space-y-4">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Award className="w-3.5 h-3.5 text-[#D9A93B]" />
          <span>Surgical Leadership</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mt-1.5">
          Your Operating Implantologist
        </h2>
        <p className="text-xs sm:text-sm text-[#4E4636] mt-1 max-w-2xl leading-relaxed">
          At 32 Smiles, implant surgeries are personally executed by senior MDS prosthodontists and implant surgeons with extensive international fellowship credentials.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#E8DCC8] p-5 sm:p-6 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Doctor Portrait */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#FAF4EA] shadow-md bg-[#FAF4EA]">
              <Image
                src={doctor.avatar}
                alt={doctor.name}
                fill
                sizes="(max-width: 768px) 128px, 144px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-2.5 flex items-center gap-1 text-[11px] text-amber-700 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9 / 5.0 (500+ Verified Reviews)</span>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="md:col-span-8 space-y-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF4EA] text-[#795900] text-[10px] font-bold border border-[#E8DCC8]">
                  {doctor.role}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                  {doctor.casesCount}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2420]">
                {doctor.name}
              </h3>
              <p className="text-xs font-semibold text-[#795900] mt-0.5">
                {doctor.qualifications} • {doctor.experience}
              </p>
            </div>

            <p className="text-xs text-[#4E4636] leading-relaxed">
              {doctor.bio}
            </p>

            {/* Fellowships */}
            <div className="space-y-1.5 pt-2 border-t border-[#FAF4EA]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#2B2420]">
                Fellowships & Accreditations
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {doctor.fellowships.map((f, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#5C5143]">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}&treatment=${encodeURIComponent(treatmentName)}`}
                className="px-5 py-2 rounded-full bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consult {doctor.name}</span>
              </Link>
              <div className="flex items-center gap-1.5 text-[11px] text-[#5C5143]">
                <Shield className="w-3.5 h-3.5 text-[#D9A93B]" />
                <span>Indiranagar • Koramangala • Whitefield</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
