import firebase from 'firebase/app';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,

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
