import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-500 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">Energy Dashboard</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link className="hover:underline" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/analyze">Analyze Usage</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/recommendations">Recommendations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
