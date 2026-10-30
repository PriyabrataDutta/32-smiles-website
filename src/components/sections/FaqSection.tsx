import React from 'react';
import { FAQS_LIST } from '@/data/clinicData';
import { SectionBadge } from '@/components/common/SectionBadge';
import { FaqAccordionIsland } from './FaqAccordionIsland';

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

        <FaqAccordionIsland items={faqItems} />
      </div>
    </section>
  );
};

export default FaqSection;
