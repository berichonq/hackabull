// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJeX-k6d9Jl8YKmdVrxFtSuds9Cibdy0U",
  authDomain: "hackabull-95d5c.firebaseapp.com",
  projectId: "hackabull-95d5c",
  storageBucket: "hackabull-95d5c.appspot.com",
  messagingSenderId: "881727247518",
  appId: "1:881727247518:web:9ea6299ef511bd24ee978f",
  measurementId: "G-8BG4LKJ0V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const usersDB = getFirestore(app);
export const usersCollectionRef = collection(usersDB, "users")
// const analytics = getAnalytics(app);