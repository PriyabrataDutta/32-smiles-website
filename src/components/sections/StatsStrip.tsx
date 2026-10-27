import React from 'react';
import { History, Award, Smile, Star, ShieldCheck, MapPin } from 'lucide-react';

interface StatsStripProps {
  className?: string;
}

export const StatsStrip: React.FC<StatsStripProps> = ({ className = '' }) => {
  const stats = [
    {
      icon: History,
      value: '20+ Yrs',
      label: 'Clinical Legacy',
      sublabel: 'Established 2005 in Bangalore',
    },
    {
      icon: Award,
      value: '10,000+',
      label: 'Implants Placed',
      sublabel: '99.2% Proven Success Rate',
    },
    {
      icon: Smile,
      value: '15,000+',
      label: 'Smile Makeovers',
      sublabel: 'Invisalign & Digital Veneers',
    },
    {
      icon: Star,
      value: '4.9 ★',
      label: 'Google & Practo',
      sublabel: '15,200+ Patient Reviews',
    },
  ];

  return (
    <section className={`py-12 bg-white border-b border-[#E8DCC8] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 rounded-3xl bg-[#FAF4EA] border border-[#E8DCC8] hover:border-[#D9A93B] card-shadow-hover transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FDF8EE] border border-[#E8DCC8] flex items-center justify-center text-[#795900] mb-3 shadow-xs">
                  <Icon className="w-6 h-6 text-[#795900]" />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2420]">
                  {item.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#795900] mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#807663] mt-0.5">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
