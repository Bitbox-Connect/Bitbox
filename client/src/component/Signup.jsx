// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const host = "http://localhost:5000";

const Signup = () => {
  // const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  // let history = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name, email, password } = credentials;
  //   const response = await fetch(`${host}/api/auth/createuser`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, password }),
  //   });
  //   const json = await response.json();
  //   console.log(json);
  //   if (json.success) {
  //     // Save the auth token and redirect
  //     localStorage.setItem('token', json.authtoken);
  //     history("/");
  //     props.showAlert("Account Created Successfully", "success")
  //   }
  //   else {
  //     props.showAlert("User Already Exists", "danger")
  //   }
  // }

  // const onChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value })
  // }

  return (
    <div className='container mt-2'>
      <h2 className='my-3'>Create an Account to Open Source</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" autoComplete='on' required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" autoComplete='on' required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' minLength={5} autoComplete='on' required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="text" className="form-control" id="cpassword" name='cpassword' minLength={5} autoComplete='on' required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup