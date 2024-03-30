import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/Auth.css'

const host = "http://localhost:5000";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // To not Reload after click submit 
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
      props.showAlert("Logged in Successfully", "success")
      navigate("/");
    }
    else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="Login">
      <div className='container main-bx'>
        <div className="heading">Login</div>
        <div className='p-3'>
          {/* <h2>Login into BitBox</h2> */}
          <form className='form' onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email" classNameName="input" id='email'>Email address</label>
              <input type="email" className="form-control" placeholder='Enter Your Email' value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" autoComplete='on' />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="password">Password</label>
              <input type="password" className="form-control" id='password' placeholder='Enter Your Password' value={credentials.password} onChange={onChange} name='password' autoComplete='on' />
            </div>
            <div className="text-center forgot-password"><a href="#">Forgot Password ?</a></div>
            <div className="Signup-button">
              <button type="submit" className="btn btn-primary" onChange={onChange} onSubmit={handleSubmit}>Login</button>
            </div>
          </form>
          <div className="social-account-container">
            <div className='my-4 p-2 text-center'>Don&#39;t have an account?
              <Link to="/Signup">Signup</Link>
            </div>
            <span className="title">Or Sign in with</span>
            <div className="social-accounts">
              <button className="social-button google">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285F4"></path>
                </svg>
              </button>
              <button className="social-button apple">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" fill="#181717"></path>
                </svg>
              </button>
              <button className="social-button twitter">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#1DA1F2"></path>
                </svg>
              </button>
            </div>
            <div className="agreement text-center"><a href="#">Learn user licence agreement</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Props Vadilation
Login.propTypes = {
  showAlert: PropTypes.func,
};

export default Login