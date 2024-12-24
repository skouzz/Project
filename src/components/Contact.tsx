import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-400">Get in touch with our expert team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <Phone className="h-8 w-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <Mail className="h-8 w-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400">service@autoelite.com</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <MapPin className="h-8 w-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400">123 Luxury Lane<br />Beverly Hills, CA 90210</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <Clock className="h-8 w-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Hours</h3>
            <p className="text-gray-400">Mon-Fri: 8am - 6pm<br />Sat: 9am - 4pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;