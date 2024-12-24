import React from 'react';
import { Menu, X, Car, Settings, Tool, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-white" />
            <span className="ml-2 text-white text-xl font-bold">AutoElite</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Services</a>
              <a href="#maintenance" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Maintenance</a>
              <a href="#parts" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Parts</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Services</a>
            <a href="#maintenance" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Maintenance</a>
            <a href="#parts" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Parts</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;