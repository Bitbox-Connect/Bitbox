// import React from 'react';
import { FaUsers, FaMicroblog } from 'react-icons/fa';
import { PiEyesDuotone } from 'react-icons/pi';

import PropTypes from "prop-types";

const Dashboard = ({ mode }) => {
  const isDarkMode = mode === 'dark';
  const blogs = [
    { id: 1, title: 'Understanding React', author: 'John Doe', category: 'Web Development' },
    { id: 2, title: 'CSS Tips and Tricks', author: 'Jane Smith', category: 'Design' },
    { id: 3, title: 'JavaScript Basics', author: 'Alice Johnson', category: 'Programming' },
  ];

  const handleDelete = (id) => {
    console.log(`Blog with id ${id} deleted`);
  };

  return (
    <div
      className={`container mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      {/* Header */}
      <header className="col-span-full">
        <h1 className="text-[72px] font-bold mb-4">Dashboard</h1>
      </header>

      {/* Insights */}
      <section className="col-span-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          className={`shadow-md rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="material-symbols-sharp text-4xl bg-coral text-white p-2 rounded-full">
              <PiEyesDuotone />
            </span>
            <div className="text-right">
              <h3 className="text-lg font-medium">Total Views</h3>
              <h1 className="text-2xl font-bold">100</h1>
            </div>
          </div>
          <div className="mt-4 relative">
            <div className="progress-circle relative w-16 h-16">
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" className="text-gray-200" strokeWidth="5" />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  className="text-blue-500"
                  strokeWidth="5"
                  strokeDasharray="150"
                  strokeDashoffset="calc(150 - (150 * 0.8))"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-sm">
                80%
              </div>
            </div>
          </div>
          <small className="block text-gray-500 mt-2">Last 24 Hours</small>
        </div>

        <div
          className={`shadow-md rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="material-symbols-sharp text-4xl bg-red-400 text-white p-2 rounded-full">
              <FaUsers />
            </span>
            <div className="text-right">
              <h3 className="text-lg font-medium">New Users</h3>
              <h1 className="text-2xl font-bold">323</h1>
            </div>
          </div>
          <div className="mt-4 relative">
            <div className="progress-circle relative w-16 h-16">
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" className="text-gray-200" strokeWidth="5" />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  className="text-blue-500"
                  strokeWidth="5"
                  strokeDasharray="150"
                  strokeDashoffset="calc(150 - (150 * 0.5))"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-sm">
                50%
              </div>
            </div>
          </div>
          <small className="block text-gray-500 mt-2">Last 24 Hours</small>
        </div>

        <div
          className={`shadow-md rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="material-symbols-sharp text-4xl bg-green-400 text-white p-2 rounded-full">
              <FaMicroblog />
            </span>
            <div className="text-right">
              <h3 className="text-lg font-medium">Total Posts</h3>
              <h1 className="text-2xl font-bold">12</h1>
            </div>
          </div>
          <div className="mt-4 relative">
            <div className="progress-circle relative w-16 h-16">
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" className="text-gray-200" strokeWidth="5" />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  className="text-blue-500"
                  strokeWidth="5"
                  strokeDasharray="150"
                  strokeDashoffset="calc(150 - (150 * 0.9))"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-sm">
                90%
              </div>
            </div>
          </div>
          <small className="block text-gray-500 mt-2">Last 24 Hours</small>
        </div>
      </section>

      {/* Blog Table */}
      <section className="col-span-full mt-6">
        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
        <table
          className={`min-w-full border ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}
        >
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Author</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                <td className="px-4 py-2 border-b">{blog.title}</td>
                <td className="px-4 py-2 border-b">{blog.author}</td>
                <td className="px-4 py-2 border-b">{blog.category}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    className={`px-3 py-1 rounded ${isDarkMode ? 'bg-red-600' : 'bg-red-500'} text-white`}
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#" className={`text-blue-500 mt-4 inline-block ${isDarkMode ? 'text-blue-300' : ''}`}>
          Show All
        </a>
      </section>
    </div>
  );
};
Dashboard.propTypes = {
  mode: PropTypes.string, // Function to notify parent about profile update
};
export default Dashboard;
