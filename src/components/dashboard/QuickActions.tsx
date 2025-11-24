import React from 'react';

const QuickActions: React.FC = () => {
  return (
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
  );
};

export default QuickActions;
