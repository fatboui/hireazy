import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1.25rem' }}>
  Hireazy
</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#solutions" className="text-gray-600 hover:text-black">Home</a>
          <a href="#cloud" className="text-gray-600 hover:text-black">Resources</a>
          <a href="#resources" className="text-gray-600 hover:text-black">About Us</a>
          <a href="#company" className="text-gray-600 hover:text-black">Sign In</a>
        </nav>
        <a href="#demo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Request a Demo
        </a>
      </div>
    </header>
  );
};

export default Header;
