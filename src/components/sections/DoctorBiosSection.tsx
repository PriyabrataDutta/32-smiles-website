import React from 'react';
import Image from 'next/image';
import { DOCTORS_LIST } from '@/data/clinicData';
import { Award, CheckCircle2, Star } from 'lucide-react';
import { SectionBadge } from '@/components/common/SectionBadge';
import { DoctorCardActions } from './DoctorModalIsland';

interface DoctorBiosSectionProps {
  onBookDoctor?: (doctorName: string) => void;
  className?: string;
}

export const DoctorBiosSection: React.FC<DoctorBiosSectionProps> = ({
  onBookDoctor,
  className = '',
}) => {
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
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="144px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute bottom-1 right-1 z-10 bg-emerald-600 text-white p-1 rounded-full shadow-md"
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

                  <p className="text-xs text-[#5C5143] mb-4">
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

              {/* Action Buttons & Modal Client Island */}
              <DoctorCardActions doctor={doctor} onBookDoctor={onBookDoctor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
