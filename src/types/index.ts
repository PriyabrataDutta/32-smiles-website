export interface Treatment {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  duration: string;
  recoveryTime: string;
  startingPrice?: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  image: string;
  experienceYears: number;
  qualifications: string;
  specialties: string[];
  branches: string[];
  bio: string;
  availableDays: string[];
}

export interface DoctorProfile extends Doctor {
  specialty: string;
  experience: number;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  landmark: string;
  phone: string;
  timings: string;
  googleMapsUrl: string;
  area?: string;
  mapEmbedUrl?: string;
}

export interface BranchInfo extends Branch {
  area: string;
}

export interface BranchDetail extends Branch {
  slug: string;
  shortName: string;
  tagline: string;
  isFlagship?: boolean;
  pincode: string;
  email: string;
  rating: number;
  reviewsCount: string;
  heroImage: string;
  description: string;
  highlights: string[];
  nearbyLandmarks: string[];
  metroConnectivity?: string;
  parkingInfo: string;
  doctors: {
    name: string;
    role: string;
    qualifications: string;
    schedule: string;
    image: string;
  }[];
  facilities: string[];
  popularTreatments: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  rating: number;
  review: string;
  branch: string;
  treatment: string;
  verified: boolean;
  date?: string;
}

export interface PatientTestimonial {
  id: string;
  patientName: string;
  rating: number;
  comment: string;
  branch: string;
  treatment: string;
  verified: boolean;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BeforeAfterCase {
  id: string;
  category: 'single' | 'all-on-4' | 'full-mouth' | 'crowding' | 'spacing' | 'aesthetic';
  categoryLabel: string;
  title: string;
  beforeImg: string;
  afterImg: string;
  patientAge?: string;
  durationDays?: string;
  durationMonths?: string;
  notes: string;
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  branch: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface BookingFormData extends LeadFormData {}

export type PageType = 'general' | 'implants' | 'invisalign' | 'rct' | 'routine' | 'smile-makeover' | 'wisdom-tooth';
