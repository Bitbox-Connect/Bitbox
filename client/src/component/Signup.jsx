import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import PropTypes from "prop-types";
import "../css/Signup.css";
// import { registerValidation } from "../validations/validation";
import toast from "react-hot-toast";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../contexts/authContext/index';

const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 'https://bitbox-uxbo.onrender.com';

const Signup = ({ mode }) => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [cpassword, setCPassword] = useState("");
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   // Validation not working 

    //   await registerValidation.validate(
    //     { name, email, password, cpassword },
    //     { abortEarly: false }
    //   );

    //   setErrors({});
    // } catch (error) {
    //   const newErrors = {};
    //   error.inner.forEach((err) => {
    //     newErrors[err.path] = err.message;
    //   });

    //   setErrors(newErrors);
    //   return;
    // }

    await signUpWithEmailPassword(email, name, password);
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setLoggedIn(true);
      doSignInWithGoogle().catch((err) => {
        console.log(err);
        setLoggedIn(false);
      });
    }
  };

  const signUpWithEmailPassword = async (email, name, password) => {
    console.log(email)
    const response = await fetch(`${VITE_SERVER_PORT}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      toast.success("Account Created Successfully!");
    } else {
      toast.error("Account not created. Please check your email inbox!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-24 p-4">
      {userLoggedIn && navigate('/')}

      <div
        className="signup-wrapper"
        style={{
          backgroundColor: mode === "dark" ? "black" : "white",
        }}
      >
        <div
          className="signup-form"
          style={{
            color: mode === "dark" ? "white" : "black",
          }}
        >
          <h2
            className="signup-title"
            style={{
              color: mode === "dark" ? "#6366F1" : "#6366F1",
            }}
          >
            Create An Account
          </h2>

          <form className="w-3/4" onSubmit={handleSubmit}>
            <div className="space-y-4 w-full">
              <div className="signup-form-group items-start flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-md leading-none font-medium"
                  style={{
                    color: mode === "dark" ? "white" : "black",
                  }}
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  className="signup-input"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Enter Your Full Name"
                  name="name"
                  aria-describedby="nameHelp"
                  autoComplete="on"
                  required
                  style={{
                    backgroundColor: mode === "dark" ? "#333" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                />
                {errors.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
              </div>

              <div className="signup-form-group items-start flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-md leading-none font-medium"
                  style={{
                    color: mode === "dark" ? "white" : "black",
                  }}
                >
                  Email
                </label>
                <Input
                  type="email"
                  className="signup-input"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  aria-describedby="emailHelp"
                  autoComplete="on"
                  required
                  style={{
                    backgroundColor: mode === "dark" ? "#333" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              <div className="signup-form-group relative items-start flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-md font-medium"
                  style={{
                    color: mode === "dark" ? "white" : "black",
                  }}
                >
                  Password
                </label>
                <Input.Password
                  className="signup-input"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  minLength={5}
                  autoComplete="on"
                  required
                  style={{
                    backgroundColor: mode === "dark" ? "#333" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>

              <div className="signup-form-group items-start flex flex-col gap-2 relative">
                <label
                  htmlFor="cpassword"
                  className="text-md font-medium"
                  style={{
                    color: mode === "dark" ? "white" : "black",
                  }}
                >
                  Confirm Password
                </label>
                <Input.Password
                  className="signup-input"
                  onChange={(e) => setCPassword(e.target.value)}
                  id="cpassword"
                  name="cpassword"
                  placeholder="Enter Again Your Password"
                  minLength={5}
                  autoComplete="on"
                  required
                  style={{
                    backgroundColor: mode === "dark" ? "#333" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />

                {errors.cpassword && (
                  <div className="text-danger">{errors.cpassword}</div>
                )}
              </div>
            </div>

            <br />

            <button type="submit" className="signup-submit">
              Sign Up
            </button>

            <button
              disabled={isLoggedIn}
              onClick={onGoogleSignIn}
              className={`w-full flex items-center mt-3 justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium ${isLoggedIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_17_40)">
                  <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                  <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                  <path d="M11.0051 28.6006C10.0598 25.1308 10.0598 21.5289 11.0051 18.0591V11.2177H3.03296C0.641304 16.7804 0.641304 23.2196 3.03296 28.6006L11.0051 28.6006Z" fill="#FBBC05" />
                  <path d="M24.48 9.49962C26.8886 9.49962 29.1674 10.0449 31.2975 10.9048L40.3888 5.18232C36.4116 1.51771 30.9529 -1.60612 24.48 0.000426052C15.4056 0.000426052 7.10718 5.11563 3.03296 11.2177L11.0051 18.0591C12.9187 12.2798 18.2275 8.05569 24.4888 8.05569C25.1312 8.05569 25.7718 8.12972 26.3855 8.23956C25.7718 8.12972 25.1312 8.05569 24.4888 8.05569C18.2275 8.05569 12.9187 12.2798 11.0051 18.0591L3.03296 11.2177C0.641304 16.7804 0.641304 23.2196 3.03296 28.6006C10.0598 21.5289 10.0598 25.1308 11.0051 28.6006L11.0051 28.6006Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Sign Up with Google
            </button>

            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#6366F1] hover:underline"
              >
                Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  mode: PropTypes.string,
};

export default Signup;
