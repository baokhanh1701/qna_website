// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_MFh0htafE4YbpFC5mP9gMGoIVlUFuvM",
  authDomain: "livifyqna.firebaseapp.com",
  projectId: "livifyqna",
  storageBucket: "livifyqna.appspot.com",
  messagingSenderId: "254127937535",
  appId: "1:254127937535:web:e08bad678aee8996fab9ca",
  measurementId: "G-ZS9N854JT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;