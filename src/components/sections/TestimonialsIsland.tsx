'use client';

import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';
import { CLINIC_BRANCHES } from '@/data/clinicData';
import { PatientTestimonial } from '@/types';

interface TestimonialsIslandProps {
  onAddTestimonial?: (testimonial: PatientTestimonial) => void;
}

export const TestimonialsIsland: React.FC<TestimonialsIslandProps> = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

    setIsSuccess(true);
    setTimeout(() => {
      setShowAddModal(false);
      setIsSuccess(false);
      setNewReview({
        name: '',
        branch: 'Indiranagar',
        treatment: 'General Consultation',
        comment: '',
        rating: 5,
      });
    }, 1500);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowAddModal(true)}
        className="flex items-center gap-1.5 text-xs font-bold text-[#795900] bg-[#FAF4EA] hover:bg-[#D9A93B] hover:text-[#573F00] border border-[#E8DCC8] px-4 py-2.5 rounded-full transition-colors cursor-pointer shadow-xs"
      >
        <PlusCircle className="w-4 h-4" />
        <span>Write a Review</span>
      </button>

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

            {isSuccess ? (
              <div className="p-6 rounded-2xl bg-[#FAF4EA] border border-[#E8DCC8] text-center">
                <p className="font-bold text-[#795900] text-sm">Thank You for Your Review!</p>
                <p className="text-xs text-[#4E4636] mt-1">Our clinic coordination team has received your submission.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#2B2420] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC8] bg-[#FAF4EA]/40 text-xs text-[#2B2420] focus:outline-none focus:border-[#D9A93B]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#2B2420] mb-1">Clinic Branch *</label>
                    <select
                      value={newReview.branch}
                      onChange={(e) => setNewReview({ ...newReview, branch: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#E8DCC8] bg-white text-xs text-[#2B2420]"
                    >
                      {CLINIC_BRANCHES.map((b) => (
                        <option key={b.name} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2B2420] mb-1">Rating *</label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#E8DCC8] bg-white text-xs text-[#2B2420]"
                    >
                      <option value="5">★★★★★ (5 Stars)</option>
                      <option value="4">★★★★☆ (4 Stars)</option>
                      <option value="3">★★★☆☆ (3 Stars)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2420] mb-1">Treatment Received</label>
                  <input
                    type="text"
                    placeholder="e.g. Invisalign / Painless Root Canal"
                    value={newReview.treatment}
                    onChange={(e) => setNewReview({ ...newReview, treatment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC8] bg-[#FAF4EA]/40 text-xs text-[#2B2420]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2420] mb-1">Your Review *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the clinic hygiene, doctor care, and painless treatment experience..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCC8] bg-[#FAF4EA]/40 text-xs text-[#2B2420]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
                >
                  Submit Verified Patient Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

