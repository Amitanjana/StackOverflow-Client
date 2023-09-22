// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: "stackoverflow-43219.firebaseapp.com",
  projectId: "stackoverflow-43219",
  storageBucket: "stackoverflow-43219.appspot.com",
  messagingSenderId:process.env.REACT_APP_MSID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-5161WNFPYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider= new GoogleAuthProvider();
const auth = getAuth();

export {app , auth , provider};
