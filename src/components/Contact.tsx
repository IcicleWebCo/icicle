import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const handleFormSubmit = async (formData: ContactFormData) => {
    const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'support@iciclewebco.com',
        from: formData.email,
        subject: formData.name,
        text: formData.message
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message');
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
