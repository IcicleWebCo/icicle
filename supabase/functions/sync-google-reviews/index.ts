import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text?: string;
  time: number;
}

interface GooglePlaceDetailsResponse {
  result?: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
  };
  status: string;
  error_message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const googleApiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
    const placeId = Deno.env.get("GOOGLE_PLACE_ID");

    if (!googleApiKey || !placeId) {
      return new Response(
        JSON.stringify({
          error: "Google Places API key or Place ID not configured",
          message: "Please set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID environment variables"
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const googlePlacesUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${googleApiKey}`;

    const googleResponse = await fetch(googlePlacesUrl);
    const googleData: GooglePlaceDetailsResponse = await googleResponse.json();

    if (googleData.status !== "OK" || !googleData.result?.reviews) {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch reviews from Google",
          status: googleData.status,
          message: googleData.error_message || "No reviews found"
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const reviews = googleData.result.reviews;
    const averageRating = googleData.result.rating || 0;
    const totalReviews = googleData.result.user_ratings_total || 0;

    let insertedCount = 0;
    let updatedCount = 0;

    for (const review of reviews) {
      const googleReviewId = `${placeId}_${review.author_name}_${review.time}`;

      const { data: existingReview } = await supabase
        .from("reviews")
        .select("id")
        .eq("google_review_id", googleReviewId)
        .maybeSingle();

      const reviewData = {
        google_review_id: googleReviewId,
        author_name: review.author_name,
        author_photo_url: review.profile_photo_url || null,
        rating: review.rating,
        text: review.text || null,
        time: review.time,
        relative_time_description: review.relative_time_description,
        updated_at: new Date().toISOString(),
      };

      if (existingReview) {
        await supabase
          .from("reviews")
          .update(reviewData)
          .eq("id", existingReview.id);
        updatedCount++;
      } else {
        await supabase
          .from("reviews")
          .insert(reviewData);
        insertedCount++;
      }
    }

    const { data: existingSettings } = await supabase
      .from("review_settings")
      .select("id")
      .limit(1)
      .maybeSingle();

    const settingsData = {
      place_id: placeId,
      last_sync: new Date().toISOString(),
      total_reviews: totalReviews,
      average_rating: averageRating,
      updated_at: new Date().toISOString(),
    };

    if (existingSettings) {
      await supabase
        .from("review_settings")
        .update(settingsData)
        .eq("id", existingSettings.id);
    } else {
      await supabase
        .from("review_settings")
        .insert(settingsData);
    }

    return new Response(
      JSON.stringify({
        success: true,
        inserted: insertedCount,
        updated: updatedCount,
        total: reviews.length,
        averageRating,
        totalReviews,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error syncing reviews:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
