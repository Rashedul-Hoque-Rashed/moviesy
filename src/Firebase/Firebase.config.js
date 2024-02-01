// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6JE-Z6vVBMrHbUmqWNOyvAAwWJ0j8i1I",
  authDomain: "moviesy-16e9c.firebaseapp.com",
  projectId: "moviesy-16e9c",
  storageBucket: "moviesy-16e9c.appspot.com",
  messagingSenderId: "771188755473",
  appId: "1:771188755473:web:f56cd98387841d6cc735b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;