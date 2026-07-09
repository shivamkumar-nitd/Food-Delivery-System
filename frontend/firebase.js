// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-e7a66.firebaseapp.com",
  projectId: "vingo-e7a66",
  storageBucket: "vingo-e7a66.firebasestorage.app",
  messagingSenderId: "164112375079",
  appId: "1:164112375079:web:b3f8ed6aea1597f962dd02",
  measurementId: "G-1LK0DE35V5"
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}

