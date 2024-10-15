import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Input, Button, Typography, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./css/Login.css"; // Ensure you have appropriate CSS for layout

const { Title, Paragraph } = Typography;

const host = "http://localhost:5000"; // Your backend URL

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [forgotPasswordModalVisible, setForgotPasswordModalVisible] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
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
        // If login is successful
        props.showAlert("Logged in Successfully", "success");
        navigate("/"); // Redirect to home page
      } else {
        // If login fails
        props.showAlert("Invalid Credentials", "danger");
      }
    } catch (error) {
      console.error("Error during login:", error);
      props.showAlert("An error occurred. Please try again later.", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Row justify="center" align="middle" className="login-container">
      <Col xs={24} sm={12} md={8} lg={6} className="login-col">
        <Title level={2} className="login-title">Login</Title>
        <form onSubmit={handleSubmit} className="login-form">
          <Input
            prefix={<UserOutlined />}
            type="email"
            placeholder="Email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            className="login-input"
            required
          />
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            className="login-input"
            required
          />
          <Button type="primary" htmlType="submit" className="login-button">
            Login
          </Button>
        </form>
        <Paragraph className="footer">
          Don't have an account?{" "}
          <Link to="/Signup" className="signup-link">Sign Up</Link>
        </Paragraph>
        <Button type="link" onClick={() => setForgotPasswordModalVisible(true)} className="forgot-password">
          Forgot Password?
        </Button>
      </Col>

      <Modal
        title="Reset Password"
        visible={forgotPasswordModalVisible}
        onOk={() => {
          // Implement reset password logic here
          setForgotPasswordModalVisible(false);
        }}
        onCancel={() => setForgotPasswordModalVisible(false)}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={forgotEmail}
          onChange={(e) => setForgotEmail(e.target.value)}
          required
        />
      </Modal>
    </Row>
  );
};

Login.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default Login;
