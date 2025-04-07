import React, { useState } from 'react';
import { Menu, X, Syringe } from 'lucide-react';
import i1 from "./i1.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
        <div className="flex items-center ">
  <img src={i1} alt="Logo" className="w-24 h-24 " />
</div>

          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
            <a href="#treatments" className="text-gray-700 hover:text-blue-600 px-3 py-2">Treatments</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
              <a href="#treatments" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Treatments</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;