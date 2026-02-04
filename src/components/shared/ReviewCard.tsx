import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../../types';
import { CARD_STYLES } from '../../constants/theme';

interface ReviewCardProps {
  review: Review;
  featured?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, featured = false }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 transition-all duration-300 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-slate-700 text-slate-700'
            }`}
          />
        ))}
      </div>
    );
  };

  const cardClasses = featured
    ? `${CARD_STYLES.base} ${CARD_STYLES.hover} p-8 relative overflow-hidden`
    : `${CARD_STYLES.base} ${CARD_STYLES.hover} p-6 relative overflow-hidden h-full`;

  const initials = review.author_name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={cardClasses}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              {review.author_photo_url ? (
                <img
                  src={review.author_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500/30"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold border-2 border-blue-500/30">
                  {initials}
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg">{review.author_name}</h4>
              <p className="text-slate-400 text-sm">{review.relative_time_description}</p>
            </div>
          </div>

          <Quote className="h-8 w-8 text-blue-500/20" />
        </div>

        <div className="mb-4">
          {renderStars(review.rating)}
        </div>

        {review.text && (
          <p className={`text-slate-300 leading-relaxed ${featured ? 'text-lg' : 'text-base'}`}>
            {review.text}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ReviewCard;
