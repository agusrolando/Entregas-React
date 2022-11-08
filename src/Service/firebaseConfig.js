import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAikxDB2EAHyHmrIl2JywqQiGlBCZJ2apg",
  authDomain: "vh-piscinas.firebaseapp.com",
  projectId: "vh-piscinas",
  storageBucket: "vh-piscinas.appspot.com",
  messagingSenderId: "1072589941079",
  appId: "1:1072589941079:web:045881bb99a199289df612"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);