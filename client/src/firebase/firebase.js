// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7LlJ4Wg935AYnzdXAgEpd8CT4QZyFp9M",
    authDomain: "https://bitbox-in.netlify.app",
    projectId: "bitbox-3de42",
    storageBucket: "bitbox-3de42.appspot.com",
    messagingSenderId: "70105959999",
    appId: "1:70105959999:web:44ade913541ab0ce5ff28a",
    measurementId: "G-BWQPDLFT3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };