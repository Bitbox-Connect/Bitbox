import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const host = "http://localhost:5000";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // To not Reload after click submit 
    e.preventDefault();

    // Destruture the name, email, password from credentials
    const { name, email, password } = credentials;

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Account Created Successfully", "success")
    }
    else {
      props.showAlert("Invalid Details", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <div className='border p-3'>
        <h2>Create an account into Kaiyuan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">Name</label>
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
          <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>

      <div className='my-3 p-2 text-center border'>
        Have an account?
        <Link to="/Login"> Log in</Link>
      </div>
      
    </div>
  )
}

// Props Vadilation
Signup.propTypes = {
  showAlert: PropTypes.func,
};

export default Signup