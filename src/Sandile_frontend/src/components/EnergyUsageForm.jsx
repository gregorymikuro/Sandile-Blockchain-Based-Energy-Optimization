import React, { useState } from 'react';
import { Sandile_backend } from 'declarations/Sandile_backend';

const EnergyUsageForm = () => {
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
      })
      .catch((error) => {
        setStatusMessage('Failed to add energy usage: ' + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4f7fa] p-4">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full border-t-4 border-[#0072b1]">
        <h2 className="text-2xl font-medium mb-6 text-[#0072b1] text-center">
          Energy Usage Tracker
        </h2>
        <form onSubmit={handleAddEnergyUsage} className="space-y-6">
          {/* Input Field */}
          <div>
            <label htmlFor="energy" className="block text-sm font-semibold text-gray-700 mb-2">
              Enter energy usage (kWh):
            </label>
            <input
              id="energy"
              type="number"
              step="0.01"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0072b1] transition duration-150"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-md font-medium text-white transition duration-300 ${isLoading ? 'bg-gray-400' : 'bg-[#0072b1] hover:bg-[#005999]'}`}
          >
            {isLoading ? 'Adding...' : 'Add Energy Usage'}
          </button>

          {/* Status Message */}
          {statusMessage && (
            <div className={`mt-4 p-4 rounded-md text-center ${statusMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EnergyUsageForm;
