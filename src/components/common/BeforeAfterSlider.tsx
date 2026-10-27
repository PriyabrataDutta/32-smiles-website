'use client';

import React, { useState, useRef } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Before Treatment',
  afterAlt = 'After Treatment',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();

    let clientX = 0;
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const position = Math.max(0, Math.min(100, ((clientX - left) / width) * 100));
    setSliderPosition(position);
  };

  return (
    <div
      className={`relative w-full h-[300px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-[#E8DCC8] ${className}`}
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* After Label */}
      <div className="absolute top-4 right-4 bg-[#2B2420]/80 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider z-10 shadow-lg border border-white/20">
        AFTER
      </div>

      {/* Before Image (Clipped) */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        draggable="false"
      />

      {/* Before Label */}
      <div className="absolute top-4 left-4 bg-[#2B2420]/80 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider z-10 shadow-lg pointer-events-none border border-white/20">
        BEFORE
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center transform -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#D9A93B]">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-[#D9A93B] rounded-full"></div>
            <div className="w-1 h-3 bg-[#D9A93B] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
