import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="text-center px-4 pt-20 pb-12 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            className="absolute top-10 left-10 w-32 h-20 bg-blue-100 rounded-full opacity-30 blur-xl"
            animate={{ x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 right-10 w-40 h-24 bg-blue-200 rounded-full opacity-20 blur-2xl"
            animate={{ x: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-1/3 w-48 h-28 bg-blue-100 rounded-full opacity-30 blur-xl"
            animate={{ x: [0, 25, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block bg-white shadow-lg px-8 py-6 rounded-3xl border border-gray-100"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            The Interviewing Cloud
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            The interviewing cloud for modern teams
          </p>
          <a
            href="#demo"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Request a Demo
          </a>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">Solutions</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-8 text-center">
          {[
            { title: 'Hiring', icon: '💼' },
            { title: 'Interviewing', icon: '🌟' },
          ].map(({ title, icon }, index) => (
            <motion.div
              key={title}
              className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl p-8 hover:shadow-md transition flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="font-semibold text-gray-700 text-xl">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
