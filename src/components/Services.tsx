import React from 'react';
import { Settings, Wrench, Car, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Diagnostic Services",
      description: "State-of-the-art diagnostic equipment to identify and solve issues with precision"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Maintenance",
      description: "Regular maintenance services to keep your vehicle performing at its best"
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Performance Upgrades",
      description: "Custom performance enhancements and upgrades for optimal driving experience"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Quality Parts",
      description: "Genuine OEM and premium aftermarket parts for all luxury vehicles"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive care for your luxury vehicle</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;