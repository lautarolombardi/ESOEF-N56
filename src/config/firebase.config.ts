// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCefYchn9XHR-UTfDbx2CoTlS9Zxb0QMgQ",
  authDomain: "esoef-n56.firebaseapp.com",
  projectId: "esoef-n56",
  storageBucket: "esoef-n56.appspot.com",
  messagingSenderId: "298916792040",
  appId: "1:298916792040:web:178cf3260d32988a282b5d",
  measurementId: "G-WSZJ79XRKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
