// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-new-50d30.firebaseapp.com",
  projectId: "mern-estate-new-50d30",
  storageBucket: "mern-estate-new-50d30.appspot.com",
  messagingSenderId: "484444609218",
  appId: "1:484444609218:web:56980546e072a7a5d4b95b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);