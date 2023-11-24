import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnKQOWqf1db4vSqIa22G8V8Czx3tdbdzY",
  authDomain: "productscontrol.firebaseapp.com",
  projectId: "productscontrol",
  storageBucket: "productscontrol.appspot.com",
  messagingSenderId: "527377081354",
  appId: "1:527377081354:web:b030af0993eff2af942bf3",
  measurementId: "G-DDRJJTWWL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const database = getDatabase(app);
