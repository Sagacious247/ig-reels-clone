import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2rvkheSfeI8h9S-jZ6eoHZyC5ljucVJU",
  authDomain: "ig-reels-clone-13d5b.firebaseapp.com",
  projectId: "ig-reels-clone-13d5b",
  storageBucket: "ig-reels-clone-13d5b.appspot.com",
  messagingSenderId: "516102205520",
  appId: "1:516102205520:web:7a533293ed5f12facc2155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();