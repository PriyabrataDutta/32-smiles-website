import React from 'react';
import { Trophy, UsersRound, Star } from 'lucide-react';

interface StatsStripProps {
  className?: string;
}

// Custom Tooth outline icon matching 32 Smiles dental identity
const ToothIcon = ({ className = 'h-6 w-6 text-[#9A7121]' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 3C4.5 3 3 5 3 8C3 11.5 4.5 15.5 6 19C6.8 20.8 8.2 21 9 19.5C9.8 18 10.5 15 12 15C13.5 15 14.2 18 15 19.5C15.8 21 17.2 20.8 18 19C19.5 15.5 21 11.5 21 8C21 5 19.5 3 17 3C15 3 13.5 4.2 12 4.2C10.5 4.2 9 3 7 3Z" />
  </svg>
);

// Trust statistics exactly matching the reference design and verified clinical milestones
const stats = [
  {
    icon: Trophy,
    isCustomIcon: false,
    value: '20+ Years',
    hasInlineStar: false,
    label: 'of Dental Excellence',
  },
  {
    icon: UsersRound,
    isCustomIcon: false,
    value: '10,000+',
    hasInlineStar: false,
    label: 'Happy Patients',
  },
  {
    icon: ToothIcon,
    isCustomIcon: true,
    value: '35,000+',
    hasInlineStar: false,
    label: 'Smiles Transformed',
  },
  {
    icon: Star,
    isCustomIcon: false,
    value: '4.9',
    hasInlineStar: true,
    label: 'Patient Rating',
  },
];

export const StatsStrip: React.FC<StatsStripProps> = ({ className = '' }) => {
  return (
    <section
      aria-label="32 Smiles clinic trust statistics and milestones"
      className={`relative bg-[#FAF4EA] px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 ${className}`}
    >
      <div className="mx-auto max-w-7xl rounded-3xl bg-white border border-[#E8DCC8] shadow-[0_8px_30px_rgba(43,36,32,0.06)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ icon: Icon, isCustomIcon, value, hasInlineStar, label }, index) => (
            <div
              key={label}
              className={[
                'relative flex flex-col items-center justify-center px-3 py-6 text-center sm:px-5 lg:px-8 lg:py-4',
                index % 2 === 1 ? 'max-md:border-l max-md:border-[#E8DCC8]' : '',
                index > 1 ? 'max-md:border-t max-md:border-[#E8DCC8]' : '',
                index > 0 ? 'md:border-l md:border-[#E8DCC8]' : '',
              ].join(' ')}
            >
              {/* Gold Outline Icon */}
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center text-[#9A7121]">
                {isCustomIcon ? (
                  <Icon className="h-7 w-7 text-[#9A7121]" />
                ) : (
                  <Icon aria-hidden="true" className="h-7 w-7 stroke-[1.8] text-[#9A7121]" />
                )}
              </div>

              {/* Bold Stat Number */}
              <div className="flex items-center justify-center gap-1.5 font-serif text-3xl font-bold leading-none tracking-tight text-[#2B2420] sm:text-4xl lg:text-[40px]">
                <span>{value}</span>
                {hasInlineStar && (
                  <span className="text-[#D9A93B] text-2xl sm:text-3xl lg:text-3xl leading-none">
                    ★
                  </span>
                )}
              </div>

              {/* Supporting Label */}
              <div className="mt-2.5 text-xs sm:text-[13.5px] font-medium leading-tight text-[#5C5147]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
