import {
  Treatment,
  Doctor,
  DoctorProfile,
  Branch,
  BranchInfo,
  Testimonial,
  PatientTestimonial,
  FAQItem,
  BeforeAfterCase,
} from '../types';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDubmM4Jk1CkTRK4G2fjYgNOxfUj4Ei_gZpsf41nwBUC2MU8op9BqoT7pfj5_gXqQnPqmKFF4XeUePC0XjwxJpC3okPf4Y3RUq0azBm1P13UPaWTthg9F3iukMhv-ryn62MaqMMCuwS3NDH6MOrdnWj17mU6x_VSau8SJ99e9hSzZBSYmbkhJk4eXvZAIX2aurojeMn_zhLXSdzLtYuZQXgpbRaFUkSfkR9rYOLrVbqWRAtywdarDdk';

export const CLINIC_INFO = {
  name: '32 Smiles Multispeciality Dental Clinics',
  tagline: "Bangalore's Premier Multispeciality Dental Care Network",
  establishedYear: 2005,
  heroImage: HERO_IMAGE_URL,
  phone: '+91 94827 12345',
  email: 'care@32smiles.in',
  hours: '10:00 AM - 9:00 PM (Monday - Sunday)',
  totalBranches: 9,
  rating: 4.9,
  reviewsCount: '15,200+',
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'general-dentistry',
    name: 'General Dentistry',
    shortDesc: 'Complete oral exams, ultrasonic cleaning and cavity prevention.',
    fullDesc:
      'Comprehensive preventive care including digital dental checkups, ultrasonic scaling, stain removal, oral cancer screening, and enamel fortification for long-term oral wellness.',
    iconName: 'Dentistry',
    features: [
      'Ultrasonic Scaling & Stain Removal',
      'Digital Intraoral X-Rays',
      'Fluoride Enamel Polish',
      'Comprehensive Oral Health Audit',
    ],
    duration: '30 - 45 mins',
    recoveryTime: 'Immediate',
    startingPrice: '₹999',
  },
  {
    id: 'orthodontics',
    name: 'Invisalign & Clear Aligners',
    shortDesc: 'Straighten teeth discreetly with certified US aligner technology.',
    fullDesc:
      'Transform your smile with state-of-the-art clear aligners (Invisalign certified Diamond provider) and ceramic self-ligating braces designed for rapid, comfortable, and discreet teeth straightening.',
    iconName: 'ShieldCheck',
    features: [
      '3D iTero Digital Scan (No Gooey Moulds)',
      'Custom ClinCheck 3D Simulation',
      'Virtually Invisible & Removable',
      '0% Interest Easy EMI Schemes',
    ],
    duration: '6 - 14 months',
    recoveryTime: 'No downtime',
    startingPrice: '₹45,000',
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    shortDesc: 'Permanent and natural-looking titanium tooth replacement.',
    fullDesc:
      'Swiss and German titanium/zirconia dental implants with high success rates. Restores full bite power and natural aesthetics using 3D guided keyhole surgery.',
    iconName: 'Award',
    features: [
      'Single & Full-Mouth All-on-4 / All-on-6',
      '3D CBCT Computer-Guided Keyhole Surgery',
      'Immediate Crown Loading Options',
      'Lifetime Warranty Backed',
    ],
    duration: '2 - 3 sessions',
    recoveryTime: '1 - 2 days',
    startingPrice: '₹24,999',
  },
  {
    id: 'cosmetic-dentistry',
    name: 'Smile Designing & Veneers',
    shortDesc: 'Transform your appearance with handcrafted porcelain veneers.',
    fullDesc:
      'Enhance your confidence with Hollywood smile design, ultra-thin porcelain veneers, laser teeth whitening, and gum contouring by specialist cosmetic dental surgeons.',
    iconName: 'Sparkles',
    features: [
      'Digital Smile Design (DSD) Preview',
      'Ultra-thin Porcelain E-max Veneers',
      'Laser Smile Gum Contouring',
      'Composite Tooth Reshaping',
    ],
    duration: '2 - 3 visits',
    recoveryTime: 'Immediate',
    startingPrice: '₹8,500/tooth',
  },
  {
    id: 'root-canal',
    name: 'Painless Root Canal (RCT)',
    shortDesc: 'Single-sitting painless endodontic therapy to save natural teeth.',
    fullDesc:
      'Single-session painless root canal treatments using rotary endodontic tech and rubber dam isolation. Preserves natural tooth structure with precision custom ceramic crowns.',
    iconName: 'Activity',
    features: [
      'Single-Sitting Micro Rotary Endodontics',
      'Computerized Painless Local Anesthesia',
      'Precision Apex Locators & Dental Loupes',
      'Custom Zirconia Crown Pairing',
    ],
    duration: '45 - 60 mins',
    recoveryTime: 'Same day recovery',
    startingPrice: '₹4,500',
  },
  {
    id: 'oral-surgery',
    name: 'Wisdom Tooth Removal',
    shortDesc: 'Painless sutureless removal of impacted third molars.',
    fullDesc:
      'Specialized surgical removal of impacted wisdom teeth performed gently by maxillo-facial surgeons using piezo-surgery and minimal-incision techniques.',
    iconName: 'Scissors',
    features: [
      'Piezo-Surgical Atraumatic Extraction',
      'Zero-Swelling Protocol & Quick Recovery',
      'Local Anesthesia / Sedation Available',
      'Same-Day Emergency Relief',
    ],
    duration: '30 - 45 mins',
    recoveryTime: '1 - 2 days',
    startingPrice: '₹3,500',
  },
  {
    id: 'teeth-whitening',
    name: 'Laser Teeth Whitening',
    shortDesc: 'Brighten your smile up to 8 shades in just 45 minutes.',
    fullDesc:
      'In-office advanced cold-blue laser teeth whitening that safely dissolves stubborn tea, coffee, and nicotine stains without damaging enamel.',
    iconName: 'Sparkles',
    features: [
      'Advanced Cold-Blue Laser Tech',
      'Up to 8 Shades Whiter in 1 Sitting',
      'Enamel-Safe Desensitizing Formula',
      'Includes Post-Whitening Maintenance Kit',
    ],
    duration: '45 mins',
    recoveryTime: 'Immediate',
    startingPrice: '₹6,999',
  },
  {
    id: 'periodontics',
    name: 'Gum Care & Periodontics',
    shortDesc: 'Advanced diode laser care for bleeding gums and periodontitis.',
    fullDesc:
      'Specialized gum therapy including deep scaling, root planing, laser gum rejuvenation, and treatment for bleeding gums and mobile teeth.',
    iconName: 'HeartPulse',
    features: [
      'Diode Laser Deep Pocket Curettage',
      'Ultrasonic Subgingival Root Planing',
      'Flap Surgery & Bone Regeneration',
      'Bad Breath (Halitosis) Elimination',
    ],
    duration: '45 mins',
    recoveryTime: '1 - 2 days',
    startingPrice: '₹2,500',
  },
];

export const TREATMENTS_LIST = TREATMENTS;

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-naveen-indla',
    name: 'Dr. Naveen Indla',
    title: 'Founder & Medical Director',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHYwys9MySFxGz1AVrIoCdoSPeBkv0HIMNBMkN_FzarjOcL_E0sLLX_V9sRo4exwASVovmcjo0nbKTyfi7E_Oqvjpg7r3xWMiM7Gz80YqO7HjegjCze_ng1VyCh7UHwWjRSnRzwRiHZ3LSC6KYlY8mZd2gaQ80zCl9W8-xULWets3YTrke8OFzXFjxOduxUlKrkIva8RBptAcCLBJAm7_U35ddO6-ta94F8sznW6CbgoU5sE_yblh9',
    experienceYears: 22,
    qualifications: 'BDS, MDS (Prosthodontics & Implantology), FICOI',
    specialties: ['Dental Implants', 'Full Mouth Rehabilitation', 'Cosmetic Dentistry'],
    branches: ['Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout'],
    bio: 'Founder and Director of 32 Smiles Dental Clinics since 2005. Dr. Naveen has treated over 25,000+ patients and pioneered guided implantology protocols in South India.',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  {
    id: 'dr-arjun-v',
    name: 'Dr. Arjun V.',
    title: 'Chief Implantologist & Prosthodontist',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHYwys9MySFxGz1AVrIoCdoSPeBkv0HIMNBMkN_FzarjOcL_E0sLLX_V9sRo4exwASVovmcjo0nbKTyfi7E_Oqvjpg7r3xWMiM7Gz80YqO7HjegjCze_ng1VyCh7UHwWjRSnRzwRiHZ3LSC6KYlY8mZd2gaQ80zCl9W8-xULWets3YTrke8OFzXFjxOduxUlKrkIva8RBptAcCLBJAm7_U35ddO6-ta94F8sznW6CbgoU5sE_yblh9',
    experienceYears: 18,
    qualifications: 'BDS, MDS (Prosthodontics & Implantology), FICOI (USA)',
    specialties: ['Dental Implants', 'Full Mouth Rehabilitation', 'All-on-4 Implants'],
    branches: ['Indiranagar', 'Koramangala', 'Whitefield'],
    bio: 'Pioneer in 3D-guided keyhole dental implantology with over 10,000 successful implant placements. Dr. Arjun brings precision, care, and international expertise to every smile restoration.',
    availableDays: ['Mon', 'Tue', 'Thu', 'Sat'],
  },
  {
    id: 'dr-kavya-r',
    name: 'Dr. Kavya R.',
    title: 'Senior Orthodontic & Aligner Specialist',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMRUP-rcQoWkJShbh4qIi3InMpekyQgEIiWRlL6N2I4fRhQ4ubA5xDWWqKGN6gAnvp5BrkfMCx_KIkjuT4RrStY0DBk8ufdg-6ZNfrAwOfmB6lBlPU23DZjXldeNhd6GmO1-6eon7vNBDTHkHZ2aGmZdmSpAkPKTga_lFLqvIXhO6gBvZgj22pNpL6IbxZ8z3cQ67A26qEE-cI3hK1QRqaD5GC6PAECLBiEgV7eTlBg20j_8KpW9Fa',
    experienceYears: 14,
    qualifications: 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)',
    specialties: ['Invisible Aligners', 'Lingual Braces', 'Pediatric Orthodontics'],
    branches: ['Indiranagar', 'BTM Layout', 'HSR Layout', 'Sarjapura Road'],
    bio: 'Certified Diamond Provider for Clear Aligners. Dr. Kavya has transformed smiles for over 8,000 patients using modern, gentle alignment techniques.',
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat'],
  },
];

export const DOCTORS_LIST: DoctorProfile[] = DOCTORS.map((d) => ({
  ...d,
  specialty: d.title,
  experience: d.experienceYears,
}));

export const BRANCHES: Branch[] = [
  {
    id: 'indiranagar',
    name: 'Indiranagar',
    address: '#45, 100 Ft Rd, Near Metro Station, Indiranagar, Bangalore 560038',
    landmark: 'Opposite Metro Pillar #120',
    phone: '+91 94827 12345',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=Indiranagar+100+ft+road+Bangalore',
    area: 'Indiranagar (Flagship Clinic)',
  },
  {
    id: 'koramangala',
    name: 'Koramangala',
    address: '7th Block, Sony World Signal, Koramangala, Bangalore 560095',
    landmark: 'Next to Koramangala Club',
    phone: '+91 94827 12346',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=Koramangala+Sony+World+Signal+Bangalore',
    area: 'Koramangala 7th Block',
  },
  {
    id: 'hsr-layout',
    name: 'HSR Layout',
    address: 'Sector 1, 27th Main Road, Near NIFT, HSR Layout, Bangalore 560102',
    landmark: 'Opposite HSR BDA Complex',
    phone: '+91 94827 12347',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=HSR+Layout+Sector+1+Bangalore',
    area: 'HSR Layout Sector 1',
  },
  {
    id: 'btm-layout',
    name: 'BTM Layout',
    address: '2nd Stage, Outer Ring Road, Near Udupi Garden Signal, BTM Layout, Bangalore 560076',
    landmark: 'Near BTM Water Tank',
    phone: '+91 94827 12348',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=BTM+Layout+2nd+Stage+Bangalore',
    area: 'BTM Layout 2nd Stage',
  },
  {
    id: 'sarjapura-road',
    name: 'Sarjapura Road',
    address: 'Near Wipro Corporate Office, Doddakannelli, Sarjapur Road, Bangalore 560035',
    landmark: 'Opposite Carmelaram Road Junction',
    phone: '+91 94827 12349',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=Sarjapur+Road+Bangalore',
    area: 'Sarjapur Road / Doddakannelli',
  },
  {
    id: 'whitefield',
    name: 'Whitefield',
    address: 'Channasandra Main Road, Near Hope Farm Junction, Whitefield, Bangalore 560067',
    landmark: 'Near Whitefield Railway Station',
    phone: '+91 94827 12350',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=Whitefield+Hope+Farm+Bangalore',
    area: 'Whitefield / Channasandra',
  },
  {
    id: 'kundalahalli-gate',
    name: 'Kundalahalli Gate',
    address: 'Varthur Main Road, Kundalahalli Gate Junction, Bangalore 560037',
    landmark: 'Next to Brand Factory',
    phone: '+91 94827 12351',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=Kundalahalli+Gate+Bangalore',
    area: 'Kundalahalli Gate (Main Branch)',
  },
  {
    id: 'panathur',
    name: 'Panathur',
    address: 'Panathur Main Road, Near Kadubeesanahalli Bridge, Bangalore 560087',
    landmark: 'Near Embassy Tech Village Back Gate',
    phone: '+91 94827 12352',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=Panathur+Main+Road+Bangalore',
    area: 'Panathur / Kadubeesanahalli',
  },
  {
    id: 'marathahalli',
    name: 'Marathahalli',
    address: 'Outer Ring Road, Near Kalamandir, Marathahalli, Bangalore 560037',
    landmark: 'Near Marathahalli Bridge',
    phone: '+91 94827 12353',
    timings: '10:00 AM - 9:00 PM (Mon - Sun)',
    googleMapsUrl: 'https://maps.google.com/?q=Marathahalli+Outer+Ring+Road+Bangalore',
    area: 'Marathahalli Outer Ring Road',
  },
];

export const CLINIC_BRANCHES: BranchInfo[] = BRANCHES.map((b) => ({
  ...b,
  area: b.area || b.name,
}));

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    patientName: 'Anjali Sharma',
    rating: 5,
    review:
      'The invisible aligner treatment at 32 Smiles Indiranagar was life-changing. Dr. Kavya explained every step so clearly! My teeth straightened in just 8 months.',
    branch: 'Indiranagar',
    treatment: 'Invisalign Aligners',
    verified: true,
    date: '2 weeks ago',
  },
  {
    id: '2',
    patientName: 'Rahul Hegde',
    rating: 5,
    review:
      'Got two dental implants done by Dr. Arjun. Truly painless procedure and very professional staff. Highly recommend for any complex dental work.',
    branch: 'Koramangala',
    treatment: 'Dental Implants',
    verified: true,
    date: '1 month ago',
  },
  {
    id: '3',
    patientName: 'Priya Menon',
    rating: 5,
    review:
      'I had terrible toothache and feared root canals. Dr. Naveen and team did a single-sitting RCT with zero pain. The clinic hygiene is world-class.',
    branch: 'Whitefield',
    treatment: 'Single-Sitting RCT',
    verified: true,
    date: '3 weeks ago',
  },
  {
    id: '4',
    patientName: 'Vikram Sethi',
    rating: 5,
    review:
      'Extremely clean clinic with top notch hygiene protocols. The 0% EMI scheme made my smile makeover very easy to budget for.',
    branch: 'HSR Layout',
    treatment: 'Smile Makeover',
    verified: true,
    date: '1 month ago',
  },
  {
    id: '5',
    patientName: 'Sneha Reddy',
    rating: 5,
    review:
      'Removed my impacted wisdom tooth at Kundalahalli Gate branch. Was done in 20 minutes, sutureless and healed smoothly without any swelling.',
    branch: 'Kundalahalli Gate',
    treatment: 'Wisdom Tooth Surgery',
    verified: true,
    date: '2 months ago',
  },
  {
    id: '6',
    patientName: 'Karthik Rao',
    rating: 5,
    review:
      'The doctors are so warm and reassuring. Routine scaling and teeth whitening gave me a sparkling smile before my wedding!',
    branch: 'Sarjapura Road',
    treatment: 'Laser Whitening',
    verified: true,
    date: '3 weeks ago',
  },
];

export const PATIENT_TESTIMONIALS: PatientTestimonial[] = TESTIMONIALS.map((t) => ({
  ...t,
  comment: t.review,
}));

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are initial dental checkup screenings free?',
    answer:
      'Yes, we offer a complimentary initial oral health screening and digital scan across all 9 clinics so you understand your oral health status with zero pressure or hidden fees.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer 0% interest EMI options?',
    answer:
      'Yes! We provide 0% interest monthly installment plans for Invisalign, dental implants, root canals, and smile makeovers with instant approval via Aadhaar / PAN card.',
  },
  {
    id: 'faq-3',
    question: 'Are root canal treatments really painless?',
    answer:
      'Absolutely. With computerized painless local anesthesia and rotary nickel-titanium endodontics, more than 98% of our patients report zero discomfort during or after the procedure.',
  },
  {
    id: 'faq-4',
    question: 'How many visits are required for dental implants?',
    answer:
      'Using computer-guided 3D keyhole techniques, the implant placement itself is completed in just 1 visit (30-45 mins). Final ceramic crown integration follows once optimal osseointegration is achieved.',
  },
  {
    id: 'faq-5',
    question: 'Can I visit any of your 9 clinics for follow-up appointments?',
    answer:
      'Yes! All 9 clinics share an integrated electronic health record (EHR) system. You can consult at Indiranagar today and have a follow-up at Whitefield or HSR Layout with full continuity of care.',
  },
  {
    id: 'faq-6',
    question: 'Do you cater to international patients / Dental Tourism?',
    answer:
      'Yes! We have a dedicated dental tourism desk that assists NRI and international patients with airport transfers, compressed appointment schedules, hotel partnerships, and digital case pre-planning.',
  },
];

export const FAQS_LIST = FAQS;

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    category: 'crowding',
    categoryLabel: 'Invisalign Aligners',
    title: 'Severe Crowding & Deep Bite Correction',
    beforeImg:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    afterImg:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    patientAge: '26 Years',
    durationMonths: '9 Months',
    notes: 'Straightened without any tooth extractions using Invisalign SmartTrack clear aligners.',
  },
  {
    id: 'case-2',
    category: 'full-mouth',
    categoryLabel: 'Dental Implants',
    title: 'Full Mouth Teeth Replacement',
    beforeImg:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    afterImg:
      'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
    patientAge: '54 Years',
    durationDays: '3 Days',
    notes: 'All-on-4 keyhole implant rehabilitation restoring complete chewing efficiency.',
  },
];
