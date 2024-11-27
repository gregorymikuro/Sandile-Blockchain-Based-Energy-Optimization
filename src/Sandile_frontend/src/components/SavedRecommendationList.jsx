import React, { useEffect, useState } from 'react';
import { Sandile_backend } from 'declarations/Sandile_backend';

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
    <section>
      <h2>Saved Recommendations:</h2>
      {savedRecommendations.length > 0 ? (
        <ul>
          {savedRecommendations.map((rec, index) => (
            <li key={index}>
              <strong>Recommendation:</strong> {rec.recommendation} <br />
              <strong>Potential Savings:</strong> {rec.potential_savings} kWh
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved recommendations found.</p>
      )}
    </section>
  );
};

export default SavedRecommendationList;
