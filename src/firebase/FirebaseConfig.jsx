// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ6X3sY8bai4hL2sEsPeOkX4Vklwwn0wg",
  authDomain: "myproject-6f972.firebaseapp.com",
  projectId: "myproject-6f972",
  storageBucket: "myproject-6f972.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "397955802954",
  appId: "1:397955802954:web:2c1a88e93b692b3cbf43b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

// Export the initialized services
export { fireDB, auth };
