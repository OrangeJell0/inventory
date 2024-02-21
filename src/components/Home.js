// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link className="text-blue-500 hover:text-blue-700" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-blue-500 hover:text-blue-700" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
