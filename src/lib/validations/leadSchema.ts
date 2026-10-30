export interface LeadFormInput {
  fullName: string;
  phone: string;
  branch: string;
  treatment: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  whatsappOptIn?: boolean;
}

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
}

export function validateLeadForm(input: unknown): ValidationResult<LeadFormInput> {
  const errors: Record<string, string> = {};

  if (!input || typeof input !== 'object') {
    return { success: false, errors: { _form: 'Invalid form payload' } };
  }

  const raw = input as Record<string, unknown>;

  // 1. Full Name Validation
  const fullName = typeof raw.fullName === 'string' ? raw.fullName.trim() : '';
  if (!fullName) {
    errors.fullName = 'Full name is required';
  } else if (fullName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
  } else if (fullName.length > 100) {
    errors.fullName = 'Name cannot exceed 100 characters';
  }

  // 2. Phone Number Validation (Indian 10-digit format)
  const phoneRaw = typeof raw.phone === 'string' ? raw.phone : '';
  const digitsOnly = phoneRaw.replace(/\D/g, '');
  const normalizedPhone = digitsOnly.startsWith('91') && digitsOnly.length === 12
    ? digitsOnly.slice(2)
    : digitsOnly;

  if (!phoneRaw.trim()) {
    errors.phone = 'Mobile number is required';
  } else if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number';
  }

  // 3. Clinic Branch Validation
  const branch = typeof raw.branch === 'string' ? raw.branch.trim() : '';
  if (!branch) {
    errors.branch = 'Please select a clinic branch';
  }

  // 4. Treatment Validation
  const treatment = typeof raw.treatment === 'string' ? raw.treatment.trim() : '';
  if (!treatment) {
    errors.treatment = 'Please select a treatment';
  }

  const preferredDate = typeof raw.preferredDate === 'string' ? raw.preferredDate.trim() : undefined;
  const preferredTime = typeof raw.preferredTime === 'string' ? raw.preferredTime.trim() : undefined;
  const notes = typeof raw.notes === 'string' ? raw.notes.trim() : undefined;
  const whatsappOptIn = typeof raw.whatsappOptIn === 'boolean' ? raw.whatsappOptIn : true;

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      fullName,
      phone: normalizedPhone,
      branch,
      treatment,
      preferredDate,
      preferredTime,
      notes,
      whatsappOptIn,
    },
  };
}

