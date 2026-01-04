import React from 'react';
import { ExternalLink, Clock, Code } from 'lucide-react';
import { PortfolioProject } from '../../types';

interface ProjectCardProps {
  project: PortfolioProject;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const handleVisitSite = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          FEATURED
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} mix-blend-overlay`}></div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-blue-400 font-medium">{project.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-lg px-4 py-2">
            <div className="text-xs text-slate-400 mb-1">Investment Range</div>
            <div className="text-lg font-bold text-emerald-400">{project.priceRange}</div>
          </div>
          <button
            onClick={onViewDetails}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <span>View Details</span>
          </button>
          <button
            onClick={handleVisitSite}
            className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold transition-all border border-slate-600"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Site</span>
          </button>
        </div>

        <p className="text-slate-400 mb-4 leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors">
          {project.challenge.substring(0, 120)}...
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{project.projectDuration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Code className="h-4 w-4" />
            <span>{project.techStack.length} Technologies</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full border border-slate-600/50 font-medium">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
