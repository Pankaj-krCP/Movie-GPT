// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVFbPBHEpN0uZVE5G8oTN1ox150zt5F2w",
  authDomain: "netflixgpt-5e9a3.firebaseapp.com",
  projectId: "netflixgpt-5e9a3",
  storageBucket: "netflixgpt-5e9a3.appspot.com",
  messagingSenderId: "702411531120",
  appId: "1:702411531120:web:05fa7e1fe0d395d8fae5b5",
  measurementId: "G-WQYX70JDKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
