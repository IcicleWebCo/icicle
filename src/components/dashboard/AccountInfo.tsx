import React from 'react';
import { Settings } from 'lucide-react';
import { User } from '@supabase/supabase-js';

interface AccountInfoProps {
  user: User;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ user }) => {
  return (
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
  );
};

export default AccountInfo;
