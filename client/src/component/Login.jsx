import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input, Button, Spin } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "../css/Login.css";
import toast from "react-hot-toast";
import { doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';

const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

const Login = ({ mode, isloggedin, setloggedin }) => {
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
    setLoading(true);
    try {
      const response = await fetch(`${VITE_SERVER_PORT}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        toast.success("Login Successfully!");
        setloggedin(!isloggedin);
        navigate("/");
      } else {
        toast.error("Login failed!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle changes in input fields
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Remember email if "Remember Me" is checked
  const handleRememberMe = (e) => {
    if (e.target.checked) {
      localStorage.setItem('rememberedEmail', credentials.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  };

  // Handle Google Sign-In
  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { token } = await doSignInWithGoogle();
      localStorage.setItem("token", token);
      setloggedin(true);
    } catch (error) {
      console.error("Google sign-in error:", error);
      setloggedin(false);
    }
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
          <h1 className="title">Login</h1>
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

          {/* Remember Me */}
          <div className="form-check d-flex">
            <input type="checkbox" className="form-check-input" id="login-remember" onClick={(e) => handleRememberMe(e)} />
            <label className="form-check-label" htmlFor="login-remember">Remember me</label>
          </div>
          <button className="submit" type="submit" disabled={loading}>
            {loading ? <Spin size="small" /> : "Login"}
          </button>
          <button
            disabled={isloggedin}
            onClick={(e) => { onGoogleSignIn(e) }}
            className={`w-full flex items-center justify-center mt-3 gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${isloggedin ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}>
            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_17_40)">
                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {isloggedin ? 'Signing In...' : 'Continue with Google'}

          </button>

          <p
            className="footer"

            style={{
              backgroundColor: mode === "dark" ? "black" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          >
            Don&apos;t have an account?

            <Link className="link text-xl" to="/signup">
              {" "} Sign Up
            </Link>
          </p>

          <Button
            style={{ backgroundColor: "#6366f1", color: "#FFFFFF" }}
            onClick={() => navigate("/forgot-password")}
            className="mt-3 h-10 text-xl text-white"
          >
            Forgot Password?
          </Button>

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

Login.propTypes = {
  mode: PropTypes.string.isRequired,
  isloggedin: PropTypes.bool.isRequired,
  setloggedin: PropTypes.func.isRequired,
};

export default Login;
