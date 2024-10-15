import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Input, Button } from "antd";
import "./css/Login.css";
import toast from "react-hot-toast";

const host = "http://localhost:5000";

const Login = (props) => {
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
        body: JSON.stringify({ email: forgotEmail }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (response.ok) {
        alert(data.message || "Reset email sent successfully!");
        setForgotPasswordModalVisible(false);
        setForgotEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
      setForgotPasswordModalVisible(false);
      alert("Failed to send reset email. Please try again.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={`wrapper ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Login</h1>
        <span className="title-line"></span>
        <div className="inp">
          <Input
            type="email"
            className="input"
            placeholder="Email"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            autoComplete="on"
            style={{ backgroundColor: props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? '#fff' : '#000' }}
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="inp">
          <Input
            type="password"
            className="input"
            placeholder="Password"
            id="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            autoComplete="on"
            style={{ backgroundColor: props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? '#fff' : '#000' }}
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <Button className="submit" type="submit">
          Login
        </Button>
        <p className="footer">
          Dont have an account?{" "}
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

      <Modal
        title={<h2 className="text-2xl font-bold">Reset Password via Email</h2>}
        visible={forgotPasswordModalVisible}
        onOk={handleForgotPassword}
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
            style={{ backgroundColor: props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? '#fff' : '#000' }}
          />
        </div>
      </Modal>
    </div>
  );
};

Login.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string.isRequired,
};

export default Login;
