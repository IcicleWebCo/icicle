import React from 'react';
import { Search } from 'lucide-react';

interface EmptyStateProps {
  onClearFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onClearFilters }) => {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800 mb-6">
        <Search className="h-10 w-10 text-slate-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">No Projects Found</h3>
      <p className="text-slate-400 mb-6 max-w-md mx-auto">
        We couldn't find any projects matching your current filters. Try adjusting your search criteria.
      </p>
      <button
        onClick={onClearFilters}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default EmptyState;
