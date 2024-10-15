import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import { registerValidation } from "../validations/validation";
import toast from "react-hot-toast";

// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { auth } from '../component/Firebase/Setup';
const host = "http://localhost:5000";

const Signup = (props) => {
  // const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setValue(localStorage.getItem('email'));
  // }, []);

  // const handleClick = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     const { user } = await signInWithPopup(auth, provider);
  //     const email = user.email;
  //     const password = ''; // You won't get the password from Google authentication
  //     const name = ''; // You might not get the name from Google authentication
  //     // Perform signup with Google email
  //     await signUpWithGoogle(email, name, password);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
      localStorage.setItem("token", json.authtoken);
      navigate("/"); // Redirect to home page after successful sign-up
      toast.success("Account Created Successfully!");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
      toast.error("Account not created!");
    }
  };

  // const [credentials, setCredentials] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   cpassword: "",
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerValidation.validate(
        { name, email, password, cpassword },
        { abortEarly: false }
      );
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
        // newErrors[err.path] = err.errors[0];
      });

      setErrors(newErrors);
      return;
    }

    // const { name, email, password, cpassword } = credentials;

    // Perform signup with email and password
    await signUpWithGoogle(email, name, password);
  };

  // const onChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };

  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-white p-4">
  //     <div className='w-full max-w-full sm:max-w-md shadow-lg border border-blue-100 '>
  //       <div className='bg-blue-50 p-6 flex justify-center w-full'>
  //         <User className="text-blue-600 w-12 h-12"/>
  //       </div>
  //       <div className="p-6">
  //         <h2 className="text-2xl font-bold text-center text-blue-600">Create An Account</h2>
  //       </div>
  //       <div className='p-3'>
  //         <form onSubmit={handleSubmit}>
  //           <div className='space-y-4'>
  //           <div className="space-y-2">
  //             <label htmlFor="name" className="text-md leading-none font-medium text-blue-600">Full Name</label>
  //             <div className='relative'>
  //               <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"/>
  //             <input
  //              type="text"
  //              className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all
  //              duration-200 flex h-10 w-full rounded-md border px-10 py-2
  //              text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2"
  //              onChange={onChange} id="name"
  //              placeholder='Enter Your Full Name'
  //              name="name"
  //              aria-describedby="emailHelp"
  //              autoComplete='on'
  //              required />
  //              </div>
  //           </div>
  //           <div className="space-y-2">
  //             <label
  //             htmlFor="email"
  //             className="text-md leading-none font-medium text-blue-600">
  //               Email
  //             </label>
  //             <div className='relative'>
  //               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />

  //             <input
  //             type="email"
  //             className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all
  //             duration-200 flex h-10 w-full rounded-md border px-10 py-2
  //             text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2"
  //             onChange={onChange}
  //             id="email"
  //             name="email"
  //             placeholder='Enter Your Email'
  //             aria-describedby="emailHelp"
  //             autoComplete='on'
  //             required />
  //             </div>
  //           </div>

  //           <div className="space-y-2">
  //             <label
  //             htmlFor="password"
  //             className="text-md text-blue-600 font-medium">
  //               Password
  //             </label>
  //             <div className='relative'>
  //               <Lock  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"/>
  //             <input
  //             type={showPassword ? "text" : "password"}
  //             className="pl-10 pr-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200
  //             flex h-10 w-full rounded-md border px-10 py-2 text-sm placeholder:text-muted-foreground
  //             focus-visible:outline-none focus-visible:ring-2"
  //             onChange={onChange} id="password" name='password'
  //             placeholder='Enter Your Password'
  //             minLength={5}
  //             autoComplete='on'
  //             required />
  //             <button
  //               type="button"
  //               onClick={() => setShowPassword(!showPassword)}
  //               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
  //             >
  //               {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
  //             </button>
  //             </div>
  //           </div>
  //           <div className="space-y-2">
  //             <label
  //             htmlFor="cpassword"
  //             className="text-md text-blue-600 font-medium">
  //               Confirm Password
  //             </label>
  //             <div className='relative'>
  //             <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
  //             <input
  //              type={showConfirmPassword ? "text" : "password"}
  //             className="pl-10 pr-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200
  //             flex h-10 w-full rounded-md border px-10 py-2 text-sm placeholder:text-muted-foreground
  //             focus-visible:outline-none focus-visible:ring-2"
  //             onChange={onChange} id="cpassword" name='cpassword'
  //             placeholder='Enter Again Your Password'
  //             minLength={5}
  //             autoComplete='on'
  //             required />
  //             <button
  //               type="button"
  //               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
  //               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
  //             >
  //               {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
  //             </button>
  //             </div>
  //             </div>
  //           </div>
  //          <div className='space-y-9'>
  //           <div className="flex items-center mt-4 space-x-2">
  //           <input
  //             id="remember"
  //             type="checkbox"
  //             className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
  //             <label htmlFor="remember" className="text-sm text-blue-600">
  //               I agree to the <Link href="#" className="underline hover:text-blue-800">Terms and conditions</Link>
  //             </label>
  //            </div>
  //            <div className="flex flex-col space-y-4">
  //             <button
  //             type="submit"
  //             className="w-full h-10 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white
  //             transition-colors duration-200 inline-flex items-center justify-center rounded-md
  //             text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2">
  //             Sign Up
  //             </button>
  //             <div className="text-center text-sm">
  //             <span className="text-blue-600">Already have an account? </span>
  //               <Link to="/login" className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
  //                   Log in
  //               </Link>
  //             </div>
  //           </div>
  //           </div>

  //         </form>
  //         {/* {!value ? <p></p> :
  //           <button className="social-button google" onClick={handleClick}>
  //             <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
  //               <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285F4"></path>
  //             </svg>
  //           </button>
  //         } */}
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className="wrapper">
      <div className="banner-signup">
        <h1 className="wel_text">
          WELCOME
          <br />
          BACK !
        </h1>
        <p className="para">
          Please Sign In here
          <br />
          with your some
          <br />
          -- real info
        </p>
      </div>
      <div></div>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1 className="title">Sign Up</h1>
        <span className="title-line"></span>
        <div className="inp">
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            id="name"
            autoComplete="on"
            value={name}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="inp">
          <input
            type="email"
            className="input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            autoComplete="on"
            value={email}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="inp">
          <input
            type={showPassword ? "text" : "password"}
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            minLength={5}
            autoComplete="on"
            value={password}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="inp">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="input"
            placeholder="Confirm Password"
            onChange={(e) => setCPassword(e.target.value)}
            id="cpassword"
            name="cpassword"
            minLength={5}
            autoComplete="on"
            value={cpassword}
          />
          {errors.cpassword && (
            <div className="text-danger">{errors.cpassword}</div>
          )}
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
          <i className="fa-solid fa-lock"></i>
        </div>
        <button className="submit" type="submit" onSubmit={handleSubmit}>
          Sign Up
        </button>
        <p className="footer">
          Have an account ?{" "}
          <Link className="link" to="/login">
            {" "}
            Please Login
          </Link>
        </p>

        <a href="/ForgotPassword">Forgot Password ?</a>
      </form>
      <div></div>
    </div>
  );
};

// Props Validation
Signup.propTypes = {
  showAlert: PropTypes.func,
};

export default Signup;
