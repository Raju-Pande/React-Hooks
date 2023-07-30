// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr6DPg4U-7fAu8Yzo2Xxd0_JVS-T8x800",
  authDomain: "expense-tracker--app.firebaseapp.com",
  projectId: "expense-tracker--app",
  storageBucket: "expense-tracker--app.appspot.com",
  messagingSenderId: "1088078138498",
  appId: "1:1088078138498:web:dd95cebd10e0556f0fb89b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);