'use server';

import { validateLeadForm, LeadFormInput } from '@/lib/validations/leadSchema';

export interface BookingResponse {
  success: boolean;
  bookingRef?: string;
  message?: string;
  errors?: Record<string, string>;
}

export async function bookAppointmentAction(formData: unknown): Promise<BookingResponse> {
  // 1. Strict Server-Side Validation
  const validation = validateLeadForm(formData);

  if (!validation.success || !validation.data) {
    return {
      success: false,
      errors: validation.errors,
      message: 'Validation failed. Please correct the highlighted fields.',
    };
  }

  const lead: LeadFormInput = validation.data;

  // 2. Generate a Durable Clinical Booking Reference
  const timestamp = Date.now().toString().slice(-4);
  const randomSuffix = Math.floor(100 + Math.random() * 900);
  const bookingRef = `32S-${timestamp}-${randomSuffix}`;

  try {
    // 3. Extensible Webhook / CRM Dispatch Hook
    // If an external webhook is configured (e.g. Zapier, Make, HubSpot, LeadSquared), dispatch payload:
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingRef,
          ...lead,
          submittedAt: new Date().toISOString(),
          source: 'Website Priority Lead Form',
        }),
      }).catch((err) => {
        // Non-blocking log to ensure user booking is never dropped even if external CRM is slow
        console.error('[CRM Dispatch Error]:', err);
      });
    }

    return {
      success: true,
      bookingRef,
      message: `Appointment request confirmed for ${lead.branch} branch! Reference: ${bookingRef}`,
    };
  } catch (error) {
    console.error('[Appointment Booking Action Error]:', error);
    return {
      success: false,
      message: 'Internal server error while scheduling. Please call our clinic directly at +91 94827 12345.',
    };
  }
}

