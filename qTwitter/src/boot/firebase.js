import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlMbvK_YFmElzjlCkHsWANr4J_jf1Iq3s",
  authDomain: "qwitter-92bde.firebaseapp.com",
  projectId: "qwitter-92bde",
  storageBucket: "qwitter-92bde.appspot.com",
  messagingSenderId: "418111650337",
  appId: "1:418111650337:web:946ec70458167fd6dec160"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
