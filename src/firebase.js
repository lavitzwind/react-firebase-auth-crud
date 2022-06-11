import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "learning-firebase-25102.firebaseapp.com",
  projectId: "learning-firebase-25102",
  storageBucket: "learning-firebase-25102.appspot.com",
  messagingSenderId: "1038296616426",
  appId: "1:1038296616426:web:6a537cd6cb3b0534ef7693",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
