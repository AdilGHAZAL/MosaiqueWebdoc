// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUMnE3uMe61y8NbS4tX2Nn4PoW8VoGS0U",
  authDomain: "webdoc-a4a03.firebaseapp.com",
  projectId: "webdoc-a4a03",
  storageBucket: "webdoc-a4a03.appspot.com",
  messagingSenderId: "931293814028",
  appId: "1:931293814028:web:5bc01cfec675ae5bf27d29"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP)
export const db=getFirestore(FIREBASE_APP)