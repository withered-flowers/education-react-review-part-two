// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // GANTI DI SINI yah !
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const githubProvider = new GithubAuthProvider();
githubProvider.addScope("repo");

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");
// googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const registerWithEmailAndPass = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

const signInWithEmailAndPass = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

const signInWithGithub = async () => {
  try {
    const userCredential = await signInWithPopup(auth, githubProvider);
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

const signOutFromEverywhere = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerWithEmailAndPass,
  signInWithEmailAndPass,
  signInWithGithub,
  signInWithGoogle,
  signOutFromEverywhere,
};
