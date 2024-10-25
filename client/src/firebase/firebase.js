// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4jZOLTES2JBLpGGYGmkxA8IGbB-vSls4",
    authDomain: "gssocbitbox.firebaseapp.com",
    projectId: "gssocbitbox",
    storageBucket: "gssocbitbox.appspot.com",
    messagingSenderId: "1007470403116",
    appId: "1:1007470403116:web:0ca732a35153070c19fb89",
    measurementId: "G-TYDYZZ7V1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };