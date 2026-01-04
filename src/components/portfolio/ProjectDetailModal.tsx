import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Calendar, Clock, DollarSign, Star, TrendingUp, Zap, Package, Smartphone, RefreshCw, Heart, ShoppingBag, Users, Truck, CheckCircle, UserCheck, Grid } from 'lucide-react';
import { PortfolioProject } from '../../types';
import { scrollToSection } from '../../utils/navigation';

interface ProjectDetailModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  TrendingUp,
  Zap,
  Package,
  Star,
  Smartphone,
  RefreshCw,
  Heart,
  ShoppingBag,
  Users,
  Truck,
  CheckCircle,
  UserCheck,
  Calendar,
  Clock,
  DollarSign,
  Grid
};

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleStartProject = () => {
    onClose();
    setTimeout(() => {
      scrollToSection('contact');
    }, 100);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-6xl my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-8 py-6 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
            <p className="text-blue-400 font-medium">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg ml-4"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden mb-4 bg-slate-800 group">
                <img
                  src={project.galleryImages[selectedImage].url}
                  alt={project.galleryImages[selectedImage].alt}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm">{project.galleryImages[selectedImage].caption}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {project.galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-blue-500 ring-2 ring-blue-500/50'
                        : 'border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
                <div className="text-sm text-slate-400 mb-2">Investment Range</div>
                <div className="text-3xl font-bold text-emerald-400 mb-4">{project.priceRange}</div>
                <button
                  onClick={handleStartProject}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Similar Project
                </button>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-xs text-slate-500">Completed</div>
                    <div className="font-semibold">{project.projectDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <div>
                    <div className="text-xs text-slate-500">Timeline</div>
                    <div className="font-semibold">{project.projectDuration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Grid className="h-5 w-5 text-cyan-400" />
                  <div>
                    <div className="text-xs text-slate-500">Industry</div>
                    <div className="font-semibold">{project.industry}</div>
                  </div>
                </div>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-slate-800 border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Website
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                The Challenge
              </h3>
              <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                The Solution
              </h3>
              <p className="text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {project.testimonial && (
            <div className="mb-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(project.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-slate-200 mb-6 italic leading-relaxed">"{project.testimonial.text}"</p>
              <div>
                <div className="font-semibold text-white">{project.testimonial.clientName}</div>
                <div className="text-sm text-slate-400">{project.testimonial.clientRole}</div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800 border border-slate-600 text-slate-200 text-sm rounded-lg font-medium hover:border-blue-500/50 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your project requirements and receive a custom quote.
            </p>
            <button
              onClick={handleStartProject}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
