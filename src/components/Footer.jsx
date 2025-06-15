import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 text-gray-700 py-10 px-6 mt-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Hireazy logo and tagline */}
        <div className="text-left">
          <h1 className="text-xl font-bold text-blue-600">Hireazy</h1> {/* Changed to blue */}
          <p className="text-sm text-gray-500 mt-1">
            The interviewing cloud for modern teams
          </p>
        </div>

        {/* Center: Company section */}
        <div className="md:col-span-1 flex flex-col items-center">
          <h2 className="font-semibold mb-2">Company</h2>
          <ul className="space-y-1 text-sm text-gray-600 text-center">
            <li><a href="#about" className="hover:text-black">About Us</a></li>
            <li><a href="#contact" className="hover:text-black">Contact Us</a></li>
            <li><a href="#interviewer" className="hover:text-black">Become an Interviewer</a></li>
            <li><a href="#products" className="hover:text-black">Products</a></li>
          </ul>
        </div>

        {/* Right: Empty or for future use */}
        <div></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
