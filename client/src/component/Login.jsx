import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Input, Button, Spin } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./css/Login.css";
import toast from "react-hot-toast";

const host = "http://localhost:5000";

const Login = ({ mode, showAlert }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/auth/login`, {
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
    <div
      className="wrapper"
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
            style={{
              backgroundColor: mode === "dark" ? "black" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
            required
          />
        </div>

        <button
          className="submit"
          disabled={loading}
          onClick={() => {
            handleSubmit();
          }}
        >
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
          className="mt-3"
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
  );
};

Login.propTypes = {
  showAlert: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Login;
