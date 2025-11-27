import React, { useCallback } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import GradientButton from './shared/GradientButton';
import { scrollToSection } from '../utils/navigation';
import { GRADIENTS } from '../constants/theme';

const Hero: React.FC = () => {
  const handleContactClick = useCallback(() => scrollToSection('contact'), []);
  const handlePortfolioClick = useCallback(() => scrollToSection('portfolio'), []);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-blue-400" />
          <span className="text-blue-200 font-medium">Transforming Ideas into Digital Realities</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Custom Web Development
          <span className={`bg-gradient-to-r ${GRADIENTS.textHero} bg-clip-text text-transparent block`}>
            For Growing Businesses
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Professional web development for small businesses nationwide. Custom websites, e-commerce solutions,
          APIs, and databases with flexible payment options, including no money down, to get your business online without upfront costs.
          <span className="block mt-4">
            <span className="text-highlight-new font-semibold">Now offering Social Media Management</span> to amplify your brand presence across all channels.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton onClick={handleContactClick} icon={ArrowRight} className="shadow-xl hover:shadow-2xl">
            Start Your Project
          </GradientButton>

          <GradientButton onClick={handlePortfolioClick} variant="secondary">
            View Our Work
          </GradientButton>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-slate-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;