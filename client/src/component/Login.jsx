import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    <div className='container'>
      <div className='mt-2 p-3 border'>
        <h2>Login into Kaiyuan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder='Enter Your Email' value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" autoComplete='on' />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" placeholder='Enter Your Password' value={credentials.password} onChange={onChange} id="password" name='password' autoComplete='on' />
          </div>
          <button type="submit" className="btn btn-primary" onChange={onChange} onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>

      <div className='my-4 p-2 text-center border'>Don&#39;t have an account?
        <Link to="/Signup"> Sign up</Link>
      </div>
      
    </div>
  )
}

// Props Vadilation
Login.propTypes = {
  showAlert: PropTypes.func,
};

export default Login