import React, { useMemo } from 'react';
import { Code, Palette, ShoppingCart, Server, Shield, Headphones, Share2 } from 'lucide-react';
import ServiceCard from './shared/ServiceCard';
import GradientButton from './shared/GradientButton';
import { scrollToSection } from '../utils/navigation';
import { Service } from '../types';
import { GRADIENTS } from '../constants/theme';

const Services: React.FC = () => {
  const services: Service[] = useMemo(() => [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Small Business Web Design",
      description: "Custom website design tailored for small businesses. Mobile-responsive, user-friendly interfaces that convert visitors into customers.",
      color: GRADIENTS.cyan
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Web Development",
      description: "Full-stack web development using modern technologies. No money down options available to help your business get online affordably.",
      color: GRADIENTS.purple
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with inventory management, payment processing, and order fulfillment systems for online sales.",
      color: GRADIENTS.emerald
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "API Development Services",
      description: "Custom API development and backend systems to connect your applications, automate workflows, and integrate third-party services.",
      color: GRADIENTS.orange
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Custom Database Solutions",
      description: "Scalable database design and management for customer data, inventory tracking, and business analytics.",
      color: GRADIENTS.indigo
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Booking & Scheduling Systems",
      description: "Automated booking systems with calendar integration, payment processing, and customer management for service-based businesses.",
      color: GRADIENTS.pink
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Comprehensive social media solutions to elevate your brand:",
      color: GRADIENTS.social,
      isNew: true,
      bullets: [
        "Content Strategy",
        "Community Engagement",
        "Analytics & Reporting"
      ]
    }
  ], []);

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We provide comprehensive web development services tailored to bring your vision to life with precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <GradientButton onClick={() => scrollToSection('contact')}>
            Discuss Your Project
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
