import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/videos/bulb.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay with a hint of blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#005bbb66] to-black opacity-70"></div>

      {/* Custom Header */}
      <header className="absolute top-0 w-full flex justify-between items-center px-12 py-6 text-white z-10">
        {/* Logo */}
        <div
          className="font-bold text-2xl font-serif tracking-wider cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-[#005bbb]"
          onClick={() => window.location.reload()}
        >
          Sandile Energies
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 font-medium text-sm">
          {/* Services Navigation */}
          <button
            onClick={() => navigate('/services')}
            className="relative group transition-all duration-300 hover:text-[#005bbb]"
          >
            <span className="hover:underline">Services</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005bbb] transition-all duration-300 group-hover:w-full"></div>
          </button>

          {/* Contact Us Navigation */}
          <button
            onClick={() => navigate('/contact')}
            className="relative group transition-all duration-300 hover:text-[#005bbb]"
          >
            <span className="hover:underline">Contact Us</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005bbb] transition-all duration-300 group-hover:w-full"></div>
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl font-bold font-serif mb-4 animate-fade-in tracking-wide text-white drop-shadow-lg">
          Efficient Energy for a Sustainable Future
        </h1>
        <p className="text-lg lg:text-2xl mb-8 max-w-2xl font-semibold opacity-90 text-white drop-shadow-md">
          Helping you save energy and reduce costs through cutting-edge, blockchain-driven solutions.
        </p>
        <div className="flex space-x-6 mt-4">
          <button
            onClick={() => navigate('/icp-login')}
            className="bg-transparent border-2 border-white text-white px-8 py-3 transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-black"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/learn-more')}
            className="bg-[#005bbb] text-white px-8 py-3 border-2 border-[#005bbb] transition-transform duration-300 hover:scale-110 hover:bg-transparent hover:text-[#005bbb]"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
