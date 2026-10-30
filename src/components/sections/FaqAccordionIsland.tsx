'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionIslandProps {
  items: FaqItem[];
}

export const FaqAccordionIsland: React.FC<FaqAccordionIslandProps> = ({ items }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(items[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((faq) => {
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
                    ? 'bg-[#795900] text-white rotate-180'
                    : 'bg-[#FAF4EA] text-[#795900]'
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </div>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C5147] leading-relaxed border-t border-[#FAF4EA] animate-fade-in flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-[#D9A93B] shrink-0 mt-0.5" />
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

