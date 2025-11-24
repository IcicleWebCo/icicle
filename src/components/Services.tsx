import React from 'react';
import { Code, Palette, ShoppingCart, Server, Shield, Headphones, Share2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Small Business Web Design",
      description: "Custom website design tailored for small businesses. Mobile-responsive, user-friendly interfaces that convert visitors into customers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Web Development",
      description: "Full-stack web development using modern technologies. No money down options available to help your business get online affordably.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with inventory management, payment processing, and order fulfillment systems for online sales.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "API Development Services",
      description: "Custom API development and backend systems to connect your applications, automate workflows, and integrate third-party services.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Custom Database Solutions",
      description: "Scalable database design and management for customer data, inventory tracking, and business analytics.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Booking & Scheduling Systems",
      description: "Automated booking systems with calendar integration, payment processing, and customer management for service-based businesses.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Comprehensive social media solutions to elevate your brand:",
      color: "from-cyan-500 to-blue-500",
      isNew: true,
      bullets: [
        "Content Strategy",
        "Community Engagement",
        "Analytics & Reporting"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We provide comprehensive web development services tailored to bring your vision to life with precision and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900/50 backdrop-blur-sm border rounded-xl p-8 hover:bg-slate-900/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                service.isNew ? 'border-cyan-500/50 shadow-cyan-500/20 shadow-lg' : 'border-slate-700'
              }`}
            >
              {/* New Badge */}
              {service.isNew && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  NEW
                </div>
              )}

              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-xl font-semibold mb-4 group-hover:text-white transition-colors ${
                service.isNew ? 'text-highlight-new' : 'text-white'
              }`}>
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>

              {/* Bullets for new service */}
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

              {/* Hover gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;