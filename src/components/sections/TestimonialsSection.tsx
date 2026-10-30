import React from 'react';
import { PATIENT_TESTIMONIALS } from '@/data/clinicData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { SectionBadge } from '@/components/common/SectionBadge';
import { TestimonialsIsland } from './TestimonialsIsland';

interface TestimonialsSectionProps {
  className?: string;
  limit?: number;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className = '',
  limit = 6,
}) => {
  const testimonials = PATIENT_TESTIMONIALS.slice(0, limit);

  return (
    <section className={`py-20 bg-white border-b border-[#E8DCC8] ${className}`} id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
          <div className="text-center sm:text-left">
            <SectionBadge text="Verified Patient Feedback" className="mb-3" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420] mb-2">
              Loved by Over 15,200+ Patients in Bangalore
            </h2>
            <p className="text-sm text-[#4E4636]">
              Real Google & Practo reviews from patients treated across our 9 Bangalore branches.
            </p>
          </div>

          <TestimonialsIsland />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF4EA] p-8 rounded-3xl card-shadow border border-[#E8DCC8] relative flex flex-col justify-between group hover:border-[#D9A93B] transition-all"
            >
              <Quote className="absolute top-5 right-5 text-[#D9A93B]/20 w-12 h-12 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex text-amber-500 mb-4 gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#2B2420] italic mb-6 leading-relaxed relative z-10 font-medium">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DCC8]">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-[#2B2420]">
                    — {item.patientName}
                  </div>
                  {item.verified && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Google Verified
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-[#807663] mt-1 flex items-center justify-between">
                  <span>{item.treatment}</span>
                  <span className="font-semibold text-[#795900]">{item.branch} Branch</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
