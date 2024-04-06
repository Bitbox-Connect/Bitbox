import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/Auth.css'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../component/Firebase/Setup';

const host = "http://localhost:5000";

const Signup = (props) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, provider);
      const email = user.email;
      const password = ''; // You won't get the password from Google authentication
      const name = ''; // You might not get the name from Google authentication
      // Perform signup with Google email
      await signUpWithGoogle(email, name, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signUpWithGoogle = async (email, name, password) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/"); // Redirect to home page after successful sign-up
      props.showAlert("Account Created Successfully", "success")
    } else {
      props.showAlert("Invalid Details", "danger")
    }
  };

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = credentials;

    // Perform signup with email and password
    await signUpWithGoogle(email, name, password);
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="Login signup">
      <div className='container main-bx'>
        <div className="heading">SignUp</div>
        <div className='p-3'>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="label">Name</label>
              <input type="text" className="form-control" onChange={onChange} id="name" placeholder='Enter Your Full Name' name="name" aria-describedby="emailHelp" autoComplete='on' required />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" onChange={onChange} id="email" name="email" placeholder='Enter Your Email' aria-describedby="emailHelp" autoComplete='on' required />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" onChange={onChange} id="password" name='password' placeholder='Enter Your Password' minLength={5} autoComplete='on' required />
            </div>
            <div className="mb-2">
              <label htmlFor="cpassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" onChange={onChange} id="cpassword" name='cpassword' placeholder='Enter Again Your Password' minLength={5} autoComplete='on' required />
            </div>
            <div className="Login-button">
              <button type="submit" className="btn btn-primary">Signup</button>
            </div>
          </form>
          {!value ? <p></p> :
            <button className="social-button google" onClick={handleClick}>
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285F4"></path>
              </svg>
            </button>
          }
        </div>
        <h5 className='text-center'>or</h5>
        <div className='text-center'>
          Have an account?
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  )
}

// Props Validation
Signup.propTypes = {
  showAlert: PropTypes.func,
};

export default Signup;
