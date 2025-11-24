import React from 'react';
import { CheckCircle, Crown, Calendar, CreditCard, Zap } from 'lucide-react';
import { UserSubscription } from '../../lib/supabase';

interface SubscriptionCardProps {
  subscription: UserSubscription;
  onManageSubscription: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ subscription, onManageSubscription }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Current Subscription</h2>
        {subscription.status === 'active' && (
          <span className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">Active</span>
          </span>
        )}
      </div>

      <div className="space-y-6">
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

        <div className="pt-6 border-t border-slate-700">
          <button
            onClick={onManageSubscription}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
          >
            <CreditCard className="h-5 w-5" />
            <span>Manage Subscription</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
