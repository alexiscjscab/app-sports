// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb6omlYKmYYEnbOfK8VmuyOQTyXUzCLVg",
  authDomain: "react-sports-cd2a8.firebaseapp.com",
  projectId: "react-sports-cd2a8",
  storageBucket: "react-sports-cd2a8.appspot.com",
  messagingSenderId: "753090424911",
  appId: "1:753090424911:web:5cdf8328972fd4dbd93a3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;