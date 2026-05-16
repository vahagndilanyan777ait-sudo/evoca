// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm_kjOhO0qZHKD3p08ywhN94GSp2cbR7E",
  authDomain: "evoca-35d89.firebaseapp.com",
  databaseURL: "https://evoca-35d89-default-rtdb.firebaseio.com",
  projectId: "evoca-35d89",
  storageBucket: "evoca-35d89.firebasestorage.app",
  messagingSenderId: "492480883674",
  appId: "1:492480883674:web:49a7ab33830c3868d66ee3",
  measurementId: "G-H0QEXHBL4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);