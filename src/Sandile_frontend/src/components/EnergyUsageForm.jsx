import React, { useState } from 'react';
import { Sandile_backend } from 'declarations/Sandile_backend';

const EnergyUsageForm = () => {
  const [statusMessage, setStatusMessage] = useState('');

  function handleAddEnergyUsage(event) {
    event.preventDefault();
    const usage = parseFloat(event.target.elements.energy.value);

    // Call the backend to add energy usage
    Sandile_backend.add_energy_usage(usage)
      .then(() => {
        setStatusMessage('Energy usage added successfully!');
      })
      .catch((error) => {
        setStatusMessage('Failed to add energy usage: ' + error.message);
      });
  }

  return (
    <form onSubmit={handleAddEnergyUsage}>
      <label htmlFor="energy">Enter energy usage (kWh): &nbsp;</label>
      <input id="energy" type="number" step="0.01" required />
      <button type="submit">Add Energy Usage</button>
      {statusMessage && <p>{statusMessage}</p>}
    </form>
  );
};

export default EnergyUsageForm;
