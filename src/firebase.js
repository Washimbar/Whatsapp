import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEMKoWV8Z6THNbFzubDcuC-v-zCd8aYCg",
  authDomain: "whats-app-29015.firebaseapp.com",
  projectId: "whats-app-29015",
  storageBucket: "whats-app-29015.appspot.com",
  messagingSenderId: "106457459438",
  appId: "1:106457459438:web:7a89350deacd14ad1e61ff",
  measurementId: "G-5S8L7ZB6DP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
