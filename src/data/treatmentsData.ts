export interface TreatmentDoctor {
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  casesCount: string;
  fellowships: string[];
  avatar: string;
  bio: string;
}

export interface ImplantBrand {
  name: string;
  origin: string;
  warranty: string;
  features: string[];
  recommendedFor: string;
  highlight?: boolean;
}

export interface ComparisonRow {
  aspect: string;
  primaryTreatment: string;
  alternativeOne: string;
  alternativeTwo: string;
}

export interface RecoveryPhase {
  timeline: string;
  title: string;
  whatToExpect: string;
  dietAndCare: string[];
}

export interface AnatomyPart {
  partName: string;
  material: string;
  function: string;
  description: string;
}

export interface CandidacyCriteria {
  idealCandidates: string[];
  contraindications: string[];
}

export interface PricingTier {
  title: string;
  price: string;
  emi: string;
  includes: string[];
  recommended?: boolean;
}

export interface TreatmentDetail {
  slug: string;
  name: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  category: string;
  duration: string;
  recovery: string;
  startingPrice: string;
  heroImage: string;
  overview: string;
  symptoms: string[];
  benefits: string[];
  steps: {
    number: string;
    title: string;
    description: string;
    clinicalNote?: string;
  }[];
  technologyUsed: string[];
  faqs: {
    id: string;
    question: string;
    answer: string;
  }[];
  beforeAfterCase?: {
    beforeImg: string;
    afterImg: string;
    title: string;
    notes: string;
  };
  // Rich Clinical Portal Fields (Optional for other treatments, fully populated for flagship treatments)
  clinicalSummary?: {
    successRate: string;
    anesthesiaType: string;
    hospitalizationNeeded: string;
    longevity: string;
    idealAgeRange: string;
  };
  anatomyParts?: AnatomyPart[];
  candidacyCriteria?: CandidacyCriteria;
  recoveryPhases?: RecoveryPhase[];
  implantBrands?: ImplantBrand[];
  comparisonMatrix?: {
    headings: [string, string, string];
    rows: ComparisonRow[];
  };
  leadDoctor?: TreatmentDoctor;
  pricingTiers?: PricingTier[];
}

export const DETAILED_TREATMENTS: Record<string, TreatmentDetail> = {
  'root-canal-treatment': {
    slug: 'root-canal-treatment',
    name: 'Painless Single-Sitting Root Canal (RCT)',
    badge: 'Micro-Endodontic Excellence',
    heroTitle: 'Painless Root Canal Treatment in Just 45 Minutes',
    heroSubtitle: 'Save your natural tooth with computer-controlled local anesthesia, digital apex locators, and rotary endodontics by Bangalore’s top MDS endodontists.',
    category: 'Endodontics',
    duration: '45 - 60 mins',
    recovery: 'Immediate (Same Day)',
    startingPrice: '₹4,500',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    overview: 'A Root Canal Treatment (RCT) eliminates infection from the interior pulp chamber of an infected tooth, relieving acute toothache and preserving your original tooth structure for decades.',
    symptoms: [
      'Severe, throbbing toothache while chewing or biting',
      'Lingering sensitivity to hot and cold foods/liquids',
      'Swelling or tender pimple on the gums adjacent to the tooth',
      'Deep discoloration or darkening of the decayed tooth',
    ],
    benefits: [
      '100% Pain-Free computerized local anesthesia delivery',
      'Single-sitting completion in over 92% of clinical cases',
      'Eliminates the need for artificial tooth extraction',
      'High-strength Zirconia CAD/CAM crown for permanent chewing strength',
    ],
    steps: [
      { number: '01', title: '3D Digital Diagnosis', description: 'Digital intraoral radiograph to evaluate the exact length, curvature, and infection depth of the root canals.' },
      { number: '02', title: 'Painless Numbing & Access', description: 'Computerized anesthesia ensures complete numbness before creating a tiny micro-access opening under rubber dam isolation.' },
      { number: '03', title: 'Rotary Cleaning & Disinfection', description: 'Flexible nickel-titanium rotary files and antibacterial irrigants thoroughly cleanse the infected canal pulp.' },
      { number: '04', title: 'Hermetic Gutta-Percha Sealing', description: 'Canals are filled and bio-sealed with biocompatible gutta-percha, ready for a protective custom crown.' },
    ],
    technologyUsed: ['Swiss Rotary Motors', 'Electronic Apex Locators', 'Rubber Dam Isolation', '3D Intraoral Sensor'],
    faqs: [
      { id: 'rct-1', question: 'Does a root canal hurt at 32 Smiles?', answer: 'No. Modern rotary instruments and computer-assisted local anesthesia make the experience as painless as receiving a simple filling.' },
      { id: 'rct-2', question: 'Can it really be completed in one sitting?', answer: 'Yes. Unless acute periapical abscess or severe swelling is present, our MDS endodontists complete the full cleaning and bio-sealing in one 45-minute appointment.' },
      { id: 'rct-3', question: 'Why is a crown necessary after RCT?', answer: 'A tooth without pulp becomes brittle over time. A CAD/CAM ceramic or zirconia crown protects the tooth against chewing fractures for a lifetime.' },
    ],
  },

  'invisalign-treatment': {
    slug: 'invisalign-treatment',
    name: 'Invisalign & Clear Aligners',
    badge: 'Diamond Certified Aligner Provider',
    heroTitle: 'Straighten Your Smile Discreetly with Invisalign',
    heroSubtitle: 'No metal brackets, no food restrictions. Removable US-patented SmartTrack aligners planned via 3D iTero digital simulation.',
    category: 'Orthodontics',
    duration: '6 - 12 months',
    recovery: 'Zero Downtime',
    startingPrice: '₹45,000 (0% EMI Available)',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    overview: 'Invisalign uses custom-manufactured medical-grade polyurethane trays that gradually shift your teeth into ideal alignment with gentle, calibrated force.',
    symptoms: [
      'Crowded, overlapping, or crooked front teeth',
      'Unwanted gaps (diastema) between teeth',
      'Overbite, underbite, or crossbite affecting chewing',
      'Relapse from previous teenage metal braces',
    ],
    benefits: [
      'Virtually invisible when speaking or smiling',
      '100% removable for meals and effortless brushing',
      'Pre-visualization of your finished smile with 3D ClinCheck',
      'Fewer clinic visits compared to traditional wire braces',
    ],
    steps: [
      { number: '01', title: 'iTero 5D Digital Scan', description: 'Zero messy pastes. High-speed 3D intraoral camera captures full dental arches in 60 seconds.' },
      { number: '02', title: 'ClinCheck 3D Simulation', description: 'Our orthodontic specialist plans the exact movement of each tooth, showing you the before and after preview.' },
      { number: '03', title: 'Custom Trays Fabrication', description: 'A series of precision aligners is 3D printed using proprietary SmartTrack material.' },
      { number: '04', title: 'Wear & Smile Progression', description: 'Wear each set for 1-2 weeks, switching trays as your teeth align into their ideal positions.' },
    ],
    technologyUsed: ['iTero Element 5D Scanner', 'ClinCheck AI Treatment Planning', 'SmartTrack Medical Polyurethane'],
    faqs: [
      { id: 'inv-1', question: 'How many hours a day do I need to wear aligners?', answer: 'For optimal results, aligners should be worn 20 to 22 hours per day, removing them only for meals, hot beverages, and brushing.' },
      { id: 'inv-2', question: 'Are clear aligners suitable for adults?', answer: 'Yes! Over 70% of our Invisalign patients are working professionals and adults who prefer discreet orthodontic correction.' },
      { id: 'inv-3', question: 'Is 0% EMI available for Invisalign?', answer: 'Yes, we provide 0% interest monthly installment plans starting at ₹3,750/month with zero processing fees.' },
    ],
  },

  'dental-implants': {
    slug: 'dental-implants',
    name: '3D Guided Dental Implants',
    badge: 'Permanent Tooth Replacement & Implantology',
    heroTitle: '3D Guided Keyhole Dental Implants in Bangalore',
    heroSubtitle: 'Restore 99% natural chewing power with Swiss Straumann® & Swedish Nobel Biocare® implants. Painless flapless precision by MDS Implantologists, backed by a Lifetime Warranty.',
    category: 'Implantology',
    duration: '20 - 30 mins per implant',
    recovery: '24 - 48 hours (Fast Recovery)',
    startingPrice: '₹24,999 (0% EMI Available)',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    overview: 'Dental implants are medical-grade titanium posts surgically anchored into the jawbone, functioning as permanent artificial roots for crowns, bridges, or full dentures. Through a biological phenomenon called osseointegration, the titanium fuses directly with your living jawbone, completely halting bone resorption and restoring full bite force without touching adjacent teeth.',
    clinicalSummary: {
      successRate: '98.7% Lifetime Osseointegration',
      anesthesiaType: 'Computerized Painless Local Anesthesia',
      hospitalizationNeeded: 'Zero (Outpatient Day Procedure)',
      longevity: '25+ Years to Lifetime with Oral Care',
      idealAgeRange: '18+ Years (Post Jawbone Maturity)',
    },
    symptoms: [
      'Single or multiple missing teeth affecting chewing or speech',
      'Difficulty chewing tough, fibrous, or favorite foods due to missing molars',
      'Loose, slipping, or painful removable dentures that click when talking',
      'Visible jawbone shrinkage and sunken facial contours caused by missing teeth',
      'Reluctance to shave down adjacent healthy teeth for a traditional dental bridge',
    ],
    benefits: [
      'Restores 99% of natural bite force—eat apples, nuts, and meats with zero hesitation',
      'Stimulates living jawbone cells to halt bone resorption and maintain youthful facial structure',
      'Preserves adjacent teeth: 100% independent anchor that requires zero grinding of neighbor teeth',
      'Lifetime global manufacturer warranty on Swiss Straumann® and Nobel Biocare® implants',
      'Painless flapless keyhole surgery: computer-guided precision with zero scalpel cuts and minimal bleeding',
      'Zero-cost 0% EMI financing starting at ₹2,499/month with instant approval',
    ],
    anatomyParts: [
      {
        partName: '1. Titanium / Roxolid Fixture (Artificial Root)',
        material: 'Medical Grade 4 Titanium or Straumann Roxolid® Ti-Zr Alloy',
        function: 'Anchors permanently into jawbone via Osseointegration',
        description: 'A precision-threaded biocompatible post placed into the jawbone. Its nano-roughened surface stimulates osteoblast cells to fuse directly with the titanium, creating an unshakeable foundation that halts bone resorption.',
      },
      {
        partName: '2. Custom CAD/CAM Abutment (Precision Connector)',
        material: 'Titanium or High-Translucent Zirconia',
        function: 'Connects the fixture to the crown with zero micro-gaps',
        description: 'Unlike generic stock abutments, our custom-milled abutment matches your exact gum tissue scalloping. This seals the gum line against bacterial micro-leakage and guides natural emergence profile.',
      },
      {
        partName: '3. Monolithic Multi-Layered Zirconia Crown (Visible Tooth)',
        material: '5-Axis CAD/CAM Monolithic Zirconia (1200+ MPa)',
        function: 'Delivers 100% natural aesthetics and full chewing power',
        description: 'Milled from a single block of multilayered zirconia to replicate the natural shade, gradient, and light translucency of natural enamel. It will never chip, discolor, or stain from coffee or turmeric.',
      },
    ],
    candidacyCriteria: {
      idealCandidates: [
        'Adults (18+) with one or more missing teeth seeking a permanent lifetime solution',
        'Patients struggling with unstable, clicking, or painful removable dentures',
        'Individuals with adequate bone density or those eligible for gentle bone grafting / sinus lift',
        'Anyone who wants to preserve neighboring healthy teeth from being shaved down for a dental bridge',
        'Patients seeking natural appearance, unrestricted eating, and confident speech',
      ],
      contraindications: [
        'Uncontrolled diabetes (HbA1c > 8.0%) — we stabilize blood sugar with your physician prior to surgery',
        'Heavy active smoking (>15 cigarettes/day) without commitment to a pre/post-op cessation window',
        'Active untreated periodontal/gum infection (must be sterilized and healed before fixture placement)',
        'Recent intravenous bisphosphonate therapy or active radiation therapy to the head and neck',
      ],
    },
    steps: [
      {
        number: '01',
        title: 'High-Definition 3D CBCT & Digital Treatment Simulation',
        description: 'We perform a 3D Cone Beam Computed Tomography (CBCT) scan and high-speed intraoral digital scan. Virtual implant planning software maps your nerve canals, maxillary sinuses, and bone density down to 0.1mm accuracy.',
        clinicalNote: 'Zero surgical guesswork: implant angulation, depth, and crown emergence are fully pre-planned in 3D CAD software.',
      },
      {
        number: '02',
        title: '3D-Guided Flapless Keyhole Placement',
        description: 'Using a 3D-printed stereolithographic surgical stent, the titanium fixture is placed through a tiny keyhole in the gum under computerized local anesthesia. No scalpel cuts and no sutures are required in ideal bone.',
        clinicalNote: 'Average surgical duration: 20 to 30 minutes. Virtually painless with minimal post-operative soreness.',
      },
      {
        number: '03',
        title: 'Bio-Osseointegration & Temporary Crown',
        description: 'Over 6 to 12 weeks (or 3 to 4 weeks with Swiss Straumann SLActive), your bone cells integrate directly with the porous titanium surface. An aesthetic temporary tooth is placed so you never leave the clinic with a gap.',
        clinicalNote: 'Patients resume normal office routines within 24 to 48 hours without interruption.',
      },
      {
        number: '04',
        title: 'Digital Scan & Permanent Monolithic Zirconia Crown',
        description: 'Once osseointegration is confirmed, an optical 3D scan captures the exact position of the fixture. A robotic 5-axis milling machine sculpts your permanent Monolithic Zirconia crown, torqued to exact specifications.',
        clinicalNote: 'Delivers 99% of natural chewing strength, accompanied by an official Lifetime Manufacturer Warranty Card.',
      },
    ],
    implantBrands: [
      {
        name: 'Straumann® Roxolid SLActive',
        origin: 'Basel, Switzerland',
        warranty: 'Lifetime Global Warranty',
        features: [
          'Roxolid® Titanium-Zirconium superalloy (15% higher tensile strength than pure titanium)',
          'SLActive® hydrophilic surface enables rapid 3 to 4 week osseointegration',
          'Scientifically validated in over 3,000 independent clinical studies',
          'Ideal for diabetic patients, compromised bone volume, or immediate loading',
        ],
        recommendedFor: 'Premium rapid healing, front aesthetic smile zone, & medically complex cases',
        highlight: true,
      },
      {
        name: 'Nobel Biocare® Active / Replace',
        origin: 'Gothenburg, Sweden / USA',
        warranty: 'Lifetime Global Warranty',
        features: [
          'Direct legacy of Prof. Per-Ingvar Brånemark (Father of Modern Implantology)',
          'TiUnite® biomimetic porous oxide surface accelerates bone formation',
          'Global clinical benchmark for All-on-4® full-mouth immediate rehabilitation',
          'Maximum primary stability even in soft maxillary bone',
        ],
        recommendedFor: 'Full-arch fixed teeth restoration & immediate functional loading',
      },
      {
        name: 'Osstem® TSIII SA System',
        origin: 'Seoul, South Korea',
        warranty: '15-Year Manufacturer Warranty',
        features: [
          'World #1 dental implant system by global surgical volume',
          'Sub-micron sandblasted and acid-etched (SA) morphologic surface',
          'Optimal corkscrew thread design provides superior initial cortical stability',
          'Proven 98.2% 10-year clinical survival rate across international registries',
        ],
        recommendedFor: 'Cost-effective high-strength replacement for posterior molar teeth',
      },
    ],
    recoveryPhases: [
      {
        timeline: 'Hours 0 – 48',
        title: 'Immediate Post-Procedure & Comfort Phase',
        whatToExpect: 'Mild local numbness wears off within 2 to 3 hours. Because we use flapless keyhole guidance, tissue trauma is minimal—most patients describe the feeling as milder than a routine tooth extraction.',
        dietAndCare: [
          'Apply an ice pack on the cheek for 15 minutes on / 15 minutes off to prevent swelling',
          'Enjoy cool, nourishing soft foods (smoothies, yogurt, ice cream, tender khichdi)',
          'Avoid drinking through a straw or forceful spitting to safeguard clot formation',
          'Take prescribed anti-inflammatory and antibiotic medications exactly on schedule',
        ],
      },
      {
        timeline: 'Days 3 – 7',
        title: 'Soft Tissue Healing & Routine Resumption',
        whatToExpect: 'Any mild gum tenderness completely subsides. Over 95% of our patients return to full work and normal social routines within 24 to 48 hours.',
        dietAndCare: [
          'Begin gentle warm saline mouth rinses after meals (do not swish aggressively)',
          'Brush natural teeth normally; gently clean around the implant site with an ultra-soft brush',
          'Transition to soft solids (steamed vegetables, paneer, pasta, fish, scrambled eggs)',
        ],
      },
      {
        timeline: 'Weeks 2 – 12',
        title: 'Osseointegration (Bone-Fusion Phase)',
        whatToExpect: 'Living bone cells fuse with the titanium surface microscopically. The implant becomes biologically integrated into your skeleton without any pain or sensation.',
        dietAndCare: [
          'Attend a brief 15-minute digital check-in at 32 Smiles for mobility verification',
          'Maintain regular interdental brushing and flossing routines',
          'Enjoy a normal healthy diet, avoiding biting directly on extremely hard items (ice, nutshells)',
        ],
      },
      {
        timeline: 'Week 12 & Beyond',
        title: 'Permanent Zirconia Crown Delivery & Full Chewing',
        whatToExpect: 'Your custom CAD/CAM Monolithic Zirconia crown is torqued into place. You now possess a permanent, aesthetic tooth that looks and feels indistinguishable from natural enamel.',
        dietAndCare: [
          'Chew any food you love without restriction (apples, steaks, crispy dosas, dry fruits)',
          'Schedule routine 6-month preventive cleanings and checkups at any of our 9 clinics',
          'Smile, speak, and laugh with complete lifelong confidence backed by your warranty card',
        ],
      },
    ],
    comparisonMatrix: {
      headings: ['3D Guided Dental Implant', 'Traditional Tooth-Supported Bridge', 'Removable Acrylic Denture'],
      rows: [
        {
          aspect: 'Longevity & Durability',
          primaryTreatment: '25+ Years to Lifetime (Permanent osseointegration)',
          alternativeOne: '7 – 10 Years (Recurrent decay under bridge crowns)',
          alternativeTwo: '3 – 5 Years (Wear, breakage, and gum shrinkage)',
        },
        {
          aspect: 'Preservation of Neighbor Teeth',
          primaryTreatment: '100% Preserved (Zero cutting of adjacent healthy teeth)',
          alternativeOne: 'Destructive: 2 healthy adjacent teeth shaved down by 50%',
          alternativeTwo: 'Metal clasps wear down enamel and loosen anchor teeth',
        },
        {
          aspect: 'Jawbone Resorption Prevention',
          primaryTreatment: 'Halts bone loss completely by stimulating osteoblasts',
          alternativeOne: 'Bone under the bridge gap continuously shrinks away',
          alternativeTwo: 'Accelerates bone loss through continuous surface friction',
        },
        {
          aspect: 'Chewing Power (Bite Force)',
          primaryTreatment: '98% – 100% of Natural Bite Power (Eat anything)',
          alternativeOne: '65% – 75% Chewing Power (Struggles with tough meats)',
          alternativeTwo: '25% – 35% Chewing Power (Painful slipping on hard foods)',
        },
        {
          aspect: 'Oral Hygiene & Maintenance',
          primaryTreatment: 'Brush & floss normally just like a natural tooth',
          alternativeOne: 'Requires special threader floss underneath the bridge',
          alternativeTwo: 'Must be removed nightly and soaked in chemical cleansers',
        },
        {
          aspect: 'Long-Term 20-Year Cost',
          primaryTreatment: 'Lowest overall (One-time investment, zero repeat costs)',
          alternativeOne: 'High (Requires 2–3 full replacements & potential RCTs)',
          alternativeTwo: 'Moderate (Frequent relining, adjustments, adhesives, remakes)',
        },
      ],
    },
    leadDoctor: {
      name: 'Dr. Arjun V.',
      role: 'Chief Implantologist & Prosthodontist',
      qualifications: 'BDS, MDS (Prosthodontics & Implantology), FICOI (USA)',
      experience: '18+ Years Clinical Experience',
      casesCount: '10,000+ Implants Placed',
      fellowships: [
        'Fellow of the International Congress of Oral Implantologists (FICOI, USA)',
        'Master in Computer-Guided 3D Keyhole Implantology',
        'Certified All-on-4® and All-on-6® Full Mouth Rehabilitation Specialist',
      ],
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHYwys9MySFxGz1AVrIoCdoSPeBkv0HIMNBMkN_FzarjOcL_E0sLLX_V9sRo4exwASVovmcjo0nbKTyfi7E_Oqvjpg7r3xWMiM7Gz80YqO7HjegjCze_ng1VyCh7UHwWjRSnRzwRiHZ3LSC6KYlY8mZd2gaQ80zCl9W8-xULWets3YTrke8OFzXFjxOduxUlKrkIva8RBptAcCLBJAm7_U35ddO6-ta94F8sznW6CbgoU5sE_yblh9',
      bio: 'Dr. Arjun V. is one of South India’s leading dental implantologists with over 18 years of specialized surgical excellence. Having trained under international pioneers in Europe and the United States, Dr. Arjun spearheaded computerized 3D CBCT guided surgery protocols at 32 Smiles. With more than 10,000 implants successfully placed and a documented 98.7% success rate, his practice focuses on flapless keyhole comfort and lifetime aesthetic durability.',
    },
    pricingTiers: [
      {
        title: 'Osstem® Korean System',
        price: '₹24,999',
        emi: 'From ₹2,083/mo (0% Interest)',
        includes: [
          'Medical Grade 4 Titanium Fixture',
          'Standard CAD/CAM Titanium Abutment',
          'High-Strength Monolithic Zirconia Crown',
          '15-Year Manufacturer Warranty Card',
          'Digital X-Rays & Follow-up Checks',
        ],
      },
      {
        title: 'Nobel Biocare® Swedish System',
        price: '₹36,500',
        emi: 'From ₹3,042/mo (0% Interest)',
        recommended: true,
        includes: [
          'Nobel Biocare Active / Replace Titanium Post',
          'Custom 3D CAD/CAM Milled Titanium Abutment',
          'Multi-Layered Monolithic Zirconia Crown',
          'Official Lifetime Global Warranty Card',
          'Computerized 3D Surgical Stent Included',
          '1-Year Free Maintenance & Cleaning',
        ],
      },
      {
        title: 'Straumann® Swiss Roxolid',
        price: '₹48,000',
        emi: 'From ₹4,000/mo (0% Interest)',
        includes: [
          'Roxolid® Ti-Zr Superalloy with SLActive®',
          'Ultra-Rapid 3-4 Week Osseointegration',
          'Custom Aesthetic E-Max / Zirconia Crown',
          'Lifetime International Replacement Guarantee',
          'Priority Operating Slot with Dr. Arjun V.',
          'Complimentary CBCT 3D Bone Analysis',
        ],
      },
    ],
    technologyUsed: [
      '3D CBCT Imaging',
      'Computer-Guided 3D Surgical Stents',
      'Swiss Straumann® & Swedish Nobel Biocare®',
      '5-Axis CAD/CAM Monolithic Zirconia Milling',
      'Computerized Painless Local Anesthesia Delivery',
    ],
    faqs: [
      {
        id: 'imp-1',
        question: 'Is dental implant surgery painful during or after the procedure?',
        answer: 'No. The procedure is performed under computerized local anesthesia that ensures complete numbness of the treatment area. Because we use 3D CBCT-guided flapless keyhole surgery, there are no scalpel incisions or stitches in most cases. Patients report only minor pressure during placement and minimal tenderness the next day, easily managed with mild pain relievers.',
      },
      {
        id: 'imp-2',
        question: 'How long do dental implants actually last?',
        answer: 'Dental implants are designed to be a permanent, lifetime solution. The titanium post fuses biologically with your jawbone through osseointegration. With standard oral hygiene (daily brushing, flossing, and 6-month checkups), dental implants boast a 98.7% success rate over 25+ years. Premium systems like Nobel Biocare and Straumann come with an official Lifetime Global Warranty.',
      },
      {
        id: 'imp-3',
        question: 'Can I get dental implants if I have low bone density or bone loss?',
        answer: 'Yes! Bone loss is common after losing a tooth, but it rarely disqualifies you from implants. Our implantologists use advanced bone regeneration techniques including synthetic bone grafting, platelet-rich fibrin (PRF), and sinus lifts to rebuild bone volume. We also offer tilted implants and short implants that maximize available native bone.',
      },
      {
        id: 'imp-4',
        question: 'What is the advantage of 3D Guided Keyhole Surgery over conventional surgery?',
        answer: 'Conventional implant placement requires cutting open the gum flap to expose the jawbone, followed by manual drilling and suturing. In contrast, 3D Guided Keyhole surgery uses a pre-printed surgical stent mapped to your CBCT scan. The implant is placed through a tiny 3mm pinpoint hole with zero scalpel cuts, reducing surgery time to just 20 minutes with virtually no swelling, bleeding, or downtime.',
      },
      {
        id: 'imp-5',
        question: 'Can diabetic patients safely get dental implants at 32 Smiles?',
        answer: 'Yes, provided blood glucose levels are controlled. Patients with an HbA1c below 7.5%–8.0% have implant success rates virtually identical to non-diabetics. We collaborate with your physician, administer prophylactic antibiotics, and often use Swiss Straumann SLActive implants, whose hydrophilic surface accelerates osseointegration even in compromised vascular environments.',
      },
      {
        id: 'imp-6',
        question: 'Why choose a dental implant over a 3-unit dental bridge?',
        answer: 'A dental bridge requires irreversibly grinding down two healthy neighboring teeth by 50% to serve as anchors. Furthermore, the jawbone underneath the missing tooth gap continues to shrink away. Dental implants are 100% independent anchors that preserve your healthy adjacent teeth, stimulate bone growth, and last a lifetime, whereas bridges typically fail and need replacement every 7 to 10 years.',
      },
      {
        id: 'imp-7',
        question: 'What is All-on-4® or All-on-6® full-mouth teeth replacement?',
        answer: 'All-on-4 / All-on-6 is a revolutionary technique for patients who have lost all or most of their teeth. Rather than placing an implant for each tooth, we place 4 or 6 strategically angled titanium implants per jaw to anchor a full, permanent bridge of 12 to 14 teeth. In many cases, temporary fixed teeth can be attached on the exact same day.',
      },
      {
        id: 'imp-8',
        question: 'How soon can an implant be placed after a tooth extraction?',
        answer: 'In many cases, an implant can be placed during the exact same appointment as the tooth extraction (Immediate Implant Placement). If active infection or significant bone loss is present, we may advise socket preservation and allow 8 to 12 weeks of natural healing before placing the fixture.',
      },
      {
        id: 'imp-9',
        question: 'What 0% interest EMI options are available for dental implants?',
        answer: 'We provide zero-cost 0% EMI schemes through partners including Bajaj Finserv, HDFC Bank, ICICI Bank, and Pine Labs. Monthly installments start from ₹2,499/month across 6, 9, or 12-month tenures with zero processing fees and instant paperless approval at all 9 clinics.',
      },
      {
        id: 'imp-10',
        question: 'At which 32 Smiles clinics are dental implant surgeries performed?',
        answer: 'Dental implant consultations and guided surgical procedures are conducted across all 9 of our Bangalore clinics: Indiranagar, Koramangala, HSR Layout, Whitefield, BTM Layout, Jayanagar, Electronic City, Marathahalli, and Sarjapura Road.',
      },
    ],
  },

  'disimpaction': {
    slug: 'disimpaction',
    name: 'Wisdom Tooth Removal & Disimpaction',
    badge: 'Atraumatic Maxillofacial Surgery',
    heroTitle: 'Painless Sutureless Wisdom Tooth Extraction',
    heroSubtitle: 'Relieve agonizing jaw pain, pericoronitis, and nerve impingement with piezo-surgical atraumatic wisdom tooth removal.',
    category: 'Oral Surgery',
    duration: '20 - 40 mins',
    recovery: '1 - 2 days',
    startingPrice: '₹3,500',
    heroImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80',
    overview: 'Wisdom teeth (third molars) frequently lack room to emerge properly, resulting in impaction, recurrent gum infections, jaw cyst formation, and damage to adjacent molars.',
    symptoms: [
      'Severe pain or pressure at the back of the jaw or ear',
      'Swollen, bleeding gums around the partially erupted tooth',
      'Difficulty opening your mouth or chewing (Trismus)',
      'Headaches and foul taste from food entrapment',
    ],
    benefits: [
      'Piezo-electric ultrasonic bone cutting protects nerves',
      'Minimal post-operative swelling and rapid healing',
      'Same-day emergency pain relief across all 9 Bangalore clinics',
      'Experienced maxillofacial surgeons ensure zero complications',
    ],
    steps: [
      { number: '01', title: 'Digital OPG / 3D X-Ray', description: 'Maps the tooth root angulation and position relative to the mandibular nerve canal.' },
      { number: '02', title: 'Gentle Profound Numbing', description: 'Complete block anesthesia ensures you feel zero sharpness or pain during the procedure.' },
      { number: '03', title: 'Atraumatic Elevation', description: 'Piezo-surgery gently eases the tooth out without forceful tugging.' },
      { number: '04', title: 'Hemostatic Dressing', description: 'Bio-collagen sponge placed to accelerate clot formation and prevent dry sockets.' },
    ],
    technologyUsed: ['Piezo-Electric Surgical Unit', 'Digital Panoramic OPG', 'Bio-Collagen Wound Dressings'],
    faqs: [
      { id: 'wis-1', question: 'Do all wisdom teeth have to be removed?', answer: 'No. Only impacted wisdom teeth that cause recurring infections, decay, cysts, or crowd adjacent teeth require removal.' },
      { id: 'wis-2', question: 'How long is the recovery period?', answer: 'Most patients return to normal routine within 24 to 48 hours following our gentle sutureless protocol.' },
    ],
  },

  'smile-designing': {
    slug: 'smile-designing',
    name: 'Cosmetic Smile Makeover & DSD',
    badge: 'Artistry Meets Facial Aesthetics',
    heroTitle: 'Architect Your Dream Smile with Digital Smile Design',
    heroSubtitle: 'Custom handcrafted porcelain veneers, gum recontouring, and teeth whitening tailored to your unique facial golden proportions.',
    category: 'Cosmetic Dentistry',
    duration: '2 - 3 visits',
    recovery: 'Immediate',
    startingPrice: '₹8,500 / tooth',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    overview: 'Digital Smile Design (DSD) uses facial photography, 3D intraoral scans, and dynamic video analysis to construct a smile that matches your lips, facial contours, and personality.',
    symptoms: [
      'Chipped, worn-down, or uneven tooth edges',
      'Severe fluorosis, tetracycline, or deep internal enamel staining',
      'Gummy smile with excessive gum display upon smiling',
      'Gaps, spacing, or asymmetrical smile arch',
    ],
    benefits: [
      'Digital trial smile: preview and test-drive your smile before bonding',
      'Ultra-thin E-Max porcelain veneers require minimal tooth prep',
      'Stain-resistant porcelain preserves natural translucence',
      'Instant confidence boost for weddings, careers, and social life',
    ],
    steps: [
      { number: '01', title: 'Facial Aesthetics Photography', description: 'High-res studio portraits and video capture smile dynamics and facial harmony.' },
      { number: '02', title: 'Digital 3D Smile Simulation', description: 'Virtual CAD model designing veneer contours matching the golden facial ratio.' },
      { number: '03', title: 'Trial Smile Mockup', description: 'Temporary mock-up placed on your teeth so you can inspect your look in the mirror.' },
      { number: '04', title: 'Permanent Porcelain Bonding', description: 'Hand-crafted German porcelain veneers bonded with light-curing resin.' },
    ],
    technologyUsed: ['Digital Smile Design (DSD)', 'E-Max Press Lithium Disilicate', 'Diode Laser Gum Recontouring'],
    faqs: [
      { id: 'smd-1', question: 'How long do porcelain veneers last?', answer: 'Porcelain veneers typically last 15 to 20 years with routine flossing, brushing, and dental hygiene visits.' },
      { id: 'smd-2', question: 'Will my natural teeth be heavily filed?', answer: 'No. Ultra-thin modern veneers require only 0.3mm to 0.5mm micro-reduction of the surface enamel.' },
    ],
  },

  'teeth-whitening': {
    slug: 'teeth-whitening',
    name: 'Laser Teeth Whitening',
    badge: 'Immediate Shade Transformation',
    heroTitle: 'Brighten Your Smile Up to 8 Shades in 45 Minutes',
    heroSubtitle: 'Safe, in-office cold-blue laser teeth whitening that dissolves stubborn coffee, tea, and smoke stains without sensitivity.',
    category: 'Cosmetic Dentistry',
    duration: '45 mins',
    recovery: 'Immediate',
    startingPrice: '₹6,999',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    overview: 'Clinical laser teeth whitening uses medical-grade hydrogen peroxide activated by targeted blue LED/laser wavelengths to penetrate deep enamel rods and oxidize discoloration.',
    symptoms: [
      'Yellowed enamel from coffee, tea, red wine, or smoking',
      'Dull or discolored teeth ahead of weddings or job interviews',
      'Age-related enamel thinning showing yellow dentin beneath',
    ],
    benefits: [
      'Instant results: 6 to 8 shades lighter in a single visit',
      'Enamel-safe desensitizing formulation prevents post-treatment sensitivity',
      'Includes complimentary home maintenance touch-up kit',
      'Much safer and more effective than over-the-counter DIY strips',
    ],
    steps: [
      { number: '01', title: 'Ultrasonic Polish', description: 'Teeth cleaned of surface tartar and plaque for even whitening gel contact.' },
      { number: '02', title: 'Gingival Barrier Protection', description: 'Liquid dam resin placed to protect gums and soft tissue.' },
      { number: '03', title: 'Laser Activation Cycles', description: 'Three 15-minute cycles of laser activation break down deep-set stains.' },
      { number: '04', title: 'Fluoride Remineralization', description: 'Post-whitening mineral glaze applied to lock in brightness.' },
    ],
    technologyUsed: ['Cold-Blue Laser Whitening Unit', 'Gingival Barrier Resin', 'Enamel Desensitizer'],
    faqs: [
      { id: 'wht-1', question: 'Does laser teeth whitening damage enamel?', answer: 'No. The formulation breaks down stain pigments without demineralizing or weakening healthy enamel.' },
    ],
  },

  'orthodontics-braces': {
    slug: 'orthodontics-braces',
    name: 'Orthodontic Braces (Ceramic & Metal)',
    badge: 'Precision Alignment',
    heroTitle: 'Advanced Ceramic & Self-Ligating Braces',
    heroSubtitle: 'Comfortable, low-friction Damon braces and tooth-colored ceramic brackets for children, teens, and adults.',
    category: 'Orthodontics',
    duration: '12 - 18 months',
    recovery: 'No downtime',
    startingPrice: '₹28,000 (0% EMI Available)',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    overview: 'Orthodontic braces gently guide teeth into proper anatomical alignment, correcting severe crowding, open bites, and jaw discrepancies with high structural reliability.',
    symptoms: ['Severely rotated or crowded teeth', 'Crossbite, deep bite, or open bite', 'Difficulty chewing evenly'],
    benefits: ['Tooth-colored ceramic brackets blend with natural enamel', 'Self-ligating clips reduce friction and treatment duration by 30%', 'Suitable for even the most complex skeletal corrections'],
    steps: [
      { number: '01', title: 'Cephalometric Analysis', description: 'Digital X-rays analyze jaw angles and facial symmetry.' },
      { number: '02', title: 'Direct Bracket Bonding', description: 'Precision ceramic brackets bonded with light-cure resin.' },
      { number: '03', title: 'Memory-Wire Integration', description: 'Thermal nickel-titanium shape-memory archwires placed.' },
      { number: '04', title: 'Progressive Adjustments', description: 'Monthly adjustments until optimal alignment is achieved.' },
    ],
    technologyUsed: ['Self-Ligating Low Friction Brackets', 'Thermal NiTi Archwires', 'Digital Cephalometry'],
    faqs: [
      { id: 'brc-1', question: 'Are ceramic braces visible?', answer: 'Ceramic brackets match your tooth shade and are significantly less visible than traditional metal braces.' },
    ],
  },

  'dental-veneer': {
    slug: 'dental-veneer',
    name: 'Porcelain Dental Veneers & Laminates',
    badge: 'Flawless Aesthetic Perfection',
    heroTitle: 'Ultra-Thin E-Max Porcelain Veneers',
    heroSubtitle: 'Custom handcrafted German ceramic shells bonded over front teeth to transform color, shape, and symmetry permanently.',
    category: 'Cosmetic Dentistry',
    duration: '2 visits',
    recovery: 'Immediate',
    startingPrice: '₹8,500 / tooth',
    heroImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80',
    overview: 'Dental veneers are wafer-thin shells of medical ceramic permanently bonded to the front of teeth to mask chips, gaps, fluorosis, and irregular contours.',
    symptoms: ['Chipped or cracked teeth', 'Stubborn deep discoloration', 'Gaps between front teeth', 'Worn down tooth enamel'],
    benefits: ['Resists coffee and wine stains permanently', 'Mimics light-reflecting properties of natural enamel', 'Minimal tooth preparation (0.3mm to 0.5mm)'],
    steps: [
      { number: '01', title: 'Micro-Preparation', description: 'Minimal enamel preparation and high-definition digital 3D scan.' },
      { number: '02', title: 'CAD/CAM Milling', description: 'Veneers milled from lithium disilicate ceramic blocks and hand-glazed.' },
      { number: '03', title: 'Permanent Resin Bonding', description: 'Chemically bonded with dual-cure dental cement for lifetime adhesion.' },
    ],
    technologyUsed: ['CAD/CAM Porcelain Milling', 'iTero 5D Scanner', 'Lithium Disilicate Ceramic'],
    faqs: [
      { id: 'ven-1', question: 'Can veneers fall off?', answer: 'Modern resin bonding forms a chemical union with enamel that makes detached veneers exceedingly rare.' },
    ],
  },

  'crown-and-bridges': {
    slug: 'crown-and-bridges',
    name: 'CAD/CAM Zirconia Crowns & Bridges',
    badge: 'Maximum Durability',
    heroTitle: 'Metal-Free High-Strength Zirconia Dental Crowns',
    heroSubtitle: 'Precision-milled crowns that match your natural teeth perfectly, providing superior strength without dark black metal margins.',
    category: 'Prosthodontics',
    duration: '2 visits',
    recovery: 'Immediate',
    startingPrice: '₹6,500',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    overview: 'Dental crowns encase damaged or post-RCT teeth to restore their structural integrity and chewing power. Fixed dental bridges span gaps left by missing teeth.',
    symptoms: ['Fractured or heavily filled teeth', 'Post-root canal weakened teeth', 'Missing one or two consecutive teeth'],
    benefits: ['100% metal-free Zirconia with zero black gum lines', 'Withstands up to 1200 MPa of chewing pressure', '5 to 15 years warranty card included'],
    steps: [
      { number: '01', title: 'Tooth Preparation', description: 'Smooth tapering under local anesthesia and digital scan.' },
      { number: '02', title: '5-Axis CAD/CAM Milling', description: 'Robotic milling of monolithic multilayered zirconia.' },
      { number: '03', title: 'Try-in & Cementation', description: 'Bite verification and permanent biocompatible cementation.' },
    ],
    technologyUsed: ['Multilayered Zirconia Blocks', '5-Axis CAD/CAM Robotic Milling'],
    faqs: [
      { id: 'crw-1', question: 'How is Zirconia better than metal-ceramic (PFM)?', answer: 'Zirconia is virtually indestructible, 100% biocompatible, and does not produce gray metallic margins at the gum line.' },
    ],
  },

  'gum-treatments': {
    slug: 'gum-treatments',
    name: 'Laser Gum Care & Periodontics',
    badge: 'Soft-Tissue Rejuvenation',
    heroTitle: 'Advanced Laser Therapy for Bleeding & Swollen Gums',
    heroSubtitle: 'Eliminate periodontal bacteria, deep tartar, and bad breath using painless diode lasers and ultrasonic root planing.',
    category: 'Periodontics',
    duration: '45 mins',
    recovery: '1 - 2 days',
    startingPrice: '₹2,500',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    overview: 'Periodontal therapy arrests gum disease (gingivitis & periodontitis) by removing bacterial plaque biofilms from below the gumline and stimulating tissue reattachment.',
    symptoms: ['Bleeding gums while brushing or flossing', 'Persistent bad breath (Halitosis)', 'Receding gums making teeth look longer', 'Loose or shifting adult teeth'],
    benefits: ['Painless laser sterilization kills deep anaerobic bacteria', 'Reverses early stage gum disease completely', 'Stops bone loss and prevents tooth loss'],
    steps: [
      { number: '01', title: 'Periodontal Pocket Depth Charting', description: 'Digital probe measures pocket depths around each tooth.' },
      { number: '02', title: 'Ultrasonic Deep Scaling', description: 'Ultrasonic micro-tips remove calcified tartar sub-gingivally.' },
      { number: '03', title: 'Diode Laser Decontamination', description: 'Cold laser vaporizes infected sulcular tissue and stimulates collagen.' },
    ],
    technologyUsed: ['Dental Diode Laser 810nm', 'Ultrasonic Subgingival Scalers'],
    faqs: [
      { id: 'gum-1', question: 'Will gum treatment make my teeth loose?', answer: 'No. Removing heavy tartar reveals the true condition of your gums, allowing them to tighten and heal firmly around tooth roots.' },
    ],
  },

  'child-dental-care': {
    slug: 'child-dental-care',
    name: 'Child & Pediatric Dental Care',
    badge: 'Gentle Pedodontics',
    heroTitle: 'Gentle, Fun, and Fear-Free Pediatric Dentistry',
    heroSubtitle: 'Specialized care for infants, children, and teens with fluoride treatments, dental sealants, and painless cavity restorations.',
    category: 'Pediatric Care',
    duration: '30 mins',
    recovery: 'Immediate',
    startingPrice: '₹999',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    overview: 'Our pedodontists specialize in child psychology, early interceptive orthodontics, and habit correction to create healthy oral foundations for life.',
    symptoms: ['Early childhood tooth decay (baby bottle caries)', 'Thumb sucking or tongue thrusting habits', 'Toothache in milk teeth', 'Chipped teeth from playground sports'],
    benefits: ['Warm, child-friendly environment with zero scary dental smells', 'Fluoride enamel varnishes reduce cavity risk by 70%', 'Preventative pit and fissure sealants protect growing molars'],
    steps: [
      { number: '01', title: 'Gentle Visual Exam', description: 'Friendly orientation showing the child dental tools in fun language.' },
      { number: '02', title: 'Painless Cleaning', description: 'Gentle polish and plaque removal.' },
      { number: '03', title: 'Protective Sealants & Fluoride', description: 'Quick-setting enamel fortification shield.' },
    ],
    technologyUsed: ['Child-Friendly Nitrous Sedation (if needed)', 'Fluoride Enamel Varnish', 'Pit & Fissure Sealants'],
    faqs: [
      { id: 'ped-1', question: 'Why treat milk teeth if they will fall out anyway?', answer: 'Healthy milk teeth are vital for proper speech development, nutrition, and guiding permanent teeth into their correct positions.' },
    ],
  },

  'tooth-filling': {
    slug: 'tooth-filling',
    name: 'Tooth Fillings & Invisible Restorations',
    badge: 'Natural Enamel Aesthetics',
    heroTitle: 'Tooth-Colored Composite Dental Restorations',
    heroSubtitle: 'Seamless bio-compatible composite resins that blend invisibly with your natural enamel, restoring strength and preventing cavity spread.',
    category: 'General Dentistry',
    duration: '30 mins',
    recovery: 'Immediate',
    startingPrice: '₹1,200',
    heroImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80',
    overview: 'Tooth-colored composite fillings seal cavities, repair minor chips, and replace old mercury silver fillings with aesthetic nano-hybrid resins.',
    symptoms: ['Visible black or brown spots on tooth surfaces', 'Food getting stuck between specific teeth', 'Sensitivity to sweet foods or cold drinks'],
    benefits: ['100% mercury-free and tooth-colored', 'Bonds micro-mechanically to conserve maximum natural tooth structure', 'Cured instantly with LED light—eat right away'],
    steps: [
      { number: '01', title: 'Gentle Decay Removal', description: 'Micro-diamond burs remove decayed enamel with zero healthy tooth loss.' },
      { number: '02', title: 'Enamel Etch & Prime', description: 'Prepares the tooth surface for permanent chemical bonding.' },
      { number: '03', title: 'Nano-Composite Layering', description: 'Layered in incremental shades and cured with LED light.' },
      { number: '04', title: 'High-Gloss Polish', description: 'Buffed to a smooth natural shine that repels plaque.' },
    ],
    technologyUsed: ['3M ESPE Nano-Hybrid Composite', 'High-Intensity LED Curing Light'],
    faqs: [
      { id: 'fil-1', question: 'How long do composite fillings last?', answer: 'High-grade nano-hybrid fillings typically last 7 to 10 years or longer with proper oral hygiene.' },
    ],
  },

  'scaling-polishing': {
    slug: 'scaling-polishing',
    name: 'Ultrasonic Scaling & Teeth Polishing',
    badge: 'Routine Oral Hygiene',
    heroTitle: 'Deep Ultrasonic Teeth Cleaning & Stain Removal',
    heroSubtitle: 'Gentle ultrasonic vibrations dislodge calcified tartar, plaque, and coffee stains, leaving teeth clean, fresh, and smooth.',
    category: 'Preventive Care',
    duration: '30 - 45 mins',
    recovery: 'Immediate',
    startingPrice: '₹999',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    overview: 'Routine professional scaling every 6 months removes hardened dental calculus that toothbrushes cannot clean, protecting gums from disease.',
    symptoms: ['Hard yellow or brown deposits near the gum line', 'Bleeding gums when spitting toothpaste', 'Bad breath despite frequent brushing'],
    benefits: ['Prevents gum disease, pocket formation, and bone loss', 'Removes external tea, coffee, and tobacco stains', 'Leaves teeth naturally brighter and tongue feeling clean'],
    steps: [
      { number: '01', title: 'Comprehensive Oral Health Audit', description: 'Inspection of all 32 teeth, gums, and soft palate.' },
      { number: '02', title: 'Ultrasonic Calculus Dislodging', description: 'Water-cooled ultrasonic tip gently shakes tartar loose without scraping enamel.' },
      { number: '03', title: 'Air-Flow Stain Polish', description: 'Fine prophylactic paste polishes away surface coffee/tea stains.' },
    ],
    technologyUsed: ['Piezo Ultrasonic Scalers', 'Air-Flow Stain Removal System'],
    faqs: [
      { id: 'scl-1', question: 'Does scaling cause gaps between teeth?', answer: 'No! Scaling simply removes hardened tartar that was artificially filling the space between teeth. Cleaning restores healthy gum attachments.' },
    ],
  },

  'laser-dentistry': {
    slug: 'laser-dentistry',
    name: 'Laser Dentistry Procedures',
    badge: 'Advanced Photonic Medicine',
    heroTitle: 'Painless Laser Dental Treatments',
    heroSubtitle: 'Minimal bleeding, sutureless healing, and instant relief for mouth ulcers, frenectomies, and gum contouring.',
    category: 'Advanced Care',
    duration: '20 - 30 mins',
    recovery: 'Immediate',
    startingPrice: '₹2,500',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    overview: 'Dental lasers harness targeted wavelengths of light energy to cut, disinfect, and bio-stimulate tissues with precision and minimal discomfort.',
    symptoms: ['Painful recurrent aphthous mouth ulcers', 'Tongue-tie or tight lip frenum affecting speech', 'Uneven gum margins around front teeth'],
    benefits: ['Virtually zero bleeding—lasers coagulate vessels instantly', 'No need for surgical sutures or stitches', 'Significantly faster cellular healing and regeneration'],
    steps: [
      { number: '01', title: 'Laser Setting Calibration', description: 'Wavelength and pulse frequency calibrated for the target soft tissue.' },
      { number: '02', title: 'Topical Numbing Gel', description: 'Gentle topical anesthetic applied with zero injections needed for many procedures.' },
      { number: '03', title: 'Laser Ablation & Biostimulation', description: 'Precise photonic sculpting in just a few minutes.' },
    ],
    technologyUsed: ['Diode Dental Laser 810nm / 980nm'],
    faqs: [
      { id: 'lsr-1', question: 'Is laser dentistry safe for kids and seniors?', answer: 'Yes, dental lasers are FDA-approved, highly safe, and particularly beneficial for anxious patients.' },
    ],
  },
};
