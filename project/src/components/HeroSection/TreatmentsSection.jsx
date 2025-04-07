import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHeartbeat, FaBrain, FaLeaf, FaWheelchair, FaLungs, FaUserShield,
} from 'react-icons/fa';
import { GiSpinalCoil, GiLiver, GiJoint } from 'react-icons/gi';
import { MdOutlineBloodtype } from 'react-icons/md';
import { PiBrainBold } from 'react-icons/pi';
import { BsHourglassSplit } from 'react-icons/bs';

const treatments = [
  { name: "Diabetes Management", icon: <FaHeartbeat /> },
  { name: "Autism Therapy", icon: <FaBrain /> },
  { name: "Sexual Wellness", icon: <FaUserShield /> },
  { name: "Multiple Sclerosis", icon: <GiSpinalCoil /> },
  { name: "Cardiovascular Care", icon: <FaHeartbeat /> },
  { name: "Anti-Aging Solutions", icon: <BsHourglassSplit /> },
  { name: "Chronic Fatigue Syndrome", icon: <FaLeaf /> },
  { name: "ALS Support", icon: <FaWheelchair /> },
  { name: "Liver Conditions", icon: <GiLiver /> },
  { name: "Stroke Recovery", icon: <PiBrainBold /> },
  { name: "Sickle Cell Anemia", icon: <MdOutlineBloodtype /> },
  { name: "Spinal Cord Injuries", icon: <GiSpinalCoil /> },
  { name: "Parkinson's Disease", icon: <FaBrain /> },
  { name: "Alzheimer’s Treatment", icon: <PiBrainBold /> },
  { name: "Joint Disorders", icon: <GiJoint /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Treatments
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-300 hover:border-blue-500"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl text-blue-500">
                  {treatment.icon}
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-700">{treatment.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
