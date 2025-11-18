import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';
import PDFModal from './PDFModal';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

  const projects = [

    {
      title: "Lord Smith Lamps",
      description: "Built an e-commerce site with user authentication, shopping cart, stripe payments, newsletter subscription, shipping management, and site analytics.",
      image: "./images/lordsmithhero.png",
      tech: ["React", "TypeScript", "Stripe", "Supabase", "Vite", "Tailwind"],
      gradient: "from-purple-500/20 to-pink-500/20",
      siteUrl: "https://www.lordsmithlamps.com"
    },
    {
      title: "Eddy's Pizza and Subs",
      description: "Built an informational single page site with a robust customizable menu system",
      image: "./images/eddyshero.png",
      tech: ["React", "TypeScript", "Supabase", "Vite", "Tailwind"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      siteUrl: "https://www.eddyspizzaandsubs.com"
    }
  ];

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore our latest work showcasing innovative solutions and cutting-edge technology implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => handleProjectClick(index)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} mix-blend-overlay`}></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                  <div className="flex space-x-4">
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Website</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div> 
              </div>

              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient.replace('/20', '/5')} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedProject !== null && (
        <PDFModal
          isOpen={selectedProject !== null}
          onClose={handleCloseModal}
          pdfUrl={projects[selectedProject].image}
          title={projects[selectedProject].title}
        />
      )}
    </section>
  );
};

export default Portfolio;

    {/*
    {
      title: "Auto Detailing Booking Funnel",
      description: "Built a robust online booking platform to automate appointment scheduling and payments for an auto detailing business.",
      image: "/images/Riverstone.png",
      tech: ["Squarespace", "Javascript", "Acuity Scheduling"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "RV Resort Booking Funnel",
      description: "Built a customer management platform from concept to launch, including booking, user authentication, subscription billing, and site analytics.",
      image: "/images/IronHorse.png",
      tech: ["React", "TypeScript", "Stripe", "Supabase", "Vite", "Tailwind", "Google Maps API"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Courier Delivery Service Platform",
      description: "Complete design and development of a modern e-commerce platform with integrated payment processing, scheduling, authentication, user account management, and inventory management.",
      image: "https://www.iciclewebco.com/images/HomesteadHaul.png",
      tech: ["React", "TypeScript", "Stripe", "Supabase", "Vite", "Tailwind"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      siteUrl: "https://www.homesteadhaul.com"
    }*/}
