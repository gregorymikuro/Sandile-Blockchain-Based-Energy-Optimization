import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnalyzePage from './pages/AnalyzePage';
import RecommendationsPage from './pages/RecommendationsPage';
import Header from './components/Header';
import Footer from './components/Footer'; // Assuming you have a Footer component

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-wrapper flex flex-col min-h-screen">
      {/* Conditionally Render Header */}
      {!isHomePage && <Header />}

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          {/* HomePage is the default route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />

          {/* Redirect any unknown paths back to the HomePage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
