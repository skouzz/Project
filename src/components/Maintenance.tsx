import React from 'react';

const Maintenance = () => {
  const maintenanceServices = [
    {
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80",
      title: "Engine Service",
      description: "Complete engine diagnostics and maintenance"
    },
    {
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80",
      title: "Brake Systems",
      description: "Brake inspection and replacement services"
    },
    {
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80",
      title: "Transmission Care",
      description: "Transmission fluid service and repairs"
    }
  ];

  return (
    <section id="maintenance" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Maintenance Services</h2>
          <p className="text-xl text-gray-600">Keep your vehicle in perfect condition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {maintenanceServices.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maintenance;