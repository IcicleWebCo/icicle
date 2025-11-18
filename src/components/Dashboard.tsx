import React, { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { ArrowLeft, CreditCard, Calendar, CheckCircle, Settings, Crown, Zap } from 'lucide-react';
import { supabase, UserSubscription } from '../lib/supabase';

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
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
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
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
          {/* Subscription Card */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">Current Subscription</h2>
                {subscription?.status === 'active' && (
                  <span className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Active</span>
                  </span>
                )}
              </div>

              {subscription && (
                <div className="space-y-6">
                  {/* Plan Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600">
                      <div className="flex items-center space-x-3 mb-4">
                        <Crown className="h-6 w-6 text-purple-400" />
                        <h3 className="text-lg font-semibold text-white">Plan Details</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-300">
                          <span className="font-medium">Plan:</span> {subscription.plan_name}
                        </p>
                        <p className="text-slate-300">
                          <span className="font-medium">Cost:</span> ${subscription.plan_cost}/{subscription.billing_cycle}
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600">
                      <div className="flex items-center space-x-3 mb-4">
                        <Calendar className="h-6 w-6 text-blue-400" />
                        <h3 className="text-lg font-semibold text-white">Billing</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-300">
                          <span className="font-medium">Next billing:</span><br />
                          {new Date(subscription.next_billing_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      <span>Included Features</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {subscription.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-700">
                    <button
                      onClick={handleManageSubscription}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Manage Subscription</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Account Info */}
          <div className="space-y-6">
            {/* Account Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Account Details</span>
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Account Created</p>
                  <p className="text-white">{new Date(user.created_at).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Last Sign In</p>
                  <p className="text-white">{user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition-colors">
                  Update Profile
                </button>
                <button className="w-full text-left bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition-colors">
                  Billing History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;