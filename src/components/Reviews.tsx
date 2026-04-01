import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, TrendingUp, Users, RefreshCw } from 'lucide-react';
import ReviewCard from './shared/ReviewCard';
import GradientButton from './shared/GradientButton';
import LoadingSpinner from './shared/LoadingSpinner';
import { Review, ReviewSettings } from '../types';
import { supabase } from '../lib/supabase';
import { GRADIENTS } from '../constants/theme';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [settings, setSettings] = useState<ReviewSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    fetchReviews();
    fetchSettings();
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      const interval = setInterval(() => {
        setFeaturedIndex((prev) => (prev + 1) % Math.min(reviews.length, 3));
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [reviews]);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('time', { ascending: false })
        .limit(12);

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('review_settings')
        .select('*')
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      setSettings(data);
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const response = await fetch(`${supabaseUrl}/functions/v1/sync-google-reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
      });

      if (response.ok) {
        await fetchReviews();
        await fetchSettings();
      }
    } catch (error) {
      console.error('Error syncing reviews:', error);
    } finally {
      setSyncing(false);
    }
  };

  const renderStars = (rating: number, size: string = 'h-6 w-6') => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`${size} transition-all duration-300 ${
              index < Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : index < rating
                ? 'fill-yellow-400/50 text-yellow-400/50'
                : 'fill-charcoal text-charcoal'
            }`}
          />
        ))}
      </div>
    );
  };

  const googleBusinessUrl = settings?.place_id
    ? `https://search.google.com/local/reviews?placeid=${settings.place_id}`
    : 'https://www.google.com/maps';

  if (loading) {
    return (
      <section id="reviews" className="py-20 bg-true-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
      <section id="reviews" className="py-20 bg-true-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Reviews
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Reviews will appear here once they are synced from Google Business
            </p>
            <GradientButton onClick={handleSync} disabled={syncing}>
              {syncing ? (
                <>
                  <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                  Syncing Reviews...
                </>
              ) : (
                <>
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Sync Reviews Now
                </>
              )}
            </GradientButton>
          </div>
        </div>
      </section>
    );
  }

  const featuredReviews = reviews.filter(r => r.rating === 5).slice(0, 3);
  const displayedFeatured = featuredReviews[featuredIndex] || reviews[0];
  const gridReviews = reviews.slice(0, 6);

  return (
    <section id="reviews" className="py-20 bg-true-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-true-black via-true-black/50 to-true-black"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-deep-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-blue-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Real experiences from businesses we've helped transform their online presence
          </p>

          {settings && (
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="bg-carbon/50 backdrop-blur-sm border border-charcoal rounded-xl px-8 py-4">
                <div className="flex items-center gap-3 mb-2">
                  {renderStars(settings.average_rating)}
                  <span className="text-3xl font-bold text-white">
                    {settings.average_rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">Average Rating</p>
              </div>

              <div className="bg-carbon/50 backdrop-blur-sm border border-charcoal rounded-xl px-8 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-deep-blue-400" />
                  <span className="text-3xl font-bold text-white">
                    {settings.total_reviews}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">Total Reviews</p>
              </div>

              <div className="bg-carbon/50 backdrop-blur-sm border border-charcoal rounded-xl px-8 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-8 w-8 text-deep-blue-400" />
                  <span className="text-3xl font-bold text-white">
                    {reviews.filter(r => r.rating === 5).length}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">5-Star Reviews</p>
              </div>
            </div>
          )}
        </div>

        {featuredReviews.length > 0 && (
          <div className="mb-12 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <span className={`inline-block px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${GRADIENTS.primary}`}>
                Featured Review
              </span>
            </div>
            <div className="transition-all duration-700 ease-in-out">
              <ReviewCard review={displayedFeatured} featured />
            </div>
            {featuredReviews.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {featuredReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setFeaturedIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === featuredIndex
                        ? 'bg-deep-blue-500 w-8'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`View featured review ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gridReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
          <GradientButton
            onClick={() => window.open(googleBusinessUrl, '_blank')}
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            View All on Google
          </GradientButton>

          <button
            onClick={handleSync}
            disabled={syncing}
            className="bg-transparent border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-slate-400 hover:bg-carbon/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <RefreshCw className={`h-5 w-5 mr-2 ${syncing ? 'animate-spin' : ''}`} />
            {syncing ? 'Syncing...' : 'Refresh Reviews'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
