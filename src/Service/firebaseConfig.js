// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAikxDB2EAHyHmrIl2JywqQiGlBCZJ2apg",
  authDomain: "vh-piscinas.firebaseapp.com",
  projectId: "vh-piscinas",
  storageBucket: "vh-piscinas.appspot.com",
  messagingSenderId: "1072589941079",
  appId: "1:1072589941079:web:045881bb99a199289df612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);