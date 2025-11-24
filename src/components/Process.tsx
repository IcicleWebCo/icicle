import React, { useMemo } from 'react';
import { Search, Palette, Code2, TestTube, Rocket, Megaphone, Headphones } from 'lucide-react';
import ProcessStepCard from './shared/ProcessStepCard';
import GradientButton from './shared/GradientButton';
import { scrollToSection } from '../utils/navigation';
import { ProcessStep } from '../types';
import { GRADIENTS } from '../constants/theme';

const Process: React.FC = () => {
  const steps: ProcessStep[] = useMemo(() => [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Discovery",
      description: "We dive deep into your vision, goals, and requirements to create a strategic roadmap.",
      color: GRADIENTS.cyan
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design",
      description: "Our designers craft beautiful, user-centered interfaces that align with your brand.",
      color: GRADIENTS.purple
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Development",
      description: "Clean, efficient code built with modern technologies and best practices.",
      color: GRADIENTS.emerald
    },
    {
      icon: <TestTube className="h-6 w-6" />,
      title: "Testing",
      description: "Rigorous testing ensures your application works flawlessly across all devices.",
      color: GRADIENTS.orange
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Launch",
      description: "Seamless deployment with performance optimization and monitoring setup.",
      color: GRADIENTS.indigo
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Social Integration",
      description: "We align your social channels with your new web presence for a cohesive brand voice and maximum reach.",
      color: GRADIENTS.social
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Support",
      description: "Ongoing maintenance and support to keep your application running smoothly.",
      color: GRADIENTS.pink
    }
  ], []);

  return (
    <section id="process" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A proven methodology that ensures exceptional results through structured collaboration and attention to detail.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <ProcessStepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <GradientButton onClick={() => scrollToSection('contact')}>
            Let's Start Your Journey
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default Process;