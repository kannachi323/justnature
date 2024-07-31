// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";


const firebaseConfig = {
  apiKey: "AIzaSyCfM5BiesAiej5TtH2d9y51LCrY4UiCnt4",
  authDomain: "justnature-3c4f5.firebaseapp.com",
  projectId: "justnature-3c4f5",
  storageBucket: "justnature-3c4f5.appspot.com",
  messagingSenderId: "392155365500",
  appId: "1:392155365500:web:e3e5469a8b779ae01c49f9",
  measurementId: "G-LH0X0FGGL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };