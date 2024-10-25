import PropTypes from "prop-types";
import { useState } from "react";
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

const VITE_SERVER_PORT =
  import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

const Login = ({ mode, showAlert, isloggedin, setloggedin }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
        showAlert("Logged in Successfully", "success");
        toast.success("Login Successfully!");
        setloggedin(!isloggedin);
        navigate("/");
      } else {
        showAlert("Invalid Credentials", "danger");
        toast.error("Login failed!");
      }
    } catch (error) {
      showAlert("An error occurred. Please try again later.", "danger");
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="wrapper h-3/4 mt-10"
        style={{
          backgroundColor: mode === "dark" ? "black" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <form onSubmit={handleSubmit} className="form">
          <h1 className="title">Login</h1>
          <span className="title-line"></span>

          <div className="inp">
            <Input
              prefix={<UserOutlined />}
              type="email"
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

          <div className="inp">
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              autoComplete="on"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              className="h-10 text-xl"
              style={{
                backgroundColor: mode === "dark" ? "black" : "white",
                color: mode === "dark" ? "white" : "black",
              }}
              required
            />
          </div>

          <button className="submit" type="submit" disabled={loading}>
            {loading ? <Spin size="small" /> : "Login"}
          </button>

          <p
            className="footer"
            style={{
              backgroundColor: mode === "dark" ? "black" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          >
            Don&apos;t have an account?
            <Link className="link" to="/Signup">
              {" "}
              Sign Up
            </Link>
          </p>

          <Button
            style={{ backgroundColor: "#6366f1", color: "#FFFFFF" }}
            onClick={() => navigate("/forgot-password")}
            className="mt-3 h-10 text-xl"
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
  showAlert: PropTypes.func.isRequired,
  isloggedin: PropTypes.bool.isRequired,
  setloggedin: PropTypes.func.isRequired,
};

export default Login;
