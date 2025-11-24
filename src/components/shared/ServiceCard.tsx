import React from 'react';
import { Service } from '../../types';
import { CARD_STYLES } from '../../constants/theme';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div
      className={`group relative ${CARD_STYLES.base} p-8 ${CARD_STYLES.hover} ${
        service.isNew ? 'border-cyan-500/50 shadow-cyan-500/20 shadow-lg' : ''
      }`}
    >
      {service.isNew && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          NEW
        </div>
      )}

      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">
          {service.icon}
        </div>
      </div>

      <h3 className={`text-xl font-semibold mb-4 group-hover:text-white transition-colors ${
        service.isNew ? 'text-highlight-new' : 'text-white'
      }`}>
        {service.title}
      </h3>
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
        {service.description}
      </p>

      {service.bullets && (
        <ul className="mt-4 space-y-2">
          {service.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-center text-slate-300">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}

      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
    </div>
  );
};

export default ServiceCard;
