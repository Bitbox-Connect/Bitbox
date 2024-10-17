import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./css/Login.css";
import toast from "react-hot-toast";

const { Title, Paragraph } = Typography;

const host = "http://localhost:5000"; // Your backend URL

const Login = ({ mode }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [forgotPasswordModalVisible, setForgotPasswordModalVisible] =
    useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged in Successfully", "success");
      toast.success("Login Successfully!");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
      toast.error("Login failed!");
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await fetch(`${host}/api/auth/ResetByEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail }), // Send email as the request body
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message || "Reset email sent successfully!");
        setForgotPasswordModalVisible(false);
        setForgotEmail(""); // Clear the email field
      } else {
        props.showAlert(data.message || "Failed to send reset email", "danger");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      props.showAlert("An error occurred. Please try again later.", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper">
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
            aria-describedby="emailHelp"
            autoComplete="on"
            style={{
              backgroundColor: mode === "dark" ? "black" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        {/* <div className="inp">
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            autoComplete="on"
          />
            style={{
              backgroundColor: mode === 'dark' ? 'black' : 'white',
              color: mode === 'dark' ? 'white' : 'black',
            }}
          />
          <i className="fa-solid fa-lock"  style={{
        backgroundColor: mode === 'dark' ? 'black' : 'white',
        color: mode === 'dark' ? 'white' : 'black',
      }}></i>
        </div> */}
        <div className="inp">
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            autoComplete="on"
            style={{
              backgroundColor: mode === "dark" ? "black" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          />
          <i
            className="fa-solid fa-lock"
            style={{
              backgroundColor: mode === "dark" ? "black" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          ></i>
        </div>
        <Button className="submit" type="submit">
          Login
        </Button>
        <p className="footer">
          Don't have an account?{" "}
          <Link className="link" to="/Signup">
            Sign Up
          </Link>
        </p>
        <Button
          style={{ backgroundColor: "#6366f1" }}
          onClick={() => setForgotPasswordModalVisible(true)}
          className="mt-3"
        >
          Forgot Password?
        </Button>
      </form>

      <div className="banner">
        <h1 className="wel_text">
          WELCOME
          <br />
          BACK!
        </h1>
        <p className="para">
          Please Sign In here
          <br />
          with your real info
        </p>
      </div>

      {/* Antd Modal for Forgot Password */}
      <Modal
        title="Reset Password"
        visible={forgotPasswordModalVisible}
        onOk={handleForgotPassword} // Call handleForgotPassword on submit
        onCancel={() => setForgotPasswordModalVisible(false)}
        okText="Submit"
        okButtonProps={{
          style: { backgroundColor: "#6366f1", color: "#000" },
        }}
        cancelButtonProps={{
          style: { backgroundColor: "#000000" },
        }}
      >
        <div className="p-4">
          <p className="text-red-600 text-sm">
            Enter your email and we will send you a link to reset your password
          </p>
          <Input
            type="email"
            placeholder="Enter your email"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            required
          />
        </div>
      </Modal>
    </div>
  );
};

Login.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default Login;
