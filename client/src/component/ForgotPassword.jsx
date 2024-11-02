import PropTypes from "prop-types";
import { useState } from "react";
import { Input, Button } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 'https://bitbox-uxbo.onrender.com';

const ForgotPassword = ({ showAlert, mode }) => {
  const [forgotEmail, setForgotEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${VITE_SERVER_PORT}/api/auth/ResetByEmail`, {
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
        showAlert(data.error || "Failed to send reset email", "danger");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      showAlert("An error occurred. Please try again later.", "danger");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center h-[85vh] items-center mt-[7rem]">
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
              autoComplete="on"
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
            style={{
              marginTop: "10px",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#6366f1";
              e.target.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
            onMouseDown={(e) => {
              e.target.style.backgroundColor = "#4f46e5";
              e.target.style.color = "#ffffff";
            }}
            onMouseUp={(e) => {
              e.target.style.backgroundColor = "#6366f1";
              e.target.style.color = "#ffffff";
            }}
          >
            Back to Login
          </Button>
        </div>

        <div className='banner'>
          <h1
            className='wel_text'
            style={{
              color: mode === "dark" ? "black" : "white",
            }}
          >
            FORGOT
            <br />
            PASSWORD?
          </h1>
          <p
            className='para'
            style={{
              color: mode === "dark" ? "black" : "white",
              marginLeft: "200px",
            }}
          >
            No worries, we&apos;ve got you covered!&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  showAlert: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default ForgotPassword;
