import React, { useEffect, useState } from 'react';
import { Sandile_backend } from 'declarations/Sandile_backend';
import { FaBolt } from 'react-icons/fa';

// Energy Usage Form Component
const EnergyUsageForm = ({ onEnergyAdded }) => {
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleAddEnergyUsage(event) {
    event.preventDefault();
    const usage = parseFloat(event.target.elements.energy.value);
    setIsLoading(true);
    setStatusMessage('');

    // Call the backend to add energy usage
    Sandile_backend.add_energy_usage(usage)
      .then(() => {
        setStatusMessage('Energy usage added successfully!');
        onEnergyAdded(); // Notify parent to refresh recommendations
      })
      .catch((error) => {
        setStatusMessage('Failed to add energy usage: ' + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center justify-center mb-4 text-[#005bbb]">
        <FaBolt className="text-3xl mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Energy Usage Tracker</h2>
      </div>
      <form onSubmit={handleAddEnergyUsage} className="space-y-6">
        {/* Input Field */}
        <div className="relative">
          <label
            htmlFor="energy"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Enter energy usage (kWh):
          </label>
          <input
            id="energy"
            type="number"
            step="0.01"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005bbb] hover:border-[#005bbb] transition duration-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 transform ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#005bbb] hover:bg-[#00408a] hover:scale-105'
          }`}
        >
          {isLoading ? 'Adding...' : 'Add Energy Usage'}
        </button>

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`mt-4 p-4 rounded-lg text-center transition-all duration-500 ease-in-out transform ${
              statusMessage.includes('successfully')
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  );
};

// Recommendation List Component
const RecommendationList = () => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = () => {
    Sandile_backend.analyze_user_energy()
      .then((result) => {
        setRecommendations(result);
      })
      .catch((error) => {
        console.error('Failed to analyze energy usage:', error);
      });
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
        Energy Recommendations
      </h2>
      {recommendations.length > 0 ? (
        <ul className="space-y-4">
          {recommendations.map((rec, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50"
            >
              <strong className="block text-lg text-[#005bbb]">
                Recommendation:
              </strong>
              <p className="text-gray-700 mb-1">{rec.recommendation}</p>
              <strong className="block text-lg text-[#005bbb]">
                Potential Savings:
              </strong>
              <p className="text-gray-700">{rec.potential_savings} kWh</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">
          No recommendations available. Please add energy usage.
        </p>
      )}
    </div>
  );
};

// Combined Recommendation Page Component
const RecommendationsPage = () => {
  const [refreshRecommendations, setRefreshRecommendations] = useState(false);

  const handleEnergyAdded = () => {
    // Toggle refresh to update recommendations list
    setRefreshRecommendations((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center space-y-10">
      <h1 className="text-4xl font-bold text-[#005bbb] mb-6 text-center">
        Your Personalized Energy Recommendations
      </h1>

      {/* Grid Layout for Form and Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        <EnergyUsageForm onEnergyAdded={handleEnergyAdded} />
        <RecommendationList key={refreshRecommendations} />
      </div>
    </div>
  );
};

export default RecommendationsPage;
