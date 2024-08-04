import { app } from './firebaseConfig.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const auth = getAuth(app);

export function registerUser(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  console.log(email);
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User registered:', user);
    })
    .catch((error) => {
      console.error('Error registering user:', error.message);
    });
}


function signUpWithEmailPassword() {
  var email = "test@example.com";
  var password = "hunter2";
  // [START auth_signup_password]
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_signup_password]
}