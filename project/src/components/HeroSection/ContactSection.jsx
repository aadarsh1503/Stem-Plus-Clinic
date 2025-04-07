import React from 'react';
import { Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Georgia Office */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <Phone className="h-7 w-7 text-blue-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Georgia Office</p>
                <p className="text-gray-600">
                  <a
                    href="https://wa.me/995555367327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    WhatsApp: +995 555 367 327
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+995555367327" className="hover:underline">
                    Call Now
                  </a>
                </p>
              </div>
            </div>

            {/* Saudi Arabia Office */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <Phone className="h-7 w-7 text-blue-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Saudi Arabia Office</p>
                <p className="text-gray-600">
                  <a
                    href="https://wa.me/966569199158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    WhatsApp: +966 569 199 158
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+966569199158" className="hover:underline">
                    Call Now
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Contact us"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
