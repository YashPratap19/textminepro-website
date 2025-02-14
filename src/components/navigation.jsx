import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/00dtWXR/image-removebg-preview-14.png"
            alt="TextMine Pro Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-xl font-bold text-blue-500">TextMine Pro</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#features" className="text-gray-300 hover:text-white">Features</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#download" className="text-gray-300 hover:text-white">Download</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          <a href="#creators" className="text-gray-300 hover:text-white">Meet the Creators</a>
        </div>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-2 space-y-1">
            <a href="#home" className="block text-gray-300 hover:text-white">Home</a>
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#about" className="block text-gray-300 hover:text-white">About</a>
            <a href="#download" className="block text-gray-300 hover:text-white">Download</a>
            <a href="#contact" className="block text-gray-300 hover:text-white">Contact</a>
            <a href="#creators" className="block text-gray-300 hover:text-white">Meet the Creators</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
