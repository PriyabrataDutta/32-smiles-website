import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxStars = 5,
  size = 'md',
  showNumber = false,
}) => {
  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="inline-flex items-center gap-1">
      <div className="flex items-center text-[#D9A93B]">
        {Array.from({ length: maxStars }).map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${
              i < Math.floor(rating)
                ? 'fill-[#D9A93B] text-[#D9A93B]'
                : i < rating
                ? 'fill-[#D9A93B]/50 text-[#D9A93B]'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showNumber && (
        <span className="text-xs font-bold text-[#2B2420] ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
