'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Clock,
  ChevronDown,
} from 'lucide-react';

export const TREATMENT_CATEGORIES = [
  {
    title: 'Orthodontics & Aligners',
    items: [
      {
        name: 'Invisalign & Clear Aligners',
        href: '/treatments/invisalign-treatment',
        desc: 'US Diamond Provider · 3D iTero Simulation',
        badge: 'From ₹45k',
      },
      {
        name: 'Orthodontic Braces',
        href: '/treatments/orthodontics-braces',
        desc: 'Ceramic, Metal & Self-Ligating',
        badge: 'From ₹28k',
      },
    ],
  },
  {
    title: 'Implants & Surgery',
    items: [
      {
        name: 'Dental Implants',
        href: '/treatments/dental-implants',
        desc: 'Swiss Straumann · Lifetime Warranty',
        badge: 'From ₹25k',
      },
      {
        name: 'Single-Sitting RCT',
        href: '/treatments/root-canal-treatment',
        desc: 'Painless Micro Rotary Endodontics',
        badge: 'From ₹4,500',
      },
      {
        name: 'Wisdom Tooth Removal',
        href: '/treatments/disimpaction',
        desc: 'Sutureless Piezoelectric Surgery',
        badge: 'From ₹3,500',
      },
      {
        name: 'Crowns & Bridges',
        href: '/treatments/crown-and-bridges',
        desc: 'CAD/CAM Monolithic Zirconia',
        badge: 'From ₹5,500',
      },
    ],
  },
  {
    title: 'Cosmetic & Smile',
    items: [
      {
        name: 'Smile Designing',
        href: '/treatments/smile-designing',
        desc: 'Digital Smile Design (DSD) Preview',
        badge: 'Custom',
      },
      {
        name: 'Porcelain Veneers',
        href: '/treatments/dental-veneer',
        desc: 'Ultra-thin E-max Handcrafted',
        badge: 'From ₹8,500',
      },
      {
        name: 'Laser Teeth Whitening',
        href: '/treatments/teeth-whitening',
        desc: 'Philips Zoom · 8 Shades in 45m',
        badge: 'From ₹6,500',
      },
      {
        name: 'Tooth Fillings & Inlays',
        href: '/treatments/tooth-filling',
        desc: 'Biomimetic Tooth-Colored Composite',
        badge: 'From ₹1,200',
      },
    ],
  },
  {
    title: 'Preventive & Gums',
    items: [
      {
        name: 'Scaling & Polishing',
        href: '/treatments/scaling-polishing',
        desc: 'Ultrasonic Airflow Stain Removal',
        badge: 'From ₹999',
      },
      {
        name: 'Laser Dentistry',
        href: '/treatments/laser-dentistry',
        desc: 'Biolase WaterLase Minimally Invasive',
        badge: 'Painless',
      },
      {
        name: 'Gum Treatments',
        href: '/treatments/gum-treatments',
        desc: 'Laser Periodontics & Flap Surgery',
        badge: 'Specialist',
      },
      {
        name: 'Child Dental Care',
        href: '/treatments/child-dental-care',
        desc: 'Pediatric Sedation & Fluoride',
        badge: 'Kids Friendly',
      },
    ],
  },
];

export const MegaMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 220); // 220ms grace window gives a smooth, forgiving hover bridge
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/treatments"
        className={`flex items-center gap-1 transition-colors h-full py-2 ${
          isOpen ? 'text-[#795900]' : 'hover:text-[#795900]'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Treatments</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#795900]' : ''
          }`}
        />
      </Link>

      {/* Dropdown Container with Hover Bridge */}
      <div
        className={`absolute top-full left-0 right-0 w-full pt-2 transition-all duration-200 z-50 ${
          isOpen
            ? 'opacity-100 visible pointer-events-auto translate-y-0'
            : 'opacity-0 invisible pointer-events-none -translate-y-1'
        }`}
      >
        {/* Invisible Hit Bridge Spanning Header Gap */}
        <div className="absolute -top-4 inset-x-0 h-6 bg-transparent pointer-events-auto" />

        <div className="bg-white rounded-3xl shadow-2xl border border-[#E8DCC8] p-7">
          {/* Header Strip */}
          <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#FAF4EA]">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#D9A93B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#795900]">
                Comprehensive Dental Specialities — All 14 Procedures
              </span>
            </div>
            <Link
              href="/treatments"
              onClick={() => setIsOpen(false)}
              className="text-xs font-semibold text-[#795900] hover:underline flex items-center gap-1.5 group/link"
            >
              <span>Explore Full Treatments Directory & Fee Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 5 Equal-Sized Generous Columns */}
          <div className="grid grid-cols-5 gap-6">
            {TREATMENT_CATEGORIES.map((cat) => (
              <div key={cat.title} className="space-y-3">
                <div className="text-xs font-bold text-[#795900] uppercase tracking-wider pb-1.5 border-b border-[#FAF4EA]">
                  {cat.title}
                </div>
                <div className="space-y-2">
                  {cat.items.map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 rounded-2xl hover:bg-[#FDF8EE] border border-transparent hover:border-[#E8DCC8] transition-all group/item"
                    >
                      <div className="flex items-start justify-between gap-1.5">
                        <span className="font-bold text-[#2B2420] group-hover/item:text-[#795900] text-xs leading-snug">
                          {t.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF4EA] text-[#795900] font-semibold flex-shrink-0 border border-[#D9A93B]/20">
                          {t.badge}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#5C5143] mt-1 leading-normal">
                        {t.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Column 5: Featured Patient Action Card */}
            <div className="bg-gradient-to-br from-[#FAF4EA] via-[#F4E9D8] to-[#FAF4EA] p-5 rounded-2xl border border-[#D9A93B]/30 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-white/80 text-[#795900] mb-3 w-fit border border-[#D9A93B]/30 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#D9A93B]" />
                  <span>Digital 3D Smile Scan</span>
                </div>
                <h5 className="font-serif font-bold text-sm text-[#2B2420] leading-snug">
                  Free 3D Optical Scan & Smile Preview
                </h5>
                <p className="text-xs text-[#5C5143] mt-1.5 leading-relaxed">
                  See your simulated teeth alignment and smile transformation on screen before starting.
                </p>
                <div className="mt-4 p-2.5 bg-white/90 rounded-xl border border-[#D9A93B]/25 text-xs text-[#795900] font-semibold flex items-center gap-2">
                  <span>💳</span>
                  <span>0% Interest EMI starting ₹2,499/mo</span>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Link
                  href="/book-appointment"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#795900] hover:bg-[#573F00] text-white text-xs font-bold shadow-xs transition"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Free Consultation</span>
                </Link>
                <a
                  href="https://wa.me/919482712345?text=Hi%2032%20Smiles%2C%20I%20have%20a%20query%20about%20dental%20treatments."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Clinic Doctor</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Trust Strip */}
          <div className="mt-5 pt-3.5 border-t border-[#FAF4EA] flex items-center justify-between text-xs text-[#5C5143]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D9A93B]" />
                <span>Unified European Class-B Sterilization</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-[#D9A93B]" />
                <span>Standardized Transparent Pricing</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#D9A93B]" />
                <span>Open 7 Days (10 AM - 9 PM)</span>
              </span>
            </div>
            <span className="text-xs font-bold text-[#795900]">
              15-Minute Response Guaranteed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
