// src/components/NotFound.jsx

import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center lg:top-8 lg:relative m-2 justify-center min-h-screen bg-white text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! Page Not Found</p>
      <p className="text-md text-gray-500 mb-4">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
