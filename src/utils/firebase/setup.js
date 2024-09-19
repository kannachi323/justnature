// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI2FjOmPLOwm5l3oIz4Ckd7YHeuI2iqfU",
  authDomain: "justnature-16ae0.firebaseapp.com",
  projectId: "justnature-16ae0",
  storageBucket: "justnature-16ae0.appspot.com",
  messagingSenderId: "426469470779",
  appId: "1:426469470779:web:24ca1c6d80d07872c3a21e",
  measurementId: "G-EZTG14N5C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

export { firebaseConfig, auth, analytics };

