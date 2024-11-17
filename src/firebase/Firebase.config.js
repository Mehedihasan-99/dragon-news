// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABSEuUbSYdkH1-1jubnHbb6JVaNg-mXHA",
  authDomain: "dragon-news-155ca.firebaseapp.com",
  projectId: "dragon-news-155ca",
  storageBucket: "dragon-news-155ca.firebasestorage.app",
  messagingSenderId: "945844708674",
  appId: "1:945844708674:web:64d5288b1175a2e85594db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;