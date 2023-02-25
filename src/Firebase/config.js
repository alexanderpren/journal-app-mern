import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
console.log("🚀 ~ file: config.js:5 ~ API_KEY", API_KEY)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "react-cursos-journal-b4712.firebaseapp.com",
  projectId: "react-cursos-journal-b4712",
  storageBucket: "react-cursos-journal-b4712.appspot.com",
  messagingSenderId: "852515517759",
  appId: "1:852515517759:web:dc763f48f4de8e2125cf8a"
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
