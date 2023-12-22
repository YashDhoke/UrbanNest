// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "urbannest-f01c0.firebaseapp.com",
  projectId: "urbannest-f01c0",
  storageBucket: "urbannest-f01c0.appspot.com",
  messagingSenderId: "770874433087",
  appId: "1:770874433087:web:6268eed480bb4e1612628a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);