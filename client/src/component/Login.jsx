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
    <div class="heading">Login</div>
      <div className='mt-2 p-3 border rounded-5'>
        <h2>Login into Kaiyuan</h2>
        <form className='form' onSubmit={handleSubmit}>
          <div className="mb-2">
            {/* <label htmlFor="email" classNameName="input" id='email'>Email address</label> */}
            <input type="email" className="input" placeholder='Enter Your Email' value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" autoComplete='on' />
          </div>
          <div className="mb-2">
            {/* <label htmlFor="password" className="input">Password</label> */}
            <input type="password" className="input" id='password' placeholder='Enter Your Password' value={credentials.password} onChange={onChange} name='password' autoComplete='on' />
          </div>
          <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
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

            </button>
            <button className="social-button apple">

            </button>
            <button className="social-button twitter">

            </button>
          </div>
        <span className="agreement text-center"><a href="#">Learn user licence agreement</a></span>
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