import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionBadgeProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ text, children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FDF8EE] text-[#795900] border border-[#E8DCC8] shadow-xs ${className}`}
    >
      <Sparkles className="w-3.5 h-3.5 text-[#D9A93B]" />
      <span>{children || text}</span>
    </span>
  );
};

export default SectionBadge;
