import React from 'react';
import { useNavigate } from 'react-router-dom';
import ICPLogin from '../ICPLogin'; // Corrected path

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="cta-section bg-gray-100 text-gray-800 py-16 px-8 text-center">
      {/* Engaging Headline */}
      <h2 className="text-4xl font-semibold mb-8 font-serif">
        Ready to Lower Your Energy Costs and Boost Efficiency?
      </h2>
      
      {/* Supporting Text */}
      <p className="text-base mb-8 max-w-lg mx-auto font-light leading-relaxed">
        Join thousands of homeowners and businesses making smarter energy decisions. Let us help you reduce energy costs, improve efficiency, and make a positive impact on the environment.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex justify-center space-x-6 mb-8">
        <button 
          onClick={() => navigate('/icp-chain')} 
          className="bg-gray-800 text-white px-8 py-3 rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
        >
          Get Started Now
        </button>
        <button 
          onClick={() => navigate('/learn-more')}
          className="bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white"
        >
          Learn More
        </button>
      </div>

      {/* Login with Internet Identity Button */}
      <div className="flex justify-center mt-6">
        <ICPLogin />
      </div>

      {/* Urgency Text */}
      <p className="text-sm mt-8 bg-gray-200 px-4 py-2 rounded-md inline-block">
        Limited time offer - Start today and get your first 3 months free!
      </p>
    </div>
  );
};

export default CallToAction;
