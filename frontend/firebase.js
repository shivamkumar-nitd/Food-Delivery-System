import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-e7a66.firebaseapp.com",
  projectId: "vingo-e7a66",
  storageBucket: "vingo-e7a66.firebasestorage.app",
  messagingSenderId: "164112375079",
  appId: "1:164112375079:web:b3f8ed6aea1597f962dd02",
  measurementId: "G-1LK0DE35V5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Debug
console.log("Firebase Config:", firebaseConfig);
console.log("Origin:", window.location.origin);
console.log("Auth Domain:", auth.app.options.authDomain);
console.log("Project ID:", auth.app.options.projectId);

export { app, auth };