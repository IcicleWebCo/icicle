import React from 'react';
import { Search, Palette, Code2, TestTube, Rocket, Megaphone, Headphones } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Discovery",
      description: "We dive deep into your vision, goals, and requirements to create a strategic roadmap.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design",
      description: "Our designers craft beautiful, user-centered interfaces that align with your brand.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Development",
      description: "Clean, efficient code built with modern technologies and best practices.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <TestTube className="h-6 w-6" />,
      title: "Testing",
      description: "Rigorous testing ensures your application works flawlessly across all devices.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Launch",
      description: "Seamless deployment with performance optimization and monitoring setup.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Social Integration",
      description: "We align your social channels with your new web presence for a cohesive brand voice and maximum reach.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Support",
      description: "Ongoing maintenance and support to keep your application running smoothly.",
      color: "from-pink-500 to-rose-500"
    }
  ];

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

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12">
                  <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-900/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
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

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full border-4 border-slate-800 shadow-lg`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Let's Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;