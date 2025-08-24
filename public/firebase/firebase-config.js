// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8GJxFT0c9NVhz69KSfNVcytOEHiQuXZk",
  authDomain: "serenestay-6569e.firebaseapp.com",
  databaseURL: "https://serenestay-6569e-default-rtdb.firebaseio.com",
  projectId: "serenestay-6569e",
  storageBucket: "serenestay-6569e.firebasestorage.app",
  messagingSenderId: "846855257072",
  appId: "1:846855257072:web:62dae7fc7b3bc077abbb35",
  measurementId: "G-DDC6D0QBGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
