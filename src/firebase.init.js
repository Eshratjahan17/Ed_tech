// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGux1EyC5IZT7WTCgVuMqcYupZEZd_vJE",
  authDomain: "ed-tech-8c83e.firebaseapp.com",
  projectId: "ed-tech-8c83e",
  storageBucket: "ed-tech-8c83e.appspot.com",
  messagingSenderId: "82505232781",
  appId: "1:82505232781:web:52fb514706568f8726cdc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
