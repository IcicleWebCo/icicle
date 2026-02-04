import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import { ContactFormData } from '../types';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const handleFormSubmit = async (formData: ContactFormData) => {
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

    if (error) {
      throw new Error(error.message || 'Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to turn your vision into reality? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm onSubmit={handleFormSubmit} />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
