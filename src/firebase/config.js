// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2wbAmQ6_K7IxFmflJ_zyAuNSTYXBgj3E",
  authDomain: "ecommerce-rozada.firebaseapp.com",
  projectId: "ecommerce-rozada",
  storageBucket: "ecommerce-rozada.appspot.com",
  messagingSenderId: "952916118948",
  appId: "1:952916118948:web:1a0081ef1be472ee98c531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore =() => app