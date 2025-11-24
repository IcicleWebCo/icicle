import React, { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { ArrowLeft } from 'lucide-react';
import { supabase, UserSubscription } from '../lib/supabase';
import SubscriptionCard from './dashboard/SubscriptionCard';
import AccountInfo from './dashboard/AccountInfo';
import QuickActions from './dashboard/QuickActions';
import LoadingSpinner from './shared/LoadingSpinner';
import { GRADIENTS } from '../constants/theme';

interface DashboardProps {
  user: User;
  onSignOut: () => void;
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onSignOut, onBack }) => {
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user subscription data
    const fetchSubscription = async () => {
      setLoading(true);
      // Simulated data - in a real app, this would come from your database
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockSubscription: UserSubscription = {
        id: '1',
        user_id: user.id,
        plan_name: 'Professional',
        plan_cost: 49.99,
        billing_cycle: 'monthly',
        next_billing_date: '2024-02-15',
        features: [
          'Managed Hosting & SSL',
          'Regular Backups',
          'Priority Bug Fixes',
          'Custom Integrations',
          'Search Engine Optimization',
          'Performance Optimization',
          'Google Business Setup',
          'Software Updates',
          '24/7 Support'
        ],
        status: 'active',
        created_at: '2024-01-15'
      };
      
      setSubscription(mockSubscription);
      setLoading(false);
    };

    fetchSubscription();
  }, [user.id]);

  const handleManageSubscription = () => {
    // In a real app, this would redirect to Stripe customer portal
    alert('This would redirect to Stripe customer portal for subscription management.');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <LoadingSpinner size="md" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="text-slate-400 hover:text-white transition-colors p-2"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <span className={`text-2xl font-bold bg-gradient-to-r ${GRADIENTS.textPrimary} bg-clip-text text-transparent`}>
                icicle web co.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-300">Welcome, {user.user_metadata?.name || user.email}</span>
              <button
                onClick={onSignOut}
                className="bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Account Dashboard</h1>
          <p className="text-slate-400">Manage your subscription and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {subscription && (
              <SubscriptionCard
                subscription={subscription}
                onManageSubscription={handleManageSubscription}
              />
            )}
          </div>

          <div className="space-y-6">
            <AccountInfo user={user} />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;