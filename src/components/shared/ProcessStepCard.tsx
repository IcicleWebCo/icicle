import React from 'react';
import { ProcessStep } from '../../types';
import { CARD_STYLES } from '../../constants/theme';

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, index }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      <div className="w-full lg:w-5/12">
        <div className={`group ${CARD_STYLES.full} p-8`}>
          <div className="flex items-center mb-4">
            <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
              <div className="text-white">
                {step.icon}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-slate-500">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
            {step.description}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-2/12 justify-center">
        <div className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full border-4 border-slate-800 shadow-lg`}></div>
      </div>

      <div className="hidden lg:block w-5/12"></div>
    </div>
  );
};

export default ProcessStepCard;
