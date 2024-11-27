import React from 'react';
import { FaSearch, FaComments, FaBolt, FaShieldAlt, FaCogs, FaLeaf } from 'react-icons/fa';

const ServicesOverview = () => {
  return (
    <div className="services-overview-section py-16 bg-gray-100 flex justify-center">
      <div className="text-center max-w-6xl w-full">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h2>
        <p className="text-base text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover how our energy solutions leverage the power of the ICP blockchain to help you save energy, reduce costs, and make informed, secure, and efficient decisions.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-16 mt-8 mx-auto">
          {/* Service 1: Energy Audit */}
          <div className="p-8 bg-white shadow-md rounded-md border transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="icon mb-6 text-blue-500">
              <FaSearch className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Energy Audit</h3>
            <p className="text-sm text-gray-600">
              Utilize blockchain-secured energy audits to analyze your energy usage, identify inefficiencies, and recommend solutions for reducing energy consumption.
            </p>
          </div>

          {/* Service 2: Consulting Services */}
          <div className="p-8 bg-white shadow-md rounded-md border transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="icon mb-6 text-green-500">
              <FaComments className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Consulting Services</h3>
            <p className="text-sm text-gray-600">
              Get personalized energy consulting supported by ICP’s blockchain to ensure secure, transparent, and efficient advice for your business or household.
            </p>
          </div>

          {/* Service 3: Smart Energy Solutions */}
          <div className="p-8 bg-white shadow-md rounded-md border transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="icon mb-6 text-yellow-500">
              <FaBolt className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Smart Energy Solutions</h3>
            <p className="text-sm text-gray-600">
              Deploy blockchain-powered IoT solutions to monitor and optimize your energy use effectively, offering real-time insights and control at your fingertips.
            </p>
          </div>

          {/* Service 4: Data Security & Privacy */}
          <div className="p-8 bg-white shadow-md rounded-md border transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="icon mb-6 text-purple-500">
              <FaShieldAlt className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Data Security & Privacy</h3>
            <p className="text-sm text-gray-600">
              Benefit from the security of ICP blockchain, which ensures your energy data is encrypted, secure, and handled with the highest level of privacy.
            </p>
          </div>

          {/* Service 5: Energy Optimization */}
          <div className="p-8 bg-white shadow-md rounded-md border transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="icon mb-6 text-red-500">
              <FaCogs className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Energy Optimization</h3>
            <p className="text-sm text-gray-600">
              Leverage AI-powered models and blockchain technology to optimize energy use and minimize wastage across all aspects of your household or business.
            </p>
          </div>

          {/* Service 6: Sustainable Solutions */}
          <div className="p-8 bg-white shadow-md rounded-md border transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="icon mb-6 text-teal-500">
              <FaLeaf className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Sustainable Solutions</h3>
            <p className="text-sm text-gray-600">
              Adopting our blockchain-backed energy solutions means contributing to sustainable living and reducing carbon footprints for future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
