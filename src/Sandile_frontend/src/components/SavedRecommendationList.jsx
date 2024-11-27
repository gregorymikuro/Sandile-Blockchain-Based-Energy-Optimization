import React, { useEffect, useState } from 'react';
import { Sandile_backend } from 'declarations/Sandile_backend';
import { FaLightbulb, FaFrown } from 'react-icons/fa';

const SavedRecommendationList = () => {
  const [savedRecommendations, setSavedRecommendations] = useState([]);

  useEffect(() => {
    Sandile_backend.get_recommendations()
      .then((result) => {
        setSavedRecommendations(result);
      })
      .catch((error) => {
        console.error('Failed to get saved recommendations:', error);
      });
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center text-[#0072b1] mb-6">
          Saved Recommendations
        </h2>

        {savedRecommendations.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedRecommendations.map((rec, index) => (
              <li
                key={index}
                className="bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-3">
                  <FaLightbulb className="text-[#0072b1] text-3xl mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Recommendation #{index + 1}
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  <strong className="text-[#0072b1]">Recommendation:</strong>{' '}
                  {rec.recommendation}
                </p>
                <p className="text-gray-700">
                  <strong className="text-[#0072b1]">Potential Savings:</strong>{' '}
                  {rec.potential_savings} kWh
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-100 rounded-lg shadow-inner text-center">
            {/* Icon */}
            <FaFrown className="text-[#0072b1] text-6xl mb-4" />
            
            {/* Heading */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              No Saved Recommendations Found
            </h3>
            
            {/* Subtext */}
            <p className="text-gray-600 mb-6 max-w-md">
              It seems like you haven't saved any recommendations yet. Adding energy usage data will help us provide personalized and valuable suggestions to optimize your energy usage.
            </p>
            
            {/* Call to Action Button */}
            <button
              className="bg-[#0072b1] hover:bg-[#005bbb] text-white px-6 py-3 rounded-md font-medium transition duration-300 transform hover:scale-105"
              onClick={() => window.location.href = "/analyze"}
            >
              Analyze Your Energy Usage
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedRecommendationList;
