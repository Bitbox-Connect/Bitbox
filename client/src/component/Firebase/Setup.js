// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDir0QNwcFvX-R0ZJ2TwEkp_o0weA9CL6w",
  authDomain: "bitbox-authentication-1.firebaseapp.com",
  projectId: "bitbox-authentication-1",
  storageBucket: "bitbox-authentication-1.appspot.com",
  messagingSenderId: "103312708002",
  appId: "1:103312708002:web:002fde0518bc0304e022fb",
  measurementId: "G-17QXQ0WCRJ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app)
// const provider=new googleAuthProvider()
// export {auth,provider}
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };