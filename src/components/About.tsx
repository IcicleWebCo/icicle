import React, { useMemo } from 'react';
import { Award, Users, Lightbulb, Heart } from 'lucide-react';
import ValueCard from './shared/ValueCard';
import { ValueCard as ValueCardType } from '../types';

const About: React.FC = () => {
  const values: ValueCardType[] = useMemo(() => [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for perfection in every line of code and pixel of design."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Your success is our success. We work as partners, not just vendors."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "We love what we do, and it shows in every project we deliver."
    }
  ], []);

  return (
    <section id="about" className="py-20 bg-true-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Crafting Digital Excellence Since 2010
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                We are a passionate team of designers, developers, and strategists who believe 
                in the power of great web development to transform businesses and create 
                meaningful connections with users.
              </p>
              <p>
                Our mission is to bridge the gap between innovative ideas and exceptional 
                digital experiences. We combine technical expertise with creative vision to 
                deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
              <p>
                With a focus on modern technologies and user-centered design, we've helped 
                businesses across various industries establish their digital presence and 
                achieve their goals through powerful web applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-deep-blue-400 to-burnt-orange-400 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-burnt-orange-400 to-burnt-orange-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-deep-blue-400 to-deep-blue-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-slate-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;