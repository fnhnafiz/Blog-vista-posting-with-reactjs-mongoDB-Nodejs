// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfdGF4YPFnXElwrExMg0R9Fp_MhKBlcvM",
  authDomain: "blog-site-website.firebaseapp.com",
  projectId: "blog-site-website",
  storageBucket: "blog-site-website.firebasestorage.app",
  messagingSenderId: "1063147173100",
  appId: "1:1063147173100:web:b4eadfae5122dd67fba1c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
