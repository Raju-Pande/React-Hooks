// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARyeR-ZoG9USmNJqb0OKRX3ALosqtie4Y",
  authDomain: "blogging-app-1eeac.firebaseapp.com",
  projectId: "blogging-app-1eeac",
  storageBucket: "blogging-app-1eeac.appspot.com",
  messagingSenderId: "426873866519",
  appId: "1:426873866519:web:797322346d47209b0b0f52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)