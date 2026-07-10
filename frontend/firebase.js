import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "food-delivery-b5272.firebaseapp.com",
  projectId: "food-delivery-b5272",
  storageBucket: "food-delivery-b5272.firebasestorage.app",
  messagingSenderId: "985128502569",
  appId: "1:985128502569:web:ce3958040f4779ed11a338",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;