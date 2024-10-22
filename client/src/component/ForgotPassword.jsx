import PropTypes from "prop-types";
import { useState } from "react";
import { Input, Button } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const host = "http://localhost:5000";

const ForgotPassword = ({ showAlert, mode }) => {
  const [forgotEmail, setForgotEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/auth/ResetByEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Reset email sent successfully!");
        setForgotEmail("");
        navigate("/login");
      } else {
        showAlert(data.message || "Failed to send reset email", "danger");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      showAlert("An error occurred. Please try again later.", "danger");
    } finally {
      setLoading(false);
    }
  };

  const buttonStyle = {
    marginTop: "10px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#6366f1",
    color: "#ffffff",
  };

  const buttonActiveStyle = {
    backgroundColor: "#4f46e5",
    color: "#ffffff",
  };

  return (
    <div
      className='wrapper'
      style={{
        backgroundColor: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <div className='form'>
        <h1 className='title'>Reset Password</h1>
        <span className='title-line'></span>
        <div className='inp'>
          <Input
            type='email'
            placeholder='Enter your email'
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            required
            style={{
              backgroundColor: mode === "dark" ? "black" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <Button
          className='submit'
          type='primary'
          onClick={handleForgotPassword}
          loading={loading}
          style={{ backgroundColor: "#6366f1", color: "#FFFFFF" }}
        >
          Submit
        </Button>
        <Button
          className='back-to-login'
          type='default'
          onClick={() => navigate("/login")}
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.color = buttonHoverStyle.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "";
            e.target.style.color = "";
          }}
          onMouseDown={(e) => {
            e.target.style.backgroundColor = buttonActiveStyle.backgroundColor;
            e.target.style.color = buttonActiveStyle.color;
          }}
          onMouseUp={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.color = buttonHoverStyle.color;
          }}
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  showAlert: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default ForgotPassword;
