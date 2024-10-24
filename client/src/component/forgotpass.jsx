import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Auth.css';

const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 'https://bitbox-uxbo.onrender.com';

const ForgotPassword = (props) => {
const [formData, setFormData] = useState({ email: "", newPassword: "", confirmPassword: "" });
const [errors, setErrors] = useState({});
let navigate = useNavigate();

  // Handle input changes
const onChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  // Validate inputs
const validateForm = () => {
  let formErrors = {};
   
  // Email validation (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    formErrors.email = "Invalid email format.";
  }
    
    // Password matching validation
  if (formData.newPassword !== formData.confirmPassword) {
    formErrors.password = "Passwords do not match.";
  }
    
    // Password length validation
    if (formData.newPassword.length < 6) {
      formErrors.newPassword = "Password must be at least 6 characters long.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        console.log("inforgot")
        const response = await fetch(`${VITE_SERVER_PORT}/api/auth/forget`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email, password: formData.newPassword }),
    });
        
        const json = await response.json();
        console.log(json);

        if (json.success) {
            props.showAlert("Password reset successfully", "success");
            navigate("/");
        } else {
            props.showAlert(json.message || "Failed to reset password. Please try again.", "danger");
        }
    } else {
        props.showAlert("Please correct the errors in the form", "danger");
    }
};


  return (
    <div className="ForgotPassword">
      <div className="container main-bx" style={{ marginTop: '200px', marginBottom: '100px' }} >
        <div className="heading">Forgot Password</div>
        <div className="p-3">
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={onChange}
                id="email"
                name="email"
                autoComplete="on"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-2">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input
                type="password"
                className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                placeholder="Enter New Password"
                value={formData.newPassword}
                onChange={onChange}
                id="newPassword"
                name="newPassword"
                autoComplete="on"
              />
              {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
            </div>
            <div className="mb-2">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Confirm Your Password"
                value={formData.confirmPassword}
                onChange={onChange}
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="on"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Props Validation
ForgotPassword.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default ForgotPassword;
