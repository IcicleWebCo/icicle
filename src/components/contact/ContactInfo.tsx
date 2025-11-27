import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
        <p className="text-slate-400 leading-relaxed mb-8">
          We'd love to hear from you. Whether you have a project in mind, need technical advice,
          or just want to say hello, don't hesitate to reach out.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
            <p className="text-slate-400">support@iciclewebco.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
            <p className="text-slate-400">(509) 669-8539</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
            <p className="text-slate-400">Wenatchee, Washington</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-700">
        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61581756293240"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-white font-semibold">f</span>
          </a>
          <a
            href="https://www.instagram.com/iciclewebco/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-white font-semibold">ig</span>
          </a>
          <a
            href="https://www.linkedin.com/company/icicle-web-co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
            className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-white font-semibold">in</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
