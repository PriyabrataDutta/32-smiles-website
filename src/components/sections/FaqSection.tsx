'use client';

import React, { useState } from 'react';
import { FAQS_LIST } from '@/data/clinicData';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SectionBadge } from '@/components/common/SectionBadge';

interface FaqSectionProps {
  className?: string;
  items?: Array<{ id: string; question: string; answer: string }>;
  title?: string;
  subtitle?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  className = '',
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers to common patient concerns regarding pain, duration, pricing & aftercare.',
}) => {
  const faqItems = items || FAQS_LIST;
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqItems[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className={`py-20 bg-[#FAF4EA] border-b border-[#E8DCC8] ${className}`} id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto space-y-3">
          <SectionBadge text="Got Questions? We Have Answers" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2420]">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[#D9A93B] mx-auto rounded-full"></div>
          {subtitle && (
            <p className="text-sm text-[#4E4636]">{subtitle}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(faq.id)}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? 'border-[#D9A93B] shadow-md'
                    : 'border-[#E8DCC8] hover:border-[#D9A93B]/50'
                }`}
              >
                <div className="flex justify-between items-center p-6 select-none">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B2420] pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#D9A93B] text-[#573F00] rotate-180'
                        : 'bg-[#FAF4EA] text-[#795900]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#4E4636] leading-relaxed border-t border-[#FAF4EA] pt-4 bg-[#FAF4EA]/30 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

