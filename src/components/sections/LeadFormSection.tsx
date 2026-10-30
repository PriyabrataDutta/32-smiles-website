'use client';

import React, { useState, useEffect } from 'react';
import { CLINIC_BRANCHES, TREATMENTS_LIST } from '@/data/clinicData';
import {
  Calendar,
  Phone,
  User,
  MapPin,
  CheckCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { bookAppointmentAction } from '@/app/actions/bookAppointment';

interface LeadFormSectionProps {
  selectedBranchName?: string;
  selectedTreatmentName?: string;
  selectedDoctorName?: string;
  title?: string;
  subtitle?: string;
  badgeText?: string;
  className?: string;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({
  selectedBranchName,
  selectedTreatmentName,
  selectedDoctorName,
  title = 'Book Your Appointment at 32 Smiles',
  subtitle = 'Fill the quick form below. Our clinic coordinator will call you back within 15 minutes to confirm your preferred slot.',
  badgeText = 'Free Consultation & Digital 3D Smile Scan Available',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    branch: 'Indiranagar',
    treatment: 'General Consultation',
    preferredDate: '',
    preferredTime: '10:00 AM - 1:00 PM',
    notes: '',
  });

  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    // Default to tomorrow
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, preferredDate: tomorrow }));
  }, []);

  useEffect(() => {
    if (selectedBranchName) {
      setFormData((prev) => ({ ...prev, branch: selectedBranchName }));
    }
  }, [selectedBranchName]);

  useEffect(() => {
    if (selectedTreatmentName) {
      setFormData((prev) => ({ ...prev, treatment: selectedTreatmentName }));
    }
  }, [selectedTreatmentName]);

  useEffect(() => {
    if (selectedDoctorName) {
      setFormData((prev) => ({
        ...prev,
        notes: `Doctor requested: ${selectedDoctorName}`,
      }));
    }
  }, [selectedDoctorName]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9+ ]/g, '');
    setFormData({ ...formData, phone: val });
    if (fieldErrors.phone) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next.phone;
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    setFieldErrors({});

    // Client-side quick check
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setFieldErrors({ phone: 'Please enter a valid 10-digit mobile number' });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await bookAppointmentAction({
        ...formData,
        whatsappOptIn,
      });

      if (res.success && res.bookingRef) {
        setBookingRef(res.bookingRef);
        setIsSubmitted(true);
      } else {
        if (res.errors) {
          setFieldErrors(res.errors);
        }
        setServerError(res.message || 'Unable to confirm appointment. Please call directly.');
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setServerError('Network error. Please call our clinic directly at +91 94827 12345.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedBranchData =
    CLINIC_BRANCHES.find((b) => b.name.toLowerCase() === formData.branch.toLowerCase()) ||
    CLINIC_BRANCHES[0];

  return (
    <section className={`py-16 bg-white border-y border-[#E8DCC8] ${className}`} id="lead-form">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF4EA] p-6 sm:p-10 md:p-12 rounded-3xl card-shadow border border-[#E8DCC8] relative overflow-hidden">
          {/* Top Gold Foil Accent Strip */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#D9A93B]"></div>

          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D2C5B0] text-xs font-bold text-[#795900] mb-3 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#D9A93B]" />
                  <span>{badgeText}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420] mb-2">
                  {title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4E4636]">
                  {subtitle}
                </p>
              </div>

              {serverError && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#2B2420] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#807663]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (fieldErrors.fullName) {
                            setFieldErrors((prev) => {
                              const next = { ...prev };
                              delete next.fullName;
                              return next;
                            });
                          }
                        }}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border ${
                          fieldErrors.fullName ? 'border-rose-500' : 'border-[#D2C5B0]'
                        } text-sm text-[#2B2420] placeholder-[#A89D8B] focus:ring-2 focus:ring-[#D9A93B] focus:border-transparent outline-none transition-all shadow-xs`}
                      />
                    </div>
                    {fieldErrors.fullName && (
                      <p className="text-[11px] text-rose-600 mt-1 font-semibold">{fieldErrors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#2B2420] mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#807663]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border ${
                          fieldErrors.phone ? 'border-rose-500' : 'border-[#D2C5B0]'
                        } text-sm text-[#2B2420] placeholder-[#A89D8B] focus:ring-2 focus:ring-[#D9A93B] focus:border-transparent outline-none transition-all shadow-xs`}
                      />
                    </div>
                    {fieldErrors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1 font-semibold">{fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Branch */}
                  <div>
                    <label className="block text-xs font-bold text-[#2B2420] mb-1.5">
                      Preferred Bangalore Clinic *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#807663]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#D2C5B0] text-sm text-[#2B2420] focus:ring-2 focus:ring-[#D9A93B] focus:border-transparent outline-none transition-all shadow-xs appearance-none cursor-pointer"
                      >
                        {CLINIC_BRANCHES.map((b) => (
                          <option key={b.name} value={b.name}>
                            {b.name} ({b.area})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Treatment */}
                  <div>
                    <label className="block text-xs font-bold text-[#2B2420] mb-1.5">
                      Dental Treatment Needed *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#807663]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#D2C5B0] text-sm text-[#2B2420] focus:ring-2 focus:ring-[#D9A93B] focus:border-transparent outline-none transition-all shadow-xs appearance-none cursor-pointer"
                      >
                        <option value="General Consultation">General Checkup & 3D Scan</option>
                        {TREATMENTS_LIST.map((t) => (
                          <option key={t.id} value={t.name}>
                            {t.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold text-[#2B2420] mb-1.5">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#807663]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#D2C5B0] text-sm text-[#2B2420] focus:ring-2 focus:ring-[#D9A93B] focus:border-transparent outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-[#2B2420] mb-1.5">
                      Preferred Time Slot *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#807663]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#D2C5B0] text-sm text-[#2B2420] focus:ring-2 focus:ring-[#D9A93B] focus:border-transparent outline-none transition-all shadow-xs appearance-none cursor-pointer"
                      >
                        <option value="10:00 AM - 1:00 PM">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="1:00 PM - 4:00 PM">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="4:00 PM - 7:00 PM">Evening (4:00 PM - 7:00 PM)</option>
                        <option value="7:00 PM - 9:00 PM">Night Slot (7:00 PM - 9:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="whatsapp-consent"
                    checked={whatsappOptIn}
                    onChange={(e) => setWhatsappOptIn(e.target.checked)}
                    className="w-4 h-4 text-[#795900] rounded-sm border-[#D2C5B0] focus:ring-[#D9A93B] cursor-pointer"
                  />
                  <label htmlFor="whatsapp-consent" className="text-xs text-[#573F00] cursor-pointer">
                    Receive appointment confirmation & directions on WhatsApp
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-[#795900] hover:bg-[#573F00] disabled:opacity-60 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all tracking-wide cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Scheduling Clinical Appointment...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 text-[#FFDEA0]" />
                      <span>Confirm Free Appointment Booking</span>
                    </>
                  )}
                </button>

                {/* Safety Guarantee */}
                <div className="flex items-center justify-center gap-4 text-xs text-[#807663] pt-2 text-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Zero Spam Guarantee
                  </span>
                  <span>•</span>
                  <span>100% Confidential Health Records</span>
                </div>
              </form>
            </>
          ) : (
            /* Success Confirmation Screen */
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2B2420]">
                Appointment Request Confirmed!
              </h3>
              <p className="text-sm text-[#4E4636] max-w-md mx-auto">
                Thank you, <strong className="text-[#2B2420]">{formData.fullName}</strong>. Your confirmed reference code is{' '}
                <span className="font-bold text-[#795900] bg-white px-2.5 py-1 rounded-md border border-[#E8DCC8]">
                  {bookingRef}
                </span>.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-[#E8DCC8] text-left max-w-md mx-auto space-y-2 text-xs">
                <p><strong>Clinic:</strong> 32 Smiles {formData.branch}</p>
                <p><strong>Address:</strong> {selectedBranchData?.address}</p>
                <p><strong>Date & Time:</strong> {formData.preferredDate} ({formData.preferredTime})</p>
                <p><strong>Service:</strong> {formData.treatment}</p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${selectedBranchData?.phone || '+919482712345'}`}
                  className="px-5 py-2.5 rounded-full bg-[#795900] text-white font-bold text-xs flex items-center gap-2 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Clinic Directly
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-full bg-white border border-[#D2C5B0] text-[#2B2420] font-bold text-xs hover:bg-[#FAF4EA]"
                >
                  Book Another Slot
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
