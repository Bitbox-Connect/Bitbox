import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 'https://bitbox-uxbo.onrender.com';

const ForgotPassword = ({ showAlert }) => {
  const [formData, setFormData] = useState({ email: "", newPassword: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email format.";
    }
    if (formData.newPassword !== formData.confirmPassword) {
      formErrors.password = "Passwords do not match.";
    }
    if (formData.newPassword.length < 6) {
      formErrors.newPassword = "Password must be at least 6 characters long.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch(`${VITE_SERVER_PORT}/api/auth/forget`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.newPassword }),
      });

      const json = await response.json();
      if (json.success) {
        showAlert("Password reset successfully", "success");
        navigate("/");
      } else {
        showAlert(json.message || "Failed to reset password. Please try again.", "danger");
      }
    } else {
      showAlert("Please correct the errors in the form", "danger");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh] mt-24 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={onChange}
              id="email"
              name="email"
              autoComplete="on"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              className={`w-full p-3 border ${errors.newPassword ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter New Password"
              value={formData.newPassword}
              onChange={onChange}
              id="newPassword"
              name="newPassword"
              autoComplete="on"
            />
            {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Confirm Your Password"
              value={formData.confirmPassword}
              onChange={onChange}
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="on"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default ForgotPassword;
