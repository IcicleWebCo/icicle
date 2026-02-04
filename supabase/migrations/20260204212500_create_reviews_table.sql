/*
  # Create Google Business Reviews Table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `google_review_id` (text, unique) - Google's unique review identifier
      - `author_name` (text) - Name of the reviewer
      - `author_photo_url` (text) - URL to reviewer's profile photo
      - `rating` (integer) - Star rating (1-5)
      - `text` (text) - Review content
      - `time` (bigint) - Unix timestamp from Google
      - `relative_time_description` (text) - e.g., "2 weeks ago"
      - `created_at` (timestamptz) - When the review was added to our database
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `review_settings`
      - `id` (uuid, primary key)
      - `place_id` (text) - Google Business Place ID
      - `last_sync` (timestamptz) - Last time reviews were fetched
      - `total_reviews` (integer) - Total number of reviews
      - `average_rating` (decimal) - Average rating score
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Allow public read access to reviews (they're public on Google)
    - Restrict write access to authenticated users only (for admin functions)
  
  3. Indexes
    - Add index on rating for filtering
    - Add index on created_at for sorting
    - Add unique index on google_review_id to prevent duplicates
*/

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  google_review_id text UNIQUE NOT NULL,
  author_name text NOT NULL,
  author_photo_url text,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text text,
  time bigint NOT NULL,
  relative_time_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create review_settings table
CREATE TABLE IF NOT EXISTS review_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id text NOT NULL,
  last_sync timestamptz DEFAULT now(),
  total_reviews integer DEFAULT 0,
  average_rating decimal(3,2) DEFAULT 0.0,
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_time ON reviews(time DESC);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE review_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for reviews table
CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete reviews"
  ON reviews FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for review_settings table
CREATE POLICY "Anyone can view review settings"
  ON review_settings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert review settings"
  ON review_settings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update review settings"
  ON review_settings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);