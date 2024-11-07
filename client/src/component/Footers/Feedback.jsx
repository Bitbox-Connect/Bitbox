// import PropTypes from "prop-types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Feedback() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0); // State to manage rating
  const VITE_SERVER_PORT =
    import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

  const handleRatingChange = (value) => {
    setRating(value); // Update the rating state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true); // Set isSubmitting to true right after checking

    // Gather form data
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries()); // Convert form data to an object

    try {
      const response = await fetch(
        `${VITE_SERVER_PORT}/api/feedback/submitFeedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      const result = await response.json();

      // Check if the request was successful
      if (response.status === 200) {  // Updated to check response status properly
        toast.success('Feedback Sent Successfully!');
        e.target.reset();
        setRating(0);
        setIsSubmitting(false)

      } else {
        toast.error(result.message || "Error in submission!");
      }
    } catch (error) {
      // Handle network or other fetch-related errors
      toast.error("Something went wrong. Please try again.");
    } finally {
      // Reset the submitting state regardless of the outcome
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="max-w-7xl mx-auto p-10 bg-white shadow-lg rounded-lg relative overflow-hidden mt-40 mb-20"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.85)", // Frosted glass effect
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <ToastContainer />

      <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
        We Value Your Feedback
      </h2>

      <form
        name="submit-to-google-sheet"
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        {/* Name and Email Fields */}
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <div className="flex-1">
            <label
              htmlFor="Name"
              className="block text-lg font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              className="mt-2 p-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg bg-white bg-opacity-90 transition duration-200 ease-in-out"
              placeholder="Enter your name *"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="Email"
              className="block text-lg font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              className="mt-2 p-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg bg-white bg-opacity-90 transition duration-200 ease-in-out"
              placeholder="Enter your email *"
              required
            />
          </div>
        </div>

        {/* Subject or Topic and Date of Visit Fields */}
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <div className="flex-1">
            <label
              htmlFor="Subject"
              className="block text-lg font-medium text-gray-700"
            >
              Subject or Topic:
            </label>
            <input
              type="text"
              id="Subject"
              name="Subject"
              className="mt-2 p-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg bg-white bg-opacity-90 transition duration-200 ease-in-out"
              placeholder="Specify the subject (e.g., design, content)"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="Date"
              className="block text-lg font-medium text-gray-700"
            >
              Date of Visit:
            </label>
            <input
              type="date"
              id="Date"
              name="Date"
              className="mt-2 p-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg bg-white bg-opacity-90 transition duration-200 ease-in-out"
              required
            />
          </div>
        </div>

        {/* Device Used and Priority Level */}
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <div className="flex-1">
            <label
              htmlFor="Device"
              className="block text-lg font-medium text-gray-700"
            >
              Device Used:
            </label>
            <select
              id="Device"
              name="Device"
              className="mt-2 p-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg bg-white bg-opacity-90 transition duration-200 ease-in-out"
              required
            >
              <option value="Desktop">Desktop</option>
              <option value="Tablet">Tablet</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="Priority"
              className="block text-lg font-medium text-gray-700"
            >
              Priority Level:
            </label>
            <select
              id="Priority"
              name="Priority"
              className="mt-2 p-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg bg-white bg-opacity-90 transition duration-200 ease-in-out"
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Suggestions for Improvement */}
        <div>
          <label
            htmlFor="Suggestions"
            className="block text-lg font-medium text-gray-700"
          >
            Suggestions for Improvement:
          </label>
          <textarea
            id="Suggestions"
            name="Suggestions"
            className="mt-2 p-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg bg-white bg-opacity-90 transition duration-200 ease-in-out"
            rows="4"
            placeholder="Provide suggestions for improvement"
            required
          ></textarea>
        </div>

        {/* Feedback Text */}
        <div>
          <label
            htmlFor="Feedback"
            className="block text-lg font-medium text-gray-700"
          >
            Feedback:
          </label>
          <textarea
            id="Feedback"
            name="Feedback"
            className="mt-2 p-4 py-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg bg-white bg-opacity-90 transition duration-200 ease-in-out"
            rows="4"
            placeholder="Enter your feedback here"
            required
          ></textarea>
        </div>

        {/* Rating System */}
        <div className="flex flex-col mb-6">
          <label
            htmlFor="Rating"
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            Rating (1-10):
          </label>

          <div className="flex items-center justify-center space-x-4">
            {Array.from({ length: 10 }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleRatingChange(index + 1)}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition duration-300 focus:outline-none 
        ${
          rating === index + 1
            ? "bg-indigo-600 text-white transform scale-110"
            : "bg-gray-300 text-gray-600 hover:bg-indigo-500 hover:text-white"
        } 
        shadow-md hover:shadow-lg`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <input type="hidden" id="Rating" name="Rating" value={rating} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 border border-transparent text-lg font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

// Feedback.propTypes = {
//   showAlert: PropTypes.func,
//   mode: PropTypes.string,
// };

export default Feedback;
