// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6CWNGjq01FjYMADeGOg_lAYoXBgqCSJQ",
  authDomain: "contact-app-e994a.firebaseapp.com",
  projectId: "contact-app-e994a",
  storageBucket: "contact-app-e994a.appspot.com",
  messagingSenderId: "988273303619",
  appId: "1:988273303619:web:6b372f7521976e94d9b4f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);