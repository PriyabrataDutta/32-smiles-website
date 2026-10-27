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
    badge: 'Permanent Tooth Replacement',
    heroTitle: 'Restore Permanent Teeth with Keyhole Dental Implants',
    heroSubtitle: 'Look, feel, and chew naturally. Swiss and German titanium implants placed with 3D CBCT guided precision backed by Lifetime Warranty.',
    category: 'Implantology',
    duration: '2 - 3 visits (30 min surgery)',
    recovery: '1 - 2 days',
    startingPrice: '₹24,999 (0% EMI Available)',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    overview: 'Dental implants are medical-grade titanium posts surgically anchored into the jawbone, functioning as permanent artificial roots for crowns, bridges, or full dentures.',
    symptoms: [
      'One or more missing teeth affecting speech or appearance',
      'Difficulty chewing favorite foods due to missing molars',
      'Loose, uncomfortable, or clicking removable dentures',
      'Bone shrinkage and facial sagging caused by missing teeth',
    ],
    benefits: [
      'Restores 99% of natural bite force—eat anything you love',
      'Prevents jawbone shrinkage and maintains youthful facial contour',
      'No trimming or damage to adjacent healthy teeth',
      'Lifetime manufacturer warranty on Nobel Biocare & Straumann implants',
    ],
    steps: [
      { number: '01', title: '3D CBCT Bone Scan', description: 'High-resolution 3D scan evaluates bone density, nerve canals, and sinus floors for surgical precision.' },
      { number: '02', title: 'Keyhole Implant Placement', description: 'Computerized surgical guide allows flapless, sutureless titanium post placement in just 20-30 minutes.' },
      { number: '03', title: 'Osseointegration', description: 'The implant fuses naturally with your jawbone over a few weeks to create an unshakeable bond.' },
      { number: '04', title: 'Custom Zirconia Crown', description: 'A custom shade-matched zirconia crown is secured to complete your permanent tooth replacement.' },
    ],
    technologyUsed: ['3D CBCT Imaging', 'Computer-Guided Surgical Stents', 'Straumann & Nobel Biocare Systems'],
    faqs: [
      { id: 'imp-1', question: 'How long do dental implants last?', answer: 'With regular oral hygiene and routine checkups, dental implants are designed to last a lifetime.' },
      { id: 'imp-2', question: 'Is the implant procedure painful?', answer: 'Keyhole guided implants cause minimal tissue trauma. Most patients report only mild pressure and resume normal work the next day.' },
      { id: 'imp-3', question: 'Can I replace all my teeth at once?', answer: 'Yes! We offer All-on-4 and All-on-6 full-mouth rehabilitation where an entire arch of fixed teeth is anchored onto 4 or 6 implants.' },
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
