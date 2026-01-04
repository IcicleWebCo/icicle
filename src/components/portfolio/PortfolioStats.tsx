import React from 'react';
import { Briefcase, Users, TrendingUp, Award } from 'lucide-react';

const PortfolioStats: React.FC = () => {
  const stats = [
    {
      icon: Briefcase,
      value: '50+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: '40+',
      label: 'Happy Clients',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Client Satisfaction',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Award,
      value: '100%',
      label: 'On-Time Delivery',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-800/80 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
            <stat.icon className="h-7 w-7 text-white" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
          <div className="text-sm text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioStats;
