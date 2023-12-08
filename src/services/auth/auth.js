import firebase from 'firebase/app';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAB_2GjivVF-dlwYUZR5Vo6PAsxWbKmrDo",

  authDomain: "expenses-a5aa4.firebaseapp.com",

  projectId: "expenses-a5aa4",

  storageBucket: "expenses-a5aa4.appspot.com",

  messagingSenderId: "671844708889",

  appId: "1:671844708889:web:cab671c0b5e7e7f2907088"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth();

export const onAuthStateChanged = (...props) => {
  return auth.onAuthStateChanged(...props);
};

export const singInWithGoogle = () => {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(GoogleAuthProvider);
};

export const singInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const singUpWithEmailAndPassword = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const sendPasswordResetEmail = email => {
  return auth.sendPasswordResetEmail(email);
};

export const signOut = () => {
  return auth.signOut();
};

export const getCurrentUserToken = () => {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
};

export const getCurrentUserEmail = () => {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
};
