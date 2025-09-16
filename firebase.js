// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbR_TFeoTI1MlLkpw3O19D6cumsLOh7qI",
  authDomain: "conoceclima.firebaseapp.com",
  projectId: "conoceclima",
  storageBucket: "conoceclima.firebasestorage.app",
  messagingSenderId: "938583730995",
  appId: "1:938583730995:web:cca48821d713d5fa4b2c46",
  measurementId: "G-767FTKBG0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);