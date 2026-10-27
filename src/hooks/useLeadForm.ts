'use client';

import { useState } from 'react';
import { LeadFormData } from '@/types';

interface UseLeadFormProps {
  defaultBranch?: string;
  defaultTreatment?: string;
  onSuccess?: (data: LeadFormData) => void;
}

export function useLeadForm({
  defaultBranch = 'Indiranagar',
  defaultTreatment = 'General Consultation',
  onSuccess,
}: UseLeadFormProps = {}) {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    branch: defaultBranch,
    treatment: defaultTreatment,
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitForm = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return false;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return false;
    }

    setIsSubmitting(true);
    try {
      // Simulate submission or integrate with API / Webhook
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess(formData);
      }
      return true;
    } catch {
      setErrorMessage('Unable to submit booking. Please call us directly.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      branch: defaultBranch,
      treatment: defaultTreatment,
      preferredDate: '',
      preferredTime: '',
      notes: '',
    });
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  return {
    formData,
    updateField,
    submitForm,
    resetForm,
    isSubmitting,
    isSubmitted,
    errorMessage,
  };
}
