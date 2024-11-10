import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SERVER_URI=import.meta.env.VITE_SERVER_URI;
import { Input, Spin } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "../css/Login.css";
import toast from "react-hot-toast";
import { useAuth } from '../contexts/authContext';

const Admin = ({ mode }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  // Conditional navigation if user is already logged in
  useEffect(() => {
    if (userLoggedIn) {
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!credentials.email || !credentials.password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${SERVER_URI}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        // Check for network or server errors
        if (response.status === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("Login failed! Please check your credentials.");
        }
        throw new Error("Response not ok");
      }

      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        // setloggedin(!isloggedin);
        console.log("flskd");
        
        return navigate("/");
        
      } else {
        toast.error(json.message || "Login failed! Invalid credentials.");
      }
    } catch (error) {
      if (error.message === "NetworkError") {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle changes in input fields
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };




  return (
    <div className="min-h-screen flex items-center justify-center mt-14" data-aos="zoom-in" data-aos-duration="1800">
      {userLoggedIn && navigate('/')}
      <div
        className="wrapper h-3/4 mt-10"
        style={{
          backgroundColor: mode === "dark" ? "black" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      >

        <form
          onSubmit={handleSubmit}
          className="form"
          style={{
            backgroundColor: mode === "dark" ? "black" : "white",
            color: mode === "dark" ? "white" : "black",
          }}
        >
          <h1 className="title">Admin Login</h1>
          {/* Title Line */}
          <span className="title-line" style={{ backgroundColor: mode === "dark" ? "white" : "" }}></span>

          {/* Email Input */}
          <div className="inp">
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              autoComplete="on"
              required
              className="h-10 text-xl"
              style={{
                backgroundColor: mode === "dark" ? "black" : "white",
                color: mode === "dark" ? "white" : "black",
              }}
            />
          </div>

          {/* Password Input */}
          <div className="inp">
            <Input
              prefix={<LockOutlined />}
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              autoComplete="on"
              required
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              className="h-10 text-xl"
              style={{
                backgroundColor: mode === "dark" ? "black" : "white",
                color: mode === "dark" ? "white" : "black",
              }}
            />
          </div>

          
          <button className="submit" type="submit" disabled={loading}>
            {loading ? <Spin size="small" /> : "Login"}
          </button>



        </form>

        <div className="banner">
          <h1
            className="wel_text"
            style={{
              color: mode === "dark" ? "black" : "white",
            }}
          >
            WELCOME
            <br />
            BACK!
          </h1>
          <p
            className="para"
            style={{
              color: mode === "dark" ? "black" : "white",
            }}
          >
            Please Sign In here
            <br />
            with your real info
          </p>
        </div>
      </div>
    </div>
  );
};

Admin.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Admin;