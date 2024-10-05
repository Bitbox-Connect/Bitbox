import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Auth.css';
const host = "http://localhost:5000";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // To prevent reload after form submit
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Logged in Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center bg-white p-4">
      <div  className="w-full max-w-full sm:max-w-md shadow-lg border border-blue-100  ">
        <div className="bg-blue-50 p-6 flex justify-center w-full">
          <Lock className="text-blue-600 w-12 h-12" />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-blue-600">Welcome Back</h2>
        </div>
        <div className="p-3">
          <form className="form" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="text-md leading-none font-medium text-blue-600" 
                  id="email">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                  <input 
                    type="email"
                    className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all 
                    duration-200 flex h-10 w-full rounded-md border px-10 py-2 
                    text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2"
                    required
                    placeholder="Enter Your Email"
                    value={credentials.email}
                    onChange={onChange}
                    id="email"
                    name="email"
                    autoComplete="on" />
                </div>
              </div>
              <div className="space-y-2">
                <label 
                  htmlFor="password" 
                  className="text-md text-blue-600 font-medium">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                  <input 
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200 
                    flex h-10 w-full rounded-md border px-10 py-2 text-sm placeholder:text-muted-foreground 
                    focus-visible:outline-none focus-visible:ring-2"
                    placeholder="Enter Your Password"
                    value={credentials.password}
                    onChange={onChange}
                    name="password"
                    id="password"
                    autoComplete="on" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-200">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div className='space-y-8'>
              <div className="flex items-center space-x-2">
                <input
                  id="remember" 
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="remember" className="text-sm text-blue-600">
                  Remember me
                </label>
              </div>
              <div className="flex flex-col space-y-4">
                <button 
                  type="submit"
                  className="w-full h-10 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white 
                  transition-colors duration-200 inline-flex items-center justify-center rounded-md 
                  text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2">
                  Login
                </button>
                <div className="flex justify-between w-full text-sm">
                  <Link to="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    Forgot Password?
                  </Link>
                  <Link to="/signup" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    Sign up
                  </Link>
                </div>
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Login.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default Login;
