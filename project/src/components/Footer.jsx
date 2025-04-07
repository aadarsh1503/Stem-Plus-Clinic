import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import i1 from "./i1.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Clinic Name */}
          <div className="flex flex-col items-start space-y-">
            <a href='/'>
  <img src={i1} alt="Stem Plus Clinic Logo" className="h-32 w-32 object-contain" />
  </a>
  <p className="text-sm text-gray-300">Advanced Stem Cell Therapy in Tbilisi, Georgia</p>
</div>


          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <a href="tel:+995555367327" className="hover:text-blue-300 transition">+995 555 367 327</a>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <a href="tel:+966569199158" className="hover:text-blue-300 transition">+966 569 199 158</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:info@stemplus-clinic.com" className="hover:text-blue-300 transition">info@stemplus-clinic.com</a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Location</h3>
            <p className="flex items-center text-sm text-gray-300">
              <MapPin className="h-5 w-5 mr-2 text-blue-400" />
              Tbilisi, Georgia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-blue-300 transition">Home</a></li>
              <li><a href="#treatments" className="hover:text-blue-300 transition">Treatments</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stem Plus Clinic. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
