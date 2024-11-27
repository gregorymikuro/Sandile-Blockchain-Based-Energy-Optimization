import React, { useState } from 'react';
import SavedRecommendationList from '../components/SavedRecommendationList';
import { FaCheckCircle, FaHandsHelping, FaFlag, FaRunning } from 'react-icons/fa';

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      recommendation: 'Install Smart Thermostats',
      potential_savings: 150,
      status: 'Not Started',
    },
    {
      id: 2,
      recommendation: 'Switch to Energy-Efficient LED Lighting',
      potential_savings: 100,
      status: 'Set Goal',
    },
    {
      id: 3,
      recommendation: 'Insulate Attic to Reduce Heating Loss',
      potential_savings: 200,
      status: 'Working Towards',
    },
    {
      id: 4,
      recommendation: 'Upgrade to Energy-Efficient Appliances',
      potential_savings: 250,
      status: 'Ask for Help',
    },
    {
      id: 5,
      recommendation: 'Install Solar Panels',
      potential_savings: 500,
      status: 'Not Started',
    },
    {
      id: 6,
      recommendation: 'Use Motion Sensors for Lighting',
      potential_savings: 75,
      status: 'Completed',
    },
    {
      id: 7,
      recommendation: 'Seal Air Leaks in Windows and Doors',
      potential_savings: 120,
      status: 'Not Started',
    },
    {
      id: 8,
      recommendation: 'Install Low-Flow Showerheads',
      potential_savings: 50,
      status: 'Set Goal',
    },
    {
      id: 9,
      recommendation: 'Use Smart Power Strips',
      potential_savings: 40,
      status: 'Working Towards',
    },
    {
      id: 10,
      recommendation: 'Schedule Regular HVAC Maintenance',
      potential_savings: 180,
      status: 'Ask for Help',
    },
    {
      id: 11,
      recommendation: 'Replace Old Windows with Double Glazing',
      potential_savings: 300,
      status: 'Not Started',
    },
    {
      id: 12,
      recommendation: 'Use Programmable Timers for Appliances',
      potential_savings: 60,
      status: 'Completed',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setRecommendations((prevRecommendations) =>
      prevRecommendations.map((rec) =>
        rec.id === id ? { ...rec, status: newStatus } : rec
      )
    );
  };

  return (
    <main className="bg-gray-50 min-h-screen py-8 px-6">
      {/* Saved Recommendations Section */}
      <section className="mb-16">
        <SavedRecommendationList />
      </section>

      {/* Recommendation Cards Section */}
      <section className="recommendations-section bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-[#0072b1] text-center mb-10">
          Your Energy Recommendations
        </h2>

        {/* Cards with Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {rec.recommendation}
              </h3>
              <p className="text-base text-gray-600 mb-4">
                Potential Savings: {rec.potential_savings} kWh
              </p>

              {/* Status Display */}
              <p className="text-sm text-gray-500 mb-4">
                Current Status: <span className="font-medium">{rec.status}</span>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-3">
                {rec.status === 'Not Started' && (
                  <button
                    onClick={() => handleStatusChange(rec.id, 'Set Goal')}
                    className="bg-[#0072b1] text-white px-4 py-2 rounded-md transition duration-300 hover:bg-[#005bbb]"
                  >
                    <FaFlag className="inline mr-2" /> Set Goal
                  </button>
                )}

                {rec.status === 'Set Goal' && (
                  <button
                    onClick={() => handleStatusChange(rec.id, 'Working Towards')}
                    className="bg-[#00408a] text-white px-4 py-2 rounded-md transition duration-300 hover:bg-[#003366]"
                  >
                    <FaRunning className="inline mr-2" /> Currently Working Towards
                  </button>
                )}

                {rec.status === 'Working Towards' && (
                  <button
                    onClick={() => handleStatusChange(rec.id, 'Ask for Help')}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-yellow-600"
                  >
                    <FaHandsHelping className="inline mr-2" /> Ask for Help
                  </button>
                )}

                {rec.status === 'Ask for Help' && (
                  <button
                    onClick={() => handleStatusChange(rec.id, 'Completed')}
                    className="bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-green-600"
                  >
                    <FaCheckCircle className="inline mr-2" /> Mark as Completed
                  </button>
                )}

                {rec.status === 'Completed' && (
                  <p className="text-green-600 font-semibold">
                    <FaCheckCircle className="inline mr-2" /> Completed
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RecommendationsPage;
