'use client';

import React, { useState } from 'react';
import { PATIENT_TESTIMONIALS, CLINIC_BRANCHES } from '@/data/clinicData';
import { PatientTestimonial } from '@/types';
import { Star, Quote, CheckCircle2, PlusCircle, X } from 'lucide-react';
import { SectionBadge } from '@/components/common/SectionBadge';

interface TestimonialsSectionProps {
  className?: string;
  limit?: number;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className = '',
  limit = 6,
}) => {
  const [testimonialsList, setTestimonialsList] = useState<PatientTestimonial[]>(PATIENT_TESTIMONIALS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    branch: 'Indiranagar',
    treatment: 'General Consultation',
    comment: '',
    rating: 5,
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const added: PatientTestimonial = {
      id: Date.now().toString(),
      patientName: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      branch: newReview.branch,
      treatment: newReview.treatment,
      date: 'Just now',
      verified: true,
    };

    setTestimonialsList([added, ...testimonialsList]);
    setShowAddModal(false);
    setNewReview({
      name: '',
      branch: 'Indiranagar',
      treatment: 'General Consultation',
      comment: '',
      rating: 5,
    });
  };

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

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 text-xs font-bold text-[#795900] bg-[#FAF4EA] hover:bg-[#D9A93B] hover:text-[#573F00] border border-[#E8DCC8] px-4 py-2.5 rounded-full transition-colors cursor-pointer shadow-xs"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.slice(0, limit).map((item) => (
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

      {/* Write a Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 card-shadow border border-[#E8DCC8] relative">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#FAF4EA] text-[#4E4636] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#2B2420] mb-2">
              Share Your 32 Smiles Experience
            </h3>
            <p className="text-xs text-[#807663] mb-6">
              Your feedback helps other patients choose the right dental specialist with confidence.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2B2420] mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D2C5B0] text-xs outline-none focus:ring-2 focus:ring-[#D9A93B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2B2420] mb-1">Clinic Branch *</label>
                  <select
                    value={newReview.branch}
                    onChange={(e) => setNewReview({ ...newReview, branch: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#D2C5B0] text-xs outline-none focus:ring-2 focus:ring-[#D9A93B]"
                  >
                    {CLINIC_BRANCHES.map((b) => (
                      <option key={b.name} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2420] mb-1">Star Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#D2C5B0] text-xs outline-none focus:ring-2 focus:ring-[#D9A93B]"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5)</option>
                    <option value={3}>⭐⭐⭐ (3/5)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B2420] mb-1">Your Review *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the doctor, treatment experience, painless anesthesia, etc."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D2C5B0] text-xs outline-none focus:ring-2 focus:ring-[#D9A93B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs shadow-md cursor-pointer transition-all"
              >
                Submit Verified Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
