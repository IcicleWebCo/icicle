import React from 'react';
import { Grid, ShoppingCart, Calendar, FileText, Code, ChevronDown, X } from 'lucide-react';
import { categories, priceRanges, industries, sortOptions } from '../../data/portfolioData';

interface PortfolioFiltersProps {
  selectedCategory: string;
  selectedPriceRange: string;
  selectedIndustry: string;
  selectedSort: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
  onIndustryChange: (industry: string) => void;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Grid,
  ShoppingCart,
  Calendar,
  FileText,
  Code
};

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({
  selectedCategory,
  selectedPriceRange,
  selectedIndustry,
  selectedSort,
  onCategoryChange,
  onPriceRangeChange,
  onIndustryChange,
  onSortChange,
  onClearFilters,
  hasActiveFilters
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex-1 w-full">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Grid;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-slate-800 border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
          {priceRanges.map((range) => {
            const isActive = selectedPriceRange === range.id;
            return (
              <button
                key={range.id}
                onClick={() => onPriceRangeChange(range.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-slate-800 border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                {range.label}
              </button>
            );
          })}
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <select
              value={selectedIndustry}
              onChange={(e) => onIndustryChange(e.target.value)}
              className="appearance-none bg-slate-800 border border-slate-600 text-slate-300 px-4 py-2 pr-10 rounded-lg font-medium hover:border-slate-500 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-slate-800 border border-slate-600 text-slate-300 px-4 py-2 pr-10 rounded-lg font-medium hover:border-slate-500 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center gap-3">
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
            Clear All Filters
          </button>
          <div className="text-sm text-slate-500">
            {selectedCategory !== 'all' && (
              <span className="mr-2 px-2 py-1 bg-slate-800 rounded text-slate-300">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            )}
            {selectedPriceRange !== 'all' && (
              <span className="mr-2 px-2 py-1 bg-slate-800 rounded text-slate-300">
                {priceRanges.find(r => r.id === selectedPriceRange)?.label}
              </span>
            )}
            {selectedIndustry !== 'All Industries' && (
              <span className="mr-2 px-2 py-1 bg-slate-800 rounded text-slate-300">
                {selectedIndustry}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioFilters;
