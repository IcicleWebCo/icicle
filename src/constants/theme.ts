export const GRADIENTS = {
  primary: 'from-deep-blue-600 to-burnt-orange-500',
  primaryHover: 'from-deep-blue-700 to-burnt-orange-600',
  cyan: 'from-deep-blue-500 to-deep-blue-400',
  purple: 'from-deep-blue-600 to-burnt-orange-400',
  emerald: 'from-deep-blue-500 to-burnt-orange-500',
  orange: 'from-burnt-orange-500 to-burnt-orange-600',
  indigo: 'from-deep-blue-700 to-deep-blue-500',
  pink: 'from-burnt-orange-400 to-burnt-orange-500',
  social: 'from-deep-blue-500 to-burnt-orange-500',

  // Text gradients
  textPrimary: 'from-deep-blue-400 to-burnt-orange-400',
  textHero: 'from-deep-blue-400 via-deep-blue-300 to-burnt-orange-400',
  textHighlight: 'from-burnt-orange-400 to-burnt-orange-500',
} as const;

export const CARD_STYLES = {
  base: 'bg-carbon/50 backdrop-blur-sm border border-charcoal rounded-xl',
  hover: 'hover:bg-carbon/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-burnt-orange-500/10',
  full: 'bg-carbon/50 backdrop-blur-sm border border-charcoal rounded-xl hover:bg-carbon/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-burnt-orange-500/10',
} as const;

export const BUTTON_STYLES = {
  primary: 'bg-gradient-to-r from-deep-blue-600 to-burnt-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-deep-blue-700 hover:to-burnt-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-burnt-orange-500/30',
  secondary: 'bg-transparent border-2 border-deep-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-burnt-orange-500 hover:bg-carbon/50 transition-all duration-300',
} as const;

export const INPUT_STYLES = {
  base: 'w-full bg-carbon/50 border border-charcoal rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-burnt-orange-500 focus:ring-2 focus:ring-burnt-orange-500/20 transition-colors',
  withIcon: 'w-full bg-carbon/50 border border-charcoal rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-burnt-orange-500 focus:ring-2 focus:ring-burnt-orange-500/20 transition-colors',
} as const;
