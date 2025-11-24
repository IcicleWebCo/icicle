import React from 'react';
import { ValueCard as ValueCardType } from '../../types';
import { CARD_STYLES, GRADIENTS } from '../../constants/theme';

interface ValueCardProps {
  value: ValueCardType;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
  return (
    <div className={`group ${CARD_STYLES.full} p-6`}>
      <div className="flex items-center mb-4">
        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${GRADIENTS.primary} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white">
            {value.icon}
          </div>
        </div>
      </div>
      <h4 className="text-lg font-semibold text-white mb-3">
        {value.title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
        {value.description}
      </p>
    </div>
  );
};

export default ValueCard;
