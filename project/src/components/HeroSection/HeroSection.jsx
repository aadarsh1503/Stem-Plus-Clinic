import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css'; // For .blink animation

const HeroSection = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Medical facility"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          className="text-center text-white px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Stem Plus
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Advanced Stem Cell Treatments in Tbilisi, Georgia
          </motion.p>

          <motion.a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Contact Us
          </motion.a>

          <motion.div
            className="mt-10 outline outline-blue-400 text-white px-4 py-2 rounded-md font-semibold blink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Our website is under maintenance and will be ready soon. In the meantime, you can explore the list of diseases we treat.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
