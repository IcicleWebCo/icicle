export const GRADIENTS = {
  primary: 'from-blue-600 to-purple-600',
  primaryHover: 'from-blue-700 to-purple-700',
  cyan: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  emerald: 'from-emerald-500 to-teal-500',
  orange: 'from-orange-500 to-red-500',
  indigo: 'from-indigo-500 to-blue-500',
  pink: 'from-pink-500 to-rose-500',
  social: 'from-cyan-500 to-blue-500',

  // Text gradients
  textPrimary: 'from-blue-400 to-purple-400',
  textHero: 'from-blue-400 via-purple-400 to-emerald-400',
  textHighlight: 'from-cyan-400 to-blue-500',
} as const;

export const CARD_STYLES = {
  base: 'bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl',
  hover: 'hover:bg-slate-900/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl',
  full: 'bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-900/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl',
} as const;

export const BUTTON_STYLES = {
  primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105',
  secondary: 'bg-transparent border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-800/50 transition-all duration-300',
} as const;

export const INPUT_STYLES = {
  base: 'w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors',
  withIcon: 'w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors',
} as const;
