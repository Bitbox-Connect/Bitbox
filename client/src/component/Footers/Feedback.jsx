import PropTypes from 'prop-types';
import { useState } from 'react';

function Feedback(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJzYGZE0R6W2ZLGbJZlUoxNwWShpAYhcJY4zBM9LOycb7iiM4vncS1fbSpVnIXwKIU/exec';
    const form = document.forms['submit-to-google-sheet'];

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        form.reset();
        setIsSubmitting(false);
        props.showAlert("Feedback Submitted Successfully", "success");
      })
      .catch(error => {
        setIsSubmitting(false);
        props.showAlert("Feedback Submission Failed", "danger");
      });
  };

  return (
    <div className="max-w-10xl mx-auto p-52 bg-white shadow-lg rounded-lg"
      style={{ 
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/007/353/647/large_2x/blue-wrinkled-paper-background-with-abstract-seamless-pattern-crumpled-paper-texture-photo.jpg')`,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Frosted glass effect
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">We Value Your Feedback</h2>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name Field */}
        <div>
          <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="Name" name="Name" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-70" placeholder="Enter your name *" required />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="Email" name="Email" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-70" placeholder="Enter your email *" required />
        </div>

        {/* Subject or Topic */}
        <div>
          <label htmlFor="Subject" className="block text-sm font-medium text-gray-700">Subject or Topic:</label>
          <input type="text" id="Subject" name="Subject" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-70" placeholder="Specify the subject (e.g., design, content)" required />
        </div>

        {/* Date of Visit */}
        <div>
          <label htmlFor="Date" className="block text-sm font-medium text-gray-700">Date of Visit:</label>
          <input type="date" id="Date" name="Date" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-70" required />
        </div>

        {/* Device Used */}
        <div>
          <label htmlFor="Device" className="block text-sm font-medium text-gray-700">Device Used:</label>
          <select id="Device" name="Device" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-70" required>
            <option value="Desktop">Desktop</option>
            <option value="Tablet">Tablet</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        {/* Rating System */}
        <div>
          <label htmlFor="Rating" className="block text-sm font-medium text-gray-700">Rating (1-10):</label>
          <input type="range" id="Rating" name="Rating" min={1} max={10} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none bg-white bg-opacity-70" />
        </div>

        {/* Suggestions for Improvement */}
        <div>
          <label htmlFor="Suggestions" className="block text-sm font-medium text-gray-700">Suggestions for Improvement:</label>
          <textarea id="Suggestions" name="Suggestions" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-70" rows="4" placeholder="Provide suggestions for improvement" required></textarea>
        </div>

        {/* Priority Level */}
        <div>
          <label htmlFor="Priority" className="block text-sm font-medium text-gray-700">Priority Level:</label>
          <select id="Priority" name="Priority" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-70" required>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Feedback Text */}
        <div>
          <label htmlFor="Feedback" className="block text-sm font-medium text-gray-700">Feedback:</label>
          <textarea id="Feedback" name="Feedback" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-70" rows="4" placeholder="Enter your feedback here" required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting} className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

Feedback.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default Feedback;
