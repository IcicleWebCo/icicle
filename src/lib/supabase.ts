import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserSubscription {
  id: string;
  user_id: string;
  plan_name: string;
  plan_cost: number;
  billing_cycle: 'monthly' | 'yearly';
  next_billing_date: string;
  features: string[];
  status: 'active' | 'cancelled' | 'past_due';
  created_at: string;
}