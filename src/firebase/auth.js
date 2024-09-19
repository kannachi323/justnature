import { auth } from "./setup";
import { getAuth, setPersistence, browserLocalPersistence, browserSessionPersistence,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";

export function updateUserProfile(config) {
  return updateProfile(auth.currentUser, config)
    .then(() => {
      auth.currentUser.reload();
      // Logging system for successful profile update
      console.log("User profile updated successfully.");
    })
    .catch((error) => {
      console.error("Error updating user profile:", error);
      throw error; // Propagate error to the caller
    });
}

export function registerUser(email, password, username) {
  const config = { displayName: username };
  
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User registered successfully.");
      return updateUserProfile(config);  // Wait for profile update
    })
    .then(() => {
      // Logging system for registration + profile update completion
      console.log("User registration and profile update complete.");
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