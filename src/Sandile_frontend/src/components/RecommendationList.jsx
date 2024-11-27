import React, { useEffect, useState } from 'react';
import { Sandile_backend } from 'declarations/Sandile_backend';

const RecommendationList = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    Sandile_backend.analyze_user_energy()
      .then((result) => {
        setRecommendations(result);
      })
      .catch((error) => {
        console.error('Failed to analyze energy usage:', error);
      });
  }, []);

  return (
    <section>
      <h2>Energy Recommendations:</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>
              <strong>Recommendation:</strong> {rec.recommendation} <br />
              <strong>Potential Savings:</strong> {rec.potential_savings} kWh
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available. Please add energy usage.</p>
      )}
    </section>
  );
};

export default RecommendationList;
