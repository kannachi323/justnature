import { auth } from "./setup";
import { getAuth, setPersistence, browserLocalPersistence, browserSessionPersistence,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from "firebase/auth";


export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      throw error; // Propagate the error for the caller to handle
    });
}

export function loginUser(email, password, remember) {
  const auth = getAuth();

  const persistence = remember ? browserLocalPersistence : browserSessionPersistence;

  return setPersistence(auth, persistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    })
    .then((userCredential) => {
      const user = userCredential.user;
      return user; 
    })
    .catch((error) => {
      console.error("Error logging in user:", error);
      throw error;
    });
}


export function logoutUser() {
  return signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Error logging out user:", error);
      throw error; // Propagate the error for the caller to handle
    });
}