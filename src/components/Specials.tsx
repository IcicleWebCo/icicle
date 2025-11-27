import React from 'react';
import { Calendar, Sparkles, Clock } from 'lucide-react';
import GradientButton from './shared/GradientButton';
import { scrollToSection } from '../utils/navigation';

const Specials: React.FC = () => {
  const handleContactClick = () => scrollToSection('contact');

  return (
    <section id="specials" className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full px-6 py-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-200 font-medium">Limited Time Offer</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            <span className="text-white">Start 2026 Strong:</span>
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              40% Off Your New Digital Presence
            </span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Thinking about upgrading your website or launching a new project for the new year? Now is the time to pull the trigger.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              To celebrate Black Friday and the holiday season, Icicle Web Co. is offering our biggest discount ever:{' '}
              <span className="font-bold text-emerald-400">40% OFF</span> all web development services.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              Whether you need a full site redesign, a custom web application, or a high-converting landing page, lock in your rate now and set your business up for success in Q1.
            </p>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white">The Details:</h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3"></div>
                  <span className="text-slate-300">
                    <span className="font-semibold text-white">40% off</span> total project cost
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3"></div>
                  <span className="text-slate-300">
                    Valid on proposals <span className="font-semibold text-white">signed before December 31st</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3"></div>
                  <span className="text-slate-300">
                    <span className="font-semibold text-white">Limited development slots</span> available for January starts
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 text-center">
              Don't let your remaining 2025 budget go to waste. Let's build something incredible together.
            </p>

            <div className="flex justify-center">
              <GradientButton
                onClick={handleContactClick}
                icon={Clock}
                className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
              >
                Claim Your 40% Discount
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
