import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const useReviews = () => {
  const [hasReviews, setHasReviews] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkReviews();
  }, []);

  const checkReviews = async () => {
    try {
      const { count, error } = await supabase
        .from('reviews')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;
      setHasReviews((count ?? 0) > 0);
    } catch (error) {
      console.error('Error checking reviews:', error);
      setHasReviews(false);
    } finally {
      setLoading(false);
    }
  };

  return { hasReviews, loading, refreshCheck: checkReviews };
};
