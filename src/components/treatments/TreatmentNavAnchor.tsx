'use client';

import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface TreatmentNavAnchorProps {
  items: NavItem[];
}

export const TreatmentNavAnchor: React.FC<TreatmentNavAnchorProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);

      // Find the current section
      const scrollPosition = window.scrollY + 160;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <div
      className={`sticky top-[64px] md:top-[72px] z-30 bg-[#FAF4EA]/95 backdrop-blur-md border-b border-[#E8DCC8] transition-shadow duration-200 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth"
          aria-label="Table of Contents"
        >
          <span className="hidden lg:inline-flex text-[11px] font-bold uppercase tracking-wider text-[#795900] mr-2 shrink-0">
            Guide Sections:
          </span>

          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#795900] text-white shadow-xs'
                    : 'bg-white/80 text-[#5C5143] hover:text-[#2B2420] hover:bg-white border border-[#E8DCC8]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
