// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiZGqgpVvHYlX6ZqmJ5Bs7QBvUplNQM0s",
  authDomain: "bitbox-sms.firebaseapp.com",
  projectId: "bitbox-sms",
  storageBucket: "bitbox-sms.appspot.com",
  messagingSenderId: "663052856919",
  appId: "1:663052856919:web:8e3f3015922c5a54717d12",
  measurementId: "G-WJ940QQMH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);