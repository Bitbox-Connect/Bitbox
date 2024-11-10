import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input, Button, Spin } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  PhoneFilled
} from "@ant-design/icons";
import "../css/Login.css";
import toast from "react-hot-toast";
import { useAuth } from '../contexts/authContext/index'

const VITE_SERVER_PORT =
  import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

const LoginOTP = ({ mode, showAlert, loggedin, setloggedin }) => {
  const [number, setNumber] = useState("")
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const credentials = ""

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {

      const response = await fetch(`${VITE_SERVER_PORT}/api/auth/sendotp`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({number: number}),
      });
      
      const res = await response.json()
    
      if(res.success){
        toast.success("OTP sent successfully")
        setOtpSent(true);
      } else {
        toast.error("Error sending otp");
        console.log("error sending otp");
      }
    } catch (error) {
        toast.error(error)
    }

    setLoading(false)
  };


  const { userLoggedIn, setUserLoggedIn } = useAuth()

  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    console.log("hii");
    
    setLoading(true);
    
    try {

      const response = await fetch(`${VITE_SERVER_PORT}/api/auth/verifyotp`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({otp: otp}),
      });
      
      const res = await response.json()
    
      if(!res.success){
        toast.error("incorrect OTP")
        console.log("incorrect otp");
      } else {
        // alert("User signed in successfully!");
        toast.success("User signed in successfully!")
        setUserLoggedIn(true)
        setloggedin(!loggedin)
        navigate("/")
      }

    } catch (error) {
        console.log(error);
        toast.error(error)
    }

    setLoading(false)

  }   

  return (
    <div className="min-h-screen flex items-center justify-center mt-10" data-aos="zoom-in" data-aos-duration="1800">
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
          <div id="recaptcha-container"></div>
          <h1 className="title">Login Using OTP</h1>
          {/* Title Line */}
          <span className="title-line" style={{ backgroundColor: mode === "dark" ? "white" : "" }}></span>

          {
            !otpSent && <>
              <div className="inp">
                <Input
                  prefix={<PhoneFilled />}
                  placeholder="Phone number"
                  name="phone"
                  value={number}
                  onChange={(e)=>setNumber(e.target.value)}
                  autoComplete="on"
                  className="h-10 text-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "black" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                  required

                />
              </div>

              <button className="submit" id="login-btn" type="submit" onClick={handleSubmit} disabled={loading || otpSent} >
                {loading ? <Spin size="small" /> : "Send OTP"}
              </button>
            </>
          }
          
          {
            otpSent && <>
                <div className="inp">
                    <Input
                    prefix={<PhoneFilled />}
                    placeholder="OTP"
                    name="otp"
                    value={otp}
                    onChange={(e)=>setOtp(e.target.value)}
                    autoComplete="on"
                    className="h-10 text-xl"
                    style={{
                        backgroundColor: mode === "dark" ? "black" : "white",
                        color: mode === "dark" ? "white" : "black",
                    }}
                    required
                    />
                </div>

                <button className="submit" id="login-btn" onClick={handleOtpSubmit} disabled={loading} >
                    {loading ? <Spin size="small" /> : "Verify"}
                </button>
            </>
          }

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

LoginOTP.propTypes = {
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
  loggedin: PropTypes.bool.isRequired,
  setloggedin: PropTypes.func.isRequired,
};

export default LoginOTP;
