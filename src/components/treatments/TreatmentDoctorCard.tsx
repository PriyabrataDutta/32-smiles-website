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
    <section id="doctor" className="scroll-mt-28 space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900]">
          <Award className="w-4 h-4 text-[#D9A93B]" />
          <span>Surgical Leadership</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2420] mt-2">
          Your Operating Implantologist
        </h2>
        <p className="text-sm sm:text-base text-[#4E4636] mt-2 max-w-3xl leading-relaxed">
          At 32 Smiles, implant surgeries are never delegated to junior dentists. Your procedure is personally planned and executed by senior MDS prosthodontists and implant surgeons with extensive international fellowship credentials.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-[#E8DCC8] p-6 sm:p-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Doctor Portrait */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-4 border-[#FAF4EA] shadow-xl bg-[#FAF4EA]">
              <Image
                src={doctor.avatar}
                alt={doctor.name}
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-amber-600 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 / 5.0 Rated by Patients</span>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="md:col-span-8 space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-3 py-1 rounded-full bg-[#FAF4EA] text-[#795900] text-[11px] font-bold border border-[#E8DCC8]">
                  {doctor.role}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                  {doctor.casesCount}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420]">
                {doctor.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#795900] mt-0.5">
                {doctor.qualifications} • {doctor.experience}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#4E4636] leading-relaxed">
              {doctor.bio}
            </p>

            {/* Fellowships */}
            <div className="space-y-2 pt-2 border-t border-[#FAF4EA]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#2B2420]">
                Specialized Fellowships & Credentials
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {doctor.fellowships.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#5C5143]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 flex flex-wrap gap-4">
              <Link
                href={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}&treatment=${encodeURIComponent(treatmentName)}`}
                className="px-6 py-2.5 rounded-full bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Consult {doctor.name}</span>
              </Link>
              <div className="flex items-center gap-2 text-xs text-[#5C5143]">
                <Shield className="w-4 h-4 text-[#D9A93B]" />
                <span>Practices at Indiranagar, Koramangala & Whitefield</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
