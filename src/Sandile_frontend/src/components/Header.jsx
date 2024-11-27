import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#0072b1] py-6 px-10 flex justify-between items-center text-white">
      {/* Branding */}
      <h1 className="text-lg font-medium">Dashboard</h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link
              className="text-sm hover:underline hover:text-gray-400 transition-all duration-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-sm hover:underline hover:text-gray-400 transition-all duration-300"
              to="/analyze"
            >
              Analyze Usage
            </Link>
          </li>
          <li>
            <Link
              className="text-sm hover:underline hover:text-gray-400 transition-all duration-300"
              to="/recommendations"
            >
              Recommendations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
