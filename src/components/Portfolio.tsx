import React, { useState, useMemo, useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/navigation';
import { portfolioProjects, priceRanges } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import ProjectCard from './portfolio/ProjectCard';
import ProjectDetailModal from './portfolio/ProjectDetailModal';
import PortfolioFilters from './portfolio/PortfolioFilters';
import EmptyState from './portfolio/EmptyState';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const parsePriceRange = (priceRange: string): number => {
    const numbers = priceRange.match(/\d+/g);
    if (!numbers) return 0;
    const minPrice = parseInt(numbers[0]);
    return minPrice * 1000;
  };

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = [...portfolioProjects];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range) {
        filtered = filtered.filter(project => {
          const projectPrice = parsePriceRange(project.priceRange);
          return projectPrice >= range.min && projectPrice < range.max;
        });
      }
    }

    if (selectedIndustry !== 'All Industries') {
      filtered = filtered.filter(project => project.industry === selectedIndustry);
    }

    filtered.sort((a, b) => {
      switch (selectedSort) {
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        case 'newest':
          return parseInt(b.projectDate) - parseInt(a.projectDate);
        case 'price-low':
          return parsePriceRange(a.priceRange) - parsePriceRange(b.priceRange);
        case 'price-high':
          return parsePriceRange(b.priceRange) - parsePriceRange(a.priceRange);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedIndustry, selectedSort]);

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedPriceRange !== 'all' ||
    selectedIndustry !== 'All Industries';

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedIndustry('All Industries');
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore our collection of successful projects, from e-commerce platforms to custom web applications. Each project demonstrates our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <PortfolioFilters
            selectedCategory={selectedCategory}
            selectedPriceRange={selectedPriceRange}
            selectedIndustry={selectedIndustry}
            selectedSort={selectedSort}
            onCategoryChange={setSelectedCategory}
            onPriceRangeChange={setSelectedPriceRange}
            onIndustryChange={setSelectedIndustry}
            onSortChange={setSelectedSort}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {filteredAndSortedProjects.length === 0 ? (
          <EmptyState onClearFilters={handleClearFilters} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredAndSortedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <ProjectCard
                    project={project}
                    onViewDetails={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project Today
              </button>
            </div>
          </>
        )}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
