import React from 'react';
// Importing icons from a library like FontAwesome for demonstration purposes
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight, FaInfoCircle, FaBriefcase, FaChartBar, FaLightbulb } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0072b1] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-10 lg:px-16">
        {/* Branding and Description */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img
            src="/logo.png"
            alt="Sandile Energies Logo"
            className="w-20 h-20 mb-2 animate-fade-in"
          />
          <h2 className="text-lg font-medium animate-slide-in-left">Sandile Energies</h2>
          <p className="text-base font-light text-gray-200">Redefining Energy Efficiency</p>
          <p className="text-base font-light text-gray-200">&copy; 2024 Sandile Energies. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center md:justify-start space-x-8">
          <div className="space-y-3">
            <h3 className="font-medium text-lg mb-2 animate-fade-in">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300">
                  <FaInfoCircle className="mr-2" /> About Us
                </a>
              </li>
              <li>
                <a href="/services" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300">
                  <FaArrowRight className="mr-2" /> Our Services
                </a>
              </li>
              <li>
                <a href="/analyze" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300">
                  <FaChartBar className="mr-2" /> Analyze Page
                </a>
              </li>
              <li>
                <a href="/recommendations" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300">
                  <FaLightbulb className="mr-2" /> Recommendations
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300">
                  <FaInfoCircle className="mr-2" /> Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300">
                  <FaBriefcase className="mr-2" /> Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-lg mb-2 animate-fade-in">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300"><FaArrowRight className="mr-2" /> Blog</a></li>
              <li><a href="/case-studies" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300"><FaArrowRight className="mr-2" /> Case Studies</a></li>
              <li><a href="/faq" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300"><FaInfoCircle className="mr-2" /> FAQs</a></li>
              <li><a href="/support" className="flex items-center text-sm hover:text-gray-400 transition-all duration-300"><FaArrowRight className="mr-2" /> Support</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="flex flex-col items-center md:items-start space-y-5">
          <div className="w-full">
            <h3 className="font-medium text-lg mb-2 animate-slide-in-right">Follow Us</h3>
            <div className="flex space-x-3 mb-5">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transform hover:scale-105 transition-transform duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transform hover:scale-105 transition-transform duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transform hover:scale-105 transition-transform duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transform hover:scale-105 transition-transform duration-300">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transform hover:scale-105 transition-transform duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-medium text-lg mb-2 animate-slide-in-right">Newsletter</h3>
            <form className="flex w-full max-w-sm space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full text-black rounded-md outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="bg-[#005bbb] hover:bg-white hover:text-[#005bbb] px-5 py-3 rounded-md text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
